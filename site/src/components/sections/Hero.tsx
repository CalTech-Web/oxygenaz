"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { heroText, heroSubtext, heroCTA } from "@/lib/animations";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Gradient mesh blobs */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#00B4D8]/20 blur-[120px] pointer-events-none animate-mesh" />
      <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-[#0B2447]/15 blur-[100px] pointer-events-none animate-mesh" style={{ animationDelay: "-3s" }} />
      <div className="absolute bottom-[10%] right-[15%] w-[350px] h-[350px] rounded-full bg-[#00B4D8]/15 blur-[100px] pointer-events-none animate-mesh" style={{ animationDelay: "-6s" }} />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 lg:px-20 py-32 md:py-0">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left side - text */}
          <div className="md:col-span-7">
            {/* Accent bar */}
            <motion.div
              className="h-1 w-20 rounded-full bg-gradient-to-r from-[#00B4D8] to-[#0B2447] mb-8"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              style={{ transformOrigin: "left" }}
            />

            <motion.h1
              className="font-[var(--font-display)] text-5xl sm:text-6xl lg:text-[84px] font-extrabold leading-[0.95] mb-8 tracking-tight text-[#0B2447]"
              variants={heroText}
              initial="hidden"
              animate="visible"
            >
              Only the{" "}
              <span className="text-gradient-vibrant">
                Good
              </span>{" "}
              Stuff
            </motion.h1>

            <motion.p
              className="text-[#5A6878] text-lg md:text-xl max-w-lg mb-10 leading-relaxed"
              variants={heroSubtext}
              initial="hidden"
              animate="visible"
            >
              Whether you&apos;re seeking pain relief, improved mobility, or a
              complete wellness plan, our team is here to guide you. Book today or
              give us a ring.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-start gap-4"
              variants={heroCTA}
              initial="hidden"
              animate="visible"
            >
              <Link
                href="/contact"
                className="bg-gradient-to-r from-[#00B4D8] to-[#0096B7] text-white rounded-full px-10 py-5 font-black text-sm uppercase tracking-wider hover:scale-105 hover:shadow-[0_0_30px_rgba(0,180,216,0.4)] transition-all duration-300 shadow-[0_8px_30px_rgba(0,180,216,0.25)]"
              >
                Book Today
              </Link>
              <Link
                href="/services/cryotherapy"
                className="border-2 border-[#0B2447]/20 text-[#0B2447] rounded-full px-10 py-5 font-black text-sm uppercase tracking-wider hover:border-[#00B4D8] hover:text-[#00B4D8] hover:scale-105 transition-all duration-300"
              >
                View Services
              </Link>
            </motion.div>
          </div>

          {/* Right side - decorative (empty, mesh blobs handle the visual) */}
          <div className="hidden md:block md:col-span-5" />
        </div>
      </div>

      {/* Diagonal bottom clip overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-[#0B2447]" style={{ clipPath: "polygon(0 100%, 100% 40%, 100% 100%)" }} />

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-[#0B2447]/30 text-[10px] uppercase tracking-[0.3em] font-bold">Scroll</span>
        <ChevronDown className="w-6 h-6 text-[#00B4D8]/50" />
      </motion.div>
    </section>
  );
}
