---
title: "Gems & Connected Apps"
description: "Custom Gems for recurring tasks and Google Workspace integration via Connected Apps."
last_verified: 2026-03-09
---

# Gems and Connected Apps

## Gems

Gems are custom versions of Gemini built for a particular purpose — Google's equivalent of OpenAI's custom GPTs. You define instructions, tone, and focus, and the Gem applies them consistently whenever you use it.

For humanities users, a Gem can make sense for recurring jobs such as:

- A seminar-feedback assistant
- A house-style editor
- A grant-drafting helper
- A structured interview-coding aide
- A metadata normaliser
- A "first pass" guide for a specific archive, corpus, or project handbook

The key is repetition. If a task is genuinely one-off, a normal chat is usually enough.

### Cautions

Gems are only as good as their instructions and boundaries. They can still hallucinate, overgeneralise, or drift from the intended tone if poorly configured. Start with ordinary chat, then build a Gem once the recurring need is clear and the workflow is stable.

!!! leifnote "Leif's Notes"
    **The same advice applies as for ChatGPT's custom GPTs: do not build Gems too early.** The overhead of designing a good Gem is not worth it for a task you will do three times. Get the workflow right in ordinary chat first.

---

## Connected Apps { #connected-apps }

Connected Apps let Gemini reach into Google Workspace and third-party services. This is one of Gemini's most distinctive features — and one of its most complex.

### What Connected Apps can do

- **Google Workspace integration:** Gemini can search and reference your Gmail, Google Drive, Google Docs, Google Calendar, Google Maps, and other Google services. You can ask it to find a specific email, summarise a document in your Drive, or check your calendar.
- **Third-party apps:** A growing set of extensions connects Gemini to services beyond Google's own ecosystem.

### The complexity warning

Feature availability for Connected Apps varies by device, country, account type, plan, and administrator permissions. Not everything works everywhere. Google's documentation is the authoritative source, but even it can be hard to navigate. If a feature doesn't appear for you, the most common reasons are: you're on the wrong plan, you're in a country where it hasn't rolled out, or your Workspace administrator hasn't enabled it.

### For humanities researchers

Connected Apps are most useful if you already work within Google's ecosystem. If your research notes are in Drive, your correspondence is in Gmail, and your teaching schedule is in Calendar, the ability to ask Gemini questions across all of them is genuinely powerful. If you use a different ecosystem (Microsoft 365, for instance), this advantage doesn't apply — consider [Copilot](../platforms/copilot-placeholder.md) instead.

!!! essential "Essential"
    **Connected Apps access your real data.** Before enabling them, understand what Gemini will be able to see. Review [Data Governance](../essentials/data-governance.md) and your institution's policies on third-party access to work accounts.
