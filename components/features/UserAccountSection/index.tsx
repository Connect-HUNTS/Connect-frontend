import React from "react";
import Image, { StaticImageData } from "next/image";
import s from "./UserAccountSection.module.scss";

import Settings from "/public/images/settingUser.png";
import Chat from "/public/images/chatUser.png";
import Bell from "/public/images/userNotification.png";

interface Partner {
  id: number;
  name: string;
}

interface UserAccountSectionProps {
  partners: { name: string }[];
  investorIcon: StaticImageData;
  settingsIcon: StaticImageData;
  chatIcon: StaticImageData;
  notificationIcon: StaticImageData;
}

const UserAccountSection: React.FC<UserAccountSectionProps> = ({
  partners,
  investorIcon,
  settingsIcon,
  chatIcon,
  notificationIcon,
}) => {
  return (
    <div className={s.wrapper}>
      <div className={s.userAccount}>
        <Image
          src={investorIcon}
          className={s.userNameIcons}
          alt="investor icon"
        />
        <div className={s.rightSection}>
          <div className={s.center}>
            {partners.map((item, index) => (
              <h4 className={s.userName} key={index}>
                {item.name}
              </h4>
            ))}
            <p className={s.userType}>Investor</p>
          </div>
          <div className={s.userIcons}>
            <Image src={Settings} className={s.userNameIcons} alt="settings" />
            <Image src={Chat} className={s.userNameIcons} alt="user chat" />
          </div>
        </div>
      </div>
      <div className={s.bellUser}>
        <Image className={s.notifications} src={Bell} alt="notification" />
      </div>
    </div>
  );
};

export default UserAccountSection;
