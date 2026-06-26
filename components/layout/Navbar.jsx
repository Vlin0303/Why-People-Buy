"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { ui } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { key: "dashboard",  href: "/" },
  { key: "frameworks", href: "/frameworks" },
  { key: "about",      href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { lang, setLang } = useLanguage();
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/92 backdrop-blur-md border-b border-border" : "bg-transparent"
      )}
    >
      <div className="container-wide flex items-center justify-between h-14">

        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none">
          <span className="text-sm font-semibold tracking-tight">WPB Lab</span>
          <span className="text-[10px] text-muted-foreground tracking-wide">
            Marketing Intelligence Lab
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map(({ key, href }) => (
            <Link
              key={key}
              href={href}
              className={cn(
                "text-sm transition-colors duration-150",
                isActive(href)
                  ? "text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {ui.nav[key][lang]}
            </Link>
          ))}
        </nav>

        {/* Right controls */}
        <div className="hidden md:flex items-center gap-4">
          {/* Search icon */}
          <Link
            href="/search"
            aria-label={ui.nav.search[lang]}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Search size={16} />
          </Link>

          {/* Language toggle */}
          <button
            onClick={() => setLang(lang === "en" ? "zh" : "en")}
            className="text-xs font-medium border border-border rounded-full px-3 py-1 hover:border-foreground transition-colors"
          >
            {lang === "en" ? "中文" : "EN"}
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="block w-5 h-px bg-foreground origin-center"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-5 h-px bg-foreground"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="block w-5 h-px bg-foreground origin-center"
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-border overflow-hidden"
          >
            <div className="container-wide py-5 flex flex-col gap-4">
              {NAV_LINKS.map(({ key, href }, i) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link href={href} className="text-base text-foreground">
                    {ui.nav[key][lang]}
                  </Link>
                </motion.div>
              ))}
              <div className="flex items-center gap-4 pt-2 border-t border-border">
                <Link href="/search" className="text-sm text-muted-foreground flex items-center gap-1.5">
                  <Search size={14} /> {ui.nav.search[lang]}
                </Link>
                <button
                  onClick={() => setLang(lang === "en" ? "zh" : "en")}
                  className="text-xs border border-border rounded-full px-3 py-1"
                >
                  {lang === "en" ? "中文" : "EN"}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
