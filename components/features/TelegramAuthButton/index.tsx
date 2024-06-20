"use client";

import { FC } from "react";

import Script from "next/script";
import TelegramSVG from "components/shared/icons/TelegramSVG";

import { signIn } from "next-auth/react";
import { AuthError } from "next-auth";

interface TelegramAuthButton {
  className?: string;
}

const TelegramAuthButton: FC<TelegramAuthButton> = ({ className = "" }) => {
  const handleClickEvent = () => {
    window.Telegram.Login.auth(
      { bot_id: "7289597921", request_access: true },
      (data) => {
        if (data === false) {
          return "telegram log in failed";
        }

        try {
          signIn(
            "telegram-login",
            {
              callbackUrl: "/investors",
            },
            data as any,
          );
        } catch (error) {
          if (error instanceof AuthError) {
            return "telegram log in failed";
          }
          throw error;
        }
      },
    );
  };

  return (
    <>
      <button className={className} onClick={handleClickEvent}>
        <TelegramSVG />
        Continue with Telegram
      </button>
      <Script src="https://telegram.org/js/telegram-widget.js" />
    </>
  );
};

export default TelegramAuthButton;
