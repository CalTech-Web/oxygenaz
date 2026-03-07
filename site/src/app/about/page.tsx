import type { Metadata } from "next";
import Link from "next/link";
import {
  Stethoscope,
  Check,
  ShieldCheck,
  Users,
  Sparkles,
  HeartPulse,
  GraduationCap,
  Award,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Oxygen Wellness & Physical Therapy in Glendale, AZ. Evidence-based wellness treatments and 25+ years of physical therapy expertise with Dr. Clint Borman.",
};

const differentiators = [
  {
    icon: ShieldCheck,
    title: "Evidence-Based Treatments",
    description:
      "Every service we offer is backed by scientific research and clinical evidence. We prioritize results over routine, choosing only therapies that deliver measurable outcomes.",
  },
  {
    icon: Users,
    title: "Walk-In Friendly",
    description:
      "No appointment needed for our five core wellness services. Walk in during business hours and experience cryotherapy, infrared sauna, oxygen therapy, red light therapy, or compression therapy.",
  },
  {
    icon: Sparkles,
    title: "No Referral Required",
    description:
      "You do not need a prescription or referral to access any of our services. Your wellness journey starts whenever you are ready.",
  },
  {
    icon: HeartPulse,
    title: "Integrated Care Under One Roof",
    description:
      "Combine physical therapy with advanced wellness therapies for a comprehensive treatment experience. No need to visit multiple facilities.",
  },
  {
    icon: GraduationCap,
    title: "25+ Years of Expertise",
    description:
      "Dr. Borman brings over two and a half decades of physical therapy experience to every patient interaction. That depth of knowledge informs everything we do.",
  },
  {
    icon: Award,
    title: "HSA & FSA Accepted",
    description:
      "We accept HSA and FSA payments and provide detailed receipts for reimbursement. Quality wellness care should be accessible.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-brand-dark to-brand-primary py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            About Oxygen Wellness
          </h1>
          <p className="text-lg md:text-xl text-cyan-100 max-w-2xl mx-auto">
            Evidence-based wellness and expert physical therapy, designed to help
            you recover, perform, and thrive.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6 text-center">
            Our Mission
          </h2>
          <p className="text-lg text-brand-text/80 text-center max-w-3xl mx-auto mb-8">
            At Oxygen Wellness & Physical Therapy, we deliver evidence-based
            treatments that prioritize results over routine. We believe in
            providing the best possible care without the constraints of
            insurance-driven healthcare - giving our team the freedom to focus
            entirely on what works for you.
          </p>
        </div>
      </section>

      {/* Only the Good Stuff */}
      <section className="py-16 md:py-20 bg-brand-light">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              &ldquo;Only the Good Stuff&rdquo;
            </h2>
            <p className="text-lg text-brand-text/80 max-w-3xl mx-auto">
              Our tagline is not just a slogan - it is a promise. It means every
              service, every technique, and every treatment plan we offer has
              been carefully chosen because it delivers real, measurable results.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 md:p-10">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-brand-accent shrink-0 mt-0.5" />
                <p className="text-brand-text/80">
                  We do not offer treatments just because they are trendy. If the
                  science does not support it, we do not do it.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-brand-accent shrink-0 mt-0.5" />
                <p className="text-brand-text/80">
                  Every therapy in our lineup has been vetted for safety,
                  efficacy, and clinical outcomes.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-brand-accent shrink-0 mt-0.5" />
                <p className="text-brand-text/80">
                  Your treatment plan is customized to your body, your goals,
                  and your timeline - not a one-size-fits-all protocol.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-brand-accent shrink-0 mt-0.5" />
                <p className="text-brand-text/80">
                  We educate you at every step so you understand why each
                  treatment matters and how it contributes to your recovery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dr. Borman Bio */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">
                Meet Dr. Clint Borman
              </h2>
              <p className="text-brand-text/80 text-lg mb-4">
                Dr. Clint Borman is the founder and lead physical therapist at
                Oxygen Wellness & Physical Therapy. He earned his Doctor of
                Physical Therapy degree from the University of St. Augustine in
                1997 and has spent over 25 years in clinical practice.
              </p>
              <p className="text-brand-text/80 text-lg mb-4">
                A former collegiate baseball player, Dr. Borman brings a unique
                athletic perspective to rehabilitation. He understands what it
                takes to recover from injury and return to the activities you
                love - because he has been there himself.
              </p>
              <p className="text-brand-text/80 text-lg mb-6">
                Throughout his career, Dr. Borman has led residency programs,
                trained clinical staff, and guided healthcare organizations
                through mergers and acquisitions. His leadership experience
                combined with his clinical expertise makes him uniquely
                qualified to deliver comprehensive, integrated care.
              </p>

              <blockquote className="border-l-4 border-brand-accent pl-6 py-2 mb-6">
                <p className="text-brand-dark italic text-lg">
                  &ldquo;Empowers patients through education, delivers care with
                  kindness, humor, and a commitment to your needs.&rdquo;
                </p>
              </blockquote>
            </div>

            {/* Decorative Element */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-80 h-80">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-accent/20 to-brand-primary/20" />
                <div className="absolute inset-8 rounded-full bg-gradient-to-br from-brand-accent/30 to-brand-primary/30" />
                <div className="absolute inset-16 rounded-full bg-gradient-to-br from-brand-accent/40 to-brand-primary/40 flex items-center justify-center">
                  <Stethoscope className="w-20 h-20 text-brand-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-16 md:py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-3">
              What Makes Us Different
            </h2>
            <p className="text-lg text-brand-text/70 max-w-2xl mx-auto">
              We built Oxygen Wellness to deliver care the way it should be -
              focused on you, backed by science, and free from unnecessary
              limitations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl shadow-md p-6"
              >
                <div className="mb-4 w-12 h-12 rounded-lg bg-brand-accent/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-brand-accent" />
                </div>
                <h3 className="text-lg font-semibold text-brand-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-brand-text/70 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not Insurance-Driven */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">
            Not Insurance-Driven Healthcare
          </h2>
          <p className="text-lg text-brand-text/80 mb-4">
            Insurance-driven models often limit the treatments a provider can
            offer, the time they can spend with you, and the outcomes they can
            pursue. We chose a different path.
          </p>
          <p className="text-lg text-brand-text/80 mb-4">
            By operating outside the traditional insurance framework, we have the
            freedom to offer the exact treatments your body needs - for as long
            as it needs them. No pre-authorizations, no arbitrary session limits,
            no watered-down care.
          </p>
          <p className="text-lg text-brand-text/80 mb-8">
            We accept HSA and FSA payments and provide detailed receipts for
            reimbursement. Our focus is on delivering results - everything else
            is secondary.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-lg bg-brand-primary px-8 py-3 text-lg font-semibold text-white hover:bg-brand-secondary transition-colors"
          >
            Book Your First Visit
          </Link>
        </div>
      </section>
    </>
  );
}
