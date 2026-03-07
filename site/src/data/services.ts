export interface Service {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  category: "core" | "additional" | "physical-therapy";
  slug: string;
  walkIn: boolean;
  promo?: string;
  price?: string;
  icon: string;
}

export const coreServices: Service[] = [
  {
    id: "cryotherapy",
    name: "Cryotherapy",
    shortDescription: "Whole-body cold therapy for pain reduction and recovery",
    description:
      "Step into our state-of-the-art cryotherapy chamber and experience rapid cooling that reduces inflammation, accelerates healing, and boosts your energy and mood. Sessions last just 3 minutes but deliver powerful results.",
    benefits: [
      "Reduces inflammation and joint pain",
      "Accelerates muscle recovery",
      "Boosts energy and mood",
      "Supports immune system function",
      "Improves sleep quality",
    ],
    category: "core",
    slug: "cryotherapy",
    walkIn: true,
    promo: "$20 Fridays",
    icon: "Snowflake",
  },
  {
    id: "infrared-sauna",
    name: "Infrared Sauna",
    shortDescription: "Deep-penetrating heat therapy for relaxation and healing",
    description:
      "Our infrared saunas use advanced light technology to penetrate deep into your tissues, promoting circulation, relaxation, and natural detoxification. Unlike traditional saunas, infrared heat works at a comfortable temperature while delivering superior results.",
    benefits: [
      "Improves circulation and blood flow",
      "Promotes deep relaxation",
      "Supports natural detoxification",
      "Relieves chronic pain",
      "Enhances skin health",
    ],
    category: "core",
    slug: "infrared-sauna",
    walkIn: true,
    icon: "Flame",
  },
  {
    id: "oxygen-therapy",
    name: "Oxygen Therapy",
    shortDescription:
      "Oxygen bar treatment for enhanced energy and mental clarity",
    description:
      "Breathe in concentrated oxygen to boost your energy levels, enhance mental clarity, and support your body's natural recovery processes. Our oxygen bar provides a relaxing experience that leaves you feeling refreshed and revitalized.",
    benefits: [
      "Boosts energy and mental clarity",
      "Enhances athletic performance",
      "Supports recovery and relaxation",
      "Improves focus and concentration",
      "Promotes overall well-being",
    ],
    category: "core",
    slug: "oxygen-therapy",
    walkIn: true,
    icon: "Wind",
  },
  {
    id: "red-light-therapy",
    name: "Red Light Therapy",
    shortDescription:
      "Light-based therapy for tissue repair and inflammation reduction",
    description:
      "Harness the power of specific wavelengths of red and near-infrared light to stimulate cellular repair, reduce inflammation, and promote healing at the deepest levels. This non-invasive therapy is backed by extensive scientific research.",
    benefits: [
      "Stimulates tissue repair and regeneration",
      "Reduces inflammation and joint pain",
      "Promotes collagen production",
      "Improves skin health and appearance",
      "Accelerates wound healing",
    ],
    category: "core",
    slug: "red-light-therapy",
    walkIn: true,
    icon: "Sun",
  },
  {
    id: "compression-therapy",
    name: "Compression Therapy",
    shortDescription:
      "Compression-based recovery for circulation and muscle repair",
    description:
      "Our pneumatic compression devices apply controlled pressure to your limbs, improving circulation, reducing swelling, and accelerating muscle recovery. Used by professional athletes worldwide for optimal performance and recovery.",
    benefits: [
      "Improves blood circulation",
      "Reduces muscle soreness",
      "Accelerates recovery time",
      "Decreases swelling and inflammation",
      "Enhances lymphatic drainage",
    ],
    category: "core",
    slug: "compression-therapy",
    walkIn: true,
    icon: "Waves",
  },
];

export const additionalServices: Service[] = [
  {
    id: "hyperbaric-oxygen",
    name: "Hyperbaric Oxygen Therapy",
    shortDescription:
      "Pressurized oxygen chamber for accelerated healing",
    description:
      "Experience the healing power of pressurized oxygen in our hyperbaric chamber. By breathing pure oxygen at increased atmospheric pressure, your body absorbs significantly more oxygen, accelerating wound healing, reducing inflammation, and enhancing cognitive function.",
    benefits: [
      "Accelerates wound healing and tissue repair",
      "Enhances cognitive function and mental clarity",
      "Reduces chronic inflammation",
      "Supports post-surgical recovery",
      "Boosts energy and vitality",
    ],
    category: "additional",
    slug: "hyperbaric-oxygen",
    walkIn: false,
    price: "$119 per session",
    icon: "CircleDot",
  },
  {
    id: "iv-infusions",
    name: "IV Infusions & Vitamin Shots",
    shortDescription:
      "Intravenous nutrient delivery for maximum absorption",
    description:
      "Get vitamins, minerals, and nutrients delivered directly into your bloodstream for maximum absorption and immediate results. Our customized IV blends target energy, immunity, recovery, and overall wellness.",
    benefits: [
      "100% nutrient absorption",
      "Immediate energy boost",
      "Enhanced immune support",
      "Rapid hydration",
      "Customized vitamin blends",
    ],
    category: "additional",
    slug: "iv-infusions",
    walkIn: false,
    icon: "Droplets",
  },
  {
    id: "anti-aging-peptides",
    name: "Anti-Aging Peptides",
    shortDescription:
      "Peptide-based treatments for cellular repair and rejuvenation",
    description:
      "Our peptide therapy programs use targeted amino acid chains to stimulate your body's natural repair and regeneration processes. These treatments support anti-aging, improved skin elasticity, and enhanced vitality from the cellular level.",
    benefits: [
      "Supports cellular repair and regeneration",
      "Improves skin elasticity and tone",
      "Enhances energy and vitality",
      "Promotes lean muscle maintenance",
      "Supports healthy aging",
    ],
    category: "additional",
    slug: "anti-aging-peptides",
    walkIn: false,
    icon: "Sparkles",
  },
  {
    id: "weight-loss",
    name: "Weight Loss Program",
    shortDescription:
      "Structured weight management with medical guidance",
    description:
      "Our comprehensive weight loss program combines personalized nutrition plans, targeted treatments, and ongoing accountability to help you achieve and maintain your ideal weight. Medical guidance ensures safe, effective results.",
    benefits: [
      "Personalized weight management plans",
      "Medical guidance and monitoring",
      "Combines nutrition and treatments",
      "Ongoing accountability and support",
      "Sustainable, long-term results",
    ],
    category: "additional",
    slug: "weight-loss",
    walkIn: false,
    icon: "TrendingDown",
  },
];

export const allServices = [...coreServices, ...additionalServices];
