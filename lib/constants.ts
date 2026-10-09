export const RA_CONFIG = {
  siteName: "Mudit Goyal & Co Terms Acceptance Portal",
  name: process.env.RA_NAME || "Mudit Goyal",
  businessName: "Mudit Goyal & Co",
  legalStructure: "Individual Research Analyst",
  sebiRegistrationNumber: process.env.RA_SEBI_REGISTRATION_NUMBER || "INH000013022",
  registrationDate: "15 September 2023",
  officeAddress: "Flat No-801, Tower J, Plot No-GC-03K/GH-03, VVIP Homes, Sector-16C, Noida, Gautam Buddha Nagar, Uttar Pradesh - 201301",
  supportEmail: "support@muditgoyal.co.in",
  phoneNumber: "9958855400",
  grievanceOfficer: "Mudit Goyal",
  grievanceEmail: "support@muditgoyal.co.in",
  grievancePhone: "9958855400",
  grievanceWorkingHours: "09:00 AM – 06:00 PM",
  complianceOfficer: "Mudit Goyal",
  principalOfficer: "Mudit Goyal",
  headOfCustomerCare: "N/A",
  ceo: "N/A",
  researchMethodology: "Fundamental Analysis and Technical Analysis",
  usesAiToolsInResearch: "No",
  outstandingLitigation: "No",
  regulatoryDisciplinaryAction: "No",
  financialInterestOrConflict: "No",
  intermediaryOrBrokerageAffiliation: "No",
  issuerCompensationInLastTwelveMonths: "No",
  publicOfferingInLastTwelveMonths: "No",
  coveredCompanyRole: "No",
  associatesOrRelativesInRaServices: "None",
  signatureName: "Mudit Goyal",
  officialDesignation: "Research Analyst",
  agreementVersion: "1.0",
  primaryAccent: "#0f766e",
  logoPath: "/logo.png"
} as const;

export const TIME_ZONE = "Asia/Kolkata";
export const ACCEPTANCE_PREFIX = "RA";
export const MAX_REQUESTS_PER_WINDOW = 5;
export const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
