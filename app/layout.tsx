import "../styles/global.scss";

import { ReactNode } from "react";
import SessionProvider from "components/features/SessionProvider";

export const metadata = {
  title: "Connector",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}