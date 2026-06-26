import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * TagPill — clickable tag chip.
 * If `href` is provided, renders as a link to the search page.
 * Variants: "default" | "outline" | "dark" | "muted"
 */
export default function TagPill({ children, href, variant = "default", className }) {
  const base = "inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium tracking-wide transition-colors duration-150";
  const variants = {
    default: "bg-muted text-muted-foreground border border-border hover:border-foreground/30",
    outline: "bg-transparent text-foreground border border-border hover:border-foreground",
    dark:    "bg-foreground text-background",
    muted:   "bg-muted text-muted-foreground",
  };
  const cls = cn(base, variants[variant], className);

  if (href) {
    return <Link href={href} className={cls}>{children}</Link>;
  }
  return <span className={cls}>{children}</span>;
}
