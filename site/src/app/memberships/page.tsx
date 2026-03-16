import type { Metadata } from "next";
import MembershipsPageClient from "@/components/MembershipsPageClient";

export const metadata: Metadata = {
  title: "Membership Plans",
  description:
    "Join Oxygen Wellness membership plans. Save up to 80% on core wellness services including cryotherapy, infrared sauna, red light therapy, and more in Glendale, AZ.",
};

export default function MembershipsPage() {
  return <MembershipsPageClient />;
}
