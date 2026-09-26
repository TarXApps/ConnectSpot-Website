import { motion } from "framer-motion";

const points = [
  {
    title: "Where industries meet",
    body: "Every event we build is a meeting point — a place where decision-makers, investors and innovators come together to move their sectors forward.",
  },
  {
    title: "Where deals are made",
    body: "We design the floor, the sessions and the moments that turn conversations into contracts.",
  },
  {
    title: "Where markets grow",
    body: "From first edition to flagship, our platforms are built to scale with the industries they serve.",
  },
];

export default function MeetingPoints() {
  return (
    <section className="py-24 bg-ink">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-amber text-sm tracking-[0.2em] uppercase mb-4"
        >
          What We Believe
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold max-w-3xl mb-16"
        >
          Meeting points for the industries we serve
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="border-t border-ink-line pt-6"
            >
              <h3 className="font-display text-xl font-semibold mb-3">{p.title}</h3>
              <p className="text-bone/65 leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
