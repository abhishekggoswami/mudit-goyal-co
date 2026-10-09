import { BadgeCheck, FileCheck2, LockKeyhole } from "lucide-react";
import { RA_CONFIG } from "@/lib/constants";

export function Hero() {
  return <header className="border-b border-slate-200 bg-white">
    <div className="mx-auto max-w-6xl px-5 py-5 sm:px-8">
      <div className="flex items-center justify-between text-sm font-semibold text-ink"><span>{RA_CONFIG.name}</span><span className="hidden text-slate-500 sm:inline">{RA_CONFIG.siteName}</span></div>
      <div className="max-w-3xl py-16 sm:py-24">
        <p className="mb-5 text-sm font-bold uppercase tracking-[0.16em] text-accent">Research Analyst</p>
        <h1 className="text-4xl font-semibold tracking-tight text-ink sm:text-6xl">Terms &amp; Conditions Agreement</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">Please review the Research Analyst Terms &amp; Conditions carefully before providing your consent.</p>
        <a href="#agreement" className="mt-8 inline-flex rounded-md bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">Read Terms &amp; Conditions</a>
      </div>
      <div className="grid gap-3 border-t border-slate-200 py-6 text-sm text-slate-600 sm:grid-cols-3">
        <div className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-accent" aria-hidden />SEBI Registered Research Analyst</div>
        <div className="flex items-center gap-2"><FileCheck2 className="h-4 w-4 text-accent" aria-hidden />Reg. No. {RA_CONFIG.sebiRegistrationNumber}</div>
        <div className="flex items-center gap-2"><LockKeyhole className="h-4 w-4 text-accent" aria-hidden />Electronic acceptance record</div>
      </div>
    </div>
  </header>;
}
