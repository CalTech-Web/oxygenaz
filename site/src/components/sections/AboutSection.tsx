"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, viewportOnce } from "@/lib/animations";

export default function AboutSection() {
  return (
    <section
      className="relative min-h-[550px] flex items-center justify-center bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('/images/heroes/compression-bg.webp')",
      }}
    >
      {/* Multi-layer overlay - stronger */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F2C]/80 via-[#10173E]/85 to-[#0A0F2C]/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#004AAD]/25 via-transparent to-[#5CE1E6]/10" />

      {/* Decorative orbs */}
      <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-[#5CE1E6]/12 blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-[#004AAD]/20 blur-[80px] pointer-events-none" />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center max-w-[1140px] mx-auto px-4 py-24"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <h2
          className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-8"
          style={{ textShadow: "4px 6px 0px rgba(0,0,0,0.4)" }}
        >
          It&apos;s All About{" "}
          <span className="text-[#5CE1E6] drop-shadow-[0_0_30px_rgba(92,225,230,0.4)]">
            YOU
          </span>
        </h2>

        <p className="text-white/80 text-lg md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed font-light">
          Our team understands the limitations of traditional, insurance-driven
          healthcare. That&apos;s why we focus on only the good stuff,
          evidence-based treatments that prioritize results over routine. No
          gimmicks, no unnecessary treatments, just personalized care that works.
        </p>

        <Link
          href="/about"
          className="inline-block bg-gradient-to-r from-[#004AAD] to-[#0053DA] text-white rounded-full px-10 py-5 text-sm font-black uppercase tracking-wider border-2 border-[#5CE1E6] hover:scale-105 hover:shadow-[0_0_40px_rgba(92,225,230,0.4)] transition-all duration-300"
        >
          Learn More About Oxygen Wellness
        </Link>
      </motion.div>
    </section>
  );
}
