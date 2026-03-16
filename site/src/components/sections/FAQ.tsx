"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Phone, HelpCircle, MessageCircle } from "lucide-react";
import Link from "next/link";
import { faqItems } from "@/data/faq";
import { fadeInUp, fadeInLeft, staggerContainer, viewportOnce } from "@/lib/animations";
import { SITE } from "@/lib/constants";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#0a2240] via-[#0d2d54] to-[#061527] overflow-hidden">
      {/* Background blobs */}
      <motion.div
        className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,102,179,0.25) 0%, transparent 65%)",
          filter: "blur(80px)",
          top: "-10%",
          left: "-8%",
        }}
        animate={{ x: [0, 70, 0], y: [0, 40, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(74,144,204,0.2) 0%, transparent 65%)",
          filter: "blur(70px)",
          bottom: "-12%",
          right: "-5%",
        }}
        animate={{ x: [0, -50, 0], y: [0, -35, 0], scale: [1, 0.9, 1] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,140,200,0.15) 0%, transparent 60%)",
          filter: "blur(60px)",
          top: "50%",
          left: "50%",
        }}
        animate={{ x: [0, -40, 30, 0], y: [0, 30, -20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Large ? watermark */}
      <div className="absolute top-16 right-10 opacity-[0.03] pointer-events-none">
        <HelpCircle className="w-48 h-48 md:w-72 md:h-72 text-white" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {/* Left - Sticky heading */}
          <motion.div
            variants={fadeInLeft}
            className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#4A90CC]/30 bg-[#4A90CC]/10 px-4 py-1.5 mb-5">
              <MessageCircle className="h-3.5 w-3.5 text-[#4A90CC]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#4A90CC]">
                FAQ
              </span>
            </div>
            <h2 className="font-[var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Frequently Asked Questions
            </h2>
            <div className="h-1 w-20 rounded-full bg-gradient-to-r from-[#0066B3] to-[#4A90CC] mt-4 mb-6" />
            <p className="text-white/60 text-base mb-8">
              Have more questions? We&apos;re here to help.
            </p>

            {/* Contact card */}
            <div className="rounded-xl bg-white/[0.06] border border-white/[0.1] backdrop-blur-md p-5">
              <a
                href={SITE.phoneHref}
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-300"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#0066B3] to-[#4A90CC] shadow-lg shadow-[#0066B3]/25">
                  <Phone className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-xs text-white/60 font-bold uppercase tracking-wider">Call us</p>
                  <p className="text-sm font-bold text-white">{SITE.phone}</p>
                </div>
              </a>
              <div className="my-4 h-px bg-white/[0.08]" />
              <Link
                href="/contact"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-300"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#4A90CC] to-[#0066B3] shadow-lg shadow-[#0066B3]/25">
                  <MessageCircle className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-xs text-white/60 font-bold uppercase tracking-wider">Or</p>
                  <p className="text-sm font-bold text-white">Send us a message</p>
                </div>
              </Link>
            </div>
          </motion.div>

          {/* Right - Accordion */}
          <div className="lg:col-span-8 space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`group rounded-2xl overflow-hidden transition-all duration-500 ${
                  openIndex === index
                    ? "bg-white/[0.1] border border-[#4A90CC]/30 shadow-[0_8px_40px_rgba(0,102,179,0.15)]"
                    : "bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.07] hover:border-white/[0.15]"
                }`}
              >
                <button
                  id={`faq-btn-${index}`}
                  onClick={() => toggle(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-panel-${index}`}
                  className="w-full flex items-center justify-between text-left px-7 py-6 gap-4"
                >
                  <div className="flex items-center gap-4">
                    <span aria-hidden="true" className={`text-xs font-black tracking-wider transition-colors duration-300 ${
                      openIndex === index ? "text-[#4A90CC]" : "text-white/25"
                    }`}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className={`text-lg font-bold transition-colors duration-300 ${
                      openIndex === index ? "text-white" : "text-white/70"
                    }`}>
                      {item.question}
                    </span>
                  </div>
                  <div
                    aria-hidden="true"
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      openIndex === index
                        ? "bg-gradient-to-br from-[#0066B3] to-[#4A90CC] text-white shadow-lg shadow-[#0066B3]/25"
                        : "bg-white/[0.06] text-[#4A90CC] border border-white/[0.1]"
                    }`}
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      id={`faq-panel-${index}`}
                      role="region"
                      aria-labelledby={`faq-btn-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-7 pb-6 pl-[4.25rem]">
                        <div className="h-px bg-gradient-to-r from-[#0066B3]/30 to-transparent mb-4" />
                        <p className="text-white/60 leading-relaxed text-base">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
