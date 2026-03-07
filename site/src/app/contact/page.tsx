import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
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
      <section className="relative bg-gradient-to-br from-brand-dark to-brand-primary py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-cyan-100 max-w-2xl mx-auto">
            Have a question or ready to book? Reach out and we will get back to
            you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-brand-dark mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-brand-dark mb-6">
                Contact Information
              </h2>
              <div className="bg-brand-light rounded-xl p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-brand-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-brand-dark mb-1">
                      Address
                    </h3>
                    <a
                      href={SITE.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-text/70 hover:text-brand-accent transition-colors"
                    >
                      {SITE.address}
                      <br />
                      {SITE.city}, {SITE.state} {SITE.zip}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-brand-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-brand-dark mb-1">
                      Phone
                    </h3>
                    <a
                      href={SITE.phoneHref}
                      className="text-brand-text/70 hover:text-brand-accent transition-colors"
                    >
                      {SITE.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-brand-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-brand-dark mb-1">
                      Email
                    </h3>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="text-brand-text/70 hover:text-brand-accent transition-colors"
                    >
                      {SITE.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-brand-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-brand-dark mb-1">
                      Hours
                    </h3>
                    <p className="text-brand-text/70">
                      {SITE.hours.weekday.label}: {SITE.hours.weekday.open} -{" "}
                      {SITE.hours.weekday.close}
                    </p>
                    <p className="text-brand-text/70">
                      {SITE.hours.weekend.label}: {SITE.hours.weekend.open} -{" "}
                      {SITE.hours.weekend.close}
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <a
                  href={SITE.phoneHref}
                  className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-brand-primary px-6 py-3 font-semibold text-white hover:bg-brand-secondary transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
                <a
                  href={SITE.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 rounded-lg border-2 border-brand-primary px-6 py-3 font-semibold text-brand-primary hover:bg-brand-primary hover:text-white transition-colors"
                >
                  <MapPin className="w-5 h-5" />
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Embed */}
      <section className="bg-white pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="rounded-xl overflow-hidden shadow-md">
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
