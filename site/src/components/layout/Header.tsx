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
  const dropdownTimers = useRef<Record<string, ReturnType<typeof setTimeout>>>({});

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
        <div className="grid grid-cols-2 gap-6 rounded-xl bg-white p-[15px] shadow-[1px_1px_15px_0px_rgba(0,0,0,0.15)]">
          {/* Column 1 */}
          <div>
            {allServicesItem && (
              <Link
                href={allServicesItem.href}
                className="mb-2 block text-sm font-medium text-[#10173E] transition-colors hover:text-[#0053DA]"
              >
                {allServicesItem.label}
              </Link>
            )}
            <p className="mb-1 text-xs font-bold uppercase tracking-wide text-[#7A7A7A]">
              Core Services
            </p>
            {coreItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-1 text-sm text-[#3A416A] transition-colors hover:text-[#0053DA]"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Column 2 */}
          <div>
            <p className="mb-1 text-xs font-bold uppercase tracking-wide text-[#7A7A7A]">
              Other Services
            </p>
            {otherItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-1 text-sm text-[#3A416A] transition-colors hover:text-[#0053DA]"
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
        <div className="min-w-[180px] rounded-xl bg-white p-[15px] shadow-[1px_1px_15px_0px_rgba(0,0,0,0.15)]">
          {children.map((child) =>
            child.external ? (
              <a
                key={child.href}
                href={child.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block py-1 text-sm text-[#3A416A] transition-colors hover:text-[#0053DA]"
              >
                {child.label}
              </a>
            ) : (
              <Link
                key={child.href}
                href={child.href}
                className="block py-1 text-sm text-[#3A416A] transition-colors hover:text-[#0053DA]"
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
      {/* ── Row 1: Top Bar ── */}
      <div className="hidden bg-[#10173E] py-1.5 px-4 lg:flex lg:px-20">
        <div className="flex w-full items-center justify-between">
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-white">
            <MapPin className="h-3.5 w-3.5" />
            {SITE.fullAddress}
          </span>
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-white transition-colors hover:text-white/80"
          >
            <Phone className="h-3.5 w-3.5" />
            {SITE.phone}
          </a>
        </div>
      </div>

      {/* ── Row 2: Main Navigation ── */}
      <div className="sticky top-0 z-50 bg-white shadow-[1px_0px_15px_0px_rgba(0,0,0,0.15)]">
        <div className="flex items-center justify-between px-4 py-5 lg:px-20">
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
                    className="inline-flex items-center gap-1 text-sm font-medium uppercase tracking-wide text-[#10173E] transition-colors hover:text-[#0053DA]"
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
                  className="text-sm font-medium uppercase tracking-wide text-[#10173E] transition-colors hover:text-[#0053DA]"
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
              className="rounded-full bg-[#004AAD] px-5 py-3 text-sm font-bold uppercase text-white border-2 border-[#5CE1E6] transition-colors hover:bg-[#0053DA]"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-[#10173E] transition-colors hover:text-[#0053DA] lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* ── Mobile Navigation Panel ── */}
        {mobileOpen && (
          <nav className="border-t border-[#C3C3C4] bg-white lg:hidden">
            <div className="space-y-1 px-4 pb-6 pt-4">
              {navigation.map((item) =>
                item.children ? (
                  <div key={item.label}>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between py-2.5 text-base font-medium uppercase tracking-wide text-[#10173E] transition-colors hover:text-[#0053DA]"
                      onClick={() => toggleMobileDropdown(item.label)}
                      aria-expanded={!!mobileDropdowns[item.label]}
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          mobileDropdowns[item.label] ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {mobileDropdowns[item.label] && (
                      <div className="ml-4 space-y-1 border-l-2 border-[#5CE1E6]/40 pl-4 pb-2">
                        {item.children.map((child) =>
                          child.external ? (
                            <a
                              key={child.href}
                              href={child.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block py-1.5 text-sm text-[#3A416A] transition-colors hover:text-[#0053DA]"
                              onClick={closeMobile}
                            >
                              {child.label}
                            </a>
                          ) : (
                            <Link
                              key={child.href + child.label}
                              href={child.href}
                              className="block py-1.5 text-sm text-[#3A416A] transition-colors hover:text-[#0053DA]"
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
                    className="block py-2.5 text-base font-medium uppercase tracking-wide text-[#10173E] transition-colors hover:text-[#0053DA]"
                    onClick={closeMobile}
                  >
                    {item.label}
                  </Link>
                )
              )}

              {/* Mobile Phone + CTA */}
              <div className="border-t border-[#C3C3C4] pt-4 mt-2">
                <a
                  href={SITE.phoneHref}
                  className="flex items-center gap-2 py-2.5 text-base font-medium text-[#004AAD]"
                >
                  <Phone className="h-5 w-5" />
                  {SITE.phone}
                </a>
                <Link
                  href="/contact"
                  className="mt-2 block rounded-full bg-[#004AAD] px-5 py-3 text-center text-sm font-bold uppercase text-white border-2 border-[#5CE1E6] transition-colors hover:bg-[#0053DA]"
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
