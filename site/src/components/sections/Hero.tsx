"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative min-h-[720px] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/heroes/home-hero.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#10173E]/75" />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center max-w-[1140px] mx-auto px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2
          className="text-white text-[80px] font-extrabold leading-[96px] mb-6"
          style={{ textShadow: "4px 4px 0px rgba(0,0,0,0.25)" }}
        >
          Only the <em>Good</em> Stuff
        </h2>

        <p className="text-white text-lg max-w-2xl mx-auto mb-10">
          Whether you&apos;re seeking pain relief, improved mobility, or a
          complete wellness plan, our team is here to guide you. Book today or
          give us a ring.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="bg-white text-[#004AAD] rounded-full px-6 py-3 font-bold text-sm uppercase hover:bg-gray-100 transition-colors"
          >
            Book Today
          </Link>
          <Link
            href="/services"
            className="border border-white text-white rounded-full px-6 py-3 font-bold text-sm uppercase hover:bg-white/10 transition-colors"
          >
            View Services
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
