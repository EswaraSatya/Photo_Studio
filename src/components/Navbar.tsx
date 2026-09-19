import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeSwitcher from "./ThemeSwitcher";
import type { ThemeName } from "../hooks/useTheme";

interface NavbarProps {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
}

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#location", label: "Location" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar({ theme, setTheme }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 px-3 pt-3 sm:px-6 sm:pt-4">
      <div
        className={`glass mx-auto flex max-w-5xl items-center justify-between rounded-2xl border px-4 py-3 transition-shadow ${
          scrolled ? "border-[var(--border)] shadow-lg shadow-black/20" : "border-[var(--border)]/60"
        }`}
      >
        <a href="#home" className="flex items-center gap-3 whitespace-nowrap">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--accent)] font-serif text-sm text-[var(--accent)]">
            YV
          </span>
          <span className="font-serif text-lg tracking-[0.25em] text-[var(--accent)]">YVVR STUDIO</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-sm uppercase tracking-wider text-[var(--text-muted)] transition hover:text-[var(--accent)]"
            >
              {link.label}
            </a>
          ))}
          <ThemeSwitcher theme={theme} setTheme={setTheme} />
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeSwitcher theme={theme} setTheme={setTheme} />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="text-xl text-[var(--text)]"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="glass mx-auto mt-2 flex max-w-5xl flex-col gap-1 rounded-2xl border border-[var(--border)] px-4 py-3 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2 text-sm uppercase tracking-wider text-[var(--text-muted)] hover:text-[var(--accent)]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

