import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-[#0a2240] via-[#0d2d54] to-[#061527] -mt-[80px] lg:-mt-[112px] pt-[80px] lg:pt-[112px]">
      <div className="relative z-10 max-w-2xl mx-auto px-4 text-center py-20">
        <p className="text-[#4A90CC] text-9xl font-extrabold font-[var(--font-display)] mb-4">404</p>
        <h1 className="text-3xl md:text-4xl font-extrabold font-[var(--font-display)] text-white tracking-tight mb-4">
          Page Not Found
        </h1>
        <p className="text-white/50 text-lg mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#0066B3] to-[#4A90CC] text-white rounded-full px-8 py-4 font-black text-sm uppercase tracking-wider hover:scale-105 hover:shadow-[0_8px_30px_rgba(0,102,179,0.5)] transition-all duration-300"
        >
          Go Home
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
