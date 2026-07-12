# Pezzente Services — Website

A modern, premium marketing site for Pezzente Services, built with Next.js
14 (App Router), React, TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

To build for production:

```bash
npm run build
npm run start
```

## Project structure

```
app/            Next.js App Router entry (layout, page, global styles)
components/     All page sections and UI pieces
lib/data.ts     Centralized site content — services, gallery, testimonials,
                nav links, contact info. Edit this file to update copy
                without touching component code.
lib/useReveal.ts  Scroll-reveal animation hook (respects prefers-reduced-motion)
public/images/  Optimized project photos
```

## Before you launch — things to double check

1. **Testimonials are placeholders.** `lib/data.ts` → `testimonials` contains
   sample reviews for layout purposes. Replace them with real reviews from
   Google or Facebook before publishing.
2. **"Licensed & Insured" claims.** This draft does not claim licensing or
   insurance anywhere copy-wise, since that wasn't confirmed. If Pezzente
   Services is insured and/or holds a CT home improvement contractor
   registration, add that — it's a strong trust signal for this industry.
3. **Contact form has no backend yet.** `components/ContactForm.tsx` currently
   simulates a submission. Wire it up to a real service (Formspree, Resend,
   a Next.js API route that emails Pezzenteservices@gmail.com, etc.) before
   launch so estimate requests actually arrive.
4. **Google Map embed** in `components/Contact.tsx` uses a keyless embed
   centered on "Glastonbury, CT". Swap in the exact business address (and,
   ideally, a Google Maps API key + real Place ID) once you have one you
   want public.
5. **Service area copy** lists Glastonbury plus nearby towns as an example —
   adjust to the exact towns you actually service.
6. **Favicon / social share image** — add a `favicon.ico` and an OG image at
   the sizes you prefer; the metadata in `app/layout.tsx` currently points
   at the hero photo for social previews.

## Photos

All 30 photos from the supplied project photos are included in
`public/images/`, optimized to a max dimension of 1920px. The full,
unselected set of converted photos isn't included here — if you want more
of them added to the gallery, just add entries to the `galleryImages` array
in `lib/data.ts`.

## Deployment

This is a standard Next.js app — it deploys cleanly to Vercel, Netlify, or
any Node hosting. `next build && next start` also works on a plain VPS.
