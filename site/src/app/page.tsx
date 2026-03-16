import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import WellnessLivingWidgets from "@/components/sections/WellnessLivingWidgets";
import StatsCounter from "@/components/sections/StatsCounter";
import CoreServices from "@/components/sections/CoreServices";
import OtherServices from "@/components/sections/OtherServices";
import PromoCTA from "@/components/sections/PromoCTA";
import PhysicalTherapySection from "@/components/sections/PhysicalTherapySection";
import HowItWorks from "@/components/sections/HowItWorks";
import Memberships from "@/components/sections/Memberships";
import TestimonialsPlaceholder from "@/components/sections/TestimonialsPlaceholder";
import AboutSection from "@/components/sections/AboutSection";
import AppDownload from "@/components/sections/AppDownload";
import FAQ from "@/components/sections/FAQ";
import { faqItems } from "@/data/faq";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export const metadata: Metadata = {
  title: "Oxygen Wellness & Physical Therapy | Cryotherapy, Infrared Sauna & PT in Glendale, AZ",
  description:
    "Oxygen Wellness & Physical Therapy in Glendale, AZ offers cryotherapy, infrared sauna, hyperbaric oxygen, IV infusions, red light therapy, compression therapy, and expert physical therapy with 25+ years of experience. Walk-ins welcome.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero />
      <WellnessLivingWidgets />
      <PhysicalTherapySection />
      <StatsCounter />
      <CoreServices />
      <PromoCTA />
      <OtherServices />
      <HowItWorks />
      <Memberships />
      <TestimonialsPlaceholder />
      <AboutSection />
      <AppDownload />
      <FAQ />
    </>
  );
}
