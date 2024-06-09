export interface defaultCardTypes {
  name: string;
  imageSrc: string;
  websiteLink: string;
  emailLink: string;
  description: string;
  contacts: string[];
  country: string;
  links: { type: string; url: string }[];
  type: string[];
  keyCases?: string[];
  backgroundColors?: [string, string, string, string, string];
  cardItems: {
    raiseType: string;
    fundingRound: string;
  };
}
