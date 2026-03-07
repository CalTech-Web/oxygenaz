import Hero from "@/components/sections/Hero";
import PhysicalTherapySection from "@/components/sections/PhysicalTherapySection";
import PromoCTA from "@/components/sections/PromoCTA";
import CoreServices from "@/components/sections/CoreServices";
import AdditionalServices from "@/components/sections/AdditionalServices";
import Memberships from "@/components/sections/Memberships";
import AboutSection from "@/components/sections/AboutSection";
import AppDownload from "@/components/sections/AppDownload";
import FAQ from "@/components/sections/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <PhysicalTherapySection />
      <PromoCTA variant="consultation" />
      <CoreServices />
      <PromoCTA variant="core-service" />
      <AdditionalServices />
      <Memberships />
      <AboutSection />
      <AppDownload />
      <FAQ />
    </>
  );
}
