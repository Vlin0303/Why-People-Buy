/**
 * RELATIONSHIP RESOLVERS
 * ─────────────────────────────────────────────────────────────────
 * These functions look up related items by ID across collections.
 * Today: reads from local data files.
 * Future: replace imports with API calls — components stay unchanged.
 * ─────────────────────────────────────────────────────────────────
 */

import { psychology } from "@/data/psychology";
import { brands }     from "@/data/brands";
import { campaigns }  from "@/data/campaigns";
import { frameworks } from "@/data/frameworks";
import { articles }   from "@/data/articles";

// ── Generic lookup ───────────────────────────────────────────────

function getByIds(ids = [], collection = []) {
  if (!ids || ids.length === 0) return [];
  return collection.filter((item) => ids.includes(item.id));
}

// ── Named resolvers ──────────────────────────────────────────────

export const getPsychologyItems   = (ids) => getByIds(ids, psychology);
export const getBrandItems        = (ids) => getByIds(ids, brands);
export const getCampaignItems     = (ids) => getByIds(ids, campaigns);
export const getFrameworkItems    = (ids) => getByIds(ids, frameworks);
export const getArticleItems      = (ids) => getByIds(ids, articles);

/** Single-item lookups */
export const getPsychologyById = (id) => psychology.find((p) => p.id === id) || null;
export const getBrandById      = (id) => brands.find((b) => b.id === id) || null;
export const getCampaignById   = (id) => campaigns.find((c) => c.id === id) || null;
export const getFrameworkById  = (id) => frameworks.find((f) => f.id === id) || null;
export const getArticleById    = (id) => articles.find((a) => a.id === id) || null;

/** All IDs for static route generation */
export const allPsychologyIds  = () => psychology.map((p) => p.id);
export const allBrandIds       = () => brands.map((b) => b.id);
export const allCampaignIds    = () => campaigns.map((c) => c.id);
export const allFrameworkIds   = () => frameworks.map((f) => f.id);
export const allArticleIds     = () => articles.map((a) => a.id);

/** Featured items */
export const featuredBrands    = () => brands.filter((b) => b.featured);
export const featuredCampaigns = () => campaigns.filter((c) => c.featured);
export const featuredArticles  = () => articles.filter((a) => a.featured);
export const featuredFrameworks= () => frameworks.filter((f) => f.featured);

/**
 * Build a "related content" object for any item.
 * Pass the item's relation ID arrays and get back resolved objects.
 */
export function resolveRelated(item) {
  return {
    psychology: getPsychologyItems(
      item.relatedPsychologyIds || item.psychologyIds || []
    ),
    brands:     getBrandItems(
      item.relatedBrandIds || item.brandIds || []
    ),
    campaigns:  getCampaignItems(
      item.relatedCampaignIds || item.campaignIds || []
    ),
    frameworks: getFrameworkItems(
      item.relatedFrameworkIds || item.frameworkIds || []
    ),
    articles:   getArticleItems(
      item.relatedArticleIds || item.articleIds || []
    ),
  };
}
