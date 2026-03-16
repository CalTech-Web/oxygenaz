import type { Metadata } from "next";
import { allServices } from "@/data/services";
import ServicePageClient from "@/components/ServicePageClient";

const service = allServices.find((s) => s.slug === "infrared-sauna")!;

const relatedSlugs = ["cryotherapy", "red-light-therapy", "compression-therapy"];
const relatedServices = allServices.filter((s) => relatedSlugs.includes(s.slug));

const whatToExpect =
  "Your session lasts 30 to 45 minutes in a private sauna room. Our infrared saunas operate at a comfortable temperature that is lower than traditional saunas while delivering superior therapeutic benefits. Towels are provided, and you can control the temperature to your preference. Most clients feel deeply relaxed and refreshed afterward.";

export const metadata: Metadata = {
  title: service.name,
  description: service.shortDescription,
};

export default function InfraredSaunaPage() {
  return (
    <ServicePageClient
      service={service}
      relatedServices={relatedServices}
      whatToExpect={whatToExpect}
      formSource="infrared-sauna-page"
      aboutImage="/images/services/infrared-sauna-detail.webp"
      heroImage="/images/heroes/infrared-sauna-hero.jpg"
    />
  );
}
