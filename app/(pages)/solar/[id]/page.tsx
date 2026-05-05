import { notFound } from "next/navigation";
import { SOLAR_PROJECTS } from "../../../data/mock";
import SolarDetailClient from "./SolarDetailClient";

export function generateStaticParams() {
  return SOLAR_PROJECTS.map((s) => ({ id: s.id }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const project = SOLAR_PROJECTS.find((s) => s.id === params.id);
  if (!project) return { title: "Not Found" };
  return {
    title: `${project.name} — Invest in Solar Energy | Kryptondo`,
    description: project.description,
  };
}

export default function SolarDetailPage({ params }: { params: { id: string } }) {
  const project = SOLAR_PROJECTS.find((s) => s.id === params.id);
  if (!project) notFound();
  return <SolarDetailClient project={project} />;
}
