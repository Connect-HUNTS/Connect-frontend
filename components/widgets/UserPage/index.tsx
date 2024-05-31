"use client";

import s from "./UserPage.module.scss";
import Link from "next/link";

import investorIcon from "/public/images/investorIcon.png";

import Settings from "/public/images/settingUser.png";
import Chat from "/public/images/chatUser.png";
import Bell from "/public/images/userNotification.png";

import { LuLogOut } from "react-icons/lu";

import UsersCard from "../../../components/shared/UsersCard/index";
import React, { useState } from "react";
import UserInteraction from "../../features/UserInteraction";
import WelcomeBackCard from "../../features/WelcomeBack";
import UserAccountSection from "../../features/UserAccountSection";

const UserPage = () => {
  const [partners, setPartners] = useState([{ id: 2, name: "Bob Johnson" }]);

  //Dummy data for UserCard
  const cardData = [
    {
      id: 1,
      name: "John Doe",
      logo: "/path/to/logo.jpg",
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

  // @ts-ignore
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
          <UserAccountSection
            partners={partners}
            investorIcon={investorIcon}
            settingsIcon={Settings}
            chatIcon={Chat}
            notificationIcon={Bell}
          />
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
    </div>
  );
};

export default UserPage;
