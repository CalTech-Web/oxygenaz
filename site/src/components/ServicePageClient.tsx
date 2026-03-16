"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { fadeInUp, staggerContainer, cardReveal, viewportOnce } from "@/lib/animations";
import ContactForm from "@/components/ContactForm";

interface Service {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  walkIn?: boolean;
  promo?: string;
  price?: string;
}

interface ServicePageClientProps {
  service: Service;
  relatedServices: Service[];
  whatToExpect: string;
  formSource: string;
}

export default function ServicePageClient({
  service,
  relatedServices,
  whatToExpect,
  formSource,
}: ServicePageClientProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[500px] flex items-center justify-center bg-[#061527]">
        <Image
          src={`/images/services/${service.slug}.jpg`}
          alt={service.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#061527]/70 via-[#061527]/85 to-[#061527]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0066B3]/10 to-transparent" />

        {/* Animated blobs */}
        <motion.div
          className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(0,102,179,0.3) 0%, transparent 65%)",
            filter: "blur(80px)",
            top: "-15%",
            right: "-10%",
          }}
          animate={{ x: [0, -40, 0], y: [0, 30, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(74,144,204,0.2) 0%, transparent 65%)",
            filter: "blur(60px)",
            bottom: "-10%",
            left: "-5%",
          }}
          animate={{ x: [0, 50, 0], y: [0, -30, 0], scale: [1, 0.9, 1] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-4 text-center py-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-[var(--font-display)] tracking-tight text-white mb-6 leading-tight"
            style={{ textShadow: "4px 4px 0px rgba(0,0,0,0.25)" }}
          >
            {service.name}
          </h1>
          <p className="text-white/50 text-lg max-w-xl mx-auto mb-8">
            {service.shortDescription}
          </p>

          {/* Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            {service.walkIn && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#4A90CC]/30 bg-[#4A90CC]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#4A90CC]">
                Walk-ins Welcome
              </span>
            )}
            {!service.walkIn && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#4A90CC]/30 bg-[#4A90CC]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#4A90CC]">
                Appointment Required
              </span>
            )}
            {service.promo && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-400">
                {service.promo}
              </span>
            )}
            {service.price && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-400">
                {service.price}
              </span>
            )}
          </div>

          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#0066B3] to-[#4A90CC] text-white rounded-full px-8 py-4 font-black text-sm uppercase tracking-wider hover:scale-105 hover:shadow-[0_8px_30px_rgba(0,102,179,0.5)] transition-all duration-300"
          >
            Book Today
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </section>

      {/* What is it */}
      <section className="py-16 md:py-20 bg-white">
        <motion.div
          className="max-w-7xl mx-auto px-4"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <h2 className="font-[var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#061527] tracking-tight mb-2">
            What is {service.name}?
          </h2>
          <div className="h-1 w-20 rounded-full bg-gradient-to-r from-[#0066B3] to-[#061527] mb-6" />
          <p className="text-[#718096] text-lg leading-relaxed max-w-4xl">
            {service.description}
          </p>
        </motion.div>
      </section>

      {/* Benefits */}
      <section className="relative py-16 md:py-20 bg-gradient-to-br from-[#0a2240] via-[#0d2d54] to-[#061527] overflow-hidden">
        {/* Blobs */}
        <motion.div
          className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(0,102,179,0.25) 0%, transparent 65%)",
            filter: "blur(80px)",
            top: "-10%",
            left: "-8%",
          }}
          animate={{ x: [0, 50, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(74,144,204,0.2) 0%, transparent 65%)",
            filter: "blur(70px)",
            bottom: "-10%",
            right: "-5%",
          }}
          animate={{ x: [0, -40, 0], y: [0, -20, 0], scale: [1, 0.9, 1] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#4A90CC]/30 bg-[#4A90CC]/10 px-4 py-1.5 mb-5">
              <Sparkles className="h-3.5 w-3.5 text-[#4A90CC] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#4A90CC]">
                Key Benefits
              </span>
            </div>
            <h2 className="font-[var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
              Why Choose {service.name}?
            </h2>
            <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-[#0066B3] to-[#4A90CC]" />
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {service.benefits.map((benefit, i) => (
              <motion.div
                key={i}
                variants={cardReveal}
                className="group relative rounded-xl bg-white/[0.06] border border-white/[0.1] backdrop-blur-md p-5 hover:bg-white/[0.1] hover:border-[#4A90CC]/30 hover:shadow-[0_8px_40px_rgba(0,102,179,0.15)] transition-all duration-500"
              >
                <div className="absolute top-0 left-4 right-4 h-[2px] rounded-full bg-gradient-to-r from-[#0066B3] to-[#4A90CC] opacity-30 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex items-start gap-3">
                  <div className="shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-[#0066B3] to-[#4A90CC] shadow-lg shadow-[#0066B3]/25 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white/70 text-sm md:text-base leading-relaxed">
                    {benefit}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 md:py-20 bg-white">
        <motion.div
          className="max-w-7xl mx-auto px-4"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <h2 className="font-[var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#061527] tracking-tight mb-2">
            What to Expect
          </h2>
          <div className="h-1 w-20 rounded-full bg-gradient-to-r from-[#0066B3] to-[#061527] mb-6" />
          <p className="text-[#718096] text-lg leading-relaxed max-w-4xl">
            {whatToExpect}
          </p>
        </motion.div>
      </section>

      {/* Related Services */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-[#F0F5FA] to-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-10"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <h2 className="font-[var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#061527] tracking-tight mb-4">
              Related Services
            </h2>
            <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-[#0066B3] to-[#061527]" />
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {relatedServices.map((rs) => (
              <motion.div key={rs.id} variants={cardReveal}>
                <Link
                  href={`/services/${rs.slug}`}
                  className="group block relative rounded-2xl overflow-hidden min-h-[220px]"
                >
                  <Image
                    src={`/images/services/${rs.slug}.jpg`}
                    alt={rs.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061527]/90 via-[#061527]/40 to-transparent transition-opacity duration-300 group-hover:from-[#061527]/95" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                    <h3 className="font-[var(--font-display)] text-lg font-bold text-white mb-1">
                      {rs.name}
                    </h3>
                    <p className="text-white/60 text-sm line-clamp-2 mb-3">
                      {rs.shortDescription}
                    </p>
                    <div className="flex items-center gap-1.5 text-[#4A90CC] opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                      <span className="text-sm font-bold">Learn More</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0066B3] to-[#4A90CC] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 md:py-20 bg-gradient-to-br from-[#0a2240] via-[#0d2d54] to-[#061527] overflow-hidden">
        <motion.div
          className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(0,102,179,0.3) 0%, transparent 65%)",
            filter: "blur(80px)",
            top: "-20%",
            right: "-10%",
          }}
          animate={{ x: [0, -50, 0], y: [0, 30, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(74,144,204,0.2) 0%, transparent 65%)",
            filter: "blur(60px)",
            bottom: "-15%",
            left: "-5%",
          }}
          animate={{ x: [0, 40, 0], y: [0, -25, 0], scale: [1, 0.85, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-4 text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <h2 className="font-[var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Ready to Try {service.name}?
          </h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-[#0066B3] to-[#4A90CC] mb-5" />
          <p className="text-white/50 text-lg mb-8 max-w-2xl mx-auto">
            Book your session today or walk in during business hours. No referral needed.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#0066B3] to-[#4A90CC] text-white rounded-full px-8 py-4 font-black text-sm uppercase tracking-wider hover:scale-105 hover:shadow-[0_8px_30px_rgba(0,102,179,0.5)] transition-all duration-300"
          >
            Book Appointment
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </section>

      {/* Contact Form */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-[#F0F5FA] to-white">
        <div className="max-w-2xl mx-auto px-4">
          <ContactForm source={formSource} />
        </div>
      </section>
    </>
  );
}
