"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Scale, Shield, AlertTriangle, Globe, PenTool, Stethoscope, RefreshCw, Mail } from "lucide-react";
import { fadeInUp, staggerContainer, cardReveal, viewportOnce } from "@/lib/animations";

const sections = [
  {
    icon: FileText,
    title: "Agreement to Terms",
    content:
      "By accessing or using the website operated by Oxygen Wellness LLC (\"we,\" \"us,\" or \"our\") at oxygenaz.com, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.",
  },
  {
    icon: Shield,
    title: "Use of Website",
    content: "You may use our website for lawful purposes only. You agree not to:",
    list: [
      "Use the website in any way that violates applicable local, state, or federal laws",
      "Attempt to gain unauthorized access to any portion of the website or its systems",
      "Transmit any harmful, threatening, or objectionable content",
      "Interfere with or disrupt the operation of the website or its servers",
      "Use automated means to access or collect data from the website without our written permission",
    ],
  },
  {
    icon: Stethoscope,
    title: "Services Disclaimer",
    content:
      "The information provided on our website is for general informational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of a qualified health provider with any questions you may have regarding a medical condition.\n\nOur wellness services - including cryotherapy, infrared sauna, hyperbaric oxygen therapy, IV infusions, and other modalities - are intended to complement, not replace, conventional medical care. Individual results may vary and are not guaranteed.",
  },
  {
    icon: Stethoscope,
    title: "Physical Therapy Services",
    content:
      "Physical therapy services at Oxygen Wellness are provided by licensed physical therapists. These services require an in-person evaluation and are subject to a separate patient agreement. Information about physical therapy on our website is provided for educational purposes and does not establish a provider - patient relationship.",
  },
  {
    icon: PenTool,
    title: "Intellectual Property",
    content:
      "All content on this website - including text, graphics, logos, images, and software - is the property of Oxygen Wellness LLC or its content suppliers and is protected by United States and international intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content without our prior written consent.",
  },
  {
    icon: AlertTriangle,
    title: "Limitation of Liability",
    content:
      "To the fullest extent permitted by law, Oxygen Wellness LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the website or our services. Our total liability for any claim arising from these terms shall not exceed the amount you have paid to us in the twelve months preceding the claim.",
  },
  {
    icon: Scale,
    title: "Disclaimer of Warranties",
    content:
      "This website and its content are provided on an \"as is\" and \"as available\" basis without warranties of any kind, either express or implied. We do not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components.",
  },
  {
    icon: RefreshCw,
    title: "Modifications to Terms",
    content:
      "We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website after any changes constitutes acceptance of the updated terms. We encourage you to review these terms periodically.",
  },
  {
    icon: Globe,
    title: "Governing Law",
    content:
      "These Terms of Service shall be governed by and construed in accordance with the laws of the State of Arizona, without regard to its conflict of law provisions. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts located in Maricopa County, Arizona.",
  },
];

export default function TermsOfServicePageClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0a2240] via-[#0d2d54] to-[#061527] pb-[50px] -mt-[80px] lg:-mt-[112px] pt-[155px] lg:pt-[187px]">
        <motion.div
          className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(0,102,179,0.3) 0%, transparent 65%)",
            filter: "blur(80px)",
            top: "-20%",
            right: "-10%",
          }}
          animate={{ x: [0, -50, 0], y: [0, 30, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(74,144,204,0.2) 0%, transparent 65%)",
            filter: "blur(60px)",
            bottom: "-15%",
            left: "-5%",
          }}
          animate={{ x: [0, 40, 0], y: [0, -25, 0], scale: [1, 0.9, 1] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#4A90CC]/30 bg-[#4A90CC]/10 px-4 py-1.5 mb-6">
            <Scale className="h-3.5 w-3.5 text-[#4A90CC] animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#4A90CC]">
              Legal
            </span>
          </div>
          <h1
            className="text-4xl md:text-6xl lg:text-[72px] font-extrabold font-[var(--font-display)] text-white leading-[1.05] tracking-tight mb-4"
            style={{ textShadow: "4px 4px 0px rgba(0,0,0,0.3)" }}
          >
            Terms of Service
          </h1>
          <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto">
            Please read these terms carefully before using our website or services.
          </p>
        </motion.div>
      </section>

      {/* Last Updated */}
      <section className="py-16 md:py-20 bg-white">
        <motion.div
          className="max-w-4xl mx-auto px-4"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <p className="text-sm text-[#718096] mb-4">Last updated: March 6, 2026</p>
        </motion.div>
      </section>

      {/* Terms Sections */}
      <section className="relative py-16 md:py-20 bg-gradient-to-br from-[#0a2240] via-[#0d2d54] to-[#061527] overflow-hidden -mt-10">
        <motion.div
          className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(0,102,179,0.25) 0%, transparent 65%)",
            filter: "blur(80px)",
            top: "-10%",
            left: "-8%",
          }}
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
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
          animate={{ x: [0, -40, 0], y: [0, -25, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <motion.div
            className="space-y-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {sections.map((section) => (
              <motion.div
                key={section.title}
                variants={cardReveal}
                className="group rounded-2xl bg-white/[0.06] border border-white/[0.1] backdrop-blur-md p-6 md:p-8 hover:bg-white/[0.1] hover:border-[#4A90CC]/30 transition-all duration-500"
              >
                <div className="absolute top-0 left-6 right-6 h-[2px] rounded-full bg-gradient-to-r from-[#0066B3] to-[#4A90CC] opacity-30 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#0066B3] to-[#4A90CC] shadow-lg shadow-[#0066B3]/25">
                    <section.icon className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="font-[var(--font-display)] text-xl md:text-2xl font-extrabold text-white">
                    {section.title}
                  </h2>
                </div>

                <p className="text-white/50 leading-relaxed text-sm md:text-base whitespace-pre-line">
                  {section.content}
                </p>

                {section.list && (
                  <ul className="mt-4 space-y-2">
                    {section.list.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-white/50 text-sm md:text-base">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#4A90CC] mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 md:py-20 bg-white">
        <motion.div
          className="max-w-4xl mx-auto px-4"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <div className="rounded-2xl bg-[#F0F5FA] border border-[#E2E8F0] p-6 md:p-8 text-center">
            <div className="mx-auto flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[#0066B3] to-[#4A90CC] shadow-lg shadow-[#0066B3]/20 mb-4">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h2 className="font-[var(--font-display)] text-2xl md:text-3xl font-extrabold text-[#061527] mb-2">
              Questions About These Terms?
            </h2>
            <div className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-[#0066B3] to-[#061527] mb-4" />
            <address className="not-italic text-[#718096] space-y-1 mb-6">
              <p className="font-bold text-[#061527]">Oxygen Wellness LLC</p>
              <p>20265 N. 59th Ave. Suite B-1</p>
              <p>Glendale, AZ 85308</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:Contact@OxygenAZ.com"
                  className="text-[#0066B3] hover:text-[#00518F] underline font-bold"
                >
                  Contact@OxygenAZ.com
                </a>
              </p>
            </address>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#0066B3] to-[#4A90CC] text-white rounded-full px-8 py-4 font-black text-sm uppercase tracking-wider hover:scale-105 hover:shadow-[0_8px_30px_rgba(0,102,179,0.5)] transition-all duration-300"
            >
              Contact Us
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}
