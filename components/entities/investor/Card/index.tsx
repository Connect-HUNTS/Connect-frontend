import s from "./Card.module.scss";

import { FC } from "react";
import { InvestorType } from "types/InvestorTypes";
import DefaultCard from "components/shared/DefaultCard";

interface CardI {
  investor: InvestorType;
}

const Card: FC<CardI> = ({ investor }) => {
  return (
    <DefaultCard entity={investor}>
      <div className={s.wrapper}></div>
    </DefaultCard>
  );
};

export default Card;
