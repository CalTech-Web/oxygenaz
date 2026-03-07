import type { Metadata } from "next";
import Link from "next/link";
import {
  Check,
  Phone,
  ArrowRight,
  Clock,
  MapPin,
  Calendar,
  Users,
  Sun,
} from "lucide-react";
import { allServices } from "@/data/services";
import { SITE } from "@/lib/constants";

const service = allServices.find((s) => s.slug === "red-light-therapy")!;

const relatedSlugs = ["infrared-sauna", "cryotherapy", "anti-aging-peptides"];
const relatedServices = allServices.filter((s) => relatedSlugs.includes(s.slug));

const idealFor = [
  "Those with skin concerns like acne, wrinkles, or uneven tone",
  "People experiencing joint pain and stiffness",
  "Individuals recovering from tissue injuries or surgery",
  "Anyone interested in anti-aging and skin rejuvenation",
];

const whatToExpect =
  "Your session lasts 15 to 20 minutes standing or lying near our professional-grade red light panels. The treatment is completely non-invasive and painless - you will feel a gentle warmth on your skin. No special preparation is needed. Many clients notice improvements in skin tone and reduced pain after just a few sessions.";

export const metadata: Metadata = {
  title: service.name,
  description: service.shortDescription,
};

export default function RedLightTherapyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-brand-surface py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(201,168,76,0.08),_transparent_60%)]" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-brand-gold/10 backdrop-blur-sm border border-brand-gold/30 rounded-full px-4 py-2 mb-6">
            <Sun className="w-5 h-5 text-brand-gold" />
            <span className="text-brand-gold text-sm font-medium">Core Service</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-white mb-4">
            {service.name}
          </h1>
          <p className="text-lg md:text-xl text-brand-muted max-w-2xl mx-auto mb-8">
            {service.shortDescription}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-brand-gold px-8 py-3 text-lg font-semibold text-brand-bg hover:bg-brand-gold-light transition-colors"
            >
              <Calendar className="w-5 h-5" />
              Book Appointment
            </Link>
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center gap-2 rounded-lg border-2 border-brand-gold px-8 py-3 text-lg font-semibold text-brand-gold hover:bg-brand-gold hover:text-brand-bg transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call {SITE.phone}
            </a>
          </div>
        </div>
      </section>

      {/* What is it? */}
      <section className="py-16 md:py-20 bg-brand-bg">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-6">
            What is {service.name}?
          </h2>
          <p className="text-lg text-brand-muted leading-relaxed">
            {service.description}
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-20 bg-brand-bg">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-10 text-center">
            Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.benefits.map((benefit, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-brand-surface border border-brand-border rounded-xl p-5"
              >
                <div className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-brand-gold/10 flex items-center justify-center">
                  <Check className="w-4 h-4 text-brand-gold" />
                </div>
                <span className="text-brand-muted">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who is this for? */}
      <section className="py-16 md:py-20 bg-brand-surface">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-8">
            Who is this for?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {idealFor.map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-brand-surface border border-brand-border rounded-xl p-4">
                <Users className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                <span className="text-brand-muted">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="py-16 md:py-20 bg-brand-bg">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-6">
            What to Expect
          </h2>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-8">
            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-brand-gold mt-1 flex-shrink-0" />
              <p className="text-lg text-brand-muted leading-relaxed">
                {whatToExpect}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Walk-in badge */}
      <section className="py-12 md:py-16 bg-brand-surface">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
            {service.walkIn && (
              <div className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/30 rounded-full px-5 py-2.5">
                <MapPin className="w-5 h-5 text-brand-gold" />
                <span className="text-brand-gold font-medium">Walk-ins Welcome</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 md:py-20 bg-brand-bg">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-10 text-center">
            Related Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedServices.map((rs) => (
              <Link
                key={rs.id}
                href={`/services/${rs.slug}`}
                className="bg-brand-surface border border-brand-border rounded-xl p-6 hover:border-brand-gold/40 transition-colors group"
              >
                <h3 className="text-lg font-semibold text-brand-white mb-2 group-hover:text-brand-gold transition-colors">
                  {rs.name}
                </h3>
                <p className="text-sm text-brand-muted mb-3">
                  {rs.shortDescription}
                </p>
                <span className="inline-flex items-center gap-1 text-brand-gold text-sm font-medium">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-brand-surface">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-4">
            Ready to Try {service.name}?
          </h2>
          <p className="text-lg text-brand-muted mb-8">
            Book your session today or walk in during business hours. No referral needed.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-brand-gold px-8 py-3 text-lg font-semibold text-brand-bg hover:bg-brand-gold-light transition-colors"
            >
              <Calendar className="w-5 h-5" />
              Book Appointment
            </Link>
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center gap-2 rounded-lg border-2 border-brand-gold px-8 py-3 text-lg font-semibold text-brand-gold hover:bg-brand-gold hover:text-brand-bg transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call {SITE.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
