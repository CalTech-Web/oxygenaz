import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AboutSection from "@/components/sections/AboutSection";

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
            className="text-[80px] font-extrabold text-white mb-6 leading-tight"
            style={{ textShadow: "4px 4px 0px rgba(0,0,0,0.25)" }}
          >
            About Us
          </h1>
          <p className="text-white text-lg max-w-3xl mx-auto mb-4">
            Oxygen Wellness & Physical Therapy is a wellness recovery center in Glendale, AZ offering non-invasive, science-backed therapies designed to reduce pain, improve recovery, and promote overall well-being.
          </p>
          <p className="text-white/90 text-lg max-w-3xl mx-auto">
            We combine advanced wellness treatments with expert physical therapy under one roof, giving you access to comprehensive care without the constraints of insurance-driven healthcare.
          </p>
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
                Dr. Clint Borman is the founder and lead physical therapist at Oxygen Wellness & Physical Therapy. He earned his Doctor of Physical Therapy degree from the University of St. Augustine in 1997 and has spent over 25 years in clinical practice.
              </p>
              <p className="text-[#7A7A7A] text-lg mb-4">
                A former collegiate baseball player, Dr. Borman brings a unique athletic perspective to rehabilitation. He understands what it takes to recover from injury and return to the activities you love, because he has been there himself.
              </p>
              <p className="text-[#7A7A7A] text-lg mb-4">
                He empowers patients through education, delivers care with kindness, humor, and a commitment to your needs.
              </p>
              <p className="text-[#7A7A7A] text-lg mb-8">
                Throughout his career, Dr. Borman has led residency programs, trained clinical staff, and guided healthcare organizations through growth. His leadership experience combined with his clinical expertise makes him uniquely qualified to deliver comprehensive, integrated care.
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
      <AboutSection />

      {/* Our Mission */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-4">
          <h2 className="text-[40px] font-extrabold text-[#10173E] mb-6 text-center">
            Our Mission
          </h2>
          <p className="text-[#7A7A7A] text-lg text-center max-w-3xl mx-auto mb-4">
            At Oxygen Wellness & Physical Therapy, we deliver evidence-based treatments that prioritize results over routine. We believe in providing the best possible care without the constraints of insurance-driven healthcare, giving our team the freedom to focus entirely on what works for you.
          </p>
          <p className="text-[#7A7A7A] text-lg text-center max-w-3xl mx-auto">
            Our tagline, &quot;Only the Good Stuff,&quot; is not just a slogan. It is a promise. Every service, every technique, and every treatment plan we offer has been carefully chosen because it delivers real, measurable results.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 bg-[#EDF2F9]">
        <div className="max-w-[1140px] mx-auto px-4">
          <h2 className="text-[40px] font-extrabold text-[#10173E] mb-10 text-center">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-[1px_1px_15px_0px_rgba(0,0,0,0.15)] p-6">
              <h3 className="text-lg font-bold text-[#10173E] mb-2">Evidence-Based Treatments</h3>
              <p className="text-[#7A7A7A]">
                Every service we offer is backed by scientific research and clinical evidence. We prioritize results over routine.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-[1px_1px_15px_0px_rgba(0,0,0,0.15)] p-6">
              <h3 className="text-lg font-bold text-[#10173E] mb-2">Walk-In Friendly</h3>
              <p className="text-[#7A7A7A]">
                No appointment needed for our five core wellness services. Walk in during business hours and experience wellness on your schedule.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-[1px_1px_15px_0px_rgba(0,0,0,0.15)] p-6">
              <h3 className="text-lg font-bold text-[#10173E] mb-2">No Referral Required</h3>
              <p className="text-[#7A7A7A]">
                You do not need a prescription or referral to access any of our services. Your wellness journey starts whenever you are ready.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-[1px_1px_15px_0px_rgba(0,0,0,0.15)] p-6">
              <h3 className="text-lg font-bold text-[#10173E] mb-2">Integrated Care</h3>
              <p className="text-[#7A7A7A]">
                Combine physical therapy with advanced wellness therapies for a comprehensive treatment experience, all under one roof.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-[1px_1px_15px_0px_rgba(0,0,0,0.15)] p-6">
              <h3 className="text-lg font-bold text-[#10173E] mb-2">25+ Years of Expertise</h3>
              <p className="text-[#7A7A7A]">
                Dr. Borman brings over two and a half decades of physical therapy experience to every patient interaction.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-[1px_1px_15px_0px_rgba(0,0,0,0.15)] p-6">
              <h3 className="text-lg font-bold text-[#10173E] mb-2">HSA & FSA Accepted</h3>
              <p className="text-[#7A7A7A]">
                We accept HSA and FSA payments and provide detailed receipts for reimbursement. Quality wellness care should be accessible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Community */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-4">
          <h2 className="text-[40px] font-extrabold text-[#10173E] mb-6 text-center">
            Our Community
          </h2>
          <p className="text-[#7A7A7A] text-lg text-center max-w-3xl mx-auto mb-4">
            Oxygen Wellness is more than a treatment center. We are a community of people committed to taking care of their bodies and minds. From athletes training for competition to individuals managing chronic conditions, our doors are open to everyone.
          </p>
          <p className="text-[#7A7A7A] text-lg text-center max-w-3xl mx-auto mb-8">
            We believe wellness is better when shared. Bring a friend, try something new, and experience the difference of a team that truly cares about your well-being.
          </p>
          <div className="text-center">
            <Link
              href="/contact"
              className="inline-block bg-[#004AAD] text-white rounded-full px-8 py-3 text-sm font-bold uppercase border-2 border-[#5CE1E6] hover:bg-[#0053DA] transition-colors"
            >
              BOOK YOUR FIRST VISIT
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
