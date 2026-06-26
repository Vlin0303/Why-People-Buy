"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { ui } from "@/lib/i18n";
import { getLocalizedText } from "@/lib/utils";
import RelatedContentSection from "@/components/ui/RelatedContentSection";
import TagPill from "@/components/ui/TagPill";

export default function PsychologyDetailClient({ item, related }) {
  const { lang } = useLanguage();
  const c = ui.common;

  // formationReasons may be a bilingual object or a plain string
  const formationText = getLocalizedText(item.formationReasons, lang);
  // Split on newlines so each reason can be a list item
  const formationLines = formationText
    ? formationText.split(/\n+/).filter(Boolean)
    : [];

  return (
    <main className="pt-20 pb-24">
      <div className="container-wide max-w-4xl">

        {/* Back */}
        <Link
          href="/"
          className="label text-muted-foreground hover:text-foreground transition-colors mb-12 inline-block"
        >
          {getLocalizedText(c.backToAll, lang)}
        </Link>

        {/* Hero */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <p className="label mb-4">
            Psychology · {getLocalizedText(c.china, lang)} / {getLocalizedText(c.northAmerica, lang)}
          </p>
          <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-6">
            {getLocalizedText(item.name, lang)}
          </h1>
          <p className="text-xl text-neutral-500 leading-relaxed max-w-2xl">
            {getLocalizedText(item.description, lang)}
          </p>
        </motion.header>

        {/* Market weights */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="grid grid-cols-2 gap-6 mb-16 p-8 bg-muted rounded-2xl"
        >
          {/* China */}
          <div>
            <p className="label mb-2">{getLocalizedText(ui.markets.china, lang)}</p>
            <div className="flex items-end gap-3">
              <span className="text-5xl font-light">
                {item.marketWeights?.china ?? "—"}
              </span>
              <span className="text-muted-foreground text-sm mb-2">/ 100</span>
            </div>
            <div className="h-1.5 bg-border rounded-full mt-3 overflow-hidden">
              <div
                className="h-full bg-foreground rounded-full transition-all duration-700"
                style={{ width: `${item.marketWeights?.china ?? 0}%` }}
              />
            </div>
          </div>

          {/* North America */}
          <div>
            <p className="label mb-2">{getLocalizedText(ui.markets.northAmerica, lang)}</p>
            <div className="flex items-end gap-3">
              <span className="text-5xl font-light">
                {item.marketWeights?.northAmerica ?? "—"}
              </span>
              <span className="text-muted-foreground text-sm mb-2">/ 100</span>
            </div>
            <div className="h-1.5 bg-border rounded-full mt-3 overflow-hidden">
              <div
                className="h-full bg-foreground rounded-full transition-all duration-700"
                style={{ width: `${item.marketWeights?.northAmerica ?? 0}%` }}
              />
            </div>
          </div>
        </motion.section>

        {/* Formation reasons */}
        {formationLines.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-light tracking-tight mb-6">
              {lang === "zh" ? "形成原因" : "Formation Reasons"}
            </h2>
            {formationLines.length === 1 ? (
              <div className="prose-editorial">
                <p>{formationLines[0]}</p>
              </div>
            ) : (
              <ul className="space-y-4">
                {formationLines.map((line, i) => (
                  <li key={i} className="flex gap-4 text-neutral-700">
                    <span className="text-muted-foreground mt-0.5 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="leading-relaxed">{line}</span>
                  </li>
                ))}
              </ul>
            )}
          </motion.section>
        )}

        {/* Extra fields (description if separate from header description) */}
        {item.insight && (
          <motion.section
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-light tracking-tight mb-4">
              {lang === "zh" ? "洞察" : "Insight"}
            </h2>
            <div className="prose-editorial">
              <p>{getLocalizedText(item.insight, lang)}</p>
            </div>
          </motion.section>
        )}

        {/* Tags */}
        {item.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-16">
            {item.tags.map((tag) => (
              <TagPill
                key={tag}
                href={`/search?q=${encodeURIComponent(String(tag))}`}
                variant="outline"
              >
                {String(tag)}
              </TagPill>
            ))}
          </div>
        )}

        <div className="divider mb-16" />
        <RelatedContentSection related={related} />
      </div>
    </main>
  );
}
