import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { LinkedinIcon, InstagramIcon, FacebookIcon, TwitterIcon } from "./icons/SocialIcons";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-ink">
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        autoPlay
        muted
        loop
        playsInline
        poster="/hero-poster.jpg"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/70 to-ink" />

      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 lg:px-10 pt-32">
        <div className="max-w-7xl mx-auto w-full">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-poppins font-black uppercase text-[11vw] sm:text-[6.5vw] lg:text-[5vw] leading-[0.98] sm:leading-[0.92] whitespace-normal sm:whitespace-nowrap text-bone"
          >
            A decade of<br />
            building events<br />
            that move markets.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="mt-8 max-w-xl text-bone/75 text-base sm:text-lg leading-relaxed"
          >
            We create exhibitions, conferences and experiences that bring industries
            together — connecting businesses, people and ideas in ways that create
            opportunities beyond the event itself.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="mt-10"
          >
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-amber text-ink font-display font-semibold tracking-wide rounded-full hover:bg-bone transition-colors"
            >
              Talk to Us
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-between px-6 lg:px-10 pb-10 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-5">
          <a href="#" aria-label="LinkedIn" className="text-bone/70 hover:text-amber transition-colors">
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a href="#" aria-label="Instagram" className="text-bone/70 hover:text-amber transition-colors">
            <InstagramIcon className="w-5 h-5" />
          </a>
          <a href="#" aria-label="Facebook" className="text-bone/70 hover:text-amber transition-colors">
            <FacebookIcon className="w-5 h-5" />
          </a>
          <a href="#" aria-label="X" className="text-bone/70 hover:text-amber transition-colors">
            <TwitterIcon className="w-5 h-5" />
          </a>
        </div>
        <ChevronDown className="w-6 h-6 text-bone/50 animate-bounce hidden sm:block" />
      </div>
    </section>
  );
}
