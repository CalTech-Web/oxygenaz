"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqItems } from "@/data/faq";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-20 bg-brand-surface">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-3">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="divide-y divide-brand-border">
          {faqItems.map((item, index) => (
            <div key={index} className="py-4">
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between text-left gap-4 group"
              >
                <span className="text-lg font-medium text-brand-white group-hover:text-brand-gold transition-colors">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-brand-gold shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === index ? "max-h-96 mt-3" : "max-h-0"
                }`}
              >
                <p className="text-brand-muted leading-relaxed">
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
