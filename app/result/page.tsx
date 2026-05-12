"use client";

import { useEffect, useState } from "react";
import { generateAudit } from "@/lib/auditEngine";

export default function ResultPage() {
  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("audit") || "{}");

    const audit = generateAudit(
      data.tool,
      data.plan,
      Number(data.seats)
    );

    setResult({
      ...data,
      ...audit,
    });
  }, []);

  if (!result) return null;

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-8">
        Audit Results
      </h1>

      <div className="bg-zinc-900 p-6 rounded-2xl max-w-2xl">
        <p className="text-xl">
          Tool: {result.tool}
        </p>

        <p className="mt-4">
          Recommendation:
        </p>

        <p className="text-green-400 text-2xl font-bold">
          {result.recommendation}
        </p>

        <p className="mt-6 text-3xl font-bold">
          Monthly Savings: ${result.savings}
        </p>

        <p className="text-xl mt-2">
          Annual Savings: ${result.annualSavings}
        </p>
      </div>
    </main>
  );
}