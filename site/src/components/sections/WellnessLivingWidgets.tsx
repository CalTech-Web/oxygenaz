"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { CalendarCheck, Sparkles } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function WellnessLivingWidgets() {
  const widget1Ref = useRef<HTMLDivElement>(null);
  const widget2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!widget1Ref.current || !widget2Ref.current) return;

    // Create widget 1
    const w1 = document.createElement("div");
    w1.className = "wl-widget";
    w1.setAttribute("data", "k_skin=379847&k_business=605727");
    widget1Ref.current.appendChild(w1);

    // Create widget 2
    const w2 = document.createElement("div");
    w2.className = "wl-widget";
    w2.setAttribute("data", "k_skin=379848&k_business=605727");
    widget2Ref.current.appendChild(w2);

    // Load the WellnessLiving script
    const script = document.createElement("script");
    script.src = "https://www.wellnessliving.com/rs/skin-widget-static.js";
    script.type = "text/javascript";
    document.body.appendChild(script);

    return () => {
      if (widget1Ref.current) widget1Ref.current.innerHTML = "";
      if (widget2Ref.current) widget2Ref.current.innerHTML = "";
      script.remove();
    };
  }, []);

  return (
    <section className="relative py-20 md:py-28 bg-[#061527] overflow-hidden">
      {/* Animated blobs - travel across the entire section */}
      <motion.div
        className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,102,179,0.4) 0%, rgba(0,102,179,0.1) 45%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{
          left: ["-10%", "60%", "30%", "80%", "-10%"],
          top: ["-15%", "20%", "60%", "-5%", "-15%"],
          scale: [1, 1.3, 0.8, 1.1, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[250px] h-[250px] md:w-[450px] md:h-[450px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(74,144,204,0.35) 0%, rgba(74,144,204,0.08) 45%, transparent 70%)",
          filter: "blur(50px)",
        }}
        animate={{
          right: ["-5%", "50%", "10%", "70%", "-5%"],
          bottom: ["-10%", "50%", "10%", "60%", "-10%"],
          scale: [1, 0.85, 1.2, 0.9, 1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[200px] h-[200px] md:w-[380px] md:h-[380px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,102,179,0.3) 0%, rgba(0,80,140,0.06) 50%, transparent 70%)",
          filter: "blur(45px)",
        }}
        animate={{
          left: ["50%", "-5%", "70%", "20%", "50%"],
          top: ["40%", "70%", "5%", "55%", "40%"],
          scale: [0.9, 1.25, 0.75, 1.15, 0.9],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[180px] h-[180px] md:w-[320px] md:h-[320px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(100,170,230,0.25) 0%, transparent 60%)",
          filter: "blur(40px)",
        }}
        animate={{
          right: ["15%", "60%", "-5%", "40%", "15%"],
          top: ["5%", "65%", "30%", "75%", "5%"],
          scale: [1, 1.15, 0.85, 1.3, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[150px] h-[150px] md:w-[280px] md:h-[280px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,102,179,0.25) 0%, transparent 60%)",
          filter: "blur(35px)",
        }}
        animate={{
          left: ["20%", "75%", "5%", "55%", "20%"],
          bottom: ["10%", "60%", "25%", "70%", "10%"],
          scale: [1.1, 0.8, 1.2, 0.9, 1.1],
        }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="relative z-10 mx-auto max-w-7xl px-4 lg:px-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {/* Section heading */}
        <motion.div className="text-center mb-14" variants={itemVariants}>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0066B3]/30 bg-[#0066B3]/10 px-4 py-1.5 mb-5">
            <Sparkles className="h-3.5 w-3.5 text-[#4A90CC]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#4A90CC]">
              Instant Online Booking
            </span>
          </div>
          <h2 className="font-[var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4 flex items-center justify-center gap-4">
            <CalendarCheck className="h-10 w-10 md:h-12 md:w-12 text-[#0066B3]" />
            Book Your Session
          </h2>
          <div className="h-1 w-20 rounded-full bg-gradient-to-r from-[#0066B3] to-white/40 mx-auto mb-5" />
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Schedule online instantly or explore our available services
          </p>
        </motion.div>

        {/* Side by side widgets with animated gradient borders */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div variants={itemVariants} className="gradient-border-wrap shadow-[0_8px_40px_rgba(0,102,179,0.2)]">
            <div
              ref={widget1Ref}
              className="bg-white p-5 min-h-[200px]"
            />
          </motion.div>
          <motion.div variants={itemVariants} className="gradient-border-wrap shadow-[0_8px_40px_rgba(0,102,179,0.2)]">
            <div
              ref={widget2Ref}
              className="bg-white p-5 min-h-[200px]"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
