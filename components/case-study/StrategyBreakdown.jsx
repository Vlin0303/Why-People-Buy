import AnimatedSection from "@/components/shared/AnimatedSection";

/**
 * StrategyBreakdown
 * Covers positioning, marketing channels, growth engine, and retention logic.
 */
export default function StrategyBreakdown({ strategy }) {
  const pillars = [
    {
      label: "Positioning",
      content: strategy.positioning,
    },
    {
      label: "Marketing Channels",
      content: strategy.channels,
    },
    {
      label: "Growth Engine",
      content: strategy.growthEngine,
    },
    {
      label: "Retention Logic",
      content: strategy.retention,
    },
  ];

  return (
    <section className="section-padding border-t border-border bg-muted">
      <div className="container-wide">
        <AnimatedSection className="mb-12">
          <p className="label mb-2">04 / Strategy Breakdown</p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight">
            The Strategic Architecture
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar, i) => (
            <AnimatedSection
              key={pillar.label}
              delay={i * 0.08}
              className="bg-white rounded-2xl p-8 border border-border"
            >
              <p className="label mb-4">{pillar.label}</p>
              <p className="text-[16px] text-neutral-700 leading-[1.8]">{pillar.content}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
