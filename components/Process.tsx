"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    num: "01",
    title: "Kəşf",
    desc: "Layihənizi, məqsədlərinizi və hədəf auditoriyanızı dərindən araşdırırıq.",
  },
  {
    num: "02",
    title: "Dizayn",
    desc: "Wireframe və vizual konseptlər hazırlayırıq. Hər detal sizinlə razılaşdırılır.",
  },
  {
    num: "03",
    title: "İnkişaf",
    desc: "Müasir texnologiyalarla layihənizi kodlaşdırırıq. Sürət və keyfiyyət əsasdır.",
  },
  {
    num: "04",
    title: "Lansman",
    desc: "Test, optimallaşdırma və canlı yayım. Layihəniz dünyaya açılır.",
  },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="process"
      className="bg-cream px-6 py-24 lg:px-8 lg:py-32"
      ref={ref}
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm uppercase tracking-widest text-ember">
            Proses
          </p>
          <h2 className="mt-3 font-display text-4xl font-black text-ink md:text-6xl">
            Necə işləyirik?
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Horizontal line (desktop) */}
          <div className="absolute left-0 right-0 top-8 hidden h-0.5 bg-sand lg:block">
            <motion.div
              className="h-full bg-ember origin-left"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            />
          </div>

          {/* Vertical line (mobile) */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-sand lg:hidden">
            <motion.div
              className="w-full bg-ember origin-top"
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            />
          </div>

          <div className="grid gap-12 lg:grid-cols-4 lg:gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                className="relative pl-20 lg:pl-0 lg:pt-20"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.4 + i * 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {/* Circle */}
                <div className="absolute left-4 top-0 flex h-9 w-9 items-center justify-center rounded-full bg-ember text-cream font-mono text-xs font-bold lg:static lg:mb-6">
                  {step.num}
                </div>

                <h3 className="font-display text-2xl font-extrabold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 font-body text-base font-light leading-relaxed text-stone">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
