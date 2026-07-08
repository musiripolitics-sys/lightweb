import Image from "next/image";
import type { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex aspect-[3/4] flex-col bg-white p-7 text-black transition-transform duration-300 hover:-translate-y-1">
      <h3 className="text-lg font-semibold uppercase tracking-[0.01em] leading-tight">
        {product.name}
      </h3>
      <p className="mt-1 text-sm text-black/55">{product.code}</p>

      <div className="relative mt-4 flex flex-1 items-center justify-center">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-contain p-2"
          />
        ) : (
          <ProductPlaceholder />
        )}
      </div>
    </article>
  );
}

/** Neutral fixture silhouette shown until a real product photo is added. */
function ProductPlaceholder() {
  return (
    <svg
      viewBox="0 0 120 120"
      className="h-28 w-28 text-black/15 transition-colors duration-300 group-hover:text-black/25"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M46 78a24 24 0 1 1 28 0c-3 2-5 5-5 9v3H51v-3c0-4-2-7-5-9Z" />
      <line x1="52" y1="98" x2="68" y2="98" />
      <line x1="54" y1="106" x2="66" y2="106" />
    </svg>
  );
}
