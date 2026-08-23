---
title: "Why I'm building Flowstate"
description: "The decisions behind the voice layer I'm shipping for the Mac: why it exists, why it's not a dictation app, why one-time pricing, and why the whole build is public."
maturity: growing
topics: [flowstate, build-in-public]
created: 2026-08-02
tended: 2026-08-02
featured: true
---

I bought a Mac dictation app earlier this year. Good app. But I kept wondering what was
actually running when I talked to it, so I went looking.

It wasn't Whisper, which is what I had assumed. It was NVIDIA's Parakeet, running fully
on the machine through the Neural Engine. No cloud, no upload, my voice never left the
laptop. That surprised me twice. Once because almost every tool in this space reaches for
Whisper by default, and Parakeet is faster and more accurate at the same size. And once
because if the hard part, the model, is open and runs locally, the rest is engineering.

That's where Flowstate started. This note is the record of the decisions since, because
the decisions turned out to be more interesting than the code.

## Decision 1: build my own, fully local

The category was already validated at two price points, cloud subscription tools on one
end and local one-time tools on the other. What I wanted didn't exist in either: fast
enough to feel instant, private enough that nothing ever leaves the machine, and priced
like software instead of rent. So the constraint set became the product: on-device
Parakeet on the Neural Engine, native Swift, first word in under a second, no account,
no server that ever hears you.

## Decision 2: it's not a dictation app

The first positioning draft said "dictation app." It lasted two weeks. The thing I kept
noticing while using my own prototype was that once the Mac understands you locally,
typing is the least interesting thing it can do with that understanding. Say "add milk
to my todo list" and it should land in Reminders. Say "open Slack" and Slack should
open. Dictate the angry version of an email, say "refine it professionally," and send
the version that won't get you in trouble.

So Flowstate is a voice layer for the Mac. Dictation is a feature. The workflows are
the point. This one repositioning rewrote every sentence of marketing I had, which is
how I learned that positioning is upstream of everything.

## Decision 3: build it in public

I'm one person with a full-time job. My distribution can't be an ad budget, so it has
to be the story. Since July I've been posting the build as it happens: the bugs (a mic
unplug that silently killed recording), the design traps (an auto-learning dictionary
that could have permanently misspelled your own name), the 2 AM call with an early
tester that ended in a same-night update. The weekly series is called Builder Building,
one real decision from the build every week, and the waitlist grew out of it.

The honest version of why: the product category is competitive, and product alone
doesn't earn attention. A real person making real decisions in the open does.

## Decision 4: one-time price, no subscription

Voice tools charging monthly rent for software that runs on your own silicon is the
thing I'm positioning against, so the pricing has to embody the position. Flowstate
will be a one-time purchase. Early access goes to the waitlist first, with launch
planned for September.

## How this garden fits

LinkedIn gets the weekly posts, but feeds bury things. This garden is the long-form
home of the build: the decision notes like this one, and a living
[changelog](/writing/flowstate-changelog) recording every release since v0.2.0. Posts
get tended as decisions change; the changelog gets a new entry every time a build
ships. If you want to follow along, those two pages are the spine.
