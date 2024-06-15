import React, { FC } from "react";
import axios from "axios";
import { PartnersType } from "types/partnerTypes";
import PartnersCard from "components/entities/UserCard/ui/PartnersCard";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZW1haWwiOiJpbnZlc3RvckBleGFtcGxlLmNvbSIsInJvbGUiOiJJTlZFU1RPUiIsImlhdCI6MTcxNzYwMzEzNiwiZXhwIjoxNzIwMTk1MTM2fQ.9q-YC36KKI3h6G6Z76BZMtKS2OHYpDuyK8ViAzP0VXQ";

const getPartners = async () => {
  try {
    const response = await axios.get(
      "http://104.207.130.38:3000/api/users/partners?limit=10&offset=0&sortBy=name&sortOrder=asc",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

interface PartnersPageProps {
  types: PartnersType[];
}

const PartnersPage: FC<PartnersPageProps> = async ({ types }) => {
  const partners = await getPartners();
  return (
    <div>
      <PartnersCard partners={partners} key={partners.id} />
    </div>
  );
};

export default PartnersPage;
