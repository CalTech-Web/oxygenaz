import Link from "next/link";
import { Check } from "lucide-react";
import { membershipPlans } from "@/data/memberships";

export default function Memberships() {
  return (
    <section className="py-16 md:py-20 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-3">
            Membership Plans
          </h2>
          <p className="text-lg text-brand-text/70">
            Choose the plan that fits your wellness journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {membershipPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white rounded-xl shadow-md p-8 flex flex-col ${
                plan.highlighted
                  ? "ring-2 ring-brand-accent"
                  : ""
              }`}
            >
              {plan.badge && (
                <span
                  className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-sm font-semibold text-white ${
                    plan.highlighted
                      ? "bg-brand-accent"
                      : "bg-brand-primary"
                  }`}
                >
                  {plan.badge}
                </span>
              )}

              <h3 className="text-2xl font-bold text-brand-dark mb-2 text-center">
                {plan.name}
              </h3>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-brand-primary">
                  ${plan.price}
                </span>
                <span className="text-brand-text/60">/{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                    <span className="text-brand-text text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`block text-center rounded-lg px-6 py-3 font-semibold transition-colors ${
                  plan.highlighted
                    ? "bg-brand-accent text-white hover:bg-cyan-500"
                    : "bg-brand-primary text-white hover:bg-brand-secondary"
                }`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
