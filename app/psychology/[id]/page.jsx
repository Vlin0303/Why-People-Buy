import { notFound } from "next/navigation";
import { allPsychologyIds, getPsychologyById, resolveRelated } from "@/lib/relationships";
import PsychologyDetailClient from "./PsychologyDetailClient";

export async function generateStaticParams() {
  return allPsychologyIds().map((id) => ({ id }));
}

export async function generateMetadata({ params }) {
  const item = getPsychologyById(params.id);
  if (!item) return { title: "Not Found" };
  return {
    title: `${item.name.en} / ${item.name.zh} — WPB Lab`,
    description: item.description?.en || "",
  };
}

export default function PsychologyDetailPage({ params }) {
  const item = getPsychologyById(params.id);
  if (!item) notFound();
  const related = resolveRelated(item);
  return <PsychologyDetailClient item={item} related={related} />;
}
