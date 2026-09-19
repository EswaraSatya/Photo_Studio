import type { ThemeName } from "../hooks/useTheme";

// Mirrors the hex values in index.css so JS can generate theme-accurate assets (e.g. data-URI gradients).
export const themeColors: Record<ThemeName, { bg: string; accent: string; accent2: string }> = {
  midnight: { bg: "#0a0e1a", accent: "#d9b978", accent2: "#f0d9a8" },
  ivory: { bg: "#f9f4ea", accent: "#c9a35f", accent2: "#e0b98a" },
  wine: { bg: "#1c0f18", accent: "#d9b978", accent2: "#e8c9b0" },
};
