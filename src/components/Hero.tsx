import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] items-center overflow-hidden bg-[var(--bg)] px-4"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 3.5vw), 0 100%)" }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(38rem 30rem at 12% 8%, color-mix(in srgb, var(--accent) 30%, transparent), transparent 60%)," +
            "radial-gradient(34rem 28rem at 88% 18%, color-mix(in srgb, var(--accent-2) 24%, transparent), transparent 60%)," +
            "radial-gradient(46rem 36rem at 50% 100%, color-mix(in srgb, var(--accent) 16%, transparent), transparent 65%)",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,var(--bg)_80%)]" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-12 py-28 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="flex flex-col items-start text-left"
        >
          <p className="eyebrow text-xs uppercase tracking-[0.4em] text-[var(--accent)]">
            Professional · Creative · Reliable
          </p>
          <h1
            className="text-gradient mt-6 font-semibold"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.75rem)" }}
          >
            YVVR Studio
          </h1>
          <p
            className="mt-4 italic text-[var(--text-muted)]"
            style={{ fontSize: "clamp(1rem, 2.5vw, 1.4rem)" }}
          >
            Capturing Moments, Creating Memories.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#gallery"
              className="glow-btn rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] px-7 py-3 text-sm font-medium uppercase tracking-wider text-[var(--on-accent)]"
            >
              View Our Work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-[var(--border)] px-7 py-3 text-sm font-medium uppercase tracking-wider text-[var(--text)] transition hover:border-[var(--accent-cool)] hover:text-[var(--accent-cool)]"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>

        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.9, rotate: 8 }}
          animate={{ opacity: 1, scale: 1, rotate: 6 }}
          transition={{ duration: 1, delay: 0.35 }}
          className="relative mx-auto hidden aspect-square w-full max-w-sm lg:block"
        >
          <div className="geo-grid absolute inset-0 rounded-[2rem] border border-[var(--border)] bg-[var(--surface)]/60" />
          <div className="geo-shape absolute -left-6 top-10 h-20 w-20 rotate-45 rounded-lg" />
          <div className="geo-shape diamond-badge absolute bottom-8 right-4 h-24 w-24 bg-gradient-to-br from-[var(--accent)]/25 to-[var(--accent-2)]/25" />
          <div className="absolute inset-10 rounded-full border border-[var(--accent)]/40" />
        </motion.div>
      </div>

      <motion.div
        aria-hidden="true"
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-[var(--accent)]"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
    </section>
  );
}


