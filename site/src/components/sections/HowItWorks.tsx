"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  CalendarCheck,
  MessageCircle,
  HeartPulse,
  TrendingUp,
  ArrowRight,
  Clock,
  Users,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { staggerContainer, cardReveal, fadeInUp, viewportOnce } from "@/lib/animations";

const steps = [
  {
    number: "01",
    title: "Book Your Visit",
    description:
      "Schedule online in seconds, give us a call, or simply walk in - no referral needed. Choose the service and time that works best for you.",
    icon: CalendarCheck,
    highlights: ["Online booking 24/7", "Walk-ins welcome", "No referral required"],
    accent: "from-[#0066B3] to-[#4A90CC]",
  },
  {
    number: "02",
    title: "Free Consultation",
    description:
      "Meet with our wellness and sports medicine expert for a complimentary 15-minute session. We'll assess your needs and recommend the right treatments.",
    icon: MessageCircle,
    highlights: ["15-min free consult", "Expert assessment", "Personalized plan"],
    accent: "from-[#4A90CC] to-[#0066B3]",
  },
  {
    number: "03",
    title: "Get Treated",
    description:
      "Experience your customized treatment plan in our state-of-the-art facility. From cryotherapy to IV infusions, every session is tailored to your goals.",
    icon: HeartPulse,
    highlights: ["State-of-the-art equipment", "Tailored sessions", "Comfortable environment"],
    accent: "from-[#0066B3] to-[#061527]",
  },
  {
    number: "04",
    title: "Recover & Thrive",
    description:
      "Track your progress and optimize results over time. Our team follows up to adjust your plan and ensure you're hitting your wellness milestones.",
    icon: TrendingUp,
    highlights: ["Progress tracking", "Plan adjustments", "Ongoing support"],
    accent: "from-[#061527] to-[#0066B3]",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-[#F0F5FA] to-white overflow-hidden">
      {/* Animated background blobs */}
      <motion.div
        className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,102,179,0.12) 0%, transparent 65%)",
          filter: "blur(60px)",
          top: "-10%",
          left: "-5%",
        }}
        animate={{ x: [0, 60, 0], y: [0, 40, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(74,144,204,0.1) 0%, transparent 65%)",
          filter: "blur(50px)",
          bottom: "-8%",
          right: "-3%",
        }}
        animate={{ x: [0, -50, 0], y: [0, -30, 0], scale: [1, 0.9, 1] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-20">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0066B3]/30 bg-[#0066B3]/10 px-4 py-1.5 mb-5">
            <Sparkles className="h-3.5 w-3.5 text-[#0066B3] animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#0066B3]">
              Simple Process
            </span>
          </div>
          <h2 className="font-[var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#061527] tracking-tight mb-4">
            How It Works
          </h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-[#0066B3] to-[#061527] mb-5" />
          <p className="text-[#718096] text-lg max-w-2xl mx-auto">
            Getting started is easy. Four simple steps to a healthier, more energized you.
          </p>
        </motion.div>

        {/* Steps grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={cardReveal}
              className="group relative rounded-2xl bg-white border border-[#E2E8F0] shadow-sm p-6 md:p-8 hover:shadow-lg hover:border-[#0066B3]/20 transition-all duration-500"
            >
              {/* Step number badge */}
              <div className="flex items-start gap-5">
                <div
                  className={`shrink-0 flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${step.accent} shadow-lg shadow-[#0066B3]/20`}
                >
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#0066B3]">
                      Step {step.number}
                    </span>
                  </div>
                  <h3 className="font-[var(--font-display)] text-xl md:text-2xl font-bold text-[#061527] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[#718096] text-sm md:text-base leading-relaxed mb-4">
                    {step.description}
                  </p>
                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {step.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-[#0066B3] bg-[#0066B3]/10 rounded-full px-3 py-1"
                      >
                        <CheckCircle2 className="w-3 h-3" />
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-[#0066B3]/[0.03] to-transparent" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom stats bar */}
        <motion.div
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <div className="flex items-center gap-3 rounded-xl bg-white border border-[#E2E8F0] shadow-sm px-5 py-4">
            <Clock className="w-5 h-5 text-[#0066B3] shrink-0" />
            <div>
              <p className="text-[#061527] font-bold text-sm">Quick Sessions</p>
              <p className="text-[#718096] text-xs">Most treatments take 15-45 minutes</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-white border border-[#E2E8F0] shadow-sm px-5 py-4">
            <Users className="w-5 h-5 text-[#0066B3] shrink-0" />
            <div>
              <p className="text-[#061527] font-bold text-sm">Expert Team</p>
              <p className="text-[#718096] text-xs">Certified wellness professionals</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-white border border-[#E2E8F0] shadow-sm px-5 py-4">
            <ArrowRight className="w-5 h-5 text-[#0066B3] shrink-0" />
            <div>
              <p className="text-[#061527] font-bold text-sm">No Contracts</p>
              <p className="text-[#718096] text-xs">Pay per visit or choose a membership</p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-10 text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#0066B3] text-white rounded-full px-8 py-4 font-black text-sm uppercase tracking-wider hover:scale-105 hover:shadow-[0_8px_30px_rgba(0,102,179,0.4)] transition-all duration-300"
          >
            Get Started Today
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
