"use client";

import s from "./InvestorCard.module.scss";

import DefaultCard from "components/entities/UserCard/ui/DefaultCard/DefaultCard";
import ContactsSection from "components/features/ContactsSection";
import ReusableCard from "components/features/cards/ReusableCard";
import TicketCard from "components/features/cards/TicketCard";

import investorIcon from "public/images/investorIcon.png";
import settingsIcon from "public/images/settingUser.png";
import chatIcon from "public/images/chatUser.png";
import notificationIcon from "public/images/userNotification.png";
import minTicketImage from "public/icons/investorIcons/arrow-down-icon.png";
import maxTicketImage from "public/icons/investorIcons/arrow-up-icon.png";
import leadInvestorImage from "public/icons/investorIcons/medal-icon.png";
import raiseTyperImage from "public/icons/investorIcons/raise-type-icon.png";
import fundingRoundImage from "public/icons/investorIcons/calendar-icon.png";
import UserAccountSection, {
  UserAccountSectionProps,
} from "components/features/UserAccountSection";

const InvestorCard = ({ investors }) => {
  return (
    <div className={s.wrapper}>
      {investors.map((investor) => {
        const defaultCardData = {
          name: investor.name,
          imageSrc: investor.profileImage,
          websiteLink: investor.website,
          emailLink: investor.contactInformation,
          description: investor.description,
          contacts: [investor.contactInformation],
          country: investor.country,
          links: [
            { type: "website", url: investor.website },
            { type: "telegram", url: investor.telegram },
            { type: "linkedin", url: investor.linkedin },
          ],
          type: investor.investorType,
        };

        const userAccountSectionProps: UserAccountSectionProps = {
          partner: {
            id: investor.id,
            name: investor.name,
            type: investor.investorType,
          },
          investorIcon: investorIcon,
          settingsIcon: settingsIcon,
          chatIcon: chatIcon,
          notificationIcon: notificationIcon,
        };

        return (
          <div key={investor.id} className={s.container}>
            <div className={s.infoSection}>
              <DefaultCard defaultCard={defaultCardData}>
                <div className={s.cardInfo}>
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
                    links={defaultCardData.links}
                  />
                </div>
              </DefaultCard>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default InvestorCard;
