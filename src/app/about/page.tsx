import type { Metadata } from "next";
import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Honorh designs and engineers premium lighting for elite interior and exterior spaces.",
};

const STATS = [
  { value: "15+", label: "Years of lighting craft" },
  { value: "500+", label: "Signature installations" },
  { value: "6", label: "Product families" },
  { value: "40+", label: "Cities illuminated" },
];

const VALUES = [
  {
    title: "Precision",
    body: "Every fixture is engineered for deep anti-glare performance and exact beam control.",
  },
  {
    title: "Form",
    body: "Minimal, architectural bodies that disappear into the space and let the light speak.",
  },
  {
    title: "Endurance",
    body: "Premium optics and thermal design built to perform for years, indoors and out.",
  },
];

export default function AboutPage() {
  return (
    <SiteShell active="About Us">
      {/* Hero */}
      <section className="px-[clamp(24px,5vw,72px)] pb-10 pt-[clamp(48px,10vh,110px)]">
        <div className="mx-auto max-w-[1360px]">
          <p className="text-xs uppercase tracking-[0.35em] text-white/45">About Honorh</p>
          <h1 className="mt-4 max-w-4xl text-[clamp(32px,5vw,62px)] font-semibold uppercase leading-[1.08] tracking-[0.01em]">
            Lighting for the elite, engineered without compromise
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
            Honorh is a lighting house dedicated to a single idea — that light should
            transform a space, not just fill it. We design and manufacture precision
            interior and exterior fixtures for architects, designers and discerning homes.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-white/10 px-[clamp(24px,5vw,72px)] py-14">
        <div className="mx-auto grid max-w-[1360px] grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="text-[clamp(34px,5vw,56px)] font-semibold leading-none">{s.value}</div>
              <div className="mt-3 text-sm uppercase tracking-[0.12em] text-white/50">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="px-[clamp(24px,5vw,72px)] py-[clamp(56px,10vh,120px)]">
        <div className="mx-auto max-w-[1360px]">
          <SectionHeading title="What we stand for" tagline="Three principles behind every Honorh fixture." />
          <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 md:grid-cols-3">
            {VALUES.map((v) => (
              <div key={v.title} className="bg-[#0d0d0e] p-8">
                <h3 className="text-xl font-semibold uppercase tracking-[0.02em]">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-[clamp(24px,5vw,72px)] pb-[clamp(64px,12vh,140px)]">
        <div className="mx-auto flex max-w-[1360px] flex-col items-start gap-6 border border-white/12 p-[clamp(28px,5vw,64px)] md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-xl text-[clamp(22px,3vw,36px)] font-semibold uppercase leading-tight">
            Ready to light your next project?
          </h2>
          <Link
            href="/contact"
            className="inline-flex min-w-[175px] items-center justify-center border border-white/90 px-7 py-4 text-sm uppercase tracking-[0.08em] text-white no-underline transition-colors hover:bg-white hover:text-[#0d0d0e]"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
