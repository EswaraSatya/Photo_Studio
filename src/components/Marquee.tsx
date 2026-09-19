import { services } from "../data/services";

// Decorative scrolling ticker of service keywords — pure style, reuses existing content.
export default function Marquee() {
  const items = services.map((s) => s.title);
  const loop = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-[var(--border)] bg-[var(--surface)] py-4">
      <div className="animate-marquee flex w-max gap-10">
        {loop.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-3 whitespace-nowrap text-sm uppercase tracking-[0.3em] text-[var(--text-muted)]"
          >
            {item}
            <span className="text-[var(--accent)]">&#10022;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
