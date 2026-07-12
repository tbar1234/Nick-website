"use client";

import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import Logo from "./Logo";
import { navLinks, site } from "@/lib/data";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Nav/phone text swaps between white-with-shadow (readable over any hero
  // photo, before scrolling) and charcoal (once the header has a solid,
  // opaque background). Both states stay high-contrast at all times.
  const navLinkClass = scrolled
    ? "text-[0.95rem] font-body font-medium text-charcoal hover:text-pine transition-colors duration-300"
    : "text-[0.95rem] font-body font-medium text-white text-shadow-soft hover:text-white/80 transition-colors duration-300";

  const phoneClass = scrolled
    ? "flex items-center gap-2 text-sm font-medium text-charcoal hover:text-pine transition-colors duration-300"
    : "flex items-center gap-2 text-sm font-medium text-white text-shadow-soft hover:text-white/80 transition-colors duration-300";

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {/* Two stacked background layers cross-fade via opacity for a smooth
          transition (gradients/solid colors can't be transitioned directly). */}
      <div
        className={`absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/20 to-transparent transition-opacity duration-300 ${
          scrolled ? "opacity-0" : "opacity-100"
        }`}
        aria-hidden="true"
      />
      <div
        className={`absolute inset-0 bg-sand/95 backdrop-blur-sm shadow-card transition-opacity duration-300 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-content px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          <a href="#top" className="shrink-0" aria-label={`${site.name} home`}>
            <Logo variant={scrolled ? "dark" : "light"} shadow={!scrolled} />
          </a>

          <nav
            className="hidden lg:flex items-center gap-9"
            aria-label="Primary"
          >
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className={navLinkClass}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-5">
            <a href={site.phoneHref} className={phoneClass}>
              <Phone size={16} strokeWidth={2} />
              {site.phone}
            </a>
            <a
              href="#contact"
              className="rounded-full bg-pine px-6 py-2.5 text-sm font-semibold text-sand hover:bg-pine-dark transition-colors shadow-card"
            >
              Get a Free Estimate
            </a>
          </div>

          <button
            type="button"
            className={`lg:hidden inline-flex items-center justify-center rounded-full p-2 transition-colors duration-300 ${
              scrolled ? "text-ink" : "text-white text-shadow-soft"
            }`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`lg:hidden fixed inset-x-0 top-20 bottom-0 bg-sand transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav
          className="flex flex-col gap-1 px-6 py-8"
          aria-label="Mobile primary"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="py-4 text-xl font-display text-ink border-b border-stone-line"
            >
              {link.label}
            </a>
          ))}
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 mt-6 text-base font-medium text-charcoal"
          >
            <Phone size={18} />
            {site.phone}
          </a>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-6 rounded-full bg-pine px-6 py-4 text-center text-base font-semibold text-sand"
          >
            Get a Free Estimate
          </a>
        </nav>
      </div>
    </header>
  );
}
