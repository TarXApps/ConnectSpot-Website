import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";

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
      <PageHeader
        eyebrow="About Us"
        heading="We build platforms for people, business and industry."
        body="Connect Spot is an exhibitions, conferences and managed events company based in Riyadh. We bring together the people, ideas and businesses that shape industries — creating platforms where meaningful connections can happen."
      />

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
