import { motion } from "framer-motion";
import { useCountUp } from "../hooks/useCountUp";
import { clientLogos } from "../data/clientLogos";

const stats = [
  { value: 10, suffix: "+", label: "Years in the market." },
  { value: 90, suffix: "+", label: "Countries in our audience reach." },
  { value: 10000, suffix: "+", label: "Attendees engaged annually." },
  { value: 100, suffix: "", label: "Brands served." },
];

function Stat({ value, suffix, label }) {
  const [ref, count] = useCountUp(value);
  return (
    <div ref={ref} className="flex-1 min-w-[220px]">
      <div className="font-googlesans font-semibold text-4xl sm:text-5xl lg:text-6xl text-bone tracking-tightest">
        {count.toLocaleString()}
        {suffix}
      </div>
      <p className="mt-3 text-bone/50 text-sm max-w-[240px]">{label}</p>
    </div>
  );
}

export default function StatsBar() {
  const doubled = [...clientLogos, ...clientLogos];

  return (
    <section className="bg-ink-soft border-y border-ink-line py-10 lg:py-14">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row flex-wrap gap-10 sm:gap-6"
        >
          {stats.map((s) => (
            <Stat key={s.label} {...s} />
          ))}
        </motion.div>

        <div className="mt-16 border-t border-ink-line pt-10">
          <p className="eyebrow text-bone/40 mb-6 px-6 lg:px-10">Trusted By</p>
          <div className="overflow-hidden">
            <div className="marquee-track">
              {doubled.map((logo, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center h-16 w-36 mx-4 shrink-0 rounded-lg bg-bone px-4 py-3"
                >
                  <img src={logo} alt="" className="max-h-full max-w-full object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
