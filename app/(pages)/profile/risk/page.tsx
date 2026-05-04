import type { Metadata } from "next";
import RiskWizardClient from "./RiskWizardClient";

export const metadata: Metadata = {
  title: "Risk Profile Wizard — Kryptondo",
  description: "Discover your investor risk profile in 3 steps and get matched with the right investment opportunities.",
};

export default function RiskProfilePage() {
  return <RiskWizardClient />;
}
