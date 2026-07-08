import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Talk to Honorh about lighting your next interior or exterior project.",
};

const DETAILS = [
  { label: "Email", value: "hello@honorh.com", href: "mailto:hello@honorh.com" },
  { label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
  { label: "Studio", value: "Honorh Lighting, Design District", href: undefined },
  { label: "Hours", value: "Mon – Sat, 10:00 – 19:00", href: undefined },
];

export default function ContactPage() {
  return (
    <SiteShell active="Contact">
      <section className="px-[clamp(24px,5vw,72px)] pb-[clamp(64px,12vh,140px)] pt-[clamp(48px,10vh,110px)]">
        <div className="mx-auto max-w-[1360px]">
          <p className="text-xs uppercase tracking-[0.35em] text-white/45">Contact</p>
          <h1 className="mt-4 max-w-3xl text-[clamp(32px,5vw,62px)] font-semibold uppercase leading-[1.08] tracking-[0.01em]">
            Let&rsquo;s light your space
          </h1>

          <div className="mt-14 grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.1fr]">
            {/* Details */}
            <div className="flex flex-col gap-10">
              <p className="max-w-md text-lg leading-relaxed text-white/60">
                Tell us about your project — interior, exterior or full turnkey. Our team
                will get back within one business day.
              </p>
              <dl className="flex flex-col gap-7">
                {DETAILS.map((d) => (
                  <div key={d.label}>
                    <dt className="text-xs uppercase tracking-[0.2em] text-white/45">{d.label}</dt>
                    <dd className="mt-1.5 text-lg">
                      {d.href ? (
                        <a href={d.href} className="no-underline transition-colors hover:text-white/70">
                          {d.value}
                        </a>
                      ) : (
                        d.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Form */}
            <ContactForm />
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
