import Hero from "@/components/sections/Hero";
import CoreServices from "@/components/sections/CoreServices";
import PhysicalTherapySection from "@/components/sections/PhysicalTherapySection";
import AdditionalServices from "@/components/sections/AdditionalServices";
import Memberships from "@/components/sections/Memberships";
import PromoCTA from "@/components/sections/PromoCTA";
import FAQ from "@/components/sections/FAQ";
import AppDownload from "@/components/sections/AppDownload";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <CoreServices />
      <PhysicalTherapySection />
      <AdditionalServices />
      <Memberships />
      <PromoCTA />
      <FAQ />
      <AppDownload />
      <ContactSection />
    </>
  );
}
