"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Phone, MapPin } from "lucide-react";
import { navigation } from "@/data/navigation";
import { SITE } from "@/lib/constants";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdowns, setMobileDropdowns] = useState<Record<string, boolean>>({});
  const [scrolled, setScrolled] = useState(false);
  const dropdownTimers = useRef<Record<string, ReturnType<typeof setTimeout>>>({});

  /* Scroll listener for sticky header effect */
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

    const allServicesItem = children.find((c) => c.group === "all");
    const coreItems = children.filter((c) => c.group === "Core Services");
    const otherItems = children.filter((c) => c.group === "Other Services");

    return (
      <div className="absolute left-0 top-full z-50 mt-0 pt-2">
        <div className="grid grid-cols-2 gap-6 rounded-xl bg-white p-[15px] shadow-[0_20px_60px_rgba(0,0,0,0.12)] ring-1 ring-black/5 border-t-3 border-t-transparent" style={{ borderImage: "linear-gradient(90deg, #00B4D8, #0B2447) 1" }}>
          {/* Column 1 */}
          <div>
            {allServicesItem && (
              <Link
                href={allServicesItem.href}
                className="mb-2 block text-sm font-bold text-[#0B2447] transition-colors hover:text-[#00B4D8]"
              >
                {allServicesItem.label}
              </Link>
            )}
            <p className="mb-1 text-xs font-black uppercase tracking-wider text-[#6B7B8D]">
              Core Services
            </p>
            {coreItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-1.5 px-2 text-sm font-medium text-[#5A6878] rounded-md transition-all hover:text-[#00B4D8] hover:bg-[#EEF1F5]/60 hover:pl-3"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Column 2 */}
          <div>
            <p className="mb-1 text-xs font-black uppercase tracking-wider text-[#6B7B8D]">
              Other Services
            </p>
            {otherItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-1.5 px-2 text-sm font-medium text-[#5A6878] rounded-md transition-all hover:text-[#00B4D8] hover:bg-[#EEF1F5]/60 hover:pl-3"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  };

  /* ── Render a simple dropdown (Learn More) ── */
  const renderSimpleDropdown = (children: typeof navigation[0]["children"]) => {
    if (!children) return null;

    return (
      <div className="absolute left-0 top-full z-50 mt-0 pt-2">
        <div className="min-w-[180px] rounded-xl bg-white p-[15px] shadow-[0_20px_60px_rgba(0,0,0,0.12)] ring-1 ring-black/5 border-t-3 border-t-transparent" style={{ borderImage: "linear-gradient(90deg, #00B4D8, #0B2447) 1" }}>
          {children.map((child) =>
            child.external ? (
              <a
                key={child.href}
                href={child.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block py-1.5 px-2 text-sm font-medium text-[#5A6878] rounded-md transition-all hover:text-[#00B4D8] hover:bg-[#EEF1F5]/60 hover:pl-3"
              >
                {child.label}
              </a>
            ) : (
              <Link
                key={child.href}
                href={child.href}
                className="block py-1.5 px-2 text-sm font-medium text-[#5A6878] rounded-md transition-all hover:text-[#00B4D8] hover:bg-[#EEF1F5]/60 hover:pl-3"
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
    <header>
      {/* ── Row 1: Top Bar (not sticky) ── */}
      <div className="hidden bg-[#0B2447] py-1.5 lg:block">
        <div className="mx-auto max-w-7xl px-4 lg:px-20 flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-white">
            <MapPin className="h-3.5 w-3.5" />
            {SITE.fullAddress}
          </span>
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-white transition-colors hover:text-[#00B4D8]"
          >
            <Phone className="h-3.5 w-3.5" />
            {SITE.phone}
          </a>
        </div>
      </div>

      {/* ── Row 2: Main Navigation (sticky, semi-transparent) ── */}
      <div
        className={`sticky top-0 z-50 transition-all duration-500 border-b ${
          scrolled
            ? "bg-white/85 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.08)] border-[#00B4D8]/30"
            : "bg-white/60 backdrop-blur-sm border-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-5 lg:px-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.webp"
              alt={SITE.name}
              width={208}
              height={60}
              priority
              className="h-auto w-[170px] lg:w-[208px]"
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
                    className="relative inline-flex items-center gap-1 text-sm font-bold uppercase tracking-wider text-[#0B2447] transition-colors hover:text-[#00B4D8] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#00B4D8] after:transition-all after:duration-300 hover:after:w-full"
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
                  className="relative text-sm font-bold uppercase tracking-wider text-[#0B2447] transition-colors hover:text-[#00B4D8] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#00B4D8] after:transition-all after:duration-300 hover:after:w-full"
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
              className="rounded-full bg-gradient-to-r from-[#00B4D8] to-[#0096B7] px-6 py-3 text-sm font-black uppercase tracking-wider text-white hover:scale-105 hover:shadow-[0_0_30px_rgba(0,180,216,0.4)] transition-all duration-300 shadow-[0_4px_15px_rgba(0,180,216,0.25)]"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-[#0B2447] transition-colors hover:text-[#00B4D8] lg:hidden"
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
                      className="flex w-full items-center justify-between py-2.5 text-base font-bold uppercase tracking-wider text-[#0B2447] transition-colors hover:text-[#00B4D8]"
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
                      <div className="ml-4 space-y-1 border-l-2 border-[#00B4D8] pl-4 pb-2">
                        {item.children.map((child) =>
                          child.external ? (
                            <a
                              key={child.href}
                              href={child.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block py-1.5 text-sm font-medium text-[#5A6878] transition-colors hover:text-[#00B4D8]"
                              onClick={closeMobile}
                            >
                              {child.label}
                            </a>
                          ) : (
                            <Link
                              key={child.href + child.label}
                              href={child.href}
                              className="block py-1.5 text-sm font-medium text-[#5A6878] transition-colors hover:text-[#00B4D8]"
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
                    className="block py-2.5 text-base font-bold uppercase tracking-wider text-[#0B2447] transition-colors hover:text-[#00B4D8]"
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
                  className="flex items-center gap-2 py-2.5 text-base font-bold text-[#00B4D8]"
                >
                  <Phone className="h-5 w-5" />
                  {SITE.phone}
                </a>
                <Link
                  href="/contact"
                  className="mt-2 block rounded-full bg-gradient-to-r from-[#00B4D8] to-[#0096B7] px-5 py-3 text-center text-sm font-black uppercase tracking-wider text-white transition-all duration-300"
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
