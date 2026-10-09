import { ACCEPTANCE_PREFIX, TIME_ZONE } from "@/lib/constants";

export function formatIndiaDate(date: Date): string {
  return new Intl.DateTimeFormat("en-IN", {
    timeZone: TIME_ZONE,
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZoneName: "short"
  }).format(date);
}

export function createAcceptanceId(date: Date): string {
  const parts = new Intl.DateTimeFormat("en-IN", {
    timeZone: TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).formatToParts(date);
  const field = (kind: Intl.DateTimeFormatPartTypes) => parts.find((part) => part.type === kind)?.value || "";
  const day = `${field("year")}${field("month")}${field("day")}`;
  const suffix = crypto.randomUUID().replaceAll("-", "").slice(0, 8).toUpperCase();
  return `${ACCEPTANCE_PREFIX}-${day}-${suffix}`;
}

export function safeFilenameName(name: string): string {
  return name.trim().replace(/[^a-zA-Z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 60) || "client";
}
