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
        <div className="flex items-center gap-4 w-max animate-marquee">
          {doubled.map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center bg-bone rounded-lg h-14 w-28 sm:h-16 sm:w-32 shrink-0 px-4 py-3"
            >
              <img
                src={logo}
                alt=""
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
