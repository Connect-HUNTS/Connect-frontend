import React from "react";

import s from "./Header.module.scss";
import UserAccountSection from "../UserAccountSection";

const Header = () => {
  return (
    <div className={s.wrapper}>
      <div>
        <h4 className={s.title}>Hi LouchLTD,</h4>
        <p className={s.prescription}>WELCOME BACK!</p>
      </div>
      <UserAccountSection />
    </div>
  );
};

export default Header;
