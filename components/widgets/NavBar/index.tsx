"use client"

import s from "./NavBar.module.scss"

import { config } from "configs/navBarConfig"

import Image from "next/image"
import Link from "next/link"

import Logo from "public/images/Logo.png"

import AuthModal from "components/widgets/AuthModal"

const NavBar = () => {
    return (
        <nav className={s.wrapper}>
            <Image src={Logo} alt="image logo" className={s.logo} />
            <div className={s.navBarSection}>
                {config.navBar.map((item, index) => (
                    <Link key={index} href={item.url} className={s.navBarLinks}>
                        {item.title}
                    </Link>
                ))}
            </div>
            <div className={s.buttonsSection}>
                <AuthModal />
            </div>
        </nav>
    )
}

export default NavBar
