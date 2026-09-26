import { motion } from "framer-motion";
import evAutoShow from "../assets/portfolio/ev-auto-show.jpg";

const items = [
  {
    title: "EV Auto Show returns for its next edition",
    date: "Coming soon",
    image: evAutoShow,
    excerpt:
      "Placeholder — real coverage and photos from the next edition of EV Auto Show will be added here once available.",
  },
  {
    title: "Connect Spot expands its events portfolio",
    date: "Coming soon",
    image: evAutoShow,
    excerpt:
      "Placeholder — details on our newly announced platforms will be published here as they're confirmed.",
  },
];

export default function News() {
  return (
    <>
      <section className="pt-40 pb-20 bg-ink text-center">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-amber text-sm tracking-[0.2em] uppercase mb-6"
          >
            News & Insights
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
          >
            What's happening at Connect Spot
          </motion.h1>
        </div>
      </section>

      <section className="pb-24 bg-ink">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 grid sm:grid-cols-2 gap-8">
          {items.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="rounded-2xl overflow-hidden border border-ink-line bg-ink-soft"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-wide text-amber mb-2">{item.date}</p>
                <h2 className="font-display text-xl font-semibold mb-2">{item.title}</h2>
                <p className="text-sm text-bone/60 leading-relaxed">{item.excerpt}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
}
