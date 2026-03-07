import Link from "next/link";
import { Check, Stethoscope } from "lucide-react";

const techniques = [
  "Spinal Manipulation",
  "Dry Needling",
  "Cupping Therapy",
  "Kinesiology Taping",
  "Manual Therapy",
  "Therapeutic Exercise",
];

export default function PhysicalTherapySection() {
  return (
    <section className="py-16 md:py-20 bg-brand-surface">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-4">
              Expert Physical Therapy
            </h2>
            <p className="text-brand-muted text-lg mb-6">
              Dr. Clint Borman brings over 25 years of experience in physical
              therapy, offering a comprehensive approach that combines hands-on
              techniques with advanced modalities. From spinal manipulation and
              dry needling to cupping and taping, every treatment plan is
              customized to help you move better and feel your best.
            </p>

            <ul className="space-y-3 mb-8">
              {techniques.map((technique) => (
                <li key={technique} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-brand-gold shrink-0" />
                  <span className="text-brand-muted">{technique}</span>
                </li>
              ))}
            </ul>

            <div className="bg-brand-gold/10 border border-brand-gold/30 rounded-lg p-4 mb-8">
              <p className="text-brand-gold font-semibold text-sm">
                Free core service with your first PT appointment
              </p>
            </div>

            <Link
              href="/physical-therapy"
              className="inline-block rounded-lg bg-brand-gold px-8 py-3 text-lg font-semibold text-brand-bg hover:bg-brand-gold-light transition-colors"
            >
              Learn More
            </Link>
          </div>

          {/* Decorative Element - Gold-tinted rings */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 rounded-full border border-brand-gold/20" />
              <div className="absolute inset-6 rounded-full border border-brand-gold/25" />
              <div className="absolute inset-12 rounded-full border border-brand-gold/30" />
              <div className="absolute inset-18 rounded-full bg-brand-gold/5 border border-brand-gold/40 flex items-center justify-center">
                <Stethoscope className="w-20 h-20 text-brand-gold" />
              </div>
              {/* Subtle glow */}
              <div className="absolute inset-0 rounded-full bg-brand-gold/5 blur-[40px] pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
