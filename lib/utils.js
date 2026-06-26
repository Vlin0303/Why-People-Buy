import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind classes without conflicts */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * getLocalizedText — the single canonical safe text extractor.
 *
 * Rules:
 *  - null / undefined / ""   → return ""
 *  - plain string             → return as-is
 *  - { zh, en } object        → return value[lang] || value.en || value.zh || ""
 *  - array                    → map each element through getLocalizedText, join with "\n"
 *  - anything else            → String(value)
 *
 * This function NEVER returns a non-string. Use it at every JSX render site.
 */
export function getLocalizedText(value, lang = "en") {
  if (value === null || value === undefined || value === "") return "";
  if (typeof value === "string") return value;
  if (Array.isArray(value)) {
    return value.map((v) => getLocalizedText(v, lang)).join("\n");
  }
  if (typeof value === "object") {
    // Bilingual object { zh: "...", en: "..." }
    const result = value[lang] || value.en || value.zh;
    // Guard: result itself might somehow be an object — recurse once
    if (result && typeof result === "object") return getLocalizedText(result, lang);
    return result || "";
  }
  return String(value);
}

/** Format a date string for display */
export function formatDate(dateStr, lang = "en") {
  if (!dateStr) return "";
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString(lang === "zh" ? "zh-CN" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return dateStr;
  }
}

/** Map market IDs to display labels */
export function marketLabel(market, lang = "en") {
  const labels = {
    china:        { zh: "中国",   en: "China" },
    northAmerica: { zh: "北美",   en: "North America" },
    global:       { zh: "全球",   en: "Global" },
  };
  return labels[market]?.[lang] || market;
}
