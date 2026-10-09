"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { LoaderCircle, X } from "lucide-react";
import type { AcceptanceResponse } from "@/types/acceptance";

type Props = { open: boolean; onClose: () => void; onSuccess: (data: AcceptanceResponse, firstName: string) => void };

export function AcceptanceModal({ open, onClose, onSuccess }: Props) {
  const [name, setName] = useState(""); const [mobile, setMobile] = useState(""); const [consent, setConsent] = useState(false);
  const [error, setError] = useState(""); const [loading, setLoading] = useState(false); const nameRef = useRef<HTMLInputElement>(null);
  useEffect(() => { if (open) { setError(""); setTimeout(() => nameRef.current?.focus(), 0); } }, [open]);
  useEffect(() => { const handler = (event: KeyboardEvent) => { if (event.key === "Escape" && !loading) onClose(); }; if (open) window.addEventListener("keydown", handler); return () => window.removeEventListener("keydown", handler); }, [open, loading, onClose]);
  if (!open) return null;
  async function submit(event: FormEvent) {
    event.preventDefault(); if (loading) return; setError(""); setLoading(true);
    try {
      const response = await fetch("/api/acceptance", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ fullName: name, mobile, consent }) });
      const data = await response.json() as AcceptanceResponse & { error?: string };
      if (!response.ok) throw new Error(data.error || "We couldn't process your acceptance. Please try again.");
      onSuccess(data, name.trim().split(/\s+/)[0] || "there");
    } catch (caught) { setError(caught instanceof Error ? caught.message : "We couldn't process your acceptance. Please try again."); }
    finally { setLoading(false); }
  }
  return <div className="fixed inset-0 z-50 flex items-end bg-slate-950/45 p-0 sm:items-center sm:justify-center sm:p-6" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget && !loading) onClose(); }}>
    <section role="dialog" aria-modal="true" aria-labelledby="acceptance-title" className="max-h-[92vh] w-full overflow-y-auto rounded-t-xl bg-white p-6 shadow-2xl sm:max-w-lg sm:rounded-xl sm:p-8">
      <div className="flex items-start justify-between gap-6"><div><h2 id="acceptance-title" className="text-2xl font-semibold text-ink">Complete Your Acceptance</h2><p className="mt-2 text-sm leading-6 text-slate-600">Your details are collected solely for recording your acceptance of this agreement and providing the acceptance record to the Research Analyst.</p></div><button type="button" aria-label="Close dialog" disabled={loading} onClick={onClose} className="rounded p-1 text-slate-500 hover:bg-slate-100"><X className="h-5 w-5" /></button></div>
      <form onSubmit={submit} className="mt-7 space-y-5" noValidate>
        <div><label htmlFor="fullName" className="mb-1.5 block text-sm font-semibold text-slate-700">Full Name</label><input ref={nameRef} id="fullName" value={name} onChange={(e) => setName(e.target.value)} required minLength={2} maxLength={100} autoComplete="name" className="w-full rounded-md border border-slate-300 px-3 py-2.5 text-ink" placeholder="Enter your full name" /></div>
        <div><label htmlFor="mobile" className="mb-1.5 block text-sm font-semibold text-slate-700">Mobile Number</label><input id="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} required inputMode="tel" autoComplete="tel" className="w-full rounded-md border border-slate-300 px-3 py-2.5 text-ink" placeholder="+91 98765 43210" /><p className="mt-1.5 text-xs text-slate-500">Indian mobile number; +91 is accepted.</p></div>
        <label className="flex cursor-pointer items-start gap-3 rounded-md border border-slate-200 bg-slate-50 p-3 text-sm leading-5 text-slate-700"><input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} required className="mt-0.5 h-4 w-4 accent-accent" /><span>By submitting this form, I confirm that I have read, understood and accepted the Research Analyst Terms &amp; Conditions displayed above.</span></label>
        {error && <p role="alert" className="rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-800">{error}</p>}
        <button type="submit" disabled={loading} className="flex w-full items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-800 disabled:cursor-not-allowed disabled:opacity-60">{loading && <LoaderCircle className="h-4 w-4 animate-spin" />} {loading ? "Preparing your acceptance report..." : "Generate & Send Acceptance Report"}</button>
      </form>
    </section>
  </div>;
}
