import Link from "next/link";
import CaseCard from "@/components/cases/CaseCard";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { cases } from "@/data/cases";

export default function FeaturedCases() {
  const featured = cases.filter((c) => c.featured);

  return (
    <section className="section-padding border-t border-border">
      <div className="container-wide">

        {/* Section header */}
        <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <div>
            <p className="label mb-3">Case Studies</p>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight">
              Featured Analysis
            </h2>
          </div>
          <Link
            href="/cases"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline self-start md:self-auto pb-px"
          >
            View all cases →
          </Link>
        </AnimatedSection>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((c, i) => (
            <CaseCard key={c.slug} caseData={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
