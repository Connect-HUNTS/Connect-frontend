export interface DefaultEntityType {
  id: number;
  userId: number;
  name: string;
  country: string;
  website: string;
  email: string | null;
  contactInformation: string;
  type: string[];
  description: string;
  profileImage: string;
  telegram: string;
  linkedin: string;
}
