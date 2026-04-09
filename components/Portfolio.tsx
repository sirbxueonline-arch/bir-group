"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    title: "Prime Rent A Car",
    category: "Avtomobil İcarəsi",
    desc: "Real vaxt rejimində mövcudluq, rahat rezervasiya prosesi ilə premium avtomobil icarə platforması.",
    url: "primerentacar.az",
    color: "text-amber-500",
    borderColor: "border-amber-500/20",
    bgHover: "hover:border-amber-500/40",
  },
  {
    title: "Art & Smile",
    category: "Səhiyyə & Estetika",
    desc: "İsti estetika ilə klinik peşəkarlığı birləşdirən müasir klinika veb-saytı.",
    url: "artandsmile.az",
    color: "text-emerald-500",
    borderColor: "border-emerald-500/20",
    bgHover: "hover:border-emerald-500/40",
  },
  {
    title: "Kasper Lift",
    category: "Sənaye & Mühəndislik",
    desc: "Aparıcı lift şirkəti üçün korporativ veb-mövcudluq və xidmət sorğu sistemləri.",
    url: "kasperlift.az",
    color: "text-blue-500",
    borderColor: "border-blue-500/20",
    bgHover: "hover:border-blue-500/40",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-cream px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="font-mono text-sm uppercase tracking-widest text-ember">
              Portfolio
            </p>
            <h2 className="mt-3 font-display text-4xl font-black text-ink md:text-6xl">
              Son işlərimiz
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="group flex items-center gap-2 font-body text-sm font-semibold text-stone transition-colors hover:text-ink"
          >
            Hamısına bax
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>

        {/* 3 cards side by side */}
        <motion.div
          className="grid gap-6 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((p) => (
            <motion.div
              key={p.title}
              variants={cardVariants}
              className={`group rounded-2xl border bg-white p-7 transition-all duration-300 ${p.borderColor} ${p.bgHover} hover:shadow-lg`}
            >
              {/* Top row */}
              <div className="flex items-start justify-between">
                <span
                  className={`inline-block rounded-full border px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-wider ${p.borderColor} ${p.color}`}
                >
                  {p.category}
                </span>
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-sand transition-colors group-hover:border-ink">
                  <svg
                    className="h-3.5 w-3.5 text-stone transition-colors group-hover:text-ink"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>
              </div>

              {/* Title */}
              <h3 className="mt-5 font-display text-2xl font-black text-ink">
                {p.title}
              </h3>

              {/* Description */}
              <p className="mt-2 font-body text-sm font-light leading-relaxed text-stone">
                {p.desc}
              </p>

              {/* URL */}
              <div className="mt-6 border-t border-sand pt-4">
                <span className="font-mono text-xs text-stone/50">
                  {p.url}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
