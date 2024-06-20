// LinksSection.tsx
import React from "react"
import { AiOutlineLink } from "react-icons/ai"
import { MdOutlineLocalPostOffice } from "react-icons/md"
import { BsCopy } from "react-icons/bs"
import s from "./LinksSection.module.scss"

interface LinksBlockProps {
  title: string;
  link: string;
  icon: React.ReactNode;
  iconClicked: boolean;
  handleIconClick: () => void;
}

const LinksSection: React.FC<LinksBlockProps> = ({
    title,
    link,
    icon,
    iconClicked,
    handleIconClick,
}) => {
    return (
        <h3 className={s.linksBlock}>
            <p className={s.linksBlock_title}>
                {icon}
                {title}
            </p>
            <div className={s.linkSection}>
                <a
                    href={link}
                    className={s.link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {link}
                </a>
                <BsCopy
                    className={`${s.copyIcon} ${iconClicked ? s.clickedIcon : ""}`}
                    onClick={handleIconClick}
                />
            </div>
        </h3>
    )
}

export default LinksSection
