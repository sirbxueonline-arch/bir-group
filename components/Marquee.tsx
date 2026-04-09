"use client";

import { motion } from "framer-motion";

const items = [
  "Veb Dizayn",
  "Mobil Tətbiq",
  "UI/UX",
  "E-commerce",
  "Brend Kimliyi",
  "SEO",
];

const marqueeText = items.map((t) => t + " · ").join("");
// Repeat enough times to fill any screen width
const fullText = marqueeText + marqueeText + marqueeText;

export default function Marquee() {
  return (
    <div className="relative z-10 overflow-hidden py-4">
      <div className="-rotate-[1.5deg] -mx-12 bg-ink py-5">
        <div className="flex whitespace-nowrap overflow-hidden">
          <motion.div
            className="flex shrink-0 gap-0"
            animate={{ x: [0, -2400] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <span className="shrink-0 font-display text-2xl font-extrabold uppercase tracking-wider text-cream md:text-4xl">
              {fullText}
            </span>
            <span className="shrink-0 font-display text-2xl font-extrabold uppercase tracking-wider text-cream md:text-4xl">
              {fullText}
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
