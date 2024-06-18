"use client";

import Loading from "components/shared/Loading";

import dynamic from "next/dynamic";

const DynamicInvestorsList = dynamic(
  () => import("components/features/InvestorsList"),
  {
    loading: () => <Loading />,
  },
);

const InvestorsPage = () => {
  return <DynamicInvestorsList />;
};

export default InvestorsPage;
