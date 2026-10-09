// Keep validation deliberately conservative and use no locale-specific name assumptions.
const namePattern = /^[^<>0-9][^<>0-9]*$/;

export function sanitizeText(value: unknown): string {
  return typeof value === "string" ? value.replace(/[<>]/g, "").replace(/\s+/g, " ").trim() : "";
}

export function normalizeIndianMobile(value: unknown): string | null {
  const raw = typeof value === "string" ? value.trim() : "";
  const digits = raw.replace(/\D/g, "");
  const number = digits.startsWith("91") && digits.length === 12 ? digits.slice(2) : digits;
  return /^[6-9]\d{9}$/.test(number) ? `+91 ${number.slice(0, 5)} ${number.slice(5)}` : null;
}

export function validateAcceptance(input: unknown): { fullName: string; mobile: string } | { error: string } {
  if (!input || typeof input !== "object") return { error: "Please provide your name and mobile number." };
  const data = input as Record<string, unknown>;
  const fullName = sanitizeText(data.fullName);
  const mobile = normalizeIndianMobile(data.mobile);
  if (fullName.length < 2 || fullName.length > 100 || !namePattern.test(fullName)) {
    return { error: "Please enter a valid full name." };
  }
  if (!mobile) return { error: "Please enter a valid 10-digit Indian mobile number." };
  if (data.consent !== true) return { error: "Please confirm your acceptance before continuing." };
  return { fullName, mobile };
}
