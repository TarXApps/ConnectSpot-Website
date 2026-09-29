import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import Seo from "../components/Seo";
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

const services = [
  {
    icon: CalendarRange,
    title: "Event Planning & Design",
    tagline: "Start with the right idea.",
    body: "We shape the concept, format and experience around what the event needs to achieve.",
    tags: ["Strategy", "Concept", "Design", "Planning", "Venue", "Floorplan"],
  },
  {
    icon: ClipboardList,
    title: "Event Management",
    tagline: "Then we make it happen.",
    body: "The people, timelines and details that turn the plan into a live event.",
    tags: ["Project Management", "Exhibitors", "Delegates", "Speakers", "Guests", "On-Site Delivery"],
  },
  {
    icon: Megaphone,
    title: "Marketing & Communications",
    tagline: "Bring the audience with you.",
    body: "We create the campaigns and content that give the event reach and give people a reason to attend.",
    tags: ["Strategy", "Digital", "Social", "Content", "PR", "Email", "Audience Promotion"],
  },
  {
    icon: Sparkles,
    title: "Brand Activations",
    tagline: "Make the brand part of the experience.",
    body: "From launches to live experiences, we create moments built around the audience.",
    tags: ["Activations", "Experiences", "Launches", "Engagement"],
  },
  {
    icon: LayoutGrid,
    title: "Booth Experiences",
    tagline: "Your space should do more than look good.",
    body: "We create exhibition spaces that give brands a place to meet, engage and do business.",
    tags: ["Concept", "Design", "Production", "Build", "Installation"],
  },
  {
    icon: Cpu,
    title: "Technology Integration",
    tagline: "Bring the experience forward.",
    body: "We integrate technology where it adds value to the experience.",
    tags: ["Digital Experiences", "Interactive Solutions", "Event Technology"],
  },
  {
    icon: Camera,
    title: "Photography & Videography",
    tagline: "The event ends. The story doesn't have to.",
    body: "We capture the moments and content that keep the event moving after the doors close.",
    tags: ["Photography", "Video", "Social Content", "Event Coverage"],
  },
  {
    icon: Building2,
    title: "Corporate Production",
    tagline: "From the boardroom to the big stage.",
    body: "We produce corporate events, launches, conferences and live experiences from concept through delivery.",
    tags: ["Corporate Events", "Launches", "Conferences", "Awards", "Live Production"],
  },
];

export default function OurServices() {
  return (
    <>
      <Seo
        title="Our Services"
        description="From event planning and management to marketing, brand activations and production — see the full range of services Connect Spot delivers."
        path="/our-services"
      />
      <PageHeader
        eyebrow="Our Services"
        heading="We take events from idea to execution."
        body="Some clients need one part of the process. Others need the whole thing. We do both."
      />

      <section className="bg-ink pt-6 pb-16 lg:pt-8 lg:pb-20">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="rounded-2xl border border-ink-line bg-ink-soft p-6"
              >
                <div className="w-11 h-11 rounded-full bg-ink border border-ink-line flex items-center justify-center mb-5">
                  <s.icon className="w-5 h-5 text-amber" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-lg font-semibold text-bone mb-1">{s.title}</h3>
                <p className="text-amber text-sm font-mono uppercase tracking-wideish mb-3">
                  {s.tagline}
                </p>
                <p className="text-bone/60 text-sm leading-relaxed mb-4">{s.body}</p>
                <p className="text-xs text-bone/40 font-mono">{s.tags.join(" · ")}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink-soft border-t border-ink-line py-20 lg:py-28 text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          className="font-googlesans font-semibold text-3xl sm:text-4xl tracking-tightest max-w-xl mx-auto text-balance mb-3"
        >
          What are you building?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-bone/60 text-lg mb-10"
        >
          Let's bring it together.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wideish bg-amber text-ink px-10 py-5 rounded-full hover:bg-bone transition-colors"
          >
            Start a Conversation
          </Link>
        </motion.div>
      </section>
    </>
  );
}
