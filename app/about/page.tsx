"use client";

import { motion } from "framer-motion";
import PageTransition, { PageHeader } from "@/components/PageTransition";

const values = [
  {
    num: "01",
    title: "Keyfiyyət",
    desc: "Hər piksel, hər sətir kod mükəmməl olmalıdır. Kompromis qəbul etmirik.",
  },
  {
    num: "02",
    title: "İnnovasiya",
    desc: "Ən son texnologiyaları istifadə edir, həmişə irəliyə baxırıq.",
  },
  {
    num: "03",
    title: "Şəffaflıq",
    desc: "Müştərilərimizlə açıq ünsiyyət qururuq. Hər addım sizinlə razılaşdırılır.",
  },
  {
    num: "04",
    title: "Nəticə",
    desc: "Gözəl dizayn kifayət deyil — iş nəticələri gətirməlidir.",
  },
];

const stats = [
  { value: "50+", label: "Tamamlanmış layihə" },
  { value: "30+", label: "Məmnun müştəri" },
  { value: "3+", label: "İllik təcrübə" },
  { value: "99%", label: "Müştəri məmnuniyyəti" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function AboutPage() {
  return (
    <PageTransition>
      <PageHeader
        label="Haqqımızda"
        title="Biz kimik?"
        description="Bakıdan dünyaya — rəqəmsal məhsullar yaradan, brendlər quran yaradıcı komanda."
      />

      {/* Story */}
      <section className="bg-cream px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="font-display text-4xl font-black text-ink md:text-5xl">
                Rəqəmsal dünyada{" "}
                <span className="text-outline">fərq yaradırıq.</span>
              </h2>
              <p className="mt-6 font-body text-base font-light leading-relaxed text-stone">
                birclick.az 2022-ci ildə Bakıda qurulub. Missiyamız sadədir —
                Azərbaycan bizneslərini müasir, funksional və estetik rəqəmsal
                həllərlə təmin etmək. Hər layihəyə fərdi yanaşırıq, çünki hər
                brendin öz hekayəsi var.
              </p>
              <p className="mt-4 font-body text-base font-light leading-relaxed text-stone">
                Dizayn, inkişaf və strategiya — hər şeyi bir dam altında
                həyata keçiririk. Kiçik startaplardan böyük korporativ
                müştərilərə qədər hər kəsə xidmət göstəririk.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="rounded-2xl bg-sand p-6"
                >
                  <span className="font-display text-4xl font-black text-ember">
                    {stat.value}
                  </span>
                  <p className="mt-2 font-body text-sm font-light text-stone">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-sand px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-sm uppercase tracking-widest text-ember">
              Dəyərlərimiz
            </p>
            <h2 className="mt-3 font-display text-4xl font-black text-ink md:text-5xl">
              Nəyə inanırıq?
            </h2>
          </motion.div>

          <motion.div
            className="grid gap-8 md:grid-cols-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((v) => (
              <motion.div
                key={v.num}
                variants={itemVariants}
                className="group flex gap-6 rounded-2xl bg-cream p-8 transition-all hover:shadow-lg"
              >
                <span className="font-display text-5xl font-black text-ember/20 transition-colors group-hover:text-ember/50">
                  {v.num}
                </span>
                <div>
                  <h3 className="font-display text-xl font-extrabold text-ink">
                    {v.title}
                  </h3>
                  <p className="mt-2 font-body text-sm font-light leading-relaxed text-stone">
                    {v.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
