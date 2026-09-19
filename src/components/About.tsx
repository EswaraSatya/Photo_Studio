import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section-backdrop mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="gradient-border overflow-hidden rounded-3xl border border-[var(--border)] shadow-2xl shadow-black/20"
        >
          <img
            src="https://picsum.photos/seed/yvvr-about/900/1100"
            alt="Photographer at work in the YVVR studio"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative"
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

