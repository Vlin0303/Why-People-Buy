"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

/**
 * SectionHeader — reusable section label + title + optional "view all" link.
 * Props: label, title, viewAllHref, viewAllLabel
 */
export default function SectionHeader({ label, title, viewAllHref, viewAllLabel }) {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-12">
      <div>
        {label && <p className="label mb-2">{label}</p>}
        {title && <h2 className="text-3xl md:text-4xl font-light tracking-tight">{title}</h2>}
      </div>
      {viewAllHref && viewAllLabel && (
        <Link
          href={viewAllHref}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors self-start md:self-auto"
        >
          {viewAllLabel}
        </Link>
      )}
    </div>
  );
}
