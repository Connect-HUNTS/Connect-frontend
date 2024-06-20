import "./Layout.scss"

import s from "./UserPage.module.scss"

import { ReactNode } from "react"

import Navigation from "components/features/Navigation"

import { FormsProvider } from "contexts/FormsContext"

import Header from "components/features/Header"
import FiltersSection from "components/features/FiltersSection"

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <Navigation />
            <main>
                <Header />
                <FormsProvider>
                    <section className={s.wrapper}>
                        <div className={s.content}>{children}</div>
                        <FiltersSection />
                    </section>
                </FormsProvider>
            </main>
        </>
    )
}
