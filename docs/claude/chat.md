---
title: "Chat"
description: "Guide to Claude's conversational interface — setting up, core features, best practices for humanities scholars, and combining Chat with other tools."
last_verified: 2026-03-08
---

# Chat

Part of [A Hitchhiker's Guide to AI for the Humanities](../index.md)

## Contents

- [1.1 What it is and what it's for](#what-it-is-and-what-its-for)
- [1.2 Setting up](#setting-up)
- [1.3 Core features](#core-features-and-how-to-use-them-well)
- [1.4 Dos and don'ts](#dos-and-donts)
- [1.5 Best working practices](#best-working-practices-for-humanities-scholars)
- [1.6 Combining with other tools](#combining-with-other-tools)

---

## What it is and what it's for

Claude Chat is the conversational interface at [claude.ai](https://claude.ai), also available as a mobile app (iOS/Android) and a desktop app (macOS, Windows). You type a message, Claude responds. You can upload files, ask follow-up questions, and refine outputs through conversation.

It is the starting point for most humanities scholars and the right tool for:

- Exploratory questions and brainstorming
- Writing assistance -- drafting, editing, feedback on your prose
- Document analysis -- summarising, comparing, extracting information from uploaded files
- Translation and language work
- Literature review assistance (with careful verification -- see [Dos and don'ts](#dos-and-donts))
- Explaining technical concepts in accessible language

If your work involves reading, writing, and thinking about texts, Chat is where you will spend most of your time with Claude.

---

## Setting up

### Account tiers

Claude is available at several subscription levels. Rather than quoting prices that will date, see [Anthropic's pricing page](https://www.anthropic.com/pricing) for current details. The key distinctions:

- **Free:** Access to Claude with usage limits. Enough to try it out and do occasional work.
- **Pro:** Higher usage limits, access to all models, Claude Projects, priority access to new features. The recommended tier for regular academic use.
- **Team:** Pro features plus collaboration, shared Projects, and administrative controls. Relevant if your department or research group adopts Claude together.
- **Max:** The highest tier. Includes significantly higher usage limits for Claude Code. Relevant if you plan to use Code heavily for building tools or processing data.

### Model selection

Anthropic offers several models, and you can switch between them within a conversation. The names follow a musical metaphor. As of early 2026, the current generation is the Claude 4 family (e.g., Opus 4.6); model names and capabilities change over time, but the naming convention remains stable:

- **Opus:** The most capable model -- best reasoning, most nuanced writing, highest quality analysis. Use it for your most demanding work: complex arguments, careful close reading, tasks where quality matters more than speed.
- **Sonnet:** A strong balance of capability and speed. Good for everyday tasks: drafting, summarising, answering questions, working through research problems. This is a sensible default for most work.
- **Haiku:** The fastest and lightest model. Good for simple, quick tasks: reformatting text, straightforward translations, quick factual lookups. Less suited to nuanced analysis or complex reasoning.

When in doubt, start with Sonnet. Switch to Opus when you need deeper reasoning or more careful prose. Use Haiku for bulk, repetitive tasks where speed matters more than depth.

### Profile preferences

Claude can remember general information about you and your work. Click your initials in the lower-left corner of the interface, then go to Settings &rarr; Profile to find **Profile Preferences**. This is a free-text field where you describe yourself, your discipline, and your expectations -- Claude reads it as background context for every conversation.

For example:

> I am an ancient historian specialising in late-antique North Africa. Use British English. When discussing primary sources, cite by standard abbreviation (e.g., Hdt. 1.1). I prefer connected prose over bullet points. Flag any claims you are uncertain about.

Profile preferences are account-wide: they apply to all your conversations unless overridden by a Project's custom instructions. For more detail, see [Understanding Claude's personalisation features](https://support.claude.com/en/articles/10185728-understanding-claude-s-personalization-features) in the Claude Help Centre.

### Styles

Separately from profile preferences, Claude has a **Styles** feature that controls *how* it writes -- tone, format, length, and register. Styles are accessed via the **"+" button** (or the **"/" shortcut**) in the lower-left of the chat interface. From the "Use style" dropdown, select a preset or click "Create & edit styles" to make your own.

Four presets are available: Normal, Concise, Formal, and Explanatory. For academic work, you will likely want a custom style. There are two ways to create one:

- **Descriptive:** Write a plain-language explanation of how you want Claude to write. For example: "Write in a formal academic register appropriate for a peer-reviewed history journal. Avoid bullet points in favour of connected prose. Cite specific evidence rather than making general claims."
- **Example-based:** Paste samples of your own writing. Claude will analyse the style and match it. This is often more effective than description, especially for capturing disciplinary voice.

You can switch styles mid-conversation. Unlike profile preferences, which tell Claude *who you are*, styles tell Claude *how to write*. Both can be overridden by Project-level instructions. See [Configure and use styles](https://support.claude.com/en/articles/10181068-configure-and-use-styles) for full details.

---

## Core features and how to use them well

### Conversations

Each conversation with Claude has its own context. Claude remembers everything said within a conversation but starts fresh in a new one (unless you use Projects -- see below).

!!! essential "Essential"
    **One topic per conversation.** Keeping conversations focused helps Claude maintain coherent context. If you shift topics within a single conversation, Claude may lose track of earlier constraints or priorities. Context windows are finite, topic drift wastes them, and fresh conversations are cheap -- start a new one when you switch tasks. Think of conversations like focused working sessions, not an ongoing relationship.

When to continue an existing conversation: when you are iterating on the same task -- refining a draft, following up on an analysis, asking clarifying questions about the same material. When to start fresh: when you are switching tasks, topics, or source materials.

### File uploads

You can upload files directly into a conversation: PDFs, images, spreadsheets, code files, and plain text. This is one of Claude's most useful features for humanities work -- you can upload a primary source and discuss it directly rather than trying to describe or paste it.

What works well:

- PDFs of journal articles, book chapters, and archival documents
- Images of manuscripts, inscriptions, maps, and visual sources
- Spreadsheets of structured data (CSV or Excel)
- Plain text files and code

Practical limits: there is a per-file size limit and a total context limit for each conversation. Very long documents (entire monographs) may need to be split into chapters. If you regularly work with the same documents, upload them to a Project's knowledge base instead (see below).

### Web search

Claude can search the web during a conversation to find current information. This is useful for checking recent publications, finding URLs, or looking up factual details. However, treat web search results the same way you would treat any AI-generated content: verify independently before relying on them in your work. Claude will indicate when it has searched the web, so you can see what it found and check the sources. See [Enabling and using web search](https://support.claude.com/en/articles/11176892-enabling-and-using-web-search).

### Artifacts

Artifacts are standalone outputs that appear in a side panel next to your conversation. They are one of Claude's most distinctive features. An artifact can be:

- A document (essay, report, structured text)
- A piece of code
- A live-rendering HTML page or interactive application
- An SVG diagram or visualisation
- Structured data (tables, JSON)

What makes artifacts particularly useful is that you can iterate on them through conversation: "make the timeline start from 500 BCE", "add a column for the original Greek", "change the colour scheme to something more print-friendly". Each revision updates the artifact in place.

Artifacts can be published and shared via a link. Recipients can view and use basic artifact functionality without a Claude account; advanced or AI-powered features may prompt signup. This makes artifacts a practical way to create and share lightweight tools, visualisations, and formatted documents. See also [Publishing and sharing artifacts](https://support.claude.com/en/articles/9547008-publishing-and-sharing-artifacts). For more detail, see [Anthropic's artifacts documentation](https://support.claude.com/en/articles/9487310-what-are-artifacts-and-how-do-i-use-them).

### Projects

Projects are the feature most likely to transform how you use Claude for sustained academic work. A Project combines three things:

1. **A knowledge base:** Upload PDFs, texts, spreadsheets, and other documents -- up to around 500 pages of material. Claude can draw on this material in every conversation within the Project.
2. **Custom instructions:** A system prompt that defines Claude's role, tone, rules, and focus for this Project. For example: "You are assisting with a monograph on late-antique North Africa. Use formal academic English. When discussing primary sources, always cite by standard abbreviation. Flag any claims you are uncertain about."
3. **Shared context:** Every conversation in the Project has access to the same knowledge base and instructions. This means you do not need to re-upload documents or re-explain your project each time. However, the specific content of one conversation is not automatically available in another -- if a decision was made in conversation A, add it to the Project knowledge base or instructions so conversation B can see it.

!!! essential "Essential"
    **Rule of thumb:** If you paste the same context more than twice, it belongs in a Project. Setting up a Project takes five minutes; the time saved on repeated context-setting pays for itself within a day.

How to set up a Project for research:

1. Create a new Project and give it a descriptive name ("Chapter 3 -- Trade Networks", "Grant Application 2026", "Latin Epigraphy Module").
2. Upload your key sources: the texts you are working with, relevant secondary literature, your own notes or drafts.
3. Write custom instructions that set the disciplinary context: your field, your standards for evidence, your preferred citation style, any terminology conventions.
4. Start a conversation within the Project. Claude now has your context from the beginning -- no need to re-explain your topic, your sources, or your expectations.

Projects are available on all plans including free, with usage limits. A paid subscription (Pro or higher) increases capacity. See [How to create and manage Projects](https://support.claude.com/en/articles/9519177-how-can-i-create-and-manage-projects) and [RAG for Projects](https://support.claude.com/en/articles/11939498-retrieval-augmented-generation-rag-for-projects).

### How Claude remembers

Claude has four distinct kinds of memory. Understanding the difference helps you choose the right one for your work:

1. **Chat context.** Within a single conversation, Claude remembers everything said so far. This is automatic and reliable, bounded only by the context window (a limit on how much text Claude can hold at once).
2. **Project context.** Uploaded documents and custom instructions that are shared across all conversations in a Project. This is not automatic memory -- you curate what goes in. It is the most reliable way to give Claude persistent context for a sustained piece of work.
3. **Memory from chat history.** Claude builds a profile of your preferences and facts from past conversations. This is available on all tiers including free. Think of it as Claude recognising you and your working habits, not as a precise record of your arguments. Useful for general preferences (citation style, disciplinary context); not a substitute for Project context.
4. **Past chat search.** Claude can search your previous conversations by keyword. Useful for finding what you discussed previously, but does not give Claude automatic continuity between conversations.

For any sustained piece of work, use a Project rather than relying on general memory or chat search. See [Chat search and memory](https://support.claude.com/en/articles/11817273-use-claude-s-chat-search-and-memory-to-build-on-previous-context) and [Import and export your memory](https://support.claude.com/en/articles/12123587-import-and-export-your-memory-from-claude).

*How Claude remembers: four layers from most to least reliable.*

| Layer | Description |
|---|---|
| **1. Chat context** | Within one conversation. Automatic and reliable. Bounded by the context window. |
| **2. Project context** | Uploaded documents and instructions. You curate what goes in. Shared across conversations in a Project. |
| **3. Memory** | Profile of your preferences from past conversations. Available on all tiers. Less precise than Project context. |
| **4. Past chat search** | Keyword search across your conversation history. Retrieval, not continuity. |

!!! caution "Caution"
    **Note:** These features are changing rapidly. Check the [Claude Help Centre](https://support.claude.com/en/articles/8114491-getting-started-with-claude) for the current state. Section last verified: March 2026.

### Integrations

Claude Chat supports integrations with external services, including Google Drive and various MCP (Model Context Protocol) servers for Pro subscribers and above. These integrations allow Claude to access data from other tools -- for example, pulling documents from Google Drive directly into a conversation. The available integrations are evolving; browse what's available at [Using connectors](https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities) and the [Connectors Directory](https://claude.ai/directory).

---

## Dos and don'ts

### Do:

- **Be specific** about what you want -- audience, format, length, level of detail, disciplinary register.
- **Upload relevant documents** rather than describing them. Claude works much better with the actual text in front of it.
- **Ask Claude to critique its own output.** "What are the weaknesses of this argument?" or "What have I missed?" often surfaces useful insights.
- **Use Projects** for any work spanning more than one session.
- **Set a custom style** for your discipline -- it saves repeating stylistic instructions in every conversation.
- **Ask for sources and then verify them independently.** Claude can point you in the right direction, but its citations need checking.
- **Keep conversations focused:** one task, one conversation.

### Don't:

- **Trust citations without checking.** Claude can fabricate references -- plausible author names, plausible titles, plausible journals, entirely fictional. Always verify.
- **Upload sensitive, personal, or embargoed data** without checking your institution's policy on third-party AI services.
- **Assume one good answer means all answers are good.** Quality varies between tasks, topics, and even between turns in the same conversation.
- **Use Chat when you need file-system access or code execution.** Use [Code](code.md) instead.
- **Treat a single conversation as a persistent workspace.** Conversations have context limits. For ongoing work, use Projects.
- **Mix multiple unrelated topics** in a single conversation.

---

## Best working practices for humanities scholars

### The iterative refinement pattern

The most productive way to work with Claude on writing or analysis is not to ask for a finished product in one go. Instead, iterate:

1. **Draft:** Ask Claude to produce a first attempt, giving clear instructions about scope, audience, and format.
2. **Critique:** Ask Claude to identify weaknesses, gaps, or unsupported claims in its own draft. Or provide your own critique.
3. **Revise:** Ask Claude to address the identified problems, incorporating your feedback and its own self-critique.
4. **Verify:** Check factual claims, citations, and reasoning against your own knowledge and trusted sources.

This pattern works for drafting prose, building arguments, preparing teaching materials, and analysing sources. It treats Claude as a capable but fallible collaborator rather than an oracle.

For prompting principles that apply across all platforms, see [Prompting Principles](../essentials/prompting.md).

### Using system prompts via Projects

The custom instructions in a Project function as a system prompt -- they shape Claude's behaviour before the conversation begins. Use them to set disciplinary context: your field's conventions, your standards for evidence, the register you expect, and any rules Claude should follow. A well-written system prompt can turn a general-purpose AI into something much closer to a knowledgeable research assistant in your specific area.

### Building a "research assistant" Project

For a sustained research topic -- a dissertation chapter, a monograph, a module you teach regularly -- create a dedicated Project. Upload your key primary sources, your most important secondary literature, your own notes and outlines. Write instructions that encode your methodological preferences. Over time, this Project becomes a persistent, context-rich workspace that understands your work far better than a fresh conversation ever could.

### When to start a new conversation

Start a new conversation when you switch tasks, when the current conversation has become long and unfocused, or when Claude seems to be losing track of earlier context (repeating itself, contradicting earlier statements, forgetting constraints you set). Within a Project, starting a new conversation is low-cost -- the Project's knowledge base and instructions carry over automatically.

### Managing context window limits

Every conversation has a context window -- a limit on how much text Claude can hold in working memory at once. When you upload very long documents or have extended conversations, you may approach this limit. Signs include Claude forgetting earlier parts of the conversation or failing to reference material you uploaded. When this happens: start a new conversation (within the same Project, if applicable), re-upload the most relevant materials, and summarise what has been decided so far. For more, see [Usage and length limits](https://support.claude.com/en/articles/11647753-understanding-usage-and-length-limits) and [Usage limit best practices](https://support.claude.com/en/articles/9797557-usage-limit-best-practices).

**What fits in a 200K-token context window?** Approximate humanities equivalents:

| Content type | Approximate capacity |
|---|---|
| Full monograph | ~1 book |
| Academic pages | ~500 pages |
| Journal articles (full) | ~50 articles |
| Abstracts only | ~300 abstracts |
| PhD thesis | ~1 thesis |

*Based on 200K tokens &asymp; 150,000 words. Actual capacity depends on document formatting, images, and conversation history.*

### Exporting for provenance

If you use Claude's output in your research or teaching, keep a record. You can export conversations from claude.ai. Good practice includes noting: the date, the model used (Opus, Sonnet, etc.), what you asked, and what you used from the response. This is both good academic practice and increasingly expected by journals and institutions.

---

## Combining with other tools

### Chat &rarr; Code pipeline

A common pattern: prototype an idea in Chat -- explore the concept, draft a specification, work out what you want -- then move to [Claude Code](code.md) to build it. Chat is good for thinking; Code is good for making. For example, you might use Chat to design the structure of an interactive teaching tool, then use Code to actually build it as a working web page.

### Chat &rarr; multi-model review

Draft with Claude, then review the output with a different model (GPT, Gemini, or another). For verification strategies that apply across all platforms, see [Verification](../essentials/verification.md). The principle: when two independent models agree, you can be more confident; when they disagree, that disagreement is informative and worth investigating.

### Chat + reference managers

Claude Chat does not integrate directly with Zotero, Mendeley, or other reference managers. The practical workflow: use Claude to find and discuss literature, then manually verify and add confirmed references to your reference manager. Do not rely on Claude-generated bibliographic entries without checking them against the actual sources.

### Chat + institutional tools

If your institution provides Microsoft Copilot, you may have access to both Claude and Copilot. They serve different purposes: Copilot is embedded in your Microsoft 365 workflow (Word, Outlook, Teams); Claude is a standalone tool for deeper intellectual work. In general, use Copilot for quick document tasks within Microsoft apps and Claude for sustained analytical or creative work.

!!! offtrack "Off the Beaten Track"
    **Other Claude features**

    - **Research mode** lets Claude conduct extended, multi-step research with web searches before responding. See [Using Research on Claude](https://support.claude.com/en/articles/12925782-using-research-on-claude).
    - **Extended thinking** gives Claude space to reason through complex problems before responding. See [Using extended thinking](https://support.claude.com/en/articles/11559783-using-extended-thinking).
    - **File creation and editing** -- Claude can create Word documents, spreadsheets, presentations, and PDFs directly in conversation. See [Create and edit files with Claude](https://support.claude.com/en/articles/12637498-create-and-edit-files-with-claude).
