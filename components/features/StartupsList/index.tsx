import React from "react";
import axios from "axios";

import { StartupType } from "types/StartupType";

import ScrollContainer from "components/shared/ScrollContainer";

import Card from "components/entities/startup/Card";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZW1haWwiOiJpbnZlc3RvckBleGFtcGxlLmNvbSIsInJvbGUiOiJJTlZFU1RPUiIsImlhdCI6MTcxNzYwMzEzNiwiZXhwIjoxNzIwMTk1MTM2fQ.9q-YC36KKI3h6G6Z76BZMtKS2OHYpDuyK8ViAzP0VXQ";

const getStartups = async (): Promise<StartupType[]> => {
  try {
    const response = await axios.get(
      "http://104.207.130.38:3000/api/users/startups?limit=10&offset=0&sortBy=name&sortOrder=asc",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    const startups = response.data as StartupType[];
    return startups.map((startup) => {
      startup.email = "";
      return startup;
    });
  } catch (error) {
    throw error;
  }
};

const startupPage = async () => {
  const startups = await getStartups();

  return (
    <ScrollContainer>
      {startups.map((startup) => (
        <Card startup={startup} key={startup.id} />
      ))}
    </ScrollContainer>
  );
};

export default startupPage;
