"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { getLocalizedText } from "@/lib/utils";
import TagPill from "./TagPill";

export default function FrameworkCard({ framework, index = 0 }) {
  const { lang } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link href={`/frameworks/${framework.id}`} className="group block h-full">
        <motion.article
          whileHover={{ y: -3 }}
          transition={{ duration: 0.2 }}
          className="h-full border border-border rounded-2xl p-7 bg-white hover:border-foreground/25 hover:shadow-lg hover:shadow-black/[0.04] transition-all duration-300 flex flex-col gap-5"
        >
          <div>
            <TagPill variant="muted" className="mb-4">
              {getLocalizedText(framework.category, lang)}
            </TagPill>
            <h3 className="text-xl font-light tracking-tight mb-3">
              {getLocalizedText(framework.name, lang)}
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              {getLocalizedText(framework.description, lang)}
            </p>
          </div>

          <div className="mt-auto flex items-center justify-between pt-4 border-t border-border">
            <div className="flex flex-wrap gap-1.5">
              {(framework.tags || []).slice(0, 2).map((tag) => (
                <TagPill key={tag} variant="muted">{String(tag)}</TagPill>
              ))}
            </div>
            <span className="text-sm font-medium group-hover:translate-x-1 transition-transform duration-150 inline-block">→</span>
          </div>
        </motion.article>
      </Link>
    </motion.div>
  );
}
