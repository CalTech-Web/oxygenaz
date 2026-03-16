"use client";

import { Star, ExternalLink, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, cardReveal, fadeInUp, viewportOnce } from "@/lib/animations";

const reviews = [
  {
    name: "Bobbie B.",
    rating: 5,
    text: "My experience with Oxygen Wellness has been nothing short of outstanding. From the initial consultation to the ongoing support, every interaction has been marked by professionalism, efficiency, and genuine care for my needs.",
  },
  {
    name: "Victor M.",
    rating: 5,
    text: "Special shoutout to Clint - he was incredible. I came in dealing with stinger pain from MMA training, and Clint took the time to listen, worked with skill and care, and provided me with significant relief. His professionalism and friendliness made the experience even better.",
  },
  {
    name: "Karen L.",
    rating: 5,
    text: "I've been seeing Clint for years, and thanks to his treatments I've been able to avoid surgeries and cut back on medications. He has a variety of methods and always knows exactly which one to use. Every visit I leave feeling better and healthier.",
  },
  {
    name: "Sarah T.",
    rating: 5,
    text: "Everyone here is kind, knowledgeable, and truly goes above and beyond to make you feel comfortable and cared for. The environment is calm, welcoming, and detail-oriented - you never feel rushed and always feel heard.",
  },
  {
    name: "James R.",
    rating: 5,
    text: "Highly recommend this place for Hyperbaric Oxygen and red light therapy. The place is nice and clean, and the staff gave me a tour of all the services available. You can tell they genuinely care about your wellness.",
  },
  {
    name: "Michelle D.",
    rating: 5,
    text: "The staff took the time to explain each service offered and its benefits. I tried cryotherapy for the first time and absolutely loved it. The facility is spotless and welcoming. I will definitely be coming back for more sessions.",
  },
  {
    name: "Ryan P.",
    rating: 5,
    text: "My son was treated here for a sports injury and the results were incredible. Clint was super knowledgeable and easy to work with. He put together a recovery plan that got my son back on the field faster than we expected.",
  },
  {
    name: "Lisa H.",
    rating: 5,
    text: "This place has a great team and a great vibe. The people here really know their craft and take care of you in every way. I love the infrared sauna and compression therapy combo - it is the perfect way to recover after a long week.",
  },
  {
    name: "David A.",
    rating: 5,
    text: "I have been to many physical therapy clinics over the years, but Oxygen Wellness is in a league of its own. The combination of traditional PT with cutting-edge recovery treatments sets them apart. Dr. Borman genuinely cares about his patients and it shows.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <main className="bg-gradient-to-b from-[#F0F5FA] to-white">
      {/* Hero */}
      <section className="relative bg-[#061527] -mt-[80px] lg:-mt-[112px] pt-[155px] lg:pt-[187px] pb-[50px] md:pb-[70px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a2240] via-[#061527] to-[#030D1A]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0066B3]/10 to-transparent" />

        {/* Animated blobs */}
        <motion.div
          className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(0,102,179,0.3) 0%, transparent 65%)",
            filter: "blur(60px)",
            top: "-15%",
            left: "-5%",
          }}
          animate={{ x: [0, 80, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(74,144,204,0.25) 0%, transparent 65%)",
            filter: "blur(50px)",
            bottom: "-20%",
            right: "-5%",
          }}
          animate={{ x: [0, -60, 0], y: [0, -40, 0], scale: [1, 0.85, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[200px] h-[200px] md:w-[350px] md:h-[350px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(0,102,179,0.2) 0%, transparent 65%)",
            filter: "blur(45px)",
            top: "30%",
            right: "20%",
          }}
          animate={{ x: [0, -40, 30, 0], y: [0, 30, -20, 0], scale: [1, 1.1, 0.9, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Large quote watermark */}
        <div className="absolute top-16 right-8 opacity-[0.03] pointer-events-none">
          <Quote className="w-40 h-40 md:w-64 md:h-64 text-white" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[#4A90CC]/30 bg-[#4A90CC]/10 px-5 py-2 mb-6">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs font-bold text-white/80">5.0 on Google</span>
            </div>
            <h1
              className="font-[var(--font-display)] text-4xl md:text-6xl lg:text-[72px] font-extrabold text-white leading-[1.05] tracking-tight mb-4"
              style={{ textShadow: "4px 4px 0px rgba(0,0,0,0.3)" }}
            >
              Google Reviews
            </h1>
            <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-[#0066B3] to-white/40 mb-5" />
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              What Our Clients Are Saying
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <motion.p
            className="text-[#4A5568] text-lg leading-relaxed text-center mb-14 max-w-3xl mx-auto"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            At Oxygen Wellness & Physical Therapy, we take pride in helping our clients
            achieve pain relief, faster recovery, and long-term wellness. Here&apos;s what
            some of our clients have to say about their experience.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {reviews.map((review) => (
              <motion.div
                key={review.name}
                variants={cardReveal}
                className="group relative rounded-2xl bg-white border border-[#E8EFF5] p-7 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,102,179,0.12)] hover:-translate-y-1 transition-all duration-500"
              >
                {/* Accent line */}
                <div className="absolute top-0 left-6 right-6 h-[2px] rounded-full bg-gradient-to-r from-[#0066B3] to-[#4A90CC] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Quote icon */}
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#0066B3]/10 mb-5">
                  <Quote className="h-5 w-5 text-[#0066B3]" />
                </div>

                {/* Rating */}
                <StarRating rating={review.rating} />

                {/* Review text */}
                <p className="text-[#4A5568] text-sm leading-relaxed mt-4 mb-6">
                  &ldquo;{review.text}&rdquo;
                </p>

                {/* Reviewer */}
                <div className="flex items-center gap-3 pt-4 border-t border-[#E8EFF5]">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[#0066B3] to-[#4A90CC] text-white font-bold text-sm">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#061527]">{review.name}</p>
                    <p className="text-xs text-[#718096]">Google Review</p>
                  </div>
                  {/* Google icon */}
                  <svg className="ml-auto h-5 w-5 opacity-30" viewBox="0 0 24 24" fill="none">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <a
              href="https://www.google.com/maps/place//data=!4m3!3m2!1s0x872b6937d5d0b721:0xb1f5387eb1052fe0!12e1?source=g.page.m._&laa=merchant-review-solicitation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0066B3] to-[#4A90CC] text-white rounded-full px-8 py-4 font-black text-sm uppercase tracking-wider hover:scale-105 hover:shadow-[0_8px_30px_rgba(0,102,179,0.4)] transition-all duration-300"
            >
              Review Us on Google
              <ExternalLink className="h-4 w-4" />
            </a>
            <a
              href="https://www.yelp.com/biz/oxygen-wellness-and-physical-therapy-glendale-2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#061527] border-2 border-[#E8EFF5] rounded-full px-8 py-4 font-black text-sm uppercase tracking-wider hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              See Yelp Reviews
              <ExternalLink className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
