import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-figtree",
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
    <html lang="en" className={figtree.variable}>
      <body className="antialiased overflow-x-hidden">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
