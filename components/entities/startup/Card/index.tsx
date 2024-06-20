"use client";

import s from "./Card.module.scss";

import { FC } from "react";

import { StartupType } from "types/StartupType";
import DefaultCard from "components/shared/DefaultCard";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { PiWatch } from "react-icons/pi";

import Container from "components/shared/Container";

interface CardI {
  startup: StartupType;
}

const Card: FC<CardI> = ({ startup }) => {
  return (
    <DefaultCard entity={startup}>
      <div className={s.wrapper}>
        <div className={s.left}>
          <Container
            icon={<MdOutlineCalendarMonth />}
            title="Round"
            display="row"
          >
            <p className={s.text}>{startup.fundingRound}</p>
          </Container>
        </div>
        <div className={s.right}>
          <Container icon={<PiWatch />} title="Date TGE" display="row">
            <p className={s.text}>
              {startup.tgeDate ? startup.tgeDate : "Not Set"}
            </p>
          </Container>
        </div>
      </div>
    </DefaultCard>
  );
};

export default Card;
