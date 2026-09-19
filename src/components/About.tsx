import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section-backdrop relative mx-auto max-w-6xl px-4 py-28 sm:px-6">
      <div className="geo-grid absolute -left-6 top-6 hidden h-56 w-56 lg:block" aria-hidden="true" />
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, x: -24, rotate: -3 }}
          whileInView={{ opacity: 1, x: 0, rotate: -2 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="notched-corners shadow-accent relative overflow-hidden border border-[var(--border)]"
        >
          <img
            src="https://picsum.photos/seed/yvvr-about/900/1100"
            alt="Photographer at work in the YVVR studio"
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <div className="geo-shape hex-frame absolute -bottom-6 -right-6 h-24 w-24 bg-gradient-to-br from-[var(--accent)]/30 to-[var(--accent-2)]/30" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative lg:mt-16"
        >
          <span
            className="text-gradient absolute -top-10 left-0 select-none font-serif opacity-40"
            style={{ fontSize: "6rem", lineHeight: 1 }}
            aria-hidden="true"
          >
            &ldquo;
          </span>
          <p className="eyebrow text-xs uppercase tracking-[0.35em] text-[var(--accent)]">Our Story</p>
          <h2
            className="text-gradient mt-3 font-semibold"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
          >
            Every Celebration, Beautifully Told
          </h2>
          <p className="mt-6 max-w-xl text-[var(--text-muted)] leading-relaxed">
            YVVR Studio brings together an experienced team of photographers dedicated to
            preserving your most cherished celebrations. From weddings and haldi functions to
            birthdays, baby showers, and traditional ceremonies, we blend candid storytelling with
            timeless portraiture — professional, creative, and always reliable.
          </p>
        </motion.div>
      </div>

    </section>
  );
}

