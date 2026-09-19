# Plan: YVVR Studio Photography Website

## Stack Decision
React (Vite) + TypeScript + TailwindCSS + Framer Motion (animations) + React Icons.
Reasoning: premium animated feel (curtain reveal, scroll reveals, theme switching) is far easier
and more polished with Tailwind + Framer Motion than plain CSS/JS, while staying lighter than Next.js
since this is a single-page marketing site with no SSR/routing needs.

## Requirements confirmed with user
- Curtain intro: two panels split apart from center (like theater curtains) revealing "Y V V R Studio Presents" text, then transitions into homepage. Must be fully mobile-responsive.
- Images: use placeholder images (picsum.photos or styled placeholder blocks) for gallery/hero, swappable later.
- Single-page scrolling site with anchor nav: Hero, About, Services, Gallery, Location, Contact, Footer.
- Deployment target: Netlify (static build).
- Contact section: info only (address, phone, email, WhatsApp/Instagram links) — NO contact form.
- Theme switcher: user wants to toggle between ALL 3 palettes, not just pick one:
  1. Black & Gold luxury
  2. Soft pastel (blush/cream/muted gold)
  3. Maroon & Gold traditional
  Implemented via CSS custom properties per `data-theme` attribute, toggled by a UI switcher, persisted in localStorage.
- Services to showcase:
  1. Marriage & Haldi function
  2. Birthday celebrations
  3. Baby shower & naming ceremony
  4. Pre- and post-wedding shoots
  5. House warming functions
  6. Half saree & traditional events
- Taglines to feature prominently: "Professional. Creative. Reliable." and "Capturing Moments, Creating Memories."
- Studio location: sleek image/gallery style section + embedded map (placeholder address, user to fill real one later).

## Steps

### Phase 1: Project scaffold
1. Scaffold Vite + React + TypeScript project in workspace root.
2. Install & configure Tailwind CSS, Framer Motion, react-icons.
3. Set up folder structure: `src/components/`, `src/data/`, `src/assets/`, `src/hooks/`.
4. Define theme CSS variables (3 themes) in `src/index.css` using `[data-theme="gold"|"pastel"|"maroon"]` selectors; Tailwind config extended to reference CSS vars for colors (bg, surface, text, accent, accent-secondary).

### Phase 2: Core components
5. `CurtainIntro` — full-screen overlay, two panels split from center (Framer Motion), "Y V V R STUDIO PRESENTS" text reveal, auto-dismiss (~2.5s) or tap-to-enter, fades into homepage. Plays once per session (sessionStorage flag). Mobile-responsive via `vw`/`dvh`/`clamp()`. Respects `prefers-reduced-motion` (fades instead of sliding) and includes a visible "Skip" button/tap-anywhere-to-skip.
6. `ThemeSwitcher` — floating segmented control to switch between 3 themes, persists in localStorage, applies `data-theme` on `<html>`.
7. `Navbar` — sticky nav with logo + anchor links, mobile hamburger menu, includes ThemeSwitcher.
8. `Hero` — full-viewport placeholder image, studio name, both taglines, CTA button.
9. `About` — short studio story/experience blurb (placeholder copy), reinforces taglines.
10. `Services` — cards for all 6 services, icon + description, `whileInView` scroll animation.
11. `Gallery` — placeholder image grid, click-to-enlarge lightbox modal, images use `loading="lazy"` for performance.
12. `Location` — address placeholder, embedded map iframe, photo.
13. `Contact` — info-only: address, phone, email, WhatsApp, Instagram/Facebook icons.
14. `Footer` — studio name, quick links, socials, copyright.

### Phase 3: Assembly & polish
15. Compose all sections in `App.tsx`: CurtainIntro → Navbar → Hero → About → Services → Gallery → Location → Contact → Footer.
16. Smooth scroll behavior with sticky-nav offset.
17. Responsive pass across nav/hero/about/services/gallery/contact.
18. Add favicon + simple "YVVR" wordmark/logo asset used in Navbar and favicon.
19. Add `netlify.toml` (build command `npm run build`, publish dir `dist`) for Netlify deployment.
20. Final content review: all 6 services present, both taglines present, all 3 themes toggle correctly, curtain intro plays once cleanly and respects reduced-motion/skip.

## Relevant files (to be created)
- `package.json`, `vite.config.ts`, `tailwind.config.js`, `postcss.config.js`, `tsconfig.json`
- `src/index.css` — theme CSS variables + Tailwind directives
- `src/main.tsx`, `src/App.tsx`
- `src/components/CurtainIntro.tsx`
- `src/components/ThemeSwitcher.tsx`
- `src/components/Navbar.tsx`
- `src/components/Hero.tsx`
- `src/components/Services.tsx`
- `src/components/Gallery.tsx`
- `src/components/About.tsx`
- `src/components/Location.tsx`
- `src/components/Contact.tsx`
- `src/components/Footer.tsx`
- `src/data/services.ts` — array of 6 services (title, description, icon)
- `src/data/gallery.ts` — placeholder image list
- `public/favicon.svg` — YVVR wordmark favicon
- `netlify.toml` — Netlify build config

## Verification
1. `npm run dev` — curtain intro plays once, resolves into homepage.
2. Toggle theme switcher through all 3 themes, confirm colors update across every section.
3. Resize to mobile width (375px) — nav collapses, sections stack, grids reflow.
4. Click all anchor nav links — smooth scroll to correct section.
5. `npm run build` — production build succeeds with no TS/lint errors.
6. Enable OS-level "reduce motion" and confirm curtain intro falls back to a simple fade + skip button still works.
7. Deploy to Netlify (drag-and-drop `dist` or connect repo) and confirm live site matches local build.

## Decisions
- No backend/contact form — static site only, deployed to Netlify.
- Real address confirmed from user's Google Maps link: Y V V R Studio, Opposite Panchayathi,
  Atchampeta, Panasapadu, Kakinada, Andhra Pradesh 533005 (17.0315062, 82.2295615). Location map
  embed and "Get Directions" link now point to the real place; phone/email/social links remain
  placeholders (`0000000000` / `hello@yvvrstudio.com`) until the user supplies real contact details.
- Real photos not yet available; gallery/hero use placeholder images, structured for easy swap-in via `src/assets/`, with `loading="lazy"` applied for performance.
- Curtain intro shown once per browser session (sessionStorage flag), not every page load; honors `prefers-reduced-motion` and offers a skip option.
- Favicon/logo: simple "YVVR" text-based wordmark placeholder until real branding assets are provided.
- Footer includes a "Designed by Eswara Satya" credit line per user request.


## Design Upgrade (v2 — premium/trendy visual pass)
User feedback: initial build looked "too plain", requested a trendier, more premium look using
best-practice component styling (no new component library added — Tailwind + Framer Motion already
in place is sufficient; upgrade is about visual polish, not new dependencies).

- **Typography**: switch headings to Playfair Display (already loaded), body text stays Cormorant
  Garamond; add refined letter-spacing and a decorative divider under section eyebrow labels.
- **Navbar**: glassmorphism (blur + translucent background), shadow appears on scroll, animated
  underline sweep on nav link hover, logo gets a small accent glyph.
- **Hero**: larger gradient-clipped heading text, subtle vignette + grain overlay on background
  image, bouncing scroll-cue arrow, gradient CTA button with glow on hover.
- **About**: two-column split layout (framed image + text) instead of centered block, large
  decorative quote mark accent.
- **Services**: card redesign — icon sits in a gradient circle badge, numbered index badge per
  card, hover lift + glowing gradient border, staggered scroll-in animation kept.
- **Gallery**: hover overlay with gradient scrim + caption slide-up, larger rounded corners +
  shadow-2xl, smoother scale/fade lightbox transition.
- **Location**: refined card styling, icon badges, shadow-xl border treatment.
- **Contact**: icon circles with gradient background, gradient CTA buttons with hover glow.
- **Footer**: gradient divider line, tightened spacing.
- No new content sections added (e.g. no stats/testimonials) — scope stayed to visual polish of
  existing sections per implementation discipline; all 3 themes (gold/pastel/maroon) re-verified
  against the new gradient/glow treatments so contrast holds in every palette.

## Design Upgrade (v3 — ReactBits components)
User requested using ReactBits (reactbits.dev) components: Circular Gallery and Scroll Expand.

- **Dependency**: `ogl` (required peer dependency for Circular Gallery's WebGL rendering).
- **`src/components/CircularGallery.tsx`** — vendored from ReactBits (ts-tailwind variant, no
  extra CSS file needed). Replaces the previous CSS-masonry `Gallery` section with a draggable,
  scroll-driven curved 3D image wall. Fed the same `galleryImages` data (`image`/`text` shape),
  wrapped in a fixed-height container (required by the component) inside the existing Gallery
  section shell (eyebrow + heading retained, lightbox modal removed since the component has its
  own drag/scroll interaction).
- **`src/components/ScrollExpand.tsx`** — vendored from ReactBits (ts-tailwind variant). Used as
  a new full-bleed cinematic "Showcase" section (between Hero and About) that starts as a small
  rounded frame and expands to full width as the user scrolls, revealing a studio photo with a
  title and the "Professional. Creative. Reliable." tagline fading in as an overlay once expanded.
- Both components are vendored (copied into `src/components/`) rather than installed from an npm
  registry, since ReactBits ships copy-paste source rather than a published package for these.
- Location section (map + address) is retained unchanged — already satisfies "maps location"
  requirement from the original plan.

## Design Upgrade (v4 — gallery rework + color contrast fix)
User feedback: the ReactBits Circular Gallery "didn't fit" visually and some colors looked off.

- **Gallery reverted from WebGL to a bento-style CSS grid**: `CircularGallery.tsx` removed (along
  with the now-unused `ogl` dependency) since the curved 3D WebGL wall didn't match the site's
  editorial/premium direction and its canvas-rendered captions couldn't use theme CSS variables
  for color (a real bug — canvas `fillStyle` can't resolve `var(--text)`). Replaced with a
  hand-built bento grid (`grid-cols-2`/`sm:grid-cols-4` with cyclic row/col spans) with hover
  gradient-scrim captions and a click-to-enlarge lightbox — same interaction model as v1/v2 but
  with a more editorial, asymmetric tile layout instead of uniform squares.
- **Fixed a real contrast bug**: buttons/icon-badges built as accent-color gradients (Hero CTA,
  Showcase CTA, Services icon badges, Location/Contact icon badges) used `text-[var(--bg)]` for
  their icon/text color. This looked fine in the gold/maroon themes (`--bg` is near-black) but was
  low-contrast in the pastel theme (`--bg` is a light cream, sitting on a light rose/tan gradient).
  Added a dedicated `--on-accent` CSS variable (a fixed dark tone per theme) and swapped all of
  those elements to use it instead, so contrast now holds correctly across all 3 themes.

## Design Upgrade (v5 — react-simple-maps toggle)
User asked to incorporate react-simple-maps (https://www.react-simple-maps.io) and be able to
switch between it and the existing Google Maps embed.

- **Dependency**: `react-simple-maps` (ships its own TypeScript types, no extra `@types` package
  needed).
- **`src/components/LocationMap.tsx`** — new illustrated/SVG map using `ComposableMap` +
  `ZoomableGroup` + `Geographies` (world-atlas TopoJSON via CDN, `geoMercator` projection centered
  and scaled on the studio's coordinates) + a `Marker` with a pulsing dot pinned at the real
  studio location (17.0315062, 82.2295615). Styled entirely with the site's theme CSS variables
  (`var(--surface-alt)`, `var(--border)`, `var(--accent)`, `var(--on-accent)`) so it matches all
  3 themes and re-colors instantly on theme switch.
- **`Location.tsx`** — added a segmented "Map View" / "Illustrated View" toggle above the map
  panel; the Google Maps iframe (accurate, interactive, real street data) and the new
  `LocationMap` (stylized, on-brand SVG map) now live in the same panel and swap on click. Google
  Maps remains the default view since it's the more practical/accurate option for a real business.

## Design Upgrade (v6 — satellite view + map zoom controls)
User asked to enable satellite view and make fuller use of the map components' built-in features.

- **Satellite option**: added a third segmented button ("Satellite") to `Location.tsx`, reusing
  Google's native satellite tiles via the `&t=k` URL parameter on the same embeddable iframe (no
  extra dependency needed) — toggle is now Map View / Satellite / Illustrated View, all sharing one
  panel.
- **Illustrated map zoom controls**: `LocationMap.tsx` now exposes `react-simple-maps`'
  `ZoomableGroup` as a controlled component (`zoom` state + `onMoveEnd`) with floating +/- buttons,
  in addition to the library's built-in scroll-to-zoom and drag-to-pan gestures, so the "features
  that component provides" (pan, scroll-zoom, controlled zoom) are all exposed to the user.

## Design Upgrade (v7 — color combination + backdrop pass)
User asked for the best color combination and a better-fitting page backdrop.

- **Palette refinement**: pastel theme's `--surface-alt`/`--border` were too close to `--bg`
  (barely distinguishable, both near-white) — deepened both slightly for clearer section
  separation while keeping the same soft blush/tan hue family.
- **New `.section-backdrop` utility** (`index.css`): a reusable ambient corner-glow background
  (two soft radial gradients blended from `var(--accent)`/`var(--accent-2)` into transparent)
  applied to About, Services, Gallery, Location, Contact, and Footer. Gives every section a
  cohesive, theme-matched ambient glow instead of flat solid colors, without needing new images.
- **Hero backdrop replaced**: the random picsum stock photo behind the hero text (a generic
  mountain/canyon landscape) didn't fit a photo-studio site at all. Replaced it with a pure-CSS
  layered radial-gradient "bokeh" backdrop built from the active theme's `--accent`/`--accent-2`
  colors — this guarantees the backdrop always matches the site's palette perfectly (verified
  visually in both gold and pastel themes) instead of depending on unpredictable stock-photo
  content. Gallery/About/Location/Showcase photos are left as-is (explicitly agreed placeholders
  pending real studio photos, per earlier decision).

## Design Upgrade (v8 — full silhouette redesign: geometric direction)
User asked for a complete restyle with "new silhouette and texture." Chose direction: Modern
geometric (diagonal dividers, glassmorphism, layered depth) + Asymmetric/broken-grid layout.

- **`.section-slant` utility**: gives Services, Gallery, Location, and Contact a diagonal
  top/bottom edge via `clip-path` + negative margin, so section boundaries read as continuous
  angled seams down the page instead of flat horizontal lines (Gallery/Contact restructured to a
  full-width outer `<section>` + inner `max-w-6xl` wrapper so the slant spans the full viewport).
- **Hero & About restyled asymmetric**: Hero is now a left-aligned two-column split (text +
  rotated geometric frame with grid texture) instead of centered; About uses an offset
  `0.85fr/1.15fr` grid with a rotated, notched-corner image and a text column pushed down
  (`lg:mt-16`) for a broken-grid feel instead of a straight centered split.
- **New shape utilities**: `.notched-corners` (chamfered "cut paper" corners, used on the About
  photo), `.hex-frame` (hexagon clip-path, used on About's accent shape), `.arch-frame` (elliptical
  arch top, used on the Location storefront photo), `.diamond-badge` (used on Services/Contact
  icon badges, already existed, kept consistent).
- **`ViewfinderFrame.tsx`** (new, mounted once in `App.tsx`): fixed camera-viewfinder corner
  brackets over the whole page — a subtle, permanent photography motif.
- **Floating navbar**: per explicit follow-up request, the navbar no longer spans full
  edge-to-edge width — it's now an inset, rounded floating bar (`max-w-5xl`, margin on all sides)
  so it visibly doesn't touch the left/right edges of the viewport.
- **Color additions**: new `--accent-cool` variable per theme (teal-ish tone) used for secondary
  hover states (Hero's "Get In Touch" button, Contact's social icons) to break up single-accent
  monotony. New `.shadow-accent`/`.shadow-accent-sm` utilities replace flat black shadows with
  shadows tinted from `var(--accent)`, applied across About/Services/Gallery/Location/Contact.
  The film-grain overlay (`body::after`) is now tinted with `color-mix(var(--accent), var(--text))`
  instead of plain `var(--text)`, so the texture itself carries each theme's color.
- **Showcase image bug fixed**: the ScrollExpand reveal previously used a random picsum photo
  (a hiker in the mountains) with no relation to the site. Replaced with a JS-generated SVG
  data-URI radial-gradient built from `src/data/themeColors.ts` (a small hex map mirroring
  `index.css`), so the showcase reveal always matches the active theme exactly and updates live
  when the user switches themes — same fix pattern already used for the Hero backdrop.
- Verified on a fresh browser tab: floating navbar with visible side gaps, diagonal seams between
  Services/Gallery/Location/Contact, notched/hex/arch shapes rendering, viewfinder corner
  brackets, and the theme-accurate Showcase gradient all confirmed working; `npm run build` passes
  clean.

## Design Upgrade (v9 — new theme palette + footer/marquee polish)
User felt the gold/pastel/maroon palettes "needed rethinking" and asked for a completely
different direction; picked "Midnight & Champagne" from a set of proposed options.

- **Themes replaced entirely**: `gold`/`pastel`/`maroon` → `midnight`/`ivory`/`wine`, all three
  unified by the same signature champagne-gold accent (`#d9b978`/`#c9a35f`) for a cohesive
  jewel-tone identity, varying only the base mood (deep navy / warm ivory / deep wine):
  - `midnight` (default): near-black navy `--bg`, champagne gold accent, soft periwinkle
    `--accent-cool`.
  - `ivory`: warm ivory `--bg`, deep navy `--text`, darker champagne gold (for contrast on a
    light background), dusty-blue `--accent-cool`.
  - `wine`: deep wine-black `--bg`, same champagne gold accent, muted teal-blue `--accent-cool`.
  - Updated everywhere the old theme names appeared: `useTheme.ts` (`ThemeName` union + default),
    `index.css` (`[data-theme=...]` blocks), `ThemeSwitcher.tsx` (labels), `themeColors.ts` (used
    by Showcase's generated gradient).
  - `ThemeSwitcher` swatches changed from a single solid color to a two-tone diagonal
    bg/accent-gold gradient swatch, since the two dark themes (midnight/wine) were too similar as
    flat circles to tell apart at a glance.
- **New Marquee section** (`Marquee.tsx`): an infinite horizontal scrolling ticker of the 6
  service names separated by a diamond glyph, placed between Showcase and About. Pure CSS
  `@keyframes marquee` animation (respects `prefers-reduced-motion`), reuses existing service data
  rather than introducing new content.
- **Footer redesign — sleek single row**: replaced the tall stacked footer (monogram → double
  divider → tagline → divider → copyright → credit, ~5 lines) with one compact row (monogram+name
  left, quick nav links center, social icons right) plus a single slim copyright/credit line
  underneath; re-added `.section-backdrop` ambient glow (no height cost) so it isn't visually flat.
- **Cleanup**: removed a mismatched `gradient-border` class from the About photo (a rectangular
  gradient-mask border doesn't combine correctly with the `.notched-corners` clip-path shape), and
  added a small hex-shaped accent decoration to Gallery so every major section now shares the same
  geometric silhouette language.
- Verified all three new themes render correctly and distinctly (including the Showcase's
  theme-accurate gradient and the ThemeSwitcher's two-tone swatches); `npm run build` passes clean.








