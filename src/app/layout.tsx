import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { TopBar } from "@/components/topbar/Topbar";

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
      <body className={`${inter.className} relative`}>
        <TopBar className="h-[55px] w-full" />
        {children}
      </body>
    </html>
  );
}
