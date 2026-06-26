import PsychologyModule from "@/components/dashboard/PsychologyModule";
import BrandModule      from "@/components/dashboard/BrandModule";
import CampaignModule   from "@/components/dashboard/CampaignModule";

export const metadata = {
  title: "Why People Buy — Marketing Intelligence Lab",
  description:
    "A marketing intelligence lab decoding consumer psychology across China and North America.",
};

/**
 * Dashboard — the homepage.
 * Three stacked modules: Psychology (word spheres) → Brands → Campaigns.
 * All data comes from /data/*.js via each module component.
 */
export default function DashboardPage() {
  return (
    <main className="pt-14"> {/* offset for fixed navbar */}
      <PsychologyModule />
      <BrandModule />
      <CampaignModule />
    </main>
  );
}
