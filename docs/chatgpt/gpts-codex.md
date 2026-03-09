---
title: "GPTs & Codex"
description: "Custom GPTs for recurring humanities tasks and OpenAI Codex for software engineering work."
last_verified: 2026-03-09
---

# Custom GPTs and Codex

## Custom GPTs

GPTs are custom versions of ChatGPT built for a particular purpose. OpenAI describes them as combinations of instructions, knowledge, and capabilities tailored to a topic or task. In practice, a GPT is useful when you keep doing the same sort of work and want a reusable setup instead of restating your needs each time.

For humanities users, a custom GPT can make sense for recurring jobs such as:

- A seminar-feedback assistant
- A house-style editor
- A grant-drafting helper
- A structured interview-coding aide
- A metadata normaliser
- A "first pass" guide for a specific archive, corpus, or project handbook

The key is repetition. If a task is genuinely one-off, a normal chat or project is usually enough.

### Cautions

GPTs are not magic. They are only as good as their instructions, attached knowledge, and boundaries. They can still hallucinate, overgeneralise, or leak into the wrong tone if poorly designed. OpenAI's own guidance for GPT-building stresses clear, broken-down instructions rather than vague grand goals.

!!! leifnote "Leif's Notes"
    **Do not build GPTs too early.** Start with a normal chat, then move to a project. Only build a GPT once the recurring need is clear and the workflow is stable. The overhead of designing a good GPT is not worth it for a task you will do three times.

---

## Codex { #codex }

For users doing actual software work, OpenAI now offers Codex, a coding agent available through multiple surfaces: a dedicated desktop app (macOS and Windows), a CLI, IDE extensions, the ChatGPT web interface, and cloud environments. Codex can handle complex multi-file engineering tasks, work in parallel on multiple jobs, and review code. It is included with paid ChatGPT plans, with usage scaling by tier.

This is the nearest analogue in the OpenAI ecosystem to Anthropic's [Claude Code](../claude/code.md). It is relevant to digital humanists building sites, scripts, pipelines, or tools, but overkill for most ordinary humanities use.

!!! leifnote "Leif's Notes"
    **Skip Codex unless you really have a coding problem.** If you are not building software, this is not the tool for you. If you are, it is worth comparing with Claude Code — see [Multi-Model Strategy](../essentials/multi-model.md) for guidance on choosing between platforms.
