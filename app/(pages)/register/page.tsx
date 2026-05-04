import type { Metadata } from "next";
import { Suspense } from "react";
import RegisterClient from "./RegisterClient";

export const metadata: Metadata = {
  title: "Create Account — Kryptondo",
  description: "Join Kryptondo and start investing in local businesses from €100.",
};

export default function RegisterPage() {
  return (
    <Suspense>
      <RegisterClient />
    </Suspense>
  );
}
