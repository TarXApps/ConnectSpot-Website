import { motion } from "framer-motion";

export default function PageHeader({ eyebrow, heading, body }) {
  return (
    <section className="relative bg-ink pt-40 pb-20 lg:pt-48 lg:pb-24 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-10" />
      <div className="relative max-w-[1000px] mx-auto px-6 lg:px-10">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow text-amber mb-6"
          >
            {eyebrow}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-googlesans font-semibold text-3xl sm:text-4xl lg:text-5xl leading-[1.1] tracking-tightest text-bone max-w-3xl"
        >
          {heading}
        </motion.h1>
        {body && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-bone/70 text-lg font-light max-w-2xl"
          >
            {body}
          </motion.p>
        )}
      </div>
    </section>
  );
}
