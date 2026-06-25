import Link from "next/link";
import AnimatedSection from "@/components/shared/AnimatedSection";

export const metadata = {
  title: "Brand DNA Canvas — Why People Buy",
  description:
    "A seven-part framework for understanding why people buy, stay loyal, and evangelize brands.",
};

/**
 * The 7 dimensions of the Brand DNA Canvas.
 * Edit the descriptions here to update all Framework page content.
 */
const dimensions = [
  {
    number: "01",
    name: "Core Value",
    question: "What is the brand really selling?",
    description:
      "Every product has a surface value (a phone, a pair of leggings, a toy) and a deeper one (identity, aspiration, delight). The first step is to strip away the literal product and identify what the brand is actually selling at a psychological and social level. This is the foundation on which everything else rests.",
    examples: ["Apple sells identity, not phones", "Alo Yoga sells transformation, not activewear", "Labubu sells surprise, not toys"],
    icon: "◈",
  },
  {
    number: "02",
    name: "Consumer Need",
    question: "What emotional or functional need does it satisfy?",
    description:
      "People don't buy products — they hire them to do jobs. Some jobs are functional (I need to stay warm). Most valuable brands also satisfy an emotional or social job: I need to feel respected, I need to signal success, I need to belong. Mapping both levels reveals what really drives the purchase decision.",
    examples: ["Functional: communication device", "Emotional: creative self-expression", "Social: status and tribe membership"],
    icon: "◉",
  },
  {
    number: "03",
    name: "Psychological Trigger",
    question: "What biases, desires, or social signals does it activate?",
    description:
      "Human decisions are shaped by cognitive shortcuts, social pressures, and deep psychological drives. The most powerful brands don't just meet needs — they engineer triggers. Loss aversion. Social proof. Scarcity. The halo effect. Status signaling. Understanding the active mechanisms explains why rational-seeming consumers make irrational-seeming choices.",
    examples: ["Loss aversion: ecosystem switching costs", "Variable reward: blind box mechanics", "Social proof: celebrity endorsement at scale"],
    icon: "◎",
  },
  {
    number: "04",
    name: "Positioning",
    question: "Where does it sit in the market?",
    description:
      "Positioning is a choice about what you are — and equally, what you are not. It defines your competitive set, your price anchor, your aspirational reference points. A brand without clear positioning is invisible. A brand with over-broad positioning is forgettable. The best positioning feels inevitable in retrospect and impossible to imitate in practice.",
    examples: ["Apple owns premium consumer electronics", "Alo owns the yoga-to-street white space", "Labubu owns adult collectibles with emotional resonance"],
    icon: "◐",
  },
  {
    number: "05",
    name: "Growth Engine",
    question: "How does it acquire, retain, and monetize?",
    description:
      "Sustainable brands aren't built on one-time transactions. They build loops — where acquisition feeds retention, retention generates word-of-mouth, and word-of-mouth reduces future acquisition costs. Understanding the growth engine reveals whether a brand's success is compounding (durable) or linear (fragile).",
    examples: ["Apple: ecosystem lock-in makes switching painful", "Alo: cultural content keeps the brand in daily awareness", "Labubu: series mechanics drive collect-them-all behavior"],
    icon: "◑",
  },
  {
    number: "06",
    name: "Strategic Risk",
    question: "What could weaken the brand?",
    description:
      "Every brand sits on a set of assumptions. When those assumptions break, so does the brand. The risk analysis maps the assumptions that matter most: the consumer behavior that might shift, the competitor who could commoditize the category, the cultural trend that could turn the brand's strength into a liability.",
    examples: ["Apple: AI competitiveness gap", "Alo: over-expansion diluting identity", "Labubu: quality issues eroding collector trust"],
    icon: "◒",
  },
  {
    number: "07",
    name: "CMO Perspective",
    question: "What would I do next?",
    description:
      "The final layer is a strategic recommendation: three things I would protect, three things I would change, and one significant future opportunity. This moves the analysis from observation to judgment — from describing what is to prescribing what should be. It's where consumer insight becomes actionable strategy.",
    examples: ["Keep the strengths that compound", "Fix the gaps before competitors exploit them", "Pursue the white space before it fills"],
    icon: "◓",
  },
];

export default function FrameworkPage() {
  return (
    <div className="pt-16">

      {/* ─────────────────────────────────────────────
          PAGE HEADER
      ───────────────────────────────────────────── */}
      <section className="section-padding border-b border-border">
        <div className="container-wide max-w-4xl">
          <AnimatedSection>
            <p className="label mb-4">My Framework</p>
            <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-8">
              Brand DNA Canvas
            </h1>
            <p className="text-lg text-muted-foreground font-light leading-relaxed mb-6">
              Every brand breakdown I write follows this seven-part framework. It's designed
              to move systematically from what a brand appears to be on the surface, down
              through the strategic architecture, and into the psychological infrastructure
              that actually makes people buy.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              The framework is informed by consumer psychology, behavioral economics,
              competitive strategy, and growth marketing principles. It is not a template
              to fill in — it's a way of seeing.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          FRAMEWORK DIAGRAM (visual overview)
      ───────────────────────────────────────────── */}
      <AnimatedSection delay={0.1}>
        <div className="border-b border-border bg-muted py-12">
          <div className="container-wide">
            <div className="flex flex-wrap gap-3 items-center justify-center">
              {dimensions.map((dim, i) => (
                <div key={dim.number} className="flex items-center gap-3">
                  <div className="flex flex-col items-center gap-1 px-4 py-3 bg-white rounded-xl border border-border min-w-[100px] text-center">
                    <span className="text-lg">{dim.icon}</span>
                    <span className="text-xs font-mono text-muted-foreground">{dim.number}</span>
                    <span className="text-xs font-medium">{dim.name}</span>
                  </div>
                  {i < dimensions.length - 1 && (
                    <span className="text-border text-lg hidden sm:block">→</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ─────────────────────────────────────────────
          DIMENSION DEEP DIVES
      ───────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="flex flex-col">
            {dimensions.map((dim, i) => (
              <AnimatedSection
                key={dim.number}
                delay={i * 0.06}
                className="grid grid-cols-1 lg:grid-cols-[240px_1fr_280px] gap-8 lg:gap-16 py-14 border-b border-border"
              >
                {/* Left: number + name */}
                <div className="flex flex-row lg:flex-col gap-4 lg:gap-2">
                  <span className="text-xs font-mono text-muted-foreground">{dim.number}</span>
                  <div>
                    <h3 className="text-xl font-medium">{dim.name}</h3>
                    <p className="text-sm text-muted-foreground italic mt-1">{dim.question}</p>
                  </div>
                </div>

                {/* Center: description */}
                <p className="text-[16px] text-neutral-700 leading-[1.85]">{dim.description}</p>

                {/* Right: examples */}
                <div className="bg-muted rounded-xl p-6">
                  <p className="label mb-4">Examples from cases</p>
                  <ul className="flex flex-col gap-3">
                    {dim.examples.map((ex, j) => (
                      <li key={j} className="flex gap-2 text-sm text-neutral-600">
                        <span className="text-border mt-1">—</span>
                        <span>{ex}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          CTA — See the framework in action
      ───────────────────────────────────────────── */}
      <AnimatedSection>
        <section className="section-padding bg-foreground text-background">
          <div className="container-wide text-center max-w-2xl mx-auto">
            <p className="text-xs font-medium tracking-widest uppercase text-neutral-400 mb-6">
              See It Applied
            </p>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
              Framework meets reality
            </h2>
            <p className="text-neutral-400 leading-relaxed mb-10">
              Every case study in the library applies the Brand DNA Canvas in full.
              See how the seven dimensions play out across consumer electronics, lifestyle apparel,
              and collectible culture.
            </p>
            <Link
              href="/cases"
              className="inline-flex items-center gap-2 px-8 py-4 border border-neutral-700 text-background text-sm font-medium rounded-full hover:bg-white hover:text-foreground transition-all duration-200"
            >
              Read the Cases
              <span>→</span>
            </Link>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
