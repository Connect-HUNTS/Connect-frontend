"use client";

import { config } from "../../../configs/navBarConfig";

import Image from "next/image";
import Link from "next/link";

import Logo from "../../../public/images/Logo.png";

import s from "./NavBar.module.scss";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const router = useRouter();

  const redirectToHref = (href: string) => {
    return router.push(href);
  };

  return (
    <nav className={s.wrapper}>
      <Image src={Logo} alt="image logo" className={s.logo} />
      <div className={s.navBarSection}>
        {config.navBar.map((item, index) => (
          <Link key={index} href={item.url} className={s.navBarLinks}>
            {item.title}
          </Link>
        ))}
      </div>
      <div className={s.buttonsSection}>
        <button
          className={s.navButton}
          onClick={() => redirectToHref("sign-in")}
        >
          Log In
        </button>
        <button
          className={s.navButton}
          onClick={() => redirectToHref("sign-up")}
        >
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
