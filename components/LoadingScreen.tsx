"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setExiting(true), 2200);
    const t2 = setTimeout(() => setVisible(false), 3000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999]">
      {/* Main loading screen */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center bg-ink will-change-transform"
        animate={exiting ? { y: "-100%" } : { y: 0 }}
        transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
      >
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(247,243,238,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(247,243,238,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Ember glow — GPU only (opacity + transform) */}
        <motion.div
          className="absolute will-change-transform"
          style={{
            width: 400,
            height: 400,
            background:
              "radial-gradient(circle, rgba(232,87,42,0.15) 0%, transparent 60%)",
          }}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1.3, opacity: 0.5 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        {/* Center content */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Logo — simple fade + scale */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="/birlogo.png"
              alt="birclick"
              width={200}
              height={66}
              className="h-10 w-auto brightness-0 invert md:h-14"
              priority
            />
          </motion.div>

          {/* Tagline */}
          <motion.div
            className="mt-7 flex items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <motion.div
              className="h-px bg-cream/20"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              style={{ width: 36, transformOrigin: "right" }}
              transition={{ duration: 0.4, delay: 0.7 }}
            />
            <span className="font-body text-xs font-light tracking-[0.2em] uppercase text-cream/40 md:text-sm">
              Bir klik. Sonsuz imkan.
            </span>
            <motion.div
              className="h-px bg-cream/20"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              style={{ width: 36, transformOrigin: "left" }}
              transition={{ duration: 0.4, delay: 0.7 }}
            />
          </motion.div>

          {/* Progress bar — translateX only */}
          <div className="mt-9 h-[1px] w-48 overflow-hidden bg-cream/10">
            <motion.div
              className="h-full w-full bg-ember will-change-transform origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </div>

        {/* Corner brackets */}
        {[
          "top-6 left-6 border-l border-t",
          "top-6 right-6 border-r border-t",
          "bottom-6 left-6 border-l border-b",
          "bottom-6 right-6 border-r border-b",
        ].map((cls) => (
          <motion.div
            key={cls}
            className={`absolute h-5 w-5 border-cream/8 ${cls}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
          />
        ))}

        {/* Bottom text */}
        <motion.div
          className="absolute bottom-6 flex w-full items-center justify-between px-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.3 }}
        >
          <span className="font-mono text-[10px] tracking-wider text-cream/10 uppercase">
            Bakı, Azərbaycan
          </span>
          <span className="font-mono text-[10px] tracking-wider text-cream/10">
            <Counter />
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const start = performance.now();
    const duration = 1800;
    let raf: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * 100));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return <span>{String(count).padStart(3, "0")}%</span>;
}
