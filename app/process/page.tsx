"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import PageTransition, { PageHeader } from "@/components/PageTransition";

const steps = [
  {
    num: "01",
    title: "Kəşf",
    desc: "Layihənizi, məqsədlərinizi və hədəf auditoriyanızı dərindən araşdırırıq. Rəqiblər təhlil edilir, istifadəçi personaları yaradılır.",
    details: ["Brif görüşü", "Rəqib analizi", "Hədəf auditoriya", "Texniki tələblər"],
  },
  {
    num: "02",
    title: "Dizayn",
    desc: "Wireframe və vizual konseptlər hazırlayırıq. Hər detal sizinlə razılaşdırılır. Figma ilə interaktiv prototiplər yaradırıq.",
    details: ["Wireframing", "UI dizayn", "Prototipləmə", "Dizayn sistemi"],
  },
  {
    num: "03",
    title: "İnkişaf",
    desc: "Müasir texnologiyalarla layihənizi kodlaşdırırıq. Sürət, təhlükəsizlik və miqyaslana bilmə əsasdır.",
    details: ["Frontend inkişaf", "Backend inkişaf", "API inteqrasiya", "Test"],
  },
  {
    num: "04",
    title: "Lansman",
    desc: "Test, optimallaşdırma və canlı yayım. Layihəniz dünyaya açılır. Lansmandan sonra dəstək təmin edilir.",
    details: ["QA test", "Performans optimallaşdırma", "Deployment", "Dəstək & bakım"],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ProcessPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <PageTransition>
      <PageHeader
        label="Proses"
        title="Necə işləyirik?"
        description="Şəffaf və strukturlaşdırılmış iş prosesi — hər addımda sizinlə birlikdə."
      />

      <section className="bg-cream px-6 py-24 lg:px-8 lg:py-32" ref={ref}>
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="space-y-0"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                variants={itemVariants}
                className="group relative border-b border-sand py-12 first:pt-0 last:border-b-0 md:py-16"
              >
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-12">
                  {/* Number */}
                  <div className="flex items-center gap-4 md:w-32 md:shrink-0">
                    <span className="font-display text-6xl font-black text-ember/20 transition-colors group-hover:text-ember/50 md:text-7xl">
                      {step.num}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-display text-3xl font-extrabold text-ink md:text-4xl">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-2xl font-body text-base font-light leading-relaxed text-stone">
                      {step.desc}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {step.details.map((d) => (
                        <span
                          key={d}
                          className="rounded-full border border-sand bg-sand px-3 py-1 font-mono text-xs text-stone"
                        >
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Step indicator */}
                  <div className="hidden items-center md:flex">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-full ${i === steps.length - 1 ? "bg-ember" : "bg-sand"} transition-colors group-hover:bg-ember`}>
                      {i === steps.length - 1 ? (
                        <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="h-5 w-5 text-stone group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      )}
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
              Hazırsınız? Gəlin prosesi birlikdə başlayaq.
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
