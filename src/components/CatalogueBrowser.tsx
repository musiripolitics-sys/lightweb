"use client";

import { useEffect, useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { FAMILIES, PRODUCTS } from "@/data/products";

const CHIP =
  "cursor-pointer border px-4 py-2 text-xs uppercase tracking-[0.1em] transition-colors";

export default function CatalogueBrowser() {
  const [family, setFamily] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  // Allow /products#<family-slug> deep links (e.g. from the footer).
  useEffect(() => {
    const slug = window.location.hash.slice(1);
    // setState after mount is required here: the hash only exists client-side,
    // and a lazy initializer would mismatch the statically exported HTML.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (FAMILIES.some((f) => f.slug === slug)) setFamily(slug);
  }, []);

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PRODUCTS.filter((p) => {
      if (family && p.family !== family) return false;
      if (!q) return true;
      return (
        p.name.toLowerCase().includes(q) ||
        p.type.toLowerCase().includes(q) ||
        p.variants.some((v) => v.code.toLowerCase().includes(q))
      );
    });
  }, [family, query]);

  return (
    <div>
      {/* Controls */}
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by family">
          <button
            type="button"
            onClick={() => setFamily(null)}
            className={`${CHIP} ${
              family === null
                ? "border-white bg-white text-[#0d0d0e]"
                : "border-white/20 text-white/60 hover:border-white/50 hover:text-white"
            }`}
          >
            All · {PRODUCTS.length}
          </button>
          {FAMILIES.map((f) => {
            const count = PRODUCTS.filter((p) => p.family === f.slug).length;
            return (
              <button
                key={f.slug}
                type="button"
                onClick={() => setFamily(family === f.slug ? null : f.slug)}
                className={`${CHIP} ${
                  family === f.slug
                    ? "border-white bg-white text-[#0d0d0e]"
                    : "border-white/20 text-white/60 hover:border-white/50 hover:text-white"
                }`}
              >
                {f.title} · {count}
              </button>
            );
          })}
        </div>

        <label className="relative block w-full max-w-xs">
          <span className="sr-only">Search fixtures</span>
          <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            aria-hidden="true"
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
          >
            <circle cx="11" cy="11" r="7" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search name or code…"
            className="w-full border border-white/15 bg-transparent py-3 pl-11 pr-4 text-sm text-white outline-none transition-colors placeholder:text-white/35 focus:border-white/50"
          />
        </label>
      </div>

      {/* Active family tagline */}
      {family && (
        <p className="mt-6 text-sm text-white/55">
          {FAMILIES.find((f) => f.slug === family)?.tagline}
        </p>
      )}

      {/* Grid */}
      {shown.length > 0 ? (
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 xl:grid-cols-4">
          {shown.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      ) : (
        <div className="mt-16 border border-white/10 p-12 text-center text-white/50">
          No fixtures match &ldquo;{query}&rdquo;. Try a model code like HN1104 or a name like Tardis.
        </div>
      )}
    </div>
  );
}
