import type { Metadata } from "next";
import DashboardClient from "./DashboardClient";

export const metadata: Metadata = {
  title: "Dashboard — Kryptondo",
  description: "Your personalised investment dashboard — matched opportunities based on your risk profile.",
};

export default function DashboardPage() {
  return <DashboardClient />;
}
