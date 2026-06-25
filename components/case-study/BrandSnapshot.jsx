import AnimatedSection from "@/components/shared/AnimatedSection";

/**
 * BrandSnapshot
 * Displays the four quick-reference facts about a brand:
 * industry, audience, business model, and positioning.
 */
export default function BrandSnapshot({ snapshot }) {
  const fields = [
    { label: "Industry", value: snapshot.industry },
    { label: "Target Audience", value: snapshot.targetAudience },
    { label: "Business Model", value: snapshot.businessModel },
    { label: "Competitive Positioning", value: snapshot.positioning },
  ];

  return (
    <section className="section-padding border-t border-border">
      <div className="container-wide">
        <AnimatedSection className="mb-12">
          <p className="label mb-2">01 / Brand Snapshot</p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight">Quick Reference</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {fields.map((field, i) => (
            <AnimatedSection key={field.label} delay={i * 0.08} className="bg-white p-8">
              <p className="label mb-3">{field.label}</p>
              <p className="text-base text-neutral-700 leading-relaxed">{field.value}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
