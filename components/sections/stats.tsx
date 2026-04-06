"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/data";
import { useCountUp } from "@/lib/hooks";

function StatItem({
  value,
  suffix,
  label,
  index,
}: {
  value: number;
  suffix: string;
  label: string;
  index: number;
}) {
  const { count, ref } = useCountUp(value, 2000);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.1,
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="text-center sm:text-left"
    >
      <div className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight tabular-nums">
        {count}
        {suffix}
      </div>
      <p className="mt-2 text-sm text-gray-400">{label}</p>
    </motion.div>
  );
}

export function Stats() {
  return (
    <section className="py-20 sm:py-28 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} {...stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
