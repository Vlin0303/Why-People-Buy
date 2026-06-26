"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { articleTypeLabels } from "@/lib/i18n";
import { getLocalizedText, formatDate } from "@/lib/utils";
import TagPill from "./TagPill";

export default function ArticleCard({ article, index = 0 }) {
  const { lang } = useLanguage();
  const typeLabelObj = articleTypeLabels[article.articleType];
  const typeLabel = typeLabelObj
    ? getLocalizedText(typeLabelObj, lang)
    : String(article.articleType || "");

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link href={`/articles/${article.id}`} className="group block h-full">
        <article className="h-full border border-border rounded-2xl p-7 bg-white hover:border-foreground/25 hover:shadow-lg hover:shadow-black/[0.04] transition-all duration-300 flex flex-col gap-5">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <TagPill variant="muted">{typeLabel}</TagPill>
              <span className="text-xs text-muted-foreground">
                {getLocalizedText(article.readingTime, lang)}
              </span>
            </div>
            <h3 className="text-lg font-light tracking-tight leading-snug mb-2">
              {getLocalizedText(article.title, lang)}
            </h3>
            <p className="text-sm text-neutral-500 italic mb-3">
              {getLocalizedText(article.subtitle, lang)}
            </p>
            <p className="text-sm text-neutral-600 leading-relaxed line-clamp-3">
              {getLocalizedText(article.summary, lang)}
            </p>
          </div>

          <div className="mt-auto flex items-center justify-between pt-4 border-t border-border">
            <span className="text-xs text-muted-foreground">
              {formatDate(article.publishedAt, lang)}
            </span>
            <span className="text-sm font-medium group-hover:translate-x-1 transition-transform duration-150 inline-block">
              →
            </span>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}
