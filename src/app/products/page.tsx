import type { Metadata } from "next";
import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import { CATEGORIES } from "@/data/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "The Honorh catalogue — recessed downlights, wall lights, bollards, floodlights, gate & pillar lanterns and garden spotlights.",
};

export default function ProductsPage() {
  return (
    <SiteShell active="Products">
      {/* Intro */}
      <section className="px-[clamp(24px,5vw,72px)] pb-6 pt-[clamp(48px,10vh,110px)]">
        <div className="mx-auto max-w-[1360px]">
          <p className="text-xs uppercase tracking-[0.35em] text-white/45">The Catalogue</p>
          <h1 className="mt-4 max-w-3xl text-[clamp(34px,5.2vw,64px)] font-semibold uppercase leading-[1.08] tracking-[0.01em]">
            Lighting, engineered for every space
          </h1>
          <p className="mt-6 max-w-xl text-white/60">
            Six families of precision fixtures — from deep-antiglare downlights to
            architectural floodlights. Explore the range below.
          </p>

          {/* Category quick-nav */}
          <nav className="mt-10 flex flex-wrap gap-x-6 gap-y-3" aria-label="Product categories">
            {CATEGORIES.map((c) => (
              <Link
                key={c.slug}
                href={`#${c.slug}`}
                className="text-sm uppercase tracking-[0.08em] text-white/55 no-underline transition-colors hover:text-white"
              >
                {c.title}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      {/* Category sections */}
      <div className="mx-auto flex max-w-[1360px] flex-col gap-[clamp(56px,9vh,104px)] px-[clamp(24px,5vw,72px)] pb-[clamp(64px,12vh,140px)] pt-10">
        {CATEGORIES.map((category) => (
          <section key={category.slug}>
            <SectionHeading id={category.slug} title={category.title} tagline={category.tagline} />
            <div className="mt-9 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {category.products.map((product) => (
                <ProductCard key={product.name + product.code} product={product} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </SiteShell>
  );
}
