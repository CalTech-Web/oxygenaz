"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";

const features = [
  {
    title: "Personalized treatment plans",
    body: "Reduce pain, move freely, and feel strong again, whether it's a new injury, surgery, or a chronic condition.",
  },
  {
    title: "Specialized services included",
    body: "From dry needling to spinal manipulation, we offer techniques to help you feel better, faster.",
  },
  {
    title: "Personalized treatment plans",
    body: "We blend traditional physical therapy with Core Services like cryotherapy, red light therapy, and infrared sauna.",
  },
];

export default function PhysicalTherapySection() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#5CE1E6]/[0.03] blur-[100px] pointer-events-none" />

      <motion.div
        className="relative z-10 max-w-[1140px] mx-auto px-4 text-center"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {/* Pill tags */}
        <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <span className="bg-gradient-to-r from-[#004AAD] to-[#0053DA] text-white text-xs font-black uppercase tracking-[0.15em] rounded-full px-6 py-2.5 shadow-lg">
            Wellness Services
          </span>
          <span className="bg-gradient-to-r from-[#004AAD] to-[#0053DA] text-white text-xs font-black uppercase tracking-[0.15em] rounded-full px-6 py-2.5 shadow-lg">
            Sports Medicine / Physical Therapy
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={fadeInUp}
          className="text-[#10173E] text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-16 accent-underline-center"
        >
          Expert Physical Therapy
        </motion.h1>

        {/* Feature boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="text-left p-8 rounded-2xl bg-gradient-to-br from-[#EDF2F9] to-white border-l-4 border-[#5CE1E6] shadow-sm card-lift"
            >
              <h3 className="text-xl font-black text-[#10173E] mb-3">
                {feature.title}
              </h3>
              <p className="text-[#7A7A7A] text-base leading-relaxed">
                {feature.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div variants={fadeInUp}>
          <Link
            href="/physical-therapy"
            className="inline-block bg-gradient-to-r from-[#004AAD] to-[#0053DA] text-white rounded-full px-10 py-5 text-sm font-black uppercase tracking-wider border-2 border-[#5CE1E6] hover:scale-105 hover:shadow-[0_0_40px_rgba(92,225,230,0.4)] transition-all duration-300"
          >
            Learn More About Physical Therapy
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
