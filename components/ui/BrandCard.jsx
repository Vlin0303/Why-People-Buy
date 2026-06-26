"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { ui } from "@/lib/i18n";
import { getLocalizedText } from "@/lib/utils";
import { getPsychologyItems } from "@/lib/relationships";
import TagPill from "./TagPill";

export default function BrandCard({ brand, index = 0 }) {
  const { lang } = useLanguage();
  const psychItems = getPsychologyItems(brand.relatedPsychologyIds || []).slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link href={`/brands/${brand.id}`} className="group block h-full">
        <motion.article
          whileHover={{ y: -3 }}
          transition={{ duration: 0.2 }}
          className="h-full border border-border rounded-2xl p-7 bg-white hover:border-foreground/25 hover:shadow-lg hover:shadow-black/[0.04] transition-all duration-300 flex flex-col gap-6"
        >
          <div>
            <p className="label mb-4">{getLocalizedText(brand.industry, lang)}</p>
            <h3 className="text-2xl font-light tracking-tight mb-2">
              {/* brand.name is always a plain string; getLocalizedText handles both */}
              {getLocalizedText(brand.name, lang)}
            </h3>
            <p className="text-xs text-muted-foreground mb-4">
              {getLocalizedText(brand.coreProducts, lang)}
            </p>
            <p className="text-sm text-neutral-600 leading-relaxed italic">
              {getLocalizedText(brand.thesis, lang)}
            </p>
          </div>

          {psychItems.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {psychItems.map((p) => (
                <TagPill key={p.id}>{getLocalizedText(p.name, lang)}</TagPill>
              ))}
            </div>
          )}

          <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
            <div className="flex gap-1.5">
              {(brand.market || []).slice(0, 2).map((m) => (
                <TagPill key={m} variant="muted">
                  {getLocalizedText(ui.markets[m] || { zh: m, en: m }, lang)}
                </TagPill>
              ))}
            </div>
            <span className="text-sm font-medium group-hover:translate-x-1 transition-transform duration-150 inline-block">
              →
            </span>
          </div>
        </motion.article>
      </Link>
    </motion.div>
  );
}
