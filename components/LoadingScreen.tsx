"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function LoadingScreen() {
  const [phase, setPhase] = useState<"loading" | "reveal" | "done">("loading");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("reveal"), 2400);
    const t2 = setTimeout(() => setPhase("done"), 3200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  useEffect(() => {
    if (phase !== "done") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [phase]);

  if (phase === "done") return null;

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none">
      <AnimatePresence>
        {phase === "loading" && (
          <motion.div
            className="absolute inset-0 z-[9999] flex flex-col items-center justify-center bg-ink pointer-events-auto"
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            {/* Grid pattern background */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: `linear-gradient(rgba(247,243,238,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(247,243,238,0.3) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }} />

            {/* Animated ember glow */}
            <motion.div
              className="absolute"
              style={{
                width: 500,
                height: 500,
                background: "radial-gradient(circle, rgba(232,87,42,0.12) 0%, transparent 60%)",
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1.5, 1.2, 1.4, 1.3],
                opacity: [0, 0.6, 0.4, 0.5, 0.4],
              }}
              transition={{ duration: 2.5, ease: "easeOut" }}
            />

            {/* Horizontal scan line */}
            <motion.div
              className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-ember/40 to-transparent"
              initial={{ top: "0%", opacity: 0 }}
              animate={{ top: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
              transition={{ duration: 2, ease: "easeInOut", delay: 0.3 }}
            />

            {/* Logo with reveal animation */}
            <div className="relative z-10 flex flex-col items-center">
              <motion.div
                className="overflow-hidden"
                initial={{ width: 0 }}
                animate={{ width: "auto" }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
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
              </motion.div>

              {/* Tagline with typewriter-like reveal */}
              <div className="mt-8 flex items-center gap-3 overflow-hidden">
                <motion.div
                  className="h-px bg-cream/20"
                  initial={{ width: 0 }}
                  animate={{ width: 40 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                />
                <motion.span
                  className="font-body text-sm font-light tracking-[0.2em] text-cream/50 uppercase"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  Bir klik. Sonsuz imkan.
                </motion.span>
                <motion.div
                  className="h-px bg-cream/20"
                  initial={{ width: 0 }}
                  animate={{ width: 40 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                />
              </div>

              {/* Loading bar */}
              <motion.div
                className="mt-10 h-[1px] w-56 overflow-hidden bg-cream/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <motion.div
                  className="h-full bg-ember"
                  initial={{ x: "-100%" }}
                  animate={{ x: "0%" }}
                  transition={{ duration: 1.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                />
              </motion.div>
            </div>

            {/* Corner brackets */}
            <motion.div
              className="absolute top-8 left-8 h-6 w-6 border-l border-t border-cream/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            />
            <motion.div
              className="absolute top-8 right-8 h-6 w-6 border-r border-t border-cream/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            />
            <motion.div
              className="absolute bottom-8 left-8 h-6 w-6 border-l border-b border-cream/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            />
            <motion.div
              className="absolute bottom-8 right-8 h-6 w-6 border-r border-b border-cream/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            />

            {/* Bottom info */}
            <div className="absolute bottom-8 flex w-full items-center justify-between px-8">
              <motion.span
                className="font-mono text-[10px] tracking-wider text-cream/15 uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Bakı, Azərbaycan
              </motion.span>
              <motion.span
                className="font-mono text-[10px] tracking-wider text-cream/15"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <Counter />
              </motion.span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Reveal: two curtains split open */}
      <AnimatePresence>
        {phase === "reveal" && (
          <>
            <motion.div
              className="absolute inset-x-0 top-0 z-[9998] h-1/2 origin-top bg-ink"
              initial={{ scaleY: 1 }}
              animate={{ scaleY: 0 }}
              transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            />
            <motion.div
              className="absolute inset-x-0 bottom-0 z-[9998] h-1/2 origin-bottom bg-ink"
              initial={{ scaleY: 1 }}
              animate={{ scaleY: 0 }}
              transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const duration = 2000;
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * 100));
      if (progress < 1) requestAnimationFrame(tick);
    };
    const id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, []);

  return <span>{String(count).padStart(3, "0")}%</span>;
}
