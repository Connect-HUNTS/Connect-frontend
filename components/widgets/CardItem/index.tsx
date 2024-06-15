import s from "./CardItem.module.scss";
import React from "react";

const CardItem = ({ imageSrc, title, description }) => {
  return (
    <div className={s.card}>
      <div className={s.content}>
        <img className={s.icon} src={imageSrc} alt="Ticket Image" />
        <h3 className={s.title}>{title}</h3>
      </div>
      <p className={s.description}>{description}</p>
    </div>
  );
};

export default CardItem;
