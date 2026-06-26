"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { t, ui } from "@/lib/i18n";
import FrameworkCard from "@/components/ui/FrameworkCard";

export default function FrameworksClient({ frameworks }) {
  const { lang } = useLanguage();
  const f = ui.frameworks;

  // Derive unique categories from data
  const allCategories = ["all", ...new Set(frameworks.map((fw) => fw.category?.en || ""))];
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = activeCategory === "all"
    ? frameworks
    : frameworks.filter((fw) => (fw.category?.en || "") === activeCategory);

  return (
    <main className="pt-20 pb-24">
      <div className="container-wide">

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <p className="label mb-4">{f.pageLabel[lang]}</p>
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-4">
            {f.pageTitle[lang]}
          </h1>
          <p className="text-muted-foreground max-w-xl">{f.pageSubtitle[lang]}</p>
        </motion.header>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-12">
          {allCategories.map((cat) => {
            const label = cat === "all"
              ? f.categories.all[lang]
              : t(f.categories[cat] || { zh: cat, en: cat }, lang);
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm border transition-colors duration-150 ${
                  activeCategory === cat
                    ? "bg-foreground text-background border-foreground"
                    : "bg-transparent text-muted-foreground border-border hover:border-foreground/40"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.map((fw, i) => (
              <FrameworkCard key={fw.id} framework={fw} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <p className="text-muted-foreground text-center py-16">
            {lang === "zh" ? "暂无相关框架" : "No frameworks in this category yet."}
          </p>
        )}
      </div>
    </main>
  );
}
