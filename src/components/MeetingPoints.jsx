import { motion } from "framer-motion";

const points = [
  "The right businesses.",
  "The right people.",
  "The right conversations.",
  "Brought together in one place.",
];

export default function MeetingPoints() {
  return (
    <section className="bg-ink py-16 lg:py-20 border-b border-ink-line">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-googlesans font-semibold text-3xl sm:text-4xl lg:text-5xl tracking-tightest max-w-3xl text-balance mb-10"
        >
          We build events that become meeting points for industries.
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-3 max-w-3xl mb-10">
          {points.map((p, i) => (
            <motion.p
              key={p}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="font-display text-lg text-bone/85"
            >
              {p}
            </motion.p>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-bone/60 text-base max-w-2xl"
        >
          From the first idea to the final guest, we bring strategy, creative, marketing, production and operations together under one team.
        </motion.p>
      </div>
    </section>
  );
}
