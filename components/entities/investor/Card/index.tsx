"use client"

import s from "./Card.module.scss"

import { FC } from "react"

import { InvestorType } from "@/types/InvestorType"
import DefaultCard from "components/shared/DefaultCard"

import { RiDownloadLine } from "react-icons/ri"
import { LuPieChart } from "react-icons/lu"
import { MdOutlineCalendarMonth } from "react-icons/md"

import MedalSVG from "components/shared/icons/MedalSVG"

import Container from "components/shared/Container"

interface CardI {
  investor: InvestorType;
}

const Card: FC<CardI> = ({ investor }) => {
    return (
        <DefaultCard entity={investor}>
            <div className={s.wrapper}>
                <div className={s.left}>
                    <Container icon={<RiDownloadLine />} title="Min Ticket" display="row">
                        <p className={s.text}>{investor.minTicketSize}$</p>
                    </Container>
                    <Container
                        icon={<RiDownloadLine className={s.upload} />}
                        title="Max Ticket"
                        display="row"
                    >
                        <p className={s.text}>{investor.maxTicketSize}$</p>
                    </Container>
                </div>
                <div className={s.right}>
                    <Container icon={<MedalSVG />} title="Lead Investor" display="row">
                        <p className={s.text}>{investor.leadInvestor ? "Yes" : "No"}</p>
                    </Container>
                    <Container icon={<LuPieChart />} title="Raise type" display="row">
                        <p className={s.text}>
                            {!!investor.investmentType ? investor.investmentType : "Not Set"}
                        </p>
                    </Container>
                </div>
            </div>
            <Container
                icon={<MdOutlineCalendarMonth />}
                title="Founding Round"
                display="row"
            >
                <p className={s.text}>
                    {!!investor.fundingRound[0] ? investor.fundingRound[0] : "Not Set"}
                </p>
            </Container>
        </DefaultCard>
    )
}

export default Card
