export function generateAudit(tool: string, plan: string, seats: number) {
    let recommendation = "";
    let savings = 0;

    if (tool === "ChatGPT" && seats <= 2) {
        recommendation = "Switch to ChatGPT Plus";
        savings = 40;
    }

    if (tool === "Cursor" && seats === 1) {
        recommendation = "Use Cursor Pro instead of Business";
        savings = 20;
    }

    if (!recommendation) {
        recommendation = "Your current setup looks optimized.";
    }

    return {
        recommendation,
        savings,
        annualSavings: savings * 12,
    };
}