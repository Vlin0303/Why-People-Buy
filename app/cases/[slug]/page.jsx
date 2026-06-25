import { notFound } from "next/navigation";
import Link from "next/link";
import { getCaseBySlug, getRelatedCases, cases } from "@/data/cases";
import BrandSnapshot from "@/components/case-study/BrandSnapshot";
import BrandDNAScore from "@/components/case-study/BrandDNAScore";
import ConsumerPsychology from "@/components/case-study/ConsumerPsychology";
import StrategyBreakdown from "@/components/case-study/StrategyBreakdown";
import CMOPerspective from "@/components/case-study/CMOPerspective";
import CaseCard from "@/components/cases/CaseCard";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Tag from "@/components/shared/Tag";

/**
 * generateStaticParams
 * Tells Next.js which slugs to pre-render at build time.
 * Add a new case in data/cases.js and it will automatically get a page.
 */
export async function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

/**
 * generateMetadata
 * Dynamic page title and description for each case study.
 */
export async function generateMetadata({ params }) {
  const caseData = getCaseBySlug(params.slug);
  if (!caseData) return {};
  return {
    title: `${caseData.brand} — Why People Buy`,
    description: caseData.thesis,
  };
}

export default function CaseStudyPage({ params }) {
  const caseData = getCaseBySlug(params.slug);

  // Show 404 if the slug doesn't exist
  if (!caseData) notFound();

  const { brand, category, thesis, tags, readingTime, snapshot, dnaScores, psychology, strategy, cmo } = caseData;
  const related = getRelatedCases(params.slug, 2);

  return (
    <article>
      {/* ─────────────────────────────────────────────
          HERO
      ───────────────────────────────────────────── */}
      <section className="pt-32 pb-24 border-b border-border">
        <div className="container-wide">

          {/* Breadcrumb */}
          <AnimatedSection className="flex items-center gap-2 mb-12 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <Link href="/cases" className="hover:text-foreground transition-colors">Cases</Link>
            <span>/</span>
            <span className="text-foreground">{brand}</span>
          </AnimatedSection>

          {/* Category + reading time */}
          <AnimatedSection delay={0.05} className="flex flex-wrap items-center gap-4 mb-8">
            <Tag variant="outline">{category}</Tag>
            <span className="text-xs text-muted-foreground">{readingTime}</span>
          </AnimatedSection>

          {/* Brand name — large display type */}
          <AnimatedSection delay={0.1}>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tight leading-none mb-10">
              {brand}
            </h1>
          </AnimatedSection>

          {/* Thesis — the one-sentence core argument */}
          <AnimatedSection delay={0.15} className="max-w-3xl">
            <p className="text-xl md:text-2xl text-neutral-600 font-light leading-relaxed italic border-l-2 border-foreground pl-6">
              {thesis}
            </p>
          </AnimatedSection>

          {/* Tags */}
          <AnimatedSection delay={0.2} className="flex flex-wrap gap-2 mt-10">
            {tags.map((tag) => (
              <Tag key={tag} variant="default">{tag}</Tag>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          CASE STUDY SECTIONS
          Each component is self-contained — reorder
          or remove any section freely.
      ───────────────────────────────────────────── */}

      {/* 01 — Brand Snapshot */}
      <BrandSnapshot snapshot={snapshot} />

      {/* 02 — Brand DNA Score (radar chart) */}
      <BrandDNAScore dnaScores={dnaScores} />

      {/* 03 — Consumer Psychology */}
      <ConsumerPsychology psychology={psychology} />

      {/* 04 — Strategy Breakdown */}
      <StrategyBreakdown strategy={strategy} />

      {/* 05 — CMO Perspective */}
      <CMOPerspective cmo={cmo} />

      {/* ─────────────────────────────────────────────
          06 — Related Case Studies
      ───────────────────────────────────────────── */}
      <section className="section-padding border-t border-border bg-muted">
        <div className="container-wide">
          <AnimatedSection className="mb-12">
            <p className="label mb-2">06 / Related Cases</p>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight">
              Continue Reading
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {related.map((c, i) => (
              <CaseCard key={c.slug} caseData={c} index={i} />
            ))}
          </div>

          <AnimatedSection delay={0.3} className="mt-12 text-center">
            <Link
              href="/cases"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Back to all cases
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </article>
  );
}
