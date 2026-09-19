import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const SESSION_KEY = "yvvr-intro-seen";
const AUTO_DISMISS_MS = 2800;

export default function CurtainIntro() {
  const [visible, setVisible] = useState(() => sessionStorage.getItem(SESSION_KEY) !== "true");
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(() => dismiss(), AUTO_DISMISS_MS);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  function dismiss() {
    sessionStorage.setItem(SESSION_KEY, "true");
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--bg)] [height:100dvh]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          onClick={dismiss}
          role="button"
          aria-label="Skip intro"
        >
          <motion.div
            className="absolute inset-y-0 left-0 w-1/2 bg-[var(--surface)]"
            initial={{ x: 0 }}
            animate={prefersReducedMotion ? { opacity: 0 } : { x: "-100%" }}
            transition={{ duration: 0.9, delay: 1.6, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute inset-y-0 right-0 w-1/2 bg-[var(--surface)]"
            initial={{ x: 0 }}
            animate={prefersReducedMotion ? { opacity: 0 } : { x: "100%" }}
            transition={{ duration: 0.9, delay: 1.6, ease: "easeInOut" }}
          />

          <div className="relative z-10 flex flex-col items-center px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[var(--accent)] font-semibold tracking-[0.3em]"
              style={{ fontSize: "clamp(1.75rem, 6vw, 3.5rem)" }}
            >
              Y V V R STUDIO
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-3 text-[var(--text-muted)] tracking-[0.4em] uppercase"
              style={{ fontSize: "clamp(0.75rem, 2.5vw, 1.1rem)" }}
            >
              Presents
            </motion.p>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              dismiss();
            }}
            className="absolute bottom-8 z-10 rounded-full border border-[var(--border)] px-4 py-1.5 text-xs uppercase tracking-widest text-[var(--text-muted)] hover:text-[var(--text)]"
          >
            Skip
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
