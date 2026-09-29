import { motion } from "framer-motion";
import ContactSection from "../components/ContactSection";
import PageHeader from "../components/PageHeader";
import Seo from "../components/Seo";

const gains = [
  "Access to audiences built for your sector, not rented for the day",
  "A team that stays involved from pitch to post-show report",
  "Content and programming that positions you as a leader, not just a logo on a wall",
  "Vendor and logistics management that already knows this region",
  "Outcomes you can actually report back to your board",
];

export default function ContactUs() {
  return (
    <>
      <Seo
        title="Contact Us"
        description="Get in touch with Connect Spot Exhibitions to discuss exhibiting, sponsoring, partnering or speaking at our events."
        path="/contact"
      />
      <PageHeader
        eyebrow="Contact Us"
        heading="Let's build your next event"
        body="Whether you're exhibiting, sponsoring, or pitching us an idea, tell us what you're trying to do and we'll tell you if we're the right fit."
      />

      <section className="bg-ink pt-6 pb-16 lg:pt-8 lg:pb-20">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-googlesans font-semibold text-2xl sm:text-3xl tracking-tightest mb-8"
          >
            You Gain
          </motion.h2>
          <ul className="space-y-4">
            {gains.map((g, i) => (
              <motion.li
                key={g}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-3 text-bone/70"
              >
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-amber shrink-0" />
                {g}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <ContactSection />

      <section className="bg-ink-soft border-t border-ink-line py-20 lg:py-28 text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          className="font-googlesans font-semibold text-3xl sm:text-4xl tracking-tightest max-w-2xl mx-auto text-balance mb-10"
        >
          Good events start with one honest conversation. Let's have it.
        </motion.h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 text-bone/70">
          <span>Riyadh, Saudi Arabia</span>
          <a href="tel:+966564319472" className="hover:text-amber transition-colors">
            +966 56 431 9472
          </a>
          <a
            href="mailto:info@connectspotexhibitions.com"
            className="hover:text-amber transition-colors"
          >
            info@connectspotexhibitions.com
          </a>
        </div>
      </section>
    </>
  );
}
