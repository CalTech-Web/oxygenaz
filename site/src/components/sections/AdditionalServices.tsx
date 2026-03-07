import Link from "next/link";
import {
  CircleDot,
  Droplets,
  Sparkles,
  TrendingDown,
  type LucideIcon,
} from "lucide-react";
import { additionalServices } from "@/data/services";

const iconMap: Record<string, LucideIcon> = {
  CircleDot,
  Droplets,
  Sparkles,
  TrendingDown,
};

export default function AdditionalServices() {
  return (
    <section className="py-16 md:py-20 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-3">
            Additional Services
          </h2>
          <p className="text-lg text-brand-gold/70">
            Appointment required for these specialized treatments.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalServices.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className="bg-brand-surface border border-brand-border rounded-xl p-6 flex flex-col transition-all duration-300 hover:border-brand-gold/40 hover:shadow-[0_0_20px_rgba(201,168,76,0.05)]"
              >
                <div className="mb-4 w-12 h-12 rounded-lg bg-brand-gold/10 flex items-center justify-center">
                  {Icon && (
                    <Icon className="w-6 h-6 text-brand-gold" />
                  )}
                </div>
                <h3 className="text-xl font-semibold text-brand-white mb-2">
                  {service.name}
                </h3>
                <p className="text-brand-muted mb-4 flex-1">
                  {service.shortDescription}
                </p>
                {service.price && (
                  <p className="text-sm font-medium text-brand-gold mb-3">
                    {service.price}
                  </p>
                )}
                <Link
                  href={`/services/${service.slug}`}
                  className="text-brand-gold font-medium hover:text-brand-gold-light transition-colors"
                >
                  Learn More &rarr;
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
