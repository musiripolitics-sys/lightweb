export default function SectionHeading({
  title,
  tagline,
  eyebrow,
  id,
}: {
  title: string;
  tagline?: string;
  eyebrow?: string;
  id?: string;
}) {
  return (
    <div id={id} className="scroll-mt-32">
      <span className="accent-bar" />
      {eyebrow && (
        <p className="mt-6 text-xs uppercase tracking-[0.35em] text-white/45">{eyebrow}</p>
      )}
      <h2 className={`${eyebrow ? "mt-3" : "mt-6"} text-[clamp(22px,3vw,36px)] font-semibold uppercase tracking-[0.02em] text-white`}>
        {title}
      </h2>
      {tagline && <p className="mt-2 max-w-xl text-sm text-white/55">{tagline}</p>}
    </div>
  );
}
