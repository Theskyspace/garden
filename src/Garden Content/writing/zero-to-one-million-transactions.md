---
title: "0 → 1M transactions: things we got wrong"
description: "The headline metric on my LinkedIn, with the receipts and the regrets."
maturity: growing
topics: [fintech-infra, founding-engineer, operating-notes]
created: 2026-05-05
tended: 2026-05-29
---

The number on my LinkedIn says *0 → 1M transactions*. It's true. It also hides every
embarrassing thing we did to get there. This is the long version — still being written as
I dig through old PRs and Notion pages.

## What scaled cleanly

- **Stateless service boundaries.** The Django + NestJS split forced clean contracts early.
  Painful at month 3, paid off at month 18.
- **Boring Postgres.** No premature sharding, no Redis cache where it didn't earn its
  keep. The same primary handled ~80% of our peak.
- **Idempotency keys on every write.** Adding them retroactively is a nightmare; we did it
  on day 4 of writing the first endpoint, and never regretted it.

## What didn't

- **CI we treated as someone else's problem.** Jenkins worked, then it didn't, then nobody
  knew enough to fix it. A Friday-night deploy lottery for nearly a year.
- **Reconciliation written too late.** We added end-of-day reconciliation jobs *after* we
  had ~100K transactions. Backfilling the ledger was a multi-week project I still flinch
  thinking about.
- **Observability bolted on at month 9.** Until then "is the system healthy" was answered by
  refreshing Postgres in pgAdmin. Embarrassing.

## The pattern

Every regret has the same shape: **we deferred a thing that scales as O(transactions²)
in pain**. CI broken = every engineer pays the tax every day. Late reconciliation =
backfill grows with history. Late observability = every incident takes longer than the
last one.

The hard part isn't knowing this. It's choosing to spend a week on plumbing when there's
a feature on fire.

## Open question

Was there a version of us at month 2 that would have listened to "spend a week on
reconciliation now"? I don't think so. Founders' speed and infrastructure discipline don't
trade off cleanly — they trade off in shape.
