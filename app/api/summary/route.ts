import OpenAI from "openai";
import { NextResponse } from "next/server";

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const prompt = `
    Generate a short AI spend audit summary.

    Tool: ${body.tool}
    Plan: ${body.plan}
    Seats: ${body.seats}
    Savings: ${body.savings}

    Keep it professional and under 100 words.
    `;

        const response = await client.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "user",
                    content: prompt,
                },
            ],
        });

        return NextResponse.json({
            summary: response.choices[0].message.content,
        });
    } catch (error) {
        return NextResponse.json({
            summary:
                "Your company may reduce AI software costs by optimizing subscriptions and avoiding unnecessary enterprise plans.",
        });
    }
}