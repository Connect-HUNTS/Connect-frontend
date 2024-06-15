"use client";

import Loading from "components/shared/Loading";

import dynamic from "next/dynamic";

const DynamicPartnersList = dynamic(
  () => import("components/features/PartnersList"),
  {
    loading: () => <Loading />,
  },
);

const InvestorsPage = () => {
  return <DynamicPartnersList />;
};

export default InvestorsPage;
