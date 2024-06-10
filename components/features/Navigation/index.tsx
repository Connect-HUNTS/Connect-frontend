import s from "./Navigation.module.scss"

import React from "react"

import Image from "next/image"
import Link from "next/link"

import Logo from "/public/images/LogoPurple.svg"

import { FiUser } from "react-icons/fi"
import { LuLogOut, LuSettings2 } from "react-icons/lu"
import { TiBusinessCard } from "react-icons/ti"
import { NavButton } from "../../shared/NavButton"

const Navigation = () => {
    return (
        <div className={s.wrapper}>
            <div>
                <Link className={s.logo} href="/">
                    <Image className={s.logoImage} src={Logo} alt="logo" />
                    <h3 className={s.logoTitle}>Connector</h3>
                </Link>
                <div className={s.nav}>
                    <p className={s.navTitle}>Navigations</p>
                    <div className={s.navBtnWrapper}>
                        <NavButton icon={<TiBusinessCard />} href="/forms" title="Forms" />
                        <NavButton icon={<FiUser />} href="/account" title="Account" />
                        <NavButton
                            icon={<LuSettings2 />}
                            href="/settings"
                            title="Settings"
                        />
                    </div>
                </div>
            </div>
            <Link className={s.logout} href="/">
                <LuLogOut className="icon" />
        Exit
            </Link>
        </div>
    )
}

export default Navigation
