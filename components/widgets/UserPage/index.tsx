"use client";

import React, { useEffect, useState } from "react";
import s from "./UserPage.module.scss";
import Link from "next/link";
import { StaticImageData } from "next/image";

import investorIcon from "/public/images/investorIcon.png";
import Settings from "/public/images/settingUser.png";
import Chat from "/public/images/chatUser.png";
import Bell from "/public/images/userNotification.png";

import { LuLogOut } from "react-icons/lu";

import UsersCard from "../../../components/shared/UsersCard/index";
import UserInteraction from "../../features/UserInteraction";
import WelcomeBackCard from "../../features/WelcomeBack";
import UserAccountSection from "../../features/UserAccountSection";
import FiltersSection from "../../features/FiltersSection";
import axios from "axios";

interface Partner {
  id: number;
  name: string;
  type: string[];
}

interface CardData {
  id: number;
  name: string;
  logo: string;
  websiteLink: string;
  contactEmail: string;
  proposals?: string[];
  description: string;
  contacts: string[];
  country: string;
  keyCases?: string[];
  type: string[];
  links: { type: string; url: string }[];
}

export const fetchPartner = async (token: string) => {
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

const UserPage: React.FC = () => {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [cardData, setCardData] = useState<CardData[]>([]);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZW1haWwiOiJpbnZlc3RvckBleGFtcGxlLmNvbSIsInJvbGUiOiJJTlZFU1RPUiIsImlhdCI6MTcxNzYwMzEzNiwiZXhwIjoxNzIwMTk1MTM2fQ.9q-YC36KKI3h6G6Z76BZMtKS2OHYpDuyK8ViAzP0VXQ";

  useEffect(() => {
    const getPartners = async () => {
      try {
        const data = await fetchPartner(token);
        setPartners(data); // Обновляем состояние партнёров
        setCardData(
          data.map((partner: any) => ({
            id: partner.id,
            name: partner.name,
            logo: partner.profileImage || "/public/images/defaultImage.png", // Если нет логотипа, используем изображение по умолчанию
            websiteLink: partner.websiteLink,
            contactEmail: partner.contactEmail,
            proposals: partner.proposals || [],
            description: partner.description,
            contacts: partner.contacts || [],
            country: partner.country,
            keyCases: partner.keyCases || [],
            type: partner.type || [],
            links: partner.links || [],
          })),
        );
      } catch (error) {
        console.error("Ошибка при получении данных партнёров:", error);
      }
    };

    getPartners();
  }, [token]);

  return (
    <div className={s.wrapper}>
      <div className={s.sidebarSection}>
        <div className={s.header}>
          <UserInteraction />
        </div>
        <Link className={s.navButton} href="/">
          <LuLogOut className="icon" />
          Exit
        </Link>
      </div>
      <div className={s.cardSection}>
        {cardData.map((partner) => (
          <div className={s.content} key={partner.id}>
            <div className={s.cardLeftSection}>
              <div className={s.userCardSection}>
                <WelcomeBackCard cardData={[partner]} />
                <UsersCard
                  userCard={{
                    name: partner.name,
                    imageSrc: partner.logo,
                    websiteLink: partner.websiteLink,
                    emailLink: partner.contactEmail,
                    proposals: partner.proposals,
                    description: partner.description,
                    contacts: partner.contacts,
                    country: partner.country,
                    keyCases: partner.keyCases,
                    type: partner.type,
                    links: partner.links,
                  }}
                />
              </div>
            </div>
            <div className={s.cardRightSection}>
              <UserAccountSection
                partner={partner}
                investorIcon={investorIcon as StaticImageData}
                settingsIcon={Settings as StaticImageData}
                chatIcon={Chat as StaticImageData}
                notificationIcon={Bell as StaticImageData}
              />
              <FiltersSection />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserPage;
