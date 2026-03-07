import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsOfServicePage() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-brand-dark mb-2">
          Terms of Service
        </h1>
        <p className="text-sm text-gray-500 mb-10">
          Last updated: March 6, 2026
        </p>

        <div className="space-y-8 text-brand-text leading-relaxed">
          <div>
            <h2 className="text-2xl font-semibold text-brand-dark mb-3">
              Agreement to Terms
            </h2>
            <p>
              By accessing or using the website operated by Oxygen Wellness LLC
              (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) at
              oxygenaz.com, you agree to be bound by these Terms of Service. If
              you do not agree to these terms, please do not use our website.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-brand-dark mb-3">
              Use of Website
            </h2>
            <p className="mb-3">
              You may use our website for lawful purposes only. You agree not
              to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Use the website in any way that violates applicable local,
                state, or federal laws
              </li>
              <li>
                Attempt to gain unauthorized access to any portion of the
                website or its systems
              </li>
              <li>
                Transmit any harmful, threatening, or objectionable content
              </li>
              <li>
                Interfere with or disrupt the operation of the website or its
                servers
              </li>
              <li>
                Use automated means to access or collect data from the website
                without our written permission
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-brand-dark mb-3">
              Services Disclaimer
            </h2>
            <p className="mb-3">
              The information provided on our website is for general
              informational purposes only. It is not intended to be a substitute
              for professional medical advice, diagnosis, or treatment. Always
              seek the advice of a qualified health provider with any questions
              you may have regarding a medical condition.
            </p>
            <p>
              Our wellness services - including cryotherapy, infrared sauna,
              hyperbaric oxygen therapy, IV infusions, and other modalities -
              are intended to complement, not replace, conventional medical
              care. Individual results may vary and are not guaranteed.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-brand-dark mb-3">
              Physical Therapy Services
            </h2>
            <p>
              Physical therapy services at Oxygen Wellness are provided by
              licensed physical therapists. These services require an in-person
              evaluation and are subject to a separate patient agreement.
              Information about physical therapy on our website is provided for
              educational purposes and does not establish a provider - patient
              relationship.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-brand-dark mb-3">
              Intellectual Property
            </h2>
            <p>
              All content on this website - including text, graphics, logos,
              images, and software - is the property of Oxygen Wellness LLC or
              its content suppliers and is protected by United States and
              international intellectual property laws. You may not reproduce,
              distribute, modify, or create derivative works from any content
              without our prior written consent.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-brand-dark mb-3">
              Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, Oxygen Wellness LLC shall
              not be liable for any indirect, incidental, special,
              consequential, or punitive damages arising out of or related to
              your use of the website or our services. Our total liability for
              any claim arising from these terms shall not exceed the amount you
              have paid to us in the twelve months preceding the claim.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-brand-dark mb-3">
              Disclaimer of Warranties
            </h2>
            <p>
              This website and its content are provided on an &quot;as is&quot;
              and &quot;as available&quot; basis without warranties of any kind,
              either express or implied. We do not warrant that the website will
              be uninterrupted, error-free, or free of viruses or other harmful
              components.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-brand-dark mb-3">
              Modifications to Terms
            </h2>
            <p>
              We reserve the right to modify these Terms of Service at any time.
              Changes will be effective immediately upon posting to the website.
              Your continued use of the website after any changes constitutes
              acceptance of the updated terms. We encourage you to review these
              terms periodically.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-brand-dark mb-3">
              Governing Law
            </h2>
            <p>
              These Terms of Service shall be governed by and construed in
              accordance with the laws of the State of Arizona, without regard
              to its conflict of law provisions. Any disputes arising under
              these terms shall be subject to the exclusive jurisdiction of the
              courts located in Maricopa County, Arizona.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-brand-dark mb-3">
              Contact Us
            </h2>
            <p>
              If you have any questions about these Terms of Service, please
              contact us:
            </p>
            <address className="mt-3 not-italic space-y-1">
              <p className="font-semibold">Oxygen Wellness LLC</p>
              <p>20265 N. 59th Ave. Suite B-1</p>
              <p>Glendale, AZ 85308</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:Contact@OxygenAZ.com"
                  className="text-brand-primary hover:text-brand-secondary underline"
                >
                  Contact@OxygenAZ.com
                </a>
              </p>
            </address>
          </div>
        </div>
      </div>
    </section>
  );
}
