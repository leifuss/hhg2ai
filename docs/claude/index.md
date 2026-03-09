---
title: "Claude for Humanities Scholars"
description: "Overview of Claude's tools for humanities research — choosing the right interface, feature comparison by plan, and minimum safe practice."
last_verified: 2026-03-08
---

# ![Claude](../assets/images/platforms/Claude_AI_symbol.svg.png){ .platform-logo } Claude for Humanities Scholars

*March 2026*

## What Claude is — and how it relates to Anthropic

Anthropic is an AI safety company founded in 2021 by former OpenAI researchers, including Dario and Daniela Amodei. Its stated mission is the responsible development and maintenance of advanced AI for the long-term benefit of humanity. Anthropic develops the Claude family of AI models and the products built around them.

Claude is Anthropic's general-purpose AI assistant: the product most people use directly through a browser, desktop app, or mobile app at [claude.ai](https://claude.ai). Since its initial release in March 2023, Claude has grown from a conversational interface into a broader work environment: ordinary chat, web search, file uploads, projects, memory, artifacts, coding tools, document creation, and autonomous task completion.

It is worth separating Claude from the Anthropic API. Claude is the end-user application: you open it and work inside it. The API is the developer platform for building your own tools, automations, or research workflows on top of Anthropic's models. For most humanities researchers, Claude is the place to start. The API only becomes necessary when you want structured automation, reproducible pipelines, or integration into your own software. Anthropic bills the API separately from Claude subscriptions.

!!! panic "Don't Panic"
    **Skip to what you need:** If you only use Claude's conversational interface, read the orientation below and [Chat](chat.md), then skip to the [Essentials](../essentials/index.md) section. If you want Claude to work with your local files without learning the terminal, see [Cowork](cowork.md). If you're interested in building tools or processing data at scale, read [Code](code.md).

## Contents

- [Which Claude tool do I need?](#which-claude-tool-do-i-need) -- Choosing the right interface for your work
- [Chat](chat.md) -- Conversations, Projects, uploads, and writing assistance
- [Cowork](cowork.md) -- Autonomous file tasks and document creation via the desktop app
- [Apps & Extensions](apps.md) -- Browser extension, Excel, and PowerPoint integrations
- [Code](code.md) -- Building tools, processing data, and working with files at scale
- [Environments](environments.md) -- Where to run Claude Code
- [Prerequisites](prerequisites.md) -- What to learn and in what order
- [Worked Examples](workflows.md) -- Humanities-specific workflows step by step
- [Glossary](glossary.md) -- Technical terms explained for humanities readers

For prompting principles that apply across all platforms, see [Prompting Principles](../essentials/prompting.md). For data governance, verification, multi-model strategies, and cost awareness, see the [Essentials](../essentials/index.md) section.

---

## Which Claude tool do I need?

Anthropic offers Claude through several interfaces. They are not competing products but points on a spectrum from conversational to agentic (meaning Claude can take actions on its own, not just respond to messages). Before going deep on any one tool, the guide below will help you choose where to start.

### Chat (claude.ai)

**Best for:** Asking questions, getting writing help, analysing documents.

**You'll need:** A free account or Pro subscription.

**Skills required:** None -- just a browser.

[Read the Chat guide &rarr;](chat.md)

### Chat Projects

**Best for:** Working on a research project with persistent context.

**You'll need:** Available on all plans including free (with limits). Pro or higher for greater capacity.

**Skills required:** None.

[Read about Projects &rarr;](chat.md#projects)

### Cowork (Research Preview)

**Best for:** Autonomous file tasks, document creation, organising research materials.

**You'll need:** A paid subscription (Pro or Max). Requires the [Claude Desktop app](https://claude.ai/download) (macOS or Windows x64).

**Skills required:** None -- GUI-based.

[Read the Cowork guide &rarr;](cowork.md)

### Code (web)

**Best for:** Building tools, processing data, working with code or files at scale.

**You'll need:** A Pro subscription (token limits apply) or Max subscription.

**Skills required:** Basic comfort with a text interface ([see Prerequisites](prerequisites.md)).

[Read the Code guide &rarr;](code.md)

### Code (CLI)

**Best for:** Building tools with full local control, version control, and automation.

**You'll need:** A Pro subscription (token limits apply), Max subscription, or API key.

**Skills required:** Terminal basics, ideally git ([see Prerequisites](prerequisites.md)).

[Read the Code guide &rarr;](code.md)

---

Many tasks start in Chat. If you want Claude to work with your local files without learning the terminal, try Cowork. If you need to build tools, process data at scale, or want full version control, move to Code. There is no wrong door -- the tools overlap, and you can move between them as your needs evolve.

### The tool spectrum

| Conversational | | | | Agentic |
|---|---|---|---|---|
| **Chat** | **Projects** | **Cowork** | **Code Desktop** | **Code CLI** |
| You talk, Claude responds | Persistent knowledge base | Autonomous file tasks | GUI for building things | Full terminal control |

*The Claude tool spectrum: from conversation to autonomous action.*

### Decision flowchart

| Question | If No | If Yes |
|---|---|---|
| **Do you need to work with local files?** | &darr; | &darr; |
| *No:* Need a persistent knowledge base? | [Chat](chat.md) | [Chat + Projects](chat.md#projects) |
| *Yes:* Comfortable with a terminal? | [Cowork](cowork.md) or Code Desktop | [Code CLI](code.md) |

*Which Claude tool do I use? A quick decision guide.*

### Browser, desktop app, or mobile?

**Browser (claude.ai):** Chat, Projects, file uploads, artifacts, web search, and Code (web). Works on any device. No installation needed. This is where most people should start.

**Desktop app (macOS, Windows):** Everything the browser offers, plus Cowork mode, a system-wide keyboard shortcut (summon Claude from any application), drag-and-drop local files, a Code tab with a graphical interface, and desktop extensions for connecting Claude to local tools. Download from [claude.ai/download](https://claude.ai/download). Required for Cowork.

**Mobile app (iOS, Android):** Chat and Projects. Useful for reviewing, reading, and quick questions on the move. Not suited to file-heavy or code-heavy work.

| Tool | Runs in |
|---|---|
| Chat | Browser, desktop app, mobile |
| Projects | Browser, desktop app, mobile |
| Code (web) | Browser |
| Code (desktop) | Desktop app |
| Code (CLI) | Terminal (local or remote) |
| Cowork | Desktop app only |
| Claude in Chrome | Chrome browser extension |
| Claude in Excel / PowerPoint | Microsoft 365 add-ins |

!!! essential "Essential"
    **If you mainly read, write, teach, and analyse texts:** Start with [Chat](chat.md). Use Projects for sustained work. You can safely ignore Code, Cowork, hooks, MCP, CLAUDE.md, and everything in the Code, Environments, and Prerequisites pages until you have a specific need. The cross-platform essentials still apply to you -- see [Essentials](../essentials/index.md).

    **If you want to build tools, transform data, or automate processing:** Read [Code](code.md) and [Environments](environments.md). The [Prerequisites](prerequisites.md) page will help you know what to learn first. The [Essentials](../essentials/index.md) still apply.

!!! essential "Minimum safe practice"
    If you just want to try Claude responsibly:

    1. Use Chat. Upload the source text you want to work with.
    2. Ask for critique, summary, or analysis -- not for authoritative facts.
    3. Verify all references against a library catalogue.
    4. Do not upload sensitive, personal, or embargoed material.
    5. Record what you asked and what you used from the response.
    6. If it's useful, great. If not, nothing was lost.

### Feature availability by plan

| Feature | Free | Pro | Max | Team | Enterprise |
|---|---|---|---|---|---|
| Chat | ✓ | ✓ | ✓ | ✓ | ✓ |
| Projects | ✓ (limited) | ✓ | ✓ | ✓ | ✓ |
| File uploads | ✓ | ✓ | ✓ | ✓ | ✓ |
| Opus model | -- | ✓ | ✓ | ✓ | ✓ |
| Cowork | -- | ✓ | ✓ | ✓ | ✓ |
| Code (web & CLI) | -- | ✓ | ✓ | ✓ | ✓ |
| Claude in Chrome | -- | ✓ | ✓ | ✓ | ✓ |
| Claude in Excel | -- | ✓ | ✓ | ✓ | ✓ |
| Claude in PowerPoint | -- | -- | ✓ | ✓ | ✓ |
| Memory | ✓ | ✓ | ✓ | ✓ | ✓ |
| Usage limits | Lowest | ~5x free | ~5x Pro | Per seat | Custom |

*Feature availability by plan. Exact limits change; see [Anthropic's pricing page](https://www.anthropic.com/pricing) for current details. As of March 2026.*

!!! leifnote "Leif's Notes"
    **An important framing for Code:** The output of Claude Code need not depend on LLMs at all. It can produce entirely "traditional" digital outputs -- static web pages, Python scripts, cleaned datasets, formatted bibliographies, visualisations -- that work independently of any AI system. Claude Code is the builder; the thing it builds can be conventional software, a conventional website, or a conventional data pipeline. This is a strength: you get AI assistance in the construction process without creating AI dependency in the result.
