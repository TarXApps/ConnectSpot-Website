import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const lines = [
  "We start with an idea worth building an industry around.",
  "We design the experience, the content and the connections that give it life.",
  "We execute every detail on the ground, from strategy to the last handshake.",
  "We grow it, edition after edition, into a platform the industry relies on.",
];

export default function RewritingModel() {
  return (
    <section className="py-24 bg-ink-soft relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-amber text-sm tracking-[0.2em] uppercase mb-4"
        >
          What We Do
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold max-w-3xl mb-12"
        >
          From idea to execution
        </motion.h2>

        <div className="space-y-6 max-w-2xl">
          {lines.map((line, i) => (
            <motion.p
              key={line}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-lg sm:text-xl text-bone/80 leading-relaxed"
            >
              {line}
            </motion.p>
          ))}
        </div>

        <Link
          to="/about"
          className="inline-block mt-10 font-display text-amber border-b border-amber pb-1 hover:text-bone hover:border-bone transition-colors"
        >
          Learn more
        </Link>
      </div>
    </section>
  );
}
