"use client";

import { motion } from "framer-motion";
import { portfolioProjects } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

const cardGradients = [
  { border: "hover:border-blue-200", shadow: "hover:shadow-blue-50", arrow: "group-hover:from-blue-600 group-hover:to-cyan-500", tag: "text-blue-500 bg-blue-50" },
  { border: "hover:border-rose-200", shadow: "hover:shadow-rose-50", arrow: "group-hover:from-rose-500 group-hover:to-pink-500", tag: "text-rose-500 bg-rose-50" },
  { border: "hover:border-amber-200", shadow: "hover:shadow-amber-50", arrow: "group-hover:from-amber-500 group-hover:to-orange-500", tag: "text-amber-600 bg-amber-50" },
  { border: "hover:border-emerald-200", shadow: "hover:shadow-emerald-50", arrow: "group-hover:from-emerald-500 group-hover:to-teal-500", tag: "text-emerald-600 bg-emerald-50" },
  { border: "hover:border-violet-200", shadow: "hover:shadow-violet-50", arrow: "group-hover:from-violet-500 group-hover:to-purple-500", tag: "text-violet-500 bg-violet-50" },
];

export function Portfolio() {
  return (
    <section id="work" className="relative py-24 sm:py-32 bg-gray-50">
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
            Seçilmiş işlər
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-[1.1]">
            Son layihələrimiz
          </h2>
        </motion.div>

        {/* Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {portfolioProjects.map((project, i) => {
            const colors = cardGradients[i % cardGradients.length];
            return (
              <motion.a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`group bg-white rounded-2xl border border-gray-100 ${colors.border} hover:shadow-lg ${colors.shadow} transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between ${
                  i === 0 ? "md:col-span-2" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className={`text-xs font-medium tracking-wide uppercase px-2.5 py-1 rounded-md ${colors.tag}`}>
                      {project.category}
                    </span>
                    <div className={`w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-br ${colors.arrow} group-hover:border-transparent transition-all duration-200`}>
                      <ArrowUpRight
                        size={14}
                        className="text-gray-400 group-hover:text-white transition-colors duration-200"
                      />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed max-w-lg">
                    {project.description}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-gray-100">
                  <span className="text-xs text-gray-300 font-mono">
                    {project.url.replace("https://", "")}
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
