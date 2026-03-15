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

export default function Home() {
  return (
    <>
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
