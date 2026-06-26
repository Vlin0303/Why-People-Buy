import { notFound } from "next/navigation";
import { allCampaignIds, getCampaignById, resolveRelated } from "@/lib/relationships";
import CampaignDetailClient from "./CampaignDetailClient";

export async function generateStaticParams() {
  return allCampaignIds().map((id) => ({ id }));
}

export async function generateMetadata({ params }) {
  const item = getCampaignById(params.id);
  if (!item) return { title: "Not Found" };
  return {
    title: `${item.title?.en || item.title?.zh} — WPB Lab`,
    description: item.description?.en || item.description?.zh || "",
  };
}

export default function CampaignDetailPage({ params }) {
  const item = getCampaignById(params.id);
  if (!item) notFound();
  const related = resolveRelated(item);
  return <CampaignDetailClient item={item} related={related} />;
}
