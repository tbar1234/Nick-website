import { Facebook, Phone, Mail } from "lucide-react";
import Logo from "./Logo";
import { navLinks, site } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-[#101613] pt-16 pb-8">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 border-b border-sand/10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo variant="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-sand/60">
              Glastonbury's trusted team for weekly lawn mowing, garden
              maintenance, and property upkeep since {site.established} —
              with larger landscape projects available throughout the
              surrounding area.
            </p>
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pezzente Services on Facebook"
              className="mt-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-sand/10 text-sand transition-colors hover:bg-sand/20"
            >
              <Facebook size={18} />
            </a>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-sand/40">
              Navigate
            </p>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-sand/70 hover:text-sand"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-sand/40">
              Contact
            </p>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={site.phoneHref}
                  className="flex items-center gap-2 text-sm text-sand/70 hover:text-sand"
                >
                  <Phone size={14} /> {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={site.emailHref}
                  className="flex items-center gap-2 text-sm text-sand/70 hover:text-sand"
                >
                  <Mail size={14} /> {site.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-sand/40">
              Service Area
            </p>
            <p className="mt-4 text-sm leading-relaxed text-sand/70">
              Maintenance: {site.primaryServiceArea}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-sand/70">
              Larger projects: {site.extendedServiceArea}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 pt-8 text-xs text-sand/40 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Designed &amp; built for a business that shows up.</p>
        </div>
      </div>
    </footer>
  );
}
