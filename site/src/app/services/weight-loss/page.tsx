import type { Metadata } from "next";
import { allServices } from "@/data/services";
import ServicePageClient from "@/components/ServicePageClient";

const service = allServices.find((s) => s.slug === "weight-loss")!;

const relatedSlugs = ["iv-infusions", "anti-aging-peptides", "infrared-sauna"];
const relatedServices = allServices.filter((s) => relatedSlugs.includes(s.slug));

const whatToExpect =
  "Your program begins with an initial consultation and metabolic assessment to understand your body, goals, and lifestyle. From there, we build a customized weight loss plan that may include nutrition guidance, targeted treatments, and ongoing accountability check-ins. This is not a one-size-fits-all approach - every plan is tailored to help you achieve and maintain your ideal weight safely and effectively.";

export const metadata: Metadata = {
  title: service.name,
  description: service.shortDescription,
};

export default function WeightLossPage() {
  return (
    <ServicePageClient
      service={service}
      relatedServices={relatedServices}
      whatToExpect={whatToExpect}
      formSource="weight-loss-page"
      aboutImage="/images/services/weight-loss-detail.webp"
      heroImage="/images/heroes/weight-loss-hero.jpg"
      expectImage="/images/services/weight-loss-expect.jpg"
    />
  );
}
