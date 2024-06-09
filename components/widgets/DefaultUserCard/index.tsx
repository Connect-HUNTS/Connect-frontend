import s from "./DefaultUserCard.module.scss";

import React, { FC, useState } from "react";
import { defaultCardTypes } from "../../../types/defaultCardTypes";
import LinksSection from "../../features/LinksSection";
import { AiOutlineLink, AiOutlineVideoCamera } from "react-icons/ai";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { PiChatText, PiPencilSimpleLineDuotone } from "react-icons/pi";
import Image from "next/image";
import dots from "../../../public/images/dots.png";
import TypeSection from "../../features/TypeSection";
import CardItem from "../CardItem";
import cardItem from "../CardItem";
import ContactsSection from "../../features/ContactsSection";

interface defaultCardProps {
  defaultCard: defaultCardTypes;
}

const DefaultUserCard: FC<defaultCardProps> = ({ defaultCard }) => {
  const {
    name,
    imageSrc,
    websiteLink,
    emailLink,
    description,
    contacts,
    country,
    links,
    type,
  } = defaultCard;

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
        <div className={s.description}>
          <h4 className={s.descriptionTitle}>
            <PiPencilSimpleLineDuotone className="icon" />
            Description
          </h4>
          <p className={s.cardDescription}>{description}</p>
        </div>
        <TypeSection type={type} backgroundColors={backgroundColors} />
        <div className={s.itemsSection}>
          <CardItem
            title={cardItem.name}
            description={cardItem.name}
            imageSrc={""}
          />
          <CardItem
            title={cardItem.name}
            description={cardItem.name}
            imageSrc={""}
          />
        </div>
        <div className={s.itemsSection}>
          <CardItem
            title={cardItem.name}
            description={cardItem.name}
            imageSrc={""}
          />
          <CardItem
            title={defaultCard.cardItems.fundingRound}
            description={cardItem.name}
            imageSrc={""}
          />
        </div>
        <CardItem
          title={cardItem.name}
          description={cardItem.name}
          imageSrc={""}
        />
        <ContactsSection contacts={contacts} country={country} links={links} />
      </div>
    </div>
  );
};

export default DefaultUserCard;
