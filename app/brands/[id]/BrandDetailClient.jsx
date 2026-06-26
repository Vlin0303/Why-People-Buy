"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { ui } from "@/lib/i18n";
import { getLocalizedText } from "@/lib/utils";
import RelatedContentSection from "@/components/ui/RelatedContentSection";
import TagPill from "@/components/ui/TagPill";

/** Renders any text field safely — string, bilingual object, or missing. */
function LT({ v, lang }) {
  const text = getLocalizedText(v, lang);
  return text || null;
}

/** A labelled info row in the snapshot card. */
function InfoRow({ label, value, lang }) {
  const text = getLocalizedText(value, lang);
  if (!text) return null;
  return (
    <div className="flex flex-col gap-1 py-4 border-b border-border last:border-0">
      <p className="label">{label}</p>
      <p className="text-sm text-neutral-700 leading-relaxed">{text}</p>
    </div>
  );
}

/** A full-width prose section with a heading. */
function Section({ heading, value, lang, delay = 0 }) {
  const text = getLocalizedText(value, lang);
  if (!text) return null;
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className="mb-12"
    >
      <h2 className="text-2xl font-light tracking-tight mb-4">{heading}</h2>
      <div className="prose-editorial">
        <p>{text}</p>
      </div>
    </motion.section>
  );
}

export default function BrandDetailClient({ item, related }) {
  const { lang } = useLanguage();
  const c = ui.common;
  const markets = ui.markets;

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
          className="mb-12"
        >
          <p className="label mb-4">{getLocalizedText(item.industry, lang)}</p>
          <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-4">
            {/* brand.name is always a plain string */}
            {String(item.name || "")}
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            {getLocalizedText(item.coreProducts, lang)}
          </p>
          <p className="text-xl italic text-neutral-500 leading-relaxed max-w-2xl">
            {getLocalizedText(item.thesis, lang)}
          </p>
        </motion.header>

        {/* Market tags */}
        <div className="flex gap-2 mb-12">
          {(item.market || []).map((m) => (
            <TagPill key={m} variant="muted">
              {getLocalizedText(markets[m] || { zh: m, en: m }, lang)}
            </TagPill>
          ))}
        </div>

        {/* Description */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="prose-editorial mb-12"
        >
          <p>{getLocalizedText(item.description, lang)}</p>
        </motion.section>

        {/* Snapshot */}
        {item.snapshot && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mb-12 bg-muted rounded-2xl p-8"
          >
            <p className="label mb-6">
              {lang === "zh" ? "品牌快照" : "Brand Snapshot"}
            </p>
            <div className="divide-y divide-border">
              <InfoRow
                label={getLocalizedText(c.targetAudience, lang)}
                value={item.snapshot.targetAudience}
                lang={lang}
              />
              <InfoRow
                label={getLocalizedText(c.businessModel, lang)}
                value={item.snapshot.businessModel}
                lang={lang}
              />
              <InfoRow
                label={getLocalizedText(c.positioning, lang)}
                value={item.snapshot.positioning}
                lang={lang}
              />
            </div>
          </motion.div>
        )}

        {/* Why people buy */}
        <Section
          heading={getLocalizedText(c.whyPeopleBuy, lang)}
          value={item.whyPeopleBuy}
          lang={lang}
          delay={0.2}
        />

        {/* Strategy / longDescription / insight — accept any extra fields gracefully */}
        {item.strategy && (
          <Section
            heading={lang === "zh" ? "品牌策略" : "Brand Strategy"}
            value={item.strategy}
            lang={lang}
            delay={0.25}
          />
        )}
        {item.insight && (
          <Section
            heading={lang === "zh" ? "洞察" : "Insight"}
            value={item.insight}
            lang={lang}
            delay={0.28}
          />
        )}
        {item.longDescription && (
          <Section
            heading={lang === "zh" ? "深度分析" : "Deep Dive"}
            value={item.longDescription}
            lang={lang}
            delay={0.3}
          />
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
