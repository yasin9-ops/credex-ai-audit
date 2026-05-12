import Link from "next/link";

export default function Home() {
    return (
        <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
            <h1 className="text-5xl font-bold text-center">
                AI Spend Audit
            </h1>

            <p className="mt-6 text-lg text-gray-300 text-center max-w-2xl">
                Discover how much your startup is overspending on AI tools.
            </p>

            <Link
                href="/audit"
                className="mt-8 bg-white text-black px-6 py-3 rounded-xl font-semibold"
            >
                Start Free Audit
            </Link>
        </main>
    );
}