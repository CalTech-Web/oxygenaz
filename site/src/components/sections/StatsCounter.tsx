"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, popIn } from "@/lib/animations";
import { Clock, Star, Stethoscope, Timer } from "lucide-react";

const stats = [
  { value: 25, suffix: "+", label: "Years of Experience", icon: Timer },
  { value: 10, suffix: "+", label: "Services Offered", icon: Stethoscope },
  { value: 84, suffix: "", label: "Hours Open Weekly", icon: Clock },
  { value: 5, suffix: "", label: "Star Google Rating", icon: Star },
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
    <span ref={ref} className="font-[var(--font-display)] text-5xl md:text-6xl font-extrabold text-white">
      {count}{suffix}
    </span>
  );
}

export default function StatsCounter() {
  return (
    <section className="relative bg-[#061527] py-16 md:py-20 overflow-hidden">
      {/* Subtle top/bottom gradient lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0066B3]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0066B3]/30 to-transparent" />

      <motion.div
        className="relative z-10 mx-auto max-w-7xl px-4 lg:px-20"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-0">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                variants={popIn}
                className={`flex flex-col items-center text-center px-4 py-4 ${
                  index < stats.length - 1 ? "md:border-r md:border-white/10" : ""
                }`}
              >
                <Icon className="w-6 h-6 text-[#0066B3] mb-3" />
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <span className="mt-2 text-sm font-medium uppercase tracking-wider text-white/50">
                  {stat.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
