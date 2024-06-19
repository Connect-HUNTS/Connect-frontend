import s from "./Header.module.scss";

import { FC } from "react";

import { Screen } from "../../types";

interface Header {
  screen: Screen;
  changeScreen: (screen: Screen) => void;
}

const Header: FC<Header> = ({ screen, changeScreen }) => {
  return (
    <div className={s.wrapper}>
      <button
        className={[s.btn, screen === "sign-in" ? s.active : ""].join(" ")}
        onClick={() => changeScreen("sign-in")}
      >
        Log In
      </button>
      <button
        className={[s.btn, screen === "sign-up" ? s.active : ""].join(" ")}
        onClick={() => changeScreen("sign-up")}
      >
        Sign Up
      </button>
    </div>
  );
};

export default Header;
