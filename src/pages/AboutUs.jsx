import { motion } from "framer-motion";
import PageHeader from "../components/PageHeader";

const notJustTheEvent = [
  "An exhibition needs the right exhibitors.",
  "A conference needs the right audience.",
  "A platform needs something worth coming for.",
  "We build all three.",
];

const stages = ["Strategy", "Sales", "Marketing", "Production", "Operations", "Finance"];

export default function AboutUs() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        heading="We build platforms for people, business and industry."
        body="Connect Spot is an exhibitions, conferences and managed events company based in Riyadh. We bring together the people, ideas and businesses that shape industries — creating platforms where meaningful connections can happen."
      />

      <section className="bg-ink py-16 lg:py-20">
        <div className="max-w-[900px] mx-auto px-6 lg:px-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-googlesans font-semibold text-2xl sm:text-3xl lg:text-4xl tracking-tightest mb-8 text-balance"
          >
            Not just the event. Everything around it.
          </motion.h2>
          <div className="space-y-3">
            {notJustTheEvent.map((line, i) => (
              <motion.p
                key={line}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-bone/70 text-lg font-light"
              >
                {line}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink-soft border-y border-ink-line py-16 lg:py-20">
        <div className="max-w-[900px] mx-auto px-6 lg:px-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-googlesans font-semibold text-2xl sm:text-3xl tracking-tightest mb-10"
          >
            One team. Every stage.
          </motion.h2>
          <div className="flex flex-wrap gap-3 mb-8">
            {stages.map((s, i) => (
              <motion.span
                key={s}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="px-4 py-2 rounded-full border border-ink-line text-bone/80 text-sm font-mono uppercase tracking-wideish"
              >
                {s}
              </motion.span>
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-bone/60 text-base"
          >
            From planning to delivery, every part works together.
          </motion.p>
        </div>
      </section>

      <section className="bg-ink py-16 lg:py-20">
        <div className="max-w-[900px] mx-auto px-6 lg:px-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-googlesans font-semibold text-2xl sm:text-3xl tracking-tightest mb-6"
          >
            Built in the region.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-bone/70 text-lg font-light leading-relaxed mb-8"
          >
            With experience across the Middle East, we understand the markets, audiences, venues
            and partners that make events work.
          </motion.p>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 rounded-full bg-ink-soft border border-amber/40 text-amber text-sm font-mono uppercase tracking-wideish">
              Riyadh · Saudi Arabia
            </span>
            <span className="px-4 py-2 rounded-full bg-ink-soft border border-ink-line text-bone/70 text-sm font-mono uppercase tracking-wideish">
              Middle East
            </span>
          </div>
        </div>
      </section>

      <section className="bg-ink-soft border-t border-ink-line py-20 lg:py-28 text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          className="font-googlesans font-semibold text-3xl sm:text-4xl tracking-tightest max-w-xl mx-auto text-balance mb-3"
        >
          A decade of building.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-bone/60 text-lg"
        >
          And we're only getting started.
        </motion.p>
      </section>
    </>
  );
}
