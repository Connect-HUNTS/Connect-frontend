import React, { FC, ReactNode, useState } from "react";
import s from "./DefaultCard.module.scss";
import LinksSection from "components/features/LinksSection";
import { AiOutlineLink, AiOutlineVideoCamera } from "react-icons/ai";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { PiChatText } from "react-icons/pi";
import { defaultCardTypes } from "types/defaultCardTypes";
import InfoCard from "components/features/cards/InfoCard";
import descriptionImage from "public/icons/pencilIcon.png";
import TypeSection from "components/features/TypeSection";
import dotsIcon from "public/images/dots.png";
import CardItem from "components/features/cards/CardItem";

interface defaultCardProps {
  defaultCard: defaultCardTypes;
  children: ReactNode;
}

const DefaultCard: FC<defaultCardProps> = ({ defaultCard, children }) => {
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
      <div className={s.left}>
        <img
          className={s.cardImage}
          src={imageSrc ?? "/public/images/defaultImage.png"}
          alt="Logo"
        />
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
      <div className={s.right}>
        <CardItem title={name} iconSrc={dotsIcon} />
        <InfoCard
          iconSrc={descriptionImage}
          title="Description"
          description={description}
        />
        <TypeSection
          type={type}
          backgroundColors={[
            "#B4AAF1",
            "#AAE4F1",
            "#C1F1AA",
            "#F1E9AA",
            "#F1AAAA",
          ]}
        />
        {children}
      </div>
    </div>
  );
};

export default DefaultCard;
