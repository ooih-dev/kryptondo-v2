import { notFound } from "next/navigation";
import { PARTY_CLUBS } from "../../../data/mock";
import PartyDetailClient from "./PartyDetailClient";

export function generateStaticParams() {
  return PARTY_CLUBS.map((c) => ({ id: c.id }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const club = PARTY_CLUBS.find((c) => c.id === params.id);
  if (!club) return { title: "Not Found" };
  return {
    title: `${club.name} — Invest in ${club.type} | Kryptondo`,
    description: club.description,
  };
}

export default function PartyDetailPage({ params }: { params: { id: string } }) {
  const club = PARTY_CLUBS.find((c) => c.id === params.id);
  if (!club) notFound();
  return <PartyDetailClient club={club} />;
}
