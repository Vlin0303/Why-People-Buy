"use client";

import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import AnimatedSection from "@/components/shared/AnimatedSection";

/**
 * Custom tooltip for the radar chart
 */
function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    const { dimension, score } = payload[0].payload;
    return (
      <div className="bg-white border border-border rounded-xl px-4 py-3 shadow-lg">
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-1">
          {dimension}
        </p>
        <p className="text-2xl font-light">{score}</p>
        <p className="text-xs text-muted-foreground">/ 100</p>
      </div>
    );
  }
  return null;
}

/**
 * Score card for each individual dimension
 */
function ScoreCard({ dimension, score, index }) {
  return (
    <AnimatedSection delay={index * 0.05} className="flex items-center justify-between py-4 border-b border-border last:border-0">
      <div className="flex items-center gap-4">
        <span className="text-xs font-mono text-muted-foreground w-6">{String(index + 1).padStart(2, "0")}</span>
        <span className="text-sm font-medium">{dimension}</span>
      </div>
      <div className="flex items-center gap-4">
        {/* Progress bar */}
        <div className="w-24 h-1 bg-muted rounded-full overflow-hidden hidden sm:block">
          <div
            className="h-full bg-foreground rounded-full transition-all duration-700"
            style={{ width: `${score}%` }}
          />
        </div>
        <span className="text-sm font-light w-8 text-right">{score}</span>
      </div>
    </AnimatedSection>
  );
}

export default function BrandDNAScore({ dnaScores }) {
  return (
    <section className="section-padding border-t border-border bg-muted">
      <div className="container-wide">
        <AnimatedSection className="mb-12">
          <p className="label mb-2">02 / Brand DNA Score</p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight">
            Eight Dimensions
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Radar chart */}
          <AnimatedSection className="w-full">
            <div className="bg-white rounded-2xl p-8 border border-border">
              <ResponsiveContainer width="100%" height={380}>
                <RadarChart data={dnaScores} margin={{ top: 20, right: 30, bottom: 20, left: 30 }}>
                  <PolarGrid
                    gridType="polygon"
                    stroke="#e5e5e5"
                    strokeWidth={1}
                  />
                  <PolarAngleAxis
                    dataKey="dimension"
                    tick={{ fontSize: 11, fill: "#737373", fontWeight: 500 }}
                    tickLine={false}
                  />
                  <Radar
                    name="Score"
                    dataKey="score"
                    stroke="#0a0a0a"
                    fill="#0a0a0a"
                    fillOpacity={0.08}
                    strokeWidth={1.5}
                    dot={{ fill: "#0a0a0a", strokeWidth: 0, r: 3 }}
                  />
                  <Tooltip content={<CustomTooltip />} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </AnimatedSection>

          {/* Score list */}
          <AnimatedSection delay={0.2} className="w-full">
            <div className="bg-white rounded-2xl p-8 border border-border">
              <p className="label mb-6">Dimension Scores</p>
              {dnaScores.map((item, i) => (
                <ScoreCard
                  key={item.dimension}
                  dimension={item.dimension}
                  score={item.score}
                  index={i}
                />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
