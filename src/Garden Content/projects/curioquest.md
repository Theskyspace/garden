---
name: "CurioQuest"
blurb: "AI Q&A with real-time contextual search — Bing Search for live grounding, Cohere AI for source-cited responses. Next.js frontend."
href: "https://github.com/Theskyspace/curioquest.ai"
label: "github"
year: 2023
order: 1
---

A RAG-style platform from before "RAG" was a household acronym. Combined Bing Search
for live web context with Cohere's model for response generation, citations attached
to claims. The frontend is a deliberately minimal Next.js interface — the
conversational surface is the product.

What made it interesting to build: the chunking strategy and citation reconciliation
mattered more than the model choice did. Most of the engineering time went into
*ranking* and *trust* — which sources made the cut, how to surface them without
cluttering the answer.
