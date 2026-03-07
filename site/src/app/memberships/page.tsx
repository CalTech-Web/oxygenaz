import type { Metadata } from "next";
import Link from "next/link";
import { CreditCard, Calendar, RefreshCw, Gift, HelpCircle } from "lucide-react";
import Memberships from "@/components/sections/Memberships";

export const metadata: Metadata = {
  title: "Membership Plans",
  description:
    "Join Oxygen Wellness membership plans. Save up to 80% on core wellness services including cryotherapy, infrared sauna, red light therapy, and more in Glendale, AZ.",
};

const howItWorks = [
  {
    icon: CreditCard,
    title: "Choose Your Plan",
    description:
      "Select the membership tier that fits your wellness goals and budget. All plans include monthly core service credits you can use on any of our five core wellness services.",
  },
  {
    icon: Calendar,
    title: "Schedule Your Sessions",
    description:
      "Use our app or call to book your sessions. Core services also accept walk-ins during business hours - just check in and use your credits.",
  },
  {
    icon: RefreshCw,
    title: "Use Credits Flexibly",
    description:
      "Each core credit is good for one core service session. Use them on any combination of cryotherapy, infrared sauna, oxygen therapy, red light therapy, or compression therapy.",
  },
  {
    icon: Gift,
    title: "Share the Wellness",
    description:
      "Gold and Platinum members can gift core credits to friends and family each month. Bring someone along and introduce them to the benefits of wellness recovery.",
  },
];

export default function MembershipsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-brand-dark to-brand-primary py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Membership Plans
          </h1>
          <p className="text-lg md:text-xl text-cyan-100 max-w-2xl mx-auto">
            Save on the services you love with flexible membership plans
            designed for every wellness journey.
          </p>
        </div>
      </section>

      {/* Membership Plans Component */}
      <Memberships />

      {/* What Are Core Credits */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-start gap-4 mb-8">
            <div className="w-12 h-12 rounded-lg bg-brand-accent/10 flex items-center justify-center shrink-0">
              <HelpCircle className="w-6 h-6 text-brand-accent" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
                What Are Core Credits?
              </h2>
              <p className="text-lg text-brand-text/80 mb-4">
                Core credits are your gateway to our five core wellness
                services. Each credit is good for one session of any core
                service - cryotherapy, infrared sauna, oxygen therapy, red light
                therapy, or compression therapy.
              </p>
              <p className="text-lg text-brand-text/80 mb-4">
                At retail pricing, a single core service session costs $30. With
                a Gold membership, your per-session cost drops to $9.99. With
                Platinum, it drops even further to just $5.81 - an 80% savings.
              </p>
              <p className="text-lg text-brand-text/80">
                Credits refresh monthly and can be used on any combination of
                core services. Mix and match based on how your body feels each
                week.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Memberships Work */}
      <section className="py-16 md:py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-3">
              How Memberships Work
            </h2>
            <p className="text-lg text-brand-text/70 max-w-2xl mx-auto">
              Simple, flexible, and designed to keep you coming back for the good
              stuff.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((step, index) => (
              <div
                key={step.title}
                className="bg-white rounded-xl shadow-md p-6 relative"
              >
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                <div className="mb-4 w-12 h-12 rounded-lg bg-brand-accent/10 flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-brand-accent" />
                </div>
                <h3 className="text-lg font-semibold text-brand-dark mb-2">
                  {step.title}
                </h3>
                <p className="text-brand-text/70 text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="py-12 bg-gradient-to-r from-brand-primary to-brand-secondary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Not Sure Which Plan Is Right for You?
          </h2>
          <p className="text-cyan-100 text-lg mb-6">
            Get in touch and we will help you find the membership that matches
            your goals. Plus, get a free core service with your first visit.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-lg bg-white px-8 py-3 text-lg font-semibold text-brand-primary hover:bg-cyan-50 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
