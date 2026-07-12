import { Star, Quote } from "lucide-react";
import Reveal from "./Reveal";
// NOTE: testimonials sourced from lib/data.ts are placeholders — replace
// with real Google/Facebook reviews before this site goes live.
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-sand py-24 lg:py-32">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <div className="text-center">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-clay">
              Customer Reviews
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="text-balance mx-auto mt-4 max-w-2xl font-display text-4xl leading-tight text-ink sm:text-5xl">
              Trusted by homeowners across Glastonbury.
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <figure className="relative flex h-full flex-col rounded-xl2 bg-white p-8 shadow-card">
                <Quote
                  size={32}
                  className="text-sand-deep"
                  strokeWidth={1.5}
                />
                <div className="mt-4 flex gap-1" aria-hidden="true">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star
                      key={idx}
                      size={16}
                      className="fill-clay text-clay"
                    />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-lg leading-relaxed text-charcoal">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 border-t border-stone-line pt-4">
                  <p className="font-display text-base text-ink">{t.name}</p>
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-charcoal/50">
                    {t.location}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
