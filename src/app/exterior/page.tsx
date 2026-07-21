import type { Metadata } from "next";
import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import CollectionHero from "@/components/CollectionHero";
import SectionShowcase from "@/components/SectionShowcase";
import Reveal from "@/components/Reveal";
import { EXTERIOR_SECTIONS } from "@/data/products";

export const metadata: Metadata = {
  title: "Exterior Lighting",
  description:
    "Honorh exterior lighting — bollards, gate lanterns, wall lights, pole lighting, spike lights and facade highlighters built for the elements.",
};

export default function ExteriorPage() {
  return (
    <SiteShell active="Exterior">
      <div className="-mt-[88px]">
        <CollectionHero
          image="/images/backgrounds/exterior.png"
          eyebrow="Exterior Lighting"
          title="Light that lives outdoors"
          body="Bollards, lanterns, facade washers and street lighting — weather-sealed fixtures that frame entrances, guide paths and dramatise architecture after dark."
          sections={EXTERIOR_SECTIONS}
        />
      </div>

      <div className="px-[clamp(24px,5vw,72px)] py-[clamp(56px,9vh,104px)]">
        <div className="mx-auto max-w-[1440px]">
          <SectionShowcase sections={EXTERIOR_SECTIONS} />

          {/* CTA */}
          <Reveal className="mt-[clamp(56px,9vh,104px)]">
            <div className="flex flex-col items-start gap-6 border border-white/12 bg-white/[0.02] p-[clamp(28px,5vw,64px)] md:flex-row md:items-center md:justify-between">
              <h2 className="max-w-xl text-[clamp(22px,3vw,36px)] font-semibold uppercase leading-tight">
                Planning a landscape or facade project?
              </h2>
              <Link
                href="/contact/"
                className="inline-flex shrink-0 items-center justify-center border border-white bg-white px-7 py-4 text-sm uppercase tracking-[0.08em] text-[#0d0d0e] no-underline transition-colors hover:bg-transparent hover:text-white"
              >
                Get a Quote
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </SiteShell>
  );
}
