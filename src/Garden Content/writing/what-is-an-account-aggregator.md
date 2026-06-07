---
title: "What an Account Aggregator actually is, in 5 minutes"
description: "The RBI's consent-and-data-sharing layer, explained without the regulatory throat-clearing."
maturity: evergreen
topics: [fintech-infra]
created: 2026-04-12
tended: 2026-05-30
featured: true
---

> **TL;DR** — An Account Aggregator (AA) is a regulated middleman that lets you tell Bank A
> to share specific data with Lender B, for a specific purpose, for a specific time, without
> ever letting B see your bank credentials. The whole thing runs on consent artefacts,
> not screen-scraping.

Most explainers of India's AA framework start with the acronyms — FIP, FIU, TSP — which is
the worst possible entry point. Let me try a different one.

## The problem AA solves

Before AA, if a lender needed to verify your bank statements, you had three options:

1. **Upload PDFs.** Forgeable, stale by the time you upload them, and the lender has to
   parse them with regex-and-prayer.
2. **Hand over your bank password.** This is what "aggregator" apps did pre-2021. Yes,
   really.
3. **Wait for the bank to send a one-off file** to the lender after a manual request. Days.

AA replaces all three with a fourth path: a regulated entity (the **AA itself**) that holds
your *consent artefact* and brokers a tightly-scoped data transfer between the bank (FIP =
*Financial Information Provider*) and whoever needs the data (FIU = *Financial Information
User*).

## The 4 actors

- **You** — the customer.
- **FIP** — the bank, broker, insurer, or mutual fund house that holds your data.
- **FIU** — the lender, advisor, or fintech that wants to see it.
- **AA** — the consent broker. Cannot read your data, only routes it.

A **TSP** (Technology Service Provider) is the layer that does the actual API plumbing on
behalf of FIUs and FIPs — most fintechs you've heard of are TSPs, not AAs.

## Why this is interesting to build on

Because the data is *standardised*, *fresh*, and *consented*, you can do things that were
nearly impossible before:

- **Underwriting in minutes** instead of weeks.
- **Cash-flow-based lending** for the 80% of Indians without formal credit history.
- **Personal finance** apps that actually see your whole financial picture.

The catch: every byte you move is gated by RBI rules on purpose, retention, and revocation.
This is what I spend most of my work hours on now.

## What to read next

- [RBI's master direction on NBFC-AAs](https://www.rbi.org.in/) — start here, skim.
- The Sahamati developer docs — actual API shapes.
- My note on [zero to one million transactions](/writing/zero-to-one-million-transactions)
  for what scaling on AA rails actually feels like.
