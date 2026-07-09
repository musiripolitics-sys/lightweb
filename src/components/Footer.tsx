import Link from "next/link";
import Image from "next/image";

const COLUMNS = [
  {
    heading: "Explore",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Products", href: "/products" },
      { label: "Our Clients", href: "/clients" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Lighting",
    links: [
      { label: "Interior Lighting", href: "/interior" },
      { label: "Exterior Lighting", href: "/exterior" },
      { label: "Recessed Downlights", href: "/products#recessed-downlights" },
      { label: "Floodlights", href: "/products#floodlights" },
      { label: "Gate & Pillar Lights", href: "/products#gate-pillar-lights" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a0b] px-[clamp(24px,5vw,72px)] py-16">
      <div className="mx-auto flex max-w-[1360px] flex-col gap-12 md:flex-row md:justify-between">
        {/* Brand */}
        <div className="max-w-xs">
          <div className="flex flex-col gap-1.5">
            <Image 
              src="/images/logo.png" 
              alt="Honorh Lighting for Elite" 
              width={180} 
              height={60} 
              className="w-[140px] md:w-[180px] h-auto"
            />
          </div>
          <p className="mt-6 text-sm leading-relaxed text-white/60">
            Precision-engineered interior and exterior lighting that transforms every space.
          </p>
        </div>

        {/* Link columns */}
        <div className="flex flex-wrap gap-12 sm:gap-20">
          {COLUMNS.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <h3 className="mb-5 text-xs uppercase tracking-[0.2em] text-white/50">{col.heading}</h3>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/75 no-underline transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-[1360px] flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:justify-between">
        <span>© {new Date().getFullYear()} Honorh. All rights reserved.</span>
        <span>Lighting that transforms every space.</span>
      </div>
    </footer>
  );
}
