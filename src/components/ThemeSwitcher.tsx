import type { ThemeName } from "../hooks/useTheme";

interface ThemeSwitcherProps {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
}

const options: { value: ThemeName; label: string; bg: string; accent: string }[] = [
  { value: "midnight", label: "Midnight & Champagne", bg: "#0a0e1a", accent: "#d9b978" },
  { value: "ivory", label: "Ivory & Champagne", bg: "#f9f4ea", accent: "#c9a35f" },
  { value: "wine", label: "Wine & Champagne", bg: "#1c0f18", accent: "#d9b978" },
];

export default function ThemeSwitcher({ theme, setTheme }: ThemeSwitcherProps) {
  return (
    <div
      className="flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)]/80 p-1 backdrop-blur"
      role="group"
      aria-label="Choose color theme"
    >
      <span className="hidden pl-2 text-[0.65rem] uppercase tracking-[0.2em] text-[var(--text-muted)] md:inline">
        Theme
      </span>
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          aria-label={`Switch to ${option.label} theme`}
          aria-pressed={theme === option.value}
          onClick={() => setTheme(option.value)}
          className={`h-6 w-6 rounded-full border-2 transition ${
            theme === option.value ? "border-[var(--accent)] scale-110" : "border-transparent opacity-70 hover:opacity-100"
          }`}
          style={{ background: `linear-gradient(135deg, ${option.bg} 50%, ${option.accent} 50%)` }}
          title={option.label}
        />
      ))}
    </div>
  );
}

