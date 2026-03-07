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
    <footer className="border-t border-brand-border bg-brand-surface">
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
                className="h-auto w-[140px]"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-brand-muted">
              Evidence-based wellness and physical therapy in Glendale, AZ.
              Cryotherapy, infrared sauna, hyperbaric oxygen, IV infusions, and
              expert physical therapy with 25+ years of experience.
            </p>

            <div className="mt-6 space-y-3">
              <a
                href={SITE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm text-brand-muted transition-colors hover:text-brand-white"
              >
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-gold" />
                {SITE.fullAddress}
              </a>
              <a
                href={SITE.phoneHref}
                className="flex items-center gap-3 text-sm text-brand-muted transition-colors hover:text-brand-white"
              >
                <Phone className="h-4 w-4 flex-shrink-0 text-brand-gold" />
                {SITE.phone}
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-3 text-sm text-brand-muted transition-colors hover:text-brand-white"
              >
                <Mail className="h-4 w-4 flex-shrink-0 text-brand-gold" />
                {SITE.email}
              </a>
            </div>
          </div>

          {/* Column 2 - Services */}
          <div>
            <h3 className="text-base font-semibold tracking-wide text-brand-gold">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {footerServices.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-brand-muted transition-colors hover:text-brand-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Company */}
          <div>
            <h3 className="text-base font-semibold tracking-wide text-brand-gold">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5">
              {footerCompany.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-brand-muted transition-colors hover:text-brand-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Hours & Social */}
          <div>
            <h3 className="text-base font-semibold tracking-wide text-brand-gold">
              Hours
            </h3>
            <dl className="mt-4 space-y-2 text-sm text-brand-muted">
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
            <h3 className="mt-8 text-base font-semibold tracking-wide text-brand-gold">
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
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-border text-brand-muted transition-colors hover:border-brand-gold hover:text-brand-gold"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            {/* App Download Links */}
            <h3 className="mt-8 text-base font-semibold tracking-wide text-brand-gold">
              Download Our App
            </h3>
            <div className="mt-4 flex flex-col gap-2">
              <a
                href={SITE.apps.ios}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-brand-border px-4 py-2.5 text-sm font-medium text-brand-muted transition-colors hover:border-brand-gold hover:text-brand-gold"
              >
                App Store
              </a>
              <a
                href={SITE.apps.android}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-brand-border px-4 py-2.5 text-sm font-medium text-brand-muted transition-colors hover:border-brand-gold hover:text-brand-gold"
              >
                Google Play
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-brand-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-sm text-brand-muted sm:flex-row lg:px-8">
          <p>&copy; 2026 Oxygen Wellness LLC. All Rights Reserved.</p>
          <p>
            Powered by{" "}
            <a
              href="https://caltechweb.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-gold transition-colors hover:text-brand-gold-light"
            >
              CalTech Web
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
