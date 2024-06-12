export interface DefaultInstance {
  id: number;
  userId: number;
  name: string;
  country: string;
  website: string;
  contactInformation: string;
  type: string[];
  description: string;
  profileImage: string;
}

export interface InvestorType extends DefaultInstance {
  investorType: string;
  investmentType: string;
  fundingRound: string;
  minTicketSize: number;
  maxTicketSize: number;
  leadInvestor: string;
}

export interface StartupType extends DefaultInstance {}

export interface PartnersType extends DefaultInstance {}
