import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { allServices } from "@/data/services";
import ContactForm from "@/components/ContactForm";
import ServicePageClient from "@/components/ServicePageClient";

const service = allServices.find((s) => s.slug === "cryotherapy")!;

const relatedSlugs = ["infrared-sauna", "compression-therapy", "red-light-therapy"];
const relatedServices = allServices.filter((s) => relatedSlugs.includes(s.slug));

const whatToExpect =
  "Your session lasts just 3 minutes in our state-of-the-art cryo chamber at -200F to -300F. You will wear minimal clothing - gloves, socks, and undergarments are provided. A trained technician monitors you the entire time. Most clients feel energized and refreshed immediately after stepping out.";

export const metadata: Metadata = {
  title: service.name,
  description: service.shortDescription,
};

export default function CryotherapyPage() {
  return (
    <ServicePageClient
      service={service}
      relatedServices={relatedServices}
      whatToExpect={whatToExpect}
      formSource="cryotherapy-page"
    />
  );
}
