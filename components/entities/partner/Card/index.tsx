"use client";

import s from "./Card.module.scss";

import { FC } from "react";
import DefaultCard from "components/shared/DefaultCard";
import { MdOutlineCalendarMonth } from "react-icons/md";

import Container from "components/shared/Container";
import { PartnersType } from "types/PartnerType";

interface CardI {
  partner: PartnersType;
}

const Card: FC<CardI> = ({ partner }) => {
  return (
    <DefaultCard entity={partner}>
      <div className={s.wrapper}></div>
      <Container icon={<MdOutlineCalendarMonth />} title="Proposals">
        {!!partner.proposals.length ? (
          <ul className={s.list}>
            {partner.proposals.map((proposal) => (
              <li key={proposal}>{proposal}</li>
            ))}
          </ul>
        ) : (
          "Not Set"
        )}
      </Container>
    </DefaultCard>
  );
};

export default Card;
