import type { Metadata } from "next";
import PhysicalTherapyPageClient from "@/components/PhysicalTherapyPageClient";

export const metadata: Metadata = {
  title: "Physical Therapy & Sports Medicine",
  description:
    "Expert physical therapy and sports medicine with Dr. Clint Borman. 25+ years of experience in spinal manipulation, dry needling, cupping, and more in Glendale, AZ.",
};

export default function PhysicalTherapyPage() {
  return <PhysicalTherapyPageClient />;
}
