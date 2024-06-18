import s from "./DefaultModal.module.scss";

import { FC } from "react";

import { Screen } from "../../types";

interface DefaultModal {
  screen: Screen;
}

const DefaultModal: FC<DefaultModal> = ({ screen }) => {
  return (
    <div>
      <div className={s.header}></div>
      {screen === "sign-in" ? <div></div> : <div></div>}
    </div>
  );
};

export default DefaultModal;
