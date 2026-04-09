"use client";

import { motion } from "framer-motion";

const wordVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 + i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const floatingShapes = [
  { size: 80, top: "15%", left: "8%", delay: 0, duration: 6 },
  { size: 50, top: "70%", left: "12%", delay: 1, duration: 7 },
  { size: 60, top: "25%", right: "10%", delay: 0.5, duration: 8 },
  { size: 40, top: "65%", right: "15%", delay: 1.5, duration: 5 },
  { size: 30, top: "45%", left: "5%", delay: 2, duration: 9 },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-cream px-6 pt-20 lg:px-8">
      {/* Floating shapes */}
      {floatingShapes.map((shape, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute rounded-full border border-ember/10"
          style={{
            width: shape.size,
            height: shape.size,
            top: shape.top,
            left: shape.left,
            right: (shape as { right?: string }).right,
          }}
          animate={{
            y: [0, -20, 0, 20, 0],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            delay: shape.delay,
            ease: "linear",
          }}
        />
      ))}

      <div className="mx-auto w-full max-w-7xl">
        <div className="max-w-5xl">
          {/* Main heading */}
          <h1 className="font-display font-black leading-[0.9] tracking-tight">
            <span className="block overflow-hidden">
              <motion.span
                className="block text-[clamp(3.5rem,12vw,10rem)] text-ink"
                custom={0}
                variants={wordVariants}
                initial="hidden"
                animate="visible"
              >
                Bir klik.
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                className="text-outline-lg block text-[clamp(3.5rem,12vw,10rem)]"
                custom={1}
                variants={wordVariants}
                initial="hidden"
                animate="visible"
              >
                Sonsuz imkan.
              </motion.span>
            </span>
          </h1>

          {/* Subtext */}
          <motion.p
            className="mt-8 max-w-lg font-body text-lg font-light leading-relaxed text-stone md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Bakıdan dünyaya — veb dizayn, mobil tətbiq və rəqəmsal həllər üzrə
            ixtisaslaşmış agentlik.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <a
              href="https://wa.me/994502411442"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-ember px-8 py-4 font-body text-base font-semibold text-white transition-all hover:bg-ember-light"
            >
              <span>Layihəyə Başla</span>
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-full border-2 border-ink px-8 py-4 font-body text-base font-semibold text-ink transition-all hover:bg-ink hover:text-cream"
            >
              İşlərimizə Bax
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
