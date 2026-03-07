import Link from "next/link";

interface PromoCTAProps {
  variant?: "consultation" | "core-service" | "both";
}

export default function PromoCTA({ variant = "both" }: PromoCTAProps) {
  const consultation = (
    <section className="bg-[#EDF2F9] py-16">
      <div className="max-w-[1140px] mx-auto px-4 text-center">
        <p className="text-[#10173E] text-lg md:text-xl font-medium max-w-3xl mx-auto mb-8">
          Not sure where to start? Book a FREE 15&apos; consult with our
          Wellness and Sports Medicine Expert!
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#004AAD] text-white rounded-full px-6 py-3 font-bold text-sm uppercase border-2 border-[#5CE1E6] hover:bg-[#0053DA] transition-colors"
        >
          BOOK MY CONSULTATION
        </Link>
      </div>
    </section>
  );

  const coreService = (
    <section className="bg-white py-16">
      <div className="max-w-[1140px] mx-auto px-4 text-center">
        <h2 className="text-[40px] font-extrabold text-[#10173E] leading-[48px] tracking-[0.4px] max-w-3xl mx-auto mb-8">
          Get a core service for FREE when you book an appointment with us for
          the first time.
        </h2>
        <Link
          href="/contact"
          className="inline-block bg-[#0053DA] text-white rounded-full px-6 py-3 font-bold text-sm uppercase hover:bg-[#004AAD] transition-colors"
        >
          BOOK MY APPOINTMENT
        </Link>
      </div>
    </section>
  );

  if (variant === "consultation") return consultation;
  if (variant === "core-service") return coreService;

  return (
    <>
      {consultation}
      {coreService}
    </>
  );
}
