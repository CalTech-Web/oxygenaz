import type { Metadata } from "next";
import { allServices } from "@/data/services";
import ServicePageClient from "@/components/ServicePageClient";

const service = allServices.find((s) => s.slug === "red-light-therapy")!;

const relatedSlugs = ["infrared-sauna", "cryotherapy", "anti-aging-peptides"];
const relatedServices = allServices.filter((s) => relatedSlugs.includes(s.slug));

const whatToExpect =
  "Your session lasts 15 to 20 minutes standing or lying near our professional-grade red light panels. The treatment is completely non-invasive and painless - you will feel a gentle warmth on your skin. No special preparation is needed. Many clients notice improvements in skin tone and reduced pain after just a few sessions.";

export const metadata: Metadata = {
  title: service.name,
  description:
    "Rejuvenate your skin and reduce pain with red light therapy in Glendale, AZ. Non-invasive sessions for anti-aging and recovery at OxygenAZ.",
};

export default function RedLightTherapyPage() {
  return (
    <ServicePageClient
      service={service}
      relatedServices={relatedServices}
      whatToExpect={whatToExpect}
      formSource="red-light-therapy-page"
      expectImage="/images/services/red-light-detail.webp"
      heroImage="/images/heroes/red-light-hero.jpg"
    />
  );
}
