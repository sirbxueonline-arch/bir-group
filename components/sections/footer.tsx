"use client";

import { motion } from "framer-motion";
import { navLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-xs"
          >
            <span className="text-gray-900 font-bold text-lg tracking-tight">
              Bir<span className="text-gray-400">Click</span>
            </span>
            <p className="mt-3 text-sm text-gray-400 leading-relaxed">
              Rəqəmsal dünyada brendinizi fərqləndiririk.
              Bakı, Azərbaycan.
            </p>
          </motion.div>

          {/* Links */}
          <div className="flex gap-16">
            <div>
              <h4 className="text-xs font-medium tracking-[0.15em] uppercase text-gray-400 mb-4">
                Bölmələr
              </h4>
              <ul className="space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-medium tracking-[0.15em] uppercase text-gray-400 mb-4">
                Əlaqə
              </h4>
              <ul className="space-y-2.5 text-sm text-gray-500">
                <li>
                  <a
                    href="mailto:hello@birclick.group"
                    className="hover:text-gray-900 transition-colors"
                  >
                    hello@birclick.group
                  </a>
                </li>
                <li>Bakı, Azərbaycan</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-300">
            &copy; {new Date().getFullYear()} BirClick
          </p>
          <p className="text-xs text-gray-300">
            Bakıda dəqiqliklə hazırlanıb
          </p>
        </div>
      </div>
    </footer>
  );
}
