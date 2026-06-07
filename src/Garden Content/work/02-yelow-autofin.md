---
company: "Yelow Autofin"
role: "Founding Engineer"
sector: "Lending fintech (Yelow Payments Pvt Ltd)"
period: "May 2024 — Nov 2024"
location: "Remote"
order: 2
---

Six months, one product, INR 20M disbursed in the first ten days post-launch.

The brief was: build the underwriting and disbursement stack for an auto-loan product
that lenders could plug into. The constraint was that I was the engineering team.

I designed the flagship lending gateway as a 3-API BFF — small enough that any
frontend team could integrate in a day, modular enough that we could swap underwriting
rules without touching the surface. The rule engine itself sat on **Django + Gorules
(Rust)** for ROI, loan-amount and parameter logic; the Rust core gave us deterministic
evaluation and Python gave us the iteration speed founders need.

The infrastructure I'm most quietly proud of is an **internal CLI** that cut feature
delivery time by 45%. Nobody asked for it. It was a Friday-afternoon thing that became
the thing everyone used by Monday.

Automated the sanction-letter and loan-agreement pipelines end-to-end — the kind of work
that's invisible until you realise nobody is manually doing it anymore.
