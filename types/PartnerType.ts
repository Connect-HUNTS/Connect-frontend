import { DefaultEntityType } from "./DefaultEntityType";

export interface PartnersType extends DefaultEntityType {
  websiteLink: string;
  proposals: string[];
  contactEmail: string | null;
  keyCases: string;
  contact: string;
  averageBill: number;
  referralFee: string;
}
