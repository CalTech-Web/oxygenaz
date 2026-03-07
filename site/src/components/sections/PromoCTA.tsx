"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, viewportOnce } from "@/lib/animations";

interface PromoCTAProps {
  variant?: "consultation" | "core-service" | "both";
}

export default function PromoCTA({ variant = "both" }: PromoCTAProps) {
  const consultation = (
    <section className="relative py-16 bg-gradient-to-br from-[#0A0F2C] via-[#10173E] to-[#004AAD] overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute -right-32 -top-32 w-[600px] h-[600px] rounded-full bg-[#5CE1E6]/12 blur-[100px] pointer-events-none" />
      <div className="absolute -left-20 -bottom-20 w-[400px] h-[400px] rounded-full bg-[#004AAD]/20 blur-[80px] pointer-events-none" />

      {/* Section divider at top */}
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <motion.div
        className="relative z-10 max-w-[1140px] mx-auto px-4 text-center"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <p className="text-white text-xl md:text-2xl font-bold max-w-3xl mx-auto mb-10 leading-snug">
          Not sure where to start? Book a{" "}
          <span className="text-[#5CE1E6] font-black drop-shadow-[0_0_20px_rgba(92,225,230,0.4)]">
            FREE 15&apos;
          </span>{" "}
          consult with our Wellness and Sports Medicine Expert!
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#5CE1E6] text-[#10173E] rounded-full px-10 py-5 font-black text-sm uppercase tracking-wider hover:scale-105 hover:shadow-[0_0_50px_rgba(92,225,230,0.6)] transition-all duration-300 shadow-[0_0_30px_rgba(92,225,230,0.3)]"
        >
          Book My Consultation
        </Link>
      </motion.div>
    </section>
  );

  const coreService = (
    <section className="py-16 md:py-20 bg-gradient-to-br from-white to-[#EDF2F9] relative overflow-hidden">
      {/* Subtle accent */}
      <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full bg-[#5CE1E6]/[0.05] blur-[80px] pointer-events-none" />

      <motion.div
        className="relative z-10 max-w-[1140px] mx-auto px-4 text-center"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#10173E] leading-tight tracking-tight max-w-4xl mx-auto mb-8">
          Get a core service for{" "}
          <span className="text-gradient-cyan">FREE</span>{" "}
          when you book an appointment with us for the first time.
        </h2>
        <Link
          href="/contact"
          className="inline-block bg-gradient-to-r from-[#004AAD] to-[#0053DA] text-white rounded-full px-10 py-5 font-black text-sm uppercase tracking-wider border-2 border-[#5CE1E6] hover:scale-105 animate-pulse-glow transition-transform duration-300"
        >
          Book My Appointment
        </Link>
      </motion.div>
    </section>
  );

  if (variant === "consultation") return consultation;
  if (variant === "core-service") return coreService;

  return (
    <>
      {consultation}
      {coreService}
    </>
  );
}
