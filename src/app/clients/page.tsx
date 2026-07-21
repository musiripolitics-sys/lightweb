import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { CLIENT_LOGOS, PARTNER_LOGOS, type Logo } from "@/data/logos";

export const metadata: Metadata = {
  title: "Our Clients",
  description:
    "Retail brands lit by Honorh — Bata, Pantaloons, Woodland, Marks & Spencer, Miniso and more — powered by partners like OSRAM, CREE, Bridgelux and Nichia.",
};

const TESTIMONIALS = [
  {
    quote:
      "Across our store rollouts, Honorh delivered consistent colour and zero-glare shopfloors — and hit every handover date. The racks finally look the way our visual team designed them.",
    name: "Retail Projects Head",
    role: "National fashion & footwear chain",
  },
  {
    quote:
      "We specified Honorh track and COB spotlights for three flagship fit-outs. Two years in, the CRI is as honest as day one and service has been immediate.",
    name: "Principal Architect",
    role: "Retail interiors studio",
  },
];

function LogoWall({ logos }: { logos: Logo[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {logos.map((logo) => (
        <div
          key={logo.file}
          className="group flex flex-col overflow-hidden border border-white/10 bg-white/[0.03] transition-colors duration-300 hover:border-white/30"
        >
          <div className="flex min-h-[110px] items-center justify-center bg-white px-8 py-6">
            <Image
              src={logo.file}
              alt={logo.name}
              width={180}
              height={80}
              className="h-12 w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="border-t border-white/10 px-4 py-2.5 text-center text-[11px] uppercase tracking-[0.14em] text-white/55 transition-colors group-hover:text-white">
            {logo.name}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ClientsPage() {
  return (
    <SiteShell active="Our Clients">
      {/* Hero */}
      <section className="px-[clamp(24px,5vw,72px)] pb-10 pt-[clamp(40px,8vh,90px)]">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <span className="accent-bar" />
            <p className="mt-6 text-xs uppercase tracking-[0.35em] text-white/45">Our Clients</p>
            <h1 className="mt-3 max-w-3xl text-[clamp(32px,5vw,62px)] font-semibold uppercase leading-[1.08] tracking-[0.01em]">
              Trusted to light the finest spaces
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
              From international fashion houses to India&rsquo;s favourite retail chains —
              brands like Bata, Marks &amp; Spencer, Woodland and Miniso trust Honorh to
              light their stores.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Client logos */}
      <section className="px-[clamp(24px,5vw,72px)] py-6">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <LogoWall logos={CLIENT_LOGOS} />
          </Reveal>
        </div>
      </section>

      {/* Partners */}
      <section className="px-[clamp(24px,5vw,72px)] py-[clamp(48px,8vh,96px)]">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <SectionHeading
              eyebrow="Technology Partners"
              title="Powered by world-class components"
              tagline="LEDs, drivers, optics and controls from the industry's most trusted names — OSRAM, CREE, Bridgelux, Nichia, Tridonic and more."
            />
          </Reveal>
          <Reveal className="mt-10">
            <LogoWall logos={PARTNER_LOGOS} />
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-[clamp(24px,5vw,72px)] pb-[clamp(64px,12vh,140px)]">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <SectionHeading title="In their words" />
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.role} delay={i * 100} className="h-full">
                <figure className="flex h-full flex-col border border-white/12 bg-white/[0.02] p-8">
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden="true" className="text-white/20">
                    <path d="M10 7H5.5A2.5 2.5 0 0 0 3 9.5v5A2.5 2.5 0 0 0 5.5 17H8v-3H6v-3h4V7Zm11 0h-4.5A2.5 2.5 0 0 0 14 9.5v5a2.5 2.5 0 0 0 2.5 2.5H19v-3h-2v-3h4V7Z" />
                  </svg>
                  <blockquote className="mt-4 text-lg leading-relaxed text-white/80">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-6 text-sm">
                    <span className="font-semibold">{t.name}</span>
                    <span className="block text-white/50">{t.role}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          {/* CTA */}
          <Reveal className="mt-[clamp(48px,8vh,88px)]">
            <div className="flex flex-col items-start gap-6 border border-white/12 bg-white/[0.02] p-[clamp(28px,5vw,64px)] md:flex-row md:items-center md:justify-between">
              <h2 className="max-w-xl text-[clamp(22px,3vw,36px)] font-semibold uppercase leading-tight">
                Join the list — light your next project with Honorh
              </h2>
              <Link
                href="/contact/"
                className="inline-flex shrink-0 items-center justify-center border border-white bg-white px-7 py-4 text-sm uppercase tracking-[0.08em] text-[#0d0d0e] no-underline transition-colors hover:bg-transparent hover:text-white"
              >
                Get in touch
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}
