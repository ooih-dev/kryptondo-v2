import { notFound } from "next/navigation";
import { Suspense } from "react";
import { MEDICAL_SPVS } from "../../../data/mock";
import MedicalDetailClient from "./MedicalDetailClient";

export function generateStaticParams() {
  return MEDICAL_SPVS.map((spv) => ({ id: spv.id }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const spv = MEDICAL_SPVS.find((s) => s.id === params.id);
  if (!spv) return { title: "Not Found" };
  return {
    title: `${spv.name} — Medical Recruiting SPV | Kryptondo`,
    description: spv.description,
  };
}

export default function MedicalDetailPage({ params }: { params: { id: string } }) {
  const spv = MEDICAL_SPVS.find((s) => s.id === params.id);
  if (!spv) notFound();
  return (
    <Suspense>
      <MedicalDetailClient spv={spv} />
    </Suspense>
  );
}
