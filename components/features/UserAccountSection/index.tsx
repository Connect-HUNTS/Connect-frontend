import s from "./UserAccountSection.module.scss"

import React from "react"
import Image from "next/image"

import investorIcon from "/public/images/investorIcon.png"
import settingsIcon from "/public/images/settingUser.png"
import chatIcon from "/public/images/chatUser.png"
import notificationIcon from "/public/images/userNotification.png"

const UserAccountSection: React.FC = () => {
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
                        <h4 className={s.userName}>LouchLTD</h4>
                        <p className={s.userType}>Investor</p>
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
    )
}

export default UserAccountSection
