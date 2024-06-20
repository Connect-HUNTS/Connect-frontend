import s from "./Home.module.scss"

import NavBar from "components/widgets/NavBar"
import MainSection from "components/widgets/MainSection"
import Footer from "components/widgets/Footer"

import Image from "next/image"
import leftGradient from "../public/images/gradient.png"
import globe from "/public/images/animatedGlobe.gif"

import CustomCursor from "../components/shared/customCursor"

export default function Home() {
    return (
        <>
            <main className={s.wrapper}>
                <CustomCursor />
                <div className={s.bgImage}></div>
                <div className={s.header}>
                    <NavBar />
                </div>
                <div className={s.main}>
                    <MainSection />
                </div>
                <Footer />
                <Image className={s.globe} src={globe} alt="globe" />
                <Image
                    className={s.leftGradientImg}
                    src={leftGradient}
                    alt="left gradient"
                />
            </main>
        </>
    )
}
