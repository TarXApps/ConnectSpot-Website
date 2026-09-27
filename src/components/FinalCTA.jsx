import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="bg-ink-soft border-t border-ink-line py-20 lg:py-28 text-center px-6">
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.7 }}
        className="font-googlesans font-semibold text-4xl sm:text-5xl lg:text-6xl tracking-tightest max-w-3xl mx-auto text-balance"
      >
        Got an idea for an event? We want to hear it.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15, duration: 0.6 }}
        className="mt-6 text-bone/60 max-w-xl mx-auto"
      >
        Whether you're launching something new or scaling something that already works, we'll
        help you build it properly.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <Link
          to="/contact"
          className="mt-10 inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wideish bg-amber text-ink px-10 py-5 rounded-full hover:bg-bone transition-colors"
        >
          Start a conversation
        </Link>
      </motion.div>
    </section>
  );
}
