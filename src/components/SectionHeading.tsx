export default function SectionHeading({
  title,
  tagline,
  id,
}: {
  title: string;
  tagline?: string;
  id?: string;
}) {
  return (
    <div id={id} className="scroll-mt-28">
      {/* Black → red accent bar from the Figma catalog */}
      <span className="block h-1 w-56 max-w-full rounded-full bg-gradient-to-r from-black via-[#7a1f1a] to-[#e5342a]" />
      <h2 className="mt-6 text-[clamp(22px,3vw,34px)] font-semibold uppercase tracking-[0.02em]">
        {title}
      </h2>
      {tagline && <p className="mt-2 max-w-xl text-sm text-white/55">{tagline}</p>}
    </div>
  );
}
