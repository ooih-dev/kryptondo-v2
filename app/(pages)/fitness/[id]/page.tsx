import { notFound } from "next/navigation";
import { FITNESS_STUDIOS } from "../../../data/mock";
import FitnessDetailClient from "./FitnessDetailClient";

export function generateStaticParams() {
  return FITNESS_STUDIOS.map((s) => ({ id: s.id }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const studio = FITNESS_STUDIOS.find((s) => s.id === params.id);
  if (!studio) return { title: "Not Found" };
  return {
    title: `${studio.name} — Invest in ${studio.type} | Kryptondo`,
    description: studio.description,
  };
}

export default function FitnessDetailPage({ params }: { params: { id: string } }) {
  const studio = FITNESS_STUDIOS.find((s) => s.id === params.id);
  if (!studio) notFound();
  return <FitnessDetailClient studio={studio} />;
}
