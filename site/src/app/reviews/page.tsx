import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Star, ExternalLink } from "lucide-react";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Google Reviews",
  description:
    "See what our clients are saying about Oxygen Wellness & Physical Therapy in Glendale, AZ. 5-star Google reviews from real patients.",
};

export default function ReviewsPage() {
  return (
    <main className="bg-gradient-to-b from-[#F0F5FA] to-white">
      {/* Hero */}
      <section className="relative bg-[#061527] pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a2240] via-[#061527] to-[#030D1A]" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[#4A90CC]/30 bg-[#4A90CC]/10 px-5 py-2 mb-6">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-xs font-bold text-white/80">5.0 on Google</span>
          </div>
          <h1 className="font-[var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
            Google Reviews
          </h1>
          <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-[#0066B3] to-white/40 mb-5" />
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            What Our Clients Are Saying
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4">
          <p className="text-[#4A5568] text-lg leading-relaxed text-center mb-12">
            At Oxygen Wellness & Physical Therapy, we take pride in helping our clients
            achieve pain relief, faster recovery, and long-term wellness. Here&apos;s what
            some of our clients have to say about their experience.
          </p>

          {/* Reviews image */}
          <div className="rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,102,179,0.12)] border border-[#E8EFF5]">
            <Image
              src="/images/content/reviews.png"
              alt="Google Reviews for Oxygen Wellness & Physical Therapy"
              width={830}
              height={415}
              className="w-full h-auto"
            />
          </div>

          {/* CTA buttons */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.google.com/maps/place//data=!4m3!3m2!1s0x872b6937d5d0b721:0xb1f5387eb1052fe0!12e1?source=g.page.m._&laa=merchant-review-solicitation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#0066B3] text-white rounded-full px-8 py-4 font-black text-sm uppercase tracking-wider hover:scale-105 hover:shadow-[0_8px_30px_rgba(0,102,179,0.4)] transition-all duration-300"
            >
              Review Us on Google
              <ExternalLink className="h-4 w-4" />
            </a>
            <a
              href="https://www.yelp.com/biz/oxygen-wellness-and-physical-therapy-glendale-2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#061527] border border-[#E8EFF5] rounded-full px-8 py-4 font-black text-sm uppercase tracking-wider hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              See Yelp Reviews
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
