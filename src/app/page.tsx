import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import LogoMarquee from "@/components/LogoMarquee";
import Reveal from "@/components/Reveal";
import { FEATURED, PRODUCTS, FAMILIES } from "@/data/products";
import { CLIENT_LOGOS } from "@/data/logos";

const STATS = [
  { value: `${PRODUCTS.length}+`, label: "Fixtures in range" },
  { value: `${FAMILIES.length}`, label: "Product families" },
  { value: "≥95", label: "CRI on every COB" },
  { value: "2 Yr", label: "Warranty, all products" },
];

const PILLARS = [
  {
    title: "Deep Antiglare Optics",
    body: "Recessed sources and honeycomb baffles keep the glare out of your eyes and the light on the subject.",
  },
  {
    title: "CRI ≥ 95 Colour",
    body: "Skin, stone and fabric rendered as they truly are — R1 to R15 above 90 available on request.",
  },
  {
    title: "Tunable 3000K–6000K",
    body: "From candle-warm to daylight-crisp, with Tuya app and 2.4G remote control on the Magline system.",
  },
  {
    title: "Engineered to Endure",
    body: "Premium thermal design, IP65 wet-area options, and a two-year warranty across the catalogue.",
  },
];

export default function Home() {
  return (
    <>
      <div className="honorh-bg" aria-hidden="true" />
      <Header active="Home" />

      {/* ------------------------------------------------ Hero */}
      <section className="relative flex min-h-screen flex-col px-[clamp(24px,5vw,72px)]">
        <div className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col items-center justify-end pb-[clamp(48px,10vh,110px)] pt-32 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-white/50">
            Lighting for Elite
          </p>
          <h1 className="mt-6 text-[clamp(30px,4.4vw,64px)] font-semibold uppercase leading-[1.1] tracking-[0.015em]">
            Lighting That Transforms
            <br />
            Every Space
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60">
            Architectural fixtures with deep antiglare optics and CRI ≥ 95 colour —
            designed to inspire, engineered to perform.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-[clamp(16px,2vw,28px)]">
            <HeroButton href="/interior" solid>
              Interior Lighting
            </HeroButton>
            <HeroButton href="/exterior">Exterior Lighting</HeroButton>
          </div>

          {/* Stats strip */}
          <dl className="mt-[clamp(48px,9vh,88px)] grid w-full max-w-3xl grid-cols-2 gap-y-8 border-t border-white/10 pt-8 sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label}>
                <dd className="text-[clamp(26px,3vw,40px)] font-semibold leading-none">{s.value}</dd>
                <dt className="mt-2 text-[11px] uppercase tracking-[0.14em] text-white/45">{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ------------------------------------------------ Featured collection */}
      <section className="bg-[#0d0d0e] px-[clamp(24px,5vw,72px)] py-[clamp(64px,11vh,120px)]">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <span className="accent-bar" />
                <p className="mt-6 text-xs uppercase tracking-[0.35em] text-white/45">The Collection</p>
                <h2 className="mt-3 text-[clamp(26px,3.6vw,44px)] font-semibold uppercase tracking-[0.01em]">
                  Signature fixtures
                </h2>
              </div>
              <Link
                href="/products/"
                className="mb-1 inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-white/55 no-underline transition-colors hover:text-white"
              >
                Explore all {PRODUCTS.length} fixtures
                <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M2 8h11M9 3.5 13.5 8 9 12.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
              {FEATURED.slice(0, 8).map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------ Interior / Exterior gateways */}
      <section className="bg-[#0d0d0e] px-[clamp(24px,5vw,72px)] pb-[clamp(64px,11vh,120px)]">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-6 lg:grid-cols-2">
          <GatewayCard
            href="/interior"
            image="/images/backgrounds/interior.png"
            eyebrow="Indoors"
            title="Interior Lighting"
            body="COB spotlights, magnetic track, linears and wallwashers for homes, retail and hospitality."
          />
          <GatewayCard
            href="/exterior"
            image="/images/backgrounds/exterior.png"
            eyebrow="Outdoors"
            title="Exterior Lighting"
            body="Bollards, gate lanterns, facade washers and street lighting built for the elements."
          />
        </div>
      </section>

      {/* ------------------------------------------------ Why Honorh */}
      <section className="satin-band px-[clamp(24px,5vw,72px)] py-[clamp(64px,11vh,120px)]">
        <div className="relative mx-auto max-w-[1440px]">
          <Reveal>
            <span className="accent-bar" />
            <p className="mt-6 text-xs uppercase tracking-[0.35em] text-white/45">Behind the Light</p>
            <h2 className="mt-3 max-w-2xl text-[clamp(26px,3.6vw,44px)] font-semibold uppercase leading-[1.12] tracking-[0.01em]">
              Precision you can feel, glare you can&rsquo;t
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 80} className="h-full">
                <div className="flex h-full flex-col bg-[#0d0d0e]/95 p-8">
                  <span className="text-xs font-semibold text-white/30">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-4 text-lg font-semibold uppercase tracking-[0.02em]">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">{pillar.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ Clients */}
      <section className="bg-[#0d0d0e] px-[clamp(24px,5vw,72px)] py-[clamp(56px,9vh,100px)]">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <p className="text-center text-xs uppercase tracking-[0.35em] text-white/45">
              Trusted by leading brands & builders
            </p>
          </Reveal>
          <div className="mt-10">
            <LogoMarquee logos={CLIENT_LOGOS} />
          </div>
          <Reveal className="mt-8 text-center">
            <Link
              href="/clients/"
              className="text-xs uppercase tracking-[0.14em] text-white/50 no-underline transition-colors hover:text-white"
            >
              Meet our clients →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------ CTA */}
      <section className="bg-[#0d0d0e] px-[clamp(24px,5vw,72px)] pb-[clamp(64px,11vh,120px)]">
        <Reveal>
          <div className="mx-auto flex max-w-[1440px] flex-col items-start gap-8 border border-white/12 bg-white/[0.02] p-[clamp(32px,5vw,72px)] md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="max-w-xl text-[clamp(24px,3.2vw,40px)] font-semibold uppercase leading-[1.15]">
                Ready to light your next project?
              </h2>
              <p className="mt-4 max-w-lg text-white/60">
                Share your plans and our lighting team will return a layout, fixture
                schedule and quotation.
              </p>
            </div>
            <Link
              href="/contact/"
              className="inline-flex shrink-0 items-center justify-center border border-white bg-white px-8 py-4 text-sm uppercase tracking-[0.08em] text-[#0d0d0e] no-underline transition-colors hover:bg-transparent hover:text-white"
            >
              Get a Quote
            </Link>
          </div>
        </Reveal>
      </section>

      <Footer />
    </>
  );
}

function HeroButton({
  href,
  children,
  solid = false,
}: {
  href: string;
  children: React.ReactNode;
  solid?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex min-w-[190px] items-center justify-center border px-[26px] py-[15px] text-sm uppercase tracking-[0.08em] no-underline transition-colors duration-200 ${
        solid
          ? "border-white bg-white text-[#0d0d0e] hover:bg-transparent hover:text-white"
          : "border-white/90 text-white hover:bg-white hover:text-[#0d0d0e]"
      }`}
    >
      {children}
    </Link>
  );
}

function GatewayCard({
  href,
  image,
  eyebrow,
  title,
  body,
}: {
  href: string;
  image: string;
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <Reveal className="h-full">
      <Link
        href={href}
        className="group relative flex min-h-[380px] h-full flex-col justify-end overflow-hidden border border-white/10 no-underline"
      >
        <Image
          src={image}
          alt=""
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover brightness-[1.55] transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-[1.75]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="relative p-[clamp(24px,3vw,44px)]">
          <p className="text-xs uppercase tracking-[0.3em] text-white/55">{eyebrow}</p>
          <h3 className="mt-3 text-[clamp(24px,2.8vw,38px)] font-semibold uppercase tracking-[0.01em] text-white">
            {title}
          </h3>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-white/65">{body}</p>
          <span className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-white/70 transition-all duration-300 group-hover:gap-3 group-hover:text-white">
            Explore the range
            <svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M2 8h11M9 3.5 13.5 8 9 12.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
