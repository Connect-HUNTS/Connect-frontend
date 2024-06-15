import React, { FC } from "react";
import axios from "axios";
import { StartupType } from "types/startupTypes";
import StartupCard from "components/entities/UserCard/ui/StartupCard/StartupCard";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZW1haWwiOiJpbnZlc3RvckBleGFtcGxlLmNvbSIsInJvbGUiOiJJTlZFU1RPUiIsImlhdCI6MTcxNzYwMzEzNiwiZXhwIjoxNzIwMTk1MTM2fQ.9q-YC36KKI3h6G6Z76BZMtKS2OHYpDuyK8ViAzP0VXQ";

const getStartups = async () => {
  try {
    const response = await axios.get(
      "http://104.207.130.38:3000/api/users/startups?limit=10&offset=0&sortBy=name&sortOrder=asc",
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

interface StartupPageProps {
  types: StartupType[];
}

const startupPage: FC<StartupPageProps[]> = async (types) => {
  const startUp = await getStartups();
  return (
    <div>
      <StartupCard startups={startUp} key={startUp.id} />
    </div>
  );
};

export default startupPage;
