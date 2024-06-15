import { DefaultEntityType } from "./DefaultEntityType";

export interface InvestorType extends DefaultEntityType {
  investorType: string[];
  investmentType: string;
  fundingRound: string[];
  minTicketSize: number;
  maxTicketSize: number;
  leadInvestor: boolean;
  rate: string;
}
