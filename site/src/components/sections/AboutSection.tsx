"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight, staggerContainer, viewportOnce } from "@/lib/animations";

export default function AboutSection() {
  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden">
      {/* Gradient mesh accent */}
      <div className="absolute top-1/4 right-[-10%] w-[500px] h-[500px] rounded-full bg-[#FF6B6B]/8 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-[-10%] w-[400px] h-[400px] rounded-full bg-[#7C3AED]/6 blur-[100px] pointer-events-none" />

      <motion.div
        className="relative z-10 mx-auto max-w-6xl px-4 lg:px-20"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Pull quote */}
          <motion.div variants={fadeInLeft}>
            <h2 className="font-[var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1A1A2E] leading-[1.1] tracking-tight">
              It&apos;s All About{" "}
              <span className="text-gradient-vibrant">YOU</span>
            </h2>
            <div className="h-1 w-20 rounded-full bg-gradient-to-r from-[#FF6B6B] to-[#7C3AED] mt-6" />
          </motion.div>

          {/* Right - Content + Dr. card */}
          <motion.div variants={fadeInRight}>
            <p className="text-[#4A4A6A] text-lg leading-relaxed mb-8">
              Our team understands the limitations of traditional, insurance-driven
              healthcare. That&apos;s why we focus on only the good stuff -
              evidence-based treatments that prioritize results over routine. No
              gimmicks, no unnecessary treatments, just personalized care that works.
            </p>

            {/* Dr. Borman card */}
            <div className="flex items-center gap-4 bg-[#FFF8F0] rounded-2xl p-5 mb-8">
              <Image
                src="/images/content/dr-clint.jpg"
                alt="Dr. Clint Borman"
                width={64}
                height={64}
                className="w-16 h-16 rounded-full object-cover shadow-md"
              />
              <div>
                <p className="font-bold text-[#1A1A2E]">Dr. Clint Borman, DPT</p>
                <p className="text-sm text-[#6B7280]">Owner & Physical Therapist - 25+ Years Experience</p>
              </div>
            </div>

            <Link
              href="/about"
              className="inline-block bg-gradient-to-r from-[#FF6B6B] to-[#E84545] text-white rounded-full px-8 py-4 text-sm font-black uppercase tracking-wider hover:scale-105 hover:shadow-[0_0_30px_rgba(255,107,107,0.4)] transition-all duration-300 shadow-[0_8px_30px_rgba(255,107,107,0.25)]"
            >
              Learn More About Us
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
