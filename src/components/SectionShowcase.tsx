import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import type { Section, SectionItem } from "@/data/products";

/** Grid of application-category sections, each with its fixture tiles. */
export default function SectionShowcase({ sections }: { sections: Section[] }) {
  return (
    <div className="flex flex-col gap-[clamp(56px,9vh,104px)]">
      {sections.map((section) => (
        <Reveal key={section.slug}>
          <section>
            <SectionHeading id={section.slug} title={section.title} tagline={section.blurb} />
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4 xl:grid-cols-6">
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

function SectionTile({ item }: { item: SectionItem }) {
  const inner = (
    <>
      <div className="image-plate relative aspect-square w-full">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
          className="object-contain p-5 transition-transform duration-500 ease-out group-hover:scale-110"
        />
      </div>
      <div className="flex items-center justify-between gap-2 border-t border-black/10 px-4 py-3">
        <span className="truncate text-[11px] uppercase tracking-[0.1em] text-black/65 transition-colors group-hover:text-[#0d0d0e]">
          {item.name}
        </span>
        {item.productSlug && (
          <svg
            viewBox="0 0 16 16"
            width="11"
            height="11"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
            className="shrink-0 text-black/35 transition-colors group-hover:text-[#0d0d0e]"
          >
            <path d="M2 8h11M9 3.5 13.5 8 9 12.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </div>
    </>
  );

  const cls =
    "group flex flex-col overflow-hidden border border-black/10 bg-white transition-all duration-300 hover:border-black/25 hover:shadow-md";

  return item.productSlug ? (
    <Link href={`/products/${item.productSlug}/`} className={`${cls} no-underline`}>
      {inner}
    </Link>
  ) : (
    <div className={cls}>{inner}</div>
  );
}
