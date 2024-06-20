"use client";

import { FC } from "react";

import Script from "next/script";
import TelegramSVG from "components/shared/icons/TelegramSVG";
import { telegramAuthenticate } from "../../../lib/actions";

interface TelegramAuthButton {
  className?: string;
}

const TelegramAuthButton: FC<TelegramAuthButton> = ({ className = "" }) => {
  const handleClickEvent = () => {
    window.Telegram.Login.auth(
      { bot_id: "7289597921", request_access: true },
      (data) => {
        telegramAuthenticate(data);
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
