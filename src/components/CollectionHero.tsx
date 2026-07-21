import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import type { Section } from "@/data/products";

/**
 * Full-width photographic hero for the Interior / Exterior collection pages.
 * The lit facade (`imageOn`) crossfades in over the dark one (`image`) on
 * load — the "lights turn on" moment — then breathes gently.
 */
export default function CollectionHero({
  image,
  imageOn,
  eyebrow,
  title,
  body,
  sections,
}: {
  image: string;
  imageOn: string;
  eyebrow: string;
  title: string;
  body: string;
  sections: Section[];
}) {
  return (
    <section className="relative flex min-h-[80vh] flex-col justify-end overflow-hidden">
      {/* Off state (base) */}
      <Image src={image} alt="" fill priority sizes="100vw" className="object-cover" />
      {/* On state (lit) — animates in */}
      <Image
        src={imageOn}
        alt=""
        fill
        priority
        sizes="100vw"
        className="lights-on object-cover"
      />
      {/* Legibility scrim + seam into the white page below */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/45" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />

      <div className="relative px-[clamp(24px,5vw,72px)] pb-[clamp(40px,7vh,80px)] pt-40">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <span className="accent-bar-light" />
            <p className="mt-6 text-xs uppercase tracking-[0.35em] text-white/70">{eyebrow}</p>
            <h1 className="mt-3 max-w-3xl text-[clamp(34px,5.2vw,64px)] font-semibold uppercase leading-[1.06] tracking-[0.01em] text-white [text-shadow:0_2px_30px_rgba(0,0,0,0.4)]">
              {title}
            </h1>
            <p className="mt-5 max-w-xl text-white/80">{body}</p>

            {/* Section quick-nav */}
            <nav className="mt-8 flex flex-wrap gap-x-4 gap-y-2.5" aria-label="Categories">
              {sections.map((s) => (
                <Link
                  key={s.slug}
                  href={`#${s.slug}`}
                  className="border border-white/35 bg-white/5 px-3.5 py-2 text-[11px] uppercase tracking-[0.1em] text-white/85 no-underline backdrop-blur-sm transition-colors hover:bg-white hover:text-[#0d0d0e]"
                >
                  {s.title}
                </Link>
              ))}
            </nav>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
