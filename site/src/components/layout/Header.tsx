"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { navigation } from "@/data/navigation";
import { SITE } from "@/lib/constants";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileDropdownOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b border-brand-border bg-brand-surface/95 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "shadow-lg shadow-black/30" : "shadow-none"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/logo.webp"
            alt={SITE.name}
            width={150}
            height={48}
            priority
            className="h-auto w-[120px] sm:w-[150px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button
                  type="button"
                  className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-brand-muted transition-colors hover:text-brand-gold"
                  aria-expanded={dropdownOpen}
                  aria-haspopup="true"
                >
                  {item.label}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {dropdownOpen && (
                  <div className="absolute left-0 top-full z-50 mt-1 w-56 rounded-lg border border-brand-border bg-brand-surface py-2 shadow-xl shadow-black/40">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-brand-muted transition-colors hover:bg-brand-elevated hover:text-brand-gold"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-brand-muted transition-colors hover:text-brand-gold"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Desktop Right - Phone + CTA */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center gap-2 text-sm font-medium text-brand-gold transition-colors hover:text-brand-gold-light"
          >
            <Phone className="h-4 w-4" />
            {SITE.phone}
          </a>
          <Link
            href="/contact"
            className="rounded-full bg-brand-gold px-5 py-2.5 text-sm font-semibold text-brand-bg transition-colors hover:bg-brand-gold-light"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-brand-muted transition-colors hover:text-brand-gold lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <nav className="border-t border-brand-border bg-brand-surface lg:hidden">
          <div className="space-y-1 px-4 pb-4 pt-2">
            {navigation.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-base font-medium text-brand-muted transition-colors hover:text-brand-gold"
                    onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                    aria-expanded={mobileDropdownOpen}
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        mobileDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {mobileDropdownOpen && (
                    <div className="ml-4 space-y-1 border-l-2 border-brand-gold/30 pl-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-md px-3 py-2 text-sm text-brand-muted transition-colors hover:text-brand-gold"
                          onClick={closeMobile}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block rounded-md px-3 py-2.5 text-base font-medium text-brand-muted transition-colors hover:text-brand-gold"
                  onClick={closeMobile}
                >
                  {item.label}
                </Link>
              )
            )}

            {/* Mobile Phone + CTA */}
            <div className="border-t border-brand-border pt-4">
              <a
                href={SITE.phoneHref}
                className="flex items-center gap-2 rounded-md px-3 py-2.5 text-base font-medium text-brand-gold transition-colors hover:text-brand-gold-light"
              >
                <Phone className="h-5 w-5" />
                {SITE.phone}
              </a>
              <Link
                href="/contact"
                className="mt-2 block rounded-full bg-brand-gold px-5 py-3 text-center text-base font-semibold text-brand-bg transition-colors hover:bg-brand-gold-light"
                onClick={closeMobile}
              >
                Book Now
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
