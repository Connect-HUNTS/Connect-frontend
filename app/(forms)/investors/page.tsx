"use client";

import s from "./UserPage.module.scss";

import Loading from "./loading";

import { FormsProvider } from "contexts/FormsContext";
import FiltersSection from "components/features/FiltersSection";
import dynamic from "next/dynamic";

const DynamicInvestorsList = dynamic(
  () => import("components/features/InvestorsList"),
  {
    loading: () => <Loading />,
  },
);

const InvestorsPage = () => {
  return (
    <FormsProvider>
      <section className={s.wrapper}>
        <div className={s.content}>
          <DynamicInvestorsList />
        </div>
        <FiltersSection />
      </section>
    </FormsProvider>
  );
};

export default InvestorsPage;
