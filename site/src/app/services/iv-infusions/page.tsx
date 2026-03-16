import type { Metadata } from "next";
import { allServices } from "@/data/services";
import ServicePageClient from "@/components/ServicePageClient";

const service = allServices.find((s) => s.slug === "iv-infusions")!;

const relatedSlugs = ["hyperbaric-oxygen", "oxygen-therapy", "anti-aging-peptides"];
const relatedServices = allServices.filter((s) => relatedSlugs.includes(s.slug));

const whatToExpect =
  "Your session lasts 30 to 60 minutes with a customized IV drip tailored to your specific needs. A trained professional will place a small IV line, and you can relax comfortably while the nutrients flow directly into your bloodstream. Choose from blends targeting energy, immunity, recovery, hydration, and more. Many clients feel the effects almost immediately.";

export const metadata: Metadata = {
  title: service.name,
  description:
    "Get IV infusions and vitamin shots in Glendale, AZ. Hydrate, boost immunity, and restore energy with customized IV drips at OxygenAZ.",
};

export default function IVInfusionsPage() {
  return (
    <ServicePageClient
      service={service}
      relatedServices={relatedServices}
      whatToExpect={whatToExpect}
      formSource="iv-infusions-page"
      aboutImage="/images/services/iv-infusions-detail.webp"
      heroImage="/images/heroes/iv-infusions-hero.jpg"
      expectImage="/images/services/iv-infusions-expect.webp"
    />
  );
}
