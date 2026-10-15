---
title: Context Building for Building
description: How agents should pick up project context as it grows, and how to keep that context scoped, trusted and fresh.
maturity: growing
topics:
  - ai-in-product
  - operating-notes
created: 2026-10-01
tended: 2026-10-01
featured: true
---
**How do I build context that my agents can pick up as a project grows?**

As we move toward agent-driven development, the bottleneck is no longer just generating code. It is ensuring that agents understand the system they are modifying.

A codebase captures what exists, but not necessarily why it exists, what is changing, or what the team has already learned.

We need a way to build context incrementally alongside the product itself: capturing intent before implementation, decisions during development, and new knowledge after implementation.

The goal is not to give agents more context. It is to give them the _right context, at the right time, with a reliable way to keep it current_.

A few rules I feel every context workflow should follow:

1. **Scope:** project-wide, subsystem-specific, task-specific, or user-specific.
2. **Authority:** observed fact, explicit decision, assumption, or suggestion.
3. **Freshness:** when it was last verified, and what changes could invalidate it.
4. **Retrieval:** which agents and tasks actually need it.

And one more: repeated tasks are not context. They are skills, with a description and repeatable scripts or an SOP, plus enough context to know when to use them.

I'm writing this as a series of questions because I'm still working the ideas out, not explaining how the whole thing works.

### What deserves to become persistent context?

Not every conversation or tool call should be remembered. The key test is whether retaining a piece of information will materially improve a future decision.

A conversation is an event. Persistent context should capture the knowledge extracted from that event. I'd prefer a background agent to do this extraction, with a human approving what gets kept (the way Cisely does things).

**Example:** an agent reads 15 files to track down a bug. That trail isn't worth keeping. But along the way it finds out that a downstream API has a strict rate limit. That one is worth keeping, because the next implementation will hit the same limit.

The rule set I can think of so far. Persist knowledge when it has one or more of these properties:

- **Durability:** it is likely to remain true across tasks.
- **Reusability:** multiple future tasks can benefit from it.
- **Expensive rediscovery:** relearning it requires significant investigation.
- **High consequence:** forgetting it could cause an outage, security issue, regression, or architectural violation.
- **Decision relevance:** it explains why the system behaves or is designed a certain way.

### Who owns context updates?

The agent, the developer, the CI pipeline, or some combination? Neither a fully autonomous agent nor a human-only process is ideal.

A fully autonomous agent can confidently preserve a misunderstanding. A human-only process creates enough friction that context updates get skipped.

For example, an agent discovers that a service now uses Redis for distributed locking. It can propose a documentation change. CI can verify that the relevant configuration or code exists. A human may still need to approve the architectural decision if the change alters system-wide behavior.

Note to self: Cisely should maintain these decisions, per product and per project.

### How do we prevent stale context?

A document can be authoritative and still be wrong.

Staleness is fundamentally a synchronisation problem. Code changes, but the descriptions of that code do not necessarily change with it. A timestamp alone cannot tell you whether a document is still correct.

The solution is to connect context to the things that can invalidate it. A practical way is to attach metadata to each context entry:

- Source of truth
- Last verified revision
- Dependencies or assumptions
- Confidence and status
- Conditions that should trigger revalidation

### How much context should an agent receive?

More information can mean more noise, more cost, and more conflicting instructions.

The right objective is not maximum context utilization. It is maximum decision quality under a limited context budget. An agent working on a logging bug probably does not need the product roadmap, the history of unrelated architectural decisions, or every previous debugging conversation. But it does need to know if the logging system has a strict PII-redaction requirement.

So context should come in layers:

1. **Global instructions:** "Never log PII."
2. **Relevant subsystem:** "Logs go through the redaction middleware."
3. **Current task:** "Fix the duplicate log line in checkout."
4. **On-demand evidence:** the actual stack trace, fetched only when needed.

The agent starts with a small amount of broadly applicable context, then retrieves more as the task demands.

### How do multiple agents share knowledge?

A discovery made in one task should be available to another, without blindly carrying over irrelevant history.

At Equal we did this with ground-truth surfaces at the project and product level.

Project:

1. Critical context lived in the code, because it has to change in the same PR as the code it describes.
2. Non-critical context lived in a separate docs repo, where being slightly out of date is acceptable.

Product:

1. Confluence folders and docs, maintained alongside the product.

### How do we measure context quality?

Fewer regressions, less repeated investigation, better task completion, and fewer human corrections mean more than the volume of documentation.

Documentation volume, number of memory entries, retrieval count, and token utilization are activity metrics. None of them shows that context makes agents better.

At Equal this was mostly judged by the developer working on the problem, and the question was simple: does this piece of information make the agent better? Evals on top of that would solve a lot. But this is a problem that will always have many opinions.

My current best guess: if a piece of context doesn't change what the agent does next, it isn't worth keeping.
