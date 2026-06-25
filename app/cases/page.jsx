import CaseCard from "@/components/cases/CaseCard";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { cases } from "@/data/cases";

export const metadata = {
  title: "Case Library — Why People Buy",
  description: "Brand breakdowns through consumer psychology, market strategy, and growth logic.",
};

export default function CasesPage() {
  return (
    <div className="pt-16">
      {/* Page header */}
      <section className="section-padding border-b border-border">
        <div className="container-wide">
          <AnimatedSection>
            <p className="label mb-4">All Cases</p>
            <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-6 max-w-2xl">
              Case Library
            </h1>
            <p className="text-muted-foreground text-lg font-light max-w-xl leading-relaxed">
              Each breakdown follows the Brand DNA Canvas — moving from surface
              positioning down to the psychological infrastructure that makes
              people buy, stay, and evangelize.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats bar */}
      <AnimatedSection delay={0.1}>
        <div className="border-b border-border">
          <div className="container-wide py-6 flex flex-wrap gap-8">
            <div>
              <p className="text-2xl font-light">{cases.length}</p>
              <p className="label mt-1">Brands Analysed</p>
            </div>
            <div className="w-px bg-border self-stretch" />
            <div>
              <p className="text-2xl font-light">7</p>
              <p className="label mt-1">Framework Dimensions</p>
            </div>
            <div className="w-px bg-border self-stretch" />
            <div>
              <p className="text-2xl font-light">3</p>
              <p className="label mt-1">Industries Covered</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Cases grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.map((c, i) => (
              <CaseCard key={c.slug} caseData={c} index={i} />
            ))}
          </div>

          {/* Coming soon placeholder */}
          <AnimatedSection delay={0.3} className="mt-6">
            <div className="border border-dashed border-border rounded-2xl p-8 flex flex-col items-center justify-center text-center gap-3 min-h-[200px]">
              <p className="label">Coming Soon</p>
              <p className="text-muted-foreground text-sm max-w-xs">
                New breakdowns added regularly. Next: Nike, Duolingo, Oatly.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
