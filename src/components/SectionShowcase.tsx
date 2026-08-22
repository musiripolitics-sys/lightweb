import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import SpecCardOverlay from "@/components/SpecCardOverlay";
import { productBySlug, type Section, type SectionItem } from "@/data/products";

/** Grid of application-category sections, each with its fixture tiles. */
export default function SectionShowcase({ sections }: { sections: Section[] }) {
  return (
    <div className="flex flex-col gap-[clamp(56px,9vh,104px)]">
      {sections.map((section) => (
        <Reveal key={section.slug}>
          <section>
            <SectionHeading id={section.slug} title={section.title} tagline={section.blurb} />
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4">
              {section.items.map((item) => (
                <SectionTile key={item.image} item={item} />
              ))}
            </div>
          </section>
        </Reveal>
      ))}
    </div>
  );
}

const MORPH =
  "absolute inset-0 z-20 origin-top-right p-[15%] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-[3%] group-hover:translate-x-[2%] group-hover:scale-[0.32]";

function SectionTile({ item }: { item: SectionItem }) {
  const product = item.productSlug ? productBySlug(item.productSlug) : undefined;

  // Catalogue fixture — morphing spec card on hover.
  if (product) {
    return (
      <Link
        href={`/products/${product.slug}/`}
        className="group relative flex aspect-[4/5] flex-col overflow-hidden rounded-xl border border-black/10 bg-white no-underline transition-all duration-300 hover:border-black/30 hover:shadow-xl"
      >
        <SpecCardOverlay product={product} />
        <div className={MORPH}>
          <div className="relative h-full w-full">
            <Image
              src={item.image}
              alt={item.name}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-contain"
            />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-white via-white/90 to-transparent px-4 pb-3.5 pt-8 transition-opacity duration-300 group-hover:opacity-0">
          <span className="text-[11px] uppercase tracking-[0.1em] text-black/70">{item.name}</span>
        </div>
      </Link>
    );
  }

  // Render-only fixture (no catalogue entry) — static tile.
  return (
    <div className="group relative flex aspect-[4/5] flex-col overflow-hidden rounded-xl border border-black/10 bg-white transition-all duration-300 hover:border-black/25 hover:shadow-md">
      <div className="image-plate relative flex-1">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-contain p-6 transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>
      <div className="border-t border-black/10 px-4 py-3">
        <span className="truncate text-[11px] uppercase tracking-[0.1em] text-black/70">{item.name}</span>
      </div>
    </div>
  );
}
