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
      <section className="relative min-h-[500px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/heroes/about-hero.jpg"
            alt="About Oxygen Wellness"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#10173E]/75" />
        </div>
        <div className="relative z-10 max-w-[1140px] mx-auto px-4 text-center py-20">
          <h1
            className="text-[80px] font-extrabold text-white leading-tight"
            style={{ textShadow: "4px 4px 0px rgba(0,0,0,0.25)" }}
          >
            About Us
          </h1>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[#7A7A7A] text-lg mb-4">
              Oxygen Wellness & Physical Therapy is a one-of-a-kind destination for expert Physical Therapy and advanced regenerative treatments in Glendale, AZ. From Cryotherapy and Red Light Therapy to Hyperbaric Oxygen Therapy (HBOT), spinal adjustments, dry needling, therapeutic massage, and sports injury management, we bring together the most effective modalities under one roof.
            </p>
            <p className="text-[#7A7A7A] text-lg">
              At the core of everything we do is our commitment to &quot;ONLY THE GOOD STUFF,&quot; meaning evidence-based, results-driven treatments delivered by experienced professionals who genuinely care about your well-being.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/images/content/dr-clint.jpg"
                alt="Dr. Clint Borman - Founder"
                width={540}
                height={500}
                className="rounded-xl shadow-[1px_1px_15px_0px_rgba(0,0,0,0.15)] w-full h-auto object-cover"
              />
            </div>
            <div>
              <h2 className="text-[40px] font-extrabold text-[#10173E] mb-6">
                The Founder of Oxygen Wellness & Physical Therapy
              </h2>
              <p className="text-[#7A7A7A] text-lg mb-4">
                Meet Dr. Clint Borman, the owner + physical therapist of Oxygen Wellness & Physical Therapy. A former collegiate baseball player who spent countless hours recovering from injuries, Clint went on to earn his Doctor of Physical Therapy degree from the University of St. Augustine in 1997.
              </p>
              <p className="text-[#7A7A7A] text-lg mb-4">
                Over 25 years in outpatient sports medicine, he&apos;s led residency programs, trained staff, overseen mergers and acquisitions, and built a reputation for empowering patients through education at every session, delivering care with kindness, humor, and a commitment to your needs. This merger strengthens the shared mission of making every moment of your journey truly centered around you.
              </p>
              <p className="text-[#7A7A7A] text-lg mb-8">
                Today, at Oxygen Wellness & Physical Therapy, Clint blends experience, education, and innovation with traditional rehabilitation and regenerative care, free from insurance constraints and focused on only the good stuff.
              </p>
              <a
                href="https://linkedin.com/in/clintborman"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#004AAD] text-white rounded-full px-8 py-3 text-sm font-bold uppercase border-2 border-[#5CE1E6] hover:bg-[#0053DA] transition-colors"
              >
                SEE CLINT&apos;S LINKEDIN
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* It's All About YOU */}
      <section
        className="relative min-h-[504px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/heroes/compression-bg.webp')",
        }}
      >
        <div className="absolute inset-0 bg-[#10173E]/75" />
        <div className="relative z-10 text-center max-w-[1140px] mx-auto px-4 py-16">
          <h2
            className="text-[40px] font-extrabold text-white leading-[48px] tracking-[0.4px] mb-6"
            style={{ textShadow: "4px 4px 0px rgba(0,0,0,0.25)" }}
          >
            It&apos;s All About <em>YOU</em>
          </h2>
          <p className="text-white text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
            Our team understands the limitations of traditional, insurance-driven
            healthcare. That&apos;s why we focus on only the good stuff,
            evidence-based treatments that prioritize results over routine. No
            gimmicks, no unnecessary treatments, just personalized care that works.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#004AAD] text-white rounded-full px-6 py-3 text-sm font-bold uppercase border-2 border-[#5CE1E6] hover:bg-[#0053DA] transition-colors"
          >
            BOOK NOW
          </Link>
        </div>
      </section>

      {/* Blending Tradition with Innovation */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-4">
          <h2 className="text-[40px] font-extrabold text-[#10173E] mb-6 text-center">
            Blending Tradition with Innovation
          </h2>
          <p className="text-[#7A7A7A] text-lg text-center max-w-3xl mx-auto">
            At Oxygen Wellness & Physical Therapy, we believe that true healing comes from the perfect balance of proven traditional methods and cutting-edge regenerative therapies. Our approach is built on years of expertise, a passion for innovation, and a commitment to serving our community in Glendale, AZ.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 md:py-20 bg-[#EDF2F9]">
        <div className="max-w-[1140px] mx-auto px-4">
          <h2 className="text-[40px] font-extrabold text-[#10173E] mb-6 text-center">
            Our Mission
          </h2>
          <p className="text-[#7A7A7A] text-lg text-center max-w-3xl mx-auto">
            We are dedicated to redefining wellness by blending traditional healing methods with cutting-edge regenerative therapies. Our goal is to provide personalized solutions that help you recover faster, feel stronger, and live better, without the limitations of conventional healthcare.
          </p>
        </div>
      </section>

      {/* Why Choose Us? */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-4">
          <h2 className="text-[40px] font-extrabold text-[#10173E] mb-6 text-center">
            Why Choose Us?
          </h2>
          <p className="text-[#7A7A7A] text-lg text-center max-w-3xl mx-auto">
            Unlike standard wellness centers, we don&apos;t believe in one-size-fits-all treatments. Our approach is rooted in science, experience, and innovation, offering targeted solutions for inflammation, joint pain, detox, energy restoration, skin health, and more.
          </p>
        </div>
      </section>

      {/* Our Community */}
      <section className="py-16 md:py-20 bg-[#EDF2F9]">
        <div className="max-w-[1140px] mx-auto px-4">
          <h2 className="text-[40px] font-extrabold text-[#10173E] mb-6 text-center">
            Our Community
          </h2>
          <p className="text-[#7A7A7A] text-lg text-center max-w-3xl mx-auto">
            Located in the heart of Glendale, Arizona, Oxygen Wellness & Physical Therapy is more than just a wellness center, it&apos;s a community dedicated to better living. We proudly serve athletes, professionals, first responders, and anyone seeking a better path to healing and recovery.
          </p>
        </div>
      </section>
    </>
  );
}
