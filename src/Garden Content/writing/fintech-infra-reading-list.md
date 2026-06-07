---
title: "Fintech-infra reading list for Indian engineers"
description: "What I'd hand a smart engineer joining the AA / payments / lending stack from scratch."
maturity: evergreen
topics: [fintech-infra, meta]
created: 2026-03-22
tended: 2026-05-15
featured: true
---

A canonical list, kept short on purpose. I update this when I find something that
actually changed how I think.

## Regulation, but the human version

- **RBI Master Directions** on NBFCs, NBFC-AAs, and Payment Aggregators. Dense. Read
  the *first three pages* of each — that's the operating picture; the rest is
  reference material.
- **Sahamati operator playbook** — the AA ecosystem's actual day-to-day.
- **NPCI's UPI specifications** (the public ones) — even if you're not building on UPI,
  the failure-mode taxonomy is gold.

## Architecture & patterns

- *Designing Data-Intensive Applications* (Kleppmann) — yes, the obvious one. Chapter
  on consistency models will save you twice a year.
- *Release It!* (Nygard) — circuit breakers, bulkheads, the failure patterns you'll
  actually meet.
- *The Tao of Microservices* — disagreeable in places; useful precisely because it
  forces a position.

## Indian context

- *Banker to Every Indian* (RBI's own history) — for why the rails look the way they
  do.
- Nandan Nilekani's India Stack writings — primary-source for the design intent.

## Operating

- *The Phoenix Project* / *The Unicorn Project* (Kim) — narrative-format. Read on a
  flight; you'll see your own incident review in it.
- Charity Majors' blog — observability, on-call, all of it.

That's it. If a book or post belongs here, it earns the slot by replacing one already on
the list, not by joining.
