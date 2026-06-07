---
title: "Things I believe"
description: "An evolving list of opinions I'll defend in the room. Updated when an old one breaks."
maturity: evergreen
topics: [meta, founding-engineer]
created: 2026-06-08
tended: 2026-06-08
featured: true
---

## Ship first, perfect later

- Cheapest version that produces a fact > cheapest version that ships
- A staging demo is worth ten Notion pages
- Most "is it ready" questions resolve themselves once it's live behind a flag
- If you can't decide, ship both and let the data argue
- The cost of being wrong fast is almost always less than the cost of being right slow

## Operate in ambiguity

- The brief is rarely the brief — it's the opening of the brief
- Sketch the API before the answer arrives; the doc becomes the question
- "If asking would unblock you in under five minutes, ask"
- Founding-engineer work is 30% engineering, 70% deciding what doesn't need to exist
- Movement is not progress; pick a direction even if you'll change it

## Write it down or it didn't happen

- A 200-word doc in #eng replaces four sync meetings
- The doc nobody reads still pays for itself the next time you re-read it
- If the decision matters, write the alternatives you rejected
- "Working notes" are the highest-leverage artifact in any company under 30 people
- The best documentation is the kind that gets edited

## Boring stack, sharp edges

- Postgres until proven otherwise. Then Postgres harder.
- Redis is a cache, not a database, no matter what the engineer says
- The interesting work is in the seams between boring components
- "We need [new database]" is almost always "we forgot to add an index"
- Pay for hosting before you pay for novelty

## Idempotency or it doesn't ship

- Every write endpoint gets a key on day one
- Retroactive idempotency is a multi-week archaeology project — see [this](/writing/zero-to-one-million-transactions)
- "It happens at-most-once" is a lie you tell yourself
- The retry you didn't plan for will happen at 2am
- Money APIs that aren't idempotent are not money APIs

## Observability is tier-1 product work

- If you can't see it, you can't ship it
- Logs > metrics > traces, in that order of "first dollar spent"
- "Refreshing the dashboard in pgAdmin" is not observability, it is denial
- Every alert that fires more than weekly is teaching you to ignore alerts
- The best on-call rotation is the one nobody dreads

## The interesting agent talks to your tooling

- The agent that talks to *customers* is the marketing demo
- The agent that talks to *another team's tooling* is the product
- 80% of "I want an agent for X" is "I want a coworker who reads docs and clicks buttons"
- Evaluation infra (scenarios, judges, replay) is the actual work — see [this seedling](/writing/ai-agents-across-the-building)
- LLM-in-a-loop without evals is gambling with extra steps

## Small teams ship faster, until they don't

- Six engineers can build anything a hundred can, slower
- A hundred engineers will build something six can't, slower still
- The constraint at small scale is *taste*; at large scale, *coordination*
- Hire when a thing breaks twice, not when it breaks once
- The first specialist hire (DevOps, data, security) buys back the most time

## Founding engineers own the seams

- Your job description is "the thing nobody else is doing yet"
- Internal tools count as product
- The CLI you wrote on a Friday afternoon is sometimes the most-used tool in the company
- Migrations are not maintenance work — they are the work
- If you can't explain why we're doing it to a non-engineer in 30 seconds, we shouldn't be doing it

## Read the regulator's actual document

- One paragraph of the RBI Master Direction is worth a thousand blog posts about it
- "Compliance can wait" ages worse than any technical debt
- Auditors are not adversaries — they are the rubber duck that signs your salary
- The interesting fintech work in India lives downstream of [an explainer](/writing/what-is-an-account-aggregator), not upstream
- Build for the rules, not against them

## Constraints are gifts

- "Build it in two weeks with no prior knowledge" produces better products than "take all the time you need"
- Self-imposed deadlines beat externally-imposed ones, because you'll honor them
- Budget = scope. There is no third lever.
- The best products solve one problem completely, not five problems partially
- Saying no to a feature is a feature

## Be honest about what you guessed

- Every assumption written down is one less argument later
- "I don't know" is a complete sentence, twice as useful as a wrong answer
- Hindsight makes everyone look smart; pre-mortems make you actually be smart
- The number on the slide deck is wrong by at least 30% — name the 30%
- Confidence is a forecast, not a personality trait

---

_Updated when an old belief breaks. If we disagree, I'd actually like to know — [theskyspacedev@gmail.com](mailto:theskyspacedev@gmail.com) or DM._
