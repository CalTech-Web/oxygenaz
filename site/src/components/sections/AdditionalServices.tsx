"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";

const services = [
  {
    title: "Hyperbaric Oxygen Therapy",
    slug: "hyperbaric-oxygen",
    image: "/images/services/hyperbaric-oxygen.jpg",
  },
  {
    title: "IV Infusions & Vitamin Shots",
    slug: "iv-infusions",
    image: "/images/services/iv-infusions.webp",
  },
  {
    title: "Anti Aging Peptides",
    slug: "anti-aging-peptides",
    image: "/images/services/anti-aging-peptides.webp",
  },
  {
    title: "Weight Loss Program",
    slug: "weight-loss",
    image: "/images/services/weight-loss.jpg",
  },
];

export default function AdditionalServices() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-[#EDF2F9]/50 to-white relative overflow-hidden">
      <motion.div
        className="relative z-10 max-w-[1140px] mx-auto px-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {/* Heading */}
        <motion.div variants={fadeInUp} className="mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#10173E] leading-tight tracking-tight accent-underline">
            Other Services
          </h2>
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

              {/* Gradient overlay */}
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
