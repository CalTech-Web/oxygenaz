import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Oxygen Wellness & Physical Therapy in Glendale, AZ. Evidence-based wellness treatments and 25+ years of physical therapy expertise with Dr. Clint Borman.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden grain">
        <div className="absolute inset-0">
          <Image
            src="/images/heroes/about-hero.jpg"
            alt="About Oxygen Wellness"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0B2447]/90 via-[#0B2447]/88 to-[#00B4D8]/80" />
        </div>

        {/* Decorative orbs */}
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-[#00B4D8]/8 blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#00B4D8]/15 blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-[1140px] mx-auto px-4 text-center py-16 md:py-20">
          <h1
            className="text-4xl md:text-6xl lg:text-[72px] font-extrabold font-[var(--font-display)] text-white leading-[1.05] tracking-tight"
            style={{ textShadow: "4px 4px 0px rgba(0,0,0,0.3)" }}
          >
            About Us
          </h1>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[#6B7B8D] text-lg md:text-xl mb-4 leading-relaxed font-light">
              Oxygen Wellness & Physical Therapy is a one-of-a-kind destination for expert Physical Therapy and advanced regenerative treatments in Glendale, AZ. From Cryotherapy and Red Light Therapy to Hyperbaric Oxygen Therapy (HBOT), spinal adjustments, dry needling, therapeutic massage, and sports injury management, we bring together the most effective modalities under one roof.
            </p>
            <p className="text-[#6B7B8D] text-lg md:text-xl leading-relaxed font-light">
              At the core of everything we do is our commitment to &quot;ONLY THE GOOD STUFF,&quot; meaning evidence-based, results-driven treatments delivered by experienced professionals who genuinely care about your well-being.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#F5F7FA] to-white">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/images/content/dr-clint.jpg"
                alt="Dr. Clint Borman - Founder"
                width={540}
                height={500}
                className="rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] w-full h-auto object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-[var(--font-display)] tracking-tight text-[#0B2447] mb-6 accent-underline">
                The Founder of Oxygen Wellness & Physical Therapy
              </h2>
              <p className="text-[#6B7B8D] text-lg mb-4 leading-relaxed font-light">
                Meet Dr. Clint Borman, the owner + physical therapist of Oxygen Wellness & Physical Therapy. A former collegiate baseball player who spent countless hours recovering from injuries, Clint went on to earn his Doctor of Physical Therapy degree from the University of St. Augustine in 1997.
              </p>
              <p className="text-[#6B7B8D] text-lg mb-4 leading-relaxed font-light">
                Over 25 years in outpatient sports medicine, he&apos;s led residency programs, trained staff, overseen mergers and acquisitions, and built a reputation for empowering patients through education at every session, delivering care with kindness, humor, and a commitment to your needs. This merger strengthens the shared mission of making every moment of your journey truly centered around you.
              </p>
              <p className="text-[#6B7B8D] text-lg mb-8 leading-relaxed font-light">
                Today, at Oxygen Wellness & Physical Therapy, Clint blends experience, education, and innovation with traditional rehabilitation and regenerative care, free from insurance constraints and focused on only the good stuff.
              </p>
              <a
                href="https://linkedin.com/in/clintborman"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-[#00B4D8] to-[#0096B7] text-white rounded-full px-8 py-4 font-black text-sm uppercase tracking-wider shadow-[0_8px_30px_rgba(0,180,216,0.25)] hover:scale-105 hover:shadow-[0_0_30px_rgba(0,180,216,0.3)] transition-all duration-300"
              >
                SEE CLINT&apos;S LINKEDIN
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* It's All About YOU */}
      <section
        className="relative min-h-[504px] flex items-center justify-center bg-cover bg-center overflow-hidden grain"
        style={{
          backgroundImage: "url('/images/heroes/compression-bg.webp')",
        }}
      >
        {/* Multi-layer overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B2447]/82 via-[#0B2447]/88 to-[#0B2447]/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#00B4D8]/12 to-transparent" />

        {/* Decorative orb */}
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-[#00B4D8]/10 blur-[100px] pointer-events-none" />

        <div className="relative z-10 text-center max-w-[1140px] mx-auto px-4 py-16 md:py-20">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-[var(--font-display)] text-white leading-tight tracking-tight mb-6"
            style={{ textShadow: "4px 4px 0px rgba(0,0,0,0.25)" }}
          >
            It&apos;s All About <span className="text-[#00B4D8]">YOU</span>
          </h2>
          <p className="text-white/85 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            Our team understands the limitations of traditional, insurance-driven
            healthcare. That&apos;s why we focus on only the good stuff,
            evidence-based treatments that prioritize results over routine. No
            gimmicks, no unnecessary treatments, just personalized care that works.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-[#00B4D8] to-[#0096B7] text-white rounded-full px-8 py-4 font-black text-sm uppercase tracking-wider shadow-[0_8px_30px_rgba(0,180,216,0.25)] hover:scale-105 hover:shadow-[0_0_30px_rgba(0,180,216,0.3)] transition-all duration-300"
          >
            BOOK NOW
          </Link>
        </div>
      </section>

      {/* Blending Tradition with Innovation */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-[var(--font-display)] tracking-tight text-[#0B2447] mb-6 text-center accent-underline-center">
            Blending Tradition with Innovation
          </h2>
          <p className="text-[#6B7B8D] text-lg md:text-xl text-center max-w-3xl mx-auto leading-relaxed font-light">
            At Oxygen Wellness & Physical Therapy, we believe that true healing comes from the perfect balance of proven traditional methods and cutting-edge regenerative therapies. Our approach is built on years of expertise, a passion for innovation, and a commitment to serving our community in Glendale, AZ.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#F5F7FA] to-white">
        <div className="max-w-[1140px] mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-[var(--font-display)] tracking-tight text-[#0B2447] mb-6 text-center accent-underline-center">
            Our Mission
          </h2>
          <p className="text-[#6B7B8D] text-lg md:text-xl text-center max-w-3xl mx-auto leading-relaxed font-light">
            We are dedicated to redefining wellness by blending traditional healing methods with cutting-edge regenerative therapies. Our goal is to provide personalized solutions that help you recover faster, feel stronger, and live better, without the limitations of conventional healthcare.
          </p>
        </div>
      </section>

      {/* Why Choose Us? */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-[var(--font-display)] tracking-tight text-[#0B2447] mb-6 text-center accent-underline-center">
            Why Choose Us?
          </h2>
          <p className="text-[#6B7B8D] text-lg md:text-xl text-center max-w-3xl mx-auto leading-relaxed font-light">
            Unlike standard wellness centers, we don&apos;t believe in one-size-fits-all treatments. Our approach is rooted in science, experience, and innovation, offering targeted solutions for inflammation, joint pain, detox, energy restoration, skin health, and more.
          </p>
        </div>
      </section>

      {/* Our Community */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#F5F7FA] to-white">
        <div className="max-w-[1140px] mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-[var(--font-display)] tracking-tight text-[#0B2447] mb-6 text-center accent-underline-center">
            Our Community
          </h2>
          <p className="text-[#6B7B8D] text-lg md:text-xl text-center max-w-3xl mx-auto leading-relaxed font-light">
            Located in the heart of Glendale, Arizona, Oxygen Wellness & Physical Therapy is more than just a wellness center, it&apos;s a community dedicated to better living. We proudly serve athletes, professionals, first responders, and anyone seeking a better path to healing and recovery.
          </p>
        </div>
      </section>
    </>
  );
}
