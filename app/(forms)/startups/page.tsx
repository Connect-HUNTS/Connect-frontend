"use client";

import Loading from "components/shared/Loading";

import dynamic from "next/dynamic";

const DynamicStartupsList = dynamic(
  () => import("components/features/StartupsList"),
  {
    loading: () => <Loading />,
  },
);

const StartUpsPage = () => {
  return <DynamicStartupsList />;
};

export default StartUpsPage;
