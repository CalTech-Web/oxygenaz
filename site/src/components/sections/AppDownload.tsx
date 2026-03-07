"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SITE } from "@/lib/constants";
import { fadeInLeft, fadeInRight, viewportOnce } from "@/lib/animations";

export default function AppDownload() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-[#10173E] via-[#10173E] to-[#004AAD] relative overflow-hidden">
      {/* Decorative orb */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#5CE1E6]/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-[1140px] mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Left: Text + Store badges */}
          <motion.div
            className="flex-1"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4 accent-underline">
              Download the App
            </h2>
            <p className="text-white/70 text-lg mb-8 mt-8">
              Download our app, setup an account or sign in, and book your
              session!
            </p>
            <div className="flex items-center gap-4">
              <a
                href={SITE.apps.ios}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-105"
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
                className="transition-transform duration-300 hover:scale-105"
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

          {/* Right: App mockup */}
          <motion.div
            className="flex-shrink-0 animate-float"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <Image
              src="/images/content/app-mockup.webp"
              alt="Oxygen Wellness App"
              width={300}
              height={600}
              className="h-auto drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
