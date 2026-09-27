import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import videoBg from "../assets/video-bg.jpg";

export default function VideoSection() {
  return (
    <section className="relative h-[80vh] min-h-[520px] w-full overflow-hidden flex items-center justify-center">
      <img
        src={videoBg}
        alt="EV Auto Show keynote panel on stage"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />
      <div className="relative z-10 text-center px-6 max-w-2xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-googlesans font-semibold text-4xl sm:text-5xl tracking-tightest mb-6"
        >
          Are you all in?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="text-bone/70 text-lg mb-10"
        >
          Placeholder copy — set the tone for what partnering with you means: the culture, the
          ambition, the standard you hold work to.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wideish bg-amber text-ink px-8 py-4 rounded-full hover:bg-bone transition-colors"
          >
            Let's grow your business
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
