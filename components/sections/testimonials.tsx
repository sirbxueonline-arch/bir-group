"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/data";
import { Star } from "lucide-react";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-24 sm:py-32 bg-gray-50 border-y border-gray-100"
    >
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
            Rəylər
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-[1.1]">
            Müştərilərimizin sözləri
          </h2>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: i * 0.1,
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100"
            >
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star
                    key={j}
                    size={14}
                    className="text-amber-400 fill-amber-400"
                  />
                ))}
              </div>

              <p className="text-[15px] text-gray-600 leading-relaxed mb-8">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-6 border-t border-gray-100">
                <div className="w-9 h-9 rounded-full bg-gray-900 flex items-center justify-center">
                  <span className="text-xs font-semibold text-white">
                    {testimonial.name[0]}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
