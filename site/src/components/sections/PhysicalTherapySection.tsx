import Link from "next/link";

const features = [
  {
    title: "Personalized treatment plans",
    body: "Reduce pain, move freely, and feel strong again, whether it's a new injury, surgery, or a chronic condition.",
  },
  {
    title: "Specialized services included",
    body: "From dry needling to spinal manipulation, we offer techniques to help you feel better, faster.",
  },
  {
    title: "Integrated wellness approach",
    body: "We blend traditional physical therapy with Core Services like cryotherapy, red light therapy, and infrared sauna.",
  },
];

export default function PhysicalTherapySection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1140px] mx-auto px-4 text-center">
        {/* Pill tags */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          <span className="bg-[#004AAD] text-white text-xs font-bold uppercase rounded-full px-4 py-1.5 inline-block">
            Wellness Services
          </span>
          <span className="bg-[#004AAD] text-white text-xs font-bold uppercase rounded-full px-4 py-1.5 inline-block">
            SPORTS MEDICINE/PHYSICAL THERAPY
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-[#10173E] text-[40px] font-extrabold leading-[48px] tracking-[0.4px] mb-12">
          Expert Physical Therapy
        </h1>

        {/* Feature boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {features.map((feature) => (
            <div key={feature.title} className="text-center px-4">
              <h3 className="text-[20px] font-extrabold text-[#10173E] mb-3">
                {feature.title}
              </h3>
              <p className="text-[#7A7A7A] text-base leading-relaxed">
                {feature.body}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Link
          href="/physical-therapy"
          className="inline-block bg-[#004AAD] text-white rounded-full px-6 py-3 text-sm font-bold uppercase border-2 border-[#5CE1E6] hover:bg-[#0053DA] transition-colors"
        >
          LEARN MORE ABOUT PHYSICAL THERAPY
        </Link>
      </div>
    </section>
  );
}
