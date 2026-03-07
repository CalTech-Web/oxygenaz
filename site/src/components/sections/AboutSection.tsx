import Link from "next/link";

export default function AboutSection() {
  return (
    <section
      className="relative min-h-[504px] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/heroes/compression-bg.webp')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#10173E]/75" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-[1140px] mx-auto px-4 py-16">
        <h2
          className="text-[40px] font-extrabold text-white leading-[48px] tracking-[0.4px] mb-6"
          style={{ textShadow: "4px 4px 0px rgba(0,0,0,0.25)" }}
        >
          It&apos;s All About YOU
        </h2>

        <p className="text-white text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
          Our team understands the limitations of traditional, insurance-driven
          healthcare. That&apos;s why we focus on only the good stuff,
          evidence-based treatments that prioritize results over routine. No
          gimmicks, no unnecessary treatments, just personalized care that works.
        </p>

        <Link
          href="/about"
          className="inline-block bg-[#004AAD] text-white rounded-full px-6 py-3 text-sm font-bold uppercase border-2 border-[#5CE1E6] hover:bg-[#0053DA] transition-colors"
        >
          LEARN MORE ABOUT OXYGEN WELLNESS
        </Link>
      </div>
    </section>
  );
}
