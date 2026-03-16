import type { Metadata } from "next";
import PrivacyPolicyPageClient from "@/components/PrivacyPolicyPageClient";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyPageClient />;
}
