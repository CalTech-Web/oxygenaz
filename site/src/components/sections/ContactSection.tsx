import { SITE } from "@/lib/constants";

export default function ContactSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-[40px] font-extrabold font-[var(--font-display)] text-[#0B2447] leading-[48px] tracking-[0.4px] text-center mb-12">
          Visit Us
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Address */}
            <div>
              <h3 className="text-[#0B2447] text-lg font-bold mb-1">
                Address
              </h3>
              <a
                href={SITE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6B7B8D] hover:text-[#00B4D8] transition-colors"
              >
                {SITE.fullAddress}
              </a>
            </div>

            {/* Phone */}
            <div>
              <h3 className="text-[#0B2447] text-lg font-bold mb-1">Phone</h3>
              <a
                href={SITE.phoneHref}
                className="text-[#6B7B8D] hover:text-[#00B4D8] transition-colors"
              >
                {SITE.phone}
              </a>
            </div>

            {/* Email */}
            <div>
              <h3 className="text-[#0B2447] text-lg font-bold mb-1">Email</h3>
              <a
                href={`mailto:${SITE.email}`}
                className="text-[#6B7B8D] hover:text-[#00B4D8] transition-colors"
              >
                {SITE.email}
              </a>
            </div>

            {/* Hours */}
            <div>
              <h3 className="text-[#0B2447] text-lg font-bold mb-1">Hours</h3>
              <p className="text-[#6B7B8D]">
                {SITE.hours.weekday.label}: {SITE.hours.weekday.open} -{" "}
                {SITE.hours.weekday.close}
              </p>
              <p className="text-[#6B7B8D]">
                {SITE.hours.weekend.label}: {SITE.hours.weekend.open} -{" "}
                {SITE.hours.weekend.close}
              </p>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="rounded-xl overflow-hidden shadow-[1px_1px_15px_0px_rgba(0,0,0,0.15)] min-h-[350px]">
            <iframe
              title="Oxygen Wellness Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.6!2d-112.186!3d33.658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b6899fa2a52a3%3A0x5e3916e85fa1296c!2s20265%20N%2059th%20Ave%20b1%2C%20Glendale%2C%20AZ%2085308!5e0!3m2!1sen!2sus!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "350px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
