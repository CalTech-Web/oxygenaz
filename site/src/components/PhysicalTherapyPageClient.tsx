"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronDown, Sparkles, MessageCircle } from "lucide-react";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, cardReveal, viewportOnce } from "@/lib/animations";
import CoreServices from "@/components/sections/CoreServices";
import AdditionalServices from "@/components/sections/AdditionalServices";
import ContactForm from "@/components/ContactForm";

const techniques = [
  "Spinal manipulation",
  "Dry needling",
  "Cupping",
  "Taping",
  "Scraping",
  "1:1 stretching",
  "Exercise",
  "Education and training",
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
      <section className="relative min-h-[500px] flex items-center justify-center bg-[#061527] overflow-hidden -mt-[80px] lg:-mt-[112px] pt-[75px]">
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
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.div className="relative" variants={fadeInLeft}>
              <Image
                src="/images/content/what-is-pt.webp"
                alt="What is Physical Therapy"
                width={540}
                height={400}
                className="rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] w-full h-auto object-cover"
              />
            </motion.div>
            <motion.div variants={fadeInRight}>
              <h2 className="font-[var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#061527] tracking-tight mb-2">
                What is Physical Therapy?
              </h2>
              <div className="h-1 w-20 rounded-full bg-gradient-to-r from-[#0066B3] to-[#061527] mb-6" />
              <p className="text-[#718096] text-lg mb-4">
                Physical therapy is a healthcare specialty that helps people restore movement, strength, and function when they&apos;ve been limited by injury, surgery, illness, or chronic conditions.
              </p>
              <p className="text-[#718096] text-lg mb-6">
                At Oxygen Wellness & Physical Therapy, we believe in treating the root cause of pain, not just the symptoms. Our licensed physical therapist will perform a detailed assessment to understand your condition, mobility limitations, and overall goals.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {techniques.map((technique) => (
                  <div
                    key={technique}
                    className="flex items-center gap-3 rounded-lg bg-[#F0F5FA] border border-[#E2E8F0] px-4 py-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#0066B3] shrink-0" />
                    <span className="text-[#718096] text-sm">{technique}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#0066B3] to-[#4A90CC] text-white rounded-full px-8 py-4 font-black text-sm uppercase tracking-wider hover:scale-105 hover:shadow-[0_8px_30px_rgba(0,102,179,0.5)] transition-all duration-300"
              >
                Book Appointment
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
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
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
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
                alt="Dr. Clint Borman"
                width={540}
                height={500}
                className="rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] w-full h-auto object-cover"
              />
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-[#0066B3] to-[#4A90CC] rounded-xl px-5 py-3 shadow-lg">
                <p className="text-2xl font-extrabold font-[var(--font-display)] text-white">25+</p>
                <p className="text-xs font-bold uppercase tracking-wider text-white/70">Years Experience</p>
              </div>
            </motion.div>
            <motion.div variants={fadeInRight}>
              <h2 className="font-[var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#061527] tracking-tight mb-2">
                Meet our Physical Therapist
              </h2>
              <div className="h-1 w-20 rounded-full bg-gradient-to-r from-[#0066B3] to-[#061527] mb-6" />
              <p className="text-[#718096] text-lg mb-4">
                Meet Dr. Clint Borman, the owner + physical therapist of Oxygen Wellness & Physical Therapy. A former collegiate baseball player who spent countless hours recovering from injuries, Clint went on to earn his Doctor of Physical Therapy degree from the University of St. Augustine in 1997.
              </p>
              <p className="text-[#718096] text-lg mb-4">
                Over 25 years in outpatient sports medicine, he&apos;s led residency programs, trained staff, overseen mergers and acquisitions, and built a reputation for empowering patients through education at every session.
              </p>
              <p className="text-[#718096] text-lg mb-8">
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
      <section className="relative py-16 md:py-20 bg-gradient-to-br from-[#0a2240] via-[#0d2d54] to-[#061527] overflow-hidden">
        <motion.div
          className="absolute w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(0,102,179,0.25) 0%, transparent 65%)",
            filter: "blur(80px)",
            top: "-15%",
            right: "-8%",
          }}
          animate={{ x: [0, -40, 0], y: [0, 25, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-4 text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <h2 className="font-[var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Get a Core Service for FREE
          </h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-[#0066B3] to-[#4A90CC] mb-5" />
          <p className="text-white/50 text-lg mb-8 max-w-2xl mx-auto">
            Book an appointment with us for the first time and enjoy a complimentary core service of your choice.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#0066B3] to-[#4A90CC] text-white rounded-full px-8 py-4 font-black text-sm uppercase tracking-wider hover:scale-105 hover:shadow-[0_8px_30px_rgba(0,102,179,0.5)] transition-all duration-300"
          >
            Book Appointment
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </section>

      {/* Additional Services */}
      <AdditionalServices />

      {/* Contact Form */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-[#F0F5FA] to-white">
        <div className="max-w-2xl mx-auto px-4">
          <ContactForm source="physical-therapy-page" />
        </div>
      </section>
    </>
  );
}
