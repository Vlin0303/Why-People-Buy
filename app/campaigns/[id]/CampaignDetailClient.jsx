"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { ui } from "@/lib/i18n";
import { getLocalizedText } from "@/lib/utils";
import RelatedContentSection from "@/components/ui/RelatedContentSection";
import TagPill from "@/components/ui/TagPill";

/**
 * Renders a labelled prose block.
 * Accepts a bilingual object, plain string, or nothing.
 */
function DetailBlock({ label, value, lang, delay = 0 }) {
  const text = getLocalizedText(value, lang);
  if (!text) return null;
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className="mb-12"
    >
      <h2 className="text-2xl font-light tracking-tight mb-4">{label}</h2>
      <div className="prose-editorial">
        <p>{text}</p>
      </div>
    </motion.section>
  );
}

export default function CampaignDetailClient({ item, related }) {
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
          <div className="flex items-center gap-3 mb-4">
            <p className="label">{String(item.date || "")}</p>
            {(item.market || []).map((m) => (
              <TagPill key={m} variant="muted">
                {getLocalizedText(markets[m] || { zh: m, en: m }, lang)}
              </TagPill>
            ))}
          </div>
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6">
            {getLocalizedText(item.title, lang)}
          </h1>
          <p className="text-xl text-neutral-500 leading-relaxed max-w-2xl">
            {getLocalizedText(item.description, lang)}
          </p>
        </motion.header>

        {/* Content blocks — pass raw bilingual values, DetailBlock extracts text */}
        <DetailBlock
          label={getLocalizedText(c.whatHappened, lang)}
          value={item.whatHappened}
          lang={lang}
          delay={0.1}
        />
        <DetailBlock
          label={getLocalizedText(c.whyItMattered, lang)}
          value={item.whyItMattered}
          lang={lang}
          delay={0.15}
        />
        <DetailBlock
          label={getLocalizedText(c.psychologyTriggered, lang)}
          value={item.psychologyTriggered}
          lang={lang}
          delay={0.2}
        />
        <DetailBlock
          label={getLocalizedText(c.strategicImplications, lang)}
          value={item.strategicImplications}
          lang={lang}
          delay={0.25}
        />

        {/* Extra fields gracefully */}
        {item.insight      && <DetailBlock label={lang === "zh" ? "洞察" : "Insight"}         value={item.insight}      lang={lang} delay={0.28} />}
        {item.summary      && <DetailBlock label={lang === "zh" ? "摘要" : "Summary"}         value={item.summary}      lang={lang} delay={0.3}  />}
        {item.strategy     && <DetailBlock label={lang === "zh" ? "策略" : "Strategy"}        value={item.strategy}     lang={lang} delay={0.32} />}

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
