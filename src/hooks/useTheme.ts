import { useEffect, useState } from "react";

export type ThemeName = "gold" | "pastel" | "maroon";

const STORAGE_KEY = "yvvr-theme";

export function useTheme() {
  const [theme, setTheme] = useState<ThemeName>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === "gold" || saved === "pastel" || saved === "maroon" ? saved : "gold";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  return { theme, setTheme };
}
