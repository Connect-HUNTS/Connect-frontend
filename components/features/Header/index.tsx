import React from "react";

import s from "./Header.module.scss";
import UserAccountSection from "../UserAccountSection";

const Header = () => {
  return (
    <section className={s.wrapper}>
      <div>
        <h4 className={s.title}>Hi LouchLTD,</h4>
        <p className={s.prescription}>WELCOME BACK!</p>
      </div>
      <UserAccountSection />
    </section>
  );
};

export default Header;
