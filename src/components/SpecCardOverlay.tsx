import Image from "next/image";
import type { Product } from "@/data/products";

/**
 * The hover-reveal detail layer for a product card. It holds everything EXCEPT
 * the product photo (which the parent card morphs into the top-right corner):
 * the line-art, name + code top-left, the CCT / Watts / (Feature) / Dimensions
 * block, and the logo bottom-right. Each element fades/slides in on hover.
 */
export default function SpecCardOverlay({ product }: { product: Product }) {
  const code = product.variants[0]?.code ?? "";
  const watts = Array.from(new Set(product.variants.map((v) => v.watt))).join(", ");
  const dims = Array.from(new Set(product.variants.map((v) => `${v.size} (${v.watt})`)));
  const shownDims = dims.slice(0, 4);
  const extraDims = dims.length - shownDims.length;

  const pad = "p-[clamp(16px,7%,28px)]";
  const reveal = "opacity-0 transition-all duration-500 ease-out group-hover:opacity-100";

  return (
    <div className="pointer-events-none absolute inset-0 z-10">
      {/* Line-art: angled header divider + bottom-left angular marks */}
      <svg
        viewBox="0 0 300 380"
        preserveAspectRatio="none"
        aria-hidden="true"
        className={`absolute inset-0 h-full w-full ${reveal} delay-100`}
        fill="none"
        stroke="#0d0d0e"
      >
        <path d="M0 92 L204 92 L300 160" strokeOpacity="0.55" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        <path d="M0 300 L92 352 L200 352" strokeOpacity="0.38" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        <path d="M48 376 L100 330" strokeOpacity="0.38" strokeWidth="1" vectorEffect="non-scaling-stroke" />
      </svg>

      {/* Name + code — top-left */}
      <div className={`absolute left-0 top-0 max-w-[64%] ${pad} -translate-y-1 group-hover:translate-y-0 ${reveal}`}>
        <h4 className="line-clamp-2 text-[15px] font-bold uppercase leading-[1.1] tracking-[0.01em] text-[#0d0d0e] md:text-[17px]">
          {product.name}
        </h4>
        {code && (
          <p className="mt-1.5 text-[11px] uppercase tracking-[0.08em] text-black/45">{code}</p>
        )}
      </div>

      {/* Specs — middle band */}
      <dl
        className={`absolute inset-x-0 top-[34%] flex flex-col gap-2.5 px-[clamp(16px,7%,28px)] text-[11px] leading-snug ${reveal} delay-150 translate-y-2 group-hover:translate-y-0`}
      >
        <div>
          <dt className="inline font-semibold text-[#0d0d0e]">CCT: </dt>
          <dd className="inline text-black/65">{product.cct}</dd>
        </div>
        <div>
          <dt className="inline font-semibold text-[#0d0d0e]">Watts: </dt>
          <dd className="inline text-black/65">{watts}</dd>
        </div>
        {product.feature && (
          <div>
            <dt className="inline font-semibold text-[#0d0d0e]">Feature: </dt>
            <dd className="inline text-black/65">{product.feature}</dd>
          </div>
        )}
        <div>
          <dt className="font-semibold text-[#0d0d0e]">Dimensions:</dt>
          <dd className="mt-1 flex flex-col gap-0.5 text-black/65">
            {shownDims.map((d) => (
              <span key={d}>{d}</span>
            ))}
            {extraDims > 0 && <span className="text-black/45">+{extraDims} more</span>}
          </dd>
        </div>
      </dl>

      {/* Logo — bottom-right */}
      <div className={`absolute bottom-0 right-0 ${pad} ${reveal} delay-200`}>
        <Image
          src="/images/logo.png"
          alt="Honorh"
          width={130}
          height={44}
          className="logo-invert h-4 w-auto opacity-80"
        />
      </div>
    </div>
  );
}
