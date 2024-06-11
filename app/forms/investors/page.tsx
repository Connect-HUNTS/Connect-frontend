import axios from "axios";
import s from "components/widgets/UserPage/UserPage.module.scss";
import InvestorCard from "components/entities/UserCard/ui/InvestorCard/InvestorCard";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZW1haWwiOiJpbnZlc3RvckBleGFtcGxlLmNvbSIsInJvbGUiOiJJTlZFU1RPUiIsImlhdCI6MTcxNzYwMzEzNiwiZXhwIjoxNzIwMTk1MTM2fQ.9q-YC36KKI3h6G6Z76BZMtKS2OHYpDuyK8ViAzP0VXQ";

const getPartners = async () => {
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

const userPage = () => {
  return (
    <div className={s.wrapper}>
      <InvestorCard />
      {/*<div className={s.sidebarSection}>*/}
      {/*    <div className={s.header}>*/}
      {/*        <UserInteraction />*/}
      {/*    </div>*/}
      {/*</div>*/}
      {/*<div className={s.cardSection}>*/}
      {/*    <WelcomeBackCard />*/}
      {/*    {partners.map((partner: any) => (*/}
      {/*        <div className={s.content} key={partner.id}>*/}
      {/*            <div className={s.cardLeftSection}>*/}
      {/*                <div className={s.userCardSection}>*/}
      {/*                    <UsersCard*/}
      {/*                        userCard={{*/}
      {/*                            name: partner.name,*/}
      {/*                            imageSrc: partner.logo,*/}
      {/*                            websiteLink: partner.websiteLink,*/}
      {/*                            emailLink: partner.contactEmail,*/}
      {/*                            proposals: partner.proposals,*/}
      {/*                            description: partner.description,*/}
      {/*                            contacts: partner.contacts,*/}
      {/*                            country: partner.country,*/}
      {/*                            keyCases: partner.keyCases,*/}
      {/*                            type: partner.type,*/}
      {/*                            links: partner.links,*/}
      {/*                        }}*/}
      {/*                    />*/}
      {/*                </div>*/}
      {/*            </div>*/}
      {/*            <div className={s.cardRightSection}>*/}
      {/*                <UserAccountSection*/}
      {/*                  partner={partner}*/}
      {/*                  investorIcon={investorIcon as StaticImageData}*/}
      {/*                  settingsIcon={Settings as StaticImageData}*/}
      {/*                  chatIcon={Chat as StaticImageData}*/}
      {/*                  notificationIcon={Bell as StaticImageData}*/}
      {/*                />*/}
      {/*                <FiltersSection />*/}
      {/*            </div>*/}
      {/*        </div>*/}
      {/*    ))}*/}
      {/*</div>*/}
    </div>
  );
};

export default userPage;
