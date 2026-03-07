"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { heroText, heroSubtext, heroCTA } from "@/lib/animations";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/images/heroes/home-hero.jpg')" }}
    >
      {/* Multi-layered overlays - stronger contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F2C]/70 via-[#10173E]/85 to-[#0A0F2C]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#004AAD]/30 via-transparent to-[#5CE1E6]/10" />

      {/* Decorative gradient orbs - bigger, brighter */}
      <div className="absolute -top-32 -right-32 w-[800px] h-[800px] rounded-full bg-[#5CE1E6]/15 blur-[150px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] rounded-full bg-[#004AAD]/25 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#5CE1E6]/5 blur-[80px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-[1200px] mx-auto px-4">
        {/* Tagline pill */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-bold uppercase tracking-[0.2em] rounded-full px-6 py-2">
            Wellness & Physical Therapy
          </span>
        </motion.div>

        <motion.h2
          className="text-white text-4xl sm:text-6xl lg:text-[90px] font-black leading-[0.95] mb-8 tracking-tight"
          style={{ textShadow: "4px 6px 0px rgba(0,0,0,0.4)" }}
          variants={heroText}
          initial="hidden"
          animate="visible"
        >
          Only the{" "}
          <span className="text-[#5CE1E6] drop-shadow-[0_0_30px_rgba(92,225,230,0.4)]">
            Good
          </span>{" "}
          Stuff
        </motion.h2>

        <motion.p
          className="text-white/80 text-lg md:text-2xl max-w-2xl mx-auto mb-14 leading-relaxed font-light"
          variants={heroSubtext}
          initial="hidden"
          animate="visible"
        >
          Whether you&apos;re seeking pain relief, improved mobility, or a
          complete wellness plan, our team is here to guide you. Book today or
          give us a ring.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
          variants={heroCTA}
          initial="hidden"
          animate="visible"
        >
          <Link
            href="/contact"
            className="bg-gradient-to-r from-[#004AAD] to-[#0053DA] text-white rounded-full px-10 py-5 font-black text-base uppercase tracking-wider border-2 border-[#5CE1E6] hover:scale-105 animate-pulse-glow transition-transform duration-300"
          >
            Book Today
          </Link>
          <Link
            href="/services/cryotherapy"
            className="backdrop-blur-md bg-white/10 border-2 border-white/30 text-white rounded-full px-10 py-5 font-black text-base uppercase tracking-wider hover:bg-white/20 hover:border-white/50 hover:scale-105 transition-all duration-300"
          >
            View Services
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="w-8 h-8 text-[#5CE1E6]/60" />
      </motion.div>
    </section>
  );
}
