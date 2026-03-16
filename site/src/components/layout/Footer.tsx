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
import { footerLinks } from "@/data/navigation";
import { SITE } from "@/lib/constants";

const socialLinks = [
  { label: "Facebook", href: SITE.social.facebook, icon: Facebook },
  { label: "Instagram", href: SITE.social.instagram, icon: Instagram },
  { label: "YouTube", href: SITE.social.youtube, icon: Youtube },
  { label: "LinkedIn", href: SITE.social.linkedin, icon: Linkedin },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#061527] to-[#061527]">
      {/* ── Gradient line at top ── */}
      <div className="h-[3px] bg-gradient-to-r from-transparent via-[#0066B3]/80 to-transparent" />

      {/* ── Background pattern ── */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "url(/images/patterns/logo-pattern.png)",
          backgroundRepeat: "repeat",
        }}
      />

      {/* ── Main footer content ── */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-[75px] lg:px-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Column 1: About */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo-footer.webp"
                alt={SITE.name}
                width={200}
                height={60}
                className="h-auto w-[200px]"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Oxygen Wellness &amp; Physical Therapy is a unique haven that
              blends innovative Physical Therapy with advanced treatments. We
              also offer traditional methods such as spine adjustments, dry
              needling, therapeutic massage, and sports injury management, all
              delivering &quot;ONLY THE GOOD STUFF&quot; for comprehensive care
              and lasting results.
            </p>

            <div className="mt-6 space-y-3">
              <a
                href={SITE.phoneHref}
                className="group flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-[#0066B3]"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 group-hover:bg-[#0066B3]/15 transition-colors">
                  <Phone className="h-3.5 w-3.5" />
                </span>
                {SITE.phone}
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="group flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-[#0066B3]"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 group-hover:bg-[#0066B3]/15 transition-colors">
                  <Mail className="h-3.5 w-3.5" />
                </span>
                {SITE.email}
              </a>
              <a
                href={SITE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-[#0066B3]"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 group-hover:bg-[#0066B3]/15 transition-colors shrink-0">
                  <MapPin className="h-3.5 w-3.5" />
                </span>
                20265 N 59th Ave b1, Glendale, AZ 85308
              </a>
            </div>
          </div>

          {/* Column 2: Download Our App */}
          <div>
            <h3 className="text-base font-black uppercase tracking-wider text-[#0066B3]">
              Download Our App
            </h3>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href={SITE.apps.ios}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105"
              >
                <Image
                  src="/images/badges/app-store.webp"
                  alt="Download on the App Store"
                  width={150}
                  height={50}
                  className="h-auto w-[150px]"
                />
              </a>
              <a
                href={SITE.apps.android}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105"
              >
                <Image
                  src="/images/badges/google-play.webp"
                  alt="Get it on Google Play"
                  width={150}
                  height={50}
                  className="h-auto w-[150px]"
                />
              </a>
            </div>
          </div>

          {/* Column 3: Useful Links */}
          <div>
            <h3 className="text-base font-black uppercase tracking-wider text-[#0066B3]">
              Useful Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.map((item) => (
                <li key={item.href + item.label}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white/70 transition-all hover:text-[#0066B3] hover:translate-x-1 inline-block"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-sm text-white/70 transition-all hover:text-[#0066B3] hover:translate-x-1 inline-block"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 + 5: Hours & Follow Us stacked */}
          <div>
            {/* Hours */}
            <h3 className="text-base font-black uppercase tracking-wider text-[#0066B3]">
              Hours
            </h3>
            <dl className="mt-4 space-y-0 text-sm text-white/70">
              <div className="flex justify-between gap-4 py-2.5 border-b border-white/5">
                <dt>{SITE.hours.weekday.label}</dt>
                <dd className="whitespace-nowrap font-medium text-white/80">
                  {SITE.hours.weekday.open} - {SITE.hours.weekday.close}
                </dd>
              </div>
              <div className="flex justify-between gap-4 py-2.5">
                <dt>{SITE.hours.weekend.label}</dt>
                <dd className="whitespace-nowrap font-medium text-white/80">
                  {SITE.hours.weekend.open} - {SITE.hours.weekend.close}
                </dd>
              </div>
            </dl>

            {/* Follow Us */}
            <h3 className="mt-8 text-base font-black uppercase tracking-wider text-[#0066B3]">
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
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-[#0066B3] hover:to-[#0066B3] hover:text-white hover:border-transparent hover:shadow-[0_0_20px_rgba(0,180,216,0.4)] hover:scale-110"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#0066B3]/20 to-transparent mx-auto max-w-7xl px-4 lg:px-20" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-20 pt-6 pb-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="text-sm text-white/60">
            <p>
              &copy; 2026 Oxygen Wellness LLC. All Rights Reserved.{" "}
              <span className="hidden sm:inline">|</span>{" "}
              <Link
                href="/privacy-policy"
                className="transition-colors hover:text-[#0066B3]"
              >
                Privacy Policy
              </Link>
            </p>
          </div>

          <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
            <p className="text-xs text-white/50">
              Designed by Elizabeth Ardelt &amp; Audrey Muller
            </p>
            <p className="text-xs text-white/50">
              Built by{" "}
              <a
                href="https://caltechweb.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-[#0066B3] transition-colors"
              >
                CalTech Web
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
