"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// Animation variants — each child staggers in
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-16">
      {/* Subtle background grid — purely decorative */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="container-wide relative z-10 py-24 md:py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Eyebrow label */}
          <motion.p variants={itemVariants} className="label mb-8">
            Marketing Intelligence Lab
          </motion.p>

          {/* Main headline */}
          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tight leading-[1] mb-8"
          >
            Why People
            <br />
            <span className="italic">Buy</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl font-light text-muted-foreground max-w-2xl leading-relaxed mb-4"
          >
            A marketing intelligence lab exploring why people choose, love, and stay with brands.
          </motion.p>

          {/* Supporting line */}
          <motion.p
            variants={itemVariants}
            className="text-base text-muted-foreground max-w-xl leading-relaxed mb-12"
          >
            I break down brands through consumer psychology, market strategy, data thinking, and growth logic.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <Link
              href="/cases"
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background text-sm font-medium rounded-full hover:bg-neutral-800 transition-all duration-200"
            >
              Explore Case Studies
              <span className="text-lg leading-none">→</span>
            </Link>
            <Link
              href="/framework"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground text-sm font-medium rounded-full hover:border-foreground transition-all duration-200"
            >
              View My Framework
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-12 left-6 md:left-12 flex items-center gap-3"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-px h-8 bg-border"
          />
          <span className="label text-[10px]">Scroll</span>
        </motion.div>
      </div>
    </section>
  );
}
