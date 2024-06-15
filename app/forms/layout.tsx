import s from "./Forms.module.scss"

import { ReactNode } from "react"
import Navigation from "components/features/Navigation"

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <nav className={s.navigation}>
                <Navigation />
            </nav>
            <main>{children}</main>
        </>
    )
}
