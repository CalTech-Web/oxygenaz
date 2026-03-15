import Hero from "@/components/sections/Hero";
import StatsCounter from "@/components/sections/StatsCounter";
import AllServices from "@/components/sections/AllServices";
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
      <PhysicalTherapySection />
      <StatsCounter />
      <AllServices />
      <PromoCTA />
      <HowItWorks />
      <Memberships />
      <TestimonialsPlaceholder />
      <AboutSection />
      <AppDownload />
      <FAQ />
    </>
  );
}
