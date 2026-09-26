import { motion } from "framer-motion";

const images = Array.from({ length: 30 }, (_, i) => `/gallery/gallery-${String(i + 1).padStart(2, "0")}.jpg`);
const row1 = images.slice(0, 15);
const row2 = images.slice(15, 30);

function Row({ imgs, reverse }) {
  const doubled = [...imgs, ...imgs];
  return (
    <div className="overflow-hidden">
      <div
        className={`flex gap-4 w-max ${reverse ? "animate-marquee" : "animate-marquee"}`}
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {doubled.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            loading="lazy"
            className="h-40 sm:h-56 w-auto rounded-lg object-cover flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
}

export default function ScrollGallery() {
  return (
    <section className="py-20 bg-ink overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-amber text-sm tracking-[0.2em] uppercase mb-4"
        >
          On the Ground
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-3xl sm:text-4xl font-bold"
        >
          Moments from our events
        </motion.h2>
      </div>
      <div className="space-y-4">
        <Row imgs={row1} />
        <Row imgs={row2} reverse />
      </div>
    </section>
  );
}
