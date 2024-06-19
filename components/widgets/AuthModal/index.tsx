"use client";

import s from "./AuthModal.module.scss";

import { useState } from "react";

import { Screen } from "./types";

import Portal from "components/shared/Portal";
import Modal from "./ui/Modal";

const AuthModal = () => {
  const [screen, setScreen] = useState<Screen | null>(null);

  const onCLose = () => {
    setScreen(null);
  };

  const changeScreen = (screen: Screen) => {
    setScreen(screen);
  };

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
          <Modal
            screen={screen}
            onClose={onCLose}
            changeScreen={changeScreen}
          />
        </Portal>
      )}
    </>
  );
};

export default AuthModal;
