export type AgreementBlock =
  | { type: "heading"; text: string; level?: 2 | 3 }
  | { type: "paragraph"; text: string }
  | { type: "listItem"; marker: string; indent?: number; text: string }
  | { type: "signature"; label: string; sourceText: string; src: string; alt: string };

/**
 * Authoritative agreement source: Mudit_Goyal_Terms_and_Conditions_Agreement.docx.
 * The content below is an exact text transcription; its blocks drive both the reader and PDF.
 */
export const agreementBlocks: AgreementBlock[] = [
  {
    "type": "heading",
    "level": 2,
    "text": "TERMS AND CONDITIONS AGREEMENT"
  },
  {
    "type": "paragraph",
    "text": "**The client is requested to read the terms and conditions of the research services offered including rights and obligations. **"
  },
  {
    "type": "paragraph",
    "text": "This Agreement is entered into by and between:"
  },
  {
    "type": "paragraph",
    "text": "Mudit Goyal, an Individual Research Analyst operating under the trade name Mudit Goyal & Co (hereinafter referred to as the \"Research Entity/ Research Analyst/RA\"), having his registered office at Flat No-801, Tower J, Plot No-GC-03K/GH-03, VVIP Homes, Sector-16C, Noida, Gautam Buddha Nagar, Uttar Pradesh - 201301, and duly registered under SEBI (Research Analyst) Regulations, 2014 under Registration Number INH000013022 (which expression shall, unless repugnant to the context or meaning thereof, be deemed to mean and include its successors and assigns) of the FIRST PART,"
  },
  {
    "type": "paragraph",
    "text": "AND"
  },
  {
    "type": "paragraph",
    "text": "Client or User (“You,” “Your,” or “Client”)"
  },
  {
    "type": "listItem",
    "marker": "•",
    "indent": 0,
    "text": "The individual or entity subscribing to or availing research services."
  },
  {
    "type": "listItem",
    "marker": "•",
    "indent": 0,
    "text": "Must meet the eligibility requirements set forth herein and under Indian law"
  },
  {
    "type": "paragraph",
    "text": "of the SECOND PART."
  },
  {
    "type": "paragraph",
    "text": "The Research Analyst (RA) and the Client are hereinafter collectively referred to as “Parties” and individually as “Party”."
  },
  {
    "type": "heading",
    "level": 3,
    "text": "WHEREAS"
  },
  {
    "type": "paragraph",
    "text": "1. The Research Analyst (RA) is authorized to provide research analyst services in accordance with SEBI (Research Analyst) Regulations, 2014."
  },
  {
    "type": "paragraph",
    "text": "2. The Client has expressed an interest in availing the aforementioned services."
  },
  {
    "type": "paragraph",
    "text": "Now, therefore both parties agree as follows:"
  },
  {
    "type": "heading",
    "level": 2,
    "text": "1. Availing the Research Services:"
  },
  {
    "type": "paragraph",
    "text": "By accepting the delivery of the research service, the Client confirms that he/she has elected to subscribe to the research services of the RA at his/her sole discretion. The RA confirms that research services will be rendered in accordance with the applicable provisions of the SEBI (Research Analyst) Regulations, 2014 and other relevant regulations as amended from time to time."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "2. Obligations on RA:"
  },
  {
    "type": "paragraph",
    "text": "The RA and the Client shall be bound by the SEBI Act, all applicable rules, regulations, and notifications of SEBI, including the SEBI Research Analyst Regulations and other relevant notifications issued by the Government, as may be in force from time to time."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "3. Client Information and KYC:"
  },
  {
    "type": "paragraph",
    "text": "The Client shall provide all the necessary details in full as required by the RA, in its standard form along with supporting documentation if required, as may be made mandatory by RAASB/SEBI from time to time."
  },
  {
    "type": "paragraph",
    "text": "The RA will collect, store, upload, and check the KYC records of the Client with a KYC Registration Agency (KRA), as specified by SEBI from time to time."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "4. Consideration and mode of payment:"
  },
  {
    "type": "listItem",
    "marker": "i.",
    "indent": 0,
    "text": "The Client shall duly pay to RA, the agreed fees for the services that RA renders to the Client and statutory charges, as applicable. Such fees and statutory charges shall be payable through the specified manner and mode(s)/ mechanism(s)."
  },
  {
    "type": "listItem",
    "marker": "ii.",
    "indent": 0,
    "text": "RA may charge fees in advance if agreed by the client. Such advance shall not exceed fees for a period of one year."
  },
  {
    "type": "listItem",
    "marker": "iii.",
    "indent": 0,
    "text": "Fees to RA may be paid by the client through any of the specified modes like cheque, online bank transfer, UPI, etc. Cash payment is not allowed. Optionally the client can make payments through Centralized Fee Collection Mechanism (CeFCoM) managed by BSE Limited (i.e. currently recognized RAASB)."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "5. Risk factors:"
  },
  {
    "type": "paragraph",
    "text": "Investments in securities are subject to market risks, including the risk of loss of principal. The value of investments may fluctuate due to various factors such as market conditions, economic developments, changes in interest rates, political events, and regulatory changes. Past performance of securities or financial products is not indicative of future performance. Client is advised to carefully assess their financial objectives, risk tolerance before making investment decisions."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "6. Disclosures:"
  },
  {
    "type": "paragraph",
    "text": "The Research Analyst (RA) shall adhere to all applicable regulations, circulars, and directions issued by SEBI from time to time relating to disclosure and mitigation of any actual or potential conflict of interest. The detailed disclosures are provided below:"
  },
  {
    "type": "listItem",
    "marker": "i.",
    "indent": 0,
    "text": "Mudit Goyal is registered with SEBI as an Individual Research Analyst under Registration No. INH000013022, dated 15 September 2023, with the registered address Flat No-801, Tower J, Plot No-GC-03K/GH-03, VVIP Homes, Sector-16C, Noida, Gautam Buddha Nagar, Uttar Pradesh - 201301. He provides Research Analyst services under this registration and operates under the trade name Mudit Goyal & Co."
  },
  {
    "type": "listItem",
    "marker": "ii.",
    "indent": 0,
    "text": "Mr. Mudit Goyal is a qualified Research Analyst. With a strong analytical skill set, he excels in identifying investment ideas and implementing effective strategies."
  },
  {
    "type": "listItem",
    "marker": "iii.",
    "indent": 0,
    "text": "Mr. Mudit Goyal provides research recommendations based on:"
  },
  {
    "type": "listItem",
    "marker": "•",
    "indent": 0,
    "text": "Fundamental Analysis"
  },
  {
    "type": "listItem",
    "marker": "•",
    "indent": 0,
    "text": "Technical Analysis"
  },
  {
    "type": "listItem",
    "marker": "iv.",
    "indent": 0,
    "text": "There are no outstanding litigations, and no disciplinary actions have been taken against Mr. Mudit Goyal by SEBI or any other authority."
  },
  {
    "type": "listItem",
    "marker": "v.",
    "indent": 0,
    "text": "Mr. Mudit Goyal has exercised due diligence in checking the correctness and authenticity of the information contained herein, so far as it relates to current and historical information, but does not guarantee its accuracy or completeness. The opinions expressed are based on my current research as of the date appearing in the material and may be subject to change from time to time without notice."
  },
  {
    "type": "listItem",
    "marker": "vi.",
    "indent": 0,
    "text": "Mr. Mudit Goyal does not accept any liability arising from the use of this document or the information contained herein. The recipients of this material should rely on their own judgment and take their own professional advice before acting on this information."
  },
  {
    "type": "listItem",
    "marker": "vii.",
    "indent": 0,
    "text": "Mr. Mudit Goyal shall not be in any way responsible for any loss or damage that may arise to any person/s from any inadvertent error in the information contained, views and opinions expressed in this publication."
  },
  {
    "type": "listItem",
    "marker": "viii.",
    "indent": 0,
    "text": "Mr. Mudit Goyal or his associates, including relatives-"
  },
  {
    "type": "listItem",
    "marker": "•",
    "indent": 0,
    "text": "do not hold any financial interest in the Company."
  },
  {
    "type": "listItem",
    "marker": "•",
    "indent": 0,
    "text": "do not have any actual/beneficial ownership of more than 1% in the company."
  },
  {
    "type": "listItem",
    "marker": "•",
    "indent": 0,
    "text": "do not have any other material conflict of interest."
  },
  {
    "type": "listItem",
    "marker": "ix.",
    "indent": 0,
    "text": "Mr. Mudit Goyal or his associates are not affiliated with any other intermediaries or have received any brokerage or commission from any third party."
  },
  {
    "type": "listItem",
    "marker": "x.",
    "indent": 0,
    "text": "Mr. Mudit Goyal or his associates have not received any compensation from the Company covered by Research Analyst during the past twelve months."
  },
  {
    "type": "listItem",
    "marker": "xi.",
    "indent": 0,
    "text": "Mr. Mudit Goyal or his associates have not managed or co-managed public offering of securities of the Company during the past twelve months."
  },
  {
    "type": "listItem",
    "marker": "xii.",
    "indent": 0,
    "text": "Mr. Mudit Goyal or his associates has not served as an officer, director or employee of the Company and has not been engaged in the market making activity of the Company."
  },
  {
    "type": "listItem",
    "marker": "xiii.",
    "indent": 0,
    "text": "Mr. Mudit Goyal has ensured that the facts mentioned in the research report are taken from the reliable source and information. However, the investors are advised to independently evaluate the market conditions/ risks involved before making the investment decision."
  },
  {
    "type": "listItem",
    "marker": "xiv.",
    "indent": 0,
    "text": "Mr. Mudit Goyal does not use Artificial Intelligence (AI) tools as part of the research process, as confirmed in the information provided for this Agreement."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "7. Termination of service and refund of fees:"
  },
  {
    "type": "paragraph",
    "text": "The RA may suspend or terminate rendering of research services to Client on account of suspension/cancellation of registration of RA by SEBI and shall refund the residual amount to the client."
  },
  {
    "type": "paragraph",
    "text": "In case of suspension of certificate of registration of the RA for more than 60 (sixty) days or cancellation of the RA registration, the RA shall refund the fees, on a pro rata basis for the period from the effective date of cancellation/ suspension to end of the subscription period."
  },
  {
    "type": "paragraph",
    "text": "Termination by the Client shall be governed by Clause 12(iii) (MITC)."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "8. Grievance redressal and dispute resolution:"
  },
  {
    "type": "paragraph",
    "text": "Any grievance related to-"
  },
  {
    "type": "listItem",
    "marker": "i.",
    "indent": 1,
    "text": "non-receipt of research report or"
  },
  {
    "type": "listItem",
    "marker": "ii.",
    "indent": 1,
    "text": "missing pages or inability to download the entire report, or"
  },
  {
    "type": "listItem",
    "marker": "iii.",
    "indent": 1,
    "text": "any other deficiency in the research services provided by RA, shall be escalated promptly by the client to the person/employee designated by RA, in this behalf-"
  },
  {
    "type": "paragraph",
    "text": "Name of the RA: Mudit Goyal"
  },
  {
    "type": "paragraph",
    "text": "Email Id: support@muditgoyal.co.in"
  },
  {
    "type": "paragraph",
    "text": "Phone Number: +91 9958855400"
  },
  {
    "type": "paragraph",
    "text": "The RA shall be responsible to resolve grievances within 7 (seven) business working days or such timelines as may be specified by SEBI under the RA Regulations."
  },
  {
    "type": "paragraph",
    "text": "RA shall redress grievances of the client in a timely and transparent manner."
  },
  {
    "type": "paragraph",
    "text": "Any dispute between the RA and his Client may be resolved through arbitration or through any other modes or mechanism as specified by SEBI from time to time."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "9. Indemnity:"
  },
  {
    "type": "paragraph",
    "text": "Without prejudice to the right of indemnity available to the Research Analyst (RA) under any law, the Client agrees to indemnify and hold Research Analyst (RA) harmless to the full extent against:"
  },
  {
    "type": "listItem",
    "marker": "i.",
    "indent": 0,
    "text": "any and all lawful claims, losses, damages, liabilities, costs and expenses as incurred in connection with investigation of, preparation for and defence of any pending or threatened claim and any litigation or other proceeding arising out of or related to any actual or proposed acts done or not done or the Research Analyst‘s engagement hereunder."
  },
  {
    "type": "listItem",
    "marker": "ii.",
    "indent": 0,
    "text": "For any negligence/mistake or misconduct by the Client."
  },
  {
    "type": "listItem",
    "marker": "iii.",
    "indent": 0,
    "text": "For any breach or non-compliance by the Client of the rules/terms and conditions stated in this Agreement."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "10. Representations and covenants:"
  },
  {
    "type": "paragraph",
    "text": "The Client hereby represents, warrants, declares and undertakes to the Research Analyst (RA) as under:"
  },
  {
    "type": "listItem",
    "marker": "i.",
    "indent": 0,
    "text": "The Client has legal capacity and authority to execute, deliver and perform this Agreement and has taken all necessary permissions and consents (corporate, statutory, contractual or otherwise) and agree to maintain them throughout the validity of the services;"
  },
  {
    "type": "listItem",
    "marker": "ii.",
    "indent": 0,
    "text": "This Agreement has been duly executed and delivered by the Client and constitutes a legal, valid and binding obligation on the Client, enforceable against the Client in accordance with its terms;"
  },
  {
    "type": "listItem",
    "marker": "iii.",
    "indent": 0,
    "text": "The Client has read and understood the Agreement and is aware of all the risks associated with the nature of the services and the transaction contemplated under the Agreement, whether set out in the Agreement or not, and shall not hold the Research Analyst (RA) and/or any person appointed by it, responsible for the same;"
  },
  {
    "type": "listItem",
    "marker": "iv.",
    "indent": 0,
    "text": "The Client is executing this Agreement in his own interest and there is no beneficial or any third-party interest involved;"
  },
  {
    "type": "paragraph",
    "text": "The Research Analyst (RA) hereby represents warrants and declares as under:"
  },
  {
    "type": "listItem",
    "marker": "i.",
    "indent": 2,
    "text": "The Research Analyst has legal capacity and authority to execute, deliver and perform this Agreement and has taken all necessary permissions and consents (corporate, statutory, contractual or otherwise) and agree to maintain them throughout the validity of the Services."
  },
  {
    "type": "listItem",
    "marker": "ii.",
    "indent": 2,
    "text": "This Agreement has been duly executed and delivered by the Research Analyst (RA) and constitutes a legal, valid and binding obligation on the Research Analyst, enforceable against it in accordance with these terms."
  },
  {
    "type": "listItem",
    "marker": "iii.",
    "indent": 2,
    "text": "Principal Officer and persons associated with the research services fulfils the qualification and certification requirements under regulation 7 of RA Regulations."
  },
  {
    "type": "listItem",
    "marker": "iv.",
    "indent": 2,
    "text": "Advise provided by the Research Analyst (RA) on securities are based on internal research methodology and are not driven by commissions / brokerage / gifts."
  },
  {
    "type": "listItem",
    "marker": "v.",
    "indent": 2,
    "text": "The Research Analyst (RA) shall endeavour to act in the best interest of the Client."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "11. Mandatory notice:"
  },
  {
    "type": "paragraph",
    "text": "Clients shall be requested to go through Do’s and Don’ts while dealing with RA as specified in SEBI master circular no. SEBI/HO/MIRSD-POD-1/P/CIR/2024/49  dated May 21, 2024 or as may be specified by SEBI from time to time."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "12. Most Important Terms and Conditions (MITC):"
  },
  {
    "type": "paragraph",
    "text": "The RA shall disclose MITC to the clients which have been standardised by Industry Standards Forum (ISF). The detailed MITC is provided below:"
  },
  {
    "type": "listItem",
    "marker": "i.",
    "indent": 0,
    "text": "These terms and conditions, and consent thereon are for the research services provided by the Research Analyst (RA) and RA cannot execute/carry out any trade (purchase/sell transaction) on behalf of, the client. Thus, the clients are advised not to permit RA to execute any trade on their behalf."
  },
  {
    "type": "listItem",
    "marker": "ii.",
    "indent": 0,
    "text": "The fee charged by RA to the client will be subject to the maximum of amount prescribed by SEBI/ Research Analyst Administration and Supervisory Body (RAASB) from time to time (applicable only for Individual and HUF Clients)."
  },
  {
    "type": "paragraph",
    "text": "Note:"
  },
  {
    "type": "listItem",
    "marker": "•",
    "indent": 1,
    "text": "The current fee limit is Rs 1,51,000/- per annum per family of client for all research services of the RA."
  },
  {
    "type": "listItem",
    "marker": "•",
    "indent": 1,
    "text": "The fee limit does not include statutory charges."
  },
  {
    "type": "listItem",
    "marker": "•",
    "indent": 1,
    "text": "The fee limits do not apply to a non-individual client / accredited investor."
  },
  {
    "type": "listItem",
    "marker": "iii.",
    "indent": 0,
    "text": "RA may charge fees in advance if agreed by the client. Such advance shall not exceed fees for a period of one year. In case of pre-mature termination of the RA services by either the client or the RA, the client shall be entitled to seek refund of proportionate fees only for unexpired period."
  },
  {
    "type": "listItem",
    "marker": "iv.",
    "indent": 0,
    "text": "Fees to RA may be paid by the client through any of the specified modes like cheque, online bank transfer, UPI, etc. Cash payment is not allowed. Optionally the client can make payments through Centralized Fee Collection Mechanism (CeFCoM) managed by BSE Limited (i.e. currently recognized RAASB)."
  },
  {
    "type": "listItem",
    "marker": "v.",
    "indent": 0,
    "text": "The RA is required to abide by the applicable regulations/ circulars/ directions specified by SEBI and RAASB from time to time in relation to disclosure and mitigation of any actual or potential conflict of interest. The RA will endeavor to promptly inform the client of any conflict of interest that may affect the services being rendered to the client."
  },
  {
    "type": "listItem",
    "marker": "vi.",
    "indent": 0,
    "text": "Any assured/guaranteed/fixed returns schemes or any other schemes of similar nature are prohibited by law. No scheme of this nature shall be offered to the client by the RA."
  },
  {
    "type": "listItem",
    "marker": "vii.",
    "indent": 0,
    "text": "The RA cannot guarantee returns, profits, accuracy, or risk-free investments from the use of the RA’s research services. All opinions, projections, estimates of the RA are based on the analysis of available data under certain assumptions as of the date of preparation/publication of research report."
  },
  {
    "type": "listItem",
    "marker": "viii.",
    "indent": 0,
    "text": "Any investment made based on recommendations in research reports are subject to market risks, and recommendations do not provide any assurance of returns. There is no recourse to claim any losses incurred on the investments made based on the recommendations in the research report. Any reliance placed on the research report provided by the RA shall be as per the client’s own judgement and assessment of the conclusions contained in the research report."
  },
  {
    "type": "listItem",
    "marker": "ix.",
    "indent": 0,
    "text": "The SEBI registration, Enlistment with RAASB, and NISM certification do not guarantee the performance of the RA or assure any returns to the client."
  },
  {
    "type": "listItem",
    "marker": "x.",
    "indent": 0,
    "text": "For any grievances,"
  },
  {
    "type": "paragraph",
    "text": "Step 1: the client should first contact the RA using the details on its website or following contact details:"
  },
  {
    "type": "paragraph",
    "text": "Step 2:  If the resolution is unsatisfactory, the client can also lodge grievances through SEBI’s SCORES platform at www.scores.sebi.gov.in"
  },
  {
    "type": "paragraph",
    "text": "Step 3: The client may also consider the Online Dispute Resolution (ODR) through the Smart ODR portal at https://smartodr.in"
  },
  {
    "type": "listItem",
    "marker": "i.",
    "indent": 0,
    "text": "Clients are required to keep contact details, including email id and mobile number/s updated with the RA at all times."
  },
  {
    "type": "listItem",
    "marker": "ii.",
    "indent": 0,
    "text": "The RA shall never ask for the client’s login credentials and OTPs for the client’s Trading Account Demat Account and Bank Account. Never share such information with anyone including RA."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "13. Client Consent:"
  },
  {
    "type": "paragraph",
    "text": "The Client hereby provides consent to the Research Analyst (RA) on the following basis:"
  },
  {
    "type": "paragraph",
    "text": "The Client confirms that he/she/they have read and understood the terms and conditions applicable to a Research Analyst as defined under Regulation 2(1)(u) of the SEBI (Research Analyst) Regulations, 2014, including the applicable fee structure."
  },
  {
    "type": "paragraph",
    "text": "The Client acknowledges and agrees that the research services subscribed to are solely for the Client’s own use and benefit. Any reliance placed on the research report or recommendations provided by the Research Analyst (RA) shall be based entirely on the Client’s own judgment, discretion, and independent assessment of the conclusions contained therein."
  },
  {
    "type": "paragraph",
    "text": "The Client further understands and agrees that:"
  },
  {
    "type": "listItem",
    "marker": "i.",
    "indent": 2,
    "text": "Any investment made on the basis of the recommendations contained in the research report is subject to market risks."
  },
  {
    "type": "listItem",
    "marker": "ii.",
    "indent": 2,
    "text": "Recommendations provided in the research report do not guarantee or assure any returns."
  },
  {
    "type": "listItem",
    "marker": "iii.",
    "indent": 2,
    "text": "The Client shall have no recourse to claim any losses incurred on investments made based on such recommendations."
  },
  {
    "type": "paragraph",
    "text": "By proceeding with the subscription to the research services, the Client accepts and agrees to the above terms and provides explicit consent to be bound by this Agreement."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "14. Declaration by the Research Analyst (RA):"
  },
  {
    "type": "paragraph",
    "text": "The Research Analyst (RA) hereby declares and confirms that:"
  },
  {
    "type": "listItem",
    "marker": "i.",
    "indent": 0,
    "text": "It is duly registered with the Securities and Exchange Board of India (SEBI) as a Research Analyst under the SEBI (Research Analysts) Regulations, 2014, bearing the following registration details:"
  },
  {
    "type": "listItem",
    "marker": "a.",
    "indent": 1,
    "text": "Registration Number: INH000013022"
  },
  {
    "type": "listItem",
    "marker": "b.",
    "indent": 1,
    "text": "Registration Date: 15 September 2023"
  },
  {
    "type": "listItem",
    "marker": "ii.",
    "indent": 0,
    "text": "It possesses all necessary registrations, qualifications, and approvals required to provide research analyst services under the RA Regulations, and all such approvals remain valid and in force."
  },
  {
    "type": "listItem",
    "marker": "iii.",
    "indent": 0,
    "text": "The services rendered by the Research Analyst (RA) and the research reports issued do not conflict with, breach, or violate any applicable law, rule, regulation, contractual obligation, or binding instrument."
  },
  {
    "type": "listItem",
    "marker": "iv.",
    "indent": 0,
    "text": "The maximum fee that may be charged by the Research Analyst (RA) shall not exceed ₹1.51 lakhs per annum per family of the Client, in accordance with the applicable SEBI guidelines."
  },
  {
    "type": "listItem",
    "marker": "v.",
    "indent": 0,
    "text": "The recommendations, research reports, or opinions issued by the Research Analyst (RA) do not, in any manner, assure or guarantee any specific or minimum returns."
  },
  {
    "type": "listItem",
    "marker": "vi.",
    "indent": 0,
    "text": "The Research Analyst (RA) is not engaged in any other profession, business activity, or occupation—whether in an executive capacity or on a whole-time basis—that may affect, influence, or compromise the independence, objectivity, or integrity of the research reports or recommendations issued."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "15. Severability:"
  },
  {
    "type": "paragraph",
    "text": "If any provision of this Agreement is held or made invalid by a court decision, statute, rule or otherwise, the remainder of this Agreement shall not be affected thereby."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "16. Force Majeure:"
  },
  {
    "type": "paragraph",
    "text": "The Research Analyst (RA) shall not be liable for delays or errors occurring by reason of circumstances beyond its control, including but not limited to acts of civil or military authority, national emergencies, work stoppages, fire, flood, catastrophe, acts of God, pandemic, epidemic, insurrection, war, riot, or failure of communication or power supply. In the event of equipment breakdowns beyond its control, it shall take reasonable steps to minimize service interruptions but shall have no liability with respect thereto."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "17. Intellectual Property:"
  },
  {
    "type": "paragraph",
    "text": "The Research Analyst (RA) shall own all Intellectual Property Rights in respect of all text and data and such other material both electronic & physical, which may form the subject matter of this Agreement provided by it to the Client during the course of this Agreement."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "18. Declaration of the RA :"
  },
  {
    "type": "paragraph",
    "text": "i. It is duly registered with SEBI as an RA pursuant to the SEBI (Research Analysts) Regulations, 2014 and its registration details are: Registration Number INH000013022, Registration Date 15 September 2023;"
  },
  {
    "type": "paragraph",
    "text": "ii. It has registration and qualifications required to render the services contemplated under the RA Regulations, and the same are valid and subsisting;"
  },
  {
    "type": "paragraph",
    "text": "Research analyst services provided by it do not conflict with or violate any provision of law, rule or regulation, contract, or other instrument to which it is a party or to which any of its property is or may be subject;"
  },
  {
    "type": "paragraph",
    "text": " iv. The maximum fee that may be charged by RA is ₹1.51 lakhs per annum per family of client."
  },
  {
    "type": "paragraph",
    "text": "v. The recommendations provided by RA do not provide any assurance of returns."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "19. Client Declaration and Obtaining Client Consent:"
  },
  {
    "type": "paragraph",
    "text": "No research service shall be rendered and no fee shall be charged until such consent is received. The consent of client shall be taken on the following understanding: “I / We have read and understood the terms and conditions applicable to a research analyst as defined under regulation 2(1)(u) of the SEBI (Research Analyst) Regulations, 2014, including the fee structure.  I/We are subscribing to the research services for our own benefits and consumption, and any reliance placed on the research report provided by research analyst shall be as per our own judgement and assessment of the conclusions contained in the research report.  I/We understand that –  i. Any investment made based on the recommendations in the research report are subject to market risk.  ii. Recommendations in the research report do not provide any assurance of returns.  iii. There is no recourse to claim any losses incurred on the investments made based on the recommendations in the research report.”"
  },
  {
    "type": "heading",
    "level": 2,
    "text": "20. Miscellaneous:"
  },
  {
    "type": "listItem",
    "marker": "•",
    "indent": 0,
    "text": "Expenses: Each of the Parties hereto shall bear its own expenses, including fees and expenses of any attorneys, accountants, consultants, investment bankers, brokers, finders or other persons or entities engaged by it, and incurred in connection with this Agreement and the transactions contemplated hereby."
  },
  {
    "type": "listItem",
    "marker": "•",
    "indent": 0,
    "text": "Remedies: No remedy conferred by any of the provisions of this Agreement is intended to be exclusive of any other remedy which is otherwise available at law, in equity, by statute or otherwise, and each and every other remedy given hereunder or now or hereafter existing at law, in equity, by statute or otherwise except as stated to the contrary in this Agreement. The election of any one or more of such remedies by any of the Parties hereto shall not constitute a waiver by such Party of the right to pursue any other available remedy except as aforesaid."
  },
  {
    "type": "listItem",
    "marker": "•",
    "indent": 0,
    "text": "Entire Agreement: This Agreement, and the Schedules, Annexures and Appendices hereto constitute the entire agreement between the Parties as to the subject-matter hereof and supersede any and all prior understandings between the Parties on the subject-matter hereof."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "21. Governing Law and Jurisdiction"
  },
  {
    "type": "paragraph",
    "text": "IMPORTANT: Court jurisdiction has not yet been confirmed by the Research Analyst. This field must be approved by the client/compliance or legal adviser before final use."
  },
  {
    "type": "paragraph",
    "text": "This Agreement shall be governed by Indian law. Disputes shall first be resolved through SEBI-prescribed grievance redressal, SCORES, and ODR mechanisms. The specific court jurisdiction for this Agreement is to be confirmed by the Research Analyst with his compliance/legal adviser before final execution."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "22. Effective Date:"
  },
  {
    "type": "paragraph",
    "text": "This Agreement shall be effective from the date of acceptance by the Client."
  },
  {
    "type": "paragraph",
    "text": "IN WITNESS whereof this Agreement has been entered into by the Parties on the date appearing above as the date of this Agreement."
  },
  {
    "type": "signature",
    "label": "Signature:",
    "sourceText": "Signature:\t_________________________",
    "src": "/signatures/mudit-goyal-signature.png",
    "alt": "Handwritten signature of Mudit Goyal"
  },
  {
    "type": "paragraph",
    "text": "Name: Mudit Goyal"
  },
  {
    "type": "paragraph",
    "text": "Designation: Research Analyst"
  },
  {
    "type": "paragraph",
    "text": "For Client"
  },
  {
    "type": "paragraph",
    "text": "By: ___________________________"
  }
];

export const agreementIsPlaceholder = false;

export const agreementPlainText = agreementBlocks.map((block) =>
  block.type === "listItem" ? `${block.marker} ${block.text}` : block.type === "signature" ? block.sourceText : block.text
).join("\n\n");
