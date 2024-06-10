import React from "react";

import s from "./WelcomeBackCard.module.scss";

const WelcomeBackCard = () => {
  return (
    <div className={s.wrapper}>
      <h4 className={s.usercardTitle}>Hi User,</h4>
      <br />
      <span className={s.welcomeBack}>WELCOME BACK!</span>
    </div>
  );
};

export default WelcomeBackCard;
