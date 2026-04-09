"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function LoadingScreen() {
  const [show, setShow] = useState(true);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    // Cursor arrives and clicks at ~1s, then exit after a short delay
    const clickTimer = setTimeout(() => setClicked(true), 1000);
    const hideTimer = setTimeout(() => setShow(false), 2200);
    return () => {
      clearTimeout(clickTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ y: "-100%" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] bg-white flex items-center justify-center"
        >
          <div className="relative flex flex-col items-center">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative"
            >
              {/* Click ripple effect */}
              <AnimatePresence>
                {clicked && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0.5 }}
                    animate={{ scale: 2.5, opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gray-300"
                  />
                )}
              </AnimatePresence>

              {/* Logo image with click scale */}
              <motion.div
                animate={
                  clicked
                    ? { scale: [1, 0.9, 1.05, 1] }
                    : { scale: 1 }
                }
                transition={
                  clicked
                    ? { duration: 0.4, ease: "easeOut" }
                    : {}
                }
              >
                <Image
                  src="/birlogo.png"
                  alt="BirClick"
                  width={80}
                  height={80}
                  priority
                  className="select-none"
                />
              </motion.div>
            </motion.div>

            {/* Cursor that moves in and clicks the logo */}
            <motion.svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="absolute pointer-events-none"
              style={{ filter: "drop-shadow(1px 2px 2px rgba(0,0,0,0.2))" }}
              initial={{ x: 60, y: 60, opacity: 0, scale: 1 }}
              animate={
                clicked
                  ? { x: 8, y: 8, opacity: 1, scale: [1, 0.85, 1] }
                  : { x: 8, y: 8, opacity: 1, scale: 1 }
              }
              transition={
                clicked
                  ? { scale: { duration: 0.25, ease: "easeOut" } }
                  : {
                      x: { duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] },
                      y: { duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] },
                      opacity: { duration: 0.3, delay: 0.3 },
                    }
              }
            >
              <path
                d="M5 3L19 12L12 13L9 20L5 3Z"
                fill="black"
                stroke="white"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </motion.svg>

            {/* BirClick text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="mt-4 text-sm font-semibold text-gray-900 tracking-tight"
            >
              Bir<span className="text-gray-400">Click</span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
