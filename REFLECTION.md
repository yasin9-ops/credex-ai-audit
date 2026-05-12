# Reflection

## 1. Hardest Bug

The hardest bug involved fetching AI-generated summaries from the API route. Initially the frontend received an empty response because the OpenAI environment variable was not loaded correctly. I debugged this by checking the server logs, verifying environment variables, and restarting the development server after creating the .env.local file.

## 2. Decision Reversal

Initially I planned to use AI for the entire audit recommendation process. Midway through development I switched to deterministic rule-based logic because the assignment specifically emphasized defensible financial reasoning.

## 3. What I Would Build in Week 2

I would add user authentication, Supabase storage, benchmarking dashboards, PDF exports, analytics tracking, and more advanced pricing intelligence.

## 4. AI Tool Usage

I used ChatGPT for debugging assistance, UI improvements, architecture planning, and OpenAI integration guidance. I did not fully trust AI-generated business logic without manually reviewing it. One example was an incorrect pricing assumption suggested for enterprise plans which I corrected after reviewing official pricing pages.

## 5. Self Ratings

- Discipline: 7/10 — worked consistently under a short deadline.
- Code Quality: 7/10 — focused on readability and modularity.
- Design Sense: 8/10 — prioritized clean modern UI.
- Problem Solving: 7/10 — debugged API and routing issues independently.
- Entrepreneurial Thinking: 6/10 — focused mainly on MVP execution.