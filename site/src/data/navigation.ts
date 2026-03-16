export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  children?: NavItem[];
  /** Optional group label for multi-column dropdown sections */
  group?: string;
}

/* ─── Header Navigation ─── */

export const navigation: NavItem[] = [
  { label: "Physical Therapy", href: "/physical-therapy" },
  {
    label: "Wellness Services",
    href: "/services",
    children: [
      // Column 1 - All + Core
      { label: "All Services", href: "/services", group: "all" },
      { label: "Cryotherapy", href: "/services/cryotherapy", group: "Core Services" },
      { label: "Infrared Sauna", href: "/services/infrared-sauna", group: "Core Services" },
      { label: "Oxygen Therapy", href: "/services/oxygen-therapy", group: "Core Services" },
      { label: "Red Light Therapy", href: "/services/red-light-therapy", group: "Core Services" },
      { label: "Compression Therapy", href: "/services/compression-therapy", group: "Core Services" },
      // Column 2 - Other Services
      { label: "Hyperbaric Oxygen Therapy", href: "/services/hyperbaric-oxygen", group: "Other Services" },
      { label: "IV Infusions & Vitamin Shots", href: "/services/iv-infusions", group: "Other Services" },
      { label: "Anti Aging Peptides", href: "/services/anti-aging-peptides", group: "Other Services" },
      { label: "Weight Loss Program", href: "/services/weight-loss", group: "Other Services" },
    ],
  },
  {
    label: "Learn More",
    href: "/about",
    children: [
      { label: "About Us", href: "/about" },
      {
        label: "Google Reviews",
        href: "https://oxygenaz.com/reviews/",
        external: true,
      },
      {
        label: "Review Us on Google",
        href: "https://www.google.com/maps/place//data=!4m3!3m2!1s0x872b6937d5d0b721:0xb1f5387eb1052fe0!12e1?source=g.page.m._&laa=merchant-review-solicitation",
        external: true,
      },
      {
        label: "Yelp Reviews",
        href: "https://www.yelp.com/biz/oxygen-wellness-and-physical-therapy-glendale-2",
        external: true,
      },
      {
        label: "Get Directions",
        href: "https://www.google.com/maps/place/Oxygen+Wellness+%26+Physical+Therapy/@33.670457,-112.184858,3805m/data=!3m1!1e3!4m6!3m5!1s0x872b6937d5d0b721:0xb1f5387eb1052fe0!8m2!3d33.6704574!4d-112.1848578!16s%2Fg%2F11v0xyc7x_",
        external: true,
      },
    ],
  },
];

/* ─── Footer Navigation ─── */

export const footerLinks = [
  { label: "Book Appointment", href: "/contact" },
  { label: "Physical Therapy", href: "/physical-therapy" },
  { label: "Wellness Services", href: "/services" },
  { label: "About Us", href: "/about" },
  {
    label: "Get Directions",
    href: "https://www.google.com/maps/place/20265+N+59th+Ave+b1,+Glendale,+AZ+85308",
    external: true,
  },
  {
    label: "Review Us",
    href: "https://www.google.com/maps/place/Oxygen+Wellness+%26+Physical+Therapy/@33.6633,-112.1862,17z/data=!4m8!3m7!1s0x872b6916e4e3e5e7:0x2a5e3c0b1e20e9c7!8m2!3d33.6633!4d-112.1862!9m1!1b1!16s%2Fg%2F11t3m1_7yp",
    external: true,
  },
  { label: "Store", href: "/store" },
];

/* Keep legacy exports so nothing breaks elsewhere */
export const footerServices = [
  { label: "Cryotherapy", href: "/services/cryotherapy" },
  { label: "Infrared Sauna", href: "/services/infrared-sauna" },
  { label: "Oxygen Therapy", href: "/services/oxygen-therapy" },
  { label: "Red Light Therapy", href: "/services/red-light-therapy" },
  { label: "Compression Therapy", href: "/services/compression-therapy" },
  { label: "Hyperbaric Oxygen", href: "/services/hyperbaric-oxygen" },
  { label: "IV Infusions", href: "/services/iv-infusions" },
  { label: "Physical Therapy", href: "/physical-therapy" },
];

export const footerCompany = [
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
];
