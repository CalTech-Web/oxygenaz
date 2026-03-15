"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, popIn } from "@/lib/animations";

const stats = [
  { value: 25, suffix: "+", label: "Years of Experience" },
  { value: 10, suffix: "+", label: "Services Offered" },
  { value: 84, suffix: "", label: "Hours Open Weekly" },
  { value: 5, suffix: "", label: "Star Google Rating" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1500;
    const steps = 40;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-[var(--font-display)] text-5xl md:text-6xl font-extrabold text-gradient-vibrant">
      {count}{suffix}
    </span>
  );
}

export default function StatsCounter() {
  return (
    <section className="relative bg-[#0B2447] py-16 md:py-20 overflow-hidden">
      {/* Gradient mesh accent */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[#00B4D8]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-[#0B2447]/10 blur-[100px] pointer-events-none" />

      <motion.div
        className="relative z-10 mx-auto max-w-7xl px-4 lg:px-20"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={popIn}
              className="flex flex-col items-center text-center"
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <span className="mt-2 text-sm font-medium uppercase tracking-wider text-white/50">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
