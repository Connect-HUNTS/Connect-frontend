import axios from "axios";

import ScrollContainer from "components/shared/ScrollContainer";

import Card from "components/entities/investor/Card";
import { PartnersType } from "@/types/PartnerType";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZW1haWwiOiJpbnZlc3RvckBleGFtcGxlLmNvbSIsInJvbGUiOiJJTlZFU1RPUiIsImlhdCI6MTcxNzYwMzEzNiwiZXhwIjoxNzIwMTk1MTM2fQ.9q-YC36KKI3h6G6Z76BZMtKS2OHYpDuyK8ViAzP0VXQ";

const getPartners = async (): Promise<PartnersType[]> => {
  try {
    const response = await axios.get(
      "http://104.207.130.38:3000/api/users/partners?limit=10&offset=0&sortBy=name&sortOrder=asc",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    const partners = response.data as PartnersType[];
    return partners.map((partner) => {
      partner.email = partner.contactEmail;
      partner.website = partner.websiteLink;
      return partner;
    });
  } catch (error) {
    throw error;
  }
};

const Partners = async () => {
  const investors = await getPartners();

  return (
    <ScrollContainer>
      {investors.map((investor: any) => (
        <Card partner={investor} key={investor.id} /> // change this component to Partner Card (also change the import)
      ))}
    </ScrollContainer>
  );
};

export default Partners;
