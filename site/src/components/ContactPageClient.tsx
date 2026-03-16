"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ArrowRight, ExternalLink } from "lucide-react";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, cardReveal, viewportOnce } from "@/lib/animations";
import { SITE } from "@/lib/constants";
import ContactForm from "@/components/ContactForm";

const contactItems = [
  {
    icon: MapPin,
    label: "Address",
    content: `${SITE.address}\n${SITE.city}, ${SITE.state} ${SITE.zip}`,
    href: SITE.mapsUrl,
    external: true,
  },
  {
    icon: Phone,
    label: "Phone",
    content: SITE.phone,
    href: SITE.phoneHref,
    external: false,
  },
  {
    icon: Mail,
    label: "Email",
    content: SITE.email,
    href: `mailto:${SITE.email}`,
    external: false,
  },
  {
    icon: Clock,
    label: "Hours",
    content: `${SITE.hours.weekday.label}: ${SITE.hours.weekday.open} - ${SITE.hours.weekday.close}\n${SITE.hours.weekend.label}: ${SITE.hours.weekend.open} - ${SITE.hours.weekend.close}`,
    href: null,
    external: false,
  },
];

export default function ContactPageClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0a2240] via-[#0d2d54] to-[#061527] py-20 md:py-28">
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
          <h1
            className="text-4xl md:text-6xl lg:text-[72px] font-extrabold font-[var(--font-display)] text-white leading-[1.05] tracking-tight mb-4"
            style={{ textShadow: "4px 4px 0px rgba(0,0,0,0.3)" }}
          >
            Contact Us
          </h1>
          <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto">
            Have a question or ready to book? Reach out and we will get back to you as soon as possible.
          </p>
        </motion.div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {/* Contact Form */}
            <motion.div variants={fadeInLeft}>
              <ContactForm source="contact-page" />
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={fadeInRight}>
              <h2 className="font-[var(--font-display)] text-3xl md:text-4xl font-extrabold text-[#061527] tracking-tight mb-2">
                Contact Information
              </h2>
              <div className="h-1 w-20 rounded-full bg-gradient-to-r from-[#0066B3] to-[#061527] mb-8" />

              <div className="space-y-5">
                {contactItems.map((item) => {
                  const Wrapper = item.href ? "a" : "div";
                  const wrapperProps = item.href
                    ? {
                        href: item.href,
                        ...(item.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {}),
                      }
                    : {};

                  return (
                    <Wrapper
                      key={item.label}
                      {...wrapperProps}
                      className="group flex items-start gap-4 rounded-xl bg-[#F0F5FA] border border-[#E2E8F0] p-4 hover:shadow-md hover:border-[#0066B3]/20 transition-all duration-300"
                    >
                      <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-[#0066B3] to-[#4A90CC] shadow-lg shadow-[#0066B3]/20 shrink-0">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-black text-[#061527] text-sm mb-0.5">{item.label}</h3>
                        <p className="text-[#718096] text-sm whitespace-pre-line">{item.content}</p>
                      </div>
                      {item.href && (
                        <ExternalLink className="w-4 h-4 text-[#0066B3]/30 group-hover:text-[#0066B3] transition-colors ml-auto mt-1 shrink-0" />
                      )}
                    </Wrapper>
                  );
                })}
              </div>

              {/* Quick Actions */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href={SITE.phoneHref}
                  className="group flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-[#0066B3] to-[#4A90CC] text-white rounded-full px-6 py-4 font-black text-sm uppercase tracking-wider hover:scale-105 hover:shadow-[0_8px_30px_rgba(0,102,179,0.4)] transition-all duration-300"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
                <a
                  href={SITE.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex-1 flex items-center justify-center gap-2 bg-white text-[#0066B3] rounded-full px-6 py-4 font-black text-sm uppercase tracking-wider border-2 border-[#0066B3] hover:bg-[#0066B3] hover:text-white hover:scale-105 transition-all duration-300"
                >
                  <MapPin className="w-4 h-4" />
                  Get Directions
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Google Maps Embed */}
      <section className="relative py-16 md:py-20 bg-gradient-to-br from-[#0a2240] via-[#0d2d54] to-[#061527] overflow-hidden">
        <motion.div
          className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(0,102,179,0.2) 0%, transparent 65%)",
            filter: "blur(70px)",
            top: "-10%",
            left: "-5%",
          }}
          animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-4"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <div className="text-center mb-10">
            <h2 className="font-[var(--font-display)] text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-2">
              Find Us
            </h2>
            <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-[#0066B3] to-[#4A90CC]" />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.3)] border border-white/[0.1]">
            <iframe
              title="Oxygen Wellness Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.6!2d-112.186!3d33.658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s20265+N+59th+Ave+b1%2C+Glendale%2C+AZ+85308!5e0!3m2!1sen!2sus!4v1700000000000"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>
      </section>
    </>
  );
}
