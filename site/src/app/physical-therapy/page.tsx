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
    question: "Do I need a referral to see a physical therapist?",
    answer:
      "No, you do not need a referral or prescription. Arizona allows direct access to physical therapy, so you can schedule an appointment directly with us.",
  },
  {
    question: "How long is a physical therapy session?",
    answer:
      "We offer 25-minute focused sessions and 55-minute comprehensive sessions. Your therapist will recommend the best option based on your condition and goals.",
  },
  {
    question: "Does insurance cover physical therapy at Oxygen Wellness?",
    answer:
      "Our services are not billed through insurance. However, HSA and FSA accounts typically cover our sessions. We provide detailed receipts for reimbursement purposes.",
  },
  {
    question: "What should I wear to a physical therapy appointment?",
    answer:
      "Wear comfortable, athletic clothing that allows you to move freely. This helps your therapist assess your movement and perform treatments effectively.",
  },
  {
    question: "How many sessions will I need?",
    answer:
      "The number of sessions depends on your specific condition, goals, and how your body responds to treatment. Dr. Borman will create a personalized plan and adjust it as you progress.",
  },
];

export default function PhysicalTherapyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[500px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/heroes/pt-hero.jpg"
            alt="Physical Therapy"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#10173E]/75" />
        </div>
        <div className="relative z-10 max-w-[1140px] mx-auto px-4 text-center py-20">
          <h1
            className="text-[80px] font-extrabold text-white mb-4 leading-tight"
            style={{ textShadow: "4px 4px 0px rgba(0,0,0,0.25)" }}
          >
            Physical Therapy
          </h1>
          <p className="text-white text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Sports Medicine | Spinal Manipulation | Dry Needling | Cupping | Taping | Scraping | 1:1 Stretching | Exercise
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#004AAD] rounded-full px-8 py-3 text-sm font-bold uppercase hover:bg-gray-100 transition-colors"
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
                className="rounded-xl shadow-[1px_1px_15px_0px_rgba(0,0,0,0.15)] w-full h-auto object-cover"
              />
            </div>
            <div>
              <h2 className="text-[40px] font-extrabold text-[#10173E] mb-6">
                What is Physical Therapy?
              </h2>
              <p className="text-[#7A7A7A] text-lg mb-4">
                Physical therapy is a healthcare specialty focused on restoring movement, reducing pain, and improving physical function. At Oxygen Wellness, our approach combines hands-on manual techniques with evidence-based modalities to help you move better and feel your best.
              </p>
              <p className="text-[#7A7A7A] text-lg mb-6">
                Whether you are recovering from an injury, managing chronic pain, or looking to optimize your athletic performance, our physical therapy program is designed to meet you where you are and help you reach your goals.
              </p>
              <ul className="space-y-2 mb-8">
                {techniques.map((technique) => (
                  <li key={technique} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#004AAD] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#7A7A7A]">{technique}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-block bg-[#004AAD] text-white rounded-full px-8 py-3 text-sm font-bold uppercase border-2 border-[#5CE1E6] hover:bg-[#0053DA] transition-colors"
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
          <h2 className="text-[40px] font-extrabold text-[#10173E] mb-8 text-center">
            What to Expect During a Physical Therapy Appointment
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-xl shadow-[1px_1px_15px_0px_rgba(0,0,0,0.15)] p-6">
              <h3 className="text-lg font-bold text-[#10173E] mb-2">25-Minute Focused Session</h3>
              <p className="text-[#7A7A7A]">
                Ideal for targeted concerns, follow-ups, and maintenance visits. Get hands-on care that addresses your primary issue efficiently.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-[1px_1px_15px_0px_rgba(0,0,0,0.15)] p-6">
              <h3 className="text-lg font-bold text-[#10173E] mb-2">55-Minute Comprehensive Session</h3>
              <p className="text-[#7A7A7A]">
                For complex conditions, multiple areas of concern, or initial evaluations. Allows time for thorough assessment and multi-technique treatment.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-[1px_1px_15px_0px_rgba(0,0,0,0.15)] p-6">
              <h3 className="text-lg font-bold text-[#10173E] mb-2">Integrated Approach</h3>
              <p className="text-[#7A7A7A]">
                Your treatment plan may incorporate our core wellness services, including cryotherapy, red light therapy, compression therapy, and infrared sauna, all under one roof.
              </p>
            </div>
          </div>
          <div className="mt-10 bg-[#004AAD] rounded-xl p-6 text-center max-w-3xl mx-auto">
            <p className="text-white text-lg font-bold">
              Get a free Core Service of your choice when you book your first PT appointment!
            </p>
          </div>
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
                className="rounded-xl shadow-[1px_1px_15px_0px_rgba(0,0,0,0.15)] w-full h-auto object-cover"
              />
            </div>
            <div>
              <h2 className="text-[40px] font-extrabold text-[#10173E] mb-6">
                Meet our Physical Therapist
              </h2>
              <p className="text-[#7A7A7A] text-lg mb-4">
                Dr. Clint Borman earned his Doctor of Physical Therapy degree from the University of St. Augustine in 1997 and has dedicated over 25 years to helping patients recover, perform, and thrive.
              </p>
              <p className="text-[#7A7A7A] text-lg mb-4">
                As a former collegiate baseball player, Dr. Borman understands the demands athletes place on their bodies and the determination it takes to return to peak performance after injury. That firsthand experience drives his patient-centered approach.
              </p>
              <p className="text-[#7A7A7A] text-lg mb-4">
                He empowers patients through education and delivers care with kindness, humor, and a commitment to your needs.
              </p>
              <p className="text-[#7A7A7A] text-lg mb-8">
                Throughout his career, he has led residency programs, trained staff across multiple clinics, and guided organizations through growth, all while maintaining his primary focus on one-on-one patient care.
              </p>
              <a
                href="https://linkedin.com/in/clintborman"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#004AAD] text-white rounded-full px-8 py-3 text-sm font-bold uppercase border-2 border-[#5CE1E6] hover:bg-[#0053DA] transition-colors"
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
        <h2 className="text-[40px] font-extrabold text-[#10173E] mb-8 text-center">
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
    <details className="group bg-white rounded-xl shadow-[1px_1px_15px_0px_rgba(0,0,0,0.15)] overflow-hidden">
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
        <p className="text-[#7A7A7A] leading-relaxed">{answer}</p>
      </div>
    </details>
  );
}
