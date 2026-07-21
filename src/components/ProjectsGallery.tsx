"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { Work } from "@/data/works";

export default function ProjectsGallery({ works }: { works: Work[] }) {
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (dir: number) => setOpen((i) => (i === null ? i : (i + dir + works.length) % works.length)),
    [works.length],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, step]);

  const current = open === null ? null : works[open];

  return (
    <>
      {/* Mosaic grid */}
      <div className="grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-3">
        {works.map((work, i) => (
          <button
            key={work.image}
            type="button"
            onClick={() => setOpen(i)}
            className={`group relative block cursor-pointer overflow-hidden border border-black/10 ${
              i % 5 === 0 ? "lg:col-span-2" : ""
            }`}
          >
            <div className={`relative w-full ${i % 5 === 0 ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
              <Image
                src={work.image}
                alt={work.title}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 text-left">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.04em] text-white">{work.title}</h3>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-white/70">{work.type}</p>
                </div>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-white/50 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                  </svg>
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {current && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          onClick={close}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={close}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center border border-white/30 text-white transition-colors hover:bg-white hover:text-black"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>

          <button
            type="button"
            aria-label="Previous"
            onClick={(e) => { e.stopPropagation(); step(-1); }}
            className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/25 text-white transition-colors hover:bg-white hover:text-black md:left-6"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 5l-7 7 7 7" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={(e) => { e.stopPropagation(); step(1); }}
            className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/25 text-white transition-colors hover:bg-white hover:text-black md:right-6"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <figure className="relative flex max-h-[86vh] w-full max-w-[1200px] flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-[76vh] w-full">
              <Image
                src={current.image}
                alt={current.title}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
            <figcaption className="mt-4 flex items-center justify-center gap-3 text-center text-white">
              <span className="text-sm font-semibold uppercase tracking-[0.04em]">{current.title}</span>
              <span className="text-white/40">·</span>
              <span className="text-xs uppercase tracking-[0.14em] text-white/60">{current.type}</span>
              <span className="ml-2 text-xs text-white/40">
                {(open ?? 0) + 1} / {works.length}
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
