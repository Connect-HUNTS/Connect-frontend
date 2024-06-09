"use client";

import s from "./StartupPage.module.scss";
import { IStartup } from "../../../types/startupTypes";
import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import UserInteraction from "../../features/UserInteraction";
import Link from "next/link";
import { LuLogOut } from "react-icons/lu";
import DefaultUserCard from "../DefaultUserCard";

interface StartupProps {
  startup: IStartup[];
}

export const fetchStartup = async (token: string) => {
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

const StartupPage: FC<StartupProps> = ({ startup }) => {
  const [startups, setStartups] = useState<IStartup[]>([]);
  const [error, setError] = useState<string | null>(null);
  console.log(startups);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token =
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZW1haWwiOiJpbnZlc3RvckBleGFtcGxlLmNvbSIsInJvbGUiOiJJTlZFU1RPUiIsImlhdCI6MTcxNzYwMzEzNiwiZXhwIjoxNzIwMTk1MTM2fQ.9q-YC36KKI3h6G6Z76BZMtKS2OHYpDuyK8ViAzP0VXQ";
        const data = await fetchStartup(token);
        setStartups(data);
      } catch (error) {
        setError("Failed to fetch startups");
      }
    };
    fetchData();
  }, []);

  return (
    <div className={s.wrapper}>
      <div className={s.sidebar}>
        <div className={s.header}>
          <UserInteraction />
        </div>
        <Link className={s.sidebarButton} href="/">
          <LuLogOut className="icon" />
          Exit
        </Link>
      </div>
      <div className={s.content}>
        {error ? (
          <p>{error}</p>
        ) : (
          startups.map((item, index) => (
            <div key={index}>
              <DefaultUserCard
                defaultCard={{
                  name: item.name,
                  imageSrc: item.imageSrc,
                  websiteLink: item.websiteLink,
                  emailLink: item.emailLink,
                  description: item.description,
                  contacts: item.contacts,
                  country: item.country,
                  links: item.links,
                  type: item.productType || "Product Type",
                }}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default StartupPage;
