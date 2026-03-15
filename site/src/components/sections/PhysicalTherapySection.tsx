"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight, staggerContainer, viewportOnce } from "@/lib/animations";

const features = [
  {
    number: "01",
    title: "Personalized treatment plans",
    body: "Reduce pain, move freely, and feel strong again, whether it's a new injury, surgery, or a chronic condition.",
  },
  {
    number: "02",
    title: "Specialized services included",
    body: "From dry needling to spinal manipulation, we offer techniques to help you feel better, faster.",
  },
  {
    number: "03",
    title: "Integrated wellness approach",
    body: "We blend traditional physical therapy with Core Services like cryotherapy, red light therapy, and infrared sauna.",
  },
];

export default function PhysicalTherapySection() {
  return (
    <section className="py-20 md:py-28 bg-[#F5F7FA] relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 lg:px-20">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {/* Left - Image */}
          <motion.div variants={fadeInLeft} className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.1)] -rotate-1">
              <Image
                src="/images/heroes/home-hero.jpg"
                alt="Physical Therapy at Oxygen Wellness"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
              />
              {/* Coral accent border */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00B4D8] to-[#0B2447]" />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div variants={fadeInRight}>
            <h2 className="font-[var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0B2447] tracking-tight mb-3">
              Expert Physical Therapy
            </h2>
            <div className="h-1 w-20 rounded-full bg-gradient-to-r from-[#00B4D8] to-[#0B2447] mb-10" />

            {/* Numbered features */}
            <div className="space-y-8 mb-10">
              {features.map((feature) => (
                <div key={feature.number} className="flex gap-5">
                  <span className="font-[var(--font-display)] text-4xl font-extrabold text-gradient-blue shrink-0">
                    {feature.number}
                  </span>
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
              className="inline-block bg-gradient-to-r from-[#00B4D8] to-[#0096B7] text-white rounded-full px-8 py-4 text-sm font-black uppercase tracking-wider hover:scale-105 hover:shadow-[0_0_30px_rgba(0,180,216,0.4)] transition-all duration-300 shadow-[0_8px_30px_rgba(0,180,216,0.25)]"
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
