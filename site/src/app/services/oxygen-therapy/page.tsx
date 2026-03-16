import type { Metadata } from "next";
import { allServices } from "@/data/services";
import ServicePageClient from "@/components/ServicePageClient";

const service = allServices.find((s) => s.slug === "oxygen-therapy")!;

const relatedSlugs = ["hyperbaric-oxygen", "infrared-sauna", "iv-infusions"];
const relatedServices = allServices.filter((s) => relatedSlugs.includes(s.slug));

const whatToExpect =
  "Relax at our oxygen bar while breathing concentrated oxygen through a comfortable nasal cannula. Choose from aromatherapy-infused options to enhance your experience. Sessions are calming and rejuvenating - many clients use this time to unwind, read, or simply enjoy the boost of pure oxygen.";

export const metadata: Metadata = {
  title: service.name,
  description: service.shortDescription,
};

export default function OxygenTherapyPage() {
  return (
    <ServicePageClient
      service={service}
      relatedServices={relatedServices}
      whatToExpect={whatToExpect}
      formSource="oxygen-therapy-page"
      expectImage="/images/services/oxygen-therapy-detail.webp"
      heroImage="/images/heroes/oxygen-therapy-hero.jpg"
    />
  );
}
