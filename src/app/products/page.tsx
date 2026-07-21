import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import CatalogueBrowser from "@/components/CatalogueBrowser";
import Reveal from "@/components/Reveal";
import { PRODUCTS, FAMILIES } from "@/data/products";

export const metadata: Metadata = {
  title: "Products",
  description: `The Honorh catalogue — ${PRODUCTS.length} architectural fixtures across ${FAMILIES.length} families: COB downlights, adjustables, twins, track, wallwashers, linear, surface and outdoor.`,
};

export default function ProductsPage() {
  return (
    <SiteShell active="Products">
      {/* Intro */}
      <section className="px-[clamp(24px,5vw,72px)] pb-4 pt-[clamp(40px,8vh,90px)]">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <span className="accent-bar" />
            <p className="mt-6 text-xs uppercase tracking-[0.35em] text-black/45">The Catalogue</p>
            <h1 className="mt-3 max-w-3xl text-[clamp(34px,5.2vw,64px)] font-semibold uppercase leading-[1.08] tracking-[0.01em] text-[#0d0d0e]">
              {PRODUCTS.length} fixtures. One standard.
            </h1>
            <p className="mt-6 max-w-xl text-black/60">
              Every Honorh fixture ships with CRI ≥ 95 optics, tunable CCT from 3000K to
              6000K and a two-year warranty. Filter the range or search by model code.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Catalogue */}
      <section className="px-[clamp(24px,5vw,72px)] pb-[clamp(64px,12vh,140px)] pt-10">
        <div className="mx-auto max-w-[1440px]">
          <CatalogueBrowser />
        </div>
      </section>
    </SiteShell>
  );
}
