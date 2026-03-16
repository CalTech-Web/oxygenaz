import type { Metadata } from "next";
import WellnessServicesPageClient from "@/components/WellnessServicesPageClient";

export const metadata: Metadata = {
  title: "Wellness Services",
  description:
    "Explore our full range of wellness services including cryotherapy, infrared sauna, oxygen therapy, red light therapy, hyperbaric oxygen, IV infusions, and more.",
};

export default function WellnessServicesPage() {
  return <WellnessServicesPageClient />;
}
