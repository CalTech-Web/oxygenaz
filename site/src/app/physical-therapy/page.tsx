import type { Metadata } from "next";
import Link from "next/link";
import {
  Check,
  Stethoscope,
  Clock,
  Zap,
  Target,
  Hand,
  CircleDot,
  Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Physical Therapy & Sports Medicine",
  description:
    "Expert physical therapy and sports medicine with Dr. Clint Borman. 25+ years of experience in spinal manipulation, dry needling, cupping, and more in Glendale, AZ.",
};

const techniques = [
  {
    name: "Spinal Manipulation",
    description:
      "Targeted joint mobilization to restore movement and reduce pain",
    icon: Target,
  },
  {
    name: "Dry Needling",
    description:
      "Precise trigger point therapy to release tension and improve function",
    icon: Zap,
  },
  {
    name: "Cupping",
    description:
      "Myofascial decompression to improve blood flow and tissue mobility",
    icon: CircleDot,
  },
  {
    name: "Taping",
    description:
      "Kinesiology taping for support, stability, and movement correction",
    icon: Layers,
  },
  {
    name: "Scraping",
    description:
      "Instrument-assisted soft tissue mobilization for scar tissue and adhesions",
    icon: Hand,
  },
  {
    name: "1:1 Stretching & Exercise",
    description:
      "Individualized therapeutic exercise and manual stretching programs",
    icon: Stethoscope,
  },
];

const sessionFormats = [
  {
    duration: "25 Minutes",
    description:
      "Focused treatment session ideal for targeted concerns, follow-ups, and maintenance visits. Get hands-on care that addresses your primary issue efficiently.",
    best: "Follow-ups, single-area concerns, maintenance",
  },
  {
    duration: "55 Minutes",
    description:
      "Comprehensive treatment session for complex conditions, multiple areas of concern, or initial evaluations. Allows time for thorough assessment and multi-technique treatment.",
    best: "Initial evaluations, complex conditions, full-body treatment",
  },
];

export default function PhysicalTherapyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-brand-dark to-brand-primary py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Physical Therapy & Sports Medicine
          </h1>
          <p className="text-lg md:text-xl text-cyan-100 max-w-3xl mx-auto mb-8">
            Dr. Clint Borman brings over 25 years of hands-on physical therapy
            experience, combining proven manual techniques with modern wellness
            therapies to get you moving and feeling your best.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-lg bg-brand-accent px-8 py-3 text-lg font-semibold text-white hover:bg-cyan-500 transition-colors"
          >
            Book an Appointment
          </Link>
        </div>
      </section>

      {/* About Dr. Borman */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">
                About Dr. Borman
              </h2>
              <p className="text-brand-text/80 text-lg mb-4">
                Dr. Clint Borman earned his Doctor of Physical Therapy degree
                from the University of St. Augustine in 1997 and has dedicated
                over 25 years to helping patients recover, perform, and thrive.
              </p>
              <p className="text-brand-text/80 text-lg mb-4">
                As a former collegiate baseball player, Dr. Borman understands
                the demands athletes place on their bodies - and the
                determination it takes to return to peak performance after
                injury. That firsthand experience drives his patient-centered
                approach.
              </p>
              <p className="text-brand-text/80 text-lg mb-6">
                Throughout his career, he has led residency programs, trained
                staff across multiple clinics, and guided organizations through
                mergers and acquisitions - all while maintaining his primary
                focus on one-on-one patient care.
              </p>
            </div>

            {/* Decorative Element */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-80 h-80">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-accent/20 to-brand-primary/20" />
                <div className="absolute inset-8 rounded-full bg-gradient-to-br from-brand-accent/30 to-brand-primary/30" />
                <div className="absolute inset-16 rounded-full bg-gradient-to-br from-brand-accent/40 to-brand-primary/40 flex items-center justify-center">
                  <Stethoscope className="w-20 h-20 text-brand-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Quote */}
      <section className="py-12 bg-brand-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <blockquote className="text-xl md:text-2xl text-brand-dark font-medium italic leading-relaxed">
            &ldquo;Empowers patients through education, delivers care with
            kindness, humor, and a commitment to your needs.&rdquo;
          </blockquote>
          <p className="mt-4 text-brand-primary font-semibold">
            - Dr. Clint Borman
          </p>
        </div>
      </section>

      {/* PT Techniques Grid */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-3">
              Treatment Techniques
            </h2>
            <p className="text-lg text-brand-text/70 max-w-2xl mx-auto">
              A comprehensive toolkit of manual therapy and rehabilitation
              techniques, each selected based on your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {techniques.map((technique) => (
              <div
                key={technique.name}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border-t-4 border-brand-primary p-6"
              >
                <div className="mb-4 w-12 h-12 rounded-lg bg-brand-accent/10 flex items-center justify-center">
                  <technique.icon className="w-6 h-6 text-brand-primary" />
                </div>
                <h3 className="text-xl font-semibold text-brand-dark mb-2">
                  {technique.name}
                </h3>
                <p className="text-brand-text/70">{technique.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Session Formats */}
      <section className="py-16 md:py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-3">
              Session Formats
            </h2>
            <p className="text-lg text-brand-text/70">
              Choose the session length that fits your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {sessionFormats.map((session) => (
              <div
                key={session.duration}
                className="bg-white rounded-xl shadow-md p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-8 h-8 text-brand-accent" />
                  <h3 className="text-2xl font-bold text-brand-dark">
                    {session.duration}
                  </h3>
                </div>
                <p className="text-brand-text/70 mb-4">
                  {session.description}
                </p>
                <p className="text-sm font-medium text-brand-primary">
                  Best for: {session.best}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Callout */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">
            Integrated Wellness Approach
          </h2>
          <p className="text-lg text-brand-text/80 mb-8 max-w-3xl mx-auto">
            What sets Oxygen Wellness apart is the ability to combine physical
            therapy with our core wellness services. Your treatment plan may
            include cryotherapy for inflammation, red light therapy for tissue
            repair, compression therapy for recovery, or infrared sauna for pain
            relief - all under one roof.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Cryotherapy", "Red Light Therapy", "Compression Therapy", "Infrared Sauna"].map(
              (service) => (
                <div
                  key={service}
                  className="bg-brand-light rounded-lg p-4 flex items-center justify-center"
                >
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-brand-accent shrink-0" />
                    <span className="text-sm font-medium text-brand-dark">
                      {service}
                    </span>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Promo */}
      <section className="py-12 bg-gradient-to-r from-brand-primary to-brand-secondary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Free Core Service with Your First PT Appointment
          </h2>
          <p className="text-cyan-100 text-lg mb-6">
            Experience the full spectrum of what Oxygen Wellness has to offer.
            Book your first physical therapy session and receive a complimentary
            core wellness service.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-lg bg-white px-8 py-3 text-lg font-semibold text-brand-primary hover:bg-cyan-50 transition-colors"
          >
            Book Your Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
