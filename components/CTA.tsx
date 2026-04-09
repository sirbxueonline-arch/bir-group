"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-charcoal px-6 py-24 lg:px-8 lg:py-32"
    >
      {/* Animated wave background */}
      <div className="pointer-events-none absolute inset-0">
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 400"
          fill="none"
          preserveAspectRatio="none"
          style={{ height: "100%" }}
        >
          {/* Wave layers with staggered animations */}
          <motion.path
            d="M0,200 C240,100 480,300 720,200 C960,100 1200,300 1440,200 L1440,400 L0,400Z"
            fill="rgba(232,87,42,0.04)"
            animate={{
              d: [
                "M0,200 C240,100 480,300 720,200 C960,100 1200,300 1440,200 L1440,400 L0,400Z",
                "M0,250 C240,150 480,350 720,250 C960,150 1200,350 1440,250 L1440,400 L0,400Z",
                "M0,200 C240,100 480,300 720,200 C960,100 1200,300 1440,200 L1440,400 L0,400Z",
              ],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M0,260 C360,180 600,340 900,260 C1140,180 1320,320 1440,280 L1440,400 L0,400Z"
            fill="rgba(232,87,42,0.06)"
            animate={{
              d: [
                "M0,260 C360,180 600,340 900,260 C1140,180 1320,320 1440,280 L1440,400 L0,400Z",
                "M0,220 C360,300 600,180 900,280 C1140,340 1320,200 1440,260 L1440,400 L0,400Z",
                "M0,260 C360,180 600,340 900,260 C1140,180 1320,320 1440,280 L1440,400 L0,400Z",
              ],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
          <motion.path
            d="M0,300 C200,260 400,340 720,300 C1040,260 1240,340 1440,320 L1440,400 L0,400Z"
            fill="rgba(232,87,42,0.03)"
            animate={{
              d: [
                "M0,300 C200,260 400,340 720,300 C1040,260 1240,340 1440,320 L1440,400 L0,400Z",
                "M0,320 C200,360 400,280 720,330 C1040,370 1240,290 1440,300 L1440,400 L0,400Z",
                "M0,300 C200,260 400,340 720,300 C1040,260 1240,340 1440,320 L1440,400 L0,400Z",
              ],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </svg>

        {/* Top wave */}
        <svg
          className="absolute top-0 left-0 w-full rotate-180"
          viewBox="0 0 1440 400"
          fill="none"
          preserveAspectRatio="none"
          style={{ height: "100%" }}
        >
          <motion.path
            d="M0,280 C300,200 600,360 900,280 C1100,220 1300,340 1440,300 L1440,400 L0,400Z"
            fill="rgba(232,87,42,0.03)"
            animate={{
              d: [
                "M0,280 C300,200 600,360 900,280 C1100,220 1300,340 1440,300 L1440,400 L0,400Z",
                "M0,320 C300,380 600,240 900,320 C1100,360 1300,240 1440,280 L1440,400 L0,400Z",
                "M0,280 C300,200 600,360 900,280 C1100,220 1300,340 1440,300 L1440,400 L0,400Z",
              ],
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          />
          <motion.path
            d="M0,320 C240,280 480,360 720,320 C960,280 1200,360 1440,340 L1440,400 L0,400Z"
            fill="rgba(232,87,42,0.02)"
            animate={{
              d: [
                "M0,320 C240,280 480,360 720,320 C960,280 1200,360 1440,340 L1440,400 L0,400Z",
                "M0,340 C240,370 480,300 720,350 C960,370 1200,300 1440,320 L1440,400 L0,400Z",
                "M0,320 C240,280 480,360 720,320 C960,280 1200,360 1440,340 L1440,400 L0,400Z",
              ],
            }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-sm uppercase tracking-widest text-ember">
            Hazırsınız?
          </p>

          <h2 className="mt-6 font-display text-4xl font-black leading-[0.95] text-cream md:text-7xl">
            Layihənizi{" "}
            <span className="text-outline">
              reallaşdıraq.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl font-body text-lg font-light text-cream/60">
            Bizimlə əlaqə saxlayın və rəqəmsal varlığınızı növbəti səviyyəyə
            daşıyaq.
          </p>

          <motion.a
            href="https://wa.me/994502411442"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-ember px-10 py-5 font-body text-base font-semibold text-white transition-all hover:bg-ember-light"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Əlaqə Saxla</span>
            <svg
              className="h-4 w-4"
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
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
