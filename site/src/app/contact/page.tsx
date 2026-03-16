import type { Metadata } from "next";
import ContactPageClient from "@/components/ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Oxygen Wellness & Physical Therapy in Glendale, AZ. Book appointments, ask questions, or visit us at 20265 N. 59th Ave. Suite B-1.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
