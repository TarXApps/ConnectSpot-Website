import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const images = Array.from({ length: 30 }, (_, i) => ({
  src: `/gallery/gallery-${String(i + 1).padStart(2, "0")}.jpg`,
  alt: `Connect Spot event photo ${i + 1}`,
}));

const CHUNK_SIZE = 5;
const SPEEDS = [22, 30, 25, 33, 20, 28];

function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

function GalleryImage({ img, rowProgress }) {
  const scale = useTransform(rowProgress, [0, 0.5, 1], [1, 1.5, 1]);
  return (
    <div className="h-36 sm:h-48 lg:h-60 aspect-[4/3] shrink-0 rounded-xl overflow-hidden bg-ink-soft">
      <motion.img
        src={img.src}
        alt={img.alt}
        loading="lazy"
        style={{ scale }}
        className="w-full h-full object-cover"
      />
    </div>
  );
}

function GalleryRow({ images: rowImages, direction, speed }) {
  const tripled = [...rowImages, ...rowImages, ...rowImages];
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "left" ? ["0%", `-${speed}%`] : [`-${speed}%`, "0%"]
  );

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div style={{ x }} className="flex gap-3 sm:gap-4 w-max">
        {tripled.map((img, i) => (
          <GalleryImage key={i} img={img} rowProgress={scrollYProgress} />
        ))}
      </motion.div>
    </div>
  );
}

export default function ScrollGallery() {
  const rows = chunk(images, CHUNK_SIZE);

  return (
    <section id="gallery" className="bg-ink py-16 lg:py-20 overflow-hidden scroll-mt-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 mb-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow text-amber mb-4"
        >
          Moments From The Floor
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-googlesans font-semibold text-3xl sm:text-4xl tracking-tightest max-w-xl"
        >
          Inside the events we build
        </motion.h2>
      </div>
      <div className="space-y-3 sm:space-y-4">
        {rows.map((rowImages, i) => (
          <GalleryRow
            key={i}
            images={rowImages}
            direction={i % 2 === 0 ? "left" : "right"}
            speed={SPEEDS[i % SPEEDS.length]}
          />
        ))}
      </div>
    </section>
  );
}
