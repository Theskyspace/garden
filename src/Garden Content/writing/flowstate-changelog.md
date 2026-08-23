---
title: "Flowstate changelog"
description: "A living record of every Flowstate release: what shipped, what broke, what got fixed. Updated with each build."
maturity: evergreen
topics: [flowstate, build-in-public]
created: 2026-08-02
tended: 2026-08-02
---

Flowstate is a voice layer for the Mac I'm building solo and
[in the open](/writing/why-im-building-flowstate). This page records every release.
Updates ship via Sparkle inside the app; each release adds an entry here.

## v0.7.0 — 2026-07-31

- Usage analytics, off-switchable: one anonymous event per insertion (kind, word count,
  engine, never transcript text, audio, or vocabulary), with a "Share usage statistics"
  toggle in Settings that stops all capture.
- Optional "what should we call you?" name step in onboarding and Settings.
- Clipboard restore no longer races rapid back-to-back dictations.
- The rewrite-engine model now downloads from GitHub Releases instead of Hugging Face,
  whose CDN stalled on some ISPs. Fully cached models load with zero network requests.

## v0.6.2 — 2026-07-29

- Proper Developer ID signing and notarization: releases are now signed, notarized, and
  stapled, so Gatekeeper opens them without ceremony.
- Fixed the microphone permission break that the signing migration caused for existing
  installs.

## v0.6.0 / v0.6.1 — 2026-07-28

- Recording now survives unplugging the active mic: the audio engine watches for device
  changes and resets itself instead of silently failing until restart. (This bug's
  four-hour repro hunt ended with "I unplugged my headphones.")
- Onboarding gained a model-setup step with honest download-consent copy for Macs that
  need the fallback rewrite engine.

## v0.5.0 — 2026-07-22

- The dictionary learning loop: Flowstate now notices terms you say often and suggests
  adding them, with a probation lifecycle so a misheard word never silently pollutes
  your vocabulary. Nothing is learned without an explicit accept.
- Fix-it-once editing on the pill: correct the last transcript inline, and one edit
  teaches both new words and auto-fix pairs.
- Seed the dictionary from Contacts, opt-in and local only.
- The pill is now a persistent dock: a low-key sliver at the bottom of the screen that
  morphs between states instead of blinking between windows.
- The trigger key no longer dies after sleep.
- Transform fallback for Macs without Apple Foundation Models.

## v0.4.0 — 2026-07-20

- External keyboard support: configurable trigger key with a press-your-key recorder,
  because not everyone's fn key is where mine is.

## v0.3.0 — 2026-07-20

- First-run onboarding: welcome, permissions, model setup, and a four-rep practice
  course.
- Transform workflows: dictate rough, say "refine it professionally," get the sendable
  version.
- Voice-invoked workflows: "add to my todo" writes straight to Reminders, no Shortcuts
  required.
- A manual dictionary for the names and jargon transcribers butcher.

## v0.2.0 — 2026-07-17

- First packaged release. The core loop: hold a key, talk, and text lands in whatever
  app you're in. Parakeet running on the Neural Engine, on-device, with the floating
  pill showing state. Nothing leaves the machine.
