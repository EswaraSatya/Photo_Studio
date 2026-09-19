import ScrollExpand from "./ScrollExpand";

export default function Showcase() {
  return (
    <section aria-label="Studio showcase" className="bg-[var(--bg)]">
      <ScrollExpand
        src="https://picsum.photos/seed/yvvr-showcase/1600/1000"
        alt="YVVR Studio cinematic showcase"
        title="Every Frame Tells a Story"
        scrollHint="Scroll to explore"
        useWindowScroll
        mediaZoom={1.3}
        overlayScrim={0.55}
      >
        <p className="text-xs uppercase tracking-[0.4em] text-white/85">
          Professional · Creative · Reliable
        </p>
        <a
          href="#gallery"
          className="glow-btn mt-6 inline-block rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] px-7 py-3 text-sm font-medium uppercase tracking-wider text-[var(--on-accent)]"
        >
          Explore Our Work
        </a>
      </ScrollExpand>
    </section>
  );
}
