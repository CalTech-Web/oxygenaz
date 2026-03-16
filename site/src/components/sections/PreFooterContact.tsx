"use client";

import { motion } from "framer-motion";
import { MessageCircle, CheckCircle2, Phone } from "lucide-react";
import { fadeInLeft, fadeInRight, staggerContainer, viewportOnce } from "@/lib/animations";
import { SITE } from "@/lib/constants";
import ContactForm from "@/components/ContactForm";

interface PreFooterContactProps {
  source?: string;
}

export default function PreFooterContact({ source = "contact-section" }: PreFooterContactProps) {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#0a2240] via-[#0d2d54] to-[#061527] overflow-hidden">
      {/* Animated blobs */}
      <motion.div
        className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,102,179,0.3) 0%, transparent 65%)",
          filter: "blur(80px)",
          top: "-15%",
          right: "-8%",
        }}
        animate={{ x: [0, -50, 0], y: [0, 30, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(74,144,204,0.2) 0%, transparent 65%)",
          filter: "blur(60px)",
          bottom: "-10%",
          left: "-5%",
        }}
        animate={{ x: [0, 40, 0], y: [0, -25, 0], scale: [1, 0.9, 1] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {/* Left - Info */}
          <motion.div variants={fadeInLeft}>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#4A90CC]/30 bg-[#4A90CC]/10 px-4 py-1.5 mb-5">
              <MessageCircle className="h-3.5 w-3.5 text-[#4A90CC] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#4A90CC]">
                Get Started
              </span>
            </div>
            <h2 className="font-[var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3">
              Ready to Feel Better?
            </h2>
            <div className="h-1 w-20 rounded-full bg-gradient-to-r from-[#0066B3] to-[#4A90CC] mb-6" />
            <p className="text-white/50 text-lg leading-relaxed mb-8">
              Whether you are recovering from an injury, managing chronic pain, or looking to optimize your performance - we are here to help. Fill out the form and we will reach out to schedule your first visit.
            </p>

            {/* Quick benefits */}
            <div className="space-y-4 mb-8">
              {[
                "No doctor referral needed - Arizona is a direct-access state",
                "Free core service with your first PT appointment",
                "Flexible scheduling - open 7 days a week",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#0066B3]/20 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#4A90CC]" />
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>

            {/* Phone CTA */}
            <a
              href={SITE.phoneHref}
              className="group inline-flex items-center gap-3 border border-white/15 rounded-2xl px-5 py-4 hover:border-[#4A90CC]/40 hover:bg-white/[0.04] transition-all duration-300"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#0066B3] to-[#4A90CC] shadow-lg shadow-[#0066B3]/25">
                <Phone className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-white/40 text-xs font-bold uppercase tracking-wider">Or call us directly</p>
                <p className="text-white font-extrabold">{SITE.phone}</p>
              </div>
            </a>
          </motion.div>

          {/* Right - Form */}
          <motion.div variants={fadeInRight}>
            <div className="rounded-2xl bg-white/[0.06] border border-white/[0.1] backdrop-blur-md p-8 md:p-10">
              <ContactForm source={source} variant="dark" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
