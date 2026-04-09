"use client";

import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Veb Dizayn",
    desc: "Müasir, sürətli və mobil-uyğun veb saytlar hazırlayırıq. Hər piksel mükəmməl olmalıdır.",
  },
  {
    num: "02",
    title: "Mobil Tətbiq",
    desc: "iOS və Android üçün doğma tətbiqlər. Performans və istifadəçi təcrübəsi ön plandadır.",
  },
  {
    num: "03",
    title: "UI/UX Dizayn",
    desc: "İstifadəçi araşdırması, wireframe və prototipləmə ilə mükəmməl rəqəmsal təcrübə yaradırıq.",
  },
  {
    num: "04",
    title: "E-commerce",
    desc: "Onlayn mağaza həlləri — ödəniş inteqrasiyası, məhsul idarəetməsi və daha çox.",
  },
  {
    num: "05",
    title: "Brend Kimliyi",
    desc: "Logo, rəng paleti, tipografiya — brendinizi fərqləndirən vizual kimlik yaradırıq.",
  },
  {
    num: "06",
    title: "SEO",
    desc: "Axtarış motorlarında birinci sırada olun. Texniki SEO və kontent strategiyası.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Services() {
  return (
    <section id="services" className="bg-cream px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm uppercase tracking-widest text-ember">
            Xidmətlər
          </p>
          <h2 className="mt-3 font-display text-4xl font-black text-ink md:text-6xl">
            Nə edirik?
          </h2>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((s) => (
            <motion.div
              key={s.num}
              variants={cardVariants}
              className="group rounded-2xl border border-transparent bg-sand p-8 transition-all duration-300 hover:border-ember hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="font-display text-2xl font-extrabold text-ink">
                {s.title}
              </h3>
              <p className="mt-3 font-body text-base font-light leading-relaxed text-stone">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
