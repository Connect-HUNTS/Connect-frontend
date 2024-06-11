import { ReactNode } from "react"

import Navigation from "components/features/Navigation"

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <Navigation />
            <main>{children}</main>
        </>
    )
}
