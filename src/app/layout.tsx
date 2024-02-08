import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { TopBar } from "@/components/topbar/Topbar";
import { Banner } from "@/components/banner/Banner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sneak",
  description: "A shoe website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-[100vw] h-[100vh] overflow-hidden`}>
        <div className="w-full h-full relative overflow-hidden">
        <TopBar className="h-[55px] w-full"/>
        <Banner className="h-[calc(100%-55px)] w-full absolute left-0 top-[55px]"/>
        <div className="w-full h-[calc(100%-55px)]">{children}</div>
        </div>
      </body>
    </html>
  );
}
