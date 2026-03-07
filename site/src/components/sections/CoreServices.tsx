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
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-[#EDF2F9]/50 relative overflow-hidden">
      <motion.div
        className="relative z-10 max-w-[1140px] mx-auto px-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {/* Heading row */}
        <motion.div variants={fadeInUp} className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#10173E] leading-tight tracking-tight accent-underline">
            Core Services
          </h2>
          <span className="bg-gradient-to-r from-[#F01717] to-[#E00] text-white text-sm font-black rounded-full px-6 py-2.5 shadow-[0_4px_20px_rgba(240,23,23,0.35)] animate-pulse">
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
              className="relative min-w-[340px] flex-shrink-0 h-[500px] rounded-2xl overflow-hidden snap-start group cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.15),0_0_0_1px_rgba(92,225,230,0.15)] transition-all duration-500"
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-115"
                style={{ backgroundImage: `url('${service.image}')` }}
              />

              {/* Gradient overlay - stronger */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F2C] via-[#10173E]/50 to-transparent group-hover:via-[#10173E]/30 transition-all duration-500" />

              {/* Cyan glow line at bottom on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#5CE1E6] to-[#004AAD] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <h3
                  className="text-white text-2xl font-black mb-3 tracking-tight"
                  style={{ textShadow: "2px 3px 0px rgba(0,0,0,0.4)" }}
                >
                  {service.title}
                </h3>
                <div className="flex items-center gap-2 text-[#5CE1E6] text-sm font-black uppercase tracking-wider">
                  <span>Learn More</span>
                  <span className="transform translate-x-0 group-hover:translate-x-3 transition-transform duration-300">
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
