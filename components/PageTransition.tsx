"use client";

import { motion } from "framer-motion";

const pageVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  );
}

export function PageHeader({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="bg-ink px-6 pt-32 pb-20 lg:px-8 lg:pt-40 lg:pb-24">
      <div className="mx-auto max-w-7xl">
        <motion.p
          className="font-mono text-sm uppercase tracking-widest text-ember"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {label}
        </motion.p>
        <motion.h1
          className="mt-4 font-display text-5xl font-black text-cream md:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            className="mt-6 max-w-xl font-body text-lg font-light leading-relaxed text-cream/50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
