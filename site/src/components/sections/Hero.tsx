"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown, ArrowRight, Phone, MapPin } from "lucide-react";
import { heroText, heroSubtext, heroCTA } from "@/lib/animations";
import { SITE } from "@/lib/constants";

const areas = [
  { name: "Glendale", color: "bg-sky-400/15 text-sky-300 border-sky-400/20", ping: "bg-sky-400" },
  { name: "Peoria", color: "bg-violet-400/15 text-violet-300 border-violet-400/20", ping: "bg-violet-400" },
  { name: "Phoenix", color: "bg-amber-400/15 text-amber-300 border-amber-400/20", ping: "bg-amber-400" },
  { name: "Scottsdale", color: "bg-emerald-400/15 text-emerald-300 border-emerald-400/20", ping: "bg-emerald-400" },
  { name: "Surprise", color: "bg-rose-400/15 text-rose-300 border-rose-400/20", ping: "bg-rose-400" },
  { name: "Arrowhead", color: "bg-teal-400/15 text-teal-300 border-teal-400/20", ping: "bg-teal-400" },
  { name: "Sun City", color: "bg-orange-400/15 text-orange-300 border-orange-400/20", ping: "bg-orange-400" },
  { name: "North Valley", color: "bg-indigo-400/15 text-indigo-300 border-indigo-400/20", ping: "bg-indigo-400" },
];

/* Quadruple for seamless CSS loop */
const tickerAreas = [...areas, ...areas, ...areas, ...areas];

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
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-32 md:py-0">
        <div className="flex flex-col items-center text-center">
          {/* Accent bar */}
          <motion.div
            className="h-1 w-20 rounded-full bg-gradient-to-r from-[#0066B3] to-white/40 mb-8"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
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
            className="flex flex-col sm:flex-row items-center gap-4"
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
      </div>

      {/* Bottom - Location ticker */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        {/* Gradient fade above ticker */}
        <div className="h-16 bg-gradient-to-t from-[#061527] to-transparent" />

        {/* Ticker bar */}
        <div className="bg-[#061527] py-5 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 mb-3">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-white/30">
              Serving the Greater Phoenix Area
            </p>
          </div>

          {/* Scrolling pills - CSS infinite ticker */}
          <div className="relative">
            {/* Left/right fade masks */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#061527] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#061527] to-transparent z-10 pointer-events-none" />

            <div
              className="flex gap-3 w-max"
              style={{ animation: "ticker 30s linear infinite", willChange: "transform" }}
            >
              {tickerAreas.map((area, i) => (
                <span
                  key={`${area.name}-${i}`}
                  className={`inline-flex items-center gap-2 rounded-full border backdrop-blur-sm px-4 py-2 text-xs font-bold whitespace-nowrap ${area.color}`}
                >
                  <span className="relative flex h-4 w-4 items-center justify-center">
                    <span className={`absolute inline-flex h-3 w-3 rounded-full opacity-40 animate-ping ${area.ping}`} />
                    <MapPin className="relative h-3.5 w-3.5 fill-current" />
                  </span>
                  {area.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-[120px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-white/30 text-[10px] uppercase tracking-[0.3em] font-bold">Scroll</span>
        <ChevronDown className="w-6 h-6 text-white/50" />
      </motion.div>
    </section>
  );
}
