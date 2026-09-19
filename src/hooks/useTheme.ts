import { useEffect, useState } from "react";

export type ThemeName = "midnight" | "ivory" | "wine";

const STORAGE_KEY = "yvvr-theme";

function isThemeName(value: string | null): value is ThemeName {
  return value === "midnight" || value === "ivory" || value === "wine";
}

// Falls back to the visitor's OS light/dark preference on first visit (no saved choice yet).
function getDefaultTheme(): ThemeName {
  if (typeof window === "undefined") return "midnight";
  const saved = localStorage.getItem(STORAGE_KEY);
  if (isThemeName(saved)) return saved;
  return window.matchMedia?.("(prefers-color-scheme: light)").matches ? "ivory" : "midnight";
}

export function useTheme() {
  const [theme, setTheme] = useState<ThemeName>(getDefaultTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  // Keep theme in sync if the user changes it in another open tab.
  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY && isThemeName(e.newValue)) {
        setTheme(e.newValue);
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  return { theme, setTheme };
}
