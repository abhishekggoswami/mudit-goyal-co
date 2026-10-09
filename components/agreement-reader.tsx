"use client";

import { ChangeEvent, useRef, useState } from "react";
import Image from "next/image";
import { AlertTriangle, ChevronDown, FileText } from "lucide-react";
import type { AgreementBlock } from "@/content/terms-and-conditions";

type Props = { onContinue: () => void; blocks: AgreementBlock[]; agreementIsPlaceholder: boolean };

export function AgreementReader({ onContinue, blocks, agreementIsPlaceholder }: Props) {
  const [reachedEnd, setReachedEnd] = useState(false); const [checked, setChecked] = useState(false); const scroller = useRef<HTMLDivElement>(null);
  function observeScroll() {
    const element = scroller.current; if (!element) return;
    if (element.scrollTop + element.clientHeight >= element.scrollHeight * 0.95) setReachedEnd(true);
  }
  function checkboxChange(event: ChangeEvent<HTMLInputElement>) { setChecked(event.target.checked); }
  const enabled = reachedEnd && checked && !agreementIsPlaceholder;
  return <section id="agreement" className="scroll-mt-6 bg-paper px-5 py-14 sm:px-8 sm:py-20"><div className="mx-auto max-w-4xl">
    <div className="mb-6 flex items-start gap-3"><div className="rounded-md bg-teal-50 p-2 text-accent"><FileText className="h-5 w-5" /></div><div><p className="text-sm font-bold uppercase tracking-[0.14em] text-accent">Agreement Reader</p><h2 className="mt-1 text-3xl font-semibold tracking-tight text-ink">Terms &amp; Conditions Agreement</h2><p className="mt-2 text-sm text-slate-600">Please read the complete agreement before accepting.</p></div></div>
    {agreementIsPlaceholder && <div role="alert" className="mb-5 flex gap-3 rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm leading-6 text-amber-900"><AlertTriangle className="mt-0.5 h-5 w-5 shrink-0" /><span><strong>Agreement content required.</strong> The source agreement has not been provided. Acceptance is intentionally disabled until the complete approved text replaces the placeholder in <code>content/terms-and-conditions.ts</code>.</span></div>}
    <article ref={scroller} onScroll={observeScroll} tabIndex={0} aria-label="Terms and Conditions Agreement" className="document-copy max-h-[62vh] overflow-y-auto rounded-xl border border-slate-200 bg-white px-5 py-7 text-[15px] leading-7 text-slate-700 shadow-soft sm:px-10 sm:py-10">
      {blocks.map((block, index) => {
        if (block.type === "heading") return block.level === 3 ? <h3 key={index}>{block.text}</h3> : <h2 key={index}>{block.text}</h2>;
        if (block.type === "listItem") return <div key={index} role="listitem" className="my-2 flex gap-2" style={{ marginLeft: `${(block.indent || 0) * 18}px` }}><span className="shrink-0 font-semibold text-slate-800">{block.marker}</span><span>{block.text}</span></div>;
        if (block.type === "signature") return <div key={index} className="my-5 flex items-end gap-3 text-slate-700"><span>{block.label}</span><Image src={block.src} alt={block.alt} width={240} height={81} priority className="h-auto w-52 object-contain object-left" /></div>;
        return <p key={index}>{block.text}</p>;
      })}
      <div className="mt-8 flex justify-center text-slate-400" aria-hidden><ChevronDown className="h-5 w-5" /></div>
    </article>
    <div className="mt-5 rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
      <p className={`mb-4 text-sm font-medium ${reachedEnd ? "text-emerald-700" : "text-slate-600"}`}>{reachedEnd ? "Agreement read — you may confirm your consent below." : "Scroll to the end of the agreement to enable consent controls."}</p>
      <label className="flex cursor-pointer items-start gap-3 text-sm leading-6 text-slate-700"><input type="checkbox" checked={checked} onChange={checkboxChange} disabled={!reachedEnd || agreementIsPlaceholder} className="mt-1 h-4 w-4 accent-accent disabled:cursor-not-allowed" /><span>I confirm that I have read and understood the Terms &amp; Conditions and agree to be bound by them.</span></label>
      <button type="button" disabled={!enabled} onClick={onContinue} className="mt-5 w-full rounded-md bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-300 sm:w-auto">Accept &amp; Continue</button>
    </div>
  </div></section>;
}
