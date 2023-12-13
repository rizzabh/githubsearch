import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Github Searcher",
  description:
    "This Website provides a beautiful layout to search github profiles in the format of cards",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <div className="gradient1 -z-10">
          <img src="/Group 1.png" alt="" />
        </div>
        <div className="gradient2 -z-10">
          <img src="/Group 2.png" alt="" />
        </div>
        <Analytics />
        
      </body>
    </html>
  );
}
