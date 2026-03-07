"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, viewportOnce } from "@/lib/animations";

export default function AboutSection() {
  return (
    <section
      className="relative min-h-[504px] flex items-center justify-center bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('/images/heroes/compression-bg.webp')",
      }}
    >
      {/* Multi-layer overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#10173E]/70 via-[#10173E]/80 to-[#0A0F2C]/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#004AAD]/20 to-transparent" />

      {/* Decorative orb */}
      <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-[#5CE1E6]/10 blur-[100px] pointer-events-none" />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center max-w-[1140px] mx-auto px-4 py-20"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-6"
          style={{ textShadow: "4px 4px 0px rgba(0,0,0,0.25)" }}
        >
          It&apos;s All About <span className="text-[#5CE1E6]">YOU</span>
        </h2>

        <p className="text-white/85 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed font-light">
          Our team understands the limitations of traditional, insurance-driven
          healthcare. That&apos;s why we focus on only the good stuff,
          evidence-based treatments that prioritize results over routine. No
          gimmicks, no unnecessary treatments, just personalized care that works.
        </p>

        <Link
          href="/about"
          className="inline-block bg-gradient-to-r from-[#004AAD] to-[#0053DA] text-white rounded-full px-8 py-4 text-sm font-black uppercase tracking-wider border-2 border-[#5CE1E6] hover:scale-105 hover:shadow-[0_0_30px_rgba(92,225,230,0.3)] transition-all duration-300"
        >
          Learn More About Oxygen Wellness
        </Link>
      </motion.div>
    </section>
  );
}
