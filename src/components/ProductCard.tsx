import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";

/** Wattage range summary, e.g. "7W – 18W" or "12W". */
export function wattRange(product: Product): string {
  const watts = product.variants.map((v) => v.watt);
  return watts.length > 1 ? `${watts[0]} – ${watts[watts.length - 1]}` : watts[0] ?? "";
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}/`}
      className="group flex flex-col overflow-hidden border border-white/10 bg-white/[0.03] no-underline transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.05]"
    >
      {/* Photo plate */}
      <div className="image-plate relative aspect-square overflow-hidden">
        {product.isNew && (
          <span className="absolute left-4 top-4 z-10 bg-[#0d0d0e] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
            New
          </span>
        )}
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-contain p-[18%] transition-transform duration-500 ease-out group-hover:scale-110"
        />
      </div>

      {/* Meta */}
      <div className="flex flex-1 flex-col gap-1 p-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-base font-semibold uppercase tracking-[0.03em] text-white">
            {product.name}
          </h3>
          <span className="shrink-0 text-xs text-white/45">{wattRange(product)}</span>
        </div>
        <p className="text-xs uppercase tracking-[0.08em] text-white/45">{product.type}</p>
        <span className="mt-3 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] text-white/35 transition-colors group-hover:text-white">
          View fixture
          <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path d="M2 8h11M9 3.5 13.5 8 9 12.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
