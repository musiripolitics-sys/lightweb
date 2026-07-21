import Image from "next/image";
import type { Logo } from "@/data/logos";

/**
 * Infinite horizontal scroll of brand logos on white plates, so each mark
 * keeps its original colours against the dark theme. The list is duplicated
 * so the -50% translate loops seamlessly.
 */
export default function LogoMarquee({ logos }: { logos: Logo[] }) {
  const strip = [...logos, ...logos];
  return (
    <div className="relative overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="marquee-track items-center gap-5 pr-5">
        {strip.map((logo, i) => (
          <div
            key={`${logo.file}-${i}`}
            className="flex h-[76px] w-[190px] shrink-0 items-center justify-center border border-black/10 bg-[#f7f7f6] px-7"
            aria-hidden={i >= logos.length}
          >
            <Image
              src={logo.file}
              alt={i < logos.length ? logo.name : ""}
              width={170}
              height={76}
              loading="eager"
              className="h-11 w-auto max-w-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
