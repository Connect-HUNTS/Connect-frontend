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

export interface PartnersType extends DefaultInstance {
  telegram: string;
  linkedin: string;
  proposals: string[];
  contactEmail: string;
  keyCases: string[];
}
