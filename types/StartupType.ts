import { DefaultEntityType } from "./DefaultEntityType";

export interface StartupType extends DefaultEntityType {
  mainFeatures: string;
  pitchDeckLink: string;
  pitchVideoLink: string | null;
  whitepaperLink: string | null;
  tokenomicsSource: string;
  raiseType: string;
  fundingRound: string;
  fundraisingGoal: number;
  raisedToDate: number;
  previousInvestors: string;
  notableCustomersPartners: string;
  tractionMetrics: string;
  teamLinkedInProfiles: string;
  socialMediaLinks: string;
  otherServicesNeeded: string[];
  discoverySource: string[];
  minInvestmentSize: number | null;
  tgeDate: string | null;
}
