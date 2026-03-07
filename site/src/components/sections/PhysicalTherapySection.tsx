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
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              Expert Physical Therapy
            </h2>
            <p className="text-brand-text/80 text-lg mb-6">
              Dr. Clint Borman brings over 25 years of experience in physical
              therapy, offering a comprehensive approach that combines hands-on
              techniques with advanced modalities. From spinal manipulation and
              dry needling to cupping and taping, every treatment plan is
              customized to help you move better and feel your best.
            </p>

            <ul className="space-y-3 mb-8">
              {techniques.map((technique) => (
                <li key={technique} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-brand-accent shrink-0" />
                  <span className="text-brand-text">{technique}</span>
                </li>
              ))}
            </ul>

            <div className="bg-brand-light border border-brand-accent/30 rounded-lg p-4 mb-8">
              <p className="text-brand-primary font-semibold text-sm">
                Free core service with your first PT appointment
              </p>
            </div>

            <Link
              href="/physical-therapy"
              className="inline-block rounded-lg bg-brand-primary px-8 py-3 text-lg font-semibold text-white hover:bg-brand-secondary transition-colors"
            >
              Learn More
            </Link>
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
  );
}
