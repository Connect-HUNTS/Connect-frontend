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

export interface StartupType extends DefaultInstance {
  tgeDate: null;
  fundingRound: string;
  teamLinkedInProfiles: string[];
}
