import Link from "next/link";

const services = [
  {
    title: "Cryotherapy",
    slug: "cryotherapy",
    image: "/images/services/cryotherapy.jpg",
  },
  {
    title: "Infrared Sauna",
    slug: "infrared-sauna",
    image: "/images/services/infrared-sauna.jpg",
  },
  {
    title: "Oxygen Therapy",
    slug: "oxygen-therapy",
    image: "/images/services/oxygen-therapy.jpg",
  },
  {
    title: "Red Light Therapy",
    slug: "red-light-therapy",
    image: "/images/services/red-light-therapy.jpg",
  },
  {
    title: "Compression Therapy",
    slug: "compression-therapy",
    image: "/images/services/compression-therapy.webp",
  },
];

export default function CoreServices() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1140px] mx-auto px-4">
        {/* Heading row */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-[40px] font-extrabold text-[#10173E] leading-[48px] tracking-[0.4px]">
            Core Services
          </h2>
          <span className="bg-[#F01717] text-white text-sm font-bold rounded-full px-4 py-1.5">
            $20 on Fridays
          </span>
        </div>

        {/* Horizontal scrollable row */}
        <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 scrollbar-hide">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="relative min-w-[300px] flex-shrink-0 h-[407px] rounded-xl overflow-hidden snap-start group"
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                style={{ backgroundImage: `url('${service.image}')` }}
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-[#10173E]/50" />

              {/* Content at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-5 pb-7">
                <h3
                  className="text-white text-[22px] font-extrabold mb-1"
                  style={{
                    textShadow: "2.9px 2.96px 0px rgba(0,0,0,0.25)",
                  }}
                >
                  {service.title}
                </h3>
                <span className="text-white text-sm underline">
                  Learn More
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
