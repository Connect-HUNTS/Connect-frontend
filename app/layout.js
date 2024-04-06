import styles from "../styles/global.scss";
import CustomCursor from "@/components/shared/customCursor";
import Footer from "@/components/widgets/Footer";

export const metadata = {
    title: "Connector",
    description: "Generated by create next app",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">


        <body>
        {children}

        </body>
        </html>
    );
}
