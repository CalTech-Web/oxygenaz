"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { membershipPlans } from "@/data/memberships";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";

export default function Memberships() {
  return (
    <section className="relative overflow-hidden">
      {/* Dark background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B2447] to-[#061527]" />

      {/* Gradient mesh accents */}
      <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-[#00B4D8]/8 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#0B2447]/10 blur-[100px] pointer-events-none" />

      {/* Content */}
      <motion.div
        className="relative z-10 py-20 md:py-28 px-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-[var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
              Choose Your Plan
            </h2>
            <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-[#00B4D8] to-[#0B2447]" />
            <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto mt-6">
              Want better deals? These are our most popular plans, but call
              or take a tour and experience our full menu.
            </p>
          </motion.div>

          {/* Pricing cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {membershipPlans.map((plan) => {
              const isHighlighted = plan.highlighted;
              const isPlatinum = plan.id === "platinum";

              return (
                <motion.div
                  key={plan.id}
                  variants={fadeInUp}
                  className={`relative rounded-3xl p-8 flex flex-col min-h-[560px] transition-all duration-400 ${
                    isHighlighted
                      ? "bg-white md:scale-[1.06] hover:-translate-y-3 shadow-[0_25px_60px_rgba(0,0,0,0.12)]"
                      : isPlatinum
                      ? "bg-gradient-to-b from-[#0B2447] to-[#081C36] hover:-translate-y-2 shadow-[0_15px_40px_rgba(0,0,0,0.2)]"
                      : "bg-white border border-gray-100 hover:-translate-y-2 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.1)]"
                  }`}
                  style={
                    isHighlighted
                      ? {
                          border: "3px solid transparent",
                          backgroundClip: "padding-box",
                          boxShadow: "0 25px 60px rgba(0,0,0,0.12), 0 0 0 3px #00B4D8",
                        }
                      : undefined
                  }
                >
                  {/* Badge */}
                  {plan.badge && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span
                        className={`text-xs font-black uppercase tracking-wider rounded-full px-6 py-2.5 shadow-lg ${
                          isHighlighted
                            ? "bg-gradient-to-r from-[#00B4D8] to-[#00B4D8] text-white shadow-[0_0_20px_rgba(0,180,216,0.4)]"
                            : "bg-white text-[#0B2447] shadow-[0_0_15px_rgba(11,36,71,0.3)]"
                        }`}
                      >
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  {/* Plan name */}
                  <h3
                    className={`text-2xl font-black mb-2 ${
                      plan.badge ? "mt-4" : ""
                    } ${isPlatinum ? "text-white" : "text-[#0B2447]"}`}
                  >
                    {plan.name}
                  </h3>

                  {/* Price */}
                  <div className="mb-4">
                    <span
                      className={`font-[var(--font-display)] text-6xl font-extrabold ${
                        isPlatinum
                          ? "text-white"
                          : isHighlighted
                          ? "text-gradient-blue"
                          : "text-[#0B2447]"
                      }`}
                    >
                      ${plan.price}
                    </span>
                    <span
                      className={`text-lg font-medium ${
                        isPlatinum ? "text-white/50" : "text-[#6B7B8D]"
                      }`}
                    >
                      /mo
                    </span>
                  </div>

                  {/* Ideal for */}
                  <p
                    className={`italic text-sm mb-6 border-b pb-4 ${
                      isPlatinum
                        ? "text-white/50 border-white/10"
                        : "text-[#6B7B8D] border-gray-200"
                    }`}
                  >
                    Ideal for: {plan.idealFor}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3.5 mb-8 flex-1">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className={`flex items-start gap-3 text-sm ${
                          isPlatinum ? "text-white/80" : "text-[#0B2447]"
                        }`}
                      >
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          isPlatinum ? "bg-white/20" : "bg-[#00B4D8]/10"
                        }`}>
                          <Check className={`w-3 h-3 ${isPlatinum ? "text-white" : "text-[#00B4D8]"}`} />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Signup button */}
                  <Link
                    href="/contact"
                    className={`rounded-full px-6 py-4 text-sm font-black uppercase tracking-wider w-full text-center block transition-all duration-300 hover:scale-105 ${
                      isHighlighted
                        ? "bg-gradient-to-r from-[#00B4D8] to-[#0096B7] text-white hover:shadow-[0_0_30px_rgba(0,180,216,0.5)] animate-pulse-glow"
                        : isPlatinum
                        ? "bg-white text-[#0B2447] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                        : "border-2 border-[#00B4D8] text-[#00B4D8] hover:bg-[#00B4D8] hover:text-white"
                    }`}
                  >
                    Sign Up
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
