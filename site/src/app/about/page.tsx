import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AboutPageClient from "@/components/AboutPageClient";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Oxygen Wellness & Physical Therapy in Glendale, AZ. Evidence-based wellness treatments and 25+ years of physical therapy expertise with Dr. Clint Borman.",
};

export default function AboutPage() {
  return <AboutPageClient />;
}
