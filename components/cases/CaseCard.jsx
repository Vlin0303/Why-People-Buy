"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Tag from "@/components/shared/Tag";

/**
 * CaseCard
 * Used on both the Home featured section and the Case Library grid.
 *
 * Props:
 *   caseData — a single case object from data/cases.js
 *   index    — for stagger delay calculation
 *   large    — renders a wider featured card layout
 */
export default function CaseCard({ caseData, index = 0, large = false }) {
  const { slug, brand, category, tagline, insight, tags, readingTime } = caseData;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link href={`/cases/${slug}`} className="group block h-full">
        <motion.article
          whileHover={{ y: -4 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="h-full border border-border rounded-2xl p-8 bg-white hover:border-foreground/30 hover:shadow-xl hover:shadow-black/5 transition-all duration-300 flex flex-col justify-between gap-8"
        >
          {/* Top section */}
          <div>
            {/* Category label */}
            <p className="label mb-6">{category}</p>

            {/* Brand name */}
            <h3 className={`font-light tracking-tight mb-3 ${large ? "text-3xl md:text-4xl" : "text-2xl"}`}>
              {brand}
            </h3>

            {/* Tagline */}
            <p className="text-sm text-muted-foreground italic mb-4">{tagline}</p>

            {/* One-line insight */}
            <p className="text-sm text-neutral-600 leading-relaxed">{insight}</p>
          </div>

          {/* Bottom section */}
          <div className="flex flex-col gap-4">
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Tag key={tag} variant="default">{tag}</Tag>
              ))}
            </div>

            {/* Footer row */}
            <div className="flex items-center justify-between pt-4 border-t border-border">
              <span className="text-xs text-muted-foreground">{readingTime}</span>
              <span className="text-sm font-medium group-hover:translate-x-1 transition-transform duration-200 inline-block">
                Read →
              </span>
            </div>
          </div>
        </motion.article>
      </Link>
    </motion.div>
  );
}
