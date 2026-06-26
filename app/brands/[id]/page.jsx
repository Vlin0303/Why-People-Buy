import { notFound } from "next/navigation";
import { allBrandIds, getBrandById, resolveRelated } from "@/lib/relationships";
import BrandDetailClient from "./BrandDetailClient";

export async function generateStaticParams() {
  return allBrandIds().map((id) => ({ id }));
}

export async function generateMetadata({ params }) {
  const item = getBrandById(params.id);
  if (!item) return { title: "Not Found" };
  return {
    title: `${item.name} — WPB Lab`,
    description: item.thesis?.en || item.description?.en || "",
  };
}

export default function BrandDetailPage({ params }) {
  const item = getBrandById(params.id);
  if (!item) notFound();
  const related = resolveRelated(item);
  return <BrandDetailClient item={item} related={related} />;
}
