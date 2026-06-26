"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ui } from "@/lib/i18n";

export default function Footer() {
  const { lang } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="container-wide py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="text-sm font-semibold">WPB Lab</p>
          <p className="text-xs text-muted-foreground mt-1 max-w-xs">
            {ui.site.tagline[lang]}
          </p>
        </div>

        <nav className="flex flex-wrap gap-6">
          <Link href="/"           className="text-xs text-muted-foreground hover:text-foreground transition-colors">{ui.nav.dashboard[lang]}</Link>
          <Link href="/frameworks" className="text-xs text-muted-foreground hover:text-foreground transition-colors">{ui.nav.frameworks[lang]}</Link>
          <Link href="/search"     className="text-xs text-muted-foreground hover:text-foreground transition-colors">{ui.nav.search[lang]}</Link>
          <Link href="/about"      className="text-xs text-muted-foreground hover:text-foreground transition-colors">{ui.nav.about[lang]}</Link>
        </nav>

        <p className="text-xs text-muted-foreground">© {year} WPB Lab</p>
      </div>
    </footer>
  );
}
