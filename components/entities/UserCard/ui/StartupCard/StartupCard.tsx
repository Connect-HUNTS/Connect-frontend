"use client";

import s from "./StartupCard.module.scss";

import DefaultCard from "components/entities/UserCard/ui/DefaultCard/DefaultCard";
import ReusableCard from "components/features/cards/ReusableCard";
import ContactsSection from "components/features/ContactsSection";

import calendarImage from "public/icons/startupIcons/calendar-icon.png";
import dateTGEImage from "public/icons/startupIcons/watch-date-icon.png";
import vestingImage from "public/icons/startupIcons/lock-icon.png";
import tgeImage from "public/icons/startupIcons/coin-icon.png";
import cliffImage from "public/icons/startupIcons/timer-icon.png";

const StartupCard = ({ startups }) => {
  return (
    <div className={s.wrapper}>
      {startups.map((startup) => {
        const defaultCardData = {
          name: startup.name,
          imageSrc: startup.profileImage,
          websiteLink: startup.website,
          emailLink: startup.contactInformation,
          description: startup.description,
          contacts: [startup.contactInformation],
          country: startup.country,
          links: [
            { type: "website", url: startup.website },
            { type: "telegram", url: startup.telegram },
            { type: "linkedin", url: startup.linkedin },
          ],
          type: startup.investorType,
        };

        return (
          <div key={startup.id} className={s.wrapper}>
            <div className={s.infoSection}>
              <DefaultCard defaultCard={defaultCardData}>
                <div className={s.cardInfo}>
                  <div className={s.blocks}>
                    <ReusableCard
                      iconSrc={calendarImage}
                      title="Round"
                      description={startup.fundingRound}
                    />
                    <ReusableCard
                      iconSrc={dateTGEImage}
                      title="Date TGE"
                      description={startup.tgeDate}
                    />
                  </div>
                  <div className={s.blocks}>
                    <ReusableCard
                      iconSrc={vestingImage}
                      title="Vesting"
                      description={""}
                    />
                    <ReusableCard
                      iconSrc={tgeImage}
                      title="TGE"
                      description={""}
                    />
                  </div>

                  <div style={{ width: "50%" }}>
                    <ReusableCard
                      iconSrc={cliffImage}
                      title="Cliff"
                      description={""}
                    />
                  </div>
                  <ContactsSection
                    contacts={[startup.contactInformation]}
                    country={startup.country}
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

export default StartupCard;
