import { motion } from "framer-motion";
import { editions, comingSoon } from "../data/events";

export default function OurEvents() {
  return (
    <>
      <section className="pt-40 pb-20 bg-ink text-center">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-amber text-sm tracking-[0.2em] uppercase mb-6"
          >
            Our Events
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
          >
            EV Auto Show — four editions and growing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-bone/70 max-w-2xl mx-auto"
          >
            Our flagship platform has run for four editions, and it's just the beginning of
            what we're building next.
          </motion.p>
        </div>
      </section>

      <section className="pb-24 bg-ink">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {editions.map((ed, i) => (
            <motion.div
              key={ed.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl overflow-hidden border border-ink-line group"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={ed.image}
                  alt={ed.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 bg-ink-soft">
                <p className="font-display font-semibold">{ed.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-ink-soft border-t border-ink-line">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl sm:text-4xl font-bold mb-12 text-center"
          >
            What's coming next
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {comingSoon.map((ev, i) => {
              const Icon = ev.icon;
              const content = (
                <>
                  <div className="w-11 h-11 rounded-full bg-ink-soft border border-ink-line flex items-center justify-center mb-4 group-hover:border-amber transition-colors">
                    <Icon className="w-5 h-5 text-amber" strokeWidth={1.5} />
                  </div>
                  <p className="font-display font-semibold mb-1">{ev.title}</p>
                  <p className="text-sm text-bone/50">
                    {ev.url ? "Coming soon" : "Website coming soon"}
                  </p>
                </>
              );
              const className =
                "group p-6 rounded-2xl bg-ink border border-ink-line hover:border-amber/50 transition-colors text-left w-full";

              return ev.url ? (
                <motion.a
                  key={ev.title}
                  href={ev.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 4) * 0.1 }}
                  className={className}
                >
                  {content}
                </motion.a>
              ) : (
                <motion.button
                  key={ev.title}
                  type="button"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 4) * 0.1 }}
                  className={className}
                >
                  {content}
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
