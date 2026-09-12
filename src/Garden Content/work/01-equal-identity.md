---
company: "Equal Identity"
role: "Software Engineer"
sector: "Fintech identity · RBI Account Aggregator framework"
period: "Dec 2024 — Present"
location: "Hyderabad"
order: 1
current: true
href: "https://equal.in"
---

Equal is the consumer-facing brand; **MoneyOne** is the working entity. $80M raised,
Prosus-backed, sitting on India's RBI-regulated Account Aggregator rails.

I was hired into infrastructure and ended up owning a wider surface than the JD
implied — observability, internal tooling, migration rails, and most recently a
company-wide agent harness that started life as an eval platform for an AI
call-assistant product.

**The thing I'm proudest of** is *Nexus* — the platform's first multi-tenant
queue-based notification router. Before it, notifications were called inline from
business logic and a single slow webhook could cascade into transaction drop-offs.
After it, the failure mode stopped existing — it now carries ~18M FI notifications
a month with zero drops.

**The thing with the biggest revenue lever** was running the live TSP migration for a
major brokerage end-to-end: 2M in-flight consents ported with zero rollbacks, moving
INR 4M MRR. The migration rails are reusable for the next enterprise switch.

**The thing I'm currently building** is a company-wide agent harness on Claude —
grounded in company and codebase context, reachable from Slack and Jira, human-gated
before writes. It serves engineering, sales, growth, and product: ~300 runs/week,
87% adoption org-wide, 90% of support threads triaged. It began as an internal
agent-evaluation harness and outgrew the brief.

Two Monthly Demo Awards along the way (Bulk Pipeline Testing Framework, DFM/TSP Router).
Supporting 15+ enterprise clients across production + UAT keeps me honest about which
problems are real.
