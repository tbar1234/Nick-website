import { iconMap } from "./IconMap";
import Reveal from "./Reveal";
import StoneDivider from "./StoneDivider";
import { whyUsItems } from "@/lib/data";

export default function WhyChooseUs() {
  return (
    <section className="bg-pine py-24 lg:py-32">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-moss">
                Why Homeowners Choose Us
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="text-balance mt-4 font-display text-4xl leading-tight text-sand sm:text-5xl">
                The details we don't cut corners on.
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-sand/75">
                Think of this as our work order with you — the standards we
                hold on every property, every time, no exceptions.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <StoneDivider className="mt-8 hidden max-w-xs lg:flex" />
            </Reveal>
          </div>

          <div className="divide-y divide-sand/15 border-y border-sand/15">
            {whyUsItems.map((item, i) => {
              const Icon = iconMap[item.icon];
              const num = String(i + 1).padStart(2, "0");
              return (
                <Reveal key={item.title} delay={i * 70}>
                  <div className="flex items-start gap-5 py-6">
                    <span className="font-mono text-sm text-clay pt-1">
                      {num}
                    </span>
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sand/10 text-moss">
                      {Icon ? <Icon size={18} strokeWidth={1.75} /> : null}
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-sand">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-sand/70">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
