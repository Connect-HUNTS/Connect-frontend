export interface DefaultEntityType {
  id: number;
  userId: number;
  name: string;
  country: string;
  website: string;
  contactInformation: string;
  type: string[];
  description: string;
  profileImage: string;
  email: string | null;
  telegram: string;
  linkedin: string;
}
