import { notFound } from "next/navigation";
import { Suspense } from "react";
import { CARS } from "../../../data/mock";
import CarDetailClient from "./CarDetailClient";

export function generateStaticParams() {
  return CARS.map((car) => ({ id: car.id }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const car = CARS.find((c) => c.id === params.id);
  if (!car) return { title: "Not Found" };
  return {
    title: `${car.year} ${car.make} ${car.model} — Invest on Kryptondo`,
    description: car.description,
  };
}

export default function CarDetailPage({ params }: { params: { id: string } }) {
  const car = CARS.find((c) => c.id === params.id);
  if (!car) notFound();
  return (
    <Suspense>
      <CarDetailClient car={car} />
    </Suspense>
  );
}
