"use client";

import { motion } from "framer-motion";

const clients = [
  "Prime Rent A Car",
  "Art & Smile",
  "Kasper Lift",
  "Archilink",
  "Tryzirva",
];

export function Marquee() {
  const doubled = [...clients, ...clients, ...clients, ...clients];

  return (
    <section className="py-10 sm:py-14 overflow-hidden bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-gray-400">
          Əməkdaşlıq etdiyimiz brendlər
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex whitespace-nowrap">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex items-center"
          >
            {doubled.map((name, i) => (
              <span
                key={i}
                className="mx-8 sm:mx-12 text-lg sm:text-xl font-semibold text-gray-300 select-none"
              >
                {name}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
