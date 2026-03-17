import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { coreServices } from "@/data/services";
import FadeIn from "@/components/ui/FadeIn";

export default function CoreServices() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-white to-[#F0F5FA]">
      <div className="mx-auto max-w-7xl px-4 ">
        {/* Section heading */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="font-[var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#061527] tracking-tight">
              Core Services
            </h2>
            <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#0066B3] to-[#061527]" />
          </div>
          <span className="bg-gradient-to-r from-[#0066B3] to-[#00518F] text-white text-sm font-black rounded-full px-6 py-2.5 shadow-[0_4px_20px_rgba(0,180,216,0.35)] hidden sm:inline-block">
            $20 on Fridays
          </span>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {coreServices.map((service, index) => (
            <FadeIn
              key={service.id}
              delay={index * 0.08}
              className={`group relative overflow-hidden rounded-2xl ${
                index === 0 ? "sm:col-span-2 sm:row-span-2 min-h-[320px] md:min-h-[400px]" : "min-h-[220px] md:min-h-[260px]"
              }`}
            >
              <Link href={`/services/${service.slug}`} className="block h-full">
                <Image
                  src={`/images/services/${service.slug}.jpg`}
                  alt={service.name}
                  fill
                  sizes={index === 0 ? "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 66vw" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"}
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#061527]/90 via-[#061527]/40 to-transparent transition-opacity duration-300 group-hover:from-[#061527]/95" />

                <div className="absolute top-3 right-3 z-10">
                  <span className="inline-block rounded-full bg-[#0066B3] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                    Core
                  </span>
                </div>

                {service.promo && (
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-block rounded-full bg-[#0066B3] px-3 py-1 text-xs font-bold text-white">
                      {service.promo}
                    </span>
                  </div>
                )}

                <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                  <h3 className={`font-[var(--font-display)] font-bold text-white ${
                    index === 0 ? "text-2xl md:text-3xl" : "text-lg md:text-xl"
                  }`}>
                    {service.name}
                  </h3>
                  <p className={`mt-1 text-white/70 line-clamp-2 ${
                    index === 0 ? "text-base" : "text-sm"
                  }`}>
                    {service.shortDescription}
                  </p>

                  <div className="mt-3 flex items-center gap-1.5 text-[#0066B3] opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    <span className="text-sm font-bold">Learn More</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0066B3] to-[#061527] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                </div>
              </Link>
            </FadeIn>
          ))}

          {/* CTA card - fills empty grid slot */}
          <FadeIn
            delay={coreServices.length * 0.08}
            className="group relative overflow-hidden rounded-2xl min-h-[220px] md:min-h-[260px]"
          >
            <Link href="/contact" className="block h-full">
              <Image
                src="/images/content/weight-loss-cta.jpg"
                alt="Book your session today"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#061527]/70" />
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-5 text-center">
                <h3 className="font-[var(--font-display)] text-lg md:text-xl font-bold text-white mb-2">
                  Ready to Start?
                </h3>
                <p className="text-white/70 text-sm mb-4">
                  Book your first session today
                </p>
                <span className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0066B3] to-[#00518F] text-white rounded-full px-6 py-2.5 text-sm font-black uppercase tracking-wider shadow-[0_4px_20px_rgba(0,180,216,0.35)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(0,180,216,0.5)]">
                  Book Now
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </FadeIn>
        </div>

        {/* Promo banner */}
        <div className="mt-8 text-center">
          <p className="text-[#718096] text-base">
            Get a core service for <span className="font-bold text-[#0066B3]">FREE</span> when you book an appointment for the first time.
          </p>
        </div>
      </div>
    </section>
  );
}
