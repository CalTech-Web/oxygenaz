"use client";

import { useEffect, useRef } from "react";

export default function WellnessLivingWidgets() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create widget 1
    const widget1 = document.createElement("div");
    widget1.className = "wl-widget";
    widget1.setAttribute("data", "k_skin=379847&k_business=605727");

    // Create widget 2
    const widget2 = document.createElement("div");
    widget2.className = "wl-widget";
    widget2.setAttribute("data", "k_skin=379848&k_business=605727");

    const container = containerRef.current;
    container.appendChild(widget1);
    container.appendChild(widget2);

    // Load the WellnessLiving script
    const script = document.createElement("script");
    script.src = "https://www.wellnessliving.com/rs/skin-widget-static.js";
    script.type = "text/javascript";
    document.body.appendChild(script);

    return () => {
      container.innerHTML = "";
      script.remove();
    };
  }, []);

  return (
    <section className="py-16 md:py-20 bg-white">
      <div
        ref={containerRef}
        className="mx-auto max-w-7xl px-4 lg:px-20 space-y-12"
      />
    </section>
  );
}
