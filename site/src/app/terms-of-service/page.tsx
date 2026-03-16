import type { Metadata } from "next";
import TermsOfServicePageClient from "@/components/TermsOfServicePageClient";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of service for Oxygen Wellness & Physical Therapy in Glendale, AZ. Review our policies on services, payments, and use of our website.",
};

export default function TermsOfServicePage() {
  return <TermsOfServicePageClient />;
}
