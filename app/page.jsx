import Hero from "@/components/home/Hero";
import FeaturedCases from "@/components/home/FeaturedCases";
import FrameworkPreview from "@/components/home/FrameworkPreview";

/**
 * HOME PAGE
 * ─────────────────────────────────────────────
 * Three sections stack vertically:
 *   1. Hero — headline + CTAs
 *   2. Featured Cases — the three main case studies
 *   3. Framework Preview — Brand DNA Canvas intro
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedCases />
      <FrameworkPreview />
    </>
  );
}
