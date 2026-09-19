import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="section-backdrop border-t border-[var(--border)] bg-[var(--bg)] px-4 py-6 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <a href="#home" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--accent)] font-serif text-xs text-[var(--accent)]">
            YV
          </span>
          <span className="font-serif text-sm tracking-[0.2em] text-[var(--accent)]">YVVR STUDIO</span>
        </a>

        <nav className="flex flex-wrap justify-center gap-x-5 gap-y-1 text-xs uppercase tracking-wider text-[var(--text-muted)]">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-[var(--accent)]">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4 text-base text-[var(--text-muted)]">
          <a href="https://wa.me/918498989306" aria-label="WhatsApp" className="transition hover:text-[var(--accent-cool)]">
            <FaWhatsapp />
          </a>
          <a href="https://instagram.com/" aria-label="Instagram" className="transition hover:text-[var(--accent-cool)]">
            <FaInstagram />
          </a>
          <a href="https://facebook.com/" aria-label="Facebook" className="transition hover:text-[var(--accent-cool)]">
            <FaFacebook />
          </a>
        </div>
      </div>

      <p className="mt-4 text-center text-[0.7rem] text-[var(--text-muted)]/70">
        &copy; {new Date().getFullYear()} YVVR Studio · Designed by Eswara Satya
      </p>
    </footer>
  );
}


