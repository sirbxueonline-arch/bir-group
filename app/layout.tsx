import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Birclick Group — Veb İnkişaf Agentliyi | Azərbaycan",
  description:
    "Konversiya edən rəqəmsal təcrübələr yaradırıq. Azərbaycanda yerləşən premium veb dizayn və inkişaf agentliyi, böyüyən bizneslər üçün müasir veb-saytlar və veb tətbiqlər hazırlayır.",
  keywords: [
    "veb inkişaf",
    "veb dizayn",
    "Azərbaycan",
    "rəqəmsal agentlik",
    "Birclick Group",
    "UI/UX",
    "e-ticarət",
    "web development Azerbaijan",
  ],
  openGraph: {
    title: "Birclick Group — Konversiya Edən Rəqəmsal Təcrübələr Yaradırıq",
    description:
      "Azərbaycanda yerləşən premium veb inkişaf agentliyi. Bizneslərin böyüməsinə kömək edən müasir, yüksək performanslı veb-saytlar hazırlayırıq.",
    url: "https://birclick.group",
    siteName: "Birclick Group",
    type: "website",
    locale: "az_AZ",
  },
  twitter: {
    card: "summary_large_image",
    title: "Birclick Group — Veb İnkişaf Agentliyi",
    description:
      "Azərbaycanda yerləşən premium veb inkişaf agentliyi. Bizneslərin böyüməsinə kömək edən müasir, yüksək performanslı veb-saytlar hazırlayırıq.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="az"
      className={`${syne.variable} ${dmSans.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-gray-900 font-sans selection:bg-blue-100 selection:text-blue-900">
        {children}
      </body>
    </html>
  );
}
