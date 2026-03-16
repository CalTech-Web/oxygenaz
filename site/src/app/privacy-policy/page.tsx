import type { Metadata } from "next";
import PrivacyPolicyPageClient from "@/components/PrivacyPolicyPageClient";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Oxygen Wellness & Physical Therapy in Glendale, AZ. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyPageClient />;
}
