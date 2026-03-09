import type { Metadata } from "next";
import Link from "next/link";
import Memberships from "@/components/sections/Memberships";

export const metadata: Metadata = {
  title: "Membership Plans",
  description:
    "Join Oxygen Wellness membership plans. Save up to 80% on core wellness services including cryotherapy, infrared sauna, red light therapy, and more in Glendale, AZ.",
};

export default function MembershipsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0B2447] via-[#0B2447] to-[#00B4D8] py-20 md:py-28 grain">
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-[#00B4D8]/8 blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full bg-[#00B4D8]/20 blur-[80px] pointer-events-none" />
        <div className="relative z-10 max-w-[1140px] mx-auto px-4 text-center">
          <h1
            className="text-4xl md:text-6xl lg:text-[72px] font-extrabold font-[var(--font-display)] text-white leading-[1.05] tracking-tight mb-4"
            style={{ textShadow: "4px 4px 0px rgba(0,0,0,0.3)" }}
          >
            Membership Plans
          </h1>
          <p className="text-white/80 text-lg md:text-xl font-light max-w-2xl mx-auto">
            Save on the services you love with flexible membership plans designed for every wellness journey.
          </p>
        </div>
      </section>

      {/* Membership Plans Component */}
      <Memberships />

      {/* Not Sure CTA */}
      <section className="py-16 md:py-20 bg-[#F5F7FA]">
        <div className="max-w-[1140px] mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-[var(--font-display)] text-[#0B2447] tracking-tight accent-underline-center mb-4">
            Not Sure Which Plan Is Right for You?
          </h2>
          <p className="text-[#5A5A5A] text-lg mb-8 max-w-2xl mx-auto">
            Get in touch and we will help you find the membership that matches your goals. Plus, get a free core service with your first visit.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-[#00B4D8] to-[#0096B7] text-white rounded-full px-8 py-4 font-black text-sm uppercase tracking-wider shadow-[0_8px_30px_rgba(0,180,216,0.25)] hover:scale-105 hover:shadow-[0_0_30px_rgba(0,180,216,0.3)] transition-all duration-300"
          >
            CONTACT US
          </Link>
        </div>
      </section>
    </>
  );
}
