import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "../data/testimonials";

export default function Testimonial() {
  const [index, setIndex] = useState(0);
  const t = testimonials[index];

  return (
    <section className="py-24 bg-ink">
      <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="eyebrow text-amber mb-10 text-center"
        >
          Voices of Innovation
        </motion.p>

        <div className="min-h-[220px] sm:min-h-[180px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <blockquote className="font-googlesans text-2xl sm:text-3xl lg:text-4xl leading-snug text-bone/90 text-balance">
                "{t.quote}"
              </blockquote>
              <div className="mt-10 flex items-center justify-center gap-4">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover shrink-0"
                />
                <div className="text-left">
                  <div className="font-medium text-bone">{t.name}</div>
                  <div className="text-sm text-bone/50">{t.role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center justify-center gap-3">
          {testimonials.map((n, r) => (
            <button
              key={n.id}
              onClick={() => setIndex(r)}
              aria-label={`Show testimonial from ${n.name}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                r === index ? "w-8 bg-amber" : "w-1.5 bg-bone/25 hover:bg-bone/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
