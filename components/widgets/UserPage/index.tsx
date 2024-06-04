"use client";

import React, { useState } from "react";
import s from "./UserPage.module.scss";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

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
import FiltersDropdown from "../Accordion";

interface Partner {
  id: number;
  name: string;
}

interface CardData {
  id: number;
  name: string;
  logo: string;
  websiteLink: string;
  contactEmail: string;
  proposals: string[];
  description: string;
  contacts: string[];
  country: string;
  keyCases: string[];
  type: string[];
  links: { type: string; url: string }[];
}

const UserPage: React.FC = () => {
  const [partners, setPartners] = useState<Partner[]>([
    { id: 2, name: "Bob Johnson" },
  ]);

  // Dummy data for UserCard
  const cardData: CardData[] = [
    {
      id: 1,
      name: "John Doe",
      logo: "/public/images/cardImage.png",
      websiteLink: "https://example.com",
      contactEmail: "john@example.com",
      proposals: ["Proposal 1", "Proposal 2"],
      description: "User description goes here.",
      contacts: ["Contact 1", "Contact 2"],
      country: "Country",
      keyCases: ["Case 1", "Case 2"],
      type: ["Type 1", "Type 2"],
      links: [
        { type: "linkedin", url: "https://linkedin.com/in/johndoe" },
        { type: "telegram", url: "https://t.me/johndoe" },
      ],
    },
  ];

  return (
    <div className={s.wrapper}>
      <div className={s.sidebar__section}>
        <div className={s.header}>
          <UserInteraction />
        </div>
        <Link className={s.navButton} href="/">
          <LuLogOut className="icon" />
          Exit
        </Link>
      </div>
      <div className={s.card__section}>
        <div className={s.userPageHeader}>
          <WelcomeBackCard cardData={cardData} />
        </div>
        {cardData.map((partner) => (
          <UsersCard
            key={partner.id}
            name={partner.name}
            imageSrc={partner.logo}
            websiteLink={partner.websiteLink}
            emailLink={partner.contactEmail}
            proposals={partner.proposals}
            description={partner.description}
            contacts={partner.contacts}
            country={partner.country}
            keyCases={partner.keyCases}
            type={partner.type}
            links={partner.links}
            backgroundColors={[
              "#B4AAF1",
              "#AAE4F1",
              "#C1F1AA",
              "#F1E9AA",
              "#F1AAAA",
            ]}
          />
        ))}
      </div>
      <div>
        <UserAccountSection
          partners={partners}
          investorIcon={investorIcon as StaticImageData}
          settingsIcon={Settings as StaticImageData}
          chatIcon={Chat as StaticImageData}
          notificationIcon={Bell as StaticImageData}
        />
        <FiltersSection />
      </div>
    </div>
  );
};

export default UserPage;
