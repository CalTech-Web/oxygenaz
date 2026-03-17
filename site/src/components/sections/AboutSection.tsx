import Link from "next/link";
import Image from "next/image";
import { Award, ShieldCheck, Clock, Heart } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

const highlights = [
  { icon: Award, label: "25+ Years Experience" },
  { icon: ShieldCheck, label: "Evidence-Based Care" },
  { icon: Clock, label: "Open 84 Hours/Week" },
  { icon: Heart, label: "Personalized Plans" },
];

export default function AboutSection() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-white via-[#F0F5FA] to-white overflow-hidden">
      {/* Static background accents (replaces animated blobs) */}
      <div
        className="absolute w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,102,179,0.08) 0%, transparent 65%)",
          filter: "blur(60px)",
          top: "10%",
          right: "-5%",
        }}
      />
      <div
        className="absolute w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(74,144,204,0.06) 0%, transparent 65%)",
          filter: "blur(50px)",
          bottom: "5%",
          left: "-5%",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image with overlapping card */}
          <FadeIn className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,102,179,0.15)]">
              <Image
                src="/images/content/dr-clint.jpg"
                alt="Dr. Clint Borman"
                width={600}
                height={500}
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061527]/60 via-transparent to-transparent" />
            </div>

            {/* Floating Dr. card */}
            <div className="absolute -bottom-6 -right-4 md:right-6 bg-white rounded-2xl p-4 shadow-[0_12px_40px_rgba(6,21,39,0.12)] border border-[#E8EFF5] max-w-[260px]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0066B3] to-[#061527] flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-bold text-[#061527] text-sm">Dr. Clint Borman, DPT</p>
                  <p className="text-xs text-[#718096]">Owner & Physical Therapist</p>
                </div>
              </div>
            </div>

            {/* Floating years badge */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2.5 shadow-lg border border-[#E8EFF5]">
              <p className="font-[var(--font-display)] text-2xl font-extrabold text-[#0066B3] leading-none">25+</p>
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#718096] mt-0.5">Years</p>
            </div>
          </FadeIn>

          {/* Right - Content */}
          <FadeIn delay={0.15}>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0066B3]/20 bg-[#0066B3]/5 px-4 py-1.5 mb-5">
              <Heart className="h-3.5 w-3.5 text-[#0066B3]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#0066B3]">
                Our Philosophy
              </span>
            </div>

            <h2 className="font-[var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#061527] leading-[1.1] tracking-tight mb-6">
              It&apos;s All About{" "}
              <span className="text-gradient-vibrant">YOU</span>
            </h2>

            <p className="text-[#4A5568] text-lg leading-relaxed mb-4">
              Our team understands the limitations of traditional, insurance-driven
              healthcare. That&apos;s why we focus on only the good stuff -
              evidence-based treatments that prioritize results over routine.
            </p>
            <p className="text-[#4A5568] text-base leading-relaxed mb-8">
              No gimmicks, no unnecessary treatments, just personalized care that works.
              Every session is designed around your unique goals, whether you&apos;re recovering
              from an injury, optimizing performance, or simply investing in your long-term health.
            </p>

            {/* Highlight badges */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-xl bg-white border border-[#E8EFF5] px-4 py-3 shadow-sm"
                >
                  <item.icon className="w-5 h-5 text-[#0066B3] shrink-0" />
                  <span className="text-sm font-semibold text-[#061527]">{item.label}</span>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-block bg-gradient-to-r from-[#0066B3] to-[#00518F] text-white rounded-full px-8 py-4 text-sm font-black uppercase tracking-wider hover:scale-105 hover:shadow-[0_0_30px_rgba(0,102,179,0.4)] transition-all duration-300 shadow-[0_8px_30px_rgba(0,102,179,0.25)]"
            >
              Learn More About Us
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
