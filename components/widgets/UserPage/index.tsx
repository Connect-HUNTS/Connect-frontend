"use client";

import s from "./UserPage.module.scss";
import Link from "next/link";
import Image from "next/image";

import investorIcon from "/public/images/investorIcon.png";

import Settings from "/public/images/settingUser.png";
import Chat from "/public/images/chatUser.png";
import Bell from "/public/images/userNotification.png";

import { LuLogOut } from "react-icons/lu";

import UsersCard from "../../../components/shared/UsersCard/index";
import React, { useState } from "react";
import UserInteraction from "../../features/UserInteraction";

const UserPage = () => {
  const [partners, setPartners] = useState([]);

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

  return (
    <div className={s.wrapper}>
      <div className={s.header__section}>
        <div className={s.header}>
          <UserInteraction />
        </div>
        <Link className={s.navBtn} href="/">
          <LuLogOut className="icon" />
          Exit
        </Link>
      </div>
      <div className={s.card__section}>
        <div className={s.userPageHeader}>
          <div style={{ paddingBottom: "26px" }}>
            {cardData.map((item, index) => (
              <h4 className={s.usercardTitle} key={index}>
                Hi {item.name},
              </h4>
            ))}
            <br />
            <span className={s.welcomeBack}>WELCOME BACK!</span>
          </div>
          <div className={s.mainRight}>
            <div className={s.userAccount}>
              <Image
                src={investorIcon}
                className={s.userNameIcons}
                alt="investor icon"
              />
              <div className={s.rightSection}>
                <div className={s.center}>
                  {partners.map((item, index) => (
                    <h4 className={s.userName} key={index}>
                      {item.name}
                    </h4>
                  ))}
                  <p className={s.userType}>Investor</p>
                </div>
                <div className={s.userIcons}>
                  <Image
                    src={Settings}
                    className={s.userNameIcons}
                    alt="settings"
                  />
                  <Image
                    src={Chat}
                    className={s.userNameIcons}
                    alt="user chat"
                  />
                </div>
              </div>
            </div>
            <div className={s.bellUser}>
              <Image
                className={s.notifications}
                src={Bell}
                alt="notification"
              />
            </div>
          </div>
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
