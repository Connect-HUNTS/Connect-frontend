import s from "./UserAccountSection.module.scss";

import React from "react";
import Image from "next/image";

import investorIcon from "/public/images/investorIcon.png";
import settingsIcon from "/public/images/settingUser.png";
import chatIcon from "/public/images/chatUser.png";
import notificationIcon from "/public/images/userNotification.png";

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
        <Image src={settingsIcon} className={s.icon} alt="settings" />
        <Image src={chatIcon} className={s.icon} alt="user chat" />
      </div>
      <div className={s.notificationsWrapper}>
        <Image className={s.icon} src={notificationIcon} alt="notification" />
        <span className={s.counter}>3</span>
      </div>
    </div>
  );
};

export default UserAccountSection;
