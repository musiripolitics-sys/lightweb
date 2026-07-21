import Link from "next/link";
import Image from "next/image";

const COLUMNS = [
  {
    heading: "Explore",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Products", href: "/products" },
      { label: "Projects", href: "/projects" },
      { label: "Our Clients", href: "/clients" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Collections",
    links: [
      { label: "Interior Lighting", href: "/interior" },
      { label: "Exterior Lighting", href: "/exterior" },
      { label: "COB Downlights", href: "/products#fixed-cob" },
      { label: "Track & Display", href: "/products#track" },
      { label: "Linear & Blade", href: "/products#linear" },
      { label: "Outdoor & Industrial", href: "/products#outdoor" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[#f6f6f5] px-[clamp(24px,5vw,72px)] pt-16 pb-8">
      <div className="mx-auto flex max-w-[1360px] flex-col gap-12 lg:flex-row lg:justify-between">
        {/* Brand */}
        <div className="max-w-sm">
          <Image
            src="/images/logo.png"
            alt="Honorh Lighting for Elite"
            width={180}
            height={60}
            className="logo-invert h-auto w-[150px] md:w-[180px]"
          />
          <p className="mt-6 text-sm leading-relaxed text-black/60">
            Precision-engineered interior and exterior lighting. CRI ≥ 95 optics,
            deep antiglare comfort and a two-year warranty on every fixture.
          </p>
          <div className="mt-6 flex flex-col gap-2 text-sm text-black/70">
            <a href="mailto:hello@honorh.com" className="no-underline transition-colors hover:text-[#0d0d0e]">
              hello@honorh.com
            </a>
            <a href="tel:+919176769492" className="no-underline transition-colors hover:text-[#0d0d0e]">
              +91 91767 69492
            </a>
            <a
              href="https://www.honorh.com"
              className="no-underline transition-colors hover:text-[#0d0d0e]"
            >
              www.honorh.com
            </a>
          </div>
        </div>

        {/* Link columns */}
        <div className="flex flex-wrap gap-12 sm:gap-20">
          {COLUMNS.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <h3 className="mb-5 text-xs uppercase tracking-[0.2em] text-black/50">{col.heading}</h3>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-black/70 no-underline transition-colors hover:text-[#0d0d0e]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* CTA block */}
          <div className="max-w-[240px]">
            <h3 className="mb-5 text-xs uppercase tracking-[0.2em] text-black/50">Start a project</h3>
            <Link
              href="/contact"
              className="inline-flex items-center border border-[#0d0d0e] bg-[#0d0d0e] px-5 py-3 text-xs uppercase tracking-[0.1em] text-white no-underline transition-colors hover:bg-transparent hover:text-[#0d0d0e]"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-[1360px] flex-col gap-2 border-t border-black/10 pt-6 text-xs text-black/45 sm:flex-row sm:justify-between">
        <span>© {new Date().getFullYear()} Honorh — Lighting for Elite. All rights reserved.</span>
        <span>Designed to inspire. Engineered to perform.</span>
      </div>
    </footer>
  );
}
