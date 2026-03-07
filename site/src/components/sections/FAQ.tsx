"use client";

import { useState } from "react";
import { faqItems } from "@/data/faq";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-[#EDF2F9]">
      <div className="max-w-[900px] mx-auto px-4">
        {/* Heading */}
        <h2 className="text-[40px] font-extrabold text-[#10173E] leading-[48px] tracking-[0.4px] text-center mb-12">
          Frequently Asked Questions (FAQs)
        </h2>

        {/* Accordion */}
        <div>
          {faqItems.map((item, index) => (
            <div key={index} className="border-b border-[#C3C3C4]">
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between text-left py-5 gap-4"
              >
                <span className="text-[#10173E] text-lg font-bold">
                  {item.question}
                </span>
                <span className="text-[#10173E] text-2xl font-light shrink-0 w-6 h-6 flex items-center justify-center">
                  {openIndex === index ? "-" : "+"}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 pb-5" : "max-h-0"
                }`}
              >
                <p className="text-[#7A7A7A] leading-relaxed pl-0">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
