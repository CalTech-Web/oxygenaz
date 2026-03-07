import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Oxygen Wellness & Physical Therapy in Glendale, AZ. Book appointments, ask questions, or visit us at 20265 N. 59th Ave. Suite B-1.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#10173E] py-20 md:py-28">
        <div className="max-w-[1140px] mx-auto px-4 text-center">
          <h1
            className="text-[80px] font-extrabold text-white mb-4 leading-tight"
            style={{ textShadow: "4px 4px 0px rgba(0,0,0,0.25)" }}
          >
            Contact Us
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
            Have a question or ready to book? Reach out and we will get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <ContactForm source="contact-page" />
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-[40px] font-extrabold text-[#10173E] mb-8">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#EDF2F9] rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#004AAD]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#10173E] mb-1">Address</h3>
                    <a
                      href={SITE.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#7A7A7A] hover:text-[#004AAD] transition-colors"
                    >
                      {SITE.address}<br />
                      {SITE.city}, {SITE.state} {SITE.zip}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#EDF2F9] rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#004AAD]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#10173E] mb-1">Phone</h3>
                    <a
                      href={SITE.phoneHref}
                      className="text-[#7A7A7A] hover:text-[#004AAD] transition-colors"
                    >
                      {SITE.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#EDF2F9] rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#004AAD]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#10173E] mb-1">Email</h3>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="text-[#7A7A7A] hover:text-[#004AAD] transition-colors"
                    >
                      {SITE.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#EDF2F9] rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#004AAD]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#10173E] mb-1">Hours</h3>
                    <p className="text-[#7A7A7A]">
                      {SITE.hours.weekday.label}: {SITE.hours.weekday.open} - {SITE.hours.weekday.close}
                    </p>
                    <p className="text-[#7A7A7A]">
                      {SITE.hours.weekend.label}: {SITE.hours.weekend.open} - {SITE.hours.weekend.close}
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href={SITE.phoneHref}
                  className="flex-1 flex items-center justify-center gap-2 bg-[#004AAD] text-white rounded-full px-6 py-3 font-bold text-sm uppercase border-2 border-[#5CE1E6] hover:bg-[#0053DA] transition-colors"
                >
                  CALL NOW
                </a>
                <a
                  href={SITE.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-white text-[#004AAD] rounded-full px-6 py-3 font-bold text-sm uppercase border-2 border-[#004AAD] hover:bg-[#004AAD] hover:text-white transition-colors"
                >
                  GET DIRECTIONS
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Embed */}
      <section className="bg-[#EDF2F9] py-16 md:py-20">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="rounded-xl overflow-hidden shadow-[1px_1px_15px_0px_rgba(0,0,0,0.15)]">
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
        </div>
      </section>
    </>
  );
}
