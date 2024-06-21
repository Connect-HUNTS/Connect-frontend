import s from "./UserAccountSection.module.scss"

import React from "react"

import { GoBell, GoGear } from "react-icons/go"
import { BiMessageDetail } from "react-icons/bi"

import { useSession } from "next-auth/react"

import investorIcon from "/public/images/investorIcon.png"

const UserAccountSection: React.FC = () => {
    const { data } = useSession()

    return (
        <div className={s.wrapper}>
            <div className={s.userAccountWrapper}>
                <img
                    src={data?.user?.image ?? investorIcon.src}
                    className={s.userNameIcons}
                    alt="investor icon"
                />
                <div className={s.rightSection}>
                    <div className={s.center}>
                        <h4 className={s.userName}>{data?.user?.name}</h4>
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
    )
}

export default UserAccountSection
