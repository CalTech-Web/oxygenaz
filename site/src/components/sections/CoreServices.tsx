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
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-3">
            Core Wellness Services
          </h2>
          <p className="text-lg text-brand-text/70">
            Walk-ins welcome. No appointment needed.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreServices.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border-t-4 border-brand-primary p-6 flex flex-col"
              >
                <div className="mb-4">
                  {Icon && (
                    <Icon className="w-10 h-10 text-brand-primary" />
                  )}
                </div>
                <h3 className="text-xl font-semibold text-brand-dark mb-2">
                  {service.name}
                </h3>
                <p className="text-brand-text/70 mb-4 flex-1">
                  {service.shortDescription}
                </p>
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
