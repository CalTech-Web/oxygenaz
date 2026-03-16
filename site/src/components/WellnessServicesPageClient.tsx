"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Phone } from "lucide-react";
import { fadeInUp, staggerContainer, cardReveal, viewportOnce } from "@/lib/animations";
import { coreServices, additionalServices } from "@/data/services";
import { SITE } from "@/lib/constants";
import ContactForm from "@/components/ContactForm";

export default function WellnessServicesPageClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0a2240] via-[#0d2d54] to-[#061527] pb-[50px] -mt-[80px] lg:-mt-[112px] pt-[155px] lg:pt-[187px]">
        <motion.div
          className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(0,102,179,0.3) 0%, transparent 65%)",
            filter: "blur(80px)",
            top: "-20%",
            right: "-10%",
          }}
          animate={{ x: [0, -50, 0], y: [0, 30, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(74,144,204,0.2) 0%, transparent 65%)",
            filter: "blur(60px)",
            bottom: "-15%",
            left: "-5%",
          }}
          animate={{ x: [0, 40, 0], y: [0, -25, 0], scale: [1, 0.9, 1] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#4A90CC]/30 bg-[#4A90CC]/10 px-4 py-1.5 mb-6">
            <Sparkles className="h-3.5 w-3.5 text-[#4A90CC] animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#4A90CC]">
              Only the Good Stuff
            </span>
          </div>
          <h1
            className="text-4xl md:text-6xl lg:text-[72px] font-extrabold font-[var(--font-display)] text-white leading-[1.05] tracking-tight mb-4"
            style={{ textShadow: "4px 4px 0px rgba(0,0,0,0.3)" }}
          >
            Wellness Services
          </h1>
          <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Explore our targeted therapies designed to promote healing, relaxation, and overall well-being.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#0066B3] to-[#4A90CC] text-white rounded-full px-8 py-4 font-black text-sm uppercase tracking-wider hover:scale-105 hover:shadow-[0_8px_30px_rgba(0,102,179,0.5)] transition-all duration-300"
          >
            Book Today
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </section>

      {/* Core Services */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-[#F0F5FA]">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="mb-12"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h2 className="font-[var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#061527] tracking-tight">
                  Core Services
                </h2>
                <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#0066B3] to-[#061527]" />
              </div>
              <span className="bg-gradient-to-r from-[#0066B3] to-[#00518F] text-white text-sm font-black rounded-full px-6 py-2.5 shadow-[0_4px_20px_rgba(0,180,216,0.35)] animate-pulse hidden sm:inline-block">
                $20 on Fridays
              </span>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {coreServices.map((service, index) => (
              <motion.div
                key={service.id}
                variants={cardReveal}
                className={`group relative overflow-hidden rounded-2xl ${
                  index === 0
                    ? "sm:col-span-2 sm:row-span-2 min-h-[320px] md:min-h-[400px]"
                    : "min-h-[220px] md:min-h-[260px]"
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
                    <span className="inline-block rounded-full bg-[#0066B3] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                      Core
                    </span>
                  </div>

                  {service.promo && (
                    <div className="absolute top-3 left-3 z-10">
                      <span className="inline-block rounded-full bg-[#0066B3] px-3 py-1 text-xs font-bold text-white animate-pulse">
                        {service.promo}
                      </span>
                    </div>
                  )}

                  <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                    <h3
                      className={`font-[var(--font-display)] font-bold text-white ${
                        index === 0 ? "text-2xl md:text-3xl" : "text-lg md:text-xl"
                      }`}
                    >
                      {service.name}
                    </h3>
                    <p
                      className={`mt-1 text-white/70 line-clamp-2 ${
                        index === 0 ? "text-base" : "text-sm"
                      }`}
                    >
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

            {/* CTA Card */}
            <motion.div
              variants={cardReveal}
              className="group relative overflow-hidden rounded-2xl min-h-[220px] md:min-h-[260px]"
            >
              <Link href="/contact" className="block h-full">
                <Image
                  src="/images/content/weight-loss-cta.jpg"
                  alt="Book your session today"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#061527]/70" />
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-5 text-center">
                  <h3 className="font-[var(--font-display)] text-lg md:text-xl font-bold text-white mb-2">
                    Ready to Start?
                  </h3>
                  <p className="text-white/70 text-sm mb-4">
                    Book your first session today
                  </p>
                  <span className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0066B3] to-[#00518F] text-white rounded-full px-6 py-2.5 text-sm font-black uppercase tracking-wider shadow-[0_4px_20px_rgba(0,180,216,0.35)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(0,180,216,0.5)]">
                    Book Now
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.div>
          </motion.div>

          {/* Promo banner */}
          <motion.div
            className="mt-8 text-center"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <p className="text-[#718096] text-base">
              Get a core service for <span className="font-bold text-[#0066B3]">FREE</span> when you book an appointment for the first time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Other Services */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-[#F0F5FA] to-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="mb-12"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <h2 className="font-[var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#061527] tracking-tight">
              Other Services
            </h2>
            <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#0066B3] to-[#061527]" />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {/* Top row: 3 equal cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {additionalServices.filter((s) => s.slug !== "hyperbaric-oxygen").map((service) => (
                <motion.div
                  key={service.id}
                  variants={cardReveal}
                  className="group relative overflow-hidden rounded-2xl min-h-[220px] md:min-h-[260px] sm:last:col-span-2 lg:last:col-span-1"
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
                      <h3 className="font-[var(--font-display)] font-bold text-white text-lg md:text-xl">
                        {service.name}
                      </h3>
                      <p className="mt-1 text-white/70 line-clamp-2 text-sm">
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
            </div>

            {/* Bottom row: Hyperbaric (2 cols) + CTA (1 col) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-5 mt-4 md:mt-5">
              {(() => {
                const hyperbaric = additionalServices.find((s) => s.slug === "hyperbaric-oxygen")!;
                return (
                  <motion.div
                    variants={cardReveal}
                    className="group relative overflow-hidden rounded-2xl min-h-[300px] md:min-h-[360px] lg:col-span-2"
                  >
                    <Link href={`/services/${hyperbaric.slug}`} className="block h-full">
                      <Image
                        src={`/images/services/${hyperbaric.slug}.jpg`}
                        alt={hyperbaric.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#061527]/90 via-[#061527]/40 to-transparent transition-opacity duration-300 group-hover:from-[#061527]/95" />
                      <div className="absolute top-3 right-3 z-10">
                        <span className="inline-block rounded-full bg-[#061527] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                          Advanced
                        </span>
                      </div>
                      {hyperbaric.price && (
                        <div className="absolute top-3 left-3 z-10">
                          <span className="inline-block rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-xs font-bold text-white">
                            {hyperbaric.price}
                          </span>
                        </div>
                      )}
                      <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                        <h3 className="font-[var(--font-display)] font-bold text-white text-2xl md:text-3xl">
                          {hyperbaric.name}
                        </h3>
                        <p className="mt-1 text-white/70 line-clamp-2 text-base">
                          {hyperbaric.shortDescription}
                        </p>
                        <div className="mt-3 flex items-center gap-1.5 text-[#0066B3] opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                          <span className="text-sm font-bold">Learn More</span>
                          <ArrowRight className="h-4 w-4" />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0066B3] to-[#061527] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                      </div>
                    </Link>
                  </motion.div>
                );
              })()}

              {/* CTA card */}
              <motion.div
                variants={cardReveal}
                className="group relative overflow-hidden rounded-2xl min-h-[300px] md:min-h-[360px]"
              >
                <Link href="/contact" className="block h-full">
                  <Image
                    src="/images/services/cta-background.jpg"
                    alt="Ready to transform your wellness"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#061527]/85" />
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 text-center">
                    <h3 className="font-[var(--font-display)] text-xl md:text-2xl font-bold text-white mb-3">
                      Ready to Transform Your Wellness?
                    </h3>
                    <p className="text-white/70 text-sm mb-5">
                      Find the perfect treatment for your goals
                    </p>
                    <span className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0066B3] to-[#4A90CC] text-white rounded-full px-7 py-3 text-sm font-black uppercase tracking-wider hover:scale-105 hover:shadow-[0_8px_30px_rgba(0,102,179,0.5)] transition-all duration-300">
                      Book a Consultation
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    <a
                      href={SITE.phoneHref}
                      className="mt-4 inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-bold"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Phone className="h-4 w-4" />
                      {SITE.phone}
                    </a>
                  </div>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-white to-[#F0F5FA] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative rounded-2xl bg-gradient-to-br from-[#0a2240] via-[#0d2d54] to-[#061527] p-8 md:p-12 lg:p-16 overflow-hidden">
            <div
              className="absolute w-[300px] h-[300px] rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(0,102,179,0.2) 0%, transparent 65%)",
                filter: "blur(60px)",
                top: "-15%",
                right: "-10%",
              }}
            />
            <div
              className="absolute w-[250px] h-[250px] rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(74,144,204,0.15) 0%, transparent 65%)",
                filter: "blur(50px)",
                bottom: "-10%",
                left: "-5%",
              }}
            />
            <div className="relative z-10 max-w-2xl mx-auto">
              <ContactForm source="wellness-services-page" variant="dark" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
