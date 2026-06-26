"use client";

import { useLanguage } from "@/context/LanguageContext";
import { ui } from "@/lib/i18n";
import { featuredBrands } from "@/lib/relationships";
import SectionHeader from "@/components/ui/SectionHeader";
import BrandCard from "@/components/ui/BrandCard";

export default function BrandModule() {
  const { lang } = useLanguage();
  const d = ui.dashboard.brandModule;
  const brands = featuredBrands();

  return (
    <section className="section-padding border-b border-border">
      <div className="container-wide">
        <SectionHeader
          label={d.label[lang]}
          title={d.title[lang]}
          viewAllHref="/search?type=brands"
          viewAllLabel={d.viewAll[lang]}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {brands.map((brand, i) => (
            <BrandCard key={brand.id} brand={brand} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
