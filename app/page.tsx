import { Hero } from "@/components/hero";
import { PortalClient } from "@/components/portal-client";
import { agreementBlocks, agreementIsPlaceholder } from "@/content/terms-and-conditions";

export default function Home() {
  return <main><Hero /><PortalClient blocks={agreementBlocks} agreementIsPlaceholder={agreementIsPlaceholder} /><footer className="border-t border-slate-200 bg-white px-5 py-7 text-center text-xs leading-5 text-slate-500">This application records electronic acceptance. It does not implement Aadhaar eSign, Aadhaar OTP authentication, DSC signing, or any third-party certified electronic-signature mechanism.</footer></main>;
}
