"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Sparkles, Users, Award, Target, MapPin, FlaskConical, ShieldCheck, Clock, HandHeart, Linkedin } from "lucide-react";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, cardReveal, viewportOnce } from "@/lib/animations";

const values = [
  {
    icon: FlaskConical,
    title: "Evidence-Based",
    description: "Treatments rooted in science, experience, and innovation.",
    bg: "bg-[#E8F4FD]",
    iconBg: "bg-[#0066B3]",
    border: "border-[#B8DDFB]",
    hoverBorder: "hover:border-[#0066B3]/50",
  },
  {
    icon: HandHeart,
    title: "Patient-Centered",
    description: "Personalized care that prioritizes results over routine.",
    bg: "bg-[#EDE8FD]",
    iconBg: "bg-[#5B4AC0]",
    border: "border-[#D4CCF9]",
    hoverBorder: "hover:border-[#5B4AC0]/50",
  },
  {
    icon: Clock,
    title: "25+ Years Expertise",
    description: "Decades of outpatient sports medicine experience.",
    bg: "bg-[#E6F7F0]",
    iconBg: "bg-[#0E8A5E]",
    border: "border-[#B5E8D5]",
    hoverBorder: "hover:border-[#0E8A5E]/50",
  },
  {
    icon: MapPin,
    title: "Community-Driven",
    description: "Proudly serving Glendale, AZ athletes, professionals, and families.",
    bg: "bg-[#FFF3E6]",
    iconBg: "bg-[#D97706]",
    border: "border-[#FDE0B4]",
    hoverBorder: "hover:border-[#D97706]/50",
  },
];

export default function AboutPageClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden bg-[#061527] -mt-[80px] lg:-mt-[112px] pt-[155px] lg:pt-[187px] pb-[50px]">
        <Image
          src="/images/heroes/about-hero.jpg"
          alt="About Oxygen Wellness"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#061527]/70 via-[#061527]/85 to-[#061527]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0066B3]/10 to-transparent" />

        <motion.div
          className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(0,102,179,0.3) 0%, transparent 65%)",
            filter: "blur(80px)",
            top: "-15%",
            right: "-10%",
          }}
          animate={{ x: [0, -40, 0], y: [0, 30, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-4 text-center py-16 md:py-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1
            className="text-4xl md:text-6xl lg:text-[72px] font-extrabold font-[var(--font-display)] text-white leading-[1.05] tracking-tight"
            style={{ textShadow: "4px 4px 0px rgba(0,0,0,0.3)" }}
          >
            About Us
          </h1>
          <p className="text-white/50 text-lg max-w-xl mx-auto mt-4">
            Evidence-based wellness and 25+ years of physical therapy expertise.
          </p>
        </motion.div>
      </section>

      {/* Introduction - Only the Good Stuff */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-white to-[#F0F5FA] overflow-hidden">
        {/* Decorative blob */}
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(0,102,179,0.08) 0%, transparent 65%)",
            filter: "blur(60px)",
            top: "-10%",
            right: "-5%",
          }}
          animate={{ x: [0, -30, 0], y: [0, 20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {/* Left - Image with floating accent */}
            <motion.div className="relative" variants={fadeInLeft}>
              <div className="relative rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.12)]">
                <Image
                  src="/images/content/home-page.jpg"
                  alt="Oxygen Wellness facility"
                  width={640}
                  height={480}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061527]/30 to-transparent" />
              </div>
              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-5 -right-3 md:-right-5 bg-white rounded-2xl px-5 py-4 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-[#E2E8F0]"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-[#0066B3] to-[#4A90CC]">
                    <ShieldCheck className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-extrabold text-[#061527]">Evidence-Based</p>
                    <p className="text-xs text-[#718096]">Results-driven care</p>
                  </div>
                </div>
              </motion.div>
              {/* Decorative ring */}
              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full border-2 border-[#0066B3]/10 pointer-events-none" />
            </motion.div>

            {/* Right - Content */}
            <motion.div variants={fadeInRight}>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#0066B3]/20 bg-[#0066B3]/5 px-4 py-1.5 mb-5">
                <Sparkles className="h-3.5 w-3.5 text-[#0066B3] animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#0066B3]">
                  Our Philosophy
                </span>
              </div>
              <h2 className="font-[var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#061527] tracking-tight mb-2">
                Only the Good Stuff
              </h2>
              <div className="h-1 w-20 rounded-full bg-gradient-to-r from-[#0066B3] to-[#061527] mb-6" />
              <p className="text-[#718096] text-base md:text-lg mb-5 leading-relaxed">
                Oxygen Wellness & Physical Therapy is a one-of-a-kind destination for expert Physical Therapy and advanced regenerative treatments in Glendale, AZ. From <span className="font-semibold text-[#061527]">Cryotherapy</span> and <span className="font-semibold text-[#061527]">Red Light Therapy</span> to <span className="font-semibold text-[#061527]">Hyperbaric Oxygen Therapy (HBOT)</span>, spinal adjustments, dry needling, therapeutic massage, and sports injury management, we bring together the most effective modalities under one roof.
              </p>
              <p className="text-[#718096] text-base md:text-lg leading-relaxed mb-8">
                At the core of everything we do is our commitment to <span className="font-extrabold text-[#0066B3]">&quot;ONLY THE GOOD STUFF&quot;</span> - meaning evidence-based, results-driven treatments delivered by experienced professionals who genuinely care about your well-being.
              </p>
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#0066B3] to-[#4A90CC] text-white rounded-full px-7 py-3.5 font-black text-sm uppercase tracking-wider hover:scale-105 hover:shadow-[0_8px_30px_rgba(0,102,179,0.4)] transition-all duration-300"
              >
                Explore Our Services
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#0a2240] via-[#0d2d54] to-[#061527] overflow-hidden">
        <motion.div
          className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(0,102,179,0.25) 0%, transparent 65%)",
            filter: "blur(80px)",
            top: "-15%",
            left: "-10%",
          }}
          animate={{ x: [0, 60, 0], y: [0, 40, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(74,144,204,0.2) 0%, transparent 65%)",
            filter: "blur(60px)",
            bottom: "-10%",
            right: "-5%",
          }}
          animate={{ x: [0, -40, 0], y: [0, -25, 0], scale: [1, 0.9, 1] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {/* Left - Text */}
            <motion.div variants={fadeInLeft}>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#4A90CC]/30 bg-[#4A90CC]/10 px-4 py-1.5 mb-5">
                <Sparkles className="h-3.5 w-3.5 text-[#4A90CC] animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#4A90CC]">
                  Meet the Founder
                </span>
              </div>
              <h2 className="font-[var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
                Dr. Clint Borman
              </h2>
              <div className="h-1 w-20 rounded-full bg-gradient-to-r from-[#0066B3] to-[#4A90CC] mb-6" />
              <p className="text-white/50 text-lg mb-4 leading-relaxed">
                A former collegiate baseball player who spent countless hours recovering from injuries, Clint went on to earn his Doctor of Physical Therapy degree from the University of St. Augustine in 1997.
              </p>
              <p className="text-white/50 text-lg mb-4 leading-relaxed">
                Over 25 years in outpatient sports medicine, he&apos;s led residency programs, trained staff, overseen mergers and acquisitions, and built a reputation for empowering patients through education at every session.
              </p>
              <p className="text-white/50 text-lg mb-8 leading-relaxed">
                Today, Clint blends experience, education, and innovation with traditional rehabilitation and regenerative care - free from insurance constraints and focused on only the good stuff.
              </p>
              <a
                href="https://linkedin.com/in/clintborman"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 border-2 border-[#4A90CC] text-[#4A90CC] rounded-full px-8 py-3.5 font-black text-sm uppercase tracking-wider hover:bg-[#4A90CC] hover:text-white hover:scale-105 transition-all duration-300 mb-8"
              >
                <Linkedin className="h-4 w-4" />
                See Clint&apos;s LinkedIn
              </a>

              {/* Areas We Serve */}
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0066B3] mb-3">
                  Areas We Serve
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: "Glendale", color: "bg-sky-400/15 text-sky-300 border-sky-400/25", ping: "bg-sky-300" },
                    { name: "Peoria", color: "bg-violet-400/15 text-violet-300 border-violet-400/25", ping: "bg-violet-300" },
                    { name: "Phoenix", color: "bg-amber-400/15 text-amber-300 border-amber-400/25", ping: "bg-amber-300" },
                    { name: "Scottsdale", color: "bg-emerald-400/15 text-emerald-300 border-emerald-400/25", ping: "bg-emerald-300" },
                    { name: "Surprise", color: "bg-rose-400/15 text-rose-300 border-rose-400/25", ping: "bg-rose-300" },
                    { name: "Arrowhead", color: "bg-teal-400/15 text-teal-300 border-teal-400/25", ping: "bg-teal-300" },
                    { name: "Sun City", color: "bg-orange-400/15 text-orange-300 border-orange-400/25", ping: "bg-orange-300" },
                    { name: "North Valley", color: "bg-indigo-400/15 text-indigo-300 border-indigo-400/25", ping: "bg-indigo-300" },
                  ].map((area) => (
                    <span
                      key={area.name}
                      className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-bold ${area.color}`}
                    >
                      <span className="relative flex items-center justify-center h-4 w-4">
                        <span className={`animate-ping absolute inline-flex h-3 w-3 rounded-full opacity-50 ${area.ping}`} />
                        <MapPin className="relative h-3.5 w-3.5 fill-current" />
                      </span>
                      {area.name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right - Image */}
            <motion.div className="relative order-first lg:order-last" variants={fadeInRight}>
              <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
                <Image
                  src="/images/content/dr-clint.jpg"
                  alt="Dr. Clint Borman - Founder"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -left-3 lg:-left-6 bg-[#061527] text-white rounded-xl px-5 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
                <p className="text-2xl font-extrabold font-[var(--font-display)]">25+</p>
                <p className="text-xs font-bold uppercase tracking-wider text-white/70">Years Experience</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* It's All About YOU */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden bg-[#061527]">
        <Image
          src="/images/heroes/compression-bg.webp"
          alt="It's all about you"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#061527]/75 via-[#061527]/85 to-[#061527]" />

        <motion.div
          className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(0,102,179,0.25) 0%, transparent 65%)",
            filter: "blur(80px)",
            top: "-10%",
            right: "-8%",
          }}
          animate={{ x: [0, -50, 0], y: [0, 30, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="relative z-10 text-center max-w-7xl mx-auto px-4 py-16 md:py-20"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <h2 className="font-[var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
            It&apos;s All About <span className="text-[#4A90CC]">YOU</span>
          </h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-[#0066B3] to-[#4A90CC] mb-6" />
          <p className="text-white/50 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            Our team understands the limitations of traditional, insurance-driven
            healthcare. That&apos;s why we focus on only the good stuff -
            evidence-based treatments that prioritize results over routine. No
            gimmicks, no unnecessary treatments, just personalized care that works.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#0066B3] to-[#4A90CC] text-white rounded-full px-8 py-4 font-black text-sm uppercase tracking-wider hover:scale-105 hover:shadow-[0_8px_30px_rgba(0,102,179,0.5)] transition-all duration-300"
          >
            Book Now
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </section>

      {/* Why Choose Us - Values Grid */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-[#F0F5FA] to-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-14"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0066B3]/20 bg-[#0066B3]/5 px-4 py-1.5 mb-5">
              <Award className="h-3.5 w-3.5 text-[#0066B3] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#0066B3]">
                Our Difference
              </span>
            </div>
            <h2 className="font-[var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#061527] tracking-tight mb-2">
              Why Choose Us?
            </h2>
            <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-[#0066B3] to-[#061527] mb-5" />
            <p className="text-[#718096] text-lg max-w-2xl mx-auto">
              Unlike standard wellness centers, we don&apos;t believe in one-size-fits-all treatments.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={cardReveal}
                className={`group relative rounded-2xl ${value.bg} border ${value.border} ${value.hoverBorder} p-7 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500 text-center`}
              >
                <div className={`mx-auto flex items-center justify-center w-14 h-14 rounded-2xl ${value.iconBg} shadow-lg mb-5 group-hover:scale-110 transition-transform duration-500`}>
                  <value.icon className="w-6 h-6 text-white animate-pulse" />
                </div>
                <h3 className="font-[var(--font-display)] text-lg font-extrabold text-[#061527] mb-2">
                  {value.title}
                </h3>
                <p className="text-[#718096] text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blending Tradition + Mission + Community */}
      <section className="relative py-16 md:py-20 bg-gradient-to-br from-[#0a2240] via-[#0d2d54] to-[#061527] overflow-hidden">
        <motion.div
          className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(74,144,204,0.2) 0%, transparent 65%)",
            filter: "blur(70px)",
            top: "-10%",
            right: "-5%",
          }}
          animate={{ x: [0, -40, 0], y: [0, 25, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <motion.div
              variants={cardReveal}
              className="group rounded-2xl bg-white/[0.06] border border-white/[0.1] backdrop-blur-md p-8 hover:bg-white/[0.1] hover:border-[#4A90CC]/30 transition-all duration-500"
            >
              <div className="absolute top-0 left-6 right-6 h-[2px] rounded-full bg-gradient-to-r from-[#0066B3] to-[#4A90CC] opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
              <h3 className="font-[var(--font-display)] text-2xl font-bold text-white mb-4">
                Blending Tradition with Innovation
              </h3>
              <p className="text-white/45 text-base leading-relaxed">
                We believe that true healing comes from the perfect balance of proven traditional methods and cutting-edge regenerative therapies. Our approach is built on years of expertise, a passion for innovation, and a commitment to serving our community.
              </p>
            </motion.div>

            <motion.div
              variants={cardReveal}
              className="group rounded-2xl bg-white/[0.06] border border-white/[0.1] backdrop-blur-md p-8 hover:bg-white/[0.1] hover:border-[#4A90CC]/30 transition-all duration-500"
            >
              <div className="absolute top-0 left-6 right-6 h-[2px] rounded-full bg-gradient-to-r from-[#4A90CC] to-[#0066B3] opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
              <h3 className="font-[var(--font-display)] text-2xl font-bold text-white mb-4">
                Our Mission
              </h3>
              <p className="text-white/45 text-base leading-relaxed">
                We are dedicated to redefining wellness by blending traditional healing methods with cutting-edge regenerative therapies. Our goal is to provide personalized solutions that help you recover faster, feel stronger, and live better.
              </p>
            </motion.div>

            <motion.div
              variants={cardReveal}
              className="group rounded-2xl bg-white/[0.06] border border-white/[0.1] backdrop-blur-md p-8 hover:bg-white/[0.1] hover:border-[#4A90CC]/30 transition-all duration-500"
            >
              <div className="absolute top-0 left-6 right-6 h-[2px] rounded-full bg-gradient-to-r from-[#0066B3] to-[#061527] opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
              <h3 className="font-[var(--font-display)] text-2xl font-bold text-white mb-4">
                Our Community
              </h3>
              <p className="text-white/45 text-base leading-relaxed">
                Located in the heart of Glendale, Arizona, we are more than just a wellness center - it&apos;s a community dedicated to better living. We proudly serve athletes, professionals, first responders, and anyone seeking a better path to healing.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
