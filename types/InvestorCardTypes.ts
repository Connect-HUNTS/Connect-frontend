export interface InvestorCardType {
  id: number;
  userId: number;
  name: string;
  country: string;
  investorType: string;
  website: string;
  contactInformation: string;
  investmentType: string;
  fundingRound: string;
  type: string[];
  minTicketSize: number;
  maxTicketSize: number;
  leadInvestor: string;
  description: string;
  profileImage: string;
}
