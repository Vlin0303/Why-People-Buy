"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { t, ui } from "@/lib/i18n";
import { psychology } from "@/data/psychology";
import WordSphere from "@/components/ui/WordSphere";

/**
 * PsychologyModule — Module 1 of the Dashboard.
 * Shows two side-by-side word spheres: China and North America.
 * Keyword size in each sphere is determined by that market's weight.
 */
export default function PsychologyModule() {
  const { lang } = useLanguage();
  const d = ui.dashboard.psychologyModule;

  // Build keyword arrays for each sphere
  // name = display string in current language, weight = market-specific
  const chinaKeywords = psychology.map((p) => ({
    id:     p.id,
    name:   t(p.name, lang),
    weight: p.marketWeights.china,
  }));

  const naKeywords = psychology.map((p) => ({
    id:     p.id,
    name:   t(p.name, lang),
    weight: p.marketWeights.northAmerica,
  }));

  return (
    <section className="section-padding border-b border-border">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="label mb-3">{d.label[lang]}</p>
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-4">
            {d.title[lang]}
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm">
            {d.subtitle[lang]}
          </p>
        </div>

        {/* Dual spheres */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 items-center">

          {/* China sphere */}
          <div className="flex flex-col items-center gap-6">
            <WordSphere keywords={chinaKeywords} radius={200} />
            <div className="text-center">
              <p className="text-sm font-medium tracking-widest uppercase mb-1">
                {d.chinaLabel[lang]}
              </p>
              <Link
                href="/search?market=china"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {d.exploreChina[lang]}
              </Link>
            </div>
          </div>

          {/* North America sphere */}
          <div className="flex flex-col items-center gap-6">
            <WordSphere keywords={naKeywords} radius={200} />
            <div className="text-center">
              <p className="text-sm font-medium tracking-widest uppercase mb-1">
                {d.naLabel[lang]}
              </p>
              <Link
                href="/search?market=northAmerica"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {d.exploreNA[lang]}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
