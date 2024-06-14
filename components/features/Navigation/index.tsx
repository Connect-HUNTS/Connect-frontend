import s from "./Navigation.module.scss";

import React from "react";

import Image from "next/image";
import Link from "next/link";

import Logo from "/public/images/LogoPurple.svg";

import { FiUser } from "react-icons/fi";
import { LuLogOut, LuSettings2 } from "react-icons/lu";
import { FaPeopleGroup, FaRocket, FaUserTie } from "react-icons/fa6";

import { NavButton } from "components/shared/NavButton";
import { signOut } from "../../../app/api/auth/[...nextauth]/auth";

const Navigation = () => {
  return (
    <nav className={s.navigation}>
      <div className={s.wrapper}>
        <div>
          <Link className={s.logo} href="/">
            <Image className={s.logoImage} src={Logo} alt="logo" />
            <h3 className={s.logoTitle}>Connector</h3>
          </Link>
          <div className={s.nav}>
            <p className={s.navTitle}>Navigations</p>
            <div className={s.navBtnWrapper}>
              <NavButton
                icon={<FaUserTie />}
                href="/investors"
                title="Investors"
              />
              <NavButton
                icon={<FaRocket />}
                href="/startups"
                title="Startups"
              />
              <NavButton
                icon={<FaPeopleGroup />}
                href="/partners"
                title="Partners"
              />
              <hr className={s.separator} />
              <NavButton icon={<FiUser />} href="/account" title="Account" />
              <NavButton
                icon={<LuSettings2 />}
                href="/settings"
                title="Settings"
              />
            </div>
          </div>
        </div>
        <button
          className={s.logout}
          onClick={async () => {
            "use server";
            await signOut();
          }}
        >
          <LuLogOut className="icon" />
          Exit
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
