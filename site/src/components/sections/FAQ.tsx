"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Phone } from "lucide-react";
import { faqItems } from "@/data/faq";
import { fadeInUp, fadeInLeft, staggerContainer, viewportOnce } from "@/lib/animations";
import { SITE } from "@/lib/constants";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-28 bg-[#F5F7FA] relative overflow-hidden">
      <div className="relative z-10 mx-auto max-w-6xl px-4 lg:px-20">
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
            <h2 className="font-[var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0B2447] tracking-tight leading-tight">
              Frequently Asked Questions
            </h2>
            <div className="h-1 w-20 rounded-full bg-gradient-to-r from-[#00B4D8] to-[#0B2447] mt-4 mb-6" />
            <p className="text-[#6B7B8D] text-base mb-6">
              Have more questions? We&apos;re here to help.
            </p>
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center gap-2 text-[#00B4D8] font-bold hover:underline"
            >
              <Phone className="h-4 w-4" />
              Call us at {SITE.phone}
            </a>
          </motion.div>

          {/* Right - Accordion */}
          <div className="lg:col-span-8 space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`rounded-2xl bg-white overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "shadow-[0_8px_30px_rgba(0,0,0,0.08)] border-l-4 border-[#00B4D8]"
                    : "shadow-[0_2px_8px_rgba(0,0,0,0.04)] border-l-4 border-transparent hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:border-[#00B4D8]/30"
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between text-left px-7 py-6 gap-4"
                >
                  <span className="text-[#0B2447] text-lg font-bold">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      openIndex === index
                        ? "bg-[#00B4D8] text-white"
                        : "bg-[#EEF1F5] text-[#00B4D8]"
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
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-[#6B7B8D] leading-relaxed px-7 pb-6 text-base">
                        {item.answer}
                      </p>
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
