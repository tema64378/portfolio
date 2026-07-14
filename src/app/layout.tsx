import type { Metadata, Viewport } from "next";
import { Inter, Raleway } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { LanguageProvider } from "@/lib/i18n";
import { contacts } from "@/lib/content";
import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";
import ScrollProgress from "@/components/ScrollProgress";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
  variable: "--font-raleway-src",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://xn--e1aybc.com"),
  title: "Артём Яковлев — графический дизайнер и веб-разработчик",
  description:
    "Графический дизайнер и веб-разработчик из Великого Новгорода. Брендинг, айдентика, графика, интерфейсы и код — от афиши до веб-приложения. 3 года практики.",
  keywords: [
    "Артём Яковлев",
    "графический дизайнер",
    "веб-разработчик",
    "брендинг",
    "айдентика",
    "UI/UX",
    "портфолио",
    "Великий Новгород",
  ],
  authors: [{ name: "Артём Яковлев" }],
  openGraph: {
    title: "Артём Яковлев — дизайнер и разработчик",
    description:
      "Брендинг, айдентика, графика, интерфейсы и код — от афиши до веб-приложения.",
    type: "website",
    locale: "ru_RU",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Артём Яковлев",
  alternateName: "Artem Yakovlev",
  jobTitle: "Графический дизайнер и веб-разработчик",
  address: { "@type": "PostalAddress", addressLocality: "Великий Новгород", addressCountry: "RU" },
  email: `mailto:${contacts.email}`,
  url: "https://xn--e1aybc.com",
  sameAs: [contacts.behance, contacts.github, contacts.telegram],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={`${inter.variable} ${raleway.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <LanguageProvider>
          <Preloader />
          <ScrollProgress />
          <SmoothScroll>{children}</SmoothScroll>
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
