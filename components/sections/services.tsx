"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/data";

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16 sm:mb-20"
        >
          <div>
            <span className="text-xs font-medium tracking-[0.25em] uppercase text-gray-400 mb-4 block">
              Xidmətlər
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-[1.1]">
              Nə edirik
            </h2>
          </div>
          <p className="text-base text-gray-500 max-w-sm leading-relaxed">
            Konseptdən buraxılışa qədər — hər addımda biznesinizin yanındayıq.
          </p>
        </motion.div>

        {/* Services list — editorial style */}
        <div className="border-t border-gray-200">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-8 py-8 sm:py-10 border-b border-gray-100 hover:border-gray-300 transition-colors duration-300 cursor-default"
            >
              <div className="sm:col-span-1 flex items-start">
                <span className="text-xs font-mono text-gray-300 mt-1">
                  0{i + 1}
                </span>
              </div>

              <div className="sm:col-span-3 flex items-center gap-3">
                <service.icon
                  size={20}
                  className="text-gray-400 group-hover:text-gray-900 transition-colors duration-300 flex-shrink-0"
                />
                <h3 className="text-lg font-semibold text-gray-900">
                  {service.title}
                </h3>
              </div>

              <div className="sm:col-span-8">
                <p className="text-sm text-gray-500 leading-relaxed max-w-lg">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
