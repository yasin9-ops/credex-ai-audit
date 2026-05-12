"use client";

import { useState } from "react";

export default function AuditPage() {
    const [tool, setTool] = useState("");
    const [plan, setPlan] = useState("");
    const [spend, setSpend] = useState("");
    const [seats, setSeats] = useState("");

    const handleSubmit = () => {
        localStorage.setItem(
            "audit",
            JSON.stringify({ tool, plan, spend, seats })
        );

        window.location.href = "/result";
    };

    return (
        <main className="min-h-screen bg-black text-white p-8">
            <h1 className="text-4xl font-bold mb-8">
                AI Spend Audit
            </h1>

            <div className="max-w-xl space-y-4">
                <select
                    className="w-full p-3 rounded text-black"
                    onChange={(e) => setTool(e.target.value)}
                >
                    <option>Select Tool</option>
                    <option>ChatGPT</option>
                    <option>Claude</option>
                    <option>Cursor</option>
                    <option>GitHub Copilot</option>
                </select>

                <input
                    placeholder="Plan"
                    className="w-full p-3 rounded text-black"
                    onChange={(e) => setPlan(e.target.value)}
                />

                <input
                    placeholder="Monthly Spend"
                    type="number"
                    className="w-full p-3 rounded text-black"
                    onChange={(e) => setSpend(e.target.value)}
                />

                <input
                    placeholder="Number of Seats"
                    type="number"
                    className="w-full p-3 rounded text-black"
                    onChange={(e) => setSeats(e.target.value)}
                />

                <button
                    onClick={handleSubmit}
                    className="bg-white text-black px-6 py-3 rounded-xl font-semibold"
                >
                    Generate Audit
                </button>
            </div>
        </main>
    );
}