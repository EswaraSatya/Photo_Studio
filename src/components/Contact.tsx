import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="section-backdrop mx-auto max-w-4xl px-4 py-24 text-center sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <p className="eyebrow justify-center text-xs uppercase tracking-[0.35em] text-[var(--accent)]">
          Get In Touch
        </p>
        <h2
          className="text-gradient mt-3 font-semibold"
          style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
        >
          Let's Capture Your Moment
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <a
            href="tel:+910000000000"
            className="gradient-border flex flex-col items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-lg shadow-black/10 transition hover:-translate-y-1"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)]">
              <FaPhoneAlt className="text-lg text-[var(--on-accent)]" />
            </span>
            <span className="text-sm text-[var(--text-muted)]">+91 00000 00000</span>
          </a>
          <a
            href="mailto:hello@yvvrstudio.com"
            className="gradient-border flex flex-col items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-lg shadow-black/10 transition hover:-translate-y-1"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)]">
              <FaEnvelope className="text-lg text-[var(--on-accent)]" />
            </span>
            <span className="text-sm text-[var(--text-muted)]">hello@yvvrstudio.com</span>
          </a>
          <div className="flex flex-col items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-lg shadow-black/10">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)]">
              <FaMapMarkerAlt className="text-lg text-[var(--on-accent)]" />
            </span>
            <span className="text-sm text-[var(--text-muted)]">Kakinada, Andhra Pradesh</span>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-6 text-2xl text-[var(--text-muted)]">
          <a href="https://wa.me/910000000000" aria-label="WhatsApp" className="transition hover:-translate-y-1 hover:text-[var(--accent)]">
            <FaWhatsapp />
          </a>
          <a href="https://instagram.com/" aria-label="Instagram" className="transition hover:-translate-y-1 hover:text-[var(--accent)]">
            <FaInstagram />
          </a>
          <a href="https://facebook.com/" aria-label="Facebook" className="transition hover:-translate-y-1 hover:text-[var(--accent)]">
            <FaFacebook />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
