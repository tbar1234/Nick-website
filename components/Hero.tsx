import Image from "next/image";
import { ArrowDown, ArrowRight } from "lucide-react";
import { site, stats } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/hero-stone-steps.jpg"
          alt="Natural stone steps and retaining wall built into a wooded hillside landscape"
          fill
          priority
          sizes="100vw"
          className="object-cover animate-ken-burns"
        />
        {/* Vertical gradient: grounds the text block at the bottom of the frame */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-transparent" />
        {/* Horizontal gradient: concentrates contrast behind the left-aligned
            copy while leaving the right side of the photo clear. Tuned to
            stay legible without flattening the photography. */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink/75 via-ink/25 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-content px-6 pb-20 pt-40 lg:px-10 lg:pb-28">
        <p className="font-mono text-xs tracking-[0.32em] uppercase text-white/75 text-shadow-soft mb-6">
          Est. {site.established} — {site.addressLine}
        </p>

        <h1 className="text-balance max-w-3xl font-display text-[2.75rem] leading-[1.05] text-white text-shadow-soft sm:text-6xl lg:text-[5rem]">
          Professional Property Maintenance,{" "}
          <em className="font-normal italic text-moss">Season</em> After
          Season.
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90 text-shadow-soft">
          From weekly lawn mowing and garden maintenance to mulching,
          seasonal cleanups, and larger landscape projects, Pezzente Services
          provides dependable, professional care that keeps residential and
          commercial properties looking their best throughout Glastonbury.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-sand px-8 py-4 text-base font-semibold text-ink shadow-soft transition-transform hover:-translate-y-0.5"
          >
            Get a Free Estimate
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <a
            href="#gallery"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/50 px-8 py-4 text-base font-semibold text-white text-shadow-soft transition-colors hover:bg-white/10"
          >
            View Our Work
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-white/25 pt-8 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-2xl text-white text-shadow-soft sm:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-white/70">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to learn more"
        className="absolute bottom-8 right-8 z-10 hidden h-12 w-12 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-white/10 lg:flex"
      >
        <ArrowDown size={18} />
      </a>
    </section>
  );
}
