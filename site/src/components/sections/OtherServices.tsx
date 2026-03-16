"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { additionalServices } from "@/data/services";
import { siteConfig } from "@/lib/constants";
import { staggerContainer, cardReveal, fadeInUp, viewportOnce } from "@/lib/animations";

export default function OtherServices() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-[#F0F5FA] to-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-20">
        {/* Section heading */}
        <div className="mb-12">
          <h2 className="font-[var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#061527] tracking-tight">
            Other Services
          </h2>
          <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#0066B3] to-[#061527]" />
        </div>

        {/* Bento grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {additionalServices.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardReveal}
              className={`group relative overflow-hidden rounded-2xl ${
                index === 0 ? "sm:col-span-2 sm:row-span-2 min-h-[320px] md:min-h-[400px]" : "min-h-[220px] md:min-h-[260px]"
              }`}
            >
              <Link href={`/services/${service.slug}`} className="block h-full">
                <Image
                  src={`/images/services/${service.slug}.jpg`}
                  alt={service.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#061527]/90 via-[#061527]/40 to-transparent transition-opacity duration-300 group-hover:from-[#061527]/95" />

                <div className="absolute top-3 right-3 z-10">
                  <span className="inline-block rounded-full bg-[#061527] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                    Advanced
                  </span>
                </div>

                {service.price && (
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-block rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-xs font-bold text-white">
                      {service.price}
                    </span>
                  </div>
                )}

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

                  <div className="mt-3 flex items-center gap-1.5 text-[#0066B3] opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    <span className="text-sm font-bold">Learn More</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0066B3] to-[#061527] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA with background image */}
        <motion.div
          className="relative mt-12 rounded-2xl overflow-hidden min-h-[280px] flex items-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <Image
            src="/images/services/anti-aging-peptides.jpg"
            alt="Oxygenaz wellness services"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#061527]/85" />
          <div className="relative z-10 w-full px-6 py-12 md:px-12 text-center md:text-left md:flex md:items-center md:justify-between gap-8">
            <div>
              <h3 className="font-[var(--font-display)] text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-3">
                Ready to Transform Your Wellness?
              </h3>
              <p className="text-white/70 text-base md:text-lg max-w-xl">
                Explore our full range of advanced services and find the perfect treatment for your goals.
              </p>
            </div>
            <div className="mt-6 md:mt-0 flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <Link
                href="/contact"
                className="inline-block bg-[#0066B3] text-white rounded-full px-8 py-4 font-black text-sm uppercase tracking-wider hover:scale-105 hover:shadow-[0_8px_30px_rgba(0,102,179,0.4)] transition-all duration-300"
              >
                Book a Consultation
              </Link>
              <a
                href={siteConfig.phoneHref}
                className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm font-bold"
              >
                <Phone className="h-4 w-4" />
                {siteConfig.phone}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
