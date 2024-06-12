import React, { FC } from "react";
import Image from "next/image";
import s from "./CardItem.module.scss";

interface CardItemProps {
  iconSrc?: string;
  title?: string;
}

const CardItem: FC<CardItemProps> = ({ title, iconSrc }) => {
  return (
    <div className={s.card}>
      <span className={s.title}>{title}</span>
      <Image src={iconSrc} alt="icon" />
    </div>
  );
};

export default CardItem;
