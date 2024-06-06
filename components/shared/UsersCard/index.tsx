"use client";

import React, { useState } from "react";
import s from "./UsersCard.module.scss";
import Image from "next/image";
import dots from "/public/images/dots.png";

import { AiOutlineVideoCamera, AiOutlineLink } from "react-icons/ai";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { PiChatText, PiPencilSimpleLineDuotone } from "react-icons/pi";
import TypeSection from "../../features/TypeSection";
import ProposalsSection from "../../features/ProposalSection";
import ContactsSection from "../../features/ContactsSection";
import LinksSection from "../../features/LinksSection";

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
  keyCases?: string[];
  backgroundColors?: [string, string, string, string, string];
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
        <LinksSection
          title="Website"
          link={websiteLink}
          icon={<AiOutlineLink className="icon" />}
          iconClicked={iconClicked.website}
          handleIconClick={() => handleIconClick("website")}
        />
        <LinksSection
          title="Email"
          link={emailLink}
          icon={<MdOutlineLocalPostOffice className="icon" />}
          iconClicked={iconClicked.email}
          handleIconClick={() => handleIconClick("email")}
        />
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
        <TypeSection type={type} backgroundColors={backgroundColors} />
        <ProposalsSection proposals={proposals} />
        <ContactsSection contacts={contacts} country={country} links={links} />
      </div>
    </div>
  );
};

export default UsersCard;
