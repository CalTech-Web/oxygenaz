"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { additionalServices } from "@/data/services";
import { staggerContainer, cardReveal } from "@/lib/animations";

export default function OtherServices() {
  return (
    <section className="relative py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-20">
        {/* Section heading */}
        <div className="mb-12">
          <h2 className="font-[var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0B2447] tracking-tight accent-underline">
            Other Services
          </h2>
        </div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {additionalServices.map((service) => (
            <motion.div
              key={service.id}
              variants={cardReveal}
              className="group relative overflow-hidden rounded-2xl min-h-[300px]"
            >
              <Link href={`/services/${service.slug}`} className="block h-full">
                <Image
                  src={`/images/services/${service.slug}.jpg`}
                  alt={service.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2447]/90 via-[#0B2447]/40 to-transparent transition-opacity duration-300 group-hover:from-[#0B2447]/95" />

                <div className="absolute top-3 right-3 z-10">
                  <span className="inline-block rounded-full bg-[#0B2447] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                    Advanced
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                  <h3 className="font-[var(--font-display)] text-lg md:text-xl font-bold text-white">
                    {service.name}
                  </h3>
                  <p className="mt-1 text-white/70 text-sm line-clamp-2">
                    {service.shortDescription}
                  </p>

                  <div className="mt-3 flex items-center gap-1.5 text-[#00B4D8] opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    <span className="text-sm font-bold">Learn More</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>

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
