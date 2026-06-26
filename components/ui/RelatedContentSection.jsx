"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ui } from "@/lib/i18n";
import { getLocalizedText } from "@/lib/utils";
import TagPill from "./TagPill";

/**
 * RelatedContentSection
 * Shows cross-graph links on every detail page.
 * Every getName() goes through getLocalizedText — no raw bilingual object reaches the DOM.
 */
export default function RelatedContentSection({ related }) {
  const { lang } = useLanguage();
  if (!related) return null;

  const sections = [
    {
      key: "psychology",
      label: ui.common.relatedPsych,
      items: related.psychology || [],
      getHref: (item) => `/psychology/${item.id}`,
      // name is bilingual { zh, en }
      getName: (item) => getLocalizedText(item.name, lang),
    },
    {
      key: "brands",
      label: ui.common.relatedBrands,
      items: related.brands || [],
      getHref: (item) => `/brands/${item.id}`,
      // brand.name is usually a plain string, but getLocalizedText handles both
      getName: (item) => getLocalizedText(item.name, lang),
    },
    {
      key: "campaigns",
      label: ui.common.relatedCampaigns,
      items: related.campaigns || [],
      getHref: (item) => `/campaigns/${item.id}`,
      // title is bilingual
      getName: (item) => getLocalizedText(item.title, lang),
    },
    {
      key: "frameworks",
      label: ui.common.relatedFrameworks,
      items: related.frameworks || [],
      getHref: (item) => `/frameworks/${item.id}`,
      // name is bilingual
      getName: (item) => getLocalizedText(item.name, lang),
    },
    {
      key: "articles",
      label: ui.common.relatedArticles,
      items: related.articles || [],
      getHref: (item) => `/articles/${item.id}`,
      // title is bilingual
      getName: (item) => getLocalizedText(item.title, lang),
    },
  ].filter((s) => s.items.length > 0);

  if (sections.length === 0) return null;

  return (
    <div className="flex flex-col gap-5">
      {sections.map((section) => (
        <div key={section.key}>
          <p className="label mb-3">
            {getLocalizedText(section.label, lang)}
          </p>
          <div className="flex flex-wrap gap-2">
            {section.items.map((item) => {
              const name = section.getName(item);
              if (!name) return null;
              return (
                <TagPill
                  key={item.id}
                  href={section.getHref(item)}
                  variant="outline"
                >
                  {name}
                </TagPill>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
