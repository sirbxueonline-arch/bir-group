"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CursorFollower() {
  const [visible, setVisible] = useState(false);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(hover: none)").matches;
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [x, y, visible]);

  if (!visible) return null;

  return (
    <motion.div
      className="cursor-follower pointer-events-none fixed top-0 left-0 z-[9999]"
      style={{ x, y }}
    >
      <div className="relative -translate-x-1/2 -translate-y-1/2">
        <div className="h-5 w-5 rounded-full bg-ember/80 mix-blend-difference" />
        <div className="absolute inset-0 h-5 w-5 animate-ping rounded-full bg-ember/30" />
      </div>
    </motion.div>
  );
}
