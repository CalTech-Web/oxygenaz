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
    <section className="py-20 md:py-28 bg-[#EDF2F9]">
      <motion.div
        className="max-w-[900px] mx-auto px-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {/* Heading */}
        <motion.h2
          variants={fadeInUp}
          className="text-3xl md:text-4xl lg:text-5xl font-black text-[#10173E] leading-tight tracking-tight text-center mb-14 accent-underline-center"
        >
          Frequently Asked Questions
        </motion.h2>

        {/* Accordion */}
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className={`rounded-xl bg-white shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg ${
                openIndex === index
                  ? "ring-1 ring-[#5CE1E6]/50 border-l-4 border-[#5CE1E6]"
                  : "border-l-4 border-transparent"
              }`}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between text-left px-6 py-5 gap-4"
              >
                <span className="text-[#10173E] text-lg font-bold">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#004AAD] shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
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
                    <p className="text-[#7A7A7A] leading-relaxed px-6 pb-5">
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
