import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden bg-[var(--bg)] px-4 text-center"
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

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="relative z-10 flex max-w-3xl flex-col items-center"
      >
        <p className="eyebrow text-xs uppercase tracking-[0.4em] text-[var(--accent)]">
          Professional · Creative · Reliable
        </p>
        <h1
          className="text-gradient mt-6 font-semibold"
          style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}
        >
          YVVR Studio
        </h1>
        <p
          className="mt-4 italic text-[var(--text-muted)]"
          style={{ fontSize: "clamp(1rem, 2.5vw, 1.4rem)" }}
        >
          Capturing Moments, Creating Memories.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#gallery"
            className="glow-btn rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] px-7 py-3 text-sm font-medium uppercase tracking-wider text-[var(--on-accent)]"
          >
            View Our Work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-[var(--border)] px-7 py-3 text-sm font-medium uppercase tracking-wider text-[var(--text)] transition hover:border-[var(--accent)]"
          >
            Get In Touch
          </a>
        </div>
      </motion.div>

      <motion.div
        aria-hidden="true"
        className="absolute bottom-8 z-10 text-[var(--accent)]"
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

