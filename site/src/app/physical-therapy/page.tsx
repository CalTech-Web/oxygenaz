import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CoreServices from "@/components/sections/CoreServices";
import AdditionalServices from "@/components/sections/AdditionalServices";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Physical Therapy & Sports Medicine",
  description:
    "Expert physical therapy and sports medicine with Dr. Clint Borman. 25+ years of experience in spinal manipulation, dry needling, cupping, and more in Glendale, AZ.",
};

const techniques = [
  "Spinal manipulation",
  "Dry needling",
  "Cupping",
  "Taping",
  "Scraping",
  "1:1 stretching",
  "Exercise",
  "Education and training",
];

const ptFaqs = [
  {
    question: "What should I wear?",
    answer:
      "Wear comfortable, loose-fitting clothing that allows you to move easily. Athletic wear such as T-shirts, yoga pants, or shorts are ideal. Supportive sneakers are recommended if your session includes exercises or balance work.",
  },
  {
    question: "What happens during the first visit?",
    answer:
      "During your first visit, your physical therapist will perform a thorough evaluation, including a review of your medical history, a physical assessment, and a discussion of your goals. From there, a personalized treatment plan will be created just for you.",
  },
  {
    question: "Will physical therapy be painful?",
    answer:
      "Physical therapy should not be painful, though some treatments may cause mild discomfort as your body heals. Your therapist will always communicate with you and adjust as needed to keep you comfortable throughout your session.",
  },
  {
    question: "Can I use any of the Core Services when I go?",
    answer:
      "Yes! When you visit for physical therapy, you can also take advantage of our Core Services like cryotherapy, infrared sauna, red light therapy, compression therapy, and oxygen therapy. Your therapist may even incorporate these into your treatment plan.",
  },
  {
    question:
      "Do I need a doctor's referral to start physical therapy at Oxygen Wellness & Physical Therapy?",
    answer:
      "No, you do not need a doctor's referral. Arizona is a direct-access state, which means you can see a physical therapist without a prescription. Simply book an appointment and we'll take it from there.",
  },
  {
    question:
      "Is physical therapy at Oxygen Wellness & Physical Therapy covered by insurance?",
    answer:
      "Physical therapy at Oxygen Wellness & Physical Therapy is not billed through insurance. However, many patients are able to use their Health Savings Account (HSA) or Flexible Spending Account (FSA) to cover the cost of their sessions. We're happy to provide detailed receipts or documentation to support reimbursement through these accounts.",
  },
];

export default function PhysicalTherapyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[500px] flex items-center justify-center grain">
        <div className="absolute inset-0">
          <Image
            src="/images/heroes/pt-hero.jpg"
            alt="Physical Therapy"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#10173E]/78 via-[#10173E]/88 to-[#0A0F2C]/97" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#004AAD]/12 to-transparent" />
        </div>
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-[#5CE1E6]/8 blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full bg-[#004AAD]/20 blur-[80px] pointer-events-none" />
        <div className="relative z-10 max-w-[1140px] mx-auto px-4 text-center py-20">
          <h1
            className="text-4xl md:text-6xl lg:text-[72px] font-black text-white leading-[1.05] tracking-tight mb-4"
            style={{ textShadow: "4px 4px 0px rgba(0,0,0,0.3)" }}
          >
            Physical Therapy
          </h1>
          <p className="text-white text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Sports Medicine | Spinal Manipulation | Dry Needling | Cupping | Taping | Scraping | 1:1 Stretching | Exercise
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-[#004AAD] to-[#0053DA] text-white rounded-full px-8 py-4 font-black text-sm uppercase tracking-wider border-2 border-[#5CE1E6] hover:scale-105 animate-pulse-glow transition-transform duration-300"
          >
            BOOK TODAY
          </Link>
        </div>
      </section>

      {/* What is Physical Therapy */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="relative">
              <Image
                src="/images/content/what-is-pt.webp"
                alt="What is Physical Therapy"
                width={540}
                height={400}
                className="rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] w-full h-auto object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#10173E] tracking-tight mb-6">
                What is Physical Therapy?
              </h2>
              <p className="text-[#7A7A7A] text-lg mb-4">
                Physical therapy is a healthcare specialty that helps people restore movement, strength, and function when they&apos;ve been limited by injury, surgery, illness, or chronic conditions.
              </p>
              <p className="text-[#7A7A7A] text-lg mb-6">
                At Oxygen Wellness & Physical Therapy, we believe in treating the root cause of pain, not just the symptoms. Our licensed physical therapist will perform a detailed assessment to understand your condition, mobility limitations, and overall goals. We then design customized therapy programs that may include manual therapy, guided exercises, and state-of-the-art recovery treatments to ensure a safe and effective rehabilitation process.
              </p>
              <ul className="space-y-2 mb-8">
                {techniques.map((technique) => (
                  <li key={technique} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#5CE1E6] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#7A7A7A]">{technique}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-block bg-gradient-to-r from-[#004AAD] to-[#0053DA] text-white rounded-full px-8 py-4 font-black text-sm uppercase tracking-wider border-2 border-[#5CE1E6] shadow-[0_8px_30px_rgba(0,74,173,0.25)] hover:scale-105 hover:shadow-[0_0_30px_rgba(92,225,230,0.3)] transition-all duration-300"
              >
                BOOK APPOINTMENT
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 md:py-20 bg-[#EDF2F9]">
        <div className="max-w-[1140px] mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#10173E] tracking-tight mb-8 text-center">
            What to Expect During a Physical Therapy Appointment
          </h2>
          <ul className="max-w-3xl mx-auto space-y-4">
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-[#5CE1E6] shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-[#7A7A7A] text-lg">You can choose between our 25 or 55 minute session</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-[#5CE1E6] shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-[#7A7A7A] text-lg">You will be in a public space</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-[#5CE1E6] shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-[#7A7A7A] text-lg">Wear comfortable clothing and be prepared to move around</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-[#5CE1E6] shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-[#7A7A7A] text-lg">Get a free Core Service of your choice</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Meet our Physical Therapist */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/images/content/dr-clint.jpg"
                alt="Dr. Clint Borman"
                width={540}
                height={500}
                className="rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] w-full h-auto object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#10173E] tracking-tight mb-6">
                Meet our Physical Therapist
              </h2>
              <p className="text-[#7A7A7A] text-lg mb-4">
                Meet Dr. Clint Borman, the owner + physical therapist of Oxygen Wellness & Physical Therapy. A former collegiate baseball player who spent countless hours recovering from injuries, Clint went on to earn his Doctor of Physical Therapy degree from the University of St. Augustine in 1997.
              </p>
              <p className="text-[#7A7A7A] text-lg mb-4">
                Over 25 years in outpatient sports medicine, he&apos;s led residency programs, trained staff, overseen mergers and acquisitions, and built a reputation for empowering patients through education at every session, delivering care with kindness, humor, and a commitment to your needs. This merger strengthens the shared mission of making every moment of your journey truly centered around you.
              </p>
              <p className="text-[#7A7A7A] text-lg mb-8">
                Today, at Oxygen Wellness & Physical Therapy, Clint blends experience, education, and innovation with traditional rehabilitation and regenerative care, free from insurance constraints and focused on only the good stuff.
              </p>
              <a
                href="https://linkedin.com/in/clintborman"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-[#004AAD] to-[#0053DA] text-white rounded-full px-8 py-4 font-black text-sm uppercase tracking-wider border-2 border-[#5CE1E6] shadow-[0_8px_30px_rgba(0,74,173,0.25)] hover:scale-105 hover:shadow-[0_0_30px_rgba(92,225,230,0.3)] transition-all duration-300"
              >
                SEE CLINT&apos;S LINKEDIN
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PT FAQs */}
      <PTFAQSection faqs={ptFaqs} />

      {/* Core Services */}
      <CoreServices />

      {/* Free Core Service CTA */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="relative overflow-hidden bg-gradient-to-br from-[#10173E] to-[#004AAD] rounded-2xl p-8 text-center">
            <div className="absolute -top-10 -right-10 w-[200px] h-[200px] rounded-full bg-[#5CE1E6]/8 blur-[60px] pointer-events-none" />
            <div className="relative z-10">
              <p className="text-white text-xl font-bold mb-4">
                Get a core service for FREE when you book an appointment with us for the first time.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-[#5CE1E6] text-[#10173E] rounded-full px-8 py-4 font-black text-sm uppercase tracking-wider shadow-[0_8px_30px_rgba(0,74,173,0.25)] hover:scale-105 hover:shadow-[0_0_40px_rgba(92,225,230,0.5)] transition-all duration-300"
              >
                BOOK APPOINTMENT
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <AdditionalServices />

      {/* Contact Form Section */}
      <section className="py-16 md:py-20 bg-[#EDF2F9]">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <ContactForm source="physical-therapy-page" />
          </div>
        </div>
      </section>
    </>
  );
}

function PTFAQSection({ faqs }: { faqs: { question: string; answer: string }[] }) {
  return (
    <section className="py-16 md:py-20 bg-[#EDF2F9]">
      <div className="max-w-[1140px] mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#10173E] tracking-tight accent-underline-center mb-8 text-center">
          Physical Therapy FAQs
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <PTFAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PTFAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] overflow-hidden border-l-4 border-transparent hover:border-[#5CE1E6] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-all duration-300">
      <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer list-none">
        <span className="text-lg font-semibold text-[#10173E] group-hover:text-[#004AAD] transition-colors">
          {question}
        </span>
        <svg
          className="w-5 h-5 text-[#004AAD] shrink-0 transition-transform group-open:rotate-180"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
      <div className="px-6 pb-4">
        <p className="text-[#5A5A5A] leading-relaxed">{answer}</p>
      </div>
    </details>
  );
}
