"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";

const services = [
  {
    title: "Cryotherapy",
    slug: "cryotherapy",
    image: "/images/services/cryotherapy.jpg",
  },
  {
    title: "Infrared Sauna",
    slug: "infrared-sauna",
    image: "/images/services/infrared-sauna.jpg",
  },
  {
    title: "Oxygen Therapy",
    slug: "oxygen-therapy",
    image: "/images/services/oxygen-therapy.jpg",
  },
  {
    title: "Red Light Therapy",
    slug: "red-light-therapy",
    image: "/images/services/red-light-therapy.jpg",
  },
  {
    title: "Compression Therapy",
    slug: "compression-therapy",
    image: "/images/services/compression-therapy.webp",
  },
];

export default function CoreServices() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-[#F5F7FA]/50 relative overflow-hidden">
      <motion.div
        className="relative z-10 max-w-[1140px] mx-auto px-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {/* Heading row */}
        <motion.div variants={fadeInUp} className="flex items-center justify-between mb-8">
          <h2 className="font-[var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0B2447] leading-tight tracking-tight accent-underline">
            Core Services
          </h2>
          <span className="bg-gradient-to-r from-[#00B4D8] to-[#0096B7] text-white text-sm font-black rounded-full px-6 py-2.5 shadow-[0_4px_20px_rgba(0,180,216,0.35)] animate-pulse">
            $20 on Fridays
          </span>
        </motion.div>

        {/* Horizontal scrollable row */}
        <motion.div
          variants={fadeInUp}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 scrollbar-hide"
        >
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="relative min-w-[340px] flex-shrink-0 h-[500px] rounded-2xl overflow-hidden snap-start group cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.15),0_0_0_1px_rgba(0,180,216,0.15)] transition-all duration-500"
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-115"
                style={{ backgroundImage: `url('${service.image}')` }}
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2447] via-[#0B2447]/50 to-transparent group-hover:via-[#0B2447]/30 transition-all duration-500" />

              {/* Accent line at bottom on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00B4D8] to-[#0B2447] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-7 bg-gradient-to-t from-black/30 to-transparent">
                <h3
                  className="text-white text-2xl font-black mb-2 tracking-tight"
                  style={{ textShadow: "1px 2px 4px rgba(0,0,0,0.5)" }}
                >
                  {service.title}
                </h3>
                <div className="flex items-center gap-2 text-[#00B4D8] text-sm font-bold uppercase tracking-wider opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Learn More</span>
                  <span className="transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300">
                    &rarr;
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
