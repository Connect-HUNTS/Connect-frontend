"use client";

import React, { useState } from "react";
import s from "./UsersCard.module.scss";
import Image from "next/image";

// @ts-ignore
import dots from "/public/images/dots.png";

import { FiUser } from "react-icons/fi";
import { BsCopy, BsTelegram } from "react-icons/bs";
import {
  AiOutlineVideoCamera,
  AiOutlineLinkedin,
  AiOutlineLink,
} from "react-icons/ai";
import {
  PiChatText,
  PiPencilSimpleLineDuotone,
  PiHandshakeFill,
} from "react-icons/pi";
import { SlNotebook } from "react-icons/sl";
import { GrMap } from "react-icons/gr";
import { HiOutlineRectangleStack } from "react-icons/hi2";
import { MdOutlineLocalPostOffice } from "react-icons/md";

interface UsersCardProps {
  name: string;
  imageSrc: string;
  websiteLink: string;
  emailLink: string;
  description: string;
  proposals: string[];
  contacts: string[];
  country: string;
  links: { type: string; url: string }[];
  type: string[];
}

const UsersCard: React.FC<UsersCardProps> = ({
  name,
  imageSrc,
  websiteLink,
  emailLink,
  description,
  proposals,
  contacts,
  country,
  links,
  type,
}) => {
  const [copied, setCopied] = useState(false);
  const [iconClicked, setIconClicked] = useState<{
    email: boolean;
    website: boolean;
  }>({
    email: false,
    website: false,
  });

  const backgroundColors = [
    "#B4AAF1",
    "#AAE4F1",
    "#C1F1AA",
    "#F1E9AA",
    "#F1AAAA",
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  const handleIconClick = (type: "email" | "website") => {
    setIconClicked((prev) => ({ ...prev, [type]: true }));

    copyToClipboard(type === "website" ? websiteLink : emailLink);
    setTimeout(() => {
      setIconClicked((prev) => ({ ...prev, [type]: false }));
    }, 1000);
  };

  return (
    <div className={s.wrapper}>
      <div className={s.leftSection}>
        <img className={s.cardImage} src={imageSrc} alt="Logo" />
        <h3 className={s.linksBlock}>
          <p className={s.linksBlock_title}>
            <AiOutlineLink className="icon" />
            Website
          </p>
          <div className={s.linkSection}>
            <a
              href={`mailto:${emailLink}`}
              className={s.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {websiteLink}
            </a>
            <BsCopy
              className={`${s.copyIcon} ${iconClicked.website ? s.clickedIcon : ""}`}
              onClick={() => handleIconClick("website")}
            />
          </div>
        </h3>
        <h3 className={s.linksBlock}>
          <p className={s.linksBlock_title}>
            <MdOutlineLocalPostOffice className="icon" />
            Email
          </p>
          <div className={s.linkSection}>
            <a
              href={`mailto:${emailLink}`}
              className={s.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {emailLink}
            </a>
            <BsCopy
              className={`${s.copyIcon} ${iconClicked.email ? s.clickedIcon : ""}`}
              onClick={() => handleIconClick("email")}
            />
          </div>
        </h3>
        <div className={s.buttonsSection}>
          <button className={s.messageButton}>
            <PiChatText className="icon" /> Send a message
          </button>
          <button className={s.meetingButton}>
            <AiOutlineVideoCamera className="icon" />
            Make a meeting
          </button>
        </div>
      </div>
      <div className={s.rightSection}>
        <div className={s.rightSectionHeader}>
          <h4 className={s.rightSectionHeader_title}>{name}</h4>
          <Image src={dots} alt="dots" />
        </div>
        <div className={s.cardDescriptionBlock}>
          <h4 className={s.descriptionHeader}>
            <PiPencilSimpleLineDuotone className="icon" />
            Description
          </h4>
          <p className={s.cardDescription}>{description}</p>
        </div>
        <div className={s.typeSection}>
          <h4 className={s.typeSection_header}>
            <HiOutlineRectangleStack className="icon" />
            Type
          </h4>
          <div className={s.spanSection}>
            {type.map((typeItem, index) => (
              <span
                key={index}
                className={s.typeSpan}
                style={{
                  background:
                    backgroundColors[index % backgroundColors.length] ||
                    "#FFFFFF",
                }}
              >
                {typeItem}
              </span>
            ))}
          </div>
        </div>
        <div className={s.proposalSection}>
          <h4 className={s.proposalTitle}>
            <PiHandshakeFill className="icon" />
            Proposals
          </h4>
          <ul className={s.proposalListSection}>
            {proposals.map((item, index) => (
              <li key={index} className={s.proposalList}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className={s.contactsSection}>
          <div className={s.leftContactsSection}>
            <h4 className={s.contacts}>
              <SlNotebook />
              Contacts
            </h4>
            <ul className={s.contactsList}>
              {contacts.map((item, index) => (
                <li key={index} className={s.contactsListSection}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className={s.rightContactsSection}>
            <div className={s.locationSection}>
              <span className={s.locationTitle}>
                <GrMap className="icon" />
                Location
              </span>
              <span className={s.locationName}>{country}</span>
            </div>
            <div className={s.socialSection}>
              <span className={s.socialTitle}>
                <FiUser className="icon" />
                Social
              </span>
              <div className={s.socialIcons}>
                {links.map((item, index) => (
                  <React.Fragment key={index}>
                    {item.type === "linkedin" && (
                      <AiOutlineLinkedin className={s.icons} />
                    )}
                    {item.type === "telegram" && (
                      <BsTelegram className={s.icons} />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersCard;
