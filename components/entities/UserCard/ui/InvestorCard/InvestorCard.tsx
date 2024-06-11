"use client";

import React, { useEffect, useState } from "react";
import DefaultCard from "components/entities/UserCard/ui/DefaultCard/DefaultCard";
import { InvestorCardType } from "types/InvestorCardTypes";
import axios from "axios";
import { defaultCardTypes } from "types/defaultCardTypes";
import UserAccountSection, {
  Partner,
  UserAccountSectionProps,
} from "components/features/UserAccountSection";

import investorIcon from "public/images/investorIcon.png";
import settingsIcon from "public/images/settingUser.png";
import chatIcon from "public/images/chatUser.png";
import notificationIcon from "public/images/userNotification.png";
import descriptionImage from "/public/icons/pencilIcon.png";
import minTicketImage from "public/icons/startupIcons/arrow-down-icon.png";
import maxTicketImage from "public/icons/startupIcons/arrow-up-icon.png";
import leadInvestorImage from "public/icons/startupIcons/medal-icon.png";
import raiseTyperImage from "public/icons/startupIcons/raise-type-icon.png";
import fundingRoundImage from "public/icons/startupIcons/calendar-icon.png";

import s from "./InvestorCard.module.scss";
import ContactsSection from "components/features/ContactsSection";
import TypeSection from "components/features/TypeSection";
import WelcomeBack from "components/features/WelcomeBack";
import ReusableCard from "components/features/cards/ReusableCard";
import TicketCard from "components/features/cards/TicketCard";
import InfoCard from "components/features/cards/InfoCard";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZW1haWwiOiJpbnZlc3RvckBleGFtcGxlLmNvbSIsInJvbGUiOiJJTlZFU1RPUiIsImlhdCI6MTcxNzYwMzEzNiwiZXhwIjoxNzIwMTk1MTM2fQ.9q-YC36KKI3h6G6Z76BZMtKS2OHYpDuyK8ViAzP0VXQ";

export const getInvestors = async (): Promise<InvestorCardType[]> => {
  try {
    const response = await axios.get(
      "http://104.207.130.38:3000/api/users/investors?limit=10&offset=0&sortBy=name&sortOrder=asc",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

const InvestorCard = () => {
  const [investors, setInvestors] = useState<InvestorCardType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInvestors = async () => {
      try {
        const data = await getInvestors();
        setInvestors(data);
      } catch (error) {
        setError("Failed to fetch investors");
      } finally {
        setLoading(false);
      }
    };

    fetchInvestors();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className={s.wrapper}>
      {investors.map((investor) => {
        const defaultCardData: defaultCardTypes = {
          name: investor.name,
          imageSrc: investor.profileImage,
          websiteLink: investor.website,
          emailLink: investor.contactInformation,
          description: investor.description,
          contacts: [investor.contactInformation],
          country: investor.country,
          links: [{ type: "website", url: investor.website }],
          type: [investor.investorType],
        };

        const userAccountSectionProps: UserAccountSectionProps = {
          partner: {
            id: investor.id,
            name: investor.name,
            type: [investor.investorType],
          },
          investorIcon: investorIcon,
          settingsIcon: settingsIcon,
          chatIcon: chatIcon,
          notificationIcon: notificationIcon,
        };

        return (
          <div key={investor.id} className={s.container}>
            <div className={s.header}>
              <WelcomeBack name={investor.name} />
              <UserAccountSection {...userAccountSectionProps} />
            </div>
            <div className={s.infoSection}>
              <DefaultCard defaultCard={defaultCardData} />
              <div className={s.cardInfo}>
                <InfoCard
                  iconSrc={descriptionImage}
                  title="Description"
                  description={investor.description}
                />
                <TypeSection
                  type={[investor.investorType]}
                  backgroundColors={[
                    "#B4AAF1",
                    "#AAE4F1",
                    "#C1F1AA",
                    "#F1E9AA",
                    "#F1AAAA",
                  ]}
                />
                <div className={s.blocks}>
                  <TicketCard
                    iconSrc={minTicketImage}
                    title="Min Ticket"
                    description={investor.minTicketSize}
                  />
                  <ReusableCard
                    iconSrc={leadInvestorImage}
                    title="Lead investor"
                    description={investor.leadInvestor}
                  />
                </div>
                <div className={s.blocks}>
                  <TicketCard
                    iconSrc={maxTicketImage}
                    title="Max Ticket"
                    description={investor.maxTicketSize}
                  />
                  <ReusableCard
                    iconSrc={raiseTyperImage}
                    title="Raise type"
                    description={investor.investmentType}
                  />
                </div>
                <ReusableCard
                  iconSrc={fundingRoundImage}
                  title="Founding Round"
                  description={investor.fundingRound}
                />
                <ContactsSection
                  contacts={[investor.contactInformation]}
                  country={investor.country}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default InvestorCard;
