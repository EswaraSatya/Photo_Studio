import { useMemo } from "react";
import ScrollExpand from "./ScrollExpand";
import { themeColors } from "../data/themeColors";
import type { ThemeName } from "../hooks/useTheme";

interface ShowcaseProps {
  theme: ThemeName;
}

// Builds an SVG data-URI bokeh gradient from the active theme's own colors, so the
// showcase reveal always matches the palette instead of depending on unrelated stock photos.
function buildThemeGradient(bg: string, accent: string, accent2: string) {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='1600' height='1000'>
    <defs>
      <radialGradient id='a' cx='22%' cy='24%' r='75%'>
        <stop offset='0%' stop-color='${accent}' stop-opacity='0.9'/>
        <stop offset='55%' stop-color='${accent2}' stop-opacity='0.35'/>
        <stop offset='100%' stop-color='${bg}' stop-opacity='1'/>
      </radialGradient>
      <radialGradient id='b' cx='85%' cy='78%' r='65%'>
        <stop offset='0%' stop-color='${accent2}' stop-opacity='0.55'/>
        <stop offset='100%' stop-color='${bg}' stop-opacity='0'/>
      </radialGradient>
    </defs>
    <rect width='100%' height='100%' fill='${bg}'/>
    <rect width='100%' height='100%' fill='url(#a)'/>
    <rect width='100%' height='100%' fill='url(#b)'/>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

export default function Showcase({ theme }: ShowcaseProps) {
  const src = useMemo(() => {
    const c = themeColors[theme];
    return buildThemeGradient(c.bg, c.accent, c.accent2);
  }, [theme]);

  return (
    <section aria-label="Studio showcase" className="bg-[var(--bg)]">
      <ScrollExpand
        src={src}
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

