/**
 * CROSS-GRAPH SEARCH
 * ─────────────────────────────────────────────────────────────────
 * Searches across all collections simultaneously.
 * Results are grouped by type so the UI can render them separately.
 * Future: replace with an API/database full-text search call.
 * ─────────────────────────────────────────────────────────────────
 */

import { psychology } from "@/data/psychology";
import { brands }     from "@/data/brands";
import { campaigns }  from "@/data/campaigns";
import { frameworks } from "@/data/frameworks";
import { articles }   from "@/data/articles";

/** Check if a string field contains the query */
function matchStr(value, q) {
  if (!value || typeof value !== "string") return false;
  return value.toLowerCase().includes(q);
}

/** Check if a bilingual object matches */
function matchBilingual(obj, q) {
  if (!obj) return false;
  return matchStr(obj.zh, q) || matchStr(obj.en, q);
}

/** Check if any tag in an array matches */
function matchTags(tags, q) {
  if (!Array.isArray(tags)) return false;
  return tags.some((tag) => matchStr(tag, q));
}

/**
 * Search all collections for a query string.
 * Returns an object with arrays grouped by content type.
 *
 * Usage:
 *   const results = searchAll("apple")
 *   // { psychology: [...], brands: [...], ... }
 */
export function searchAll(query) {
  const q = (query || "").toLowerCase().trim();

  if (!q) {
    return { psychology: [], brands: [], campaigns: [], frameworks: [], articles: [] };
  }

  return {
    psychology: psychology.filter((p) =>
      matchBilingual(p.name, q) ||
      matchBilingual(p.description, q) ||
      matchBilingual(p.formationReasons, q) ||
      matchTags(p.tags, q)
    ),

    brands: brands.filter((b) =>
      matchStr(b.name, q) ||
      matchBilingual(b.industry, q) ||
      matchBilingual(b.thesis, q) ||
      matchBilingual(b.description, q) ||
      matchBilingual(b.coreProducts, q) ||
      matchTags(b.tags, q)
    ),

    campaigns: campaigns.filter((c) =>
      matchBilingual(c.title, q) ||
      matchBilingual(c.description, q) ||
      matchBilingual(c.whatHappened, q) ||
      matchBilingual(c.whyItMattered, q) ||
      matchTags(c.tags, q)
    ),

    frameworks: frameworks.filter((f) =>
      matchBilingual(f.name, q) ||
      matchBilingual(f.category, q) ||
      matchBilingual(f.description, q) ||
      matchBilingual(f.coreIdeas, q) ||
      matchTags(f.tags, q)
    ),

    articles: articles.filter((a) =>
      matchBilingual(a.title, q) ||
      matchBilingual(a.subtitle, q) ||
      matchBilingual(a.summary, q) ||
      matchBilingual(a.content, q) ||
      matchTags(a.tags, q)
    ),
  };
}

/** Total count across all result groups */
export function countResults(results) {
  return Object.values(results).reduce((sum, arr) => sum + arr.length, 0);
}
