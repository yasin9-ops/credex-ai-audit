"use client";

import { useState } from "react";

export default function AuditPage() {
    const [tool, setTool] = useState("");
    const [plan, setPlan] = useState("");
    const [spend, setSpend] = useState("");
    const [seats, setSeats] = useState("");
    const [useCase, setUseCase] = useState("");

    const handleSubmit = () => {
        localStorage.setItem(
            "audit",
            JSON.stringify({
                tool,
                plan,
                spend,
                seats,
                useCase,
            })
        );

        window.location.href = "/result";
    };

    return (
        <main className="min-h-screen bg-black text-white flex items-center justify-center p-6">
            <div className="w-full max-w-2xl bg-zinc-900 p-8 rounded-3xl shadow-2xl">
                <h1 className="text-4xl font-bold mb-2">
                    AI Spend Audit
                </h1>

                <p className="text-zinc-400 mb-8">
                    Analyze your AI subscription costs and uncover savings opportunities.
                </p>

                <div className="space-y-5">
                    <div>
                        <label className="block mb-2 font-medium">
                            AI Tool
                        </label>

                        <select
                            className="w-full p-4 rounded-xl bg-zinc-800 border border-zinc-700"
                            onChange={(e) => setTool(e.target.value)}
                        >
                            <option>Select Tool</option>
                            <option>ChatGPT</option>
                            <option>Claude</option>
                            <option>Cursor</option>
                            <option>GitHub Copilot</option>
                        </select>
                    </div>

                    <div>
                        <label className="block mb-2 font-medium">
                            Current Plan
                        </label>

                        <input
                            placeholder="Example: Team Plan"
                            className="w-full p-4 rounded-xl bg-zinc-800 border border-zinc-700"
                            onChange={(e) => setPlan(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-medium">
                            Monthly Spend ($)
                        </label>

                        <input
                            type="number"
                            placeholder="150"
                            className="w-full p-4 rounded-xl bg-zinc-800 border border-zinc-700"
                            onChange={(e) => setSpend(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-medium">
                            Number of Seats
                        </label>

                        <input
                            type="number"
                            placeholder="5"
                            className="w-full p-4 rounded-xl bg-zinc-800 border border-zinc-700"
                            onChange={(e) => setSeats(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-medium">
                            Primary Use Case
                        </label>

                        <select
                            className="w-full p-4 rounded-xl bg-zinc-800 border border-zinc-700"
                            onChange={(e) => setUseCase(e.target.value)}
                        >
                            <option>Select Use Case</option>
                            <option>Coding</option>
                            <option>Writing</option>
                            <option>Research</option>
                            <option>Data Analysis</option>
                            <option>Mixed</option>
                        </select>
                    </div>

                    <button
                        onClick={handleSubmit}
                        className="w-full bg-white text-black py-4 rounded-xl font-bold hover:opacity-90 transition"
                    >
                        Generate Audit Report
                    </button>
                </div>
            </div>
        </main>
    );
}