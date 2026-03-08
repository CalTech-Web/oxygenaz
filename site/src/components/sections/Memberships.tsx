"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { membershipPlans } from "@/data/memberships";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";

export default function Memberships() {
  return (
    <section className="relative overflow-hidden grain">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/patterns/wellness-services-bg.jpg')",
        }}
      />

      {/* Dark overlay - deeper */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F2C]/97 via-[#10173E]/95 to-[#0A0F2C]/97" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "url('/images/patterns/talking-bubbles.webp')",
          backgroundRepeat: "repeat",
        }}
      />

      {/* Decorative orbs - bigger, brighter */}
      <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-[#5CE1E6]/12 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#004AAD]/20 blur-[100px] pointer-events-none" />

      {/* Divider at top */}
      <div className="absolute top-0 left-0 right-0 section-divider" />

      {/* Content */}
      <motion.div
        className="relative z-10 py-20 md:py-24 px-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <div className="max-w-[1140px] mx-auto">
          {/* Heading */}
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4 accent-underline-center">
              Our Membership Plans
            </h2>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mt-8 font-light">
              Want better deals? These are our four most Popular Plans, but CALL
              or take a TOUR and experience our full menu of Plans.
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
                  className={`relative rounded-2xl p-8 flex flex-col min-h-[560px] transition-all duration-400 ${
                    isHighlighted
                      ? "bg-white ring-2 ring-[#5CE1E6] glow-cyan-strong md:scale-[1.06] hover:-translate-y-3 shadow-[0_25px_60px_rgba(0,0,0,0.12)]"
                      : isPlatinum
                      ? "bg-gradient-to-b from-[#10173E] to-[#0A0F2C] border border-[#5CE1E6]/25 hover:-translate-y-2 shadow-[0_15px_40px_rgba(0,0,0,0.2)] inner-glow"
                      : "bg-white border border-gray-100 hover:-translate-y-2 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.1)]"
                  }`}
                >
                  {/* Badge */}
                  {plan.badge && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span
                        className={`text-xs font-black uppercase tracking-wider rounded-full px-6 py-2.5 shadow-lg ${
                          isHighlighted
                            ? "bg-gradient-to-r from-[#5CE1E6] to-[#004AAD] text-white shadow-[0_0_20px_rgba(92,225,230,0.4)]"
                            : "bg-[#5CE1E6] text-[#10173E] shadow-[0_0_15px_rgba(92,225,230,0.3)]"
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
                    } ${isPlatinum ? "text-white" : "text-[#10173E]"}`}
                  >
                    {plan.name}
                  </h3>

                  {/* Price */}
                  <div className="mb-4">
                    <span
                      className={`text-6xl font-black ${
                        isPlatinum ? "text-white" : "text-[#10173E]"
                      }`}
                    >
                      ${plan.price}
                    </span>
                    <span
                      className={`text-lg font-medium ${
                        isPlatinum ? "text-white/50" : "text-[#5A5A5A]"
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
                        : "text-[#5A5A5A] border-gray-200"
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
                          isPlatinum ? "text-white/80" : "text-[#10173E]"
                        }`}
                      >
                        <Check className="w-5 h-5 text-[#5CE1E6] shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Signup button */}
                  <Link
                    href="/contact"
                    className={`rounded-full px-6 py-4 text-sm font-black uppercase tracking-wider w-full text-center block transition-all duration-300 hover:scale-105 ${
                      isHighlighted
                        ? "bg-gradient-to-r from-[#004AAD] to-[#0053DA] text-white border-2 border-[#5CE1E6] hover:shadow-[0_0_40px_rgba(92,225,230,0.5)] animate-pulse-glow"
                        : isPlatinum
                        ? "bg-[#5CE1E6] text-[#10173E] hover:shadow-[0_0_40px_rgba(92,225,230,0.5)]"
                        : "bg-gradient-to-r from-[#004AAD] to-[#0053DA] text-white border-2 border-[#5CE1E6] hover:shadow-[0_0_30px_rgba(92,225,230,0.4)]"
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
