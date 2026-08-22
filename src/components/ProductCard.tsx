import Image from "next/image";
import Link from "next/link";
import SpecCardOverlay from "@/components/SpecCardOverlay";
import { wattRange, type Product } from "@/data/products";

// Re-exported for existing imports (`@/components/ProductCard`).
export { wattRange };

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}/`}
      className="group relative flex aspect-[4/5] flex-col overflow-hidden rounded-xl border border-black/10 bg-white no-underline shadow-sm transition-all duration-300 hover:border-black/30 hover:shadow-xl"
    >
      {product.isNew && (
        <span className="absolute left-4 top-4 z-30 bg-[#0d0d0e] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white transition-opacity duration-300 group-hover:opacity-0">
          New
        </span>
      )}

      {/* Hover-reveal detail layer (line-art, name, specs, logo) */}
      <SpecCardOverlay product={product} />

      {/* Product photo — centered at rest, morphs to the top-right on hover */}
      <div className="absolute inset-0 z-20 origin-top-right p-[15%] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-[3%] group-hover:translate-x-[2%] group-hover:scale-[0.32]">
        <div className="relative h-full w-full">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-contain"
          />
        </div>
      </div>

      {/* Resting label — name + wattage, fades out on hover */}
      <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-white via-white/90 to-transparent px-5 pb-5 pt-8 transition-opacity duration-300 group-hover:opacity-0">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-base font-semibold uppercase tracking-[0.03em] text-[#0d0d0e]">
            {product.name}
          </h3>
          <span className="shrink-0 text-xs text-black/50">{wattRange(product)}</span>
        </div>
        <p className="mt-1 text-xs uppercase tracking-[0.08em] text-black/45">{product.type}</p>
      </div>
    </Link>
  );
}
