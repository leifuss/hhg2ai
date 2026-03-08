# Code Page Audit Brief

**For:** Claude Code, working on `https://leifuss.github.io/ai4hums/claude/code.html`
**Date:** 7 March 2026
**Follows:** All previous briefs. This addresses the Code page specifically.

---

## Verdict

The Code page is substantially more accurate than the Cowork page. Its core framing, engineering advice, and worked examples are sound. But it has gaps that matter for the audience, and several items have drifted out of date. The single most important missing feature is Plan Mode, which is now central to the recommended Claude Code workflow and is the thing that would most reassure humanities scholars about safety.

---

## A. Errors and outdated content

### A1. Installation instructions are outdated

**Where:** §2.3 "Setting up" — CLI setup steps

**Problems:**
- The guide says to install via `npm install -g @anthropic-ai/claude-code`. This is now the legacy/deprecated method. The recommended approach is Anthropic's native installer, which doesn't require Node.js.
- The guide says Windows users should "install WSL first, then install Node.js within it." WSL is now an option, not a requirement. Claude Code runs natively on Windows with Git for Windows.
- Node.js is no longer required for the native installer on any platform.

**Fix:** Rewrite step-by-step setup to reflect three options:

**macOS / Linux (recommended):**
```
curl -fsSL https://claude.ai/install.sh | bash
```

**Windows (recommended):**
```
irm https://claude.ai/install.ps1 | iex
```
Requires Git for Windows. No Node.js needed. Launch from PowerShell, CMD, or Git Bash.

**Windows (alternative):** Install via WSL for a Linux-based environment. Still supported, no longer required.

**Legacy:** `npm install -g @anthropic-ai/claude-code` still works but is deprecated and requires Node.js 18+. Not recommended for new installations.

### A2. Permission model is under-described

**Where:** §2.3 "Permissions and trust"

**Current text:** "By default, Claude will ask before writing or modifying any file, running any shell command, accessing the network."

**Problem:** This describes only one of three permission modes. Claude Code has:

1. **Normal mode** (default) — Claude asks before edits and shell commands. Reads files freely without asking.
2. **Auto-accept mode** — Claude makes changes without asking. Fast but risky.
3. **Plan mode** — Read-only. Claude can explore the codebase but cannot edit, write, or execute anything. This is the mode the guide should recommend humanities scholars start in.

The current description also says Claude asks before "reading" — this is misleading. In normal mode, Claude reads files without asking.

**Fix:** Rewrite the permissions section to describe all three modes. See section B1 below for Plan Mode coverage.

### A3. Slash commands table is stale

**Where:** §2.4, the table of slash commands

**Problems:**
- `/memory` — verify this still exists in the current CLI
- Missing commands that now exist: `/agents`, `/plan`, `/output-style`, `/simplify`, `/batch`, `/insights`
- Custom slash commands (user-created) are not mentioned at all

**Fix:** Update the table. Don't try to be exhaustive — the list is growing fast. Instead, list the most useful commands for the target audience and add a note: "Run `/help` for the full current list. Claude Code adds commands regularly."

Recommended for the table:

| Command | What it does |
| --- | --- |
| `/help` | Show available commands |
| `/plan` | Enter plan mode (read-only exploration) |
| `/clear` | Clear conversation history |
| `/compact` | Compress conversation to save context |
| `/cost` | Show session cost (API users) |
| `/model` | Switch between models mid-session |
| `/agents` | View and manage subagents |
| `/doctor` | Diagnose configuration issues |
| `/init` | Generate a CLAUDE.md for the current project |
| `/review` | Review a pull request or changes |

### A4. Claude Code Desktop is missing

**Where:** §2.2 "Where it runs"

**Problem:** The guide describes two forms of Claude Code: web and CLI. There is now a third: Claude Code Desktop — a graphical interface within the Claude Desktop app. This runs Code with visual diff review, app previews, and no terminal required.

**Fix:** Add a short subsection:

> **Claude Code Desktop**
>
> The Claude Desktop app includes a Code tab that provides the same capabilities as the CLI through a graphical interface. You can select a project folder, see file changes in a visual diff view, preview running web apps, and review code — all without opening a terminal.
>
> Key characteristics:
> - Requires the Claude Desktop app (macOS or Windows)
> - Graphical interface — no terminal needed
> - Visual diff review for code changes
> - Can run sessions locally or in the cloud (remote sessions continue even if you close the app)
> - Good for: humanities scholars who want Code's power without learning the terminal

This is important for the audience. Many humanities scholars who would benefit from Code are put off by the terminal. Claude Code Desktop is the answer the guide should be pointing them to.

---

## B. Significant missing content

### B1. Plan Mode (major gap)

**Where:** Should appear in §2.4 or §2.8, or both

**What it is:** A read-only mode where Claude explores the codebase, asks clarifying questions, and creates a detailed implementation plan — without modifying anything. You review and approve the plan, then switch to normal mode for execution.

**Why it matters for this audience:** Plan Mode directly addresses the guide's central concern about safety and control. It gives humanities scholars a concrete mechanism for the "review before acting" principle the guide already advocates. Instead of hoping Claude will ask before doing something wrong, Plan Mode guarantees it: Claude literally cannot write, edit, or execute while in plan mode.

**Recommended workflow for the guide:**

The guide should present a three-phase workflow:

1. **Explore** (plan mode): "Read through this project and explain its structure." Claude reads files, searches patterns, and builds understanding — all without modifying anything.
2. **Plan** (plan mode): "Create a plan for adding search functionality to this edition." Claude produces a written plan. You review it, ask questions, refine it.
3. **Execute** (normal mode): "Implement the plan." Claude builds it, asking permission for each change.

**How to activate:** Press Shift+Tab twice in the CLI (cycles through normal → auto-accept → plan). Or type `/plan`. Or start a session with `claude --permission-mode plan`.

**Suggested placement:** Add a new subsection to §2.8 ("Best working practices") titled "The explore-plan-execute pattern." This naturally extends the existing "incremental building pattern" with a concrete mechanism.

### B2. Extended thinking

**Where:** Brief mention in §2.8 or §2.4

**What it is:** Claude Code now has extended thinking enabled by default — Claude reasons through complex problems step-by-step before responding. This reasoning is visible in verbose mode (toggle with Ctrl+O).

**Why it matters:** The guide says in Shared Principles "ask Claude to think step by step." In Code, this is built in. Worth a sentence noting this, especially because humanities scholars may want to see the reasoning (Ctrl+O) when Claude is making decisions about their data.

### B3. Subagents (brief mention)

**Where:** §2.4 or §2.6 (MCP section, expanded to "extending Claude Code")

**What it is:** Claude Code can spawn specialised sub-agents that work in their own context window with custom instructions and tool access. These can be created via `/agents` or as markdown files.

**Humanities relevance:** A DH scholar could create a subagent specialised in TEI validation, or encoding checks, or bibliography formatting. The subagent handles that specific task without cluttering the main conversation's context.

**Recommended treatment:** Brief paragraph in §2.4, not a full section. Something like: "Claude Code can delegate specific tasks to specialised sub-agents (use `/agents` to manage them). Each sub-agent works in its own context with its own instructions. This is useful for repetitive specialist tasks — for example, a sub-agent configured to validate TEI XML encoding could check every file in your corpus while your main session handles other work."

### B4. Custom slash commands (brief mention)

**Where:** §2.4 alongside the built-in commands table

**What it is:** Users can create custom slash commands as markdown files in `.claude/commands/` (project-level) or `~/.claude/commands/` (global). A command is a reusable prompt triggered by typing `/command-name`.

**Humanities relevance:** A `/validate-tei` command, a `/check-encoding` command, a `/update-bibliography` command — these turn repetitive multi-step instructions into one-word shortcuts.

**Recommended treatment:** One paragraph after the slash commands table: "You can create your own slash commands by placing a markdown file in `.claude/commands/` in your project directory. The file name becomes the command. For example, a file called `check-encoding.md` containing instructions for verifying UTF-8 encoding across your corpus would be triggered by typing `/check-encoding`. This is useful for standardising repetitive tasks across a project."

---

## C. Content that should be adjusted

### C1. The CLAUDE.md example

**Problem:** The example in §2.3 includes BEM naming conventions, `xmllint --schema`, and `python -m pytest` — developer-culture signals that may alienate humanities readers who aren't already developers.

**Fix:** Keep the current example but add a simpler one before it, labelled "A minimal CLAUDE.md for a humanities project":

```
# Project: Edited Letters of Florence Nightingale

## Context
Transcribed letters in plain text files (letters/).
Building a searchable web page to browse them.

## Conventions
- British English in all generated text
- Preserve original spelling in letter transcriptions
- UTF-8 encoding throughout

## Important
- Never modify files in letters/ — these are the source texts
- The output site goes in site/
```

Then present the current example as "A more detailed CLAUDE.md for a DH project with specific technical requirements."

### C2. The "agentic" explanation

**Where:** §2.1, first line

**Current text:** "Claude Code is an agentic coding tool"

**Problem:** "Agentic" is not glossed until the reader has already absorbed it. The glossary (per supplementary brief) will help, but the first occurrence should include an inline explanation.

**Fix:** "Claude Code is an agentic coding tool — meaning it can take actions autonomously, not just respond to messages. Claude can read files, write files, run commands, search the web, and iterate on its own work."

### C3. Cost information

**Where:** §2.1, final paragraph

**Current text:** Mentions Pro, Max, and API key as access methods.

**Problem:** Doesn't mention that Code is also available as a tab in the Claude Desktop app (no separate install needed for the GUI version). Doesn't mention that the native installer is free — you authenticate with your existing subscription.

**Fix:** Brief clarification: "Claude Code is included with Pro, Max, Team, and Enterprise subscriptions. On the web and in the Desktop app, no separate installation is needed. For the CLI, install the native binary (free) and authenticate with your existing Anthropic account."

---

## D. What NOT to change

- The core framing about non-AI-dependent outputs — keep it, it's valuable and correct
- The incremental building pattern — keep it, it maps well onto humanities workflows
- The CLAUDE.md concept and advice — keep it, just add the simpler example
- The emphasis on git — keep it, it's the right advice even if some readers won't follow it
- The MCP section — it's accurate and appropriately marked as optional
- The hooks section — accurate and appropriately marked as optional
- The "when things go wrong" section — practical and honest
- The worked examples — accurate and useful (though should be supplemented per main brief)

---

## Implementation order

1. Fix the installation instructions (A1). Commit.
2. Add Plan Mode section and the three permission modes (A2 + B1). Commit.
3. Add Claude Code Desktop to §2.2 (A4). Commit.
4. Update slash commands table (A3). Commit.
5. Add the simpler CLAUDE.md example (C1). Commit.
6. Add brief mentions of subagents and custom commands (B3 + B4). Commit.
7. Minor adjustments: extended thinking note (B2), "agentic" gloss (C2), cost clarification (C3). Commit.
