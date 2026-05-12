# 2. ARCHITECTURE.md

```md
# Architecture

## System Diagram

```mermaid
graph TD
A[User Form Input] --> B[Audit Engine]
B --> C[Audit Results]
C --> D[AI Summary API]
D --> E[OpenAI API]
C --> F[Frontend Dashboard]


Data Flow
    User enters AI spending details.
    Form data is stored in localStorage.
    Audit engine calculates optimization recommendations.
    Results page displays savings estimates.
    Results are sent to OpenAI API route.
    AI-generated summary is returned and displayed.
Stack Choice
    Next.js for full-stack React development.
    Tailwind CSS for fast responsive UI building.
    TypeScript for better maintainability.
    OpenAI API for personalized summaries.
    Vercel for zero-config deployment.
Scaling to 10k Audits/Day
    Move audit data storage to Supabase/Postgres.
    Add Redis caching.
    Add API rate limiting.
    Queue AI summary requests.
    Add analytics instrumentation.