import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { PRODUCTS, FAMILIES } from "@/data/products";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Honorh designs and engineers premium lighting for elite interior and exterior spaces — CRI ≥ 95 optics, deep antiglare comfort, two-year warranty.",
};

const STATS = [
  { value: `${PRODUCTS.length}+`, label: "Fixtures in the range" },
  { value: `${FAMILIES.length}`, label: "Product families" },
  { value: "≥95", label: "CRI across COB range" },
  { value: "2 Yr", label: "Warranty on all products" },
];

const VALUES = [
  {
    title: "Precision",
    body: "Every fixture is engineered for deep anti-glare performance and exact beam control — from a 3° pin spot to a 120° wash.",
  },
  {
    title: "Form",
    body: "Minimal, architectural bodies that disappear into the space and let the light speak. Trim or trimless, your choice.",
  },
  {
    title: "Endurance",
    body: "Premium optics, honest thermal design and IP65 wet-area options — built to perform for years, indoors and out.",
  },
];

export default function AboutPage() {
  return (
    <SiteShell active="About Us">
      {/* Hero */}
      <section className="px-[clamp(24px,5vw,72px)] pb-10 pt-[clamp(40px,8vh,90px)]">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <span className="accent-bar" />
            <p className="mt-6 text-xs uppercase tracking-[0.35em] text-white/45">About Honorh</p>
            <h1 className="mt-3 max-w-4xl text-[clamp(32px,5vw,62px)] font-semibold uppercase leading-[1.08] tracking-[0.01em] text-white">
              Lighting for the elite, engineered without compromise
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
              Honorh is a lighting house dedicated to a single idea — that light should
              transform a space, not just fill it. We design and manufacture precision
              interior and exterior fixtures for architects, designers and discerning homes.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-white/10 px-[clamp(24px,5vw,72px)] py-14">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 70}>
              <div className="text-[clamp(34px,5vw,56px)] font-semibold leading-none text-white">{s.value}</div>
              <div className="mt-3 text-sm uppercase tracking-[0.12em] text-white/50">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Behind the light */}
      <section className="px-[clamp(24px,5vw,72px)] py-[clamp(56px,10vh,120px)]">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-[clamp(32px,4vw,72px)] lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden border border-white/10">
              <Image
                src="/images/backgrounds/behind-the-light.png"
                alt="Behind the Light — Honorh engineering"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <SectionHeading
              eyebrow="Behind the Light"
              title="Optics first, always"
            />
            <p className="mt-6 max-w-xl leading-relaxed text-white/65">
              Every Honorh fixture starts with the source: COB and SMD packages from
              world-class partners like Bridgelux and Eaglerise, matched to reflectors
              and honeycomb baffles we refine in-house. The result is light with
              CRI ≥ 95 — and R1–R15 above 90 on request — that flatters skin, stone,
              art and everything in between.
            </p>
            <p className="mt-4 max-w-xl leading-relaxed text-white/65">
              From 48V magnetic track with Tuya smart control to IP65 fixtures that
              shrug off steam and storms, the catalogue is built to give designers a
              single, dependable palette of light.
            </p>
            <Link
              href="/products/"
              className="mt-8 inline-flex items-center justify-center border border-white/80 px-7 py-4 text-sm uppercase tracking-[0.08em] text-white no-underline transition-colors hover:bg-white hover:text-[#0d0d0e]"
            >
              Explore the catalogue
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="px-[clamp(24px,5vw,72px)] pb-[clamp(56px,10vh,120px)]">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <SectionHeading title="What we stand for" tagline="Three principles behind every Honorh fixture." />
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 80} className="h-full">
                <div className="h-full bg-[#0d0d0e] p-8">
                  <h3 className="text-xl font-semibold uppercase tracking-[0.02em] text-white">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-[clamp(24px,5vw,72px)] pb-[clamp(64px,12vh,140px)]">
        <Reveal>
          <div className="mx-auto flex max-w-[1440px] flex-col items-start gap-6 border border-white/12 bg-white/[0.03] p-[clamp(28px,5vw,64px)] md:flex-row md:items-center md:justify-between">
            <h2 className="max-w-xl text-[clamp(22px,3vw,36px)] font-semibold uppercase leading-tight text-white">
              Ready to light your next project?
            </h2>
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center border border-white bg-white px-7 py-4 text-sm uppercase tracking-[0.08em] text-[#0d0d0e] no-underline transition-colors hover:bg-transparent hover:text-white"
            >
              Get in touch
            </Link>
          </div>
        </Reveal>
      </section>
    </SiteShell>
  );
}
