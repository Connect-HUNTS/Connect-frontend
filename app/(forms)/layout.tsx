import "./Layout.scss";

import { ReactNode } from "react";

import Navigation from "components/features/Navigation";
import Header from "components/features/Header";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navigation />
      <main>
        <Header />
        {children}
      </main>
    </>
  );
}
