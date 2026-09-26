import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  CalendarRange,
  ClipboardList,
  Megaphone,
  Sparkles,
  LayoutGrid,
  Cpu,
  Camera,
  Building2,
} from "lucide-react";
import ClientLogos from "../components/ClientLogos";

const services = [
  {
    icon: CalendarRange,
    title: "Event Planning & Design",
    body: "From concept to floor plan, we design events that are built around clear commercial outcomes.",
  },
  {
    icon: ClipboardList,
    title: "Event Management",
    body: "End-to-end delivery — venue, logistics, vendors and onsite execution — handled by one accountable team.",
  },
  {
    icon: Megaphone,
    title: "Marketing & Communications",
    body: "Positioning, content and PR that build audience and authority long before doors open.",
  },
  {
    icon: Sparkles,
    title: "Brand Activations",
    body: "Immersive brand moments that turn exhibition floors into memorable experiences.",
  },
  {
    icon: LayoutGrid,
    title: "Booth Experiences",
    body: "Booth design and build that gets your brand noticed and gets visitors talking.",
  },
  {
    icon: Cpu,
    title: "Technology Integration",
    body: "Registration, badge scanning, lead capture and event apps that keep everything connected.",
  },
  {
    icon: Camera,
    title: "Photography & Videography",
    body: "Professional coverage that captures your event's best moments for marketing long after it ends.",
  },
  {
    icon: Building2,
    title: "Corporate Production",
    body: "Conferences, summits and internal events produced with the same rigor as our flagship exhibitions.",
  },
];

export default function OurServices() {
  return (
    <>
      <section className="pt-40 pb-20 bg-ink text-center">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-amber text-sm tracking-[0.2em] uppercase mb-6"
          >
            Our Services
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
          >
            Full-service event delivery, end to end
          </motion.h1>
        </div>
      </section>

      <section className="pb-24 bg-ink">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.1 }}
              className="p-6 rounded-2xl bg-ink-soft border border-ink-line hover:border-amber/50 transition-colors"
            >
              <s.icon className="w-8 h-8 text-amber mb-4" strokeWidth={1.5} />
              <h3 className="font-display text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-bone/65 leading-relaxed">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <ClientLogos />

      <section className="py-24 bg-ink text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-8">
          Let's plan your next event
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
