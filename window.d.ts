import { Callback, Options } from "types/telegram";

declare global {
  interface Window {
    Telegram: {
      Login: {
        auth: (options: Options, callback: Callback) => void;
      };
    };
  }
}
