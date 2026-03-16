"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Phone, MapPin, Snowflake, Flame, Wind, Lightbulb, Gauge, Waves, Syringe, Dna, Scale, ArrowRight } from "lucide-react";
import { navigation } from "@/data/navigation";
import { SITE } from "@/lib/constants";

const serviceIcons: Record<string, typeof Snowflake> = {
  Cryotherapy: Snowflake,
  "Infrared Sauna": Flame,
  "Oxygen Therapy": Wind,
  "Red Light Therapy": Lightbulb,
  "Compression Therapy": Gauge,
  "Hyperbaric Oxygen Therapy": Waves,
  "IV Infusions & Vitamin Shots": Syringe,
  "Anti Aging Peptides": Dna,
  "Weight Loss Program": Scale,
};

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdowns, setMobileDropdowns] = useState<Record<string, boolean>>({});
  const [scrolled, setScrolled] = useState(false);
  const dropdownTimers = useRef<Record<string, ReturnType<typeof setTimeout>>>({});

  /* Scroll listener for header effect */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileDropdowns({});
  };

  const toggleMobileDropdown = (label: string) => {
    setMobileDropdowns((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const handleMouseEnter = (label: string) => {
    if (dropdownTimers.current[label]) {
      clearTimeout(dropdownTimers.current[label]);
    }
    setOpenDropdown(label);
  };

  const handleMouseLeave = (label: string) => {
    dropdownTimers.current[label] = setTimeout(() => {
      setOpenDropdown((current) => (current === label ? null : current));
    }, 150);
  };

  /* ── Render the Wellness Services mega-dropdown ── */
  const renderWellnessDropdown = (children: typeof navigation[0]["children"]) => {
    if (!children) return null;

    const coreItems = children.filter((c) => c.group === "Core Services");
    const otherItems = children.filter((c) => c.group === "Other Services");

    return (
      <div className="absolute -left-4 top-full z-50 mt-0 pt-3">
        <div className="w-[560px] rounded-2xl bg-[#061527] p-6 shadow-[0_25px_80px_rgba(0,0,0,0.35)] ring-1 ring-white/10">
          <div className="grid grid-cols-2 gap-5">
            {/* Core Services column */}
            <div>
              <p className="mb-3 text-[10px] font-black uppercase tracking-[0.2em] text-[#0066B3]">
                Core Services
              </p>
              <div className="space-y-0.5">
                {coreItems.map((item) => {
                  const Icon = serviceIcons[item.label] || Wind;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group/item flex items-center gap-3 rounded-lg px-3 py-2.5 transition-all duration-200 hover:bg-white/8"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#0066B3]/15 transition-colors duration-200 group-hover/item:bg-[#0066B3]/30">
                        <Icon className="h-4 w-4 text-[#4A90CC] transition-colors group-hover/item:text-white" />
                      </div>
                      <span className="text-sm font-semibold text-white/70 transition-colors group-hover/item:text-white">
                        {item.label}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Other Services column */}
            <div>
              <p className="mb-3 text-[10px] font-black uppercase tracking-[0.2em] text-[#0066B3]">
                Other Services
              </p>
              <div className="space-y-0.5">
                {otherItems.map((item) => {
                  const Icon = serviceIcons[item.label] || Wind;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group/item flex items-center gap-3 rounded-lg px-3 py-2.5 transition-all duration-200 hover:bg-white/8"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#0066B3]/15 transition-colors duration-200 group-hover/item:bg-[#0066B3]/30">
                        <Icon className="h-4 w-4 text-[#4A90CC] transition-colors group-hover/item:text-white" />
                      </div>
                      <span className="text-sm font-semibold text-white/70 transition-colors group-hover/item:text-white">
                        {item.label}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom CTA strip */}
          <div className="mt-4 pt-4 border-t border-white/10">
            <Link
              href="/services"
              className="group/cta flex items-center justify-between rounded-lg bg-[#0066B3]/10 px-4 py-3 transition-all duration-200 hover:bg-[#0066B3]/20"
            >
              <div>
                <p className="text-sm font-bold text-white">View All Services</p>
                <p className="text-xs text-white/40">Explore our full range of wellness treatments</p>
              </div>
              <ArrowRight className="h-4 w-4 text-[#0066B3] transition-transform duration-200 group-hover/cta:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    );
  };

  /* ── Render a simple dropdown (Learn More) ── */
  const renderSimpleDropdown = (children: typeof navigation[0]["children"]) => {
    if (!children) return null;

    return (
      <div className="absolute left-0 top-full z-50 mt-0 pt-3">
        <div className="min-w-[200px] rounded-2xl bg-[#061527] p-3 shadow-[0_25px_80px_rgba(0,0,0,0.35)] ring-1 ring-white/10">
          {children.map((child) =>
            child.external ? (
              <a
                key={child.href}
                href={child.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2.5 px-3 text-sm font-semibold text-white/70 rounded-lg transition-all duration-200 hover:text-white hover:bg-white/8"
              >
                {child.label}
              </a>
            ) : (
              <Link
                key={child.href}
                href={child.href}
                className="block py-2.5 px-3 text-sm font-semibold text-white/70 rounded-lg transition-all duration-200 hover:text-white hover:bg-white/8"
              >
                {child.label}
              </Link>
            )
          )}
        </div>
      </div>
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* ── Row 1: Top Bar ── */}
      <div className="hidden lg:block py-1.5 bg-[#061527]">
        <div className="mx-auto max-w-7xl px-4 flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-white">
            <MapPin className="h-3.5 w-3.5" />
            {SITE.fullAddress}
          </span>
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-white transition-colors hover:text-[#0066B3]"
          >
            <Phone className="h-3.5 w-3.5" />
            {SITE.phone}
          </a>
        </div>
      </div>

      {/* ── Row 2: Main Navigation ── */}
      <div
        className={`transition-all duration-500 border-b ${
          scrolled
            ? "bg-white/20 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.08)] border-[#0066B3]/20"
            : "bg-black/20 backdrop-blur-sm border-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-5">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 relative">
            <Image
              src="/images/logo.webp"
              alt={SITE.name}
              width={208}
              height={60}
              priority
              className={`h-auto w-[170px] lg:w-[208px] transition-opacity duration-500 ${scrolled ? "opacity-100" : "opacity-0"}`}
            />
            <Image
              src="/images/logo-footer.webp"
              alt={SITE.name}
              width={208}
              height={60}
              className={`absolute top-0 left-0 h-auto w-[170px] lg:w-[208px] transition-opacity duration-500 ${scrolled ? "opacity-0" : "opacity-100"}`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 lg:flex">
            {navigation.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={() => handleMouseLeave(item.label)}
                >
                  <button
                    type="button"
                    className={`relative inline-flex items-center gap-1 text-sm font-bold uppercase tracking-wider transition-colors hover:text-[#0066B3] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#0066B3] after:transition-all after:duration-300 hover:after:w-full ${
                      scrolled ? "text-[#061527]" : "text-white"
                    }`}
                    aria-expanded={openDropdown === item.label}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        openDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {openDropdown === item.label &&
                    (item.label === "Wellness Services"
                      ? renderWellnessDropdown(item.children)
                      : renderSimpleDropdown(item.children))}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`relative text-sm font-bold uppercase tracking-wider transition-colors hover:text-[#0066B3] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#0066B3] after:transition-all after:duration-300 hover:after:w-full ${
                    scrolled ? "text-[#061527]" : "text-white"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="rounded-full bg-gradient-to-r from-[#0066B3] to-[#00518F] px-6 py-3 text-sm font-black uppercase tracking-wider text-white hover:scale-105 hover:shadow-[0_0_30px_rgba(0,102,179,0.4)] transition-all duration-300 shadow-[0_4px_15px_rgba(0,102,179,0.25)]"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className={`inline-flex items-center justify-center rounded-md p-2 transition-colors hover:text-[#0066B3] lg:hidden ${
              scrolled ? "text-[#061527]" : "text-white"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* ── Mobile Navigation Panel ── */}
        {mobileOpen && (
          <nav className="border-t border-gray-100 bg-white/98 backdrop-blur-sm lg:hidden">
            <div className="space-y-1 px-4 pb-6 pt-4">
              {navigation.map((item) =>
                item.children ? (
                  <div key={item.label}>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between py-2.5 text-base font-bold uppercase tracking-wider text-[#061527] transition-colors hover:text-[#0066B3]"
                      onClick={() => toggleMobileDropdown(item.label)}
                      aria-expanded={!!mobileDropdowns[item.label]}
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${
                          mobileDropdowns[item.label] ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {mobileDropdowns[item.label] && (
                      <div className="ml-4 space-y-1 border-l-2 border-[#0066B3] pl-4 pb-2">
                        {item.children.map((child) =>
                          child.external ? (
                            <a
                              key={child.href}
                              href={child.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block py-1.5 text-sm font-medium text-[#4A5568] transition-colors hover:text-[#0066B3]"
                              onClick={closeMobile}
                            >
                              {child.label}
                            </a>
                          ) : (
                            <Link
                              key={child.href + child.label}
                              href={child.href}
                              className="block py-1.5 text-sm font-medium text-[#4A5568] transition-colors hover:text-[#0066B3]"
                              onClick={closeMobile}
                            >
                              {child.label}
                            </Link>
                          )
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block py-2.5 text-base font-bold uppercase tracking-wider text-[#061527] transition-colors hover:text-[#0066B3]"
                    onClick={closeMobile}
                  >
                    {item.label}
                  </Link>
                )
              )}

              {/* Mobile Phone + CTA */}
              <div className="border-t border-gray-200 pt-4 mt-2">
                <a
                  href={SITE.phoneHref}
                  className="flex items-center gap-2 py-2.5 text-base font-bold text-[#0066B3]"
                >
                  <Phone className="h-5 w-5" />
                  {SITE.phone}
                </a>
                <Link
                  href="/contact"
                  className="mt-2 block rounded-full bg-gradient-to-r from-[#0066B3] to-[#00518F] px-5 py-3 text-center text-sm font-black uppercase tracking-wider text-white transition-all duration-300"
                  onClick={closeMobile}
                >
                  Book Now
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
