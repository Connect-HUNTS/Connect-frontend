"use client";

import s from "./AuthModal.module.scss";

import { useState } from "react";

import { Screen } from "./types";

import Portal from "components/shared/Portal";
import DefaultModal from "./ui/DefaultModal";

const AuthModal = () => {
  const [screen, setScreen] = useState<Screen>();

  return (
    <>
      <button className={s.navButton} onClick={() => setScreen("sign-in")}>
        Log In
      </button>
      <button className={s.navButton} onClick={() => setScreen("sign-up")}>
        Sign Up
      </button>
      {screen && (
        <Portal>
          <DefaultModal screen={screen} />
        </Portal>
      )}
    </>
  );
};

export default AuthModal;
