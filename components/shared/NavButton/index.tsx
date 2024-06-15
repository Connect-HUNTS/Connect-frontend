"use client"

import s from "./NavButton.module.scss"
import React, { ReactNode } from "react"

import { redirect, usePathname } from "next/navigation"

interface NavButton {
  title: string;
  href: string;
  icon: ReactNode;
}

export const NavButton: React.FC<NavButton> = ({ title, href, icon }) => {
    const path = usePathname()

    const redirectToHref = () => {
        return redirect(href)
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
