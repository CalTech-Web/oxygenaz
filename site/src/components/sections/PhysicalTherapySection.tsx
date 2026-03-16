"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight, staggerContainer, viewportOnce } from "@/lib/animations";
import { CheckCircle } from "lucide-react";

const features = [
  {
    title: "Personalized treatment plans",
    body: "Reduce pain, move freely, and feel strong again - whether it\u2019s a new injury, surgery, or a chronic condition.",
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
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#F0F5FA] to-white overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-20">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {/* Left - Image */}
          <motion.div variants={fadeInLeft} className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
              <Image
                src="/images/content/physical-therapy-hero.jpg"
                alt="Physical Therapy at Oxygen Wellness"
                width={600}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-3 lg:-right-6 bg-[#061527] text-white rounded-xl px-5 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
              <p className="text-2xl font-extrabold font-[var(--font-display)]">25+</p>
              <p className="text-xs font-bold uppercase tracking-wider text-white/70">Years Experience</p>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div variants={fadeInRight}>
            <span className="inline-block text-[#0066B3] text-sm font-black uppercase tracking-widest mb-4">
              Physical Therapy
            </span>
            <h2 className="font-[var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#061527] tracking-tight mb-3">
              Expert Physical Therapy
            </h2>
            <div className="h-1 w-20 rounded-full bg-[#0066B3] mb-10" />

            {/* Features with icons */}
            <div className="space-y-6 mb-10">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4 group">
                  <div className="shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-[#0066B3]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#061527] mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-[#718096] text-sm leading-relaxed">
                      {feature.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/physical-therapy"
              className="inline-block bg-[#0066B3] text-white rounded-full px-8 py-4 text-sm font-black uppercase tracking-wider hover:bg-[#00518F] hover:scale-105 transition-all duration-300 mb-8"
            >
              Learn More About Physical Therapy
            </Link>

            {/* Consultation CTA card */}
            <div className="bg-[#061527] rounded-xl p-6">
              <p className="text-white/90 font-medium mb-4">
                Not sure where to start? Book a <span className="font-bold text-white">FREE 15&apos; consult</span> with our Wellness and Sports Medicine Expert!
              </p>
              <Link
                href="/contact"
                className="inline-block border-2 border-white/30 text-white rounded-full px-8 py-3 text-sm font-black uppercase tracking-wider hover:bg-white hover:text-[#061527] hover:scale-105 transition-all duration-300"
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
