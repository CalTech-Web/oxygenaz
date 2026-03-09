"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, viewportOnce } from "@/lib/animations";

export default function PromoCTA() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Vibrant animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00B4D8] via-[#00B4D8] to-[#0B2447] animate-gradient" />

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBtLTIgMGE0IDQgMCAxIDEgNCAwIDQgNCAwIDEgMS00IDAiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+')]" />

      {/* Diagonal clips */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-white" style={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 100%)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#F5F7FA]" style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }} />

      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-4 lg:px-20"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left offer */}
          <div className="text-center md:text-left">
            <h3 className="font-[var(--font-display)] text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-4">
              Free 15-Min<br />Consultation
            </h3>
            <p className="text-white/80 text-base mb-6">
              Not sure where to start? Talk to our Wellness and Sports Medicine Expert.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-[#0B2447] rounded-full px-8 py-4 font-black text-sm uppercase tracking-wider hover:scale-105 hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] transition-all duration-300"
            >
              Book My Consultation
            </Link>
          </div>

          {/* Divider */}
          <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-white/40 to-transparent" />
          <div className="md:hidden h-px w-full bg-gradient-to-r from-transparent via-white/40 to-transparent" />

          {/* Right offer */}
          <div className="text-center md:text-left">
            <h3 className="font-[var(--font-display)] text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-4">
              Free Core Service<br />on First Visit
            </h3>
            <p className="text-white/80 text-base mb-6">
              Book an appointment and get any core service on us for your first time.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-[#0B2447] rounded-full px-8 py-4 font-black text-sm uppercase tracking-wider hover:scale-105 hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] transition-all duration-300"
            >
              Book My Appointment
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
