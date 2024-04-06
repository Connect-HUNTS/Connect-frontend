"use client";

import {useEffect, useState} from "react";
import s from "./MainSection.module.scss";
import Link from "next/link";


function MainSection() {
    const words = [
        "A STARTUP",
        "THE EXCHANGE",
        "MARKET MAKER",
        "A MARKETER",
        "LAWYERS",
        "KOLS",
        "OTC",
        "FAMILY OFFICE",
        "DEVELOPERS",
        "THE AUDIENCE",
        "INVESTORS",
        "LAUNCHPADS",
        "SECURITY",
        "EVENTS",
    ];
    const [animatedWordIndex, setAnimatedWordIndex] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            setAnimatedWordIndex((prevIndex) => (prevIndex === words.length - 1 ? 0 : prevIndex + 1));
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const cardsData = [
        {
            id: 1,
            imageSrc: '/images/cardImage.png',
            websiteLink: 'https://www.google.com/',
            emailLink: 'example@example.com',
            buttonLabels: ['Button 1', 'Button 2'],
            descriptions: ['Description 1', 'Description 2'],
        },
        // Другие объекты с данными
    ];


    return (
        <div className={s.wrapper}>
            <div className={s.mainSection}>
                <h1 className={s.title}>Connector</h1>
                <h4 className={s.subTitle}>
                    Introduce you to
                    <span className={s.animatedSpan} data-content={words[animatedWordIndex]}>
            {words[animatedWordIndex]}
          </span>
                </h4>
                <p className={s.description}>
                    Connector is an AI platform in the web3 space that connects investors,
                    VCs, startups,
                    <br/> businesses and end users into an ecosystem of early stage
                    investments.
                </p>
                <Link href="/userpage">
                    <button className={s.getStartedBtn}>GET STARTED</button>
                </Link>
            </div>
        </div>
    );
}

export default MainSection;
