"use client";

import { motion } from "framer-motion";
import { portfolioProjects } from "@/lib/data";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors">
            <ArrowLeft size={16} />
            Ana səhifə
          </Link>
          <span className="text-gray-900 font-bold text-lg tracking-tight">
            Bir<span className="text-gray-400">Click</span>
          </span>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span className="text-xs font-medium tracking-[0.25em] uppercase text-gray-400 mb-4 block">
            Layihələr
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-[1.05] mb-6">
            Bütün işlərimiz
          </h1>
          <p className="text-base text-gray-500 max-w-lg leading-relaxed">
            Hər layihə unikal bir hekayədir. Müştərilərimizlə birlikdə
            yaratdığımız rəqəmsal həlləri kəşf edin.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-6">
          {portfolioProjects.map((project, i) => (
            <motion.a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2 + i * 0.1,
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group block rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg hover:shadow-gray-100/80 transition-all duration-300 overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                {/* Left — color block */}
                <div
                  className="md:w-64 lg:w-80 h-48 md:h-auto flex-shrink-0 flex items-center justify-center"
                  style={{ backgroundColor: `${project.accentColor}08` }}
                >
                  <span
                    className="text-7xl font-bold opacity-10 select-none"
                    style={{ color: project.accentColor }}
                  >
                    {project.title[0]}
                  </span>
                </div>

                {/* Right — content */}
                <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-xs text-gray-400 tracking-wide uppercase">
                        {project.category}
                      </p>
                      <div className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center flex-shrink-0 group-hover:bg-gray-900 group-hover:border-gray-900 transition-all duration-200">
                        <ArrowUpRight
                          size={14}
                          className="text-gray-400 group-hover:text-white transition-colors duration-200"
                        />
                      </div>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                      {project.title}
                    </h2>
                    <p className="text-sm text-gray-500 leading-relaxed max-w-xl">
                      {project.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-50">
                    <span className="text-xs text-gray-300 font-mono">
                      {project.url.replace("https://", "")}
                    </span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
