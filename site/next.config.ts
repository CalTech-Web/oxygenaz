import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      /* ── WordPress page slugs ── */
      { source: "/wellness-services", destination: "/services", permanent: true },
      { source: "/wellness-services/", destination: "/services", permanent: true },
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/about-us/", destination: "/about", permanent: true },
      { source: "/massage-therapy", destination: "/physical-therapy", permanent: true },
      { source: "/massage-therapy/", destination: "/physical-therapy", permanent: true },
      { source: "/book-appointment", destination: "/contact", permanent: true },
      { source: "/book-appointment/", destination: "/contact", permanent: true },
      { source: "/store", destination: "/services", permanent: true },
      { source: "/store/", destination: "/services", permanent: true },
      { source: "/thank-you", destination: "/contact", permanent: true },
      { source: "/thank-you/", destination: "/contact", permanent: true },

      /* ── WordPress core_services CPT ── */
      { source: "/core_services", destination: "/services", permanent: true },
      { source: "/core_services/", destination: "/services", permanent: true },
      { source: "/core_services/cryotherapy", destination: "/services/cryotherapy", permanent: true },
      { source: "/core_services/cryotherapy/", destination: "/services/cryotherapy", permanent: true },
      { source: "/core_services/infrared-sauna", destination: "/services/infrared-sauna", permanent: true },
      { source: "/core_services/infrared-sauna/", destination: "/services/infrared-sauna", permanent: true },
      { source: "/core_services/red-light-therapy", destination: "/services/red-light-therapy", permanent: true },
      { source: "/core_services/red-light-therapy/", destination: "/services/red-light-therapy", permanent: true },
      { source: "/core_services/compression-therapy", destination: "/services/compression-therapy", permanent: true },
      { source: "/core_services/compression-therapy/", destination: "/services/compression-therapy", permanent: true },
      { source: "/core_services/oxygen-therapy", destination: "/services/oxygen-therapy", permanent: true },
      { source: "/core_services/oxygen-therapy/", destination: "/services/oxygen-therapy", permanent: true },

      /* ── WordPress other_services CPT ── */
      { source: "/other_services", destination: "/services", permanent: true },
      { source: "/other_services/", destination: "/services", permanent: true },
      { source: "/other_services/anti-aging-peptides", destination: "/services/anti-aging-peptides", permanent: true },
      { source: "/other_services/anti-aging-peptides/", destination: "/services/anti-aging-peptides", permanent: true },
      { source: "/other_services/hyperbaric-oxygen-therapy", destination: "/services/hyperbaric-oxygen", permanent: true },
      { source: "/other_services/hyperbaric-oxygen-therapy/", destination: "/services/hyperbaric-oxygen", permanent: true },
      { source: "/other_services/iv-infusions-and-vitamin-shots", destination: "/services/iv-infusions", permanent: true },
      { source: "/other_services/iv-infusions-and-vitamin-shots/", destination: "/services/iv-infusions", permanent: true },
      { source: "/other_services/weight-loss-program", destination: "/services/weight-loss", permanent: true },
      { source: "/other_services/weight-loss-program/", destination: "/services/weight-loss", permanent: true },

      /* ── WordPress system routes ── */
      { source: "/author/:slug", destination: "/about", permanent: true },

      /* ── WordPress sitemap redirects ── */
      { source: "/sitemap_index.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/page-sitemap.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/core_services-sitemap.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/other_services-sitemap.xml", destination: "/sitemap.xml", permanent: true },

      /* ── Common WordPress paths ── */
      { source: "/wp-admin", destination: "/", permanent: true },
      { source: "/wp-login.php", destination: "/", permanent: true },
      { source: "/wp-content/:path*", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
