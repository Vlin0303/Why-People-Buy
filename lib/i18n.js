/**
 * INTERNATIONALIZATION (i18n)
 * ─────────────────────────────────────────────────────────────────
 * All static UI strings live here.
 * Components use: const { lang } = useLanguage()
 * Then: ui.nav.dashboard[lang]  or  t(item.name, lang)
 *
 * To add a new UI string: add it to the ui object below.
 * To add a new language: add a new key alongside zh/en everywhere.
 * ─────────────────────────────────────────────────────────────────
 */

/** Extract the correct language string from a bilingual object */
export function t(obj, lang = "en") {
  if (!obj) return "";
  if (typeof obj === "string") return obj;
  return obj[lang] || obj.en || obj.zh || "";
}

/** All static UI strings */
export const ui = {
  // ── Navigation ──────────────────────────────────────────────
  nav: {
    dashboard:  { zh: "首页",   en: "Dashboard" },
    frameworks: { zh: "营销框架", en: "Frameworks" },
    about:      { zh: "关于",   en: "About" },
    search:     { zh: "搜索",   en: "Search" },
    explore:    { zh: "探索",   en: "Explore" },
  },

  // ── Site identity ────────────────────────────────────────────
  site: {
    tagline: {
      zh: "解码消费决策背后的心理逻辑",
      en: "Decoding the psychology behind consumer decisions",
    },
    description: {
      zh: "分析品牌、营销事件与消费现象——跨越中国与北美两个市场",
      en: "Analyzing brands, campaigns, and cultural phenomena across China and North America",
    },
  },

  // ── Dashboard ────────────────────────────────────────────────
  dashboard: {
    psychologyModule: {
      label:    { zh: "消费心理图谱", en: "Consumer Psychology Map" },
      title:    { zh: "人们为什么买",  en: "Why People Buy" },
      subtitle: { zh: "点击任意关键词，探索其背后的品牌、事件与理论", en: "Click any keyword to explore its brands, campaigns, and frameworks" },
      chinaLabel:    { zh: "中国消费", en: "China Market" },
      naLabel:       { zh: "北美消费", en: "North America Market" },
      exploreChina:  { zh: "探索中国市场 →", en: "Explore China →" },
      exploreNA:     { zh: "探索北美市场 →", en: "Explore North America →" },
    },
    brandModule: {
      label:    { zh: "品牌研究",   en: "Brand Research" },
      title:    { zh: "品牌如何塑造选择", en: "How Brands Shape Choices" },
      viewAll:  { zh: "查看全部品牌 →", en: "View all brands →" },
    },
    campaignModule: {
      label:    { zh: "营销事件",   en: "Campaign Research" },
      title:    { zh: "什么让传播成为现象", en: "What Makes a Campaign a Phenomenon" },
      viewAll:  { zh: "查看全部事件 →", en: "View all campaigns →" },
    },
  },

  // ── Frameworks page ──────────────────────────────────────────
  frameworks: {
    pageLabel:   { zh: "营销框架",   en: "Marketing Frameworks" },
    pageTitle:   { zh: "思维工具库", en: "The Thinking Toolkit" },
    pageSubtitle: {
      zh: "从经典漏斗到消费者行为模型——每个框架都配有真实案例说明",
      en: "From classic funnels to consumer behavior models — each framework illustrated with real examples",
    },
    categories: {
      all:               { zh: "全部",       en: "All" },
      "Growth Marketing":{ zh: "增长营销",   en: "Growth Marketing" },
      "Brand Strategy":  { zh: "品牌策略",   en: "Brand Strategy" },
      "Consumer Behavior":{ zh: "消费者行为", en: "Consumer Behavior" },
      "Marketing Fundamentals": { zh: "营销基础", en: "Marketing Fundamentals" },
    },
    howToUse:    { zh: "如何使用", en: "How to Use" },
    practiceExample: { zh: "实战案例", en: "Practice Example" },
    coreIdeas:   { zh: "核心概念", en: "Core Ideas" },
  },

  // ── Search ───────────────────────────────────────────────────
  search: {
    placeholder: { zh: "搜索品牌、心理关键词、营销事件、框架…", en: "Search brands, psychology, campaigns, frameworks…" },
    resultsFor:  { zh: "搜索结果：", en: "Results for:" },
    noResults:   { zh: "未找到相关内容，请尝试其他关键词", en: "No results found. Try a different keyword." },
    groupLabels: {
      psychology: { zh: "消费心理", en: "Psychology" },
      brands:     { zh: "品牌",     en: "Brands" },
      campaigns:  { zh: "营销事件", en: "Campaigns" },
      frameworks: { zh: "营销框架", en: "Frameworks" },
      articles:   { zh: "文章",     en: "Articles" },
    },
  },

  // ── Common labels ────────────────────────────────────────────
  common: {
    readMore:       { zh: "阅读全文 →", en: "Read more →" },
    backToAll:      { zh: "← 返回", en: "← Back" },
    readingTime:    { zh: "阅读时长", en: "Reading time" },
    market:         { zh: "市场",   en: "Market" },
    tags:           { zh: "标签",   en: "Tags" },
    related:        { zh: "相关内容", en: "Related" },
    relatedPsych:   { zh: "相关心理机制", en: "Related Psychology" },
    relatedBrands:  { zh: "相关品牌",   en: "Related Brands" },
    relatedCampaigns:{ zh: "相关事件",  en: "Related Campaigns" },
    relatedFrameworks:{ zh: "相关框架", en: "Related Frameworks" },
    relatedArticles:{ zh: "相关文章",  en: "Related Articles" },
    china:          { zh: "中国",   en: "China" },
    northAmerica:   { zh: "北美",   en: "North America" },
    global:         { zh: "全球",   en: "Global" },
    comingSoon:     { zh: "即将上线", en: "Coming Soon" },
    enComingSoon:   { zh: "", en: "English version coming soon." },
    zhComingSoon:   { zh: "中文版即将上线", en: "" },
    industry:       { zh: "行业",   en: "Industry" },
    coreProducts:   { zh: "核心产品", en: "Core Products" },
    positioning:    { zh: "品牌定位", en: "Positioning" },
    targetAudience: { zh: "目标用户", en: "Target Audience" },
    businessModel:  { zh: "商业模式", en: "Business Model" },
    whyPeopleBuy:   { zh: "为什么人们购买", en: "Why People Buy It" },
    whatHappened:   { zh: "发生了什么", en: "What Happened" },
    whyItMattered:  { zh: "为什么重要", en: "Why It Mattered" },
    psychologyTriggered: { zh: "触发的心理机制", en: "Psychology Triggered" },
    strategicImplications: { zh: "战略启示", en: "Strategic Implications" },
    brand:          { zh: "品牌",   en: "Brand" },
    category:       { zh: "分类",   en: "Category" },
    minRead:        { zh: "分钟阅读", en: "min read" },
  },

  // ── About ────────────────────────────────────────────────────
  about: {
    pageLabel:  { zh: "关于本站", en: "About" },
    labTitle:   { zh: "WPB Lab", en: "WPB Lab" },
  },

  // ── Market labels ────────────────────────────────────────────
  markets: {
    china:        { zh: "中国",   en: "China" },
    northAmerica: { zh: "北美",   en: "North America" },
    global:       { zh: "全球",   en: "Global" },
  },
};

/** Article type display labels */
export const articleTypeLabels = {
  brand:       { zh: "品牌分析", en: "Brand Analysis" },
  campaign:    { zh: "事件分析", en: "Campaign Analysis" },
  psychology:  { zh: "消费心理", en: "Consumer Psychology" },
  framework:   { zh: "框架应用", en: "Framework" },
  research:    { zh: "研究洞察", en: "Research Insight" },
  market:      { zh: "市场观察", en: "Market Observation" },
};
