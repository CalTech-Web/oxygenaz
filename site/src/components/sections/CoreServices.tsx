import Link from "next/link";
import {
  Snowflake,
  Flame,
  Wind,
  Sun,
  Waves,
  type LucideIcon,
} from "lucide-react";
import { coreServices } from "@/data/services";

const iconMap: Record<string, LucideIcon> = {
  Snowflake,
  Flame,
  Wind,
  Sun,
  Waves,
};

export default function CoreServices() {
  return (
    <section className="py-16 md:py-20 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-3">
            Core Wellness Services
          </h2>
          <p className="text-lg text-brand-muted">
            Walk-ins welcome. No appointment needed.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreServices.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className="bg-brand-surface border border-brand-border rounded-xl p-6 flex flex-col transition-all duration-300 hover:border-brand-gold/40 hover:shadow-[0_0_20px_rgba(201,168,76,0.05)]"
              >
                <div className="mb-4 w-12 h-12 rounded-full bg-brand-elevated flex items-center justify-center">
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
