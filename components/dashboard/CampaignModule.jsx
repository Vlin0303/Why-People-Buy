"use client";

import { useLanguage } from "@/context/LanguageContext";
import { ui } from "@/lib/i18n";
import { featuredCampaigns } from "@/lib/relationships";
import SectionHeader from "@/components/ui/SectionHeader";
import CampaignCard from "@/components/ui/CampaignCard";

export default function CampaignModule() {
  const { lang } = useLanguage();
  const d = ui.dashboard.campaignModule;
  const campaigns = featuredCampaigns();

  return (
    <section className="section-padding">
      <div className="container-wide">
        <SectionHeader
          label={d.label[lang]}
          title={d.title[lang]}
          viewAllHref="/search?type=campaigns"
          viewAllLabel={d.viewAll[lang]}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {campaigns.map((campaign, i) => (
            <CampaignCard key={campaign.id} campaign={campaign} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
