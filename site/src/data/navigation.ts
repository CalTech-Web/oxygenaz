export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const navigation: NavItem[] = [
  {
    label: "Services",
    href: "/services/cryotherapy",
    children: [
      { label: "Cryotherapy", href: "/services/cryotherapy" },
      { label: "Infrared Sauna", href: "/services/infrared-sauna" },
      { label: "Oxygen Therapy", href: "/services/oxygen-therapy" },
      { label: "Red Light Therapy", href: "/services/red-light-therapy" },
      { label: "Compression Therapy", href: "/services/compression-therapy" },
      { label: "Hyperbaric Oxygen", href: "/services/hyperbaric-oxygen" },
      { label: "IV Infusions", href: "/services/iv-infusions" },
      { label: "Anti-Aging Peptides", href: "/services/anti-aging-peptides" },
      { label: "Weight Loss", href: "/services/weight-loss" },
    ],
  },
  { label: "Physical Therapy", href: "/physical-therapy" },
  { label: "Memberships", href: "/memberships" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

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
