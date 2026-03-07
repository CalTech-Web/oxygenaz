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
      <section className="bg-[#10173E] py-20 md:py-28">
        <div className="max-w-[1140px] mx-auto px-4 text-center">
          <h1
            className="text-[80px] font-extrabold text-white mb-4 leading-tight"
            style={{ textShadow: "4px 4px 0px rgba(0,0,0,0.25)" }}
          >
            Membership Plans
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
            Save on the services you love with flexible membership plans designed for every wellness journey.
          </p>
        </div>
      </section>

      {/* Membership Plans Component */}
      <Memberships />

      {/* Not Sure CTA */}
      <section className="py-16 bg-[#EDF2F9]">
        <div className="max-w-[1140px] mx-auto px-4 text-center">
          <h2 className="text-[40px] font-extrabold text-[#10173E] mb-4">
            Not Sure Which Plan Is Right for You?
          </h2>
          <p className="text-[#7A7A7A] text-lg mb-8 max-w-2xl mx-auto">
            Get in touch and we will help you find the membership that matches your goals. Plus, get a free core service with your first visit.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#004AAD] text-white rounded-full px-8 py-3 text-sm font-bold uppercase border-2 border-[#5CE1E6] hover:bg-[#0053DA] transition-colors"
          >
            CONTACT US
          </Link>
        </div>
      </section>
    </>
  );
}
