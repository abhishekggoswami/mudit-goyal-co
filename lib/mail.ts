import nodemailer from "nodemailer";
import { RA_CONFIG } from "@/lib/constants";
import type { AcceptanceRecord } from "@/types/acceptance";
import { safeFilenameName } from "@/lib/utils";

export async function sendAcceptanceMail(record: AcceptanceRecord, pdf: Uint8Array) {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_APP_PASSWORD;
  const recipient = process.env.RA_NOTIFICATION_EMAIL;
  if (!user || !pass || !recipient) throw new Error("Email delivery is not configured.");
  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT || 465),
    secure: Number(process.env.SMTP_PORT || 465) === 465,
    auth: { user, pass }
  });
  await transport.sendMail({
    from: `Terms Acceptance Portal <${user}>`, to: recipient,
    subject: `New Terms Acceptance – ${record.fullName} – ${record.acceptanceId}`,
    text: `Hello,\n\nA client has electronically accepted the Research Analyst Terms & Conditions.\n\nClient Details\n\nName: ${record.fullName}\nMobile: ${record.mobile}\nAccepted On: ${record.acceptedAtFormatted}\nAcceptance ID: ${record.acceptanceId}\nAgreement Version: ${record.agreementVersion}\n\nThe complete acceptance report containing the Terms & Conditions and recorded client acceptance details is attached to this email for your records.\n\nRegards,\nTerms Acceptance Portal`,
    attachments: [{ filename: `Terms-Acceptance-${safeFilenameName(record.fullName)}-${record.acceptanceId}.pdf`, content: Buffer.from(pdf), contentType: "application/pdf" }]
  });
}
