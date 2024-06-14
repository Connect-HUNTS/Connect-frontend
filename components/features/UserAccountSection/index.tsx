import s from "./UserAccountSection.module.scss";

import React from "react";
import Image from "next/image";

import { GoBell, GoGear } from "react-icons/go";
import { BiMessageDetail } from "react-icons/bi";

import investorIcon from "/public/images/investorIcon.png";

const UserAccountSection: React.FC = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.userAccountWrapper}>
        <Image
          src={investorIcon}
          className={s.userNameIcons}
          alt="investor icon"
        />
        <div className={s.rightSection}>
          <div className={s.center}>
            <h4 className={s.userName}>LouchLTD</h4>
            <p className={s.userType}>Investor</p>
          </div>
        </div>
        <GoGear className={s.icon} />
        <BiMessageDetail className={s.icon} />
      </div>
      <div className={s.notificationsWrapper}>
        <GoBell className={[s.icon, s.bell].join(" ")} />
        <span className={s.counter}>3</span>
      </div>
    </div>
  );
};

export default UserAccountSection;
