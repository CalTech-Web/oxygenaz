import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { allServices } from "@/data/services";
import ContactForm from "@/components/ContactForm";

const service = allServices.find((s) => s.slug === "anti-aging-peptides")!;

const relatedSlugs = ["red-light-therapy", "iv-infusions", "weight-loss"];
const relatedServices = allServices.filter((s) => relatedSlugs.includes(s.slug));

export const metadata: Metadata = {
  title: service.name,
  description: service.shortDescription,
};

export default function AntiAgingPeptidesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/services/anti-aging-peptides.jpg"
            alt={service.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#10173E]/75" />
        </div>
        <div className="relative z-10 max-w-[1140px] mx-auto px-4 text-center py-20">
          <h1
            className="text-[60px] font-extrabold text-white mb-6 leading-tight"
            style={{ textShadow: "4px 4px 0px rgba(0,0,0,0.25)" }}
          >
            {service.name}
          </h1>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#004AAD] rounded-full px-8 py-3 text-sm font-bold uppercase hover:bg-gray-100 transition-colors"
          >
            BOOK TODAY
          </Link>
        </div>
      </section>

      {/* What is it */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-4">
          <h2 className="text-[40px] font-extrabold text-[#10173E] mb-6">
            What is {service.name}?
          </h2>
          <p className="text-[#7A7A7A] text-lg leading-relaxed max-w-4xl">
            {service.description}
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-20 bg-[#EDF2F9]">
        <div className="max-w-[1140px] mx-auto px-4">
          <h2 className="text-[40px] font-extrabold text-[#10173E] mb-10 text-center">
            Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {service.benefits.map((benefit, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-[1px_1px_15px_0px_rgba(0,0,0,0.15)] p-5 flex items-start gap-3"
              >
                <svg className="w-5 h-5 text-[#004AAD] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[#7A7A7A]">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-4">
          <h2 className="text-[40px] font-extrabold text-[#10173E] mb-6">
            What to Expect
          </h2>
          <p className="text-[#7A7A7A] text-lg leading-relaxed max-w-4xl">
            Your journey begins with a thorough consultation to understand your goals and health history. Based on your needs, we design a personalized peptide protocol that targets your specific concerns - whether that is skin rejuvenation, energy, muscle maintenance, or overall anti-aging support. Follow-up visits track your progress and allow adjustments to optimize results.
          </p>
        </div>
      </section>

      {/* Appointment required */}
      <section className="py-10 bg-[#EDF2F9]">
        <div className="max-w-[1140px] mx-auto px-4 flex flex-wrap items-center justify-center gap-4">
          <span className="bg-[#10173E] text-white rounded-full px-6 py-2 text-sm font-bold uppercase">
            Appointment Required
          </span>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-4">
          <h2 className="text-[40px] font-extrabold text-[#10173E] mb-10 text-center">
            Related Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {relatedServices.map((rs) => (
              <Link
                key={rs.id}
                href={`/services/${rs.slug}`}
                className="bg-white rounded-xl shadow-[1px_1px_15px_0px_rgba(0,0,0,0.15)] p-6 hover:shadow-lg transition-shadow group"
              >
                <h3 className="text-lg font-bold text-[#10173E] mb-2 group-hover:text-[#004AAD] transition-colors">
                  {rs.name}
                </h3>
                <p className="text-sm text-[#7A7A7A] mb-3">
                  {rs.shortDescription}
                </p>
                <span className="text-[#004AAD] text-sm font-bold uppercase">
                  Learn More &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-[#10173E]">
        <div className="max-w-[1140px] mx-auto px-4 text-center">
          <h2 className="text-[40px] font-extrabold text-white mb-4">
            Ready to Try {service.name}?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Schedule your consultation today. No referral or prescription needed.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#004AAD] rounded-full px-8 py-3 text-sm font-bold uppercase hover:bg-gray-100 transition-colors"
          >
            BOOK APPOINTMENT
          </Link>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 md:py-20 bg-[#EDF2F9]">
        <div className="max-w-2xl mx-auto px-4">
          <ContactForm source="anti-aging-peptides-page" />
        </div>
      </section>
    </>
  );
}
