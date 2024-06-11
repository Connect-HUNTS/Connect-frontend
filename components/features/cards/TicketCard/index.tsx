import React from "react";
import s from "./TicketCard.module.scss";
import Image from "next/image";

interface ReusableCardProps {
  iconSrc: string;
  title: string;
  description: string | number;
}

const TicketCard: React.FC<ReusableCardProps> = ({
  iconSrc,
  title,
  description,
}) => {
  return (
    <div className={s.card}>
      <div className={s.content}>
        <Image src={iconSrc} alt="icon" />
        <span className={s.title}>{title}</span>
      </div>
      <p className={s.description}>{description}$</p>
    </div>
  );
};

export default TicketCard;
