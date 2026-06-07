---
title: "Operate in ambiguity"
description: "What 'bias for shipping over specification' actually looks like at a founding-engineer desk."
maturity: growing
topics: [founding-engineer, operating-notes]
created: 2026-05-18
tended: 2026-06-02
featured: true
---

I've used the phrase *operate in ambiguity* on my LinkedIn for two years and never tried to
say what I mean by it. This is an attempt — still drafting.

## The default operating mode

At big companies, you get a spec, a designer, a PM, and three weeks. At a 6-person fintech,
you get a Slack message that says "can we let users pause their SIP?" and that's the whole
brief.

Ambiguity is the gap between *what was said* and *what needs to be true for the thing to
ship*. Operating in it is the skill of filling that gap **without stalling for permission**,
while being **honest about what you guessed**.

## Three moves that work for me

1. **Write the API before the answer arrives.** If the question is "should we do X or Y",
   sketch both response shapes in a doc, ship to staging behind a flag, and now the
   conversation is about *data*, not *opinions*.

2. **Ship the cheapest version that produces a fact.** Not the cheapest version that ships —
   the one that tells you whether the assumption you're making is true. These are different.

3. **Default to writing it down, even when nobody asked.** A 200-word doc on what you
   decided and why, dropped in #eng, replaces 4 syncs.

## What this looks like when it fails

— spending a week building the wrong abstraction because you didn't ask the boring
clarifying question  
— shipping fast but leaving no breadcrumb, so the next person rebuilds the same thing  
— mistaking "moving fast" for "moving in any direction"

I've done all three. Probably this year.

## Still figuring out

- How to teach this. The phrase doesn't transfer — the pattern only shows up under pressure.
- Where the line is between *productive* ambiguity and *avoidable* ambiguity that the PM
  should've resolved. I think the answer is "if asking would unblock you in under five minutes, ask".
