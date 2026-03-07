import Link from "next/link";
import { membershipPlans } from "@/data/memberships";

export default function Memberships() {
  return (
    <section className="relative">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/patterns/wellness-services-bg.jpg')",
        }}
      />

      {/* Dark overlay with pattern */}
      <div className="absolute inset-0 bg-[#10173E]/90" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "url('/images/patterns/talking-bubbles.webp')",
          backgroundRepeat: "repeat",
        }}
      />

      {/* Content */}
      <div className="relative z-10 py-[100px] px-4">
        <div className="max-w-[1140px] mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-[40px] font-extrabold text-white leading-[48px] tracking-[0.4px] mb-4">
              Our Membership Plans
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Want better deals? These are our four most Popular Plans, but CALL
              or take a TOUR and experience our full menu of Plans.
            </p>
          </div>

          {/* Pricing cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {membershipPlans.map((plan) => (
              <div
                key={plan.id}
                className="bg-[#EDF2F9] rounded-xl p-8 flex flex-col min-h-[500px]"
              >
                {/* Plan name */}
                <h3 className="text-[#10173E] text-2xl font-extrabold mb-2">
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mb-4">
                  <span className="text-[#10173E] text-4xl font-extrabold">
                    ${plan.price}
                  </span>
                  <span className="text-[#10173E] text-lg">/mo</span>
                </div>

                {/* Ideal for */}
                <p className="italic text-[#7A7A7A] text-sm mb-4">
                  Ideal for: {plan.idealFor}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-[#10173E] text-sm"
                    >
                      <span className="text-[#004AAD] mt-1 shrink-0">
                        &#8226;
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Signup button */}
                <Link
                  href="/contact"
                  className="bg-[#004AAD] text-white rounded-full px-6 py-3 text-sm font-bold uppercase w-full text-center border-2 border-[#5CE1E6] hover:bg-[#0053DA] transition-colors block"
                >
                  SIGNUP
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
