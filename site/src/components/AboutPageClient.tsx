"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Sparkles, Users, Award, Target, MapPin } from "lucide-react";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, cardReveal, viewportOnce } from "@/lib/animations";

const values = [
  {
    icon: Target,
    title: "Evidence-Based",
    description: "Treatments rooted in science, experience, and innovation.",
    accent: "from-[#0066B3] to-[#4A90CC]",
  },
  {
    icon: Heart,
    title: "Patient-Centered",
    description: "Personalized care that prioritizes results over routine.",
    accent: "from-[#4A90CC] to-[#0066B3]",
  },
  {
    icon: Award,
    title: "25+ Years Expertise",
    description: "Decades of outpatient sports medicine experience.",
    accent: "from-[#0066B3] to-[#061527]",
  },
  {
    icon: MapPin,
    title: "Community-Driven",
    description: "Proudly serving Glendale, AZ athletes, professionals, and families.",
    accent: "from-[#061527] to-[#0066B3]",
  },
];

export default function AboutPageClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden bg-[#061527]">
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

      {/* Introduction */}
      <section className="py-16 md:py-20 bg-white">
        <motion.div
          className="max-w-7xl mx-auto px-4"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-[var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#061527] tracking-tight mb-2">
              Only the Good Stuff
            </h2>
            <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-[#0066B3] to-[#061527] mb-6" />
            <p className="text-[#718096] text-lg md:text-xl mb-4 leading-relaxed font-light">
              Oxygen Wellness & Physical Therapy is a one-of-a-kind destination for expert Physical Therapy and advanced regenerative treatments in Glendale, AZ. From Cryotherapy and Red Light Therapy to Hyperbaric Oxygen Therapy (HBOT), spinal adjustments, dry needling, therapeutic massage, and sports injury management, we bring together the most effective modalities under one roof.
            </p>
            <p className="text-[#718096] text-lg md:text-xl leading-relaxed font-light">
              At the core of everything we do is our commitment to &quot;ONLY THE GOOD STUFF,&quot; meaning evidence-based, results-driven treatments delivered by experienced professionals who genuinely care about your well-being.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Founder Section */}
      <section className="relative py-16 md:py-20 bg-gradient-to-br from-[#0a2240] via-[#0d2d54] to-[#061527] overflow-hidden">
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
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.div className="relative" variants={fadeInLeft}>
              <Image
                src="/images/content/dr-clint.jpg"
                alt="Dr. Clint Borman - Founder"
                width={540}
                height={500}
                className="rounded-2xl w-full h-auto object-cover shadow-[0_8px_40px_rgba(0,0,0,0.3)]"
              />
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-[#0066B3] to-[#4A90CC] rounded-xl px-5 py-3 shadow-lg">
                <p className="text-2xl font-extrabold font-[var(--font-display)] text-white">25+</p>
                <p className="text-xs font-bold uppercase tracking-wider text-white/70">Years Experience</p>
              </div>
            </motion.div>
            <motion.div variants={fadeInRight}>
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
                Today, Clint blends experience, education, and innovation with traditional rehabilitation and regenerative care, free from insurance constraints and focused on only the good stuff.
              </p>
              <a
                href="https://linkedin.com/in/clintborman"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#0066B3] to-[#4A90CC] text-white rounded-full px-8 py-4 font-black text-sm uppercase tracking-wider hover:scale-105 hover:shadow-[0_8px_30px_rgba(0,102,179,0.5)] transition-all duration-300"
              >
                See Clint&apos;s LinkedIn
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
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
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <h2 className="font-[var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#061527] tracking-tight mb-2">
              Why Choose Us?
            </h2>
            <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-[#0066B3] to-[#061527] mb-5" />
            <p className="text-[#718096] text-lg max-w-2xl mx-auto">
              Unlike standard wellness centers, we don&apos;t believe in one-size-fits-all treatments.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={cardReveal}
                className="group relative rounded-2xl bg-[#F0F5FA] border border-[#E2E8F0] p-6 hover:shadow-lg hover:border-[#0066B3]/20 transition-all duration-500 text-center"
              >
                <div className={`mx-auto flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${value.accent} shadow-lg shadow-[#0066B3]/20 mb-4 group-hover:scale-110 transition-transform duration-500`}>
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-[var(--font-display)] text-lg font-bold text-[#061527] mb-2">
                  {value.title}
                </h3>
                <p className="text-[#718096] text-sm">{value.description}</p>
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
