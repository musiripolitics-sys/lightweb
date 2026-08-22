import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteShell from "@/components/SiteShell";
import ProductGallery from "@/components/ProductGallery";
import ProductCard, { wattRange } from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import { PRODUCTS, productBySlug, familyOf } from "@/data/products";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = productBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.name} — ${product.type}`,
    description: `${product.name}: ${product.blurb} Wattage ${wattRange(product)}, CCT ${product.cct}.`,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = productBySlug(slug);
  if (!product) notFound();

  const family = familyOf(product);
  const related = PRODUCTS.filter((p) => p.family === product.family && p.slug !== product.slug).slice(0, 4);
  const hasCutout = product.variants.some((v) => v.cutout);
  const hasBeam = product.variants.some((v) => v.beam);

  return (
    <SiteShell active="Products">
      <article className="px-[clamp(24px,5vw,72px)] pt-[clamp(28px,5vh,56px)]">
        <div className="mx-auto max-w-[1440px]">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-[0.12em] text-white/40">
            <Link href="/products/" className="no-underline transition-colors hover:text-white">
              Products
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white/60">{family.title}</span>
            <span className="mx-2">/</span>
            <span className="text-white">{product.name}</span>
          </nav>

          <div className="mt-8 grid grid-cols-1 gap-[clamp(32px,4vw,64px)] lg:grid-cols-2">
            {/* Gallery */}
            <Reveal>
              <ProductGallery images={product.images} name={product.name} />
            </Reveal>

            {/* Details */}
            <Reveal delay={80}>
              <div className="flex flex-col">
                <span className="accent-bar" />
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <h1 className="text-[clamp(34px,4.5vw,56px)] font-semibold uppercase leading-none tracking-[0.01em] text-white">
                    {product.name}
                  </h1>
                  {product.isNew && (
                    <span className="border border-white/25 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/70">
                      New launch
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm uppercase tracking-[0.14em] text-white/50">{product.type}</p>
                <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/70">{product.blurb}</p>

                {/* Key facts */}
                <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-4">
                  {[
                    ["Wattage", wattRange(product)],
                    ["CCT", "3000K–6000K"],
                    ["CRI", "≥ 95"],
                    ["Warranty", "2 Years"],
                  ].map(([k, v]) => (
                    <div key={k} className="bg-white/[0.04] px-4 py-4">
                      <dt className="text-[10px] uppercase tracking-[0.18em] text-white/45">{k}</dt>
                      <dd className="mt-1.5 text-sm font-semibold text-white">{v}</dd>
                    </div>
                  ))}
                </dl>

                {/* CTAs */}
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href={`/contact/?product=${encodeURIComponent(product.name)}`}
                    className="inline-flex items-center justify-center border border-white bg-white px-7 py-4 text-sm uppercase tracking-[0.08em] text-[#0d0d0e] no-underline transition-colors hover:bg-transparent hover:text-white"
                  >
                    Request a quote
                  </Link>
                  <Link
                    href="/products/"
                    className="inline-flex items-center justify-center border border-white/40 px-7 py-4 text-sm uppercase tracking-[0.08em] text-white/80 no-underline transition-colors hover:border-white hover:text-white"
                  >
                    Back to catalogue
                  </Link>
                </div>

                <p className="mt-6 text-xs leading-relaxed text-white/40">
                  CCT options: {product.cct}. R1–R15 &gt; 90 available on request.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Spec table */}
          <Reveal className="mt-[clamp(48px,8vh,88px)]">
            <h2 className="text-xl font-semibold uppercase tracking-[0.03em] text-white">Specifications</h2>
            <div className="mt-6 overflow-x-auto border border-white/10">
              <table className="w-full min-w-[560px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.04] text-[11px] uppercase tracking-[0.14em] text-white/50">
                    <th className="px-5 py-4 font-medium">Model</th>
                    <th className="px-5 py-4 font-medium">Size (mm)</th>
                    {hasCutout && <th className="px-5 py-4 font-medium">Cut-out</th>}
                    <th className="px-5 py-4 font-medium">Wattage</th>
                    {hasBeam && <th className="px-5 py-4 font-medium">Beam</th>}
                  </tr>
                </thead>
                <tbody>
                  {product.variants.map((v) => (
                    <tr
                      key={v.code + v.watt}
                      className="border-b border-white/5 text-white/75 transition-colors last:border-b-0 hover:bg-white/[0.06] hover:text-white"
                    >
                      <td className="px-5 py-4 font-semibold text-white">{v.code}</td>
                      <td className="px-5 py-4">{v.size}</td>
                      {hasCutout && <td className="px-5 py-4">{v.cutout ?? "—"}</td>}
                      <td className="px-5 py-4">{v.watt}</td>
                      {hasBeam && <td className="px-5 py-4">{v.beam ?? "—"}</td>}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          {/* Related */}
          {related.length > 0 && (
            <Reveal className="mt-[clamp(48px,8vh,88px)] pb-[clamp(64px,12vh,140px)]">
              <div className="flex items-end justify-between gap-6">
                <h2 className="text-xl font-semibold uppercase tracking-[0.03em] text-white">
                  More from {family.title}
                </h2>
                <Link
                  href="/products/"
                  className="text-xs uppercase tracking-[0.12em] text-white/50 no-underline transition-colors hover:text-white"
                >
                  View all →
                </Link>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4 md:gap-6 xl:grid-cols-4">
                {related.map((p) => (
                  <ProductCard key={p.slug} product={p} />
                ))}
              </div>
            </Reveal>
          )}
        </div>
      </article>
    </SiteShell>
  );
}
