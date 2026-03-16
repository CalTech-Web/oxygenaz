"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown, ArrowRight, Phone } from "lucide-react";
import { heroText, heroSubtext, heroCTA } from "@/lib/animations";
import { SITE } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#061527] -mt-[80px] lg:-mt-[112px] pt-[75px]">
      {/* Background image */}
      <Image
        src="/images/content/home-page.jpg"
        alt=""
        fill
        priority
        className="object-cover"
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-[#061527]/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-20 py-32 md:py-0">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left side - text */}
          <div className="md:col-span-8">
            {/* Accent bar */}
            <motion.div
              className="h-1 w-20 rounded-full bg-gradient-to-r from-[#0066B3] to-white/40 mb-8"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              style={{ transformOrigin: "left" }}
            />

            <motion.h1
              className="font-[var(--font-display)] text-5xl sm:text-6xl lg:text-[84px] font-extrabold leading-[0.95] mb-8 tracking-tight text-white whitespace-nowrap"
              variants={heroText}
              initial="hidden"
              animate="visible"
            >
              Only the{" "}
              <span className="text-neon-glow inline-flex" style={{ perspective: "600px" }}>
                {"Good".split("").map((letter, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, rotateX: 90, y: -40 }}
                    animate={{ opacity: 1, rotateX: 0, y: 0 }}
                    transition={{
                      delay: 0.8 + i * 0.15,
                      duration: 0.7,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    style={{ display: "inline-block", transformOrigin: "bottom center" }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>{" "}
              Stuff
            </motion.h1>

            <motion.p
              className="text-white/80 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
              variants={heroSubtext}
              initial="hidden"
              animate="visible"
            >
              Pain relief, improved mobility, and complete wellness plans
              backed by 25+ years of expertise. Walk in or book your session today.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-start gap-4"
              variants={heroCTA}
              initial="hidden"
              animate="visible"
            >
              <Link
                href="/contact"
                className="group relative bg-gradient-to-r from-[#0066B3] to-[#00518F] text-white rounded-full px-10 py-5 font-black text-sm uppercase tracking-wider hover:scale-105 hover:shadow-[0_0_40px_rgba(0,180,216,0.5)] transition-all duration-300 shadow-[0_8px_30px_rgba(0,180,216,0.25)] flex items-center gap-3 overflow-hidden"
              >
                Book Today
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
              </Link>
              <a
                href={SITE.phoneHref}
                className="group border-2 border-white/30 text-white rounded-full px-10 py-5 font-black text-sm uppercase tracking-wider hover:border-[#0066B3] hover:bg-[#0066B3]/10 hover:scale-105 transition-all duration-300 flex items-center gap-3"
              >
                <Phone className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                Call Us
              </a>
            </motion.div>
          </div>

          {/* Right side - decorative */}
          <div className="hidden md:block md:col-span-4" />
        </div>
      </div>

      {/* Bottom overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-[75px] bg-[#061527]" />

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-white/30 text-[10px] uppercase tracking-[0.3em] font-bold">Scroll</span>
        <ChevronDown className="w-6 h-6 text-white/50" />
      </motion.div>
    </section>
  );
}
