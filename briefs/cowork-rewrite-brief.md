# Priority 0 Brief: Cowork Rewrite and Missing Tools

**For:** Claude Code, working on `https://leifuss.github.io/ai4hums/claude/`
**Date:** 7 March 2026
**Priority:** This supersedes parts of the earlier briefs. The Cowork rewrite is the most urgent correction in the guide.

---

## Part A: Cowork page rewrite

### The problem

The guide's entire Cowork section (cowork.html) is built on a false premise. It describes Cowork as having "screen awareness" — the ability to see your screen, observe what you're working on, and answer questions about what's displayed. **Cowork does not have screen awareness.** When asked directly, Cowork responds: "I don't have the ability to see your screen directly."

The following sections are factually wrong and must be removed or completely rewritten:

- §3.1: "it observes what you are doing and offers help in context" — wrong
- §3.1: "a research assistant who can see the document on your screen" — wrong
- §3.3 "Screen awareness" (entire subsection): "Cowork can see and understand what is displayed on your screen" — wrong. All four examples (point to a passage, check a spreadsheet, read a manuscript, summarise a web page) describe capabilities Cowork does not have
- §3.3 "File access": partially right (Cowork can read files in folders you grant access to), but the framing implies this is secondary to screen awareness, when it is actually Cowork's core mechanism
- §3.5 comparison table: "Ask about what is on your screen right now → Cowork" — wrong
- §3.5 "The parallel research pattern": steps 1–3 assume screen awareness; only step 4 is valid

### What Cowork actually does

According to Anthropic's current documentation, Cowork's key capabilities are:

1. **Direct local file access** — Claude can read from and write to files in folders you explicitly grant access to
2. **Autonomous multi-step task execution** — You describe an outcome, Claude plans and executes it, running in a VM
3. **Sub-agent coordination** — Claude breaks complex tasks into parallel workstreams
4. **Professional document outputs** — Excel spreadsheets with working formulas, PowerPoint presentations, formatted documents
5. **Scheduled tasks** — Create tasks that run automatically on a cadence
6. **Long-running tasks** — Complex work that runs for extended periods without conversation timeouts
7. **Plugins** — Bundles of skills, connectors, slash commands, and sub-agents for specific roles or domains
8. **Global and folder instructions** — Standing instructions that persist across sessions

Cowork does NOT have: screen awareness, screen reading, the ability to see other applications, or ambient observation of your workflow. It interacts with your computer exclusively through file system access within approved folders and code execution in a VM.

### How to rewrite §3.1 (What it is and what it's for)

Replace the current framing. Something like:

> Cowork is a mode within the Claude Desktop app that gives Claude access to folders on your computer and the ability to work autonomously on multi-step tasks. Where Chat is conversational — you ask, Claude responds — Cowork is task-oriented: you describe an outcome, Claude plans and executes it, and you come back to finished work.
>
> Think of it as delegating a task to a capable assistant who has access to your filing cabinet. You say "organise these 200 PDFs by date and create a summary spreadsheet" or "turn these scattered notes into a formatted report," and Cowork plans the work, executes it in an isolated environment, and saves the results to your file system.
>
> Cowork is built on the same architecture as Claude Code but does not require a terminal or command line. It is particularly useful for:
>
> - **File and document management** — organising, renaming, sorting, and processing files in bulk
> - **Document creation** — producing spreadsheets, presentations, and formatted reports from your source materials
> - **Research synthesis** — reading through folders of notes, articles, or transcripts and producing structured summaries, indices, or bibliographies
> - **Data processing** — cleaning, transforming, and analysing datasets
> - **Scheduled recurring tasks** — work that Claude runs automatically on a cadence you set

### How to rewrite §3.3 (What it can do)

Delete the "Screen awareness" subsection entirely. Replace with subsections covering:

1. **File access and management** — reading, creating, editing, organising files in folders you grant access to
2. **Autonomous task execution** — describe an outcome, Claude plans and executes. Progress indicators show what Claude is doing. You can steer mid-task or let it run.
3. **Document creation** — Excel with working formulas, PowerPoint presentations, Word documents, PDFs. Claude uses Skills for professional output quality.
4. **Sub-agent coordination** — for complex tasks, Claude may spin up parallel workstreams
5. **Scheduled tasks** — use `/schedule` to create recurring tasks. Claude runs them automatically while the desktop app is open.
6. **Plugins** — customise Cowork for specific roles or domains. Bundles of skills, connectors, and commands.

### How to rewrite §3.4 (Dos and don'ts)

Remove:
- "Take advantage of screen awareness" — capability doesn't exist
- "Use Cowork for tasks that need code execution → use Code" — Cowork now executes code in a VM

Add:
- Do: Be explicit about which folders Cowork should access and where to save outputs
- Do: Start with a small, well-defined task before delegating complex multi-step work
- Do: Review Cowork's plan before letting it run, especially for tasks that modify files
- Don't: Leave sensitive files in folders that Cowork has access to unless intentional
- Don't: Close the desktop app while Cowork is working (the session ends)
- Don't: Assume Cowork retains memory across sessions (it currently does not)

### How to rewrite §3.5 (Best working practices)

Delete "The parallel research pattern" — it assumes screen awareness.

Replace with a pattern built around what Cowork actually does. Something like:

**The delegation pattern:**

1. Gather your source materials into a folder (notes, articles, data files, transcripts)
2. Write folder instructions that tell Claude the context: what these materials are, what conventions to follow, what the output should look like
3. Open Cowork, select the folder, describe the outcome you want
4. Review Claude's plan, adjust if needed, then let it run
5. Check the output. If it needs refinement, describe what to change — Cowork can iterate

**The scheduled research pattern:**

Set up a recurring task for work that repeats: weekly literature digests, regular data pulls, periodic file organisation. Claude runs the task automatically while the desktop app is open.

### Update the comparison table (§3.5)

| Scenario | Best tool |
|----------|-----------|
| Quick question, no files needed | Chat |
| Discuss a document you can upload | Chat (with upload) |
| Organise, process, or create files without a terminal | Cowork |
| Autonomous multi-step tasks while you do other work | Cowork |
| Build tools, write code, version-controlled projects | Code |
| Interact with web pages in your browser | Claude in Chrome |

---

## Part B: Missing tools — where they fit

The guide currently covers Chat, Code, and Cowork. Anthropic's product surface has expanded. The following tools exist and are relevant to humanities scholars but are not mentioned in the guide:

### Claude in Chrome

**What it is:** A browser extension that lets Claude see your browser, read web pages, click buttons, fill forms, and navigate sites. Available for Pro, Max, Team, and Enterprise subscribers. This is the closest thing to the "screen awareness" the guide currently (wrongly) attributes to Cowork — but it's limited to browser content, not your full desktop.

**Humanities relevance:** Medium-high for web-based research. A scholar working across digital archives, library catalogues, or IIIF collections could use Claude in Chrome to navigate, extract, and synthesise across multiple tabs. It can also help with form-filling, data extraction from web interfaces, and navigating complex institutional portals.

**Limitations:** Browser only (not your desktop). No Projects, memory, or MCP connectors. Not a replacement for Chat or Code. Currently Chrome-only (no Firefox, Safari, etc).

### Claude in Excel

**What it is:** A Microsoft Excel add-in that puts Claude in a sidebar within Excel. Claude can read multi-tab workbooks, explain formulas with cell-level citations, edit cells while preserving formula dependencies, create pivot tables and charts, and debug errors. Available for Pro, Max, Team, Enterprise.

**Humanities relevance:** Medium. Useful for scholars working with structured data in spreadsheets — prosopographical databases, survey results, catalogue data, quantitative analysis. Less relevant for text-heavy humanities work.

**Limitations:** Shares usage limits with all other Claude products. No VBA or macro support. Chat history not retained between sessions. Beta.

### Claude in PowerPoint

**What it is:** A Microsoft PowerPoint add-in. Claude reads slide masters, layouts, fonts, and colour schemes, and can build or edit slides while maintaining template formatting. Can create native (editable) charts and diagrams rather than static images.

**Humanities relevance:** Medium. Useful for preparing conference presentations, teaching slides, and lecture materials. The template-awareness is genuinely helpful — it means Claude can produce slides that match your department or institutional branding.

**Limitations:** Currently beta, available for Max, Team, Enterprise only. Research preview.

### Claude in Slack

**What it is:** Integration that brings Claude into Slack workspaces.

**Humanities relevance:** Low for individual scholars, moderate for research teams using Slack.

### Where these should go in the guide

**Option A (recommended): A new page — "Part X: Claude in Your Apps"**

Create a single page covering Claude in Chrome, Claude in Excel, and Claude in PowerPoint. Keep it short — one section per tool, covering: what it does, when a humanities scholar might use it, how to install it, and key limitations. Link to Anthropic's documentation for details. Don't try to be comprehensive; just give enough for a reader to decide whether it's relevant to them.

This page should sit after Cowork and before Shared Principles. The rationale: these are tools that embed Claude in applications the reader already uses. They're lower-commitment than Code (no terminal, no git) and more targeted than Cowork (they operate within a specific application). The natural reading order becomes:

1. **Chat** — the starting point
2. **Cowork** — Claude works on your files autonomously
3. **Claude in Your Apps** — Claude embedded in your browser, spreadsheet, or slides
4. **Code** — Claude as a builder (for DH scholars and those who want full control)
5. **Shared Principles** — applies to all of the above

**Option B: Brief mentions on existing pages**

Add a short subsection to the overview page listing these tools with one-line descriptions, and link to Anthropic's documentation. This is lighter-touch but risks the tools being invisible — a reader who doesn't know they exist won't go looking.

**My recommendation:** Option A, but keep the page short. Three sections, 300–500 words each. The page title should signal that these are optional and application-specific, something like "Claude in Your Apps (Browser, Excel, PowerPoint)" with a header note: "These are optional integrations. You don't need any of them to use Claude effectively. They're worth knowing about if you already work in these applications."

### What about Claude in Slack?

Mention it in a line or two but don't give it a full section. Most humanities scholars don't use Slack for research. If they do, they can follow the link to Anthropic's docs.

### What about the Connectors Directory?

The guide mentions integrations briefly in chat.html §1.3 but doesn't mention the Connectors Directory (claude.ai/directory), which now includes interactive connectors for tools like Google Drive, Google Calendar, Gmail, Notion, Linear, Figma, and more. These are relevant — a scholar connecting Claude to Google Drive or Google Calendar is a realistic use case. A brief mention in the Chat page or Shared Principles, with a link to the directory, would be proportionate.

---

## Part C: Structural implications

If you adopt the recommendations from this brief and the earlier supplementary brief (reordering Cowork before Code), the guide structure becomes:

1. **Overview** — orientation table, browser/desktop/mobile distinction, decision flowchart, "minimum safe practice" box
2. **Chat** — conversations, Projects, uploads, artifacts, memory (corrected), styles (corrected path)
3. **Cowork** — folder-based file access, autonomous tasks, document creation, scheduled tasks (completely rewritten)
4. **Claude in Your Apps** — Chrome extension, Excel add-in, PowerPoint add-in (new page)
5. **Code** — CLI and desktop GUI, git, CLAUDE.md, hooks, MCP (existing, with corrections from main brief)
6. **Shared Principles** — prompting, data governance, cost, verification, multi-model (existing, with additions from main brief)
7. **Environments** — where to run Code (existing)
8. **Skills** — what to learn (existing)
9. **Workflows** — worked examples (existing, with broader examples per main brief)
10. **Glossary** — new page (per supplementary brief)

The progression is: conversational → autonomous file tasks → embedded in your apps → full builder toolkit → principles that apply everywhere. Each step adds capability and complexity. A reader can stop at any point and have a coherent, useful subset of the guide.

---

## Implementation order

1. **Rewrite cowork.html** — this is the most urgent fix. The current page actively misleads. Do this before any other structural changes.
2. **Create the "Claude in Your Apps" page** — can be done in parallel with other work.
3. **Update the overview page** — new structure, updated orientation table, corrected tool descriptions.
4. **Update cross-references** — any page that links to Cowork or mentions screen awareness needs updating.
5. **Renumber parts** if adopting the new structure.

Each step should be a separate commit with a descriptive message.
