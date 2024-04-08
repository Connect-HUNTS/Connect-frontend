"use client";

import s from "./UserPage.module.scss";
import Link from "next/link";
import Image from "next/image";

import Logo from "../../../public/images/LogoPurple.svg";
import investorIcon from "../../../public/images/investorIcon.png";

import Forms from "../../../public/socials/forms.png";
import Settings from "../../../public/images/settingUser.png";
import Chat from "../../../public/images/chatUser.png";
import Bell from "../../../public/images/userNotification.png";

import { FiUser } from "react-icons/fi";
import { LuLogOut } from "react-icons/lu";
import { LuSettings2 } from "react-icons/lu";

import UsersCard from "@/components/shared/UsersCard";
import { useEffect, useState } from "react";
import axios from "axios";

const UserPage = () => {
  const [partners, setPartners] = useState([]);
  console.log(partners);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const response = await axios.get(
          "https://connector.fund/api/users/partners?limit=10&offset=0&sortBy=name&sortOrder=asc",
        );
        setPartners(response.data);
      } catch (error) {
        console.error("Error fetching partners:", error);
      }
    };

    fetchPartners();
  }, []);

  return (
    <div className={s.wrapper}>
      <div className={s.navSection}>
        <div>
          <div className={s.header}>
            <Image className={s.logo} src={Logo} alt="logo" />
            <h3 className={s.headerTitle}>Connector</h3>
          </div>
          <div className={s.main}>
            <p className={s.subtitle}>Navigations</p>
            <ul className={s.btnList}>
              <Link className={s.formsBtn} href="">
                <Image src={Forms} alt={"img"} />
                Forms
              </Link>
              <Link className={s.navBtn} href="">
                <FiUser style={{ width: "26px", height: "26px" }} />
                Account
              </Link>
              <Link className={s.navBtn} href="">
                <LuSettings2 style={{ width: "26px", height: "26px" }} />
                Settings
              </Link>
            </ul>
          </div>
        </div>
        <Link className={s.navBtn} href="/">
          <LuLogOut style={{ width: "26px", height: "26px" }} />
          Exit
        </Link>
      </div>
      <div className={s.cardWrapper}>
        <div className={s.userPageHeader}>
          <div style={{ paddingBottom: "26px" }}>
            {partners.map((item, index) => (
              <h4 className={s.usercardTitle} key={index}>
                {item.name}
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
        {partners.map((partner) => (
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
            ]} // Массив цветов фона
          />
        ))}
      </div>
    </div>
  );
};

export default UserPage;
