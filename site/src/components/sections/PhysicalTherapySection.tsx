"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight, staggerContainer, viewportOnce } from "@/lib/animations";
import { CheckCircle } from "lucide-react";

const features = [
  {
    title: "Personalized treatment plans",
    body: "Reduce pain, move freely, and feel strong again \u2014 whether it\u2019s a new injury, surgery, or a chronic condition.",
  },
  {
    title: "Specialized services included",
    body: "From dry needling to spinal manipulation, we offer techniques to help you feel better, faster.",
  },
  {
    title: "Integrated wellness approach",
    body: "We blend traditional physical therapy with Core Services like cryotherapy, red light therapy, and infrared sauna.",
  },
];

export default function PhysicalTherapySection() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#F5F7FA] to-white overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-[-5%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#00B4D8]/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-5%] left-[-5%] w-[400px] h-[400px] rounded-full bg-[#0B2447]/5 blur-[80px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-20">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {/* Left - Image with decorative elements */}
          <motion.div variants={fadeInLeft} className="relative">
            {/* Decorative frame behind image */}
            <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-2 border-[#00B4D8]/20" />

            <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
              <Image
                src="/images/content/physical-therapy-hero.jpg"
                alt="Physical Therapy at Oxygen Wellness"
                width={600}
                height={500}
                className="w-full h-auto object-cover"
              />
              {/* Gradient overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#0B2447]/40 to-transparent" />
              {/* Top accent line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00B4D8] to-[#0B2447]" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-3 lg:-right-6 bg-gradient-to-r from-[#00B4D8] to-[#0096B7] text-white rounded-xl px-5 py-3 shadow-[0_8px_30px_rgba(0,180,216,0.35)]">
              <p className="text-2xl font-extrabold font-[var(--font-display)]">25+</p>
              <p className="text-xs font-bold uppercase tracking-wider text-white/80">Years Experience</p>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div variants={fadeInRight}>
            <span className="inline-block text-[#00B4D8] text-sm font-black uppercase tracking-widest mb-4">
              Physical Therapy
            </span>
            <h2 className="font-[var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0B2447] tracking-tight mb-3">
              Expert Physical Therapy
            </h2>
            <div className="h-1 w-20 rounded-full bg-gradient-to-r from-[#00B4D8] to-[#0B2447] mb-10" />

            {/* Features with icons */}
            <div className="space-y-6 mb-10">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4 group">
                  <div className="shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-[#00B4D8]/10 flex items-center justify-center group-hover:bg-[#00B4D8]/20 transition-colors">
                      <CheckCircle className="w-5 h-5 text-[#00B4D8]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0B2447] mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-[#6B7B8D] text-sm leading-relaxed">
                      {feature.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/physical-therapy"
              className="inline-block bg-gradient-to-r from-[#00B4D8] to-[#0096B7] text-white rounded-full px-8 py-4 text-sm font-black uppercase tracking-wider hover:scale-105 hover:shadow-[0_0_30px_rgba(0,180,216,0.4)] transition-all duration-300 shadow-[0_8px_30px_rgba(0,180,216,0.25)] mb-8"
            >
              Learn More About Physical Therapy
            </Link>

            {/* Consultation CTA card */}
            <div className="relative bg-[#0B2447] rounded-xl p-6 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[#00B4D8]/10 blur-[40px] pointer-events-none" />
              <p className="relative text-white/90 font-medium mb-4">
                Not sure where to start? Book a <span className="font-bold text-[#00B4D8]">FREE 15&apos; consult</span> with our Wellness and Sports Medicine Expert!
              </p>
              <Link
                href="/contact"
                className="relative inline-block border-2 border-[#00B4D8] text-[#00B4D8] rounded-full px-8 py-3 text-sm font-black uppercase tracking-wider hover:bg-[#00B4D8] hover:text-white hover:scale-105 transition-all duration-300"
              >
                Book My Consultation
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
