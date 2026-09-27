import { motion } from "framer-motion";
import PageHeader from "../components/PageHeader";

const items = [
  {
    date: "Placeholder date",
    title: "EV Auto Show 4th edition recap — placeholder headline",
    blurb: "Swap this out for a real recap, press mention, or announcement once you have one.",
  },
  {
    date: "Placeholder date",
    title: "Another EV Auto Show press mention — placeholder headline",
    blurb: "Same here — this whole feed is a placeholder structure waiting on real content.",
  },
];

export default function News() {
  return (
    <>
      <PageHeader
        eyebrow="News"
        heading="What's happening at Connect Spot, and across the sectors we work in."
        body="If you're a journalist or want to speak with our team, reach us at info@connectspotexhibitions.com."
      />

      <section className="bg-ink py-16 lg:py-20">
        <div className="max-w-[900px] mx-auto px-6 lg:px-10 space-y-8">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border-t border-ink-line pt-6"
            >
              <p className="font-mono text-xs uppercase tracking-wideish text-bone/40 mb-2">
                {item.date}
              </p>
              <h3 className="font-display text-xl font-semibold text-bone mb-2">{item.title}</h3>
              <p className="text-bone/60 text-sm leading-relaxed">{item.blurb}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
