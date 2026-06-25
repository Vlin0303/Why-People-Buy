import Link from "next/link";
import AnimatedSection from "@/components/shared/AnimatedSection";

// The 7 Brand DNA Canvas dimensions
const dimensions = [
  {
    number: "01",
    name: "Core Value",
    description: "What is the brand really selling? Strip away the product and find the underlying promise.",
  },
  {
    number: "02",
    name: "Consumer Need",
    description: "What emotional or functional need does it satisfy? Map the rational and the irrational.",
  },
  {
    number: "03",
    name: "Psychological Trigger",
    description: "What biases, desires, or social signals does it activate? Find the invisible hand.",
  },
  {
    number: "04",
    name: "Positioning",
    description: "Where does it sit in the market? What does it mean to own that space — and what does it cost?",
  },
  {
    number: "05",
    name: "Growth Engine",
    description: "How does it acquire, retain, and monetize users? Follow the money and the loop.",
  },
  {
    number: "06",
    name: "Strategic Risk",
    description: "What could weaken the brand? Find the assumptions that, if broken, unwind everything.",
  },
  {
    number: "07",
    name: "CMO Perspective",
    description: "What would I do next? Three things I'd keep, three I'd change, one big opportunity.",
  },
];

export default function FrameworkPreview() {
  return (
    <section className="section-padding bg-muted">
      <div className="container-wide">

        {/* Header */}
        <AnimatedSection className="max-w-2xl mb-16">
          <p className="label mb-3">My Framework</p>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
            Brand DNA Canvas
          </h2>
          <p className="text-muted-foreground text-lg font-light leading-relaxed">
            Every brand breakdown I write follows this seven-part framework. It
            moves from what a brand appears to be, down to the psychological
            infrastructure that actually makes people buy.
          </p>
        </AnimatedSection>

        {/* Framework grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {dimensions.map((dim, i) => (
            <AnimatedSection
              key={dim.number}
              delay={i * 0.06}
              className="bg-muted p-8 hover:bg-white transition-colors duration-300 group"
            >
              <p className="text-xs font-mono text-muted-foreground mb-4">{dim.number}</p>
              <h3 className="text-lg font-medium mb-3 group-hover:text-foreground transition-colors">
                {dim.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {dim.description}
              </p>
            </AnimatedSection>
          ))}

          {/* CTA cell (fills the 7th slot gap in a 3-col grid) */}
          <AnimatedSection
            delay={0.42}
            className="bg-foreground p-8 flex flex-col justify-between"
          >
            <p className="text-sm text-neutral-400 leading-relaxed mb-8">
              See the full framework explained, with application examples from each case study.
            </p>
            <Link
              href="/framework"
              className="inline-flex items-center gap-2 text-background text-sm font-medium hover:gap-4 transition-all duration-200"
            >
              Explore Framework
              <span>→</span>
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
