import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { footerServices, footerCompany } from "@/data/navigation";
import { SITE } from "@/lib/constants";

const socialLinks = [
  { label: "Facebook", href: SITE.social.facebook, icon: Facebook },
  { label: "Instagram", href: SITE.social.instagram, icon: Instagram },
  { label: "YouTube", href: SITE.social.youtube, icon: Youtube },
  { label: "LinkedIn", href: SITE.social.linkedin, icon: Linkedin },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 - Company Info */}
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo.webp"
                alt={SITE.name}
                width={150}
                height={48}
                className="h-auto w-[140px] brightness-0 invert"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-gray-300">
              Evidence-based wellness and physical therapy in Glendale, AZ.
              Cryotherapy, infrared sauna, hyperbaric oxygen, IV infusions, and
              expert physical therapy with 25+ years of experience.
            </p>

            <div className="mt-6 space-y-3">
              <a
                href={SITE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm text-gray-300 transition-colors hover:text-[#06b6d4]"
              >
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#06b6d4]" />
                {SITE.fullAddress}
              </a>
              <a
                href={SITE.phoneHref}
                className="flex items-center gap-3 text-sm text-gray-300 transition-colors hover:text-[#06b6d4]"
              >
                <Phone className="h-4 w-4 flex-shrink-0 text-[#06b6d4]" />
                {SITE.phone}
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-3 text-sm text-gray-300 transition-colors hover:text-[#06b6d4]"
              >
                <Mail className="h-4 w-4 flex-shrink-0 text-[#06b6d4]" />
                {SITE.email}
              </a>
            </div>
          </div>

          {/* Column 2 - Services */}
          <div>
            <h3 className="text-base font-semibold tracking-wide">Services</h3>
            <ul className="mt-4 space-y-2.5">
              {footerServices.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-300 transition-colors hover:text-[#06b6d4]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Company */}
          <div>
            <h3 className="text-base font-semibold tracking-wide">Company</h3>
            <ul className="mt-4 space-y-2.5">
              {footerCompany.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-300 transition-colors hover:text-[#06b6d4]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Hours & Social */}
          <div>
            <h3 className="text-base font-semibold tracking-wide">Hours</h3>
            <dl className="mt-4 space-y-2 text-sm text-gray-300">
              <div className="flex justify-between">
                <dt>{SITE.hours.weekday.label}</dt>
                <dd>
                  {SITE.hours.weekday.open} - {SITE.hours.weekday.close}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt>{SITE.hours.weekend.label}</dt>
                <dd>
                  {SITE.hours.weekend.open} - {SITE.hours.weekend.close}
                </dd>
              </div>
            </dl>

            {/* Social Media */}
            <h3 className="mt-8 text-base font-semibold tracking-wide">
              Follow Us
            </h3>
            <div className="mt-4 flex gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-gray-300 transition-colors hover:bg-[#06b6d4] hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            {/* App Download Links */}
            <h3 className="mt-8 text-base font-semibold tracking-wide">
              Download Our App
            </h3>
            <div className="mt-4 flex flex-col gap-2">
              <a
                href={SITE.apps.ios}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-white/10 px-4 py-2.5 text-sm font-medium text-gray-200 transition-colors hover:bg-white/20"
              >
                App Store
              </a>
              <a
                href={SITE.apps.android}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-white/10 px-4 py-2.5 text-sm font-medium text-gray-200 transition-colors hover:bg-white/20"
              >
                Google Play
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-sm text-gray-400 sm:flex-row lg:px-8">
          <p>&copy; 2026 Oxygen Wellness LLC. All Rights Reserved.</p>
          <p>
            Powered by{" "}
            <a
              href="https://caltechweb.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#06b6d4] transition-colors hover:text-white"
            >
              CalTech Web
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
