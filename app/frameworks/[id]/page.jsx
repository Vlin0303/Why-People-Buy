import { notFound } from "next/navigation";
import { allFrameworkIds, getFrameworkById, resolveRelated } from "@/lib/relationships";
import FrameworkDetailClient from "./FrameworkDetailClient";

export async function generateStaticParams() {
  return allFrameworkIds().map((id) => ({ id }));
}

export async function generateMetadata({ params }) {
  const item = getFrameworkById(params.id);
  if (!item) return { title: "Not Found" };
  return {
    title: `${item.name?.en || item.name?.zh} — WPB Lab`,
    description: item.description?.en || "",
  };
}

export default function FrameworkDetailPage({ params }) {
  const item = getFrameworkById(params.id);
  if (!item) notFound();
  const related = resolveRelated(item);
  return <FrameworkDetailClient item={item} related={related} />;
}
