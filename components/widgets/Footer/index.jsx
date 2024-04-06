'use client'

import Image from "next/image";
import s from "./Footer.module.scss";

import FooterLogo from "/public/images/FooterLogo.png";
import instagramLogo from "/public/socials/instagramLogo.png";
import facebookLogo from "/public/socials/facebookLogo.png";
import twitterLogo from "/public/socials/twitterLogo.png";
import Link from "next/link";
import CustomCursor from "@/components/shared/customCursor";

const Footer = () => {
    return (
        <div className={s.wrapper}>

            <div className={s.rightsSection}>
                <p className={s.paragraph}>2024 All rights reserved ©</p>
            </div>
            <div className={s.logoSection}>
                <Image src={FooterLogo} alt="footer logo"/>
                <span className={s.footerSpan}>Connector</span>
            </div>
            <div className={s.socialsSection}>
                <Link href={"#"}>
                    <Image src={instagramLogo} alt="twitter Logo"/>
                </Link>
                <Link href={"#"}>
                    <Image src={facebookLogo} alt="twitter Logo"/>
                </Link>
                <Link href={"#"}>
                    <Image src={twitterLogo} alt="twitter Logo"/>
                </Link>
            </div>

        </div>
    );
};

export default Footer;
