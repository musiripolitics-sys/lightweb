import type { Metadata } from "next";
import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import CollectionHero from "@/components/CollectionHero";
import SectionShowcase from "@/components/SectionShowcase";
import Reveal from "@/components/Reveal";
import { INTERIOR_SECTIONS } from "@/data/products";

export const metadata: Metadata = {
  title: "Interior Lighting",
  description:
    "Honorh interior lighting — COB spotlights, magnetic track, linears, wallwashers and surface fixtures for homes, retail and hospitality.",
};

export default function InteriorPage() {
  return (
    <SiteShell active="Interior" headerOnDark>
      <div className="-mt-[88px]">
        <CollectionHero
          image="/images/backgrounds/interior.png"
          imageOn="/images/backgrounds/interior-hover.png"
          eyebrow="Interior Lighting"
          title="Sculpt every room with light"
          body="Nine families of interior fixtures — from deep-antiglare COB spotlights to 48V magnetic track — designed to elevate homes, offices, hotels and retail."
          sections={INTERIOR_SECTIONS}
        />
      </div>

      <div className="px-[clamp(24px,5vw,72px)] py-[clamp(56px,9vh,104px)]">
        <div className="mx-auto max-w-[1440px]">
          <SectionShowcase sections={INTERIOR_SECTIONS} />

          {/* CTA */}
          <Reveal className="mt-[clamp(56px,9vh,104px)]">
            <div className="flex flex-col items-start gap-6 border border-black/12 bg-[#f6f6f5] p-[clamp(28px,5vw,64px)] md:flex-row md:items-center md:justify-between">
              <h2 className="max-w-xl text-[clamp(22px,3vw,36px)] font-semibold uppercase leading-tight text-[#0d0d0e]">
                Browse full specifications in the catalogue
              </h2>
              <Link
                href="/products/"
                className="inline-flex shrink-0 items-center justify-center border border-[#0d0d0e] bg-[#0d0d0e] px-7 py-4 text-sm uppercase tracking-[0.08em] text-white no-underline transition-colors hover:bg-transparent hover:text-[#0d0d0e]"
              >
                View catalogue
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </SiteShell>
  );
}
