"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { coreServices, additionalServices } from "@/data/services";
import { staggerContainer, cardReveal } from "@/lib/animations";

const allServices = [...coreServices, ...additionalServices];

export default function AllServices() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-white to-[#F5F7FA]">
      <div className="mx-auto max-w-6xl px-4 lg:px-20">
        {/* Section heading */}
        <div className="mb-12">
          <h2 className="font-[var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0B2447] tracking-tight">
            What We Offer
          </h2>
          <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#00B4D8] to-[#0B2447]" />
        </div>

        {/* Bento grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {allServices.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardReveal}
              className={`group relative overflow-hidden rounded-2xl ${
                index === 0 ? "sm:col-span-2 sm:row-span-2 min-h-[320px] md:min-h-[400px]" : "min-h-[220px] md:min-h-[260px]"
              }`}
            >
              <Link href={`/services/${service.slug}`} className="block h-full">
                {/* Background image */}
                <Image
                  src={`/images/services/${service.slug}.jpg`}
                  alt={service.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2447]/90 via-[#0B2447]/40 to-transparent transition-opacity duration-300 group-hover:from-[#0B2447]/95" />

                {/* Category badge */}
                <div className="absolute top-3 right-3 z-10">
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider text-white ${
                      service.category === "core"
                        ? "bg-[#00B4D8]"
                        : "bg-[#0B2447]"
                    }`}
                  >
                    {service.category === "core" ? "Core" : "Advanced"}
                  </span>
                </div>

                {/* Promo badge */}
                {service.promo && (
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-block rounded-full bg-[#00B4D8] px-3 py-1 text-xs font-bold text-white animate-pulse-glow">
                      {service.promo}
                    </span>
                  </div>
                )}

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                  <h3 className={`font-[var(--font-display)] font-bold text-white ${
                    index === 0 ? "text-2xl md:text-3xl" : "text-lg md:text-xl"
                  }`}>
                    {service.name}
                  </h3>
                  <p className={`mt-1 text-white/70 line-clamp-2 ${
                    index === 0 ? "text-base" : "text-sm"
                  }`}>
                    {service.shortDescription}
                  </p>

                  {/* Hover arrow */}
                  <div className="mt-3 flex items-center gap-1.5 text-[#00B4D8] opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    <span className="text-sm font-bold">Learn More</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#00B4D8] to-[#0B2447] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
