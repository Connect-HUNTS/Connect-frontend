import React from "react";

import s from "./WelcomeBackCard.module.scss";

interface CardData {
  name: string;
}

interface WelcomeBackCardProps {
  cardData: CardData[];
}

const WelcomeBackCard: React.FC<WelcomeBackCardProps> = ({ cardData }) => {
  return (
    <div className={s.wrapper}>
      {cardData.map((item, index) => (
        <h4 className={s.usercardTitle} key={index}>
          Hi {item.name},
        </h4>
      ))}
      <br />
      <span className={s.welcomeBack}>WELCOME BACK!</span>
    </div>
  );
};

export default WelcomeBackCard;
