import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Our Clients",
  description:
    "Architects, hospitality groups and designers who trust Honorh to light their spaces.",
};

const CLIENTS = [
  "Aurelia Residences",
  "Meridian Hotels",
  "Vantage Studios",
  "The Grove Villas",
  "Lumen Architects",
  "Solace Resorts",
  "Atrium Group",
  "Northwind Estates",
  "Cordova Interiors",
  "Halcyon Living",
  "Vertex Developments",
  "Onyx Hospitality",
];

const TESTIMONIALS = [
  {
    quote:
      "Honorh's downlights disappear into the ceiling and let the architecture breathe. The anti-glare is genuinely best-in-class.",
    name: "Priya Menon",
    role: "Principal, Lumen Architects",
  },
  {
    quote:
      "We lit three properties with Honorh exterior fixtures. Two years on, they look and perform exactly as day one.",
    name: "Daniel Rocha",
    role: "Facilities Director, Meridian Hotels",
  },
];

export default function ClientsPage() {
  return (
    <SiteShell active="Our Clients">
      {/* Hero */}
      <section className="px-[clamp(24px,5vw,72px)] pb-10 pt-[clamp(48px,10vh,110px)]">
        <div className="mx-auto max-w-[1360px]">
          <p className="text-xs uppercase tracking-[0.35em] text-white/45">Our Clients</p>
          <h1 className="mt-4 max-w-3xl text-[clamp(32px,5vw,62px)] font-semibold uppercase leading-[1.08] tracking-[0.01em]">
            Trusted to light the finest spaces
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
            From boutique hospitality to landmark residences, leading architects and
            developers specify Honorh for its precision and longevity.
          </p>
        </div>
      </section>

      {/* Client logo wall (name plates) */}
      <section className="px-[clamp(24px,5vw,72px)] py-6">
        <div className="mx-auto grid max-w-[1360px] grid-cols-2 gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-3 lg:grid-cols-4">
          {CLIENTS.map((client) => (
            <div
              key={client}
              className="flex min-h-[120px] items-center justify-center bg-[#0d0d0e] px-6 text-center text-sm uppercase tracking-[0.14em] text-white/55 transition-colors hover:text-white"
            >
              {client}
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-[clamp(24px,5vw,72px)] py-[clamp(56px,10vh,120px)]">
        <div className="mx-auto max-w-[1360px]">
          <SectionHeading title="In their words" />
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="flex flex-col border border-white/12 p-8">
                <blockquote className="text-lg leading-relaxed text-white/80">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 text-sm">
                  <span className="font-semibold">{t.name}</span>
                  <span className="block text-white/50">{t.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
