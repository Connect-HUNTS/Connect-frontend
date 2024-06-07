import React from "react";
import Image, { StaticImageData } from "next/image";
import s from "./UserAccountSection.module.scss";

interface Partner {
  id: number;
  name: string;
  type: string[];
}

interface UserAccountSectionProps {
  partner: Partner; // Изменяем на один объект партнера
  investorIcon: StaticImageData;
  settingsIcon: StaticImageData;
  chatIcon: StaticImageData;
  notificationIcon: StaticImageData;
}

const UserAccountSection: React.FC<UserAccountSectionProps> = ({
  partner,
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
            <h4 className={s.userName}>{partner.name}</h4>
            <p className={s.userType}>{partner.type}</p>
          </div>
          <div className={s.userIcons}>
            <Image
              src={settingsIcon}
              className={s.userNameIcons}
              alt="settings"
            />
            <Image src={chatIcon} className={s.userNameIcons} alt="user chat" />
          </div>
        </div>
      </div>
      <div className={s.bellUser}>
        <Image
          className={s.notifications}
          src={notificationIcon}
          alt="notification"
        />
      </div>
    </div>
  );
};

export default UserAccountSection;
