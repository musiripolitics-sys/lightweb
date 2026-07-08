import type { CSSProperties } from "react";
import Header from "@/components/Header";

type PhotoHeroProps = {
  title: string;
  /** Path under /public, e.g. "/images/interior.jpg". Optional — a dark
   *  gradient fallback renders until the exported Figma photo is added. */
  photo?: string;
  active?: string;
};

export default function PhotoHero({ title, photo, active }: PhotoHeroProps) {
  const style = photo
    ? ({ "--photo": `url('${photo}')` } as CSSProperties)
    : undefined;

  return (
    <>
      <div className="photo-bg" style={style} aria-hidden="true" />

      <div className="relative flex min-h-screen flex-col px-[clamp(24px,5vw,72px)] pb-[clamp(40px,8vh,96px)] pt-[34px]">
        <Header active={active} />

        <main className="flex flex-1 items-center justify-center text-center">
          <h1
            className="whitespace-normal text-center text-[clamp(26px,4vw,60px)] font-light uppercase leading-[1.2] tracking-[0.22em] [text-shadow:0_2px_24px_rgba(0,0,0,0.5)] min-[861px]:whitespace-nowrap min-[861px]:tracking-[0.3em] min-[861px]:indent-[0.3em]"
          >
            {title}
          </h1>
        </main>
      </div>
    </>
  );
}
