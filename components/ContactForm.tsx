"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { services } from "@/lib/data";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");

  // NOTE for developer: this demo submit handler only simulates a request.
  // Wire this up to a real endpoint (e.g. Formspree, Resend, or an API
  // route that emails Pezzenteservices@gmail.com) before launch.
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 700));
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-xl2 bg-white p-10 text-center shadow-card">
        <CheckCircle2 size={40} className="text-pine" />
        <h3 className="mt-4 font-display text-2xl text-ink">
          Thanks — request received.
        </h3>
        <p className="mt-2 max-w-sm text-charcoal/75">
          We'll reach out within one business day to schedule your free
          estimate.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl2 bg-white p-8 shadow-card sm:p-10"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="name" className="text-sm font-medium text-ink">
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="mt-2 w-full rounded-lg border border-stone-line bg-sand/40 px-4 py-3 text-charcoal placeholder:text-charcoal/40 focus:border-pine focus:outline-none"
            placeholder="Jane Smith"
          />
        </div>
        <div className="sm:col-span-1">
          <label htmlFor="phone" className="text-sm font-medium text-ink">
            Phone number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className="mt-2 w-full rounded-lg border border-stone-line bg-sand/40 px-4 py-3 text-charcoal placeholder:text-charcoal/40 focus:border-pine focus:outline-none"
            placeholder="(860) 555-0123"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="email" className="text-sm font-medium text-ink">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-2 w-full rounded-lg border border-stone-line bg-sand/40 px-4 py-3 text-charcoal placeholder:text-charcoal/40 focus:border-pine focus:outline-none"
            placeholder="jane@email.com"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="service" className="text-sm font-medium text-ink">
            What are you interested in?
          </label>
          <select
            id="service"
            name="service"
            defaultValue=""
            className="mt-2 w-full rounded-lg border border-stone-line bg-sand/40 px-4 py-3 text-charcoal focus:border-pine focus:outline-none"
          >
            <option value="" disabled>
              Select a service
            </option>
            {services.map((s) => (
              <option key={s.id} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="text-sm font-medium text-ink">
            Tell us about your property
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="mt-2 w-full resize-none rounded-lg border border-stone-line bg-sand/40 px-4 py-3 text-charcoal placeholder:text-charcoal/40 focus:border-pine focus:outline-none"
            placeholder="A few details help us prepare for the visit — property size, what you have in mind, timeline, etc."
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-pine px-8 py-4 text-base font-semibold text-sand transition-colors hover:bg-pine-dark disabled:opacity-70 sm:w-auto"
      >
        {status === "submitting" ? "Sending..." : "Request My Free Estimate"}
        {status !== "submitting" && <Send size={17} />}
      </button>
    </form>
  );
}
