# Research Analyst Terms Acceptance Portal

A small Next.js App Router application for recording a client's electronic acceptance of a Research Analyst's Terms & Conditions, generating a server-side PDF, and emailing it to the Research Analyst. It is designed to deploy directly to Vercel with no database, accounts, tracking, paid APIs, or download link in the client flow.

The approved Mudit Goyal Terms & Conditions Agreement is held in `content/terms-and-conditions.ts` as the single source used by both the website reader and PDF generator. Update it only from a newly approved agreement, and manually increment the agreement version when doing so.

This application records electronic acceptance. It does not implement Aadhaar eSign, Aadhaar OTP authentication, DSC signing, or any third-party certified electronic-signature mechanism.

## Run locally

1. Install Node.js 18.17 or later.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local` and set the values.
4. Run `npm run dev` and open `http://localhost:3000`.
5. Run `npm run build` before deployment.

## Environment variables

| Variable | Purpose |
| --- | --- |
| `SMTP_USER` | Gmail address used to send notification messages |
| `SMTP_APP_PASSWORD` | Google App Password for that Gmail account |
| `RA_NOTIFICATION_EMAIL` | Inbox that receives PDF acceptance reports |
| `RA_NAME` | Research Analyst / business name printed in the site and PDF |
| `RA_SEBI_REGISTRATION_NUMBER` | Registration number printed in the site and PDF |
| `SMTP_HOST` | Optional; defaults to `smtp.gmail.com` |
| `SMTP_PORT` | Optional; defaults to `465` |

For Gmail SMTP, enable 2-Step Verification on the sending Google account and create an App Password where Google supports App Passwords for that account. Do not use the ordinary Gmail password. Never put these values in source code or any `NEXT_PUBLIC_*` variable.

## How it works

The client must scroll through the agreement and check consent before the modal is available. The API route validates and normalizes name/mobile server-side, creates a cryptographically random ID, records the server timestamp in IST, builds a paginated PDF using `pdf-lib`, then sends it as a Nodemailer Gmail SMTP attachment. Success is returned only after the SMTP transport accepts the message.

The PDF uses a reusable page layout, wrapping and page-break helpers. Every page has the client's name, mobile, acceptance timestamp, acceptance ID, and `Page X of Y` footer. The bundled open-source Noto Sans fonts are embedded as PDF subsets, so Unicode content including `₹` is retained.

No submitted client details are placed in URLs, localStorage, a database, cookies, or analytics. They are only held during the request and in the delivered email/PDF.

## Customisation

- Change default RA contact and brand configuration in `lib/constants.ts`.
- At runtime, `RA_NAME` and `RA_SEBI_REGISTRATION_NUMBER` override the displayed defaults.
- Replace `/public/logo.png` if you choose to add a brand mark; no logo is required.
- Update `agreementVersion` in `lib/constants.ts` whenever the agreement is revised.
- When an agreement revision is approved, replace `content/terms-and-conditions.ts` with the exact signed-off agreement. Keep technical consent wording factual; do not claim Aadhaar authentication or digital signing unless actually implemented.

## Vercel deployment

1. Push this directory to your Git provider and import it into Vercel.
2. In **Project Settings → Environment Variables**, add every variable listed above for the desired environments.
3. Deploy. The default `*.vercel.app` domain is sufficient.
4. Submit one controlled test acceptance and confirm that the recipient receives a complete, multi-page PDF attachment.

## Abuse-protection note

The API has a small in-memory per-IP request limiter. This provides basic protection on a warm instance only; Vercel serverless instances are ephemeral and it is not global durable rate limiting. No stronger no-cost global control is implied.
