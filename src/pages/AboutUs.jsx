import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const sections = [
  {
    title: "Not just the event",
    body: "We look past the three days on the show floor to the outcomes that matter before and after it — the leads generated, the partnerships signed, the market position earned.",
  },
  {
    title: "One team, every stage",
    body: "Strategy, sponsorship, marketing, and onsite delivery sit under one roof, so nothing is lost in handoffs between vendors.",
  },
  {
    title: "Built in the region",
    body: "We know the sectors, the stakeholders and the standards that matter across Saudi Arabia and the wider GCC, because we've built our business here.",
  },
  {
    title: "A decade of building",
    body: "Over ten years, our leadership has delivered exhibitions and conferences that connect businesses, governments and investors across the region.",
  },
];

export default function AboutUs() {
  return (
    <>
      <section className="pt-40 pb-24 bg-ink">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-amber text-sm tracking-[0.2em] uppercase mb-6"
          >
            About Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
          >
            We build platforms for people, business and industry
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-bone/70 max-w-2xl mx-auto leading-relaxed"
          >
            Connect Spot Exhibitions is a Riyadh-based events organiser delivering exhibitions,
            conferences and managed experiences across Saudi Arabia and the region.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-ink-soft border-t border-ink-line">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 space-y-16">
          {sections.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="grid md:grid-cols-3 gap-6 border-t border-ink-line pt-10"
            >
              <h2 className="font-display text-2xl font-semibold md:col-span-1">{s.title}</h2>
              <p className="text-bone/70 leading-relaxed md:col-span-2">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-ink text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-8">
          Want to work with us?
        </h2>
        <Link
          to="/contact"
          className="inline-block px-8 py-4 bg-amber text-ink font-display font-semibold tracking-wide rounded-full hover:bg-bone transition-colors"
        >
          Talk to Us
        </Link>
      </section>
    </>
  );
}
