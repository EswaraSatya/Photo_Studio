import type { ThemeName } from "../hooks/useTheme";

interface ThemeSwitcherProps {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
}

const options: { value: ThemeName; label: string; swatch: string }[] = [
  { value: "gold", label: "Black & Gold", swatch: "#d4af37" },
  { value: "pastel", label: "Soft Pastel", swatch: "#c98b8b" },
  { value: "maroon", label: "Maroon & Gold", swatch: "#c9a24b" },
];

export default function ThemeSwitcher({ theme, setTheme }: ThemeSwitcherProps) {
  return (
    <div className="flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)]/80 p-1 backdrop-blur">
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          aria-label={`Switch to ${option.label} theme`}
          aria-pressed={theme === option.value}
          onClick={() => setTheme(option.value)}
          className={`h-6 w-6 rounded-full border-2 transition ${
            theme === option.value ? "border-[var(--accent)] scale-110" : "border-transparent opacity-70"
          }`}
          style={{ backgroundColor: option.swatch }}
          title={option.label}
        />
      ))}
    </div>
  );
}
