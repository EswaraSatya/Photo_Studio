export default function Footer() {
  return (
    <footer className="section-backdrop bg-[var(--bg)] px-4 py-10 text-center sm:px-6">
      <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent" />
      <p className="mt-6 text-sm uppercase tracking-[0.3em] text-[var(--accent)]">YVVR Studio</p>
      <p className="mt-2 text-xs text-[var(--text-muted)]">
        Professional. Creative. Reliable. — Capturing Moments, Creating Memories.
      </p>
      <p className="mt-4 text-xs text-[var(--text-muted)]">
        &copy; {new Date().getFullYear()} YVVR Studio. All rights reserved.
      </p>
      <p className="mt-2 text-[0.7rem] text-[var(--text-muted)]/70">
        Designed by Eswara Satya
      </p>
    </footer>
  );
}

