"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ui } from "@/lib/i18n";

const content = {
  label:    { zh: "关于本站", en: "About" },
  title:    { zh: "Why People Buy", en: "Why People Buy" },
  subtitle: {
    zh: "一个关于消费行为的营销智识实验室",
    en: "A marketing intelligence lab for consumer behavior",
  },
  body: {
    zh: [
      "我在中国和北美都生活过，这让我得以近距离观察两个截然不同的消费文化。",
      "WPB Lab（Why People Buy）是我用来系统化理解消费心理的工具——它不是一个品牌案例库，而是一个观测站：品牌、营销事件、消费现象，都是观测消费行为的入口。",
      "每一个关键词、每一个品牌、每一个事件之间都存在连接。这个网站就是这些连接的可视化。",
      "我相信，最好的营销分析不来自于模板，而来自于真正好奇人为什么做这些决定。",
    ],
    en: [
      "Having lived in both China and North America, I've had a close look at two very different consumer cultures.",
      "WPB Lab (Why People Buy) is my framework for understanding consumer psychology systematically — not a brand case library, but an observation lab. Brands, campaigns, and cultural phenomena are all entry points into understanding behavior.",
      "Every keyword, every brand, every campaign is connected. This site is a visualization of those connections.",
      "I believe the best marketing analysis doesn't come from templates — it comes from genuine curiosity about why people make the decisions they make.",
    ],
  },
  pillars: {
    zh: [
      { label: "心理机制", desc: "消费行为背后的心理驱动力——跨越中美两个市场" },
      { label: "品牌研究", desc: "真实品牌如何将心理洞察转化为产品与传播策略" },
      { label: "营销事件", desc: "从现象级营销中提炼可迁移的策略启示" },
      { label: "营销框架", desc: "经典模型与理论的实战应用指南" },
    ],
    en: [
      { label: "Psychology", desc: "The psychological forces driving consumer behavior across both markets" },
      { label: "Brands",     desc: "How real brands translate psychological insight into strategy" },
      { label: "Campaigns",  desc: "Extracting transferable lessons from landmark marketing moments" },
      { label: "Frameworks", desc: "Practical application guides for classic marketing models" },
    ],
  },
  cta: {
    zh: "开始探索",
    en: "Start Exploring",
  },
};

export default function AboutClient() {
  const { lang } = useLanguage();

  return (
    <main className="pt-20 pb-24">
      <div className="container-wide max-w-3xl">

        {/* Hero */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <p className="label mb-4">{content.label[lang]}</p>
          <h1 className="text-6xl md:text-7xl font-light tracking-tight mb-4">
            {content.title[lang]}
          </h1>
          <p className="text-xl text-muted-foreground">{content.subtitle[lang]}</p>
        </motion.header>

        {/* Body */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-16 space-y-5"
        >
          {content.body[lang].map((para, i) => (
            <p key={i} className="text-[17px] text-neutral-600 leading-[1.85]">{para}</p>
          ))}
        </motion.div>

        {/* Four pillars */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-16"
        >
          {content.pillars[lang].map((pillar, i) => (
            <div
              key={i}
              className="border border-border rounded-2xl p-6"
            >
              <p className="text-sm font-medium mb-2">{pillar.label}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex justify-center"
        >
          <Link
            href="/"
            className="border border-foreground text-foreground rounded-full px-8 py-3 text-sm hover:bg-foreground hover:text-background transition-colors duration-200"
          >
            {content.cta[lang]}
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
