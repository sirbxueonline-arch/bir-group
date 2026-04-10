"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageTransition, { PageHeader } from "@/components/PageTransition";

const projects = [
  {
    title: "Prime Rent A Car",
    category: "Avtomobil İcarəsi",
    desc: "Real vaxt rejimində mövcudluq, rahat rezervasiya prosesi və Azərbaycan üzrə səyahətçilər üçün nəzərdə tutulmuş müasir interfeys ilə premium avtomobil icarə platforması.",
    url: "primerentacar.az",
    color: "text-amber-500",
    borderColor: "border-amber-500/20",
    bgHover: "hover:border-amber-500/40",
  },
  {
    title: "Art & Smile",
    category: "Səhiyyə & Estetika",
    desc: "İsti estetika ilə klinik peşəkarlığı birləşdirən müasir klinika veb-saytı — onlayn qeydiyyat, müalicə nümayişləri və xəstəyönümlü dizayn.",
    url: "artandsmile.az",
    color: "text-emerald-500",
    borderColor: "border-emerald-500/20",
    bgHover: "hover:border-emerald-500/40",
  },
  {
    title: "Kasper Lift",
    category: "Sənaye & Mühəndislik",
    desc: "Aparıcı lift şirkəti üçün korporativ veb-mövcudluq — məhsul kataloqları, texniki spesifikasiyalar və etibarlılıq üçün qurulmuş xidmət sorğu sistemləri.",
    url: "kasperlift.az",
    color: "text-blue-500",
    borderColor: "border-blue-500/20",
    bgHover: "hover:border-blue-500/40",
  },
  {
    title: "Archilink",
    category: "Memarlıq Platforması",
    desc: "Memarları, dizaynerləri və müştəriləri birləşdirən vizual cəhətdən zəngin platforma — layihə qalereyaları, 3D nümayişlər və əməkdaşlıq alətləri.",
    url: "archilink.az",
    color: "text-violet-500",
    borderColor: "border-violet-500/20",
    bgHover: "hover:border-violet-500/40",
  },
  {
    title: "Tryzirva",
    category: "SaaS Platforma",
    desc: "İntuitiv idarə panelləri, qabaqcıl analitika və qlobal miqyas üçün qurulmuş konversiyaya optimallaşdırılmış onboarding axını olan müasir SaaS məhsulu.",
    url: "tryzirva.com",
    color: "text-rose-500",
    borderColor: "border-rose-500/20",
    bgHover: "hover:border-rose-500/40",
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

export default function PortfolioPage() {
  return (
    <PageTransition>
      <PageHeader
        label="Portfolio"
        title="İşlərimiz"
        description="Hər layihə fərdi yanaşma ilə hazırlanır. Bakıdan dünyaya açılan rəqəmsal həllər."
      />

      <section className="bg-cream px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {projects.map((p) => (
              <motion.a
                key={p.title}
                href={`https://${p.url}`}
                target="_blank"
                rel="noopener noreferrer"
                variants={cardVariants}
                className={`group block rounded-2xl border bg-white p-7 transition-all duration-300 ${p.borderColor} ${p.bgHover} hover:shadow-lg hover:-translate-y-1`}
              >
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

                <h3 className="mt-5 font-display text-2xl font-black text-ink">
                  {p.title}
                </h3>
                <p className="mt-2 font-body text-sm font-light leading-relaxed text-stone">
                  {p.desc}
                </p>
                <div className="mt-6 border-t border-sand pt-4">
                  <span className="font-mono text-xs text-stone/50">
                    {p.url}
                  </span>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-body text-lg font-light text-stone">
              Növbəti layihəniz burada ola bilər.
            </p>
            <a
              href="https://wa.me/994502411442"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-ember px-8 py-4 font-body text-base font-semibold text-white transition-all hover:bg-ember-light"
            >
              Layihəyə Başla
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
