"use client";

import s from "./UserPage.module.scss";

import Loading from "./loading";

import { FormsProvider } from "contexts/FormsContext";
import FiltersSection from "components/features/FiltersSection";
import dynamic from "next/dynamic";

const DynamicInvestors = dynamic(
  () => import("components/entities/Investors"),
  {
    loading: () => <Loading />,
  },
);

const InvestorsPage = () => {
  return (
    <FormsProvider>
      <div className={s.wrapper}>
        <section className={s.content}>
          <DynamicInvestors />
        </section>
        <FiltersSection />
      </div>
    </FormsProvider>
  );
};

export default InvestorsPage;
