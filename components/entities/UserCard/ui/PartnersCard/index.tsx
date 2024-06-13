"use client";

import React from "react";
import s from "components/entities/UserCard/ui/InvestorCard/InvestorCard.module.scss";
import DefaultCard from "components/entities/UserCard/ui/DefaultCard/DefaultCard";
import ContactsSection from "components/features/ContactsSection";
import ProposalSection from "components/features/ProposalSection";

const PartnersCard = ({ partners }) => {
  return (
    <div className={s.wrapper}>
      {partners.map((partner) => {
        const defaultCardData = {
          name: partner.name,
          imageSrc: partner.profileImage,
          websiteLink: partner.websiteLink,
          emailLink: partner.contactInformation,
          description: partner.description,
          contacts: [partner.contactInformation],
          country: partner.country,
          links: [
            { type: "website", url: partner.website },
            { type: "telegram", url: partner.telegram },
            { type: "linkedin", url: partner.linkedin },
          ],
          type: partner.type,
        };

        return (
          <div key={partner.id} className={s.container}>
            <div className={s.infoSection}>
              <DefaultCard defaultCard={defaultCardData}>
                <div className={s.cardInfo}>
                  <div className={s.blocks}>
                    <ProposalSection proposals={partner.proposals} />
                  </div>
                  <ContactsSection
                    contacts={[partner.contactInformation]}
                    country={partner.country}
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

export default PartnersCard;
