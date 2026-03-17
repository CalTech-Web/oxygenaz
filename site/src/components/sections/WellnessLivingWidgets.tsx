"use client";

import { useEffect, useRef, useState } from "react";
import { CalendarCheck, Sparkles } from "lucide-react";

export default function WellnessLivingWidgets() {
  const sectionRef = useRef<HTMLElement>(null);
  const widget1Ref = useRef<HTMLDivElement>(null);
  const widget2Ref = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !loaded) {
          setLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, [loaded]);

  useEffect(() => {
    if (!loaded || !widget1Ref.current || !widget2Ref.current) return;

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
  }, [loaded]);

  return (
    <section ref={sectionRef} className="relative py-20 md:py-28 bg-[#061527] overflow-hidden">
      {/* Static background accents */}
      <div
        className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,102,179,0.25) 0%, rgba(0,102,179,0.06) 45%, transparent 70%)",
          filter: "blur(60px)",
          top: "-10%",
          left: "-5%",
        }}
      />
      <div
        className="absolute w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(74,144,204,0.2) 0%, rgba(74,144,204,0.05) 45%, transparent 70%)",
          filter: "blur(55px)",
          bottom: "-5%",
          right: "-3%",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        {/* Section heading */}
        <div className="text-center mb-14">
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
        </div>

        {/* Side by side widgets with gradient borders */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-white text-2xl md:text-3xl font-bold text-center mb-4">Wellness Services</h3>
            <div className="gradient-border-wrap shadow-[0_8px_40px_rgba(0,102,179,0.2)]">
              <div
                ref={widget1Ref}
                className="bg-white p-5 min-h-[200px]"
              />
            </div>
          </div>
          <div>
            <h3 className="text-white text-2xl md:text-3xl font-bold text-center mb-4">Sports Medicine / Physical Therapy</h3>
            <div className="gradient-border-wrap shadow-[0_8px_40px_rgba(0,102,179,0.2)]">
              <div
                ref={widget2Ref}
                className="bg-white p-5 min-h-[200px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
