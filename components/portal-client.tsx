"use client";

import { useState } from "react";
import { AcceptanceModal } from "@/components/acceptance-modal";
import { AgreementReader } from "@/components/agreement-reader";
import { SuccessDialog } from "@/components/success-dialog";
import type { AgreementBlock } from "@/content/terms-and-conditions";
import type { AcceptanceResponse } from "@/types/acceptance";

export function PortalClient({ blocks, agreementIsPlaceholder }: { blocks: AgreementBlock[]; agreementIsPlaceholder: boolean }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [success, setSuccess] = useState<{ data: AcceptanceResponse; firstName: string } | null>(null);
  return <>{success ? <SuccessDialog {...success} /> : <AgreementReader blocks={blocks} agreementIsPlaceholder={agreementIsPlaceholder} onContinue={() => setModalOpen(true)} />}<AcceptanceModal open={modalOpen} onClose={() => setModalOpen(false)} onSuccess={(data, firstName) => { setModalOpen(false); setSuccess({ data, firstName }); window.scrollTo({ top: 0, behavior: "smooth" }); }} /></>;
}
