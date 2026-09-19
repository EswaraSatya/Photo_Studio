import { motion } from "framer-motion";
import { services } from "../data/services";

export default function Services() {
  return (
    <section id="services" className="section-backdrop bg-[var(--surface)] px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="eyebrow justify-center text-xs uppercase tracking-[0.35em] text-[var(--accent)]">
            What We Offer
          </p>
          <h2
            className="text-gradient mt-3 font-semibold"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
          >
            Our Services
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="gradient-border relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface-alt)] p-6 text-center shadow-lg shadow-black/10 transition hover:-translate-y-1.5"
              >
                <span className="absolute right-4 top-3 font-serif text-3xl text-[var(--border)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)]">
                  <Icon className="text-2xl text-[var(--on-accent)]" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-[var(--text)]">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

