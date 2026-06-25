import AnimatedSection from "@/components/shared/AnimatedSection";

/**
 * ConsumerPsychology
 * Answers the four core "why" questions about consumer behavior.
 */
export default function ConsumerPsychology({ psychology }) {
  const questions = [
    { q: "Why do people buy it?", a: psychology.whyBuy },
    { q: "What emotional need does it satisfy?", a: psychology.emotionalNeed },
    { q: "What cognitive bias does it trigger?", a: psychology.cognitiveBias },
    { q: "What social identity does it create?", a: psychology.socialIdentity },
  ];

  return (
    <section className="section-padding border-t border-border">
      <div className="container-wide">
        <AnimatedSection className="mb-12">
          <p className="label mb-2">03 / Consumer Psychology</p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight">
            Why People Really Buy
          </h2>
        </AnimatedSection>

        <div className="flex flex-col gap-0">
          {questions.map((item, i) => (
            <AnimatedSection
              key={item.q}
              delay={i * 0.1}
              className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6 md:gap-16 py-10 border-b border-border"
            >
              {/* Question */}
              <div>
                <span className="text-xs font-mono text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-sm font-medium text-foreground mt-2 leading-snug max-w-[220px]">
                  {item.q}
                </p>
              </div>

              {/* Answer */}
              <p className="text-[17px] text-neutral-700 leading-[1.8]">{item.a}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
