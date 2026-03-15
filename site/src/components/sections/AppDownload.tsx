"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SITE } from "@/lib/constants";
import { fadeInLeft, fadeInRight, viewportOnce } from "@/lib/animations";

export default function AppDownload() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Vibrant gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00B4D8] via-[#00B4D8] to-[#0B2447]" />

      {/* Mesh overlay */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-white/10 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-[#0B2447]/20 blur-[80px]" />
      </div>


      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-20">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Left: Text + Store badges */}
          <motion.div
            className="flex-1"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <h2 className="font-[var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-4">
              Download the App
            </h2>
            <div className="h-1 w-20 rounded-full bg-white/40 mb-8" />
            <p className="text-white/80 text-lg md:text-xl mb-10">
              Download our app, setup an account or sign in, and book your
              session!
            </p>
            <div className="flex items-center gap-5">
              <a
                href={SITE.apps.ios}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]"
              >
                <Image
                  src="/images/badges/app-store.webp"
                  alt="Download on the App Store"
                  width={150}
                  height={50}
                  className="h-auto"
                />
              </a>
              <a
                href={SITE.apps.android}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]"
              >
                <Image
                  src="/images/badges/google-play.webp"
                  alt="Get it on Google Play"
                  width={150}
                  height={50}
                  className="h-auto"
                />
              </a>
            </div>
          </motion.div>

          {/* Right: App mockup with 3D tilt */}
          <motion.div
            className="flex-shrink-0 animate-float"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            style={{
              perspective: "800px",
            }}
          >
            <Image
              src="/images/content/app-mockup.webp"
              alt="Oxygen Wellness App"
              width={300}
              height={600}
              className="h-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.3)]"
              style={{
                transform: "rotateY(-8deg) rotateX(4deg)",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
