import { notFound } from "next/navigation";
import { EV_CHARGING_STATIONS } from "../../../data/mock";
import EVChargingDetailClient from "./EVChargingDetailClient";

export function generateStaticParams() {
  return EV_CHARGING_STATIONS.map((s) => ({ id: s.id }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const station = EV_CHARGING_STATIONS.find((s) => s.id === params.id);
  if (!station) return { title: "Not Found" };
  return {
    title: `${station.name} — Invest in EV Charging | Kryptondo`,
    description: station.description,
  };
}

export default function EVChargingDetailPage({ params }: { params: { id: string } }) {
  const station = EV_CHARGING_STATIONS.find((s) => s.id === params.id);
  if (!station) notFound();
  return <EVChargingDetailClient station={station} />;
}
