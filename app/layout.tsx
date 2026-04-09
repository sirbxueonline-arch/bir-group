import type { Metadata } from "next";
import { Big_Shoulders_Display, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const bigShoulders = Big_Shoulders_Display({
  subsets: ["latin"],
  weight: ["800", "900"],
  variable: "--font-big-shoulders",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-manrope",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "birclick.az — Veb & Mobil Tətbiq Agentliyi | Bakı",
  description:
    "Bir klik. Sonsuz imkan. Azərbaycanın aparıcı veb dizayn, mobil tətbiq və rəqəmsal həllər agentliyi.",
  keywords: [
    "web design baku",
    "mobile app azerbaijan",
    "birclick",
    "veb dizayn",
    "mobil tətbiq",
  ],
  openGraph: {
    title: "birclick.az — Bir klik. Sonsuz imkan.",
    description: "Azərbaycanın aparıcı rəqəmsal həllər agentliyi.",
    url: "https://birclick.az",
    siteName: "birclick.az",
    locale: "az_AZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="az"
      className={`${bigShoulders.variable} ${manrope.variable} ${jetbrains.variable}`}
    >
      <body className="font-body bg-cream text-ink">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
