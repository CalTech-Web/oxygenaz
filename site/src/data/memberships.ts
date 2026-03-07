export interface MembershipPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
}

export const membershipPlans: MembershipPlan[] = [
  {
    id: "basic",
    name: "Basic",
    price: 99,
    period: "month",
    features: [
      "5 Core Service credits monthly",
      "Flexible scheduling",
      "Membership perks and discounts",
    ],
  },
  {
    id: "gold",
    name: "Gold",
    price: 299,
    period: "month",
    features: [
      "30 Core Credits ($9.99 per service)",
      "$60 off first Hyperbaric O2 session",
      "20% off single services",
      "Gift up to 3 core credits monthly",
      "BOGO half-price option",
    ],
    highlighted: true,
    badge: "Most Popular",
  },
  {
    id: "platinum",
    name: "Platinum",
    price: 349,
    period: "month",
    features: [
      "60 Core Credits ($5.81 per service, 80% off)",
      "1 FREE Hyperbaric session monthly ($119 value)",
      "30% off single services",
      "Free Oxygen Bar ($35 value)",
      "Gift up to 6 core credits monthly",
    ],
    badge: "Best Value",
  },
];
