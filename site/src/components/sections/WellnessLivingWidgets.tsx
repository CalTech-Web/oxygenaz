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
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
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
      {/* Animated background orbs */}
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] rounded-full bg-[#0066B3]/8 blur-[150px] pointer-events-none animate-mesh" />
      <div className="absolute bottom-[-80px] right-[-80px] w-[400px] h-[400px] rounded-full bg-[#4A90CC]/6 blur-[130px] pointer-events-none animate-mesh" style={{ animationDelay: "-4s" }} />
      <div className="absolute top-[40%] left-[50%] w-[250px] h-[250px] rounded-full bg-[#0066B3]/5 blur-[100px] pointer-events-none animate-float" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
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
