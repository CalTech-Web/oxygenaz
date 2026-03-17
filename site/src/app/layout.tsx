import type { Metadata } from "next";
import Script from "next/script";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://oxygenaz.com"),
  title: {
    default: "Oxygen Wellness & Physical Therapy | Glendale, AZ",
    template: "%s | Oxygen Wellness & Physical Therapy",
  },
  description:
    "Evidence-based wellness and physical therapy in Glendale, AZ. Cryotherapy, infrared sauna, hyperbaric oxygen, IV infusions, and expert physical therapy with 25+ years of experience.",
  keywords: [
    "wellness",
    "physical therapy",
    "cryotherapy",
    "Glendale AZ",
    "hyperbaric oxygen",
    "infrared sauna",
    "red light therapy",
    "sports medicine",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/oxygen-icon.png", type: "image/png" },
    ],
    apple: "/images/oxygen-icon.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Oxygen Wellness & Physical Therapy",
    description:
      "Evidence-based wellness and physical therapy in Glendale, AZ. Only the Good Stuff.",
    url: "https://oxygenaz.com",
    siteName: "Oxygen Wellness & Physical Therapy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://oxygenaz.com/images/og-image.jpg",
        width: 1205,
        height: 804,
        alt: "Oxygen Wellness & Physical Therapy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oxygen Wellness & Physical Therapy",
    description:
      "Evidence-based wellness and physical therapy in Glendale, AZ. Only the Good Stuff.",
    images: ["https://oxygenaz.com/images/og-image.jpg"],
  },
  other: {
    "theme-color": "#0066B3",
  },
};

/* ── JSON-LD structured data ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://oxygenaz.com/#organization",
      name: "Oxygen Wellness & Physical Therapy",
      url: "https://oxygenaz.com",
      logo: {
        "@type": "ImageObject",
        "@id": "https://oxygenaz.com/#logo",
        url: "https://oxygenaz.com/images/logo-footer.webp",
        contentUrl: "https://oxygenaz.com/images/logo-footer.webp",
        caption: "Oxygen Wellness & Physical Therapy",
      },
      image: { "@id": "https://oxygenaz.com/#logo" },
      telephone: "+1-602-888-7992",
      email: "Contact@OxygenAZ.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "20265 N 59th Ave Suite B-1",
        addressLocality: "Glendale",
        addressRegion: "AZ",
        postalCode: "85308",
        addressCountry: "US",
      },
      sameAs: [
        "https://www.facebook.com/oxygenwellnessaz",
        "https://www.instagram.com/oxygenwellnessaz",
        "https://www.youtube.com/@OxygenWellnessAZ",
        "https://www.linkedin.com/company/oxygen-wellness-physical-therapy",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://oxygenaz.com/#website",
      url: "https://oxygenaz.com",
      name: "Oxygen Wellness & Physical Therapy",
      publisher: { "@id": "https://oxygenaz.com/#organization" },
      inLanguage: "en-US",
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://oxygenaz.com/#localbusiness",
      name: "Oxygen Wellness & Physical Therapy",
      image: "https://oxygenaz.com/images/og-image.jpg",
      url: "https://oxygenaz.com",
      telephone: "+1-602-888-7992",
      email: "Contact@OxygenAZ.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "20265 N 59th Ave Suite B-1",
        addressLocality: "Glendale",
        addressRegion: "AZ",
        postalCode: "85308",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 33.6609,
        longitude: -112.1858,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "20:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Saturday", "Sunday"],
          opens: "08:00",
          closes: "18:00",
        },
      ],
      priceRange: "$$",
      sameAs: [
        "https://www.facebook.com/oxygenwellnessaz",
        "https://www.instagram.com/oxygenwellnessaz",
        "https://www.youtube.com/@OxygenWellnessAZ",
        "https://www.linkedin.com/company/oxygen-wellness-physical-therapy",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable}>
      <head>
        {/* ── Google Tag Manager (GTM-PVNQZGLX) ── */}
        <Script id="gtm-1" strategy="lazyOnload">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PVNQZGLX');`}
        </Script>

        {/* ── Google Tag Manager (GTM-5NZT7JM8 - Site Kit) ── */}
        <Script id="gtm-2" strategy="lazyOnload">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5NZT7JM8');`}
        </Script>

        {/* ── Google Analytics (GT-K4VM5GSZ - Site Kit) ── */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GT-K4VM5GSZ"
          strategy="lazyOnload"
        />
        <Script id="ga-sitekit" strategy="lazyOnload">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag("set","linker",{"domains":["oxygenaz.com"]});
gtag("js",new Date());
gtag("set","developer_id.dZTNiMT",true);
gtag("config","GT-K4VM5GSZ");`}
        </Script>

        {/* ── Google Analytics (G-G47Y2YJHED) ── */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-G47Y2YJHED"
          strategy="lazyOnload"
        />
        <Script id="ga-secondary" strategy="lazyOnload">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag("js",new Date());
gtag("config","G-G47Y2YJHED");`}
        </Script>

        {/* ── Meta (Facebook) Pixel (1422766152817543) ── */}
        <Script id="fb-pixel" strategy="lazyOnload">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}
(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init','1422766152817543');
fbq('track','PageView');`}
        </Script>

        {/* ── JSON-LD Structured Data ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased overflow-x-hidden">
        {/* Skip to main content - accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-[#0066B3] focus:px-4 focus:py-2 focus:text-white focus:font-bold focus:shadow-lg"
        >
          Skip to main content
        </a>

        {/* GTM noscript fallbacks */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PVNQZGLX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5NZT7JM8"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* FB Pixel noscript */}
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1422766152817543&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        <Header />
        <main id="main-content" className="pt-[80px] lg:pt-[112px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
