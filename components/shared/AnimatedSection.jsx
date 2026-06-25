"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

/**
 * AnimatedSection
 * Wraps any content in a fade-up animation that triggers when scrolled into view.
 *
 * Props:
 *   children   — content to animate
 *   delay      — stagger delay in seconds (default 0)
 *   className  — additional Tailwind classes
 *   once       — only animate once (default true)
 */
export default function AnimatedSection({ children, delay = 0, className = "", once = true }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-80px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1], // custom ease-out-expo
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
