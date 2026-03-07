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
    <section className="py-16 md:py-20 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-3">
            Additional Services
          </h2>
          <p className="text-lg text-brand-text/70">
            Appointment required for these specialized treatments.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalServices.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col border border-brand-accent/20"
              >
                <div className="mb-4 w-12 h-12 rounded-lg bg-brand-accent/10 flex items-center justify-center">
                  {Icon && (
                    <Icon className="w-6 h-6 text-brand-accent" />
                  )}
                </div>
                <h3 className="text-xl font-semibold text-brand-dark mb-2">
                  {service.name}
                </h3>
                <p className="text-brand-text/70 mb-4 flex-1">
                  {service.shortDescription}
                </p>
                {service.price && (
                  <p className="text-sm font-medium text-brand-primary mb-3">
                    {service.price}
                  </p>
                )}
                <Link
                  href={`/services/${service.slug}`}
                  className="text-brand-accent font-medium hover:text-brand-primary transition-colors"
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
