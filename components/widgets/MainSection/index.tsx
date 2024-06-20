"use client"

import { useEffect, useState } from "react"
import s from "./MainSection.module.scss"
import { useRouter } from "next/navigation"

function MainSection() {
    const words = [
        "STARTUPS",
        "INVESTORS",
        "VCs",
        "EXCHANGES",
        "LAUNCHPADS",
        "MARKET MAKERS",
        "SECURITY",
        "LAWYERS",
        "KOLs",
        "FAMILY OFFICES",
        "DEVELOPERS",
        "OTC",
        "EVENTS",
    ]
    const [animatedWordIndex, setAnimatedWordIndex] = useState(0)

    const router = useRouter()

    const redirectToHref = () => {
        return router.push("sign-up")
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimatedWordIndex((prevIndex) =>
                prevIndex === words.length - 1 ? 0 : prevIndex + 1,
            )
        }, 3000)

        return () => clearInterval(interval)
    }, [])

    const cardsData = [
        {
            id: 1,
            imageSrc: "/images/cardImage.png",
            websiteLink: "https://www.google.com/",
            emailLink: "example@example.com",
            buttonLabels: ["Button 1", "Button 2"],
            descriptions: ["Description 1", "Description 2"],
        },
    // Другие объекты с данными
    ]

    return (
        <div className={s.wrapper}>
            <div className={s.mainSection}>
                <h1 className={s.title}>Connector</h1>
                <h4 className={s.subTitle}>
          Introduce you to
                    <span
                        className={s.animatedSpan}
                        data-content={words[animatedWordIndex]}
                    >
                        {words[animatedWordIndex]}
                    </span>
                </h4>
                <p className={s.description}>
          Connector is an AI platform in the web3 space that connects investors,
          VCs, startups,
                    <br /> businesses and end users into an ecosystem of early stage
          investments.
                </p>
                <button className={s.getStartedBtn} onClick={redirectToHref}>
          GET STARTED
                </button>
            </div>
        </div>
    )
}

export default MainSection
