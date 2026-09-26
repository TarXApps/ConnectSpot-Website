import { clientLogos } from "../data/clientLogos";

export default function ClientLogos() {
  const doubled = [...clientLogos, ...clientLogos];
  return (
    <section className="py-16 bg-ink-soft border-y border-ink-line overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-8 text-center">
        <p className="font-display text-amber text-sm tracking-[0.2em] uppercase">
          Trusted by brands across the region
        </p>
      </div>
      <div className="overflow-hidden">
        <div className="flex items-center gap-14 w-max animate-marquee">
          {doubled.map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt=""
              className="h-10 sm:h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
