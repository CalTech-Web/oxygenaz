"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ArrowRight, Sparkles, MessageCircle, Navigation } from "lucide-react";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, cardReveal, viewportOnce } from "@/lib/animations";
import { SITE } from "@/lib/constants";
import ContactForm from "@/components/ContactForm";

const contactCards = [
  {
    icon: Phone,
    label: "Call Us",
    value: SITE.phone,
    sub: "We answer during business hours",
    href: SITE.phoneHref,
    color: "from-[#0066B3] to-[#4A90CC]",
    bg: "bg-[#E8F4FD]",
    border: "border-[#B8DDFB]",
    hoverBorder: "hover:border-[#0066B3]/50",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: SITE.email,
    sub: "We reply within 24 hours",
    href: `mailto:${SITE.email}`,
    color: "from-[#5B4AC0] to-[#8B7AE8]",
    bg: "bg-[#EDE8FD]",
    border: "border-[#D4CCF9]",
    hoverBorder: "hover:border-[#5B4AC0]/50",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: SITE.address,
    sub: `${SITE.city}, ${SITE.state} ${SITE.zip}`,
    href: SITE.mapsUrl,
    external: true,
    color: "from-[#0E8A5E] to-[#34C88A]",
    bg: "bg-[#E6F7F0]",
    border: "border-[#B5E8D5]",
    hoverBorder: "hover:border-[#0E8A5E]/50",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon-Fri: 8AM - 8PM",
    sub: "Sat-Sun: 8AM - 6PM",
    href: null,
    color: "from-[#D97706] to-[#F59E0B]",
    bg: "bg-[#FFF3E6]",
    border: "border-[#FDE0B4]",
    hoverBorder: "hover:border-[#D97706]/50",
  },
];

export default function ContactPageClient() {
  return (
    <>
      {/* Hero with background image */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden bg-[#061527] -mt-[80px] lg:-mt-[112px] pt-[calc(155px+75px)] lg:pt-[calc(187px+75px)] pb-[calc(50px+50px)]">
        <Image
          src="/images/heroes/services-hero.webp"
          alt="Contact Oxygen Wellness"
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
          className="relative z-10 max-w-7xl mx-auto px-4 text-center py-10 md:py-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#4A90CC]/30 bg-[#4A90CC]/10 px-4 py-1.5 mb-5">
            <MessageCircle className="h-3.5 w-3.5 text-[#4A90CC] animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#4A90CC]">
              Get in Touch
            </span>
          </div>
          <h1
            className="text-4xl md:text-6xl lg:text-[72px] font-extrabold font-[var(--font-display)] text-white leading-[1.05] tracking-tight mb-4"
            style={{ textShadow: "4px 4px 0px rgba(0,0,0,0.3)" }}
          >
            Contact Us
          </h1>
          <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-[#0066B3] to-white/40 mb-5" />
          <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto">
            Have a question or ready to book? Reach out and we will get back to you as soon as possible.
          </p>
        </motion.div>
      </section>

      {/* Contact Cards Row */}
      <section className="relative -mt-1 bg-gradient-to-b from-[#061527] to-[#F0F5FA] pt-4 pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {contactCards.map((card) => {
              const Tag = card.href ? "a" : "div";
              const linkProps = card.href
                ? {
                    href: card.href,
                    ...((card as { external?: boolean }).external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {}),
                  }
                : {};

              return (
                <motion.div key={card.label} variants={cardReveal}>
                  <Tag
                    {...linkProps}
                    className={`group block rounded-2xl ${card.bg} border ${card.border} ${card.hoverBorder} p-6 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500 h-full`}
                  >
                    <div className={`flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br ${card.color} shadow-lg mb-4 group-hover:scale-110 transition-transform duration-500`}>
                      <card.icon className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#718096] mb-1">
                      {card.label}
                    </p>
                    <p className="text-[#061527] font-bold text-sm mb-0.5">{card.value}</p>
                    <p className="text-[#718096] text-xs">{card.sub}</p>
                  </Tag>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Contact Form + Map Side by Side */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#F0F5FA] to-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {/* Contact Form - 3 cols */}
            <motion.div className="lg:col-span-3" variants={fadeInLeft}>
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-[0_8px_40px_rgba(0,0,0,0.06)] border border-[#E2E8F0]">
                <ContactForm source="contact-page" />
              </div>
            </motion.div>

            {/* Right side - Map + Quick Actions - 2 cols */}
            <motion.div className="lg:col-span-2 space-y-6" variants={fadeInRight}>
              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.08)] border border-[#E2E8F0]">
                <iframe
                  title="Oxygen Wellness Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.6!2d-112.186!3d33.658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s20265+N+59th+Ave+b1%2C+Glendale%2C+AZ+85308!5e0!3m2!1sen!2sus!4v1700000000000"
                  width="100%"
                  height="320"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
              </div>

              {/* Quick Actions */}
              <a
                href={SITE.phoneHref}
                className="group flex items-center gap-4 rounded-2xl bg-gradient-to-r from-[#0066B3] to-[#4A90CC] p-5 shadow-[0_8px_30px_rgba(0,102,179,0.25)] hover:shadow-[0_12px_40px_rgba(0,102,179,0.4)] hover:scale-[1.02] transition-all duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-white font-extrabold text-base">Call Us Now</p>
                  <p className="text-white/60 text-sm">{SITE.phone}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all duration-300 shrink-0" />
              </a>

              <a
                href={SITE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl bg-white border-2 border-[#E2E8F0] p-5 hover:border-[#0066B3]/30 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:scale-[1.02] transition-all duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#0066B3]/10 shrink-0">
                  <Navigation className="w-5 h-5 text-[#0066B3]" />
                </div>
                <div className="flex-1">
                  <p className="text-[#061527] font-extrabold text-base">Get Directions</p>
                  <p className="text-[#718096] text-sm">{SITE.address}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-[#0066B3]/30 group-hover:text-[#0066B3] group-hover:translate-x-1 transition-all duration-300 shrink-0" />
              </a>

              {/* Hours card */}
              <div className="rounded-2xl bg-gradient-to-br from-[#0a2240] via-[#0d2d54] to-[#061527] p-6 border border-white/[0.1]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10">
                    <Clock className="w-5 h-5 text-[#4A90CC]" />
                  </div>
                  <h3 className="text-white font-extrabold text-base">Business Hours</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-white/50 text-sm">Monday - Friday</span>
                    <span className="text-white font-bold text-sm">8:00 AM - 8:00 PM</span>
                  </div>
                  <div className="h-px bg-white/[0.08]" />
                  <div className="flex items-center justify-between">
                    <span className="text-white/50 text-sm">Saturday - Sunday</span>
                    <span className="text-white font-bold text-sm">8:00 AM - 6:00 PM</span>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                  </span>
                  <span className="text-emerald-400 text-xs font-bold">Open 7 Days a Week</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
