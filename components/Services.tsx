import { ArrowUpRight, Check } from "lucide-react";
import Reveal from "./Reveal";
import StoneDivider from "./StoneDivider";
import { iconMap } from "./IconMap";
import { services, type Service } from "@/lib/data";

function ServiceCard({ service, delay }: { service: Service; delay: number }) {
  const Icon = iconMap[service.icon];
  return (
    <Reveal delay={delay}>
      <div className="group relative flex h-full flex-col rounded-xl2 border border-sand/10 bg-sand/[0.04] p-8 transition-colors hover:bg-sand/[0.07]">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pine/40 text-moss">
          {Icon ? <Icon size={22} strokeWidth={1.75} /> : null}
        </div>
        <h3 className="mt-6 font-display text-xl text-sand">
          {service.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-sand/70">
          {service.description}
        </p>
        <ul className="mt-5 space-y-2">
          {service.bullets.map((b) => (
            <li
              key={b}
              className="flex items-center gap-2 text-sm text-sand/60"
            >
              <Check size={14} className="shrink-0 text-clay" />
              {b}
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-sand transition-colors group-hover:text-moss"
        >
          Get a quote
          <ArrowUpRight
            size={15}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      </div>
    </Reveal>
  );
}

export default function Services() {
  const maintenance = services.filter((s) => s.tier === "maintenance");
  const projects = services.filter((s) => s.tier === "project");

  return (
    <section id="services" className="bg-ink py-24 lg:py-32">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-clay">
                What We Do
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="text-balance mt-4 max-w-xl font-display text-4xl leading-tight text-sand sm:text-5xl">
                The recurring care that keeps Glastonbury properties looking
                their best.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <p className="max-w-sm text-sand/70">
              Every service below is handled in-house by our own crew — no
              subcontractors passing your project down the line.
            </p>
          </Reveal>
        </div>

        {/* Primary tier: recurring maintenance — the core of the business */}
        <Reveal delay={160}>
          <p className="mt-16 font-mono text-xs uppercase tracking-[0.28em] text-moss">
            Recurring Maintenance
          </p>
        </Reveal>
        <Reveal delay={200}>
          <h3 className="mt-3 max-w-xl font-display text-2xl text-sand sm:text-[1.75rem]">
            The services most Glastonbury properties rely on, week after
            week.
          </h3>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {maintenance.map((service, i) => (
            <ServiceCard key={service.id} service={service} delay={i * 60} />
          ))}
        </div>

        <Reveal delay={100}>
          <StoneDivider className="my-16 max-w-md" />
        </Reveal>

        {/* Secondary tier: larger, less frequent projects */}
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-moss">
            Larger Projects
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h3 className="mt-3 max-w-xl font-display text-2xl text-sand sm:text-[1.75rem]">
            When your property needs more than maintenance.
          </h3>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((service, i) => (
            <ServiceCard key={service.id} service={service} delay={i * 60} />
          ))}
        </div>
      </div>
    </section>
  );
}
