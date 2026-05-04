import { notFound } from "next/navigation";
import { LIVE_OPPORTUNITIES } from "../../../data/mock";
import InvestmentDetailClient from "./InvestmentDetailClient";

export function generateStaticParams() {
  return LIVE_OPPORTUNITIES.map((op) => ({ id: op.id }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const opp = LIVE_OPPORTUNITIES.find((o) => o.id === params.id);
  if (!opp) return { title: "Not Found" };
  return {
    title: `${opp.name} — Invest on Kryptondo`,
    description: opp.tagline,
  };
}

export default function InvestmentDetailPage({ params }: { params: { id: string } }) {
  const opp = LIVE_OPPORTUNITIES.find((o) => o.id === params.id);
  if (!opp) notFound();
  return <InvestmentDetailClient opp={opp} />;
}
