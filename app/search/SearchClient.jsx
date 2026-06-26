"use client";

import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { t, ui } from "@/lib/i18n";
import { searchAll, countResults } from "@/lib/search";
import { getLocalizedText } from "@/lib/utils";
import TagPill from "@/components/ui/TagPill";

/** Result row for a single item. All props should be strings; getLocalizedText guards against stray objects. */
function ResultItem({ href, primary, secondary, meta, lang = "en" }) {
  const safeP = getLocalizedText(primary, lang);
  const safeS = getLocalizedText(secondary, lang);
  const safeM = getLocalizedText(meta, lang);
  return (
    <Link
      href={href}
      className="group block py-4 border-b border-border hover:pl-2 transition-all duration-150"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-base font-light group-hover:text-foreground transition-colors">
            {safeP}
          </p>
          {safeS && (
            <p className="text-sm text-muted-foreground mt-0.5 leading-relaxed line-clamp-2">
              {safeS}
            </p>
          )}
        </div>
        {safeM && <TagPill variant="muted" className="shrink-0">{safeM}</TagPill>}
      </div>
    </Link>
  );
}

/** Section of results */
function ResultGroup({ label, items, count }) {
  if (!items.length) return null;
  return (
    <motion.section
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="mb-10"
    >
      <div className="flex items-center gap-3 mb-2">
        <p className="label">{label}</p>
        <span className="text-xs text-muted-foreground">({count})</span>
      </div>
      {items}
    </motion.section>
  );
}

export default function SearchClient() {
  const { lang } = useLanguage();
  const s = ui.search;
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState(null);
  const inputRef = useRef(null);

  // Auto-focus
  useEffect(() => { inputRef.current?.focus(); }, []);

  // Run search on query change (debounced)
  useEffect(() => {
    if (!query.trim()) { setResults(null); return; }
    const id = setTimeout(() => { setResults(searchAll(query)); }, 200);
    return () => clearTimeout(id);
  }, [query]);

  const totalCount = results ? countResults(results) : 0;

  return (
    <main className="pt-20 pb-24">
      <div className="container-wide max-w-3xl">

        {/* Search input */}
        <div className="relative mb-12">
          <Search
            size={18}
            className="absolute left-0 top-1/2 -translate-y-1/2 text-muted-foreground"
          />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={s.placeholder[lang]}
            className="w-full pl-8 pr-4 py-3 text-xl font-light border-b border-border bg-transparent outline-none focus:border-foreground transition-colors duration-150 placeholder:text-muted-foreground"
          />
        </div>

        {/* Results */}
        <AnimatePresence mode="wait">
          {query.trim() && results && (
            <motion.div key={query} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              {/* Summary */}
              <p className="text-sm text-muted-foreground mb-8">
                {s.resultsFor[lang]} <span className="text-foreground font-medium">"{query}"</span>
                {" "}— {totalCount} {lang === "zh" ? "条结果" : "results"}
              </p>

              {totalCount === 0 && (
                <p className="text-muted-foreground">{s.noResults[lang]}</p>
              )}

              {/* Psychology */}
              <ResultGroup
                label={s.groupLabels.psychology[lang]}
                count={results.psychology.length}
                items={results.psychology.map((p) => (
                  <ResultItem
                    key={p.id}
                    href={`/psychology/${p.id}`}
                    primary={t(p.name, lang)}
                    secondary={t(p.description, lang)}
                    meta={`CN ${p.marketWeights?.china} / NA ${p.marketWeights?.northAmerica}`}
                  />
                ))}
              />

              {/* Brands */}
              <ResultGroup
                label={s.groupLabels.brands[lang]}
                count={results.brands.length}
                items={results.brands.map((b) => (
                  <ResultItem
                    key={b.id}
                    href={`/brands/${b.id}`}
                    primary={b.name}
                    secondary={t(b.thesis, lang)}
                    meta={t(b.industry, lang)}
                  />
                ))}
              />

              {/* Campaigns */}
              <ResultGroup
                label={s.groupLabels.campaigns[lang]}
                count={results.campaigns.length}
                items={results.campaigns.map((c) => (
                  <ResultItem
                    key={c.id}
                    href={`/campaigns/${c.id}`}
                    primary={t(c.title, lang)}
                    secondary={t(c.description, lang)}
                    meta={c.date}
                  />
                ))}
              />

              {/* Frameworks */}
              <ResultGroup
                label={s.groupLabels.frameworks[lang]}
                count={results.frameworks.length}
                items={results.frameworks.map((fw) => (
                  <ResultItem
                    key={fw.id}
                    href={`/frameworks/${fw.id}`}
                    primary={t(fw.name, lang)}
                    secondary={t(fw.description, lang)}
                    meta={t(fw.category, lang)}
                  />
                ))}
              />

              {/* Articles */}
              <ResultGroup
                label={s.groupLabels.articles[lang]}
                count={results.articles.length}
                items={results.articles.map((a) => (
                  <ResultItem
                    key={a.id}
                    href={`/articles/${a.id}`}
                    primary={t(a.title, lang)}
                    secondary={t(a.summary, lang)}
                    meta={a.readingTime?.[lang]}
                  />
                ))}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Empty state */}
        {!query.trim() && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-sm">
              {lang === "zh"
                ? "输入关键词，跨图谱搜索品牌、心理机制、营销事件与框架"
                : "Type to search across brands, psychology, campaigns, and frameworks"}
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
