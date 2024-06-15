"use client";

import React from "react";

import s from "./Header.module.scss";
import UserAccountSection from "../UserAccountSection";
import { useSession } from "next-auth/react";

const Header = () => {
  const { data } = useSession();

  return (
    <section className={s.wrapper}>
      <div>
        <h4 className={s.title}>Hi {data?.user?.name},</h4>
        <p className={s.prescription}>WELCOME BACK!</p>
      </div>
      <UserAccountSection />
    </section>
  );
};

export default Header;
