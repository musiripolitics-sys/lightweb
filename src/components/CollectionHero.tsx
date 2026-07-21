import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import type { Section } from "@/data/products";

/** Full-width photographic hero for the Interior / Exterior collection pages. */
export default function CollectionHero({
  image,
  eyebrow,
  title,
  body,
  sections,
}: {
  image: string;
  eyebrow: string;
  title: string;
  body: string;
  sections: Section[];
}) {
  return (
    <section className="relative flex min-h-[62vh] flex-col justify-end overflow-hidden">
      <Image src={image} alt="" fill priority sizes="100vw" className="object-cover brightness-[1.6]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0e] via-black/25 to-black/10" />

      <div className="relative px-[clamp(24px,5vw,72px)] pb-[clamp(32px,6vh,64px)] pt-40">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <span className="accent-bar" />
            <p className="mt-6 text-xs uppercase tracking-[0.35em] text-white/55">{eyebrow}</p>
            <h1 className="mt-3 max-w-3xl text-[clamp(34px,5.2vw,64px)] font-semibold uppercase leading-[1.06] tracking-[0.01em]">
              {title}
            </h1>
            <p className="mt-5 max-w-xl text-white/70">{body}</p>

            {/* Section quick-nav */}
            <nav className="mt-8 flex flex-wrap gap-x-5 gap-y-2.5" aria-label="Categories">
              {sections.map((s) => (
                <Link
                  key={s.slug}
                  href={`#${s.slug}`}
                  className="border border-white/20 px-3.5 py-2 text-[11px] uppercase tracking-[0.1em] text-white/70 no-underline transition-colors hover:border-white/60 hover:text-white"
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
