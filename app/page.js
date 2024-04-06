import s from "./Home.module.scss";

import NavBar from "@/components/widgets/NavBar";
import MainSection from "@/components/widgets/MainSection";

import leftGradient from "../public/images/gradient.png";
import globe from "/public/images/animatedGlobe.gif";
import Image from "next/image";
import CustomCursor from "@/components/shared/customCursor";
import Footer from "@/components/widgets/Footer";

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

        <Image className={s.globe} src={globe} alt={""} />
        <Image
          className={s.leftGradientImg}
          src={leftGradient}
          alt={"left gradient"}
        />
        {/*<Image className={s.globeShadow} src={leftGradient} alt={"shadow gradient"}/>*/}
      </main>
    </>
  );
}
