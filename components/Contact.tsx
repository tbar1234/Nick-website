import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Reveal from "./Reveal";
import ContactForm from "./ContactForm";
import { site } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="bg-ink py-24 lg:py-32">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <div className="text-center">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-clay">
              Get In Touch
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="text-balance mx-auto mt-4 max-w-2xl font-display text-4xl leading-tight text-sand sm:text-5xl">
              Request your free lawn or property care estimate.
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <Reveal className="flex flex-col gap-6">
            <div className="rounded-xl2 bg-sand/[0.05] p-7">
              <div className="flex items-start gap-4">
                <Phone size={20} className="mt-1 text-moss" />
                <div>
                  <p className="text-sm font-medium uppercase tracking-wide text-sand/50">
                    Call or text
                  </p>
                  <a
                    href={site.phoneHref}
                    className="mt-1 block font-display text-xl text-sand hover:text-moss"
                  >
                    {site.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-xl2 bg-sand/[0.05] p-7">
              <div className="flex items-start gap-4">
                <Mail size={20} className="mt-1 text-moss" />
                <div>
                  <p className="text-sm font-medium uppercase tracking-wide text-sand/50">
                    Email
                  </p>
                  <a
                    href={site.emailHref}
                    className="mt-1 block break-all font-display text-xl text-sand hover:text-moss"
                  >
                    {site.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-xl2 bg-sand/[0.05] p-7">
              <div className="flex items-start gap-4">
                <MapPin size={20} className="mt-1 text-moss" />
                <div>
                  <p className="text-sm font-medium uppercase tracking-wide text-sand/50">
                    Service area
                  </p>
                  <p className="mt-1 font-display text-lg text-sand">
                    Maintenance: {site.primaryServiceArea}
                  </p>
                  <p className="mt-1 text-sm text-sand/60">
                    Larger projects: {site.extendedServiceArea}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl2 bg-sand/[0.05] p-7">
              <div className="flex items-start gap-4">
                <Clock size={20} className="mt-1 text-moss" />
                <div>
                  <p className="text-sm font-medium uppercase tracking-wide text-sand/50">
                    Response time
                  </p>
                  <p className="mt-1 font-display text-xl text-sand">
                    Within 1 business day
                  </p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl2 shadow-card">
              <iframe
                title="Pezzente Services map — Glastonbury, CT"
                src="https://www.google.com/maps?q=Glastonbury,CT&output=embed"
                width="100%"
                height="220"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
