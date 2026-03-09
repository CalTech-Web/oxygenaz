import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { allServices } from "@/data/services";
import ContactForm from "@/components/ContactForm";

const service = allServices.find((s) => s.slug === "oxygen-therapy")!;

const relatedSlugs = ["hyperbaric-oxygen", "infrared-sauna", "iv-infusions"];
const relatedServices = allServices.filter((s) => relatedSlugs.includes(s.slug));

export const metadata: Metadata = {
  title: service.name,
  description: service.shortDescription,
};

export default function OxygenTherapyPage() {
  return (
    <>
      {/* Hero */}
      <section className="grain relative overflow-hidden min-h-[500px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/services/oxygen-therapy.jpg"
            alt={service.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B2447]/78 via-[#0B2447]/88 to-[#0B2447]/97" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#00B4D8]/12 to-transparent" />
        </div>
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-[#00B4D8]/8 blur-[100px] pointer-events-none" />
        <div className="relative z-10 max-w-[1140px] mx-auto px-4 text-center py-20">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-[var(--font-display)] tracking-tight text-white mb-6 leading-tight"
            style={{ textShadow: "4px 4px 0px rgba(0,0,0,0.25)" }}
          >
            {service.name}
          </h1>
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-[#00B4D8] to-[#0096B7] text-white rounded-full px-8 py-4 font-black text-sm uppercase tracking-wider hover:scale-105 animate-pulse-glow transition-transform duration-300"
          >
            BOOK TODAY
          </Link>
        </div>
      </section>

      {/* What is it */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-[var(--font-display)] tracking-tight accent-underline text-[#0B2447] mb-6">
            What is {service.name}?
          </h2>
          <p className="text-[#5A5A5A] text-lg leading-relaxed max-w-4xl">
            {service.description}
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-20 bg-[#F5F7FA]">
        <div className="max-w-[1140px] mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-[var(--font-display)] tracking-tight accent-underline-center text-[#0B2447] mb-8 text-center">
            Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {service.benefits.map((benefit, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border-l-4 border-[#00B4D8] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-5 flex items-start gap-3"
              >
                <svg className="w-5 h-5 text-[#00B4D8] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[#5A5A5A]">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-[var(--font-display)] tracking-tight accent-underline text-[#0B2447] mb-6">
            What to Expect
          </h2>
          <p className="text-[#5A5A5A] text-lg leading-relaxed max-w-4xl">
            Relax at our oxygen bar while breathing concentrated oxygen through a comfortable nasal cannula. Choose from aromatherapy-infused options to enhance your experience. Sessions are calming and rejuvenating - many clients use this time to unwind, read, or simply enjoy the boost of pure oxygen.
          </p>
        </div>
      </section>

      {/* Walk-in badge */}
      <section className="py-10 bg-[#F5F7FA]">
        <div className="max-w-[1140px] mx-auto px-4 flex flex-wrap items-center justify-center gap-4">
          {service.walkIn && (
            <span className="bg-gradient-to-r from-[#00B4D8] to-[#0096B7] text-white rounded-full px-6 py-2 text-sm font-black uppercase tracking-wider shadow-md">
              Walk-ins Welcome
            </span>
          )}
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-[var(--font-display)] tracking-tight accent-underline-center text-[#0B2447] mb-8 text-center">
            Related Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {relatedServices.map((rs) => (
              <Link
                key={rs.id}
                href={`/services/${rs.slug}`}
                className="bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)] rounded-2xl hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 border-b-4 border-transparent hover:border-[#00B4D8] p-6 group"
              >
                <h3 className="text-lg font-bold text-[#0B2447] mb-2 group-hover:text-[#00B4D8] transition-colors">
                  {rs.name}
                </h3>
                <p className="text-sm text-[#5A5A5A] mb-3">
                  {rs.shortDescription}
                </p>
                <span className="text-[#00B4D8] text-sm font-bold uppercase tracking-wider">
                  Learn More &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="grain py-16 md:py-20 relative overflow-hidden bg-gradient-to-br from-[#0B2447] to-[#00B4D8]">
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-[#00B4D8]/8 blur-[100px] pointer-events-none" />
        <div className="relative z-10 max-w-[1140px] mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-[var(--font-display)] tracking-tight text-white mb-4">
            Ready to Try {service.name}?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Book your session today or walk in during business hours. No referral needed.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#00B4D8] text-white rounded-full px-8 py-4 font-black text-sm uppercase tracking-wider shadow-[0_8px_30px_rgba(0,180,216,0.25)] hover:scale-105 hover:shadow-[0_0_40px_rgba(0,180,216,0.5)] transition-all duration-300"
          >
            BOOK APPOINTMENT
          </Link>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 md:py-20 bg-[#F5F7FA]">
        <div className="max-w-2xl mx-auto px-4">
          <ContactForm source="oxygen-therapy-page" />
        </div>
      </section>
    </>
  );
}
