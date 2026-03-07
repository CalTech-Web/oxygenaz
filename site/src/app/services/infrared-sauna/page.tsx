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
  Flame,
} from "lucide-react";
import { allServices } from "@/data/services";
import { SITE } from "@/lib/constants";

const service = allServices.find((s) => s.slug === "infrared-sauna")!;

const relatedSlugs = ["cryotherapy", "red-light-therapy", "compression-therapy"];
const relatedServices = allServices.filter((s) => relatedSlugs.includes(s.slug));

const idealFor = [
  "People seeking effective stress management and relaxation",
  "Chronic pain sufferers looking for deep-tissue heat relief",
  "Those interested in natural detoxification support",
  "Anyone wanting to improve skin health and appearance",
];

const whatToExpect =
  "Your session lasts 30 to 45 minutes in a private sauna room. Our infrared saunas operate at a comfortable temperature that is lower than traditional saunas while delivering superior therapeutic benefits. Towels are provided, and you can control the temperature to your preference. Most clients feel deeply relaxed and refreshed afterward.";

export const metadata: Metadata = {
  title: service.name,
  description: service.shortDescription,
};

export default function InfraredSaunaPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-brand-dark via-brand-secondary to-brand-primary py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(6,182,212,0.15),_transparent_60%)]" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Flame className="w-5 h-5 text-cyan-300" />
            <span className="text-cyan-100 text-sm font-medium">Core Service</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {service.name}
          </h1>
          <p className="text-lg md:text-xl text-cyan-100 max-w-2xl mx-auto mb-8">
            {service.shortDescription}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-brand-accent px-8 py-3 text-lg font-semibold text-white hover:bg-cyan-500 transition-colors"
            >
              <Calendar className="w-5 h-5" />
              Book Appointment
            </Link>
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white px-8 py-3 text-lg font-semibold text-white hover:bg-white/10 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call {SITE.phone}
            </a>
          </div>
        </div>
      </section>

      {/* What is it? */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">
            What is {service.name}?
          </h2>
          <p className="text-lg text-brand-text/80 leading-relaxed">
            {service.description}
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-20 bg-brand-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-10 text-center">
            Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.benefits.map((benefit, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-white rounded-xl p-5 shadow-sm"
              >
                <div className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-brand-primary/10 flex items-center justify-center">
                  <Check className="w-4 h-4 text-brand-primary" />
                </div>
                <span className="text-brand-text">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who is this for? */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-8">
            Who is this for?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {idealFor.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <Users className="w-5 h-5 text-brand-accent mt-0.5 flex-shrink-0" />
                <span className="text-brand-text/80">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="py-16 md:py-20 bg-brand-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">
            What to Expect
          </h2>
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-brand-primary mt-1 flex-shrink-0" />
              <p className="text-lg text-brand-text/80 leading-relaxed">
                {whatToExpect}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Walk-in badge */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
            {service.walkIn && (
              <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-5 py-2.5">
                <MapPin className="w-5 h-5 text-green-600" />
                <span className="text-green-800 font-medium">Walk-ins Welcome</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 md:py-20 bg-brand-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-10 text-center">
            Related Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedServices.map((rs) => (
              <Link
                key={rs.id}
                href={`/services/${rs.slug}`}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group"
              >
                <h3 className="text-lg font-semibold text-brand-dark mb-2 group-hover:text-brand-primary transition-colors">
                  {rs.name}
                </h3>
                <p className="text-sm text-brand-text/70 mb-3">
                  {rs.shortDescription}
                </p>
                <span className="inline-flex items-center gap-1 text-brand-accent text-sm font-medium">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-brand-dark to-brand-primary">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Try {service.name}?
          </h2>
          <p className="text-lg text-cyan-100 mb-8">
            Book your session today or walk in during business hours. No referral needed.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-brand-accent px-8 py-3 text-lg font-semibold text-white hover:bg-cyan-500 transition-colors"
            >
              <Calendar className="w-5 h-5" />
              Book Appointment
            </Link>
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white px-8 py-3 text-lg font-semibold text-white hover:bg-white/10 transition-colors"
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
