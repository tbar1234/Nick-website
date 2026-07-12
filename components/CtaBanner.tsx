import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import Reveal from "./Reveal";
import { site } from "@/lib/data";

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-ink py-28 lg:py-36">
      <div className="absolute inset-0">
        <Image
          src="/images/cta-firepit-patio.jpg"
          alt="Paver patio with a fire pit set up for evening entertaining"
          fill
          sizes="100vw"
          className="object-cover object-[50%_30%]"
        />
        <div className="absolute inset-0 bg-ink/80" />
      </div>

      <div className="relative mx-auto max-w-content px-6 text-center lg:px-10">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-moss">
            Let's Get Started
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="text-balance mx-auto mt-4 max-w-2xl font-display text-4xl leading-tight text-sand sm:text-5xl">
            Ready for lawn and property care you can count on?
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mx-auto mt-5 max-w-lg text-lg text-sand/80">
            From weekly mowing to seasonal clean-ups and garden maintenance,
            we'll build a care plan around your property — with larger
            landscape projects available when you're ready for more.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-sand/40 px-8 py-4 text-base font-semibold text-sand transition-colors hover:bg-sand/10"
            >
              <Phone size={17} />
              {site.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
