import type { Metadata } from "next";
import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import ProjectsGallery from "@/components/ProjectsGallery";
import Reveal from "@/components/Reveal";
import { WORKS } from "@/data/works";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Honorh lighting in the real world — jewellery showrooms, hospitality lounges, boutiques and design galleries lit with our fixtures.",
};

export default function ProjectsPage() {
  return (
    <SiteShell active="Projects">
      {/* Intro */}
      <section className="px-[clamp(24px,5vw,72px)] pb-4 pt-[clamp(40px,8vh,90px)]">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <span className="accent-bar" />
            <p className="mt-6 text-xs uppercase tracking-[0.35em] text-white/45">Our Work</p>
            <h1 className="mt-3 max-w-3xl text-[clamp(34px,5.2vw,64px)] font-semibold uppercase leading-[1.08] tracking-[0.01em] text-white">
              Lighting, in the real world
            </h1>
            <p className="mt-6 max-w-xl text-white/60">
              A look at spaces we&rsquo;ve lit — from luxury jewellery showrooms to
              hospitality lounges and design galleries. Tap any project to view it full-screen.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-[clamp(24px,5vw,72px)] pb-[clamp(56px,10vh,120px)] pt-10">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <ProjectsGallery works={WORKS} />
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="px-[clamp(24px,5vw,72px)] pb-[clamp(64px,12vh,140px)]">
        <Reveal>
          <div className="mx-auto flex max-w-[1440px] flex-col items-start gap-6 border border-white/12 bg-white/[0.03] p-[clamp(28px,5vw,64px)] md:flex-row md:items-center md:justify-between">
            <h2 className="max-w-xl text-[clamp(22px,3vw,36px)] font-semibold uppercase leading-tight text-white">
              Want your space lit like this?
            </h2>
            <Link
              href="/contact/"
              className="inline-flex shrink-0 items-center justify-center border border-white bg-white px-7 py-4 text-sm uppercase tracking-[0.08em] text-[#0d0d0e] no-underline transition-colors hover:bg-transparent hover:text-white"
            >
              Start your project
            </Link>
          </div>
        </Reveal>
      </section>
    </SiteShell>
  );
}
