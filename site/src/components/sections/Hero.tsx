"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-brand-dark to-brand-primary py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Only the Good Stuff
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-cyan-100 max-w-2xl mx-auto mb-10"
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
            className="inline-block rounded-lg bg-brand-accent px-8 py-3 text-lg font-semibold text-white hover:bg-cyan-500 transition-colors"
          >
            Book Appointment
          </Link>

          <a
            href="tel:6028887992"
            className="inline-block rounded-lg border-2 border-white px-8 py-3 text-lg font-semibold text-white hover:bg-white/10 transition-colors"
          >
            Call 602.888.7992
          </a>
        </motion.div>
      </div>
    </section>
  );
}
