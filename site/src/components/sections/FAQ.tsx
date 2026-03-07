"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqItems } from "@/data/faq";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-[#EDF2F9] to-white relative overflow-hidden">
      {/* Subtle accent */}
      <div className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full bg-[#5CE1E6]/[0.03] blur-[100px] pointer-events-none" />

      <motion.div
        className="relative z-10 max-w-[900px] mx-auto px-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {/* Heading */}
        <motion.h2
          variants={fadeInUp}
          className="text-3xl md:text-4xl lg:text-5xl font-black text-[#10173E] leading-tight tracking-tight text-center mb-10 accent-underline-center"
        >
          Frequently Asked Questions
        </motion.h2>

        {/* Accordion */}
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className={`rounded-2xl bg-white overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? "shadow-xl ring-2 ring-[#5CE1E6]/40 border-l-4 border-[#5CE1E6]"
                  : "shadow-md border-l-4 border-transparent hover:shadow-lg"
              }`}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between text-left px-7 py-6 gap-4"
              >
                <span className="text-[#10173E] text-lg font-black">
                  {item.question}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                  openIndex === index ? "bg-[#5CE1E6] text-[#10173E]" : "bg-[#EDF2F9] text-[#004AAD]"
                }`}>
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
                    <p className="text-[#7A7A7A] leading-relaxed px-7 pb-6 text-base">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
