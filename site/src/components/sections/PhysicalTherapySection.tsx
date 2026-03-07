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
    <section className="py-20 md:py-28 bg-white">
      <motion.div
        className="max-w-[1140px] mx-auto px-4 text-center"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {/* Pill tags */}
        <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <span className="bg-gradient-to-r from-[#004AAD] to-[#0053DA] text-white text-xs font-black uppercase tracking-wider rounded-full px-5 py-2 shadow-md">
            Wellness Services
          </span>
          <span className="bg-gradient-to-r from-[#004AAD] to-[#0053DA] text-white text-xs font-black uppercase tracking-wider rounded-full px-5 py-2 shadow-md">
            Sports Medicine / Physical Therapy
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={fadeInUp}
          className="text-[#10173E] text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight mb-14 accent-underline-center"
        >
          Expert Physical Therapy
        </motion.h1>

        {/* Feature boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="text-left p-6 rounded-xl bg-[#EDF2F9] border-l-4 border-[#5CE1E6] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
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
            className="inline-block bg-gradient-to-r from-[#004AAD] to-[#0053DA] text-white rounded-full px-8 py-4 text-sm font-black uppercase tracking-wider border-2 border-[#5CE1E6] hover:scale-105 hover:shadow-[0_0_30px_rgba(92,225,230,0.3)] transition-all duration-300"
          >
            Learn More About Physical Therapy
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
