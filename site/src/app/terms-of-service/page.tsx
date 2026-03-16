import type { Metadata } from "next";
import TermsOfServicePageClient from "@/components/TermsOfServicePageClient";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsOfServicePage() {
  return <TermsOfServicePageClient />;
}
