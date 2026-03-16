"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SITE } from "@/lib/constants";
import { staggerContainer, viewportOnce } from "@/lib/animations";
import { Smartphone, Star, Bell, CalendarCheck } from "lucide-react";

const features = [
  { icon: CalendarCheck, text: "Book sessions instantly" },
  { icon: Bell, text: "Get reminders & updates" },
  { icon: Star, text: "Track your wellness journey" },
];

const containerChild = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function AppDownload() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-[#061527]">
      {/* Animated gradient blobs */}
      <motion.div
        className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,102,179,0.4) 0%, rgba(0,102,179,0.08) 50%, transparent 70%)",
          filter: "blur(60px)",
          top: "-10%",
          left: "-5%",
        }}
        animate={{
          x: [0, 50, 20, 0],
          y: [0, 30, -15, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(74,144,204,0.3) 0%, rgba(74,144,204,0.06) 50%, transparent 70%)",
          filter: "blur(55px)",
          bottom: "-8%",
          right: "-3%",
        }}
        animate={{
          x: [0, -40, 10, 0],
          y: [0, -25, 15, 0],
          scale: [1, 0.92, 1.08, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <motion.div variants={containerChild}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0066B3]/30 bg-[#0066B3]/10 px-4 py-1.5 mb-6">
              <Smartphone className="h-3.5 w-3.5 text-[#4A90CC]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#4A90CC]">
                Mobile App
              </span>
            </div>

            <h2 className="font-[var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-5">
              Your Wellness,{" "}
              <span className="text-neon-glow">On the Go</span>
            </h2>
            <div className="h-1 w-20 rounded-full bg-gradient-to-r from-[#0066B3] to-white/40 mb-6" />
            <p className="text-white/60 text-lg md:text-xl mb-8 max-w-lg">
              Download our app, set up an account or sign in, and book your
              session - all from your phone.
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-3 mb-10">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <div
                    key={f.text}
                    className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2"
                  >
                    <Icon className="h-4 w-4 text-[#0066B3]" />
                    <span className="text-white/80 text-sm font-medium">
                      {f.text}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Store badges */}
            <div className="flex items-center gap-4">
              <a
                href={SITE.apps.ios}
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-border-wrap transition-transform duration-300 hover:scale-105"
              >
                <div className="bg-[#061527] p-3 flex items-center">
                  <Image
                    src="/images/badges/app-store.webp"
                    alt="Download on the App Store"
                    width={150}
                    height={50}
                    className="h-auto"
                  />
                </div>
              </a>
              <a
                href={SITE.apps.android}
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-border-wrap transition-transform duration-300 hover:scale-105"
              >
                <div className="bg-[#061527] p-3 flex items-center">
                  <Image
                    src="/images/badges/google-play.webp"
                    alt="Get it on Google Play"
                    width={150}
                    height={50}
                    className="h-auto"
                  />
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right: Phone mockup with glow */}
          <motion.div
            className="relative flex justify-center"
            variants={containerChild}
          >
            {/* Glow ring behind phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[360px] md:h-[360px] rounded-full bg-[#0066B3]/20 blur-[80px] pointer-events-none" />

            {/* Phone with float + tilt */}
            <motion.div
              className="relative"
              animate={{
                y: [0, -12, 0],
                rotateY: [-6, -6, -6],
                rotateX: [3, 3, 3],
              }}
              transition={{
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              }}
              style={{ perspective: "800px" }}
            >
              <Image
                src="/images/content/app-mockup.webp"
                alt="Oxygen Wellness App"
                width={300}
                height={600}
                className="h-auto relative z-10 drop-shadow-[0_30px_80px_rgba(0,102,179,0.35)]"
                style={{
                  transform: "rotateY(-6deg) rotateX(3deg)",
                }}
              />

              {/* Floating notification cards */}
              <motion.div
                className="absolute -left-8 md:-left-16 top-1/4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 shadow-lg"
                animate={{
                  y: [0, -8, 0],
                  x: [0, 4, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#0066B3] flex items-center justify-center">
                    <CalendarCheck className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-white text-xs font-bold">Booked!</p>
                    <p className="text-white/50 text-[10px]">Cryotherapy - 2pm</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -right-6 md:-right-14 bottom-1/3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 shadow-lg"
                animate={{
                  y: [0, 6, 0],
                  x: [0, -4, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                    <Star className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-white text-xs font-bold">10 Sessions</p>
                    <p className="text-white/50 text-[10px]">Keep it up!</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
