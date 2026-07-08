"use client";

import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Our Clients", href: "/clients" },
  { label: "Contact", href: "/contact" },
];

export default function Header({ active = "Home" }: { active?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex items-start justify-between gap-6">
      {/* Logo */}
      <Link href="/" aria-label="Honorh home" className="flex flex-col gap-1.5 no-underline text-white">
        <span className="relative text-[clamp(28px,3.2vw,44px)] font-normal leading-none tracking-[0.06em]">
          HONORH
          <sup className="ml-0.5 align-super text-[0.28em] font-normal">™</sup>
        </span>
        <span className="pl-1 text-[clamp(8px,0.8vw,11px)] font-light uppercase tracking-[0.52em] text-white/80">
          Lighting for Elite
        </span>
      </Link>

      {/* Desktop nav */}
      <nav
        aria-label="Primary"
        className="hidden items-center gap-[clamp(24px,3vw,48px)] pt-3 min-[861px]:flex"
      >
        <ul className="flex items-center gap-[clamp(20px,2.6vw,44px)]">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={`text-sm uppercase tracking-[0.06em] no-underline transition-colors hover:text-white ${
                  active === link.label ? "text-white" : "text-white/80"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <button
          type="button"
          aria-label="Search"
          className="flex items-center gap-2 text-sm uppercase tracking-[0.06em] text-white/80 transition-colors hover:text-white"
        >
          <SearchIcon />
          <span>Search</span>
        </button>
      </nav>

      {/* Mobile toggle */}
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex flex-col gap-[5px] p-1.5 min-[861px]:hidden"
      >
        <span className="h-0.5 w-[26px] bg-white" />
        <span className="h-0.5 w-[26px] bg-white" />
        <span className="h-0.5 w-[26px] bg-white" />
      </button>

      {/* Mobile menu panel */}
      {open && (
        <nav
          aria-label="Primary"
          className="absolute inset-x-[clamp(24px,5vw,72px)] top-24 z-10 flex flex-col items-start gap-5 border border-white/10 bg-[#0f0f10]/95 px-6 py-7 backdrop-blur min-[861px]:hidden"
        >
          <ul className="flex flex-col items-start gap-[18px]">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`text-sm uppercase tracking-[0.06em] no-underline transition-colors hover:text-white ${
                    active === link.label ? "text-white" : "text-white/80"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <button
            type="button"
            aria-label="Search"
            className="flex items-center gap-2 text-sm uppercase tracking-[0.06em] text-white/80 transition-colors hover:text-white"
          >
            <SearchIcon />
            <span>Search</span>
          </button>
        </nav>
      )}
    </header>
  );
}

function SearchIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}
