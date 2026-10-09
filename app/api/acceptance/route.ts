import { NextRequest, NextResponse } from "next/server";
import { agreementIsPlaceholder } from "@/content/terms-and-conditions";
import { MAX_REQUESTS_PER_WINDOW, RA_CONFIG, RATE_LIMIT_WINDOW_MS } from "@/lib/constants";
import { sendAcceptanceMail } from "@/lib/mail";
import { createAcceptancePdf } from "@/lib/pdf";
import { createAcceptanceId, formatIndiaDate } from "@/lib/utils";
import { validateAcceptance } from "@/lib/validation";
import type { AcceptanceRecord } from "@/types/acceptance";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const attempts = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(request: NextRequest): boolean {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const now = Date.now();
  const current = attempts.get(ip);
  if (!current || current.resetAt <= now) { attempts.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS }); return false; }
  current.count += 1;
  return current.count > MAX_REQUESTS_PER_WINDOW;
}

export async function POST(request: NextRequest) {
  try {
    if (isRateLimited(request)) return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
    if (agreementIsPlaceholder) return NextResponse.json({ error: "The approved agreement has not yet been configured." }, { status: 503 });
    const validation = validateAcceptance(await request.json());
    if ("error" in validation) return NextResponse.json({ error: validation.error }, { status: 400 });
    const acceptedAt = new Date();
    const record: AcceptanceRecord = {
      ...validation,
      acceptanceId: createAcceptanceId(acceptedAt),
      acceptedAt,
      acceptedAtIso: acceptedAt.toISOString(),
      acceptedAtFormatted: formatIndiaDate(acceptedAt),
      agreementVersion: RA_CONFIG.agreementVersion
    };
    let pdf: Uint8Array;
    try { pdf = await createAcceptancePdf(record); }
    catch (error) { console.error("Acceptance PDF generation failed", error instanceof Error ? error.message : "unknown error"); return NextResponse.json({ error: "We couldn't generate your acceptance report. Please try again." }, { status: 500 }); }
    try { await sendAcceptanceMail(record, pdf); }
    catch (error) { console.error("Acceptance email delivery failed", error instanceof Error ? error.message : "unknown error"); return NextResponse.json({ error: "Your acceptance report could not be sent. Please try again." }, { status: 502 }); }
    return NextResponse.json({ acceptanceId: record.acceptanceId, acceptedAt: record.acceptedAtIso, acceptedAtFormatted: record.acceptedAtFormatted });
  } catch (error) {
    console.error("Acceptance request failed", error instanceof Error ? error.message : "unknown error");
    return NextResponse.json({ error: "We couldn't process your acceptance. Please try again." }, { status: 500 });
  }
}
