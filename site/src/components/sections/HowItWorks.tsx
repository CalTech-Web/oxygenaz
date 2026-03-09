"use client";

import { motion } from "framer-motion";
import { CalendarCheck, MessageCircle, HeartPulse, TrendingUp } from "lucide-react";
import { staggerContainer, popIn } from "@/lib/animations";

const steps = [
  {
    number: "01",
    title: "Book",
    description: "Schedule online, call us, or just walk in",
    icon: CalendarCheck,
  },
  {
    number: "02",
    title: "Consult",
    description: "Free consultation with our expert team",
    icon: MessageCircle,
  },
  {
    number: "03",
    title: "Treat",
    description: "Personalized treatment plan just for you",
    icon: HeartPulse,
  },
  {
    number: "04",
    title: "Recover",
    description: "Track your progress and optimize results",
    icon: TrendingUp,
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 lg:px-20">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="font-[var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1A1A2E] tracking-tight">
            How It Works
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#FF6B6B] to-[#7C3AED]" />
        </div>

        {/* Steps */}
        <motion.div
          className="relative"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {/* Connecting line - desktop only */}
          <div className="absolute top-16 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-[#FF6B6B] via-[#FF8C42] to-[#7C3AED] hidden md:block" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
            {steps.map((step) => (
              <motion.div
                key={step.number}
                variants={popIn}
                className="relative flex flex-col items-center text-center"
              >
                {/* Circle with number */}
                <div className="relative z-10 flex h-32 w-32 flex-col items-center justify-center rounded-full bg-white shadow-[0_8px_40px_rgba(255,107,107,0.15)] border-2 border-[#FFF0E6]">
                  <span className="font-[var(--font-display)] text-3xl font-extrabold text-gradient-vibrant">
                    {step.number}
                  </span>
                  <step.icon className="mt-1 h-6 w-6 text-[#FF6B6B]" />
                </div>

                {/* Text */}
                <h3 className="mt-5 font-[var(--font-display)] text-xl font-bold text-[#1A1A2E]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-[#6B7280] max-w-[200px]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
