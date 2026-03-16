import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0a2240] via-[#0d2d54] to-[#061527] py-16 md:py-20 -mt-[80px] lg:-mt-[112px] pt-[75px]">
        <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(0,102,179,0.2) 0%, transparent 65%)", filter: "blur(80px)", top: "-20%", right: "-10%" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1
            className="text-4xl md:text-5xl lg:text-[60px] font-extrabold font-[var(--font-display)] text-white leading-tight"
            style={{ textShadow: "4px 4px 0px rgba(0,0,0,0.25)" }}
          >
            Privacy Policy
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm text-[#718096] mb-10">
            Last updated: March 6, 2026
          </p>

          <div className="space-y-8 text-[#718096] leading-relaxed">
            <div>
              <h2 className="text-2xl font-extrabold font-[var(--font-display)] text-[#061527] mb-3">
                Introduction
              </h2>
              <p>
                Oxygen Wellness LLC (&quot;we,&quot; &quot;us,&quot; or
                &quot;our&quot;) operates the website oxygenaz.com. This Privacy
                Policy explains how we collect, use, disclose, and safeguard your
                information when you visit our website or use our services. Please
                read this policy carefully. By accessing or using our website, you
                agree to the terms of this Privacy Policy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold font-[var(--font-display)] text-[#061527] mb-3">
                Information We Collect
              </h2>
              <p className="mb-3">
                We may collect information about you in a variety of ways,
                including:
              </p>
              <h3 className="text-lg font-bold text-[#061527] mb-2">
                Personal Information
              </h3>
              <p className="mb-3">
                When you fill out a contact form, book an appointment, or interact
                with our website, we may collect personally identifiable
                information such as your name, email address, phone number, and
                mailing address.
              </p>
              <h3 className="text-lg font-bold text-[#061527] mb-2">
                Health-Related Information
              </h3>
              <p className="mb-3">
                As a wellness and physical therapy business, we may collect
                health-related information that you voluntarily provide to us in
                connection with our services. This information is treated with the
                highest level of confidentiality.
              </p>
              <h3 className="text-lg font-bold text-[#061527] mb-2">
                Automatically Collected Information
              </h3>
              <p>
                When you visit our website, our servers may automatically log
                standard data provided by your web browser. This may include your
                device&apos;s IP address, browser type and version, the pages you
                visit, the time and date of your visit, the time spent on each
                page, and other technical details.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold font-[var(--font-display)] text-[#061527] mb-3">
                How We Use Your Information
              </h2>
              <p className="mb-3">
                We may use the information we collect for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide, operate, and maintain our website and services</li>
                <li>To respond to your inquiries and fulfill your requests</li>
                <li>To schedule appointments and communicate with you about our services</li>
                <li>To send you marketing and promotional communications (with your consent)</li>
                <li>To improve our website, services, and overall customer experience</li>
                <li>To comply with legal obligations and protect our rights</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold font-[var(--font-display)] text-[#061527] mb-3">
                Cookies and Tracking Technologies
              </h2>
              <p className="mb-3">
                Our website may use cookies and similar tracking technologies to
                enhance your experience. Cookies are small data files stored on
                your device that help us understand how you use our website and
                improve its functionality.
              </p>
              <p>
                You can instruct your browser to refuse all cookies or to indicate
                when a cookie is being sent. However, if you do not accept
                cookies, some portions of our website may not function properly.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold font-[var(--font-display)] text-[#061527] mb-3">
                Third-Party Services
              </h2>
              <p className="mb-3">
                We may share your information with third-party service providers
                that assist us in operating our website, conducting our business,
                or serving you. These third parties have access to your
                information only to perform specific tasks on our behalf and are
                obligated to keep it confidential.
              </p>
              <p>
                We may also share information when required by law, to protect our
                rights, or in connection with a business transaction such as a
                merger or acquisition.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold font-[var(--font-display)] text-[#061527] mb-3">
                Data Security
              </h2>
              <p>
                We implement appropriate technical and organizational security
                measures to protect your personal information from unauthorized
                access, alteration, disclosure, or destruction. However, no method
                of transmission over the Internet or method of electronic storage
                is completely secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold font-[var(--font-display)] text-[#061527] mb-3">
                Your Rights
              </h2>
              <p>
                Depending on your location, you may have certain rights regarding
                your personal information, including the right to access, correct,
                or delete your data. To exercise any of these rights, please
                contact us using the information provided below.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold font-[var(--font-display)] text-[#061527] mb-3">
                Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page with an updated revision date. We
                encourage you to review this policy periodically to stay informed
                about how we are protecting your information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold font-[var(--font-display)] text-[#061527] mb-3">
                Contact Us
              </h2>
              <p>
                If you have any questions or concerns about this Privacy Policy,
                please contact us:
              </p>
              <address className="mt-3 not-italic space-y-1">
                <p className="font-bold text-[#061527]">Oxygen Wellness LLC</p>
                <p>20265 N. 59th Ave. Suite B-1</p>
                <p>Glendale, AZ 85308</p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:Contact@OxygenAZ.com"
                    className="text-[#0066B3] hover:text-[#00518F] underline"
                  >
                    Contact@OxygenAZ.com
                  </a>
                </p>
              </address>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
