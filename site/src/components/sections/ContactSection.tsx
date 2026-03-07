import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { SITE } from "@/lib/constants";

export default function ContactSection() {
  return (
    <section className="py-16 md:py-20 bg-brand-surface">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-3">
            Visit Us
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="bg-brand-elevated border border-brand-border rounded-xl p-8 space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-brand-gold shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-brand-white mb-1">Address</h3>
                <a
                  href={SITE.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-muted hover:text-brand-gold transition-colors"
                >
                  {SITE.fullAddress}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-brand-gold shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-brand-white mb-1">Phone</h3>
                <a
                  href={SITE.phoneHref}
                  className="text-brand-muted hover:text-brand-gold transition-colors"
                >
                  {SITE.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-brand-gold shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-brand-white mb-1">Email</h3>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-brand-muted hover:text-brand-gold transition-colors"
                >
                  {SITE.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-brand-gold shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-brand-white mb-1">Hours</h3>
                <p className="text-brand-muted">
                  {SITE.hours.weekday.label}: {SITE.hours.weekday.open} -{" "}
                  {SITE.hours.weekday.close}
                </p>
                <p className="text-brand-muted">
                  {SITE.hours.weekend.label}: {SITE.hours.weekend.open} -{" "}
                  {SITE.hours.weekend.close}
                </p>
              </div>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="rounded-xl overflow-hidden ring-1 ring-brand-gold/30 min-h-[320px]">
            <iframe
              title="Oxygen Wellness Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.6!2d-112.186!3d33.658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s20265+N+59th+Ave+b1%2C+Glendale%2C+AZ+85308!5e0!3m2!1sen!2sus!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "320px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
