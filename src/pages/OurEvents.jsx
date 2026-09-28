import { motion } from "framer-motion";
import { editions, comingSoon } from "../data/events";
import PageHeader from "../components/PageHeader";

export default function OurEvents() {
  return (
    <>
      <PageHeader
        eyebrow="Events"
        heading="Events that give industries a place to meet."
        body="Different sectors. Different audiences. Different ambitions. One purpose: bringing the right people together."
      />

      <section className="bg-ink pt-6 pb-16 lg:pt-8 lg:pb-20">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="eyebrow text-amber mb-4">EV Auto Show Riyadh</p>
            <h2 className="font-googlesans font-semibold text-2xl sm:text-3xl tracking-tightest mb-3 max-w-2xl">
              The future of mobility, brought to the market.
            </h2>
            <p className="text-bone/60 max-w-xl">
              A platform connecting the electric vehicle industry with buyers, investors,
              businesses and enthusiasts.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {editions.map((ed, i) => (
              <motion.a
                key={ed.title}
                href={ed.url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="group rounded-2xl border border-ink-line bg-ink-soft overflow-hidden flex flex-col"
              >
                <div className="h-36 overflow-hidden">
                  <img
                    src={ed.image}
                    alt={ed.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-display text-base font-semibold text-bone mb-2">
                    {ed.title}
                  </h3>
                  <p className="text-bone/60 text-sm leading-relaxed flex-1 mb-4">
                    {ed.tagline}
                  </p>
                  <span className="font-mono text-xs uppercase tracking-wideish text-amber inline-flex items-center gap-1">
                    Visit Event{" "}
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow text-bone/40 mb-6"
          >
            Coming Events
          </motion.p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {comingSoon.map((ev, i) => {
              const Icon = ev.icon;
              return (
                <motion.div
                  key={ev.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="rounded-2xl border border-dashed border-ink-line flex flex-col items-center justify-center min-h-[160px] text-center px-4 py-6"
                >
                  <div className="w-11 h-11 rounded-full bg-ink-soft border border-ink-line flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-amber" strokeWidth={1.5} />
                  </div>
                  <p className="font-display text-base font-semibold text-bone/80 mb-2">
                    {ev.title}
                  </p>
                  <p className="font-mono text-xs uppercase tracking-wideish text-bone/30">
                    Coming soon
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-ink-soft border-t border-ink-line py-16 lg:py-20 text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-bone/60 text-lg max-w-lg mx-auto"
        >
          Different conversations. Different opportunities. One place to bring them together.
        </motion.p>
      </section>
    </>
  );
}
