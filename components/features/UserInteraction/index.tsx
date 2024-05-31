import React from "react";
import s from "../../features/UserInteraction/UserInteraction.module.scss";
import Image from "next/image";
import Link from "next/link";
import Logo from "/public/images/LogoPurple.svg";

import Forms from "/public/socials/forms.png";

import { FiUser } from "react-icons/fi";

import { LuSettings2 } from "react-icons/lu";

const UserInteraction = () => {
  return (
    <div className={s.headerSection}>
      <div className={s.logoSection}>
        <Image className={s.logo} src={Logo} alt="logo" />
        <h3 className={s.headerTitle}>Connector</h3>
      </div>

      <div className={s.main}>
        <p className={s.subtitle}>Navigations</p>
        <ul className={s.btnList}>
          <Link className={s.formsButton} href="">
            <Image src={Forms} alt={"img"} />
            Forms
          </Link>
          <Link className={s.navButton} href="">
            <FiUser className="icon" />
            Account
          </Link>
          <Link className={s.navButton} href="">
            <LuSettings2 className="icon" />
            Settings
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default UserInteraction;
