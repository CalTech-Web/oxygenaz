import type { Metadata } from "next";
import { allServices } from "@/data/services";
import ServicePageClient from "@/components/ServicePageClient";

const service = allServices.find((s) => s.slug === "compression-therapy")!;

const relatedSlugs = ["cryotherapy", "infrared-sauna", "red-light-therapy"];
const relatedServices = allServices.filter((s) => relatedSlugs.includes(s.slug));

const whatToExpect =
  "Your session lasts about 30 minutes with our pneumatic compression boots on your legs. Simply sit back and relax while the boots inflate and deflate in a rhythmic pattern, gently massaging your legs from the feet up. The pressure is adjustable to your comfort level. Many clients find this treatment deeply relaxing and notice reduced soreness immediately.";

export const metadata: Metadata = {
  title: service.name,
  description: service.shortDescription,
};

export default function CompressionTherapyPage() {
  return (
    <ServicePageClient
      service={service}
      relatedServices={relatedServices}
      whatToExpect={whatToExpect}
      formSource="compression-therapy-page"
      aboutImage="/images/services/compression-therapy-detail.webp"
    />
  );
}
