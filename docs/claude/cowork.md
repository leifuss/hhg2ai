---
title: "Cowork"
description: "Guide to Claude's Cowork mode — autonomous file tasks, document creation, and research synthesis via the desktop app."
last_verified: 2026-03-08
---

# Cowork

Part of [A Hitchhiker's Guide to AI for the Humanities](../index.md)

!!! caution "Caution"
    **Research preview:** Cowork is currently in research preview, available on macOS and Windows (x64). Features, availability, and pricing may change. This section describes Cowork as it exists at the time of writing (early 2026).

## Contents

- [2.1 What it is and what it's for](#what-it-is-and-what-its-for)
- [2.2 Setting up](#setting-up)
- [2.3 What it can do](#what-it-can-do)
- [2.4 Dos and don'ts](#dos-and-donts)
- [2.5 Best working practices](#best-working-practices)
- [2.6 Combining with other tools](#combining-with-other-tools)

---

## What it is and what it's for

Cowork is a mode within the Claude Desktop app that gives Claude access to folders on your computer and the ability to work autonomously on multi-step tasks. Where Chat is conversational -- you ask, Claude responds -- Cowork is task-oriented: you describe an outcome, Claude plans and executes it, and you come back to finished work.

Think of it as delegating a task to a capable assistant who has access to your filing cabinet. You say "organise these 200 PDFs by date and create a summary spreadsheet" or "turn these scattered notes into a formatted report," and Cowork plans the work, executes it in an isolated environment, and saves the results to your file system.

Cowork is built on the same architecture as Claude Code but does not require a terminal or command line (see [Getting started with Cowork](https://support.claude.com/en/articles/13345190-get-started-with-cowork)). It is particularly useful for:

- **File and document management** -- organising, renaming, sorting, and processing files in bulk
- **Document creation** -- producing spreadsheets, presentations, and formatted reports from your source materials
- **Research synthesis** -- reading through folders of notes, articles, or transcripts and producing structured summaries, indices, or bibliographies
- **Data processing** -- cleaning, transforming, and analysing datasets
- **Scheduled recurring tasks** -- work that Claude runs automatically on a cadence you set

!!! caution "Caution"
    **What Cowork does *not* do:** Cowork cannot see your screen or observe what you are doing in other applications. It interacts with your computer exclusively through file-system access within folders you explicitly grant and code execution in an isolated environment. For browser-based awareness, see [Claude in Chrome](apps.md#claude-in-chrome).

---

## Setting up

Cowork requires:

- macOS or Windows (x64)
- The Claude desktop app (download from [claude.ai/download](https://claude.ai/download))
- A paid subscription (Pro, Max, Team, or Enterprise)

Once installed, Cowork is available as a mode within the Claude desktop app. You will need to grant file-access permissions for the folders you want Claude to work with. Cowork only accesses folders you explicitly approve -- it does not have blanket access to your file system.

### Privacy considerations

Cowork reads files in folders you grant access to. Be mindful of what those folders contain: if a folder includes sensitive or personal documents alongside the files you want processed, Cowork will have access to all of them. Good practice is to keep your working folder focused on the materials Cowork needs, just as you would when sharing a folder with a colleague.

For data governance principles that apply across all platforms, see [Data Governance](../essentials/data-governance.md).

---

## What it can do

### File access and management

Cowork can read, create, edit, and organise files in folders you grant access to. You can ask it to:

- Read and summarise documents in a folder
- Compare two versions of a file
- Search through a folder of PDFs for specific content
- Rename, sort, or reorganise files by criteria you specify
- Read your notes and produce a structured synthesis

### Autonomous task execution

Unlike Chat, where you exchange messages back and forth, Cowork can plan and execute multi-step tasks on its own. Describe the outcome you want, review Claude's plan, then let it run. Progress indicators show what Claude is doing, and you can steer mid-task or let it work to completion. You can continue other work while Cowork runs -- it does not require your attention.

### Document creation

Cowork can produce professional documents directly: Excel spreadsheets with working formulas, PowerPoint presentations, Word documents, and formatted text files. Claude uses specialised skills to produce outputs with correct structure and formatting rather than approximations.

### Sub-agent coordination

For complex tasks, Cowork may break the work into parallel workstreams -- for example, processing different subsets of your files simultaneously or running analysis on one dataset while formatting another. This happens automatically; you describe the outcome, and Claude decides how to divide the work.

### Scheduled tasks

Use the `/schedule` command to create tasks that run automatically on a cadence you set. Claude runs them while the desktop app is open. Useful for recurring work: weekly literature digests, regular file organisation, periodic data pulls. See [Schedule recurring tasks](https://support.claude.com/en/articles/13854387-schedule-recurring-tasks-in-cowork).

### Plugins

Cowork supports plugins -- bundles of skills, connectors, slash commands, and sub-agents that customise it for specific roles or domains. These extend what Cowork can do beyond its built-in capabilities. See [Use plugins in Cowork](https://support.claude.com/en/articles/13837440-use-plugins-in-cowork).

### Global and folder instructions

You can set standing instructions that persist across sessions -- either globally (for all Cowork sessions) or per folder. These function like Project instructions in Chat: they tell Claude your conventions, preferences, and constraints so you do not have to repeat them each time.

---

## Dos and don'ts

### Do:

- **Be explicit about which folders Cowork should access** and where to save outputs. Clear folder structure helps Claude produce better results.
- **Start with a small, well-defined task** before delegating complex multi-step work. This lets you calibrate expectations.
- **Review Cowork's plan before letting it run,** especially for tasks that modify or create files.
- **Use folder instructions** to set context: what these materials are, what conventions to follow, what the output should look like.
- **Review Cowork's outputs** with the same critical eye you would apply to any AI-generated content.

### Don't:

- **Leave sensitive files in accessible folders** unless you intend Cowork to process them. Grant access only to what is needed.
- **Close the desktop app while Cowork is working** -- the session ends if the app closes.
- **Assume Cowork retains memory across sessions.** It currently does not. Use folder instructions for persistent context.
- **Treat file outputs as final without review.** Cowork may save files to your system -- check them before sharing or submitting.
- **Rely on Cowork for tasks requiring precise citation.** The same hallucination risks apply as with Chat -- verify all references.
- **Use Cowork for large-scale coding projects** that need full version control and sophisticated build workflows. [Code](code.md) gives you finer-grained control.

For more on safe usage patterns, see [Using Cowork safely](https://support.claude.com/en/articles/13364135-using-cowork-safely).

---

## Best working practices

### The delegation pattern

The most productive Cowork workflow treats it as a capable assistant you delegate tasks to:

1. Gather your source materials into a folder (notes, articles, data files, transcripts).
2. Write folder instructions that tell Claude the context: what these materials are, what conventions to follow, what the output should look like.
3. Open Cowork, select the folder, and describe the outcome you want.
4. Review Claude's plan, adjust if needed, then let it run.
5. Check the output. If it needs refinement, describe what to change -- Cowork can iterate.

### The scheduled research pattern

Set up recurring tasks for work that repeats: weekly literature digests, regular file organisation, periodic data tidying. Claude runs the task automatically while the desktop app is open. This is especially useful for maintaining a research project over weeks or months -- the routine upkeep happens without you initiating it each time.

### Organising research materials

Cowork can help impose structure on unstructured research materials. Ask it to read through a folder of notes or downloaded articles and create:

- A thematic index of your materials
- A chronological summary of key arguments in the literature
- A comparison table of different scholars' positions on a question
- An annotated bibliography from your reading notes

### When to use Cowork vs Chat vs Code

| Scenario | Best tool |
|---|---|
| Quick question, no files needed | [Chat](chat.md) |
| Discuss a document you can upload | [Chat](chat.md) (with upload) |
| Organise, process, or create files without a terminal | Cowork |
| Autonomous multi-step tasks while you do other work | Cowork |
| Build tools, write code, version-controlled projects | [Code](code.md) |
| Interact with web pages in your browser | [Claude in Chrome](apps.md#claude-in-chrome) |

---

## Combining with other tools

### Cowork &rarr; Chat

Use Cowork to gather and synthesise information from your local files, then take the key findings into a Chat Project for deeper analysis or writing. Cowork is good at breadth (processing many files quickly); Chat Projects are good at depth (sustained, focused conversation about a specific topic).

### Cowork &rarr; Code

If Cowork identifies a data problem or a need for systematic processing -- "these 50 XML files have inconsistent date formats" -- switch to [Code](code.md) for version-controlled development. Cowork handles ad-hoc tasks well; Code is better when you need a reproducible pipeline or a polished tool.

### Cowork + your normal tools

Cowork is designed to complement, not replace, your existing workflow. Continue using your preferred PDF reader, word processor, reference manager, and note-taking app. Cowork adds a layer of AI assistance on top of whatever you already do, operating on the files those tools produce.

!!! offtrack "Off the Beaten Track"
    **Extending Cowork**

    - **Plugins** customise Cowork for specific roles and domains. See [Cowork plugins](https://support.claude.com/en/articles/13837440-use-plugins-in-cowork).
    - **Scheduled tasks** let Claude run work automatically on a cadence you set. See [Scheduling documentation](https://support.claude.com/en/articles/13854387-schedule-recurring-tasks-in-cowork).
    - **Office add-ins** -- Cowork can coordinate with Claude in Excel and Claude in PowerPoint. See the [Apps & Extensions](apps.md) page.
