"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { heroText, heroSubtext, heroCTA } from "@/lib/animations";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center overflow-hidden grain"
      style={{ backgroundImage: "url('/images/heroes/home-hero.jpg')" }}
    >
      {/* Multi-layered overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F2C]/82 via-[#10173E]/88 to-[#0A0F2C]/97" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#004AAD]/20 via-transparent to-[#5CE1E6]/5" />

      {/* Decorative gradient orbs - bigger, brighter */}
      <div className="absolute -top-32 -right-32 w-[800px] h-[800px] rounded-full bg-[#5CE1E6]/15 blur-[150px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] rounded-full bg-[#004AAD]/25 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#5CE1E6]/5 blur-[80px] pointer-events-none" />

      {/* Bottom vignette fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/10 to-transparent pointer-events-none z-[1]" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-[1200px] mx-auto px-4">
        {/* Tagline pill */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="inline-block bg-white/8 backdrop-blur-md border border-white/15 text-white/90 text-xs font-bold uppercase tracking-[0.25em] rounded-full px-7 py-2.5 shadow-[0_4px_30px_rgba(0,0,0,0.15)]">
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
          <span className="text-[#5CE1E6] drop-shadow-[0_0_40px_rgba(92,225,230,0.5)]">
            Good
          </span>{" "}
          Stuff
        </motion.h2>

        <motion.p
          className="text-white/75 text-lg md:text-xl max-w-2xl mx-auto mb-14 leading-relaxed font-light"
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
            className="bg-gradient-to-r from-[#004AAD] to-[#0053DA] text-white rounded-full px-10 py-5 font-black text-sm uppercase tracking-wider border-2 border-[#5CE1E6] hover:scale-105 animate-pulse-glow transition-transform duration-300 shadow-[0_8px_30px_rgba(0,74,173,0.4)]"
          >
            Book Today
          </Link>
          <Link
            href="/services/cryotherapy"
            className="backdrop-blur-md bg-white/8 border-2 border-white/25 text-white rounded-full px-10 py-5 font-black text-sm uppercase tracking-wider hover:bg-white/15 hover:border-[#5CE1E6]/50 hover:scale-105 transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.2)]"
          >
            View Services
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-white/30 text-[10px] uppercase tracking-[0.3em] font-bold">Scroll</span>
        <ChevronDown className="w-6 h-6 text-[#5CE1E6]/50" />
      </motion.div>
    </section>
  );
}
