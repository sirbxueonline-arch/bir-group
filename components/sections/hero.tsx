"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden bg-white">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-blue-50/40 blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-gray-50 blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Overline */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "100%" }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="h-px bg-gradient-to-r from-blue-400 via-cyan-400 to-transparent mb-12 sm:mb-16 max-w-md"
        />

        {/* Main headline */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(3rem,8vw,7.5rem)] font-bold leading-[0.92] tracking-[-0.04em] text-gray-900"
          >
            Brendinizi
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(3rem,8vw,7.5rem)] font-bold leading-[0.92] tracking-[-0.04em] text-gray-900"
          >
            rəqəmsal dünyada
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(3rem,8vw,7.5rem)] leading-[0.92] tracking-[-0.04em] bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent italic font-light"
          >
            fərqləndiririk.
          </motion.h1>
        </div>

        {/* Bottom content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 sm:mt-20 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8"
        >
          <p className="text-base sm:text-lg text-gray-400 max-w-md leading-relaxed">
            Azərbaycanda və dünyada böyüyən bizneslər üçün
            yüksək performanslı veb-saytlar və rəqəmsal həllər yaradırıq.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="#work"
              className="group flex items-center gap-3 text-sm font-medium text-gray-900"
            >
              İşlərimizə baxın
              <motion.span
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 group-hover:border-blue-300 group-hover:bg-blue-50 transition-all"
              >
                <ArrowDown size={15} />
              </motion.span>
            </a>
            <a
              href="#contact"
              className="px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
              Layihəyə başla
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-0 left-0 right-0 h-px bg-gray-100 origin-left"
      />
    </section>
  );
}
