import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import videoBg from "../assets/video-bg.jpg";

export default function VideoSection() {
  return (
    <section
      className="relative py-32 bg-cover bg-center"
      style={{ backgroundImage: `url(${videoBg})` }}
    >
      <div className="absolute inset-0 bg-ink/70" />
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
        >
          Are you all in?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-bone/75 text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
        >
          We're building an event culture where ambition is expected and excellence is the
          baseline. Global platforms. Powerful networks. Shared momentum. Step forward with
          partners who are scaling the future.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-amber text-ink font-display font-semibold tracking-wide rounded-full hover:bg-bone transition-colors"
          >
            Let's Grow Your Business
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
