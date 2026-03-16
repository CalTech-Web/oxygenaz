"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronDown, Sparkles, MessageCircle, Linkedin, Bone, Target, Hand, Ribbon, Slice, StretchHorizontal, Dumbbell, GraduationCap, Phone } from "lucide-react";
import { SITE } from "@/lib/constants";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, cardReveal, viewportOnce } from "@/lib/animations";
import CoreServices from "@/components/sections/CoreServices";
import OtherServices from "@/components/sections/OtherServices";
import PreFooterContact from "@/components/sections/PreFooterContact";

const techniques = [
  { name: "Spinal manipulation", icon: Bone },
  { name: "Dry needling", icon: Target },
  { name: "Cupping", icon: Hand },
  { name: "Taping", icon: Ribbon },
  { name: "Scraping", icon: Slice },
  { name: "1:1 stretching", icon: StretchHorizontal },
  { name: "Exercise", icon: Dumbbell },
  { name: "Education and training", icon: GraduationCap },
];

const expectations = [
  "You can choose between our 25 or 55 minute session",
  "You will be in a public space",
  "Wear comfortable clothing and be prepared to move around",
  "Get a free Core Service of your choice",
];

const ptFaqs = [
  {
    question: "What should I wear?",
    answer:
      "Wear comfortable, loose-fitting clothing that allows you to move easily. Athletic wear such as T-shirts, yoga pants, or shorts are ideal. Supportive sneakers are recommended if your session includes exercises or balance work.",
  },
  {
    question: "What happens during the first visit?",
    answer:
      "During your first visit, your physical therapist will perform a thorough evaluation, including a review of your medical history, a physical assessment, and a discussion of your goals. From there, a personalized treatment plan will be created just for you.",
  },
  {
    question: "Will physical therapy be painful?",
    answer:
      "Physical therapy should not be painful, though some treatments may cause mild discomfort as your body heals. Your therapist will always communicate with you and adjust as needed to keep you comfortable throughout your session.",
  },
  {
    question: "Can I use any of the Core Services when I go?",
    answer:
      "Yes! When you visit for physical therapy, you can also take advantage of our Core Services like cryotherapy, infrared sauna, red light therapy, compression therapy, and oxygen therapy. Your therapist may even incorporate these into your treatment plan.",
  },
  {
    question:
      "Do I need a doctor's referral to start physical therapy at Oxygen Wellness & Physical Therapy?",
    answer:
      "No, you do not need a doctor's referral. Arizona is a direct-access state, which means you can see a physical therapist without a prescription. Simply book an appointment and we'll take it from there.",
  },
  {
    question:
      "Is physical therapy at Oxygen Wellness & Physical Therapy covered by insurance?",
    answer:
      "Physical therapy at Oxygen Wellness & Physical Therapy is not billed through insurance. However, many patients are able to use their Health Savings Account (HSA) or Flexible Spending Account (FSA) to cover the cost of their sessions. We're happy to provide detailed receipts or documentation to support reimbursement through these accounts.",
  },
];

export default function PhysicalTherapyPageClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[500px] flex items-center justify-center bg-[#061527] overflow-hidden -mt-[80px] lg:-mt-[112px] pt-[155px] lg:pt-[187px] pb-[50px]">
        <Image
          src="/images/heroes/pt-hero.jpg"
          alt="Physical Therapy"
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
          className="relative z-10 max-w-7xl mx-auto px-4 text-center py-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1
            className="font-[var(--font-display)] text-4xl md:text-6xl lg:text-[72px] font-extrabold text-white leading-[1.05] tracking-tight mb-4"
            style={{ textShadow: "4px 4px 0px rgba(0,0,0,0.3)" }}
          >
            Physical Therapy
          </h1>
          <p className="text-white/50 text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Sports Medicine | Spinal Manipulation | Dry Needling | Cupping | Taping | Scraping | 1:1 Stretching | Exercise
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#0066B3] to-[#4A90CC] text-white rounded-full px-8 py-4 font-black text-sm uppercase tracking-wider hover:scale-105 hover:shadow-[0_8px_30px_rgba(0,102,179,0.5)] transition-all duration-300"
          >
            Book Today
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </section>

      {/* What is Physical Therapy */}
      <section className="relative py-20 md:py-28 bg-[#061527] overflow-hidden">
        {/* Animated blobs */}
        <motion.div
          className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(0,102,179,0.35) 0%, rgba(0,102,179,0.08) 45%, transparent 70%)",
            filter: "blur(60px)",
            top: "-8%",
            left: "-3%",
          }}
          animate={{ x: [0, 50, 15, 0], y: [0, 35, -10, 0], scale: [1, 1.1, 0.95, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[250px] h-[250px] md:w-[380px] md:h-[380px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(74,144,204,0.3) 0%, rgba(74,144,204,0.06) 45%, transparent 70%)",
            filter: "blur(55px)",
            bottom: "-5%",
            right: "-2%",
          }}
          animate={{ x: [0, -40, 10, 0], y: [0, -20, 12, 0], scale: [1, 0.92, 1.06, 1] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {/* Left - Image */}
            <motion.div variants={fadeInLeft} className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
                <Image
                  src="/images/content/what-is-pt.webp"
                  alt="What is Physical Therapy"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div variants={fadeInRight}>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#0066B3]/30 bg-[#0066B3]/10 px-4 py-1.5 mb-5">
                <Sparkles className="h-3.5 w-3.5 text-[#4A90CC] animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#4A90CC]">
                  Expert Care
                </span>
              </div>
              <h2 className="font-[var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3">
                What is Physical Therapy?
              </h2>
              <div className="h-1 w-20 rounded-full bg-gradient-to-r from-[#0066B3] to-white/40 mb-6" />
              <p className="text-white/60 text-lg mb-4 leading-relaxed">
                Physical therapy is a healthcare specialty that helps people restore movement, strength, and function when they&apos;ve been limited by injury, surgery, illness, or chronic conditions.
              </p>
              <p className="text-white/60 text-lg mb-8 leading-relaxed">
                At Oxygen Wellness & Physical Therapy, we believe in treating the root cause of pain, not just the symptoms. Our licensed physical therapist will perform a detailed assessment to understand your condition, mobility limitations, and overall goals.
              </p>

              {/* Technique grid */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {techniques.map((t) => {
                  const Icon = t.icon;
                  return (
                    <div
                      key={t.name}
                      className="group/tech flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 px-4 py-3 transition-all duration-200 hover:bg-white/10 hover:border-[#0066B3]/30"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#0066B3]/15 transition-colors group-hover/tech:bg-[#0066B3]/30">
                        <Icon className="h-4 w-4 text-[#4A90CC] transition-colors group-hover/tech:text-white" />
                      </div>
                      <span className="text-white/70 text-sm font-medium transition-colors group-hover/tech:text-white">
                        {t.name}
                      </span>
                    </div>
                  );
                })}
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#0066B3] text-white rounded-full px-8 py-4 text-sm font-black uppercase tracking-wider hover:bg-[#00518F] hover:scale-105 transition-all duration-300"
              >
                Book Appointment
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="relative py-16 md:py-20 bg-gradient-to-br from-[#0a2240] via-[#0d2d54] to-[#061527] overflow-hidden">
        <motion.div
          className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(0,102,179,0.25) 0%, transparent 65%)",
            filter: "blur(80px)",
            top: "-10%",
            right: "-8%",
          }}
          animate={{ x: [0, -40, 0], y: [0, 25, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-10"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#4A90CC]/30 bg-[#4A90CC]/10 px-4 py-1.5 mb-5">
              <Sparkles className="h-3.5 w-3.5 text-[#4A90CC] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#4A90CC]">
                Your Visit
              </span>
            </div>
            <h2 className="font-[var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
              What to Expect
            </h2>
            <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-[#0066B3] to-[#4A90CC]" />
          </motion.div>

          <motion.div
            className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {expectations.map((item, i) => (
              <motion.div
                key={i}
                variants={cardReveal}
                className="group relative rounded-xl bg-white/[0.06] border border-white/[0.1] backdrop-blur-md p-5 hover:bg-white/[0.1] hover:border-[#4A90CC]/30 transition-all duration-500"
              >
                <div className="absolute top-0 left-4 right-4 h-[2px] rounded-full bg-gradient-to-r from-[#0066B3] to-[#4A90CC] opacity-30 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex items-start gap-3">
                  <div className="shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-[#0066B3] to-[#4A90CC] shadow-lg shadow-[#0066B3]/25 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white/60 text-sm md:text-base leading-relaxed">
                    {item}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Meet our Physical Therapist */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#F0F5FA] to-white overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.div variants={fadeInLeft}>
              <span className="inline-block text-[#0066B3] text-sm font-black uppercase tracking-widest mb-4">
                Meet the Founder
              </span>
              <h2 className="font-[var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#061527] tracking-tight mb-3">
                Dr. Clint Borman
              </h2>
              <div className="h-1 w-20 rounded-full bg-[#0066B3] mb-8" />

              <div className="space-y-5 mb-8">
                <p className="text-[#4A5568] leading-relaxed">
                  Meet Dr. Clint Borman, the owner + physical therapist of Oxygen Wellness & Physical Therapy. A former collegiate baseball player who spent countless hours recovering from injuries, Clint went on to earn his Doctor of Physical Therapy degree from the University of St. Augustine in 1997.
                </p>
                <p className="text-[#4A5568] leading-relaxed">
                  Over 25 years in outpatient sports medicine, he&apos;s led residency programs, trained staff, overseen mergers and acquisitions, and built a reputation for empowering patients through education at every session - delivering care with kindness, humor, and a commitment to your needs.
                </p>
                <p className="text-[#4A5568] leading-relaxed">
                  Today, Clint blends experience, education, and innovation with traditional rehabilitation and regenerative care - free from insurance constraints and focused on only the good stuff.
                </p>
              </div>

              <a
                href="https://linkedin.com/in/clintborman"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-[#0066B3] text-[#0066B3] rounded-full px-8 py-3 text-sm font-black uppercase tracking-wider hover:bg-[#0066B3] hover:text-white hover:scale-105 transition-all duration-300"
              >
                <Linkedin className="h-4 w-4" />
                See Clint&apos;s LinkedIn
              </a>
            </motion.div>

            <motion.div variants={fadeInRight} className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
                <Image
                  src="/images/content/dr-clint.jpg"
                  alt="Dr. Clint Borman"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-5 -left-3 lg:-left-6 bg-[#061527] text-white rounded-xl px-5 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
                <p className="text-2xl font-extrabold font-[var(--font-display)]">25+</p>
                <p className="text-xs font-bold uppercase tracking-wider text-white/70">Years Experience</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PT FAQs */}
      <section className="relative py-16 md:py-20 bg-gradient-to-br from-[#0a2240] via-[#0d2d54] to-[#061527] overflow-hidden">
        <motion.div
          className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(74,144,204,0.2) 0%, transparent 65%)",
            filter: "blur(70px)",
            bottom: "-10%",
            left: "-5%",
          }}
          animate={{ x: [0, 40, 0], y: [0, -25, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-10"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#4A90CC]/30 bg-[#4A90CC]/10 px-4 py-1.5 mb-5">
              <MessageCircle className="h-3.5 w-3.5 text-[#4A90CC]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#4A90CC]">
                FAQ
              </span>
            </div>
            <h2 className="font-[var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
              Physical Therapy FAQs
            </h2>
            <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-[#0066B3] to-[#4A90CC]" />
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {ptFaqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className={`rounded-2xl overflow-hidden transition-all duration-500 ${
                  openFaq === index
                    ? "bg-white/[0.1] border border-[#4A90CC]/30 shadow-[0_8px_40px_rgba(0,102,179,0.15)]"
                    : "bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.07] hover:border-white/[0.15]"
                }`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between text-left px-6 py-5 gap-4"
                >
                  <div className="flex items-center gap-4">
                    <span className={`text-xs font-black tracking-wider transition-colors duration-300 ${
                      openFaq === index ? "text-[#4A90CC]" : "text-white/25"
                    }`}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className={`text-base font-bold transition-colors duration-300 ${
                      openFaq === index ? "text-white" : "text-white/70"
                    }`}>
                      {faq.question}
                    </span>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      openFaq === index
                        ? "bg-gradient-to-br from-[#0066B3] to-[#4A90CC] text-white shadow-lg shadow-[#0066B3]/25"
                        : "bg-white/[0.06] text-[#4A90CC] border border-white/[0.1]"
                    }`}
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pl-[4rem]">
                        <div className="h-px bg-gradient-to-r from-[#0066B3]/30 to-transparent mb-4" />
                        <p className="text-white/50 leading-relaxed text-sm md:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services */}
      <CoreServices />

      {/* Free Core Service CTA */}
      <section className="relative py-20 md:py-28 bg-[#061527] overflow-hidden">
        {/* Background image with dark overlay */}
        <Image
          src="/images/content/dr-clint.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#061527]/90 via-[#0a2240]/85 to-[#061527]/92" />
        <div className="absolute inset-0 bg-[#061527]/40" />

        {/* Animated blobs */}
        <motion.div
          className="absolute w-[350px] h-[350px] md:w-[550px] md:h-[550px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(0,102,179,0.35) 0%, rgba(0,102,179,0.08) 45%, transparent 70%)",
            filter: "blur(70px)",
            top: "-12%",
            right: "-8%",
          }}
          animate={{ x: [0, -50, 15, 0], y: [0, 30, -15, 0], scale: [1, 1.12, 0.95, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[280px] h-[280px] md:w-[420px] md:h-[420px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(74,144,204,0.3) 0%, rgba(74,144,204,0.06) 45%, transparent 70%)",
            filter: "blur(60px)",
            bottom: "-8%",
            left: "-5%",
          }}
          animate={{ x: [0, 40, -10, 0], y: [0, -25, 15, 0], scale: [1, 0.93, 1.08, 1] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {/* Top - Content centered */}
            <motion.div variants={fadeInUp} className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#4A90CC]/30 bg-[#4A90CC]/10 backdrop-blur-sm px-5 py-2 mb-6">
                <Sparkles className="h-4 w-4 text-[#4A90CC] animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#4A90CC]">
                  First Visit Bonus
                </span>
              </div>

              <h2 className="font-[var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3">
                Not Sure Where to Start?
              </h2>
              <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-[#0066B3] to-[#4A90CC] mb-6" />
              <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                Book a physical therapy appointment with us for the first time and enjoy a
                complimentary core service of your choice - <span className="text-[#4A90CC] font-bold">completely free</span>.
              </p>
            </motion.div>

            {/* Service image cards - bento grid */}
            <motion.div variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4 mb-12 md:mb-16">
              {[
                { name: "Cryotherapy", slug: "cryotherapy", color: "from-sky-500/80 to-sky-600/80" },
                { name: "Infrared Sauna", slug: "infrared-sauna", color: "from-orange-500/80 to-orange-600/80" },
                { name: "Red Light Therapy", slug: "red-light-therapy", color: "from-rose-500/80 to-rose-600/80" },
                { name: "Compression", slug: "compression-therapy", color: "from-violet-500/80 to-violet-600/80" },
                { name: "Oxygen Therapy", slug: "oxygen-therapy", color: "from-emerald-500/80 to-emerald-600/80" },
              ].map((service, i) => (
                <motion.div
                  key={service.slug}
                  className={`group relative rounded-2xl overflow-hidden cursor-default ${
                    i === 0 ? "col-span-2 md:col-span-1" : ""
                  }`}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="relative h-[180px] md:h-[220px]">
                    <Image
                      src={`/images/services/${service.slug}.jpg`}
                      alt={service.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.color} via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061527]/80 via-transparent to-transparent" />

                    {/* FREE badge */}
                    <div className="absolute top-3 right-3">
                      <span className="inline-block rounded-full bg-white text-[#061527] px-3 py-1 text-[10px] font-black uppercase tracking-wider shadow-lg animate-pulse">
                        Free
                      </span>
                    </div>

                    {/* Service name */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                        <p className="text-white text-sm font-bold">{service.name}</p>
                      </div>
                    </div>

                    {/* Bottom accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0066B3] to-[#4A90CC] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Bottom - CTA row */}
            <motion.div variants={fadeInUp}>
              <div className="rounded-2xl bg-white/[0.06] border border-white/[0.1] backdrop-blur-md p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  {/* Left info */}
                  <div className="flex items-center gap-5">
                    <div className="shrink-0 flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-[#0066B3] to-[#4A90CC] shadow-[0_8px_30px_rgba(0,102,179,0.4)]">
                      <span className="text-2xl md:text-3xl font-extrabold text-white font-[var(--font-display)]">$0</span>
                    </div>
                    <div>
                      <p className="text-white font-extrabold text-lg md:text-xl font-[var(--font-display)]">
                        Pick Any Core Service - It&apos;s on Us
                      </p>
                      <p className="text-white/40 text-sm mt-1">
                        No strings attached. Just book your first PT appointment.
                      </p>
                    </div>
                  </div>

                  {/* Right CTA */}
                  <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
                    <Link
                      href="/contact"
                      className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#0066B3] to-[#4A90CC] text-white rounded-full px-7 py-3.5 font-black text-sm uppercase tracking-wider hover:scale-105 hover:shadow-[0_8px_30px_rgba(0,102,179,0.5)] transition-all duration-300"
                    >
                      Book Appointment
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                    <a
                      href={SITE.phoneHref}
                      className="group inline-flex items-center gap-2 border border-white/20 text-white rounded-full px-7 py-3.5 text-sm font-black uppercase tracking-wider hover:border-[#4A90CC]/50 hover:bg-white/[0.06] transition-all duration-300"
                    >
                      <Phone className="w-4 h-4 text-[#4A90CC]" />
                      {SITE.phone}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Other Services - Same layout as homepage */}
      <OtherServices />

      {/* Contact Form */}
      <PreFooterContact source="physical-therapy-page" />
    </>
  );
}
