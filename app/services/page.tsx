"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageTransition, { PageHeader } from "@/components/PageTransition";

const services = [
  {
    num: "01",
    title: "Veb Dizayn & İnkişaf",
    desc: "Müasir, sürətli və mobil-uyğun veb saytlar hazırlayırıq. Next.js, React və ən son texnologiyalarla performans və estetika bir arada.",
    features: ["Responsive dizayn", "CMS inteqrasiyası", "SEO optimallaşdırma", "Sürət optimallaşdırma"],
    color: "from-ember/10 to-transparent",
  },
  {
    num: "02",
    title: "Mobil Tətbiq",
    desc: "iOS və Android üçün doğma və cross-platform tətbiqlər. React Native və Flutter ilə performans və istifadəçi təcrübəsi ön plandadır.",
    features: ["iOS & Android", "Cross-platform", "Push bildirişlər", "Offline dəstək"],
    color: "from-violet-500/10 to-transparent",
  },
  {
    num: "03",
    title: "UI/UX Dizayn",
    desc: "İstifadəçi araşdırması, wireframe və prototipləmə ilə mükəmməl rəqəmsal təcrübə yaradırıq. Figma ilə piksel-mükəmməl dizaynlar.",
    features: ["İstifadəçi araşdırması", "Wireframing", "Prototipləmə", "Dizayn sistemi"],
    color: "from-cyan-500/10 to-transparent",
  },
  {
    num: "04",
    title: "E-commerce",
    desc: "Onlayn mağaza həlləri — ödəniş inteqrasiyası, məhsul idarəetməsi, anbar sistemi və müştəri paneli.",
    features: ["Ödəniş inteqrasiyası", "Məhsul idarəetməsi", "Anbar sistemi", "Analitika"],
    color: "from-emerald-500/10 to-transparent",
  },
  {
    num: "05",
    title: "Brend Kimliyi",
    desc: "Logo, rəng paleti, tipografiya — brendinizi fərqləndirən vizual kimlik yaradırıq. Rəqəmsal və çap materialları.",
    features: ["Logo dizayn", "Brend kitabçası", "Sosial media kit", "Çap materialları"],
    color: "from-amber-500/10 to-transparent",
  },
  {
    num: "06",
    title: "SEO & Rəqəmsal Marketinq",
    desc: "Axtarış motorlarında birinci sırada olun. Texniki SEO, kontent strategiyası və performans analizi.",
    features: ["Texniki SEO", "Kontent strategiyası", "Google Ads", "Analitika"],
    color: "from-rose-500/10 to-transparent",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ServicesPage() {
  return (
    <PageTransition>
      <PageHeader
        label="Xidmətlər"
        title="Nə edirik?"
        description="Rəqəmsal dünyada uğur qazanmağınız üçün lazım olan hər şey — dizayndan inkişafa, brendinqdən marketinqə."
      />

      <section className="bg-cream px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {services.map((s) => (
              <motion.div
                key={s.num}
                variants={cardVariants}
                className={`group relative overflow-hidden rounded-2xl border border-sand bg-gradient-to-r ${s.color} p-8 transition-all hover:border-ember/30 hover:shadow-lg md:p-10`}
              >
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-10">
                  <span className="font-display text-6xl font-black text-ember/15 transition-colors group-hover:text-ember/30 md:text-7xl">
                    {s.num}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-display text-2xl font-extrabold text-ink md:text-3xl">
                      {s.title}
                    </h3>
                    <p className="mt-3 max-w-2xl font-body text-base font-light leading-relaxed text-stone">
                      {s.desc}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {s.features.map((f) => (
                        <span
                          key={f}
                          className="rounded-full border border-sand bg-cream px-3 py-1 font-mono text-xs text-stone"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
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
              Layihəniz üçün hansı xidmət lazımdır?
            </p>
            <a
              href="https://wa.me/994502411442"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-ember px-8 py-4 font-body text-base font-semibold text-white transition-all hover:bg-ember-light"
            >
              Bizimlə Danışın
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
