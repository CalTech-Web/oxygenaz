"use client";

import { useEffect, useRef } from "react";

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
    <section className="relative py-16 md:py-24 bg-[#061527] overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-[#0066B3]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-[#0066B3]/8 blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-20">
        {/* Section heading */}
        <div className="text-center mb-12">
          <h2 className="font-[var(--font-display)] text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3">
            Book Your Session
          </h2>
          <div className="h-1 w-20 rounded-full bg-gradient-to-r from-[#0066B3] to-white/40 mx-auto mb-4" />
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Schedule online instantly or explore our available services
          </p>
        </div>

        {/* Side by side widgets */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div
            ref={widget1Ref}
            className="bg-white rounded-2xl p-4 shadow-[0_8px_30px_rgba(0,0,0,0.2)] min-h-[200px]"
          />
          <div
            ref={widget2Ref}
            className="bg-white rounded-2xl p-4 shadow-[0_8px_30px_rgba(0,0,0,0.2)] min-h-[200px]"
          />
        </div>
      </div>
    </section>
  );
}
