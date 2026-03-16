import type { Metadata } from "next";
import { allServices } from "@/data/services";
import ServicePageClient from "@/components/ServicePageClient";

const service = allServices.find((s) => s.slug === "anti-aging-peptides")!;

const relatedSlugs = ["red-light-therapy", "iv-infusions", "weight-loss"];
const relatedServices = allServices.filter((s) => relatedSlugs.includes(s.slug));

const whatToExpect =
  "Your journey begins with a thorough consultation to understand your goals and health history. Based on your needs, we design a personalized peptide protocol that targets your specific concerns - whether that is skin rejuvenation, energy, muscle maintenance, or overall anti-aging support. Follow-up visits track your progress and allow adjustments to optimize results.";

export const metadata: Metadata = {
  title: service.name,
  description: service.shortDescription,
};

export default function AntiAgingPeptidesPage() {
  return (
    <ServicePageClient
      service={service}
      relatedServices={relatedServices}
      whatToExpect={whatToExpect}
      formSource="anti-aging-peptides-page"
      aboutImage="/images/services/anti-aging-detail.webp"
      heroImage="/images/heroes/anti-aging-hero.webp"
      expectImage="/images/services/anti-aging-expect.jpg"
    />
  );
}
