import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Reviews",
  description:
    "See what our clients are saying about Oxygen Wellness & Physical Therapy in Glendale, AZ. 5-star Google reviews from real patients.",
};

export default function ReviewsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
