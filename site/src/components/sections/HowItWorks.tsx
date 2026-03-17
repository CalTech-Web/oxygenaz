import Link from "next/link";
import {
  CalendarCheck,
  MessageCircle,
  HeartPulse,
  TrendingUp,
  ArrowRight,
  Clock,
  Users,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

const steps = [
  {
    number: "01",
    title: "Book Your Visit",
    description:
      "Schedule online in seconds, give us a call, or simply walk in - no referral needed. Choose the service and time that works best for you.",
    icon: CalendarCheck,
    highlights: ["Online booking 24/7", "Walk-ins welcome", "No referral required"],
    accent: "from-[#0066B3] to-[#4A90CC]",
  },
  {
    number: "02",
    title: "Free Consultation",
    description:
      "Meet with our wellness and sports medicine expert for a complimentary 15-minute session. We'll assess your needs and recommend the right treatments.",
    icon: MessageCircle,
    highlights: ["15-min free consult", "Expert assessment", "Personalized plan"],
    accent: "from-[#4A90CC] to-[#0066B3]",
  },
  {
    number: "03",
    title: "Get Treated",
    description:
      "Experience your customized treatment plan in our state-of-the-art facility. From cryotherapy to IV infusions, every session is tailored to your goals.",
    icon: HeartPulse,
    highlights: ["State-of-the-art equipment", "Tailored sessions", "Comfortable environment"],
    accent: "from-[#0066B3] to-[#061527]",
  },
  {
    number: "04",
    title: "Recover & Thrive",
    description:
      "Track your progress and optimize results over time. Our team follows up to adjust your plan and ensure you're hitting your wellness milestones.",
    icon: TrendingUp,
    highlights: ["Progress tracking", "Plan adjustments", "Ongoing support"],
    accent: "from-[#061527] to-[#0066B3]",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#0a2240] via-[#0d2d54] to-[#061527] overflow-hidden">
      {/* Static background accents */}
      <div
        className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,102,179,0.2) 0%, transparent 65%)",
          filter: "blur(80px)",
          top: "-15%",
          left: "-10%",
        }}
      />
      <div
        className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(74,144,204,0.15) 0%, transparent 65%)",
          filter: "blur(70px)",
          bottom: "-10%",
          right: "-5%",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        {/* Heading */}
        <FadeIn className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#4A90CC]/30 bg-[#4A90CC]/10 px-4 py-1.5 mb-5">
            <Sparkles className="h-3.5 w-3.5 text-[#4A90CC]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#4A90CC]">
              Simple Process
            </span>
          </div>
          <h2 className="font-[var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
            How It Works
          </h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-[#0066B3] to-[#4A90CC] mb-5" />
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Getting started is easy. Four simple steps to a healthier, more energized you.
          </p>
        </FadeIn>

        {/* Steps - vertical timeline on mobile, 2-col grid on desktop */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Connecting line - visible on md+ */}
          <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-px bg-gradient-to-b from-[#0066B3]/40 via-[#4A90CC]/20 to-[#0066B3]/40" />

          {steps.map((step, index) => (
            <FadeIn
              key={step.number}
              delay={index * 0.1}
              className="group relative rounded-2xl bg-white/[0.06] border border-white/[0.1] backdrop-blur-md p-6 md:p-8 hover:bg-white/[0.1] hover:border-[#4A90CC]/30 hover:shadow-[0_8px_40px_rgba(0,102,179,0.15)] transition-all duration-500"
            >
              {/* Top gradient line */}
              <div className={`absolute top-0 left-6 right-6 h-[2px] rounded-full bg-gradient-to-r ${step.accent} opacity-40 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="flex items-start gap-5">
                {/* Step number + icon */}
                <div className="shrink-0 relative">
                  <div
                    className={`flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${step.accent} shadow-lg shadow-[#0066B3]/25 group-hover:shadow-[#0066B3]/40 group-hover:scale-110 transition-all duration-500`}
                  >
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="absolute -top-2 -right-2 flex items-center justify-center w-6 h-6 rounded-full bg-[#0a2240] border border-[#4A90CC]/40 text-[10px] font-black text-[#4A90CC]">
                    {step.number}
                  </span>
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-[var(--font-display)] text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-[#4A90CC] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-white/45 text-sm md:text-base leading-relaxed mb-4">
                    {step.description}
                  </p>
                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {step.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-[#4A90CC] bg-[#4A90CC]/10 border border-[#4A90CC]/15 rounded-full px-3 py-1"
                      >
                        <CheckCircle2 className="w-3 h-3" />
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom stats bar */}
        <FadeIn className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex items-center gap-3 rounded-xl bg-white/[0.06] border border-white/[0.1] px-5 py-4">
            <Clock className="w-5 h-5 text-[#4A90CC] shrink-0" />
            <div>
              <p className="text-white font-bold text-sm">Quick Sessions</p>
              <p className="text-white/40 text-xs">Most treatments take 15-45 minutes</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-white/[0.06] border border-white/[0.1] px-5 py-4">
            <Users className="w-5 h-5 text-[#4A90CC] shrink-0" />
            <div>
              <p className="text-white font-bold text-sm">Expert Team</p>
              <p className="text-white/40 text-xs">Certified wellness professionals</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-white/[0.06] border border-white/[0.1] px-5 py-4">
            <ArrowRight className="w-5 h-5 text-[#4A90CC] shrink-0" />
            <div>
              <p className="text-white font-bold text-sm">No Contracts</p>
              <p className="text-white/40 text-xs">Pay per visit or choose a membership</p>
            </div>
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn className="mt-10 text-center">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#0066B3] to-[#4A90CC] text-white rounded-full px-8 py-4 font-black text-sm uppercase tracking-wider hover:scale-105 hover:shadow-[0_8px_30px_rgba(0,102,179,0.5)] transition-all duration-300"
          >
            Get Started Today
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
