"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/lib/data";

export function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 sm:mb-20"
        >
          <span className="text-xs font-medium tracking-[0.25em] uppercase text-gray-400 mb-4 block">
            Proses
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-[1.1] max-w-2xl">
            İdeyadan buraxılışa —{" "}
            <span className="text-gray-400 italic font-normal">necə işləyirik</span>
          </h2>
        </motion.div>

        {/* Steps — horizontal on desktop, vertical on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: i * 0.1,
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative"
            >
              {/* Step number */}
              <span className="text-6xl sm:text-7xl font-bold leading-none select-none bg-gradient-to-br from-blue-100 to-cyan-100 bg-clip-text text-transparent">
                {step.step}
              </span>
              <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
