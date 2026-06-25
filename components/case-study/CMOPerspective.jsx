import AnimatedSection from "@/components/shared/AnimatedSection";

/**
 * CMOPerspective
 * If I Were the CMO section: 3 keeps, 3 improvements, 1 big opportunity.
 */
export default function CMOPerspective({ cmo }) {
  return (
    <section className="section-padding border-t border-border">
      <div className="container-wide">
        <AnimatedSection className="mb-12">
          <p className="label mb-2">05 / CMO Perspective</p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight">
            If I Were the CMO
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* What I'd keep */}
          <AnimatedSection delay={0} className="bg-white rounded-2xl p-8 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-neutral-900" />
              <p className="label">What I Would Keep</p>
            </div>
            <ul className="flex flex-col gap-5">
              {cmo.keep.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-xs font-mono text-muted-foreground mt-1 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm text-neutral-700 leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* What I'd improve */}
          <AnimatedSection delay={0.1} className="bg-white rounded-2xl p-8 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-neutral-400" />
              <p className="label">What I Would Improve</p>
            </div>
            <ul className="flex flex-col gap-5">
              {cmo.improve.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-xs font-mono text-muted-foreground mt-1 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm text-neutral-700 leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Big opportunity */}
          <AnimatedSection
            delay={0.2}
            className="bg-foreground text-background rounded-2xl p-8 flex flex-col justify-between"
          >
            <div>
              <p className="text-xs font-medium tracking-widest uppercase text-neutral-400 mb-6">
                Future Opportunity
              </p>
              <p className="text-[16px] leading-[1.8] text-neutral-200">
                {cmo.opportunity}
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-neutral-700">
              <p className="text-xs text-neutral-500">Strategic outlook</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
