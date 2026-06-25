import Link from "next/link";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Tag from "@/components/shared/Tag";

export const metadata = {
  title: "About — Why People Buy",
  description:
    "Strategic profile: combining business analytics, market research, and consumer psychology.",
};

// ─────────────────────────────────────────────
// DATA — edit these to update your profile
// ─────────────────────────────────────────────

const education = [
  {
    school: "Duke University",
    degree: "Master of Quantitative Management: Business Analytics",
    location: "Durham, NC",
    note: "Fuqua School of Business",
  },
  {
    school: "University of Nottingham Ningbo China",
    degree: "BSc Finance, Accounting and Management",
    location: "Ningbo, China",
    note: "First-class honours equivalent",
  },
];

const experiences = [
  {
    company: "CITIC Securities",
    role: "Research Analyst",
    theme: "Industry Research",
    description:
      "Produced equity research on China's EV industry — mapping competitive dynamics, consumer adoption curves, and brand positioning across the rapidly shifting landscape of electric vehicles.",
    tags: ["Equity Research", "EV Industry", "Consumer Trends"],
  },
  {
    company: "Daxue Consulting",
    role: "Market Research Consultant",
    theme: "Market Intelligence",
    description:
      "Delivered market positioning and competitive analysis for international clients entering the China market. Synthesised consumer surveys, retail data, and digital signals into actionable strategic recommendations.",
    tags: ["Market Positioning", "Competitive Analysis", "China Market"],
  },
  {
    company: "GLG (Gerson Lehrman Group)",
    role: "Network Member",
    theme: "Cross-Industry Research",
    description:
      "Provided primary research intelligence across multiple sectors to institutional clients — bridging quantitative data with qualitative consumer and market insight.",
    tags: ["Primary Research", "Expert Network", "Multi-sector"],
  },
  {
    company: "Duke Fuqua — Client Project",
    role: "Strategy Consultant",
    theme: "Growth Analysis",
    description:
      "Led consumer behaviour research for a sports organisation seeking to convert passive fans into active participants. Applied behavioural frameworks to identify barriers, triggers, and growth levers.",
    tags: ["Consumer Behaviour", "Conversion Strategy", "Sports Marketing"],
  },
  {
    company: "Ningbo Seago Overseas",
    role: "Digital Marketing Analyst",
    theme: "Digital Strategy",
    description:
      "Analysed digital marketing funnels across international e-commerce channels — identifying drop-off points, optimising messaging, and improving conversion across paid and organic acquisition.",
    tags: ["Digital Marketing", "Funnel Analysis", "E-commerce"],
  },
];

const capabilities = [
  "Consumer Psychology",
  "Market Research",
  "Brand Strategy",
  "Competitive Analysis",
  "Growth Marketing",
  "Data Analysis",
  "Consumer Insights",
  "Strategic Frameworks",
  "Business Development",
  "Behavioural Economics",
];

export default function AboutPage() {
  return (
    <div className="pt-16">

      {/* ─────────────────────────────────────────────
          STRATEGIC PROFILE HEADER
      ───────────────────────────────────────────── */}
      <section className="section-padding border-b border-border">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            <AnimatedSection>
              <p className="label mb-4">Strategic Profile</p>
              <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-8 leading-tight">
                I study why people
                <br />
                <span className="italic">choose brands.</span>
              </h1>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                I combine business analytics, market research, and consumer psychology
                to understand why people choose brands — and how brands can earn and
                keep that choice.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.15} className="lg:pt-8">
              <div className="bg-muted rounded-2xl p-8 border border-border">
                <p className="label mb-6">Core Capabilities</p>
                <div className="flex flex-wrap gap-2">
                  {capabilities.map((cap) => (
                    <Tag key={cap} variant="outline">{cap}</Tag>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          PERSPECTIVE — not a bio, a point of view
      ───────────────────────────────────────────── */}
      <section className="section-padding border-b border-border">
        <div className="container-wide">
          <AnimatedSection className="max-w-3xl mx-auto">
            <p className="label mb-8 text-center">My Perspective</p>
            <blockquote className="text-2xl md:text-3xl font-light leading-relaxed text-center italic text-neutral-700">
              "Most marketing analysis stops at what people do. I'm more interested
              in why — the psychological, social, and cultural forces that make a
              brand feel necessary rather than optional."
            </blockquote>
          </AnimatedSection>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          EXPERIENCE — themed, not chronological
      ───────────────────────────────────────────── */}
      <section className="section-padding border-b border-border">
        <div className="container-wide">
          <AnimatedSection className="mb-16">
            <p className="label mb-3">Experience</p>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight">
              Where I've Applied This Thinking
            </h2>
          </AnimatedSection>

          <div className="flex flex-col">
            {experiences.map((exp, i) => (
              <AnimatedSection
                key={exp.company}
                delay={i * 0.08}
                className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 md:gap-12 py-10 border-b border-border"
              >
                {/* Left: company + theme */}
                <div>
                  <p className="text-sm font-medium">{exp.company}</p>
                  <p className="text-xs text-muted-foreground mt-1">{exp.role}</p>
                  <div className="mt-3">
                    <Tag variant="default">{exp.theme}</Tag>
                  </div>
                </div>

                {/* Right: description + tags */}
                <div>
                  <p className="text-[16px] text-neutral-700 leading-[1.8] mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="text-xs text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          EDUCATION
      ───────────────────────────────────────────── */}
      <section className="section-padding border-b border-border bg-muted">
        <div className="container-wide">
          <AnimatedSection className="mb-12">
            <p className="label mb-3">Education</p>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight">Academic Foundation</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, i) => (
              <AnimatedSection key={edu.school} delay={i * 0.1} className="bg-white rounded-2xl p-8 border border-border">
                <p className="label mb-4">{edu.note}</p>
                <h3 className="text-xl font-medium mb-2">{edu.school}</h3>
                <p className="text-sm text-neutral-700 mb-2">{edu.degree}</p>
                <p className="text-xs text-muted-foreground">{edu.location}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          CTA — link to work
      ───────────────────────────────────────────── */}
      <AnimatedSection>
        <section className="section-padding">
          <div className="container-wide text-center max-w-xl mx-auto">
            <p className="label mb-6">See the Work</p>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">
              The best way to understand how I think is to read the case studies.
            </h2>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/cases"
                className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background text-sm font-medium rounded-full hover:bg-neutral-800 transition-all duration-200"
              >
                Explore Cases →
              </Link>
              <Link
                href="/framework"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground text-sm font-medium rounded-full hover:border-foreground transition-all duration-200"
              >
                View Framework
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
