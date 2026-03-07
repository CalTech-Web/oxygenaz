"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-brand-bg py-20 md:py-32 overflow-hidden">
      {/* Radial gold glow behind text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] rounded-full bg-brand-gold/5 blur-[120px]" />
      </div>

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 text-center">
        {/* Decorative gold line above heading */}
        <motion.div
          className="w-16 h-0.5 bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto mb-8"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-brand-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Only the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-brand-gold-light to-brand-gold">
            Good Stuff
          </span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-brand-muted max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          Advanced therapies that boost energy, enhance recovery, and support
          your mind and body&apos;s vitality.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <Link
            href="/contact"
            className="inline-block rounded-lg bg-brand-gold px-8 py-3 text-lg font-semibold text-brand-bg hover:bg-brand-gold-light transition-colors"
          >
            Book Appointment
          </Link>

          <a
            href="tel:6028887992"
            className="inline-block rounded-lg border border-brand-gold px-8 py-3 text-lg font-semibold text-brand-gold hover:bg-brand-gold hover:text-brand-bg transition-colors"
          >
            Call 602.888.7992
          </a>
        </motion.div>

        {/* Decorative gold line below buttons */}
        <motion.div
          className="w-32 h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent mx-auto mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        />
      </div>
    </section>
  );
}
