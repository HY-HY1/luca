import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar/navbar";
import Announcement from "@/components/layout/announcement/announcement";
import Footer from "@/components/layout/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ryzens Wholesale LTD",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className=" overflow-x-hidden" lang="en">
      <body  className={inter.className}>
        <Announcement/>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
