"use client"

import s from "./NavButton.module.scss"
import React, { ReactNode } from "react"

import { usePathname, useRouter } from "next/navigation"

interface NavButton {
  title: string;
  href: string;
  icon: ReactNode;
}

export const NavButton: React.FC<NavButton> = ({ title, href, icon }) => {
    const path = usePathname()
    const router = useRouter()

    const redirectToHref = () => {
        return router.push(href)
    }

    return (
        <button
            className={[s.btn, path.includes(href) ? s.active : ""].join(" ")}
            onClick={redirectToHref}
        >
            {icon}
            {title}
        </button>
    )
}
