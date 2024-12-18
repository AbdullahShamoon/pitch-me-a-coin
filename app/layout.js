import { Inter } from "next/font/google";
import "./globals.css";
import SessionWrapper from "@/components/SessionWrapper";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pitch me A Coin - Fund Your Projects",
  description: "A crowdfunding platform designed for creators and innovators",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionWrapper>
        {children}
        <Footer />
        </SessionWrapper>
        </body>
    </html>
  );
}
