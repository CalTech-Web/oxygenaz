"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { staggerContainer, cardReveal } from "@/lib/animations";
import { SITE } from "@/lib/constants";

const placeholderReviews = [
  {
    text: "Amazing experience! The staff is incredibly friendly and the treatments are top-notch. Highly recommend to anyone looking for wellness services.",
    name: "Sarah M.",
    rotation: "-rotate-1",
  },
  {
    text: "Dr. Borman and his team truly care about their patients. The physical therapy sessions have been life-changing for my back pain recovery.",
    name: "James R.",
    rotation: "rotate-0",
  },
  {
    text: "Love the cryotherapy and infrared sauna combo! I feel like a new person after every visit. The membership is absolutely worth it.",
    name: "Michelle T.",
    rotation: "rotate-1",
  },
];

export default function TestimonialsPlaceholder() {
  return (
    <section className="relative py-20 md:py-28 bg-[#F0F5FA] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 lg:px-20">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="font-[var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#061527] tracking-tight">
            What Our Clients Say
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#0066B3] to-[#061527]" />
          <p className="mt-4 text-[#718096]">
            See why our clients love us on{" "}
            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#0066B3] hover:underline"
            >
              Google Reviews
            </a>
          </p>
        </div>

        {/* Testimonial cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {placeholderReviews.map((review) => (
            <motion.div
              key={review.name}
              variants={cardReveal}
              className={`bg-white rounded-2xl p-7 shadow-[0_8px_30px_rgba(0,0,0,0.06)] ${review.rotation} hover:rotate-0 transition-transform duration-300`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-[#0066B3] text-[#0066B3]"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[#4A5568] text-sm leading-relaxed italic">
                &quot;{review.text}&quot;
              </p>

              {/* Author */}
              <div className="mt-5 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[#0066B3] to-[#061527] flex items-center justify-center text-white font-bold text-sm">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-[#061527]">{review.name}</p>
                  <p className="text-xs text-[#718096]">Verified Google Review</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
