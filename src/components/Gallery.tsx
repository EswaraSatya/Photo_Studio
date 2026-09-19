import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { galleryImages } from "../data/gallery";

// Bento-style spans applied cyclically so the grid reads as a curated feature wall, not a uniform grid.
const SPANS = [
  "sm:col-span-2 sm:row-span-2",
  "sm:row-span-2",
  "",
  "",
  "sm:col-span-2",
  "",
  "sm:row-span-2",
  "",
  "",
];

export default function Gallery() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="gallery" className="section-backdrop mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <div className="text-center">
        <p className="eyebrow justify-center text-xs uppercase tracking-[0.35em] text-[var(--accent)]">
          Our Work
        </p>
        <h2
          className="text-gradient mt-3 font-semibold"
          style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
        >
          Gallery
        </h2>
      </div>

      <div className="mt-14 grid auto-rows-[150px] grid-cols-2 gap-4 sm:auto-rows-[160px] sm:grid-cols-4">
        {galleryImages.map((image, index) => (
          <motion.button
            key={image.id}
            type="button"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
            onClick={() => setSelected(image.src)}
            className={`group relative block overflow-hidden rounded-2xl border border-[var(--border)] shadow-lg shadow-black/20 ${SPANS[index % SPANS.length]}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100">
              <span className="translate-y-2 p-4 text-left text-xs uppercase tracking-wider text-white transition duration-300 group-hover:translate-y-0">
                {image.alt}
              </span>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
            onClick={() => setSelected(null)}
          >
            <motion.img
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.3 }}
              src={selected}
              alt="Enlarged studio work"
              className="max-h-[85vh] max-w-full rounded-xl"
            />
            <button
              type="button"
              aria-label="Close preview"
              onClick={() => setSelected(null)}
              className="absolute right-6 top-6 text-2xl text-white"
            >
              <FaTimes />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

