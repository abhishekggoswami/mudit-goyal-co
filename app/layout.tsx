import type { Metadata } from "next";
import { RA_CONFIG } from "@/lib/constants";
import "./globals.css";

export const metadata: Metadata = {
  title: RA_CONFIG.siteName,
  description: `${RA_CONFIG.name} Research Analyst Terms & Conditions electronic acceptance portal`,
  robots: { index: false, follow: false }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
