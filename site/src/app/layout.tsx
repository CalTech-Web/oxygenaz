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
    icon: "/images/oxygen-icon.png",
    apple: "/images/oxygen-icon.png",
  },
  openGraph: {
    title: "Oxygen Wellness & Physical Therapy",
    description:
      "Evidence-based wellness and physical therapy in Glendale, AZ. Only the Good Stuff.",
    url: "https://oxygenaz.com",
    siteName: "Oxygen Wellness & Physical Therapy",
    locale: "en_US",
    type: "website",
  },
};

/* ── JSON-LD structured data ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Person", "Organization"],
      "@id": "https://oxygenaz.com/#person",
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
      telephone: "+1-623-440-7777",
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
      publisher: { "@id": "https://oxygenaz.com/#person" },
      inLanguage: "en-US",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://oxygenaz.com/?s={search_term_string}",
        "query-input": "required name=search_term_string",
      },
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
        <Script id="gtm-1" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PVNQZGLX');`}
        </Script>

        {/* ── Google Tag Manager (GTM-5NZT7JM8 - Site Kit) ── */}
        <Script id="gtm-2" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5NZT7JM8');`}
        </Script>

        {/* ── Google Analytics (GT-K4VM5GSZ - Site Kit) ── */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GT-K4VM5GSZ"
          strategy="afterInteractive"
        />
        <Script id="ga-sitekit" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag("set","linker",{"domains":["oxygenaz.com"]});
gtag("js",new Date());
gtag("set","developer_id.dZTNiMT",true);
gtag("config","GT-K4VM5GSZ");`}
        </Script>

        {/* ── Google Analytics (G-G47Y2YJHED) ── */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-G47Y2YJHED"
          strategy="afterInteractive"
        />
        <Script id="ga-secondary" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag("js",new Date());
gtag("config","G-G47Y2YJHED");`}
        </Script>

        {/* ── Meta (Facebook) Pixel (1422766152817543) ── */}
        <Script id="fb-pixel" strategy="afterInteractive">
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
        <main className="pt-[80px] lg:pt-[112px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
