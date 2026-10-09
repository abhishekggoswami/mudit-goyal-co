export type AcceptanceRecord = {
  fullName: string;
  mobile: string;
  acceptanceId: string;
  acceptedAt: Date;
  acceptedAtIso: string;
  acceptedAtFormatted: string;
  agreementVersion: string;
};

export type AcceptanceResponse = {
  acceptanceId: string;
  acceptedAt: string;
  acceptedAtFormatted: string;
};
