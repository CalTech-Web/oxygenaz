"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Shield, Eye, Cookie, Users, Lock, FileText, Bell, Mail } from "lucide-react";
import { fadeInUp, staggerContainer, cardReveal, viewportOnce } from "@/lib/animations";

interface ContentItem {
  subtitle?: string;
  text: string;
}

interface PolicySection {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  content?: ContentItem[];
  list?: string[];
}

const sections: PolicySection[] = [
  {
    icon: Eye,
    title: "Information We Collect",
    content: [
      {
        subtitle: "Personal Information",
        text: "When you fill out a contact form, book an appointment, or interact with our website, we may collect personally identifiable information such as your name, email address, phone number, and mailing address.",
      },
      {
        subtitle: "Health-Related Information",
        text: "As a wellness and physical therapy business, we may collect health-related information that you voluntarily provide to us in connection with our services. This information is treated with the highest level of confidentiality.",
      },
      {
        subtitle: "Automatically Collected Information",
        text: "When you visit our website, our servers may automatically log standard data provided by your web browser. This may include your device\u2019s IP address, browser type and version, the pages you visit, the time and date of your visit, the time spent on each page, and other technical details.",
      },
    ],
  },
  {
    icon: FileText,
    title: "How We Use Your Information",
    list: [
      "To provide, operate, and maintain our website and services",
      "To respond to your inquiries and fulfill your requests",
      "To schedule appointments and communicate with you about our services",
      "To send you marketing and promotional communications (with your consent)",
      "To improve our website, services, and overall customer experience",
      "To comply with legal obligations and protect our rights",
    ],
  },
  {
    icon: Cookie,
    title: "Cookies and Tracking Technologies",
    content: [
      {
        text: "Our website may use cookies and similar tracking technologies to enhance your experience. Cookies are small data files stored on your device that help us understand how you use our website and improve its functionality.",
      },
      {
        text: "You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, some portions of our website may not function properly.",
      },
    ],
  },
  {
    icon: Users,
    title: "Third-Party Services",
    content: [
      {
        text: "We may share your information with third-party service providers that assist us in operating our website, conducting our business, or serving you. These third parties have access to your information only to perform specific tasks on our behalf and are obligated to keep it confidential.",
      },
      {
        text: "We may also share information when required by law, to protect our rights, or in connection with a business transaction such as a merger or acquisition.",
      },
    ],
  },
  {
    icon: Lock,
    title: "Data Security",
    content: [
      {
        text: "We implement appropriate technical and organizational security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or method of electronic storage is completely secure, and we cannot guarantee absolute security.",
      },
    ],
  },
  {
    icon: Shield,
    title: "Your Rights",
    content: [
      {
        text: "Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, or delete your data. To exercise any of these rights, please contact us using the information provided below.",
      },
    ],
  },
  {
    icon: Bell,
    title: "Changes to This Policy",
    content: [
      {
        text: "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically to stay informed about how we are protecting your information.",
      },
    ],
  },
];

export default function PrivacyPolicyPageClient() {
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
            <Shield className="h-3.5 w-3.5 text-[#4A90CC] animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#4A90CC]">
              Your Privacy Matters
            </span>
          </div>
          <h1
            className="text-4xl md:text-6xl lg:text-[72px] font-extrabold font-[var(--font-display)] text-white leading-[1.05] tracking-tight mb-4"
            style={{ textShadow: "4px 4px 0px rgba(0,0,0,0.3)" }}
          >
            Privacy Policy
          </h1>
          <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto">
            How we collect, use, and protect your information.
          </p>
        </motion.div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-20 bg-white">
        <motion.div
          className="max-w-4xl mx-auto px-4"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <p className="text-sm text-[#718096] mb-8">Last updated: March 6, 2026</p>
          <div className="rounded-2xl bg-[#F0F5FA] border border-[#E2E8F0] p-6 md:p-8">
            <p className="text-[#718096] text-lg leading-relaxed">
              Oxygen Wellness LLC (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the website oxygenaz.com. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this policy carefully. By accessing or using our website, you agree to the terms of this Privacy Policy.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Policy Sections */}
      <section className="relative py-16 md:py-20 bg-gradient-to-br from-[#0a2240] via-[#0d2d54] to-[#061527] overflow-hidden">
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

                {section.content?.map((item, i) => (
                  <div key={i} className="mb-4 last:mb-0">
                    {item.subtitle && (
                      <h3 className="text-white/80 font-bold text-base mb-1">
                        {item.subtitle}
                      </h3>
                    )}
                    <p className="text-white/50 leading-relaxed text-sm md:text-base">
                      {item.text}
                    </p>
                  </div>
                ))}

                {section.list && (
                  <ul className="space-y-2">
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
              Questions About This Policy?
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
