"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Interior", href: "/interior" },
  { label: "Exterior", href: "/exterior" },
  { label: "Projects", href: "/projects" },
  { label: "Our Clients", href: "/clients" },
  { label: "Contact", href: "/contact" },
];

export default function Header({
  active = "Home",
  onDark = false,
}: {
  active?: string;
  /** True on pages with a dark photographic hero — start with white chrome. */
  onDark?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Light chrome (white text/logo) only while over the dark hero, unscrolled.
  const dark = onDark && !scrolled && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,padding] duration-300 ${
        scrolled || open
          ? "border-b border-black/10 bg-white/85 py-3 backdrop-blur-md"
          : "border-b border-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-[clamp(24px,5vw,72px)]">
        {/* Logo */}
        <Link href="/" aria-label="Honorh home" className="flex flex-col gap-1.5 no-underline">
          <Image
            src="/images/logo.png"
            alt="Honorh Lighting for Elite"
            width={220}
            height={73}
            className={`${dark ? "" : "logo-invert"} h-auto w-[130px] md:w-[170px]`}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center min-[1180px]:flex">
          <ul className="flex items-center gap-[clamp(18px,2.2vw,36px)]">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`relative text-[13px] uppercase tracking-[0.07em] no-underline transition-colors ${
                    dark
                      ? active === link.label
                        ? "text-white"
                        : "text-white/70 hover:text-white"
                      : active === link.label
                        ? "text-[#0d0d0e]"
                        : "text-black/55 hover:text-[#0d0d0e]"
                  }`}
                >
                  {link.label}
                  {active === link.label && (
                    <span
                      className={`absolute -bottom-2 left-0 h-px w-full bg-gradient-to-r ${
                        dark ? "from-white/80" : "from-[#0d0d0e]/80"
                      } to-transparent`}
                    />
                  )}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className={`ml-2 inline-flex items-center border px-5 py-2.5 text-[12px] uppercase tracking-[0.1em] no-underline transition-colors ${
                  dark
                    ? "border-white text-white hover:bg-white hover:text-[#0d0d0e]"
                    : "border-[#0d0d0e] bg-[#0d0d0e] text-white hover:bg-transparent hover:text-[#0d0d0e]"
                }`}
              >
                Get a Quote
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col gap-[5px] p-1.5 min-[1180px]:hidden"
        >
          <span className={`h-0.5 w-[26px] transition-transform ${dark ? "bg-white" : "bg-[#0d0d0e]"} ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`h-0.5 w-[26px] transition-opacity ${dark ? "bg-white" : "bg-[#0d0d0e]"} ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-[26px] transition-transform ${dark ? "bg-white" : "bg-[#0d0d0e]"} ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <nav
          aria-label="Primary"
          className="border-t border-black/10 bg-white/95 px-[clamp(24px,5vw,72px)] py-7 backdrop-blur min-[1180px]:hidden"
        >
          <ul className="flex flex-col items-start gap-[18px]">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`text-sm uppercase tracking-[0.06em] no-underline transition-colors hover:text-[#0d0d0e] ${
                    active === link.label ? "text-[#0d0d0e]" : "text-black/60"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center border border-[#0d0d0e] bg-[#0d0d0e] px-5 py-2.5 text-[12px] uppercase tracking-[0.1em] text-white no-underline transition-colors hover:bg-transparent hover:text-[#0d0d0e]"
              >
                Get a Quote
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
