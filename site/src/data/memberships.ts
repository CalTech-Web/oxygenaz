export interface MembershipPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  idealFor: string;
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
    idealFor:
      "Individuals who plan on coming in occasionally for Core Services.",
    features: [
      "5 Core Services a month",
      "Cryotherapy, Advanced Red Light, Infrared Sauna, Compression & Oxygen",
      "Membership perks & discounts on additional services",
      "Flexible scheduling - use your 5 services anytime during the month",
    ],
  },
  {
    id: "gold",
    name: "Gold",
    price: 299,
    period: "month",
    idealFor:
      "Individuals who plan on coming in frequently for Core Services.",
    features: [
      "30 CORE Credits ($9.99 per CORE Service - SAVE $750)",
      "$60 OFF 1st Hyperbaric O2",
      "20% OFF Single Services",
      "GIFT up to 3 CORE / mo",
      "BOGO 1/2 price",
      "Trade in 10 credits for a $99 service - limited to 2 a month",
    ],
    highlighted: true,
    badge: "Most Popular",
  },
  {
    id: "platinum",
    name: "Platinum",
    price: 349,
    period: "month",
    idealFor:
      "Individuals who plan on coming in frequently for Core Services + Other Services.",
    features: [
      "60 CORE Credits (5.81 per CORE Service - 80% OFF)",
      "1 FREE Hyperbaric per month ($119 Value)",
      "30% OFF Single Services",
      "GIFT up to 6 CORE / mo",
      "BOGO 1/2 price",
      "FREE Oxygen Bar ($35 Value)",
      "Trade in 10 credits for a $99 service - limited to 4 a month",
    ],
    badge: "Best Value",
  },
];
