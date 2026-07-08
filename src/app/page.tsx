import Link from "next/link";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <div className="honorh-bg" aria-hidden="true" />

      <div className="relative flex min-h-screen flex-col px-[clamp(24px,5vw,72px)] pb-[clamp(40px,8vh,96px)] pt-[34px]">
        <Header active="Home" />

        <main className="flex flex-1 items-end justify-center pb-[clamp(24px,9vh,96px)] text-center min-[861px]:items-end">
          <div className="flex flex-col items-center gap-[clamp(36px,5vh,64px)]">
            <h1 className="whitespace-normal text-[clamp(24px,2.9vw,44px)] font-semibold uppercase leading-[1.14] tracking-[0.015em] min-[861px]:whitespace-nowrap">
              Lighting That Transforms{" "}
              <br className="min-[861px]:hidden" />
              Every Space
            </h1>

            <div className="flex flex-wrap justify-center gap-[clamp(16px,2vw,28px)]">
              <HeroButton href="/interior">Interior Lighting</HeroButton>
              <HeroButton href="/exterior">Exterior Lighting</HeroButton>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

function HeroButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex min-w-[175px] items-center justify-center border border-white/90 px-[26px] py-[15px] text-sm uppercase tracking-[0.08em] text-white no-underline transition-colors duration-200 hover:bg-white hover:text-[#0d0d0e]"
    >
      {children}
    </Link>
  );
}
