import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: {
    default: "Oxygen Wellness & Physical Therapy | Glendale, AZ",
    template: "%s | Oxygen Wellness & Physical Therapy",
  },
  description:
    "Evidence-based wellness and physical therapy in Glendale, AZ. Cryotherapy, infrared sauna, hyperbaric oxygen, IV infusions, and expert physical therapy with 25+ years of experience.",
  keywords: [
    "wellness",
    "physical therapy",
    "cryotherapy",
    "Glendale AZ",
    "hyperbaric oxygen",
    "infrared sauna",
    "red light therapy",
    "sports medicine",
  ],
  icons: {
    icon: "/images/oxygen-icon.png",
    apple: "/images/oxygen-icon.png",
  },
  openGraph: {
    title: "Oxygen Wellness & Physical Therapy",
    description:
      "Evidence-based wellness and physical therapy in Glendale, AZ. Only the Good Stuff.",
    url: "https://oxygenaz.com",
    siteName: "Oxygen Wellness & Physical Therapy",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="antialiased overflow-x-hidden">
        <Header />
        <main className="pt-[80px] lg:pt-[112px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
