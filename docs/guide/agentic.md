---
section: primer
title: "Agentic AI — Autonomous Tools That Plan and Execute"
description: "A field guide to agentic AI systems — what they are, how they differ from conversational AI, and what they mean for humanities work."
last_verified: 2026-07-13
---

# Agentic AI — Autonomous Tools That Plan and Execute

## What "agentic" means

Most AI interactions follow a simple pattern: you ask a question, the system responds, you ask another question. **Agentic AI** breaks this pattern. Instead of responding to individual messages, an agentic system can:

- **Plan** a sequence of steps to accomplish a goal
- **Execute** those steps autonomously — reading files, running code, searching the web, creating documents
- **Make decisions** along the way about how to proceed
- **Iterate** on its own work — testing, fixing errors, refining output

The difference is between giving someone directions turn by turn (conversational) and giving them a destination and letting them find the route (agentic).

!!! panic "Don't Panic"
    You do not need to use agentic AI tools. Most humanities scholars will find conversational interfaces (Chat, Projects) sufficient for their needs. This page exists for those who are curious about what's available beyond conversation, or who have encountered the term and want to understand what it means.

## Current agentic tools

### Claude Code

The most capable agentic tool currently available to individual users. Claude Code can read your files, write and run code, create documents, build websites, process data, and manage complex multi-step projects — all with minimal supervision.

See the [Claude Code guide](../claude/code.md) for practical details.

### Claude Cowork

A lighter agentic mode available through Claude's desktop app. Cowork can work with local files — reading, creating, organising — without requiring terminal knowledge. Think of it as a capable assistant who can access your filing cabinet.

See the [Cowork guide](../claude/cowork.md) for practical details.

### ChatGPT with tools

ChatGPT's "Advanced Data Analysis" mode (formerly Code Interpreter) offers limited agentic capabilities: it can run Python code, process uploaded files, and create visualisations. Less autonomous than Claude Code but accessible to anyone with a ChatGPT Plus subscription.

### Other emerging tools

The landscape is developing rapidly. GitHub Copilot Workspace, Google's AI agents, and various open-source frameworks offer agentic capabilities aimed at different audiences. Most are still aimed primarily at software developers --- but agentic features are reaching mainstream office tools too: OpenAI's **ChatGPT Work** (July 2026), for instance, can create documents, spreadsheets, and presentations by gathering context across your connected apps and files, a sign of where these capabilities are heading for ordinary knowledge work.

## What agentic AI can do for humanities work

!!! offtrack "Off the Beaten Track"
    The examples below require more technical comfort than conversational AI use. If you're not ready for them, that's fine — revisit when the need arises.

**Data processing at scale:** An agentic system can process hundreds of documents — extracting named entities, normalising dates, cleaning OCR, building structured datasets — with a single set of instructions. What would take weeks of manual work can happen in hours.

**Building research tools:** Describe what you need — "a searchable database of these inscriptions with filtering by date and region" — and an agentic system can build it, including the web interface, the data processing pipeline, and the search functionality.

**Complex document preparation:** Converting between formats, generating multiple versions of a document for different audiences, reformatting entire bibliographies, preparing materials for publication.

**Multi-step analysis:** Tasks that require reading a document, extracting specific information, cross-referencing it against another source, and producing a structured report.

## Risks of agentic AI

Agentic AI introduces risks that conversational AI does not:

!!! caution "Caution"
    **Compounding errors:** When a system takes multiple autonomous steps, errors in early steps compound through later ones. A misread date in step 2 might produce a wrong classification in step 5 and an incorrect conclusion in step 8. The chain of reasoning is only as strong as its weakest link.

    **Opacity:** With a conversational exchange, you see every response and can catch errors in real time. With an agentic system, much of the work happens without your direct oversight. You see the final product but may not see the intermediate decisions that shaped it.

    **Scope creep:** Agentic systems can modify files, run code, and take actions with real consequences. A system that "helpfully" reorganises your files or "fixes" your data according to its own judgement can cause problems that are hard to undo.

    **False confidence:** The more capable the tool appears, the more tempting it is to trust its outputs without verification. Agentic systems can produce impressive-looking results that contain the same kinds of errors as conversational AI — but wrapped in a more polished package.

## The verification challenge

Agentic work requires a different verification approach than conversational work:

1. **Audit the process, not just the output.** Ask the system to explain what steps it took. Check whether those steps make sense.
2. **Spot-check across the full range of your data,** not just the first few items.
3. **Check whether normalisation has erased meaningful variation.** Did the system "correct" something that was actually significant?
4. **Keep everything in version control** so you can undo changes and audit the history.

For detailed guidance, see [Verification & Citation](../essentials/verification.md).

## When to go agentic

| Situation | Recommendation |
|-----------|---------------|
| Quick question or analysis | Stay conversational (Chat) |
| Working with a few documents | Use Projects for persistent context |
| Organising local files | Try Cowork |
| Building a tool or processing data at scale | Consider Code |
| Complex multi-step project | Agentic, with careful verification |

!!! leifnote "Leif's Notes"
    I've found agentic tools genuinely transformative for specific tasks — building research websites, processing document collections, creating data visualisations. But I use them selectively, not as my default mode. For most of my day-to-day scholarly work — reading, thinking, writing, teaching — conversational AI is either sufficient or unnecessary. The agentic capabilities are impressive, but the verification overhead is real, and the temptation to over-delegate is something I actively guard against.

---

*For platform-specific guides to agentic tools, see [Claude Code](../claude/code.md) and [Cowork](../claude/cowork.md).*
