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
      {/* Multi-layered overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#10173E]/60 via-[#10173E]/80 to-[#0A0F2C]/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#004AAD]/20 to-transparent" />

      {/* Decorative gradient orbs */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#5CE1E6]/10 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#004AAD]/15 blur-[100px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-[1200px] mx-auto px-4">
        <motion.h2
          className="text-white text-5xl sm:text-7xl lg:text-[120px] font-black leading-[1.05] mb-6 tracking-tight"
          style={{ textShadow: "4px 4px 0px rgba(0,0,0,0.3)" }}
          variants={heroText}
          initial="hidden"
          animate="visible"
        >
          Only the <span className="text-[#5CE1E6]">Good</span> Stuff
        </motion.h2>

        <motion.p
          className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light"
          variants={heroSubtext}
          initial="hidden"
          animate="visible"
        >
          Whether you&apos;re seeking pain relief, improved mobility, or a
          complete wellness plan, our team is here to guide you. Book today or
          give us a ring.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          variants={heroCTA}
          initial="hidden"
          animate="visible"
        >
          <Link
            href="/contact"
            className="bg-gradient-to-r from-[#004AAD] to-[#0053DA] text-white rounded-full px-8 py-4 font-black text-base uppercase tracking-wider border-2 border-[#5CE1E6] hover:scale-105 animate-pulse-glow transition-transform duration-300"
          >
            Book Today
          </Link>
          <Link
            href="/services/cryotherapy"
            className="backdrop-blur-sm bg-white/10 border border-white/30 text-white rounded-full px-8 py-4 font-bold text-base uppercase tracking-wider hover:bg-white/20 hover:scale-105 transition-all duration-300"
          >
            View Services
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="w-8 h-8 text-white/50" />
      </motion.div>
    </section>
  );
}
