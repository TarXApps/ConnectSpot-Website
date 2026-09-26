import { motion } from "framer-motion";
import { CheckCircle2, MapPin, Phone, Mail } from "lucide-react";
import ContactSection from "../components/ContactSection";

const gains = [
  "Direct access to a team that handles strategy through onsite execution",
  "A partner who understands the sectors and markets you operate in",
  "Sponsorship and partnership packages structured to get signed",
  "Onsite delivery that leaves nothing to chance",
  "A relationship that grows with your business, edition after edition",
];

export default function ContactUs() {
  return (
    <>
      <section className="pt-40 pb-16 bg-ink text-center">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-amber text-sm tracking-[0.2em] uppercase mb-6"
          >
            Contact Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
          >
            Let's talk about your next event
          </motion.h1>
        </div>
      </section>

      <section className="pb-24 bg-ink">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl font-semibold mb-6">You Gain</h2>
            <ul className="space-y-4 mb-10">
              {gains.map((g) => (
                <li key={g} className="flex items-start gap-3 text-bone/70">
                  <CheckCircle2 className="w-5 h-5 text-amber shrink-0 mt-0.5" />
                  {g}
                </li>
              ))}
            </ul>

            <h3 className="font-display text-lg font-semibold mb-4">Direct Details</h3>
            <ul className="space-y-3 text-bone/70">
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-amber shrink-0" />
                Riyadh, Saudi Arabia
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber shrink-0" />
                <a href="tel:+966564319472" className="hover:text-amber transition-colors">
                  +966 56 431 9472
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber shrink-0" />
                <a
                  href="mailto:info@connectspotexhibitions.com"
                  className="hover:text-amber transition-colors"
                >
                  info@connectspotexhibitions.com
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <ContactSection />
          </div>
        </div>
      </section>

      <section className="py-20 bg-ink-soft border-t border-ink-line text-center">
        <h2 className="font-display text-2xl sm:text-3xl font-bold">
          We look forward to building your next event with you.
        </h2>
      </section>
    </>
  );
}
