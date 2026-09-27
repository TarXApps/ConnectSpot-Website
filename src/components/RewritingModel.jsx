import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CalendarDays, Sparkles, Megaphone, Settings2, ClipboardList } from "lucide-react";

const capabilities = [
  { icon: CalendarDays, label: "Exhibitions & Conferences" },
  { icon: Sparkles, label: "Experiences" },
  { icon: Megaphone, label: "Marketing & Communications" },
  { icon: Settings2, label: "Production & Technology" },
  { icon: ClipboardList, label: "Operations" },
];

export default function RewritingModel() {
  return (
    <section
      id="what-we-do"
      className="relative bg-ink-soft border-y border-ink-line py-16 lg:py-20 overflow-hidden scroll-mt-24"
    >
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          className="eyebrow text-amber mb-6"
        >
          What We Do
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-googlesans font-semibold text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-tightest max-w-2xl text-balance mb-6"
        >
          From idea to execution.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-bone/70 text-lg font-light max-w-xl mb-14"
        >
          We build exhibitions, conferences and experiences from the ground up, bringing every part of the event together under one roof.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-14">
          {capabilities.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="border-t border-ink-line pt-6"
            >
              <div className="w-11 h-11 rounded-full bg-ink border border-ink-line flex items-center justify-center mb-4">
                <c.icon className="w-5 h-5 text-amber" strokeWidth={1.5} />
              </div>
              <p className="font-display text-base font-semibold text-bone">{c.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Link
            to="/our-services"
            className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wideish bg-amber text-ink px-8 py-4 rounded-full hover:bg-bone transition-colors"
          >
            Explore Our Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
