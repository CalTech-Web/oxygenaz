import { Star, Quote, ExternalLink } from "lucide-react";
import { SITE } from "@/lib/constants";
import FadeIn from "@/components/ui/FadeIn";

const placeholderReviews = [
  {
    text: "Amazing experience! The staff is incredibly friendly and the treatments are top-notch. Highly recommend to anyone looking for wellness services.",
    name: "Sarah M.",
    service: "Cryotherapy",
  },
  {
    text: "Dr. Borman and his team truly care about their patients. The physical therapy sessions have been life-changing for my back pain recovery.",
    name: "James R.",
    service: "Physical Therapy",
  },
  {
    text: "Love the cryotherapy and infrared sauna combo! I feel like a new person after every visit. The membership is absolutely worth it.",
    name: "Michelle T.",
    service: "Infrared Sauna",
  },
];

export default function TestimonialsPlaceholder() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#0a2240] via-[#0d2d54] to-[#061527] overflow-hidden">
      {/* Static background accents */}
      <div
        className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,102,179,0.15) 0%, transparent 65%)",
          filter: "blur(80px)",
          top: "-15%",
          right: "-10%",
        }}
      />
      <div
        className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(74,144,204,0.12) 0%, transparent 65%)",
          filter: "blur(70px)",
          bottom: "-10%",
          left: "-5%",
        }}
      />

      {/* Large quote watermark */}
      <div className="absolute top-12 left-8 opacity-[0.03] pointer-events-none">
        <Quote className="w-40 h-40 md:w-64 md:h-64 text-white" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        {/* Heading */}
        <FadeIn className="text-center mb-14">
          {/* Google rating pill */}
          <a
            href={SITE.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 rounded-full border border-[#4A90CC]/30 bg-[#4A90CC]/10 px-5 py-2 mb-6 hover:bg-[#4A90CC]/20 transition-colors duration-300"
          >
            <div className="flex gap-0.5" aria-hidden="true">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-xs font-bold text-white/80">5.0 on Google</span>
            <ExternalLink aria-hidden="true" className="h-3 w-3 text-white/40 group-hover:text-white/70 transition-colors" />
            <span className="sr-only">(opens in new tab)</span>
          </a>

          <h2 className="font-[var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
            What Our Clients Say
          </h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-[#0066B3] to-[#4A90CC] mb-5" />
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Real experiences from real people who trust us with their wellness journey.
          </p>
        </FadeIn>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {placeholderReviews.map((review, index) => (
            <FadeIn
              key={review.name}
              delay={index * 0.1}
              className="group relative rounded-2xl bg-white/[0.06] border border-white/[0.1] backdrop-blur-md p-7 hover:bg-white/[0.1] hover:border-[#4A90CC]/30 hover:shadow-[0_8px_40px_rgba(0,102,179,0.15)] transition-all duration-500"
            >
              {/* Top gradient accent */}
              <div className="absolute top-0 left-6 right-6 h-[2px] rounded-full bg-gradient-to-r from-[#0066B3] to-[#4A90CC] opacity-40 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Quote icon */}
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#0066B3] to-[#4A90CC] shadow-lg shadow-[#0066B3]/25">
                  <Quote className="w-4 h-4 text-white" />
                </div>
                {/* Stars */}
                <div className="flex gap-0.5" role="img" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} aria-hidden="true" className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>

              {/* Quote text */}
              <p className="text-white/60 text-sm md:text-base leading-relaxed mb-6">
                &quot;{review.text}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-white/[0.08]">
                <div className="h-11 w-11 rounded-full bg-gradient-to-br from-[#0066B3] to-[#4A90CC] flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-[#0066B3]/20">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{review.name}</p>
                  <p className="text-xs text-[#4A90CC]">{review.service}</p>
                </div>
                <span className="ml-auto text-[10px] font-bold uppercase tracking-wider text-white/30 border border-white/10 rounded-full px-2.5 py-1">
                  Verified
                </span>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* CTA */}
        <FadeIn className="mt-12 text-center">
          <a
            href={SITE.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors duration-300 text-sm font-bold"
          >
            See all reviews on Google
            <ExternalLink aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            <span className="sr-only">(opens in new tab)</span>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
