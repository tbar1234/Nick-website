"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Expand } from "lucide-react";
import Reveal from "./Reveal";
import GalleryLightbox from "./GalleryLightbox";
import { galleryCategories, galleryImages, type GalleryCategory } from "@/lib/data";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? galleryImages
        : galleryImages.filter((img) => img.category === activeCategory),
    [activeCategory]
  );

  return (
    <section id="gallery" className="bg-sand py-24 lg:py-32">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-clay">
                Our Work
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="text-balance mt-4 max-w-xl font-display text-4xl leading-tight text-ink sm:text-5xl">
                A field guide to what we build.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <p className="max-w-sm text-charcoal/70">
              Every photo below is a real property we've worked on. Tap any
              image to see it full-size.
            </p>
          </Reveal>
        </div>

        <Reveal delay={160}>
          <div
            className="mt-10 flex flex-wrap gap-2"
            role="group"
            aria-label="Filter gallery by category"
          >
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                aria-pressed={activeCategory === cat}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-pine text-sand"
                    : "bg-sand-deep text-charcoal hover:bg-stone-line"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3 masonry-col">
          {filtered.map((image, i) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setLightboxIndex(i)}
              className="group relative mb-5 block w-full break-inside-avoid overflow-hidden rounded-xl2 bg-sand-deep shadow-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-clay"
              aria-label={`Expand photo: ${image.tag}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-ink/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 flex translate-y-3 items-center justify-between p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-sand">
                  {image.tag}
                </span>
                <Expand size={16} className="text-sand" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <GalleryLightbox
          images={filtered}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={(next) => setLightboxIndex(next)}
        />
      )}
    </section>
  );
}
