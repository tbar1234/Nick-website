"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryImage } from "@/lib/data";

export default function GalleryLightbox({
  images,
  index,
  onClose,
  onNavigate,
}: {
  images: GalleryImage[];
  index: number;
  onClose: () => void;
  onNavigate: (nextIndex: number) => void;
}) {
  const image = images[index];

  const goNext = useCallback(() => {
    onNavigate((index + 1) % images.length);
  }, [index, images.length, onNavigate]);

  const goPrev = useCallback(() => {
    onNavigate((index - 1 + images.length) % images.length);
  }, [index, images.length, onNavigate]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, goNext, goPrev]);

  if (!image) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${image.tag} — enlarged photo`}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4 animate-fade-in sm:p-8"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close enlarged photo"
        className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-sand/10 text-sand transition-colors hover:bg-sand/20"
      >
        <X size={22} />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          goPrev();
        }}
        aria-label="Previous photo"
        className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-sand/10 text-sand transition-colors hover:bg-sand/20 sm:left-6"
      >
        <ChevronLeft size={24} />
      </button>

      <div
        className="relative flex max-h-[85vh] w-full max-w-4xl flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="relative w-full overflow-hidden rounded-xl2"
          style={{ aspectRatio: `${image.width} / ${image.height}`, maxHeight: "78vh" }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 70vw, 100vw"
            className="object-contain"
            priority
          />
        </div>
      </div>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          goNext();
        }}
        aria-label="Next photo"
        className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-sand/10 text-sand transition-colors hover:bg-sand/20 sm:right-6"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
