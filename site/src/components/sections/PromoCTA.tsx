import Link from "next/link";

export default function PromoCTA() {
  return (
    <section className="py-16 bg-gradient-to-r from-brand-gold/20 via-brand-gold/10 to-brand-gold/20 border-y border-brand-gold/30">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-white mb-4">
          Get a Core Service for FREE
        </h2>
        <p className="text-lg text-brand-gold max-w-2xl mx-auto mb-8">
          Book an appointment with us for the first time and receive a
          complimentary core service.
        </p>
        <Link
          href="/contact"
          className="inline-block rounded-lg bg-brand-bg px-8 py-3 text-lg font-semibold text-brand-gold border border-brand-gold hover:bg-brand-surface transition-colors"
        >
          Book Your Free Session
        </Link>
      </div>
    </section>
  );
}
