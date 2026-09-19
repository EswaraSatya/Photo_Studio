import { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";
import LocationMap from "./LocationMap";

type MapView = "google" | "satellite" | "illustrated";

const GOOGLE_QUERY = "Y+V+V+R+Studio,+Atchampeta,+Kakinada,+Andhra+Pradesh+533005";

export default function Location() {
  const [view, setView] = useState<MapView>("google");

  return (
    <section id="location" className="section-backdrop section-slant bg-[var(--surface)] px-4 pb-24 pt-32 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="eyebrow text-xs uppercase tracking-[0.35em] text-[var(--accent)]">Visit Us</p>
          <h2
            className="text-gradient mt-3 font-semibold"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
          >
            Our Studio
          </h2>
          <div className="glass-card mt-5 flex items-start gap-3 rounded-2xl p-4">
            <span className="diamond-badge flex h-10 w-10 shrink-0 items-center justify-center bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)]">
              <FaMapMarkerAlt className="text-[var(--on-accent)]" />
            </span>
            <p className="text-[var(--text-muted)]">
              Opposite Panchayathi, Atchampeta, Panasapadu, Kakinada, Andhra Pradesh 533005, India
            </p>
          </div>
          <a
            href="https://maps.app.goo.gl/iwwVhiMczPxZyPBf7"
            target="_blank"
            rel="noreferrer"
            className="glow-btn mt-4 inline-block rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] px-6 py-2.5 text-xs font-medium uppercase tracking-wider text-[var(--on-accent)]"
          >
            Get Directions
          </a>
          <div className="gradient-border arch-frame shadow-accent mt-6 overflow-hidden">
            <img
              src="https://picsum.photos/seed/yvvr-studio-front/700/450"
              alt="YVVR Studio storefront"
              loading="lazy"
              className="w-full"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div className="glass-card mb-3 inline-flex flex-wrap gap-1 rounded-full p-1">
            <button
              type="button"
              onClick={() => setView("google")}
              aria-pressed={view === "google"}
              className={`rounded-full px-4 py-1.5 text-xs uppercase tracking-wider transition ${
                view === "google"
                  ? "bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] text-[var(--on-accent)]"
                  : "text-[var(--text-muted)]"
              }`}
            >
              Map View
            </button>
            <button
              type="button"
              onClick={() => setView("satellite")}
              aria-pressed={view === "satellite"}
              className={`rounded-full px-4 py-1.5 text-xs uppercase tracking-wider transition ${
                view === "satellite"
                  ? "bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] text-[var(--on-accent)]"
                  : "text-[var(--text-muted)]"
              }`}
            >
              Satellite
            </button>
            <button
              type="button"
              onClick={() => setView("illustrated")}
              aria-pressed={view === "illustrated"}
              className={`rounded-full px-4 py-1.5 text-xs uppercase tracking-wider transition ${
                view === "illustrated"
                  ? "bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] text-[var(--on-accent)]"
                  : "text-[var(--text-muted)]"
              }`}
            >
              Illustrated View
            </button>
          </div>

          <div className="shadow-accent h-80 w-full overflow-hidden rounded-2xl border border-[var(--border)] lg:h-[27rem]">
            {view === "google" && (
              <iframe
                title="YVVR Studio location map"
                src={`https://www.google.com/maps?q=${GOOGLE_QUERY}&z=17&output=embed`}
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            )}
            {view === "satellite" && (
              <iframe
                title="YVVR Studio satellite view"
                src={`https://www.google.com/maps?q=${GOOGLE_QUERY}&z=18&t=k&output=embed`}
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            )}
            {view === "illustrated" && (
              <div className="h-full w-full bg-[var(--surface)]">
                <LocationMap />
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
