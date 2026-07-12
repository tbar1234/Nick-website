import Image from "next/image";
import { Leaf } from "lucide-react";
import Reveal from "./Reveal";
import StoneDivider from "./StoneDivider";
import { site } from "@/lib/data";

const points = [
  "Locally owned and operated in Glastonbury, CT",
  "The same trusted crew on every recurring visit — not a rotating cast",
  "Residential and commercial maintenance plans built around your schedule",
  "Larger projects — installations, restorations, hardscape — handled by the same team",
];

export default function About() {
  return (
    <section id="about" className="bg-sand py-24 lg:py-32">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20 items-center">
          <Reveal className="relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl2 shadow-soft">
              <Image
                src="/images/about-garden-bed.jpg"
                alt="Layered perennial and shrub garden bed maintained by Pezzente Services"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-6 hidden w-48 rounded-xl2 bg-pine p-5 text-sand shadow-soft sm:block">
              <Leaf size={22} className="mb-3 text-moss" />
              <p className="font-display text-lg leading-snug">
                Since {site.established}
              </p>
              <p className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-sand/70">
                Serving Glastonbury &amp; beyond
              </p>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-clay">
                About Pezzente Services
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="text-balance mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
                The team behind your lawn, garden,
                <em className="italic text-pine"> and grounds.</em>
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-charcoal/90">
                Founded in {site.established}, Pezzente Services has grown
                into Glastonbury's trusted choice for weekly lawn mowing,
                garden maintenance, and year-round grounds care — for
                homeowners and businesses alike. We built our reputation the
                slow way: by showing up on schedule, tending every lawn and
                bed with care, and treating each property like it's the only
                one on our route.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-charcoal/90">
                Beyond our regular maintenance routes, our crew also takes on
                garden installations, yard restorations, and larger
                landscape construction — patios, retaining walls, and full
                property transformations — for clients throughout the
                surrounding towns.
              </p>
            </Reveal>

            <Reveal delay={260}>
              <StoneDivider className="my-8 max-w-sm" />
            </Reveal>

            <ul className="space-y-4">
              {points.map((point, i) => (
                <Reveal key={point} delay={280 + i * 60}>
                  <li className="flex items-start gap-3 text-charcoal/90">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-clay" />
                    <span>{point}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
