import type { Metadata } from "next";
import { allServices } from "@/data/services";
import ServicePageClient from "@/components/ServicePageClient";

const service = allServices.find((s) => s.slug === "hyperbaric-oxygen")!;

const relatedSlugs = ["oxygen-therapy", "iv-infusions", "cryotherapy"];
const relatedServices = allServices.filter((s) => relatedSlugs.includes(s.slug));

const whatToExpect =
  "Your session lasts 60 to 90 minutes in our pressurized hyperbaric chamber. You will breathe pure oxygen at increased atmospheric pressure, allowing your body to absorb significantly more oxygen than normal. You can relax, read, or even nap during the session. Our staff will guide you through the pressurization process and monitor you throughout.";

export const metadata: Metadata = {
  title: service.name,
  description:
    "Heal faster with hyperbaric oxygen therapy in Glendale, AZ. Accelerate tissue repair, reduce swelling, and boost oxygen levels at OxygenAZ.",
};

export default function HyperbaricOxygenPage() {
  return (
    <ServicePageClient
      service={service}
      relatedServices={relatedServices}
      whatToExpect={whatToExpect}
      formSource="hyperbaric-oxygen-page"
      aboutImage="/images/services/hyperbaric-detail.webp"
      heroImage="/images/heroes/hyperbaric-hero.webp"
    />
  );
}
