"use client";

import { useEffect, useState } from "react";
import { generateAudit } from "@/lib/auditEngine";

export default function ResultPage() {
    const [result, setResult] = useState<any>(null);
    const [summary, setSummary] = useState("");

    useEffect(() => {
        const runAudit = async () => {
            const data = JSON.parse(localStorage.getItem("audit") || "{}");

            const audit = generateAudit(
                data.tool,
                data.plan,
                Number(data.seats)
            );

            const finalData = {
                ...data,
                ...audit,
            };

            setResult(finalData);

            const response = await fetch("/api/summary", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(finalData),
            });

            const aiData = await response.json();

            setSummary(aiData.summary);
        };

        runAudit();
    }, []);

    if (!result) return null;

    return (
        <main className="min-h-screen bg-black text-white flex items-center justify-center p-6">
            <div className="w-full max-w-3xl bg-zinc-900 rounded-3xl p-8 shadow-2xl">
                <div className="mb-8">
                    <h1 className="text-5xl font-bold">
                        Audit Results
                    </h1>

                    <p className="text-zinc-400 mt-3">
                        Here's your AI spending optimization report.
                    </p>
                </div>

                <div className="grid gap-6">
                    <div className="bg-zinc-800 p-6 rounded-2xl">
                        <p className="text-zinc-400">
                            Current Tool
                        </p>

                        <h2 className="text-3xl font-bold mt-2">
                            {result.tool}
                        </h2>
                    </div>

                    <div className="bg-zinc-800 p-6 rounded-2xl">
                        <p className="text-zinc-400">
                            Recommendation
                        </p>

                        <h2 className="text-2xl font-bold text-green-400 mt-2">
                            {result.recommendation}
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-zinc-800 p-6 rounded-2xl">
                            <p className="text-zinc-400">
                                Monthly Savings
                            </p>

                            <h2 className="text-4xl font-bold mt-2">
                                ${result.savings}
                            </h2>
                        </div>

                        <div className="bg-zinc-800 p-6 rounded-2xl">
                            <p className="text-zinc-400">
                                Annual Savings
                            </p>

                            <h2 className="text-4xl font-bold mt-2">
                                ${result.annualSavings}
                            </h2>
                        </div>
                    </div>

                    <div className="bg-zinc-800 p-6 rounded-2xl">
                        <p className="text-zinc-400 mb-2">
                            AI Generated Summary
                        </p>

                        <p className="text-lg leading-relaxed">
                            {summary || "Generating summary..."}
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}