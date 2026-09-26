import { useCountUp } from "../hooks/useCountUp";

const stats = [
  { value: 10, suffix: "+", label: "Years in the market" },
  { value: 90, suffix: "+", label: "Countries in our audience reach" },
  { value: 10000, suffix: "+", label: "Attendees engaged annually" },
  { value: 100, suffix: "", label: "Brands served" },
];

function Stat({ value, suffix, label }) {
  const [ref, count] = useCountUp(value);
  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-4xl sm:text-5xl font-bold text-amber">
        {count.toLocaleString()}
        {suffix}
      </div>
      <p className="mt-2 text-sm text-bone/60">{label}</p>
    </div>
  );
}

export default function StatsBar() {
  return (
    <section className="py-16 bg-ink-soft border-y border-ink-line">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <Stat key={s.label} {...s} />
        ))}
      </div>
    </section>
  );
}
