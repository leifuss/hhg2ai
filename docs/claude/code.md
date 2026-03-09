---
section: platforms
title: "Code"
description: "Comprehensive guide to Claude Code for humanities scholars — setup, commands, hooks, MCP, best practices, and combining with other tools."
last_verified: 2026-03-08
---

# Code

Part of [A Hitchhiker's Guide to AI for the Humanities](../index.md)

## Contents

- [4.1 What it is and what it's for](#what-it-is-and-what-its-for)
- [4.2 Where it runs](#where-it-runs)
- [4.3 Setting up](#setting-up)
- [4.4 Commands and functionality](#commands-and-core-functionality)
- [4.5 Hooks](#hooks)
- [4.6 MCP (Model Context Protocol)](#mcp-model-context-protocol)
- [4.7 Dos and don'ts](#dos-and-donts)
- [4.8 Best working practices](#best-working-practices)
    - [The explore-plan-execute pattern](#the-explore-plan-execute-pattern)
- [4.9 Combining with other tools](#combining-with-other-tools)
- [4.10 Reproducibility](#reproducibility)

---

## What it is and what it's for

Claude Code is an agentic coding tool -- meaning it can take actions autonomously, not just respond to messages. Claude can read files, write files, run commands, search the web, and iterate on its own work. Unlike Chat, where you exchange messages and Claude responds with text, Code gives Claude the ability to *act*: it can create a project from scratch, modify existing files, run tests, fix errors, and push to version control.

It is available in three forms:

- **Claude Code on the web** -- runs in your browser at claude.ai. No local installation required. Claude works in a cloud sandbox with its own file system. You upload files, Claude works on them, and you download the results.
- **Claude Code Desktop** -- a graphical Code interface within the Claude Desktop app. If you prefer a graphical interface, the Desktop app includes a Code tab that provides the same capabilities without requiring the terminal, plus visual diff review and app previews. Good for humanities scholars who find the terminal intimidating but want Code's capabilities.
- **Claude Code CLI** -- runs in your terminal (macOS, Linux, or Windows via WSL). Claude works directly on your local files, in your git repository, using your tools. The most powerful and flexible option -- but requires some comfort with a command-line interface.

!!! essential "Essential"
    **Why humanities scholars should care about Code:** Claude Code is not just for software engineers. It can build you a searchable digital edition of a text corpus. It can create an interactive map of historical trade routes. It can clean and transform a messy spreadsheet of archival data into a structured database. It can build a static website to present your research. The "code" is the means; the output is a humanities tool, resource, or dataset that works entirely without AI once built.

What Claude Code is particularly good at for humanities work:

- **Building web-based tools and resources** -- interactive editions, teaching tools, visualisations, project websites
- **Data transformation** -- converting between formats (XML to JSON, OCR output to clean text, spreadsheet to database), cleaning inconsistent data, merging sources
- **Text processing at scale** -- batch operations across hundreds of files that would be impractical by hand
- **Automating repetitive tasks** -- formatting bibliographies, standardising metadata, generating indices
- **Creating visualisations** -- charts, timelines, network graphs, maps from your data
- **Document preparation** -- LaTeX formatting, converting between document formats, preparing camera-ready copy

Claude Code is included with Pro, Max, Team, and Enterprise subscriptions. On the web and in the Desktop app, no separate installation is needed -- just sign in and start a session. For the CLI, install the native binary (free) and authenticate with your existing Anthropic account. API key access is also available for those who want direct usage-based billing. For most humanities scholars starting out, the Pro subscription is the simplest entry point; upgrade to Max if you find the token limits restrictive. For cost awareness principles that apply across all platforms, see [Cost](../essentials/cost.md).

---

## Where it runs

Understanding where Claude Code runs matters because it determines what files Claude can access and what happens to your work.

### Claude Code on the web

When you use Claude Code through the web interface at claude.ai, Claude works in a cloud-hosted sandbox -- a temporary virtual environment with its own file system. You upload files into this sandbox, Claude works on them, and you download the results.

Key characteristics:

- No installation required -- works in any modern browser
- Claude has its own temporary file system in the cloud
- You upload and download files manually
- The sandbox persists for the duration of your session but is not a permanent workspace
- Good for: trying Claude Code for the first time, one-off tasks, building something self-contained that you will download when finished

### Claude Code CLI (terminal)

The CLI version runs on your own machine (or a cloud server you control). Claude operates directly on your local file system, in your git repositories, with access to your installed tools.

Key characteristics:

- Requires the native installer (see [Setting up](#setting-up)) or the legacy npm method
- Claude reads and writes your actual files
- Works within git repositories, can commit and push
- Has access to any tools installed on your system (Python, pandoc, LaTeX, etc.)
- You approve or deny each action Claude takes -- it asks before writing files or running commands
- Good for: sustained projects, version-controlled work, anything that needs local tools or large file sets

### Claude Code Desktop

The Claude Desktop app (macOS or Windows) includes a Code tab that provides the same capabilities as the CLI through a graphical interface -- no terminal required.

Key characteristics:

- Requires the Claude Desktop app -- no separate Claude Code installation
- Select a project folder from within the app
- Visual diff view -- see exactly what Claude changed before accepting
- Preview running web apps directly within the app
- Remote sessions: can run in the cloud and continue even if you close the app
- Good for: humanities scholars who want Code's capabilities without learning the terminal

For a detailed comparison of environments, including cloud-hosted options, see [Environments](environments.md).

---

## Setting up

### Claude Code on the web

No setup required beyond having a Pro or Max subscription. Go to claude.ai, start a new conversation, and select Claude Code as the mode. You will see a file panel on the left and a conversation panel where you can talk to Claude and watch it work.

### Claude Code CLI

Setting up the CLI requires a few steps. If any of these are unfamiliar, see [Prerequisites](prerequisites.md) for guidance on building the necessary skills.

1. **Install Claude Code.** The recommended method depends on your platform:

    - **macOS / Linux (recommended):** Run in your terminal:
      ```
      curl -fsSL https://claude.ai/install.sh | bash
      ```
      No Node.js required.

    - **Windows (recommended):** Run in PowerShell:
      ```
      irm https://claude.ai/install.ps1 | iex
      ```
      Requires [Git for Windows](https://git-scm.com/download/win). Works in PowerShell, CMD, or Git Bash. No Node.js required.

    - **Windows via WSL (alternative):** Install WSL (Windows Subsystem for Linux), then run the Linux installer within it. Gives you a full Linux environment. No longer required for Windows, but still supported.

    - **Via npm (legacy):** `npm install -g @anthropic-ai/claude-code`. Requires Node.js 18+. Still works, but the native installer above is now preferred.

2. **Authenticate.** Run `claude` in your terminal. The first time, it will open a browser window for you to log in with your Anthropic account. If using an API key instead, set the environment variable: `export ANTHROPIC_API_KEY=your-key-here`

3. **Navigate to your project directory** and run `claude` to start a session:
    ```
    cd ~/my-research-project
    claude
    ```

Claude will now see all the files in that directory (and subdirectories). It will ask permission before reading, writing, or executing anything.

### The CLAUDE.md file

The most important configuration concept in Claude Code is the `CLAUDE.md` file. This is a plain text file you place in the root of your project directory. Claude reads it at the start of every session. It functions like the "custom instructions" in a Chat Project, but for Code.

A minimal `CLAUDE.md` for a humanities project might be just a few lines:

```
# Project: Conference Paper Figures

## Context
Generating charts and maps for a conference paper on medieval
trade networks. Source data in data/trade_routes.csv.

## Conventions
- Use British English
- Output figures to figures/ directory
- Use print-friendly colours (no neon)
```

For a digital humanities project with specific technical requirements, you might include build commands, file conventions, and protective rules:

```
# Project: Digital Edition of the Leptis Magna Inscriptions

## Context
This project creates a searchable web-based edition of Latin
inscriptions from Leptis Magna. The source data is in EpiDoc XML
(TEI-compliant). The output is a static HTML/CSS/JS website.

## Conventions
- Use British English in all comments and documentation
- Follow TEI P5 guidelines for markup
- CSS: use BEM naming convention
- File encoding: UTF-8 throughout
- Greek text: use Unicode polytonic Greek, never transliteration

## Commands
- Build the site: python build.py
- Run tests: python -m pytest tests/
- Validate XML: xmllint --schema tei_all.xsd inscriptions/*.xml

## Important
- Never modify files in the source-data/ directory without asking
- The canonical text is always the XML; HTML is generated from it
- Cite inscriptions by IRT number (e.g., IRT 321)
```

Keep your `CLAUDE.md` concise and factual. Claude reads it every session, so brevity saves context window space. Focus on what Claude needs to know to work effectively in your project: what the project is, what conventions to follow, how to build and test, and what to be careful about. See [CLAUDE.md documentation](https://code.claude.com/docs/en/memory).

### Permissions and trust

Claude Code operates in one of three permission modes. You switch between them by pressing ++shift+tab++ twice in the CLI (cycles through all three), or by starting a session with a flag:

| Mode | What Claude can do | When to use it |
|---|---|---|
| **Normal** (default) | Reads files freely. Asks before writing files or running shell commands. | Day-to-day work. The right balance for most sessions. |
| **Plan mode** | Read-only. Claude can explore the codebase and create a plan but cannot write, edit, or execute anything. | Starting a new project or unfamiliar codebase. Review what Claude intends to do before it does it. |
| **Auto-accept** | Claude makes changes without asking. Fast but risky. | Only when you fully trust the task and have version control in place to catch mistakes. |

Start a session in plan mode from the command line: `claude --permission-mode plan`. Or type `/plan` after starting a session. For humanities scholars new to Claude Code, **plan mode is the recommended starting point** -- it lets Claude explore your project, explain what it finds, and propose a course of action before touching anything.

---

## Commands and core functionality

### Starting a session

On the CLI, you start Claude Code by running `claude` in your terminal. You can also pass an initial instruction directly:

```
claude "create a timeline visualisation from dates.csv"
```

On the web, you simply type your request in the conversation panel.

### What Claude can do in a session

Within a Code session, Claude can:

- **Read files** -- any file in your project directory (or uploaded to the web sandbox)
- **Write and edit files** -- create new files or modify existing ones
- **Run shell commands** -- execute Python scripts, install packages, run build tools, use git
- **Search your codebase** -- find files by name or content, navigate large projects
- **Search the web** -- look up documentation, find examples, check current information
- **Iterate on errors** -- if something fails, Claude reads the error, diagnoses the problem, and tries again

This last point -- iteration -- is what makes Claude Code qualitatively different from Chat. In Chat, if Claude produces a Python script with a bug, you have to copy the error message back into the conversation and ask Claude to fix it. In Code, Claude runs the script, sees the error, and fixes it automatically. This loop of write &rarr; run &rarr; read error &rarr; fix can happen many times without your intervention.

### Slash commands (CLI)

In the CLI, several built-in commands are available. Claude Code adds commands regularly -- run `/help` to see the current full list.

| Command | What it does |
|---|---|
| `/help` | Show available commands and usage information |
| `/plan` | Enter plan mode -- Claude explores and plans without modifying anything |
| `/clear` | Clear the conversation history (start fresh within the same session) |
| `/compact` | Compress the conversation to save context window space |
| `/cost` | Show how much the current session has cost (API users) |
| `/model` | Switch between models (Opus, Sonnet, Haiku) mid-session |
| `/agents` | View and manage sub-agents spawned during the session |
| `/doctor` | Diagnose and fix common installation or configuration issues |
| `/init` | Generate a `CLAUDE.md` file for the current project |
| `/review` | Review a pull request or set of changes |

**Custom slash commands.** You can create your own commands by placing a Markdown file in `.claude/commands/` in your project directory. The filename becomes the command. For example, a file called `check-encoding.md` containing instructions for verifying UTF-8 encoding across your corpus would be triggered by typing `/check-encoding`. This is useful for standardising repetitive tasks: a `/validate-tei` command for TEI XML checking, a `/update-bibliography` command for bibliography maintenance. Global commands (available in all projects) go in `~/.claude/commands/`.

**Sub-agents.** Claude Code can delegate specific tasks to specialised sub-agents, each working in its own context window with its own instructions and tool access. Use `/agents` to view and manage active sub-agents. This is useful for repetitive specialist tasks -- for example, a sub-agent configured to validate TEI XML encoding could check every file in your corpus while your main session handles other work. Sub-agents can also be defined as Markdown files in `.claude/agents/`. See [Sub-agents documentation](https://code.claude.com/docs/en/sub-agents).

### Headless and non-interactive mode (advanced)

Claude Code can run without interactive input, which is useful for automation:

```bash
# Process every XML file in a directory
claude -p "validate all XML files in inscriptions/ against the TEI schema and report any errors"

# Pipe input to Claude
cat report.txt | claude -p "summarise this report in three bullet points"
```

The `-p` flag (print mode) runs Claude with your prompt and outputs the result to stdout, then exits. This lets you incorporate Claude into shell scripts and batch workflows.

### Multi-file operations

One of Claude Code's strengths is working across multiple files. You can ask it to:

- Rename a field across an entire codebase
- Convert a directory of Markdown files to HTML
- Add consistent metadata headers to 200 XML files
- Find and fix a pattern across all files matching a glob

Claude will read the relevant files, plan the changes, and ask for permission before modifying anything. For large batch operations, it often proposes a strategy first ("I'll process these 150 files in groups of 10") and checks with you before proceeding.

---

## Hooks

!!! offtrack "Off the Beaten Track"
    **Advanced topic.** You do not need hooks to use Claude Code effectively. Skip this section on first reading and come back when you have a specific need.

Hooks are shell commands that run automatically in response to Claude Code events. They let you add guardrails, automation, and custom behaviour without modifying Claude itself.

Hooks are configured in your Claude Code settings file (`~/.claude/settings.json` for global settings, or `.claude/settings.json` in a project directory for project-specific hooks). They fire at specific points in Claude's workflow:

| Hook event | When it fires | Humanities example |
|---|---|---|
| `PreToolUse` | Before Claude uses a tool (reads a file, runs a command, etc.) | Block Claude from modifying files in your `source-data/` directory |
| `PostToolUse` | After Claude uses a tool | Auto-format XML files after Claude edits them |
| `Notification` | When Claude sends a notification (e.g., task complete) | Play a sound or send a system notification when a long task finishes |
| `SessionStart` | When a new Claude Code session begins | Run a git pull to ensure you're working on the latest version |

A practical example -- protecting source data from accidental modification:

```json
// In .claude/settings.json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Edit|Write",
        "command": "bash -c '[[ \"$CLAUDE_FILE_PATH\" == source-data/* ]] && echo \"BLOCKED: Do not modify source data files\" && exit 1 || exit 0'"
      }
    ]
  }
}
```

This hook checks every file write operation. If Claude tries to modify anything in `source-data/`, the hook blocks it and explains why. Claude will see the blocked message and adjust its approach.

Hooks are optional and you do not need them to use Claude Code effectively. But as your projects grow, they become a useful safety net -- especially for protecting canonical source files that should never be modified by an automated tool. See [Hooks documentation](https://code.claude.com/docs/en/hooks).

---

## MCP (Model Context Protocol)

!!! offtrack "Off the Beaten Track"
    **Advanced topic.** MCP is optional. Many excellent projects use Claude Code without any MCP servers. Skip this section on first reading and come back when you have a concrete need for Claude to access an external database, API, or service.

MCP is an open protocol that lets Claude connect to external data sources and tools. Think of it as a standardised way to give Claude access to things beyond its built-in capabilities -- databases, file systems, APIs, specialised software.

For most humanities scholars, MCP matters in two ways:

1. **Using existing MCP servers** that give Claude access to useful services
2. **Understanding the concept** so you can evaluate whether a particular MCP integration would help your work

### What MCP servers do

An MCP server is a small program that exposes a specific capability to Claude. When you connect an MCP server, Claude gains new tools it can use during your session. Some examples relevant to humanities work:

| MCP server | What it gives Claude | Humanities use case |
|---|---|---|
| Filesystem | Access to specific directories outside the project | Reading source texts stored in a shared network drive |
| PostgreSQL / SQLite | Direct database queries | Querying a prosopographical or epigraphic database |
| Fetch | Ability to retrieve web pages and APIs | Pulling data from digital archives, library catalogues, or APIs like Pleiades, Pelagios, or IIIF manifests |
| GitHub | Interact with repositories, issues, pull requests | Managing a collaborative digital edition project |
| Google Drive | Read and search files in Google Drive | Accessing shared research documents without downloading them |
| Zotero (community) | Search and retrieve references from your Zotero library | Pulling citations directly into your workflow |

### Setting up MCP

MCP servers are configured in your Claude Code settings. For the CLI, this lives in `~/.claude/settings.json` (global) or `.claude/settings.json` (per-project):

```json
// In .claude/settings.json
{
  "mcpServers": {
    "sqlite": {
      "command": "npx",
      "args": ["-y", "@anthropic-ai/mcp-server-sqlite",
               "--db-path", "./data/inscriptions.db"]
    },
    "fetch": {
      "command": "npx",
      "args": ["-y", "@anthropic-ai/mcp-server-fetch"]
    }
  }
}
```

Once configured, Claude automatically discovers the available tools when a session starts. You do not need to tell Claude to "use the database server" -- it will see the database tools and use them when relevant.

On the web version of Claude Code, MCP configuration is available through the interface settings rather than a JSON file. See [MCP in Claude Code](https://code.claude.com/docs/en/mcp).

### When MCP is worth the setup

MCP is optional. Many excellent projects use Claude Code without any MCP servers. Consider adding MCP when:

- You repeatedly need Claude to access the same external resource (a database, an API, a shared drive)
- You want Claude to query structured data directly rather than exporting and uploading CSV files
- You are building a workflow that needs to pull from multiple sources automatically

If you are just starting with Claude Code, skip MCP for now and come back to it when you have a concrete need.

---

## Dos and don'ts

### Do:

- **Use version control (git).** This is the single most important practice. Git lets you track every change Claude makes and revert anything you do not want. Even if you are not a programmer, learn the basics of git before using Claude Code for serious work (see [Prerequisites](prerequisites.md)).
- **Write a good `CLAUDE.md`.** Five minutes of setup saves hours of repeated instructions. Include your project's conventions, important file locations, and anything Claude should be careful about.
- **Review changes before committing.** Claude will show you what it has changed. Read the diffs. Understand what was modified and why before accepting it into your project.
- **Start small.** Ask Claude to do one well-defined thing at a time rather than everything at once. "Convert this one XML file to HTML" before "build an entire digital edition."
- **Use `/compact` in long sessions.** If Claude starts losing context or repeating itself, compact the conversation to free up context window space.
- **Keep source data separate from generated output.** Maintain a clear distinction between your canonical sources (which Claude should never modify unsupervised) and the outputs Claude generates from them.
- **Test outputs.** If Claude builds you a web page, open it in a browser. If it writes a script, run it on a sample. If it transforms data, spot-check the results.
- **Use the web version first** if you are new to Claude Code. It is lower-risk (sandboxed) and requires no local setup.

### Don't:

- **Work without version control on anything you care about.** Claude is powerful but imperfect. Without git, a bad edit has no undo button.
- **Grant blanket permissions before you understand what Claude is doing.** Start with the default "ask every time" mode. Loosen permissions only after you are comfortable with the patterns.
- **Let Claude modify your canonical source files directly.** Work on copies, or use hooks to protect originals. The master copy of a critical text or dataset should be modified only by you, deliberately.
- **Assume Claude's first approach is optimal.** Claude may choose a complex solution when a simple one exists, or use a library you do not need. Question its architectural choices, especially early in a project.
- **Ignore error messages.** If Claude encounters an error and "fixes" it, make sure the fix addresses the root cause rather than papering over a symptom. Ask Claude to explain what went wrong.
- **Upload sensitive or personally identifiable data** without understanding your institution's data governance policies. For data governance principles that apply across all platforms, see [Data Governance](../essentials/data-governance.md).
- **Use Claude Code for tasks better suited to Chat.** If you just want to discuss an idea, get feedback on your writing, or brainstorm -- use [Chat](chat.md). Code is for building things.

---

## Best working practices

### The project setup pattern

Before asking Claude to build anything, spend five minutes setting up your project properly:

1. Create a directory for your project
2. Initialise a git repository: `git init`
3. Create a `CLAUDE.md` with your project context, conventions, and any rules
4. Add your source files (texts, data, images) to the directory
5. Make an initial commit: `git add -A && git commit -m "initial project setup"`

Now when you start Claude Code, it has your context, your files, and a safety net (git history) in place from the very beginning.

### The incremental building pattern

The most reliable way to build something with Claude Code is incrementally:

1. **Describe the end goal** clearly but ask Claude to start with the simplest possible version
2. **Get the basics working** before adding complexity -- a plain HTML page before styling, one file processed before the whole directory
3. **Commit after each working milestone.** If the next step goes wrong, you can revert to the last good state
4. **Add features one at a time,** testing each before moving to the next

This pattern avoids the common failure mode where Claude attempts to build an entire complex system at once, hits a problem three layers deep, and produces something that half-works in a way that is hard to debug.

### Working with existing codebases

Claude Code is not just for new projects. It can work effectively with existing code, data, or websites. When pointing Claude at an existing project:

- Make sure the project is in a git repository (so you can track and revert changes)
- Write a `CLAUDE.md` that explains the project structure, key files, and any conventions
- Ask Claude to explore and understand the project before modifying it: "Read through this project and explain its structure to me"
- Start with small, well-defined changes rather than major refactoring

### The explore-plan-execute pattern

For any project that matters -- especially when working with existing files, source data, or unfamiliar codebases -- the most reliable approach is a three-phase workflow that separates understanding from action:

1. **Explore (plan mode).** Start a session in plan mode: `claude --permission-mode plan` or type `/plan`. In this mode, Claude reads files, searches your project, and builds understanding -- but cannot write, edit, or execute anything. Ask it to explain what it finds: "Read through this project and describe its structure and any potential issues."
2. **Plan (still in plan mode).** Ask Claude to propose a course of action: "Create a plan for adding a search function to this edition." Claude produces a written plan. Review it, ask questions, and refine it. Because Claude is still in plan mode, it cannot act until you say so.
3. **Execute (normal mode).** Switch to normal mode (press ++shift+tab++ twice, or start a new session without the plan flag). Claude implements the agreed plan, asking permission before each individual change.

This pattern directly addresses the most common anxiety about AI coding tools: that Claude will "just start changing things." Plan mode guarantees it cannot -- Claude literally has no write or execute capability until you switch modes. It is the built-in mechanism for the "understand before acting" principle the guide already advocates. See [Common workflows](https://code.claude.com/docs/en/common-workflows) for more patterns.

### Extended thinking

Claude Code has extended thinking enabled by default for complex tasks: before responding, Claude reasons through the problem step-by-step. You can see this reasoning in verbose mode (toggle with ++ctrl+o++). This is the built-in equivalent of the "think step by step" prompt -- you do not need to ask for it separately in Code sessions. Turning on verbose mode is particularly useful when Claude is making decisions about your data or proposing a structural approach you want to understand.

### Context window management

Claude Code sessions have the same context window limits as Chat, but they fill up faster because Claude is reading files, running commands, and processing output. Practical strategies:

- **Use `/compact`** when the conversation gets long. This compresses earlier context while preserving the essential information.
- **Use `/clear`** to start fresh within the same session if you are switching to a different task within the same project.
- **Keep your `CLAUDE.md` concise.** Claude reads it every session -- a 2,000-word CLAUDE.md consumes significant context that could be used for actual work.
- **Break large tasks into sessions.** Rather than processing 500 files in one session, do 50 at a time, committing between batches.

### When things go wrong

Claude will sometimes produce code that does not work, make changes you did not want, or go down an unproductive path. This is normal. Strategies:

- **Revert with git:** `git checkout -- .` undoes all uncommitted changes. `git revert HEAD` undoes the last commit. This is why version control is non-negotiable.
- **Be specific about what went wrong.** "That didn't work" is less helpful than "the table headings are misaligned in Firefox" or "the script fails on files with non-ASCII characters."
- **Ask Claude to explain its reasoning.** Sometimes the approach is sound but the implementation has a bug; sometimes the approach itself is wrong. Understanding which helps you guide the fix.
- **Start a new conversation** if Claude seems stuck in a loop or keeps making the same mistake. A fresh start with a clearer prompt often works better than persisting.

### Documentation and reproducibility

Good academic practice applies to AI-assisted work too. For any project built with Claude Code:

- Keep your git history clean and well-commented -- it is your audit trail
- Document how to run, build, or deploy the project (a `README.md` is standard)
- Note which parts were AI-generated and which were hand-written, if this matters for your context
- If the project processes data, document the pipeline: what goes in, what transformations happen, what comes out

---

## Reproducibility

If your project processes research data, reproducibility matters -- for your own future work, for collaborators, and for peer review. Claude Code makes it easy to build pipelines; these practices make those pipelines trustworthy:

- **Pin dependencies.** If Claude installs Python packages, save the exact versions: `pip freeze > requirements.txt`. For JavaScript projects, commit the `package-lock.json`. This ensures someone else (or you, next year) can recreate the same environment.
- **Record the environment.** Note the Python version, operating system, and key library versions. A `README.md` in your project root is the standard place for this.
- **Write a data dictionary.** For any transformed dataset, document what each column or field contains, how it was derived, and what assumptions were made. Claude can draft this for you: "Write a data dictionary for metadata.csv explaining each column."
- **Include test runs.** Keep a small set of sample inputs with expected outputs. This lets you (or anyone) verify the pipeline produces correct results after changes. Claude can create these: "Create a test directory with 5 sample inputs and their expected outputs."
- **Document encoding assumptions.** Specify character encoding (UTF-8 is standard), Unicode normalisation form if relevant, and how the pipeline handles non-Latin scripts, diacritics, and special characters.
- **Keep scripts alongside data.** Transformation scripts belong in the same version-controlled repository as the data they produce. The git history then documents exactly how the data was processed, when, and what changed.

---

## Combining with other tools

### Code + Chat pipeline

A productive pattern is to use Chat and Code together, each for what it does best:

- **Chat for planning:** Discuss the project design, work through edge cases, decide on architecture. Chat is better for open-ended thinking because it does not try to execute anything -- it just talks.
- **Code for building:** Once you know what you want, switch to Code to implement it. Paste key decisions from your Chat conversation into the `CLAUDE.md` so Code has the same context.
- **Chat for review:** After Code builds something, use Chat to review the output. Upload the generated files and ask Chat to critique them, check for errors, or suggest improvements.

### Code + version control platforms

Claude Code integrates naturally with GitHub (and other git platforms). It can:

- Create branches, commit, and push
- Open pull requests with descriptive summaries
- Review pull requests from collaborators
- Work within a CI/CD pipeline (automated testing on each commit)

This makes Claude Code suitable for collaborative projects where multiple people contribute to a shared repository -- for example, a team building a digital edition or a shared dataset.

### Code + specialist software

Because Claude Code (CLI) runs on your machine, it can use any software you have installed:

- **pandoc** -- convert between document formats (Markdown, LaTeX, DOCX, HTML, EPUB)
- **LaTeX** -- typeset documents, format mathematical notation, prepare camera-ready papers
- **Python scientific stack** -- pandas for data analysis, matplotlib for visualisation, NLTK/spaCy for text processing
- **xmllint / Saxon** -- validate and transform XML/TEI documents
- **ImageMagick** -- batch process images (resize, convert, annotate)
- **ffmpeg** -- process audio and video files (useful for oral history or linguistic fieldwork data)
- **Tesseract** -- OCR processing of scanned documents and images

Claude knows how to use these tools. You install them on your system; Claude calls them as part of its workflow. You do not need to learn their command-line syntax -- Claude handles that -- but understanding what they do helps you direct Claude effectively.

### Code + other AI models

Claude Code can call other AI models via their APIs as part of a workflow. For example, a script that uses a local Whisper model for speech-to-text transcription, then passes the text to Claude for analysis. Or a pipeline that uses a specialised OCR model for handwriting recognition and Claude for the subsequent text processing. For multi-model strategies that apply across all platforms, see [Multi-Model Use](../essentials/multi-model.md).

!!! offtrack "Off the Beaten Track"
    **Going further with Claude Code**

    The features above cover what most humanities scholars need. Claude Code has additional capabilities that may be useful as your projects grow:

    - **Output styles** let you change how Claude Code communicates -- from concise to explanatory to fully custom. See [Output styles documentation](https://code.claude.com/docs/en/output-styles).
    - **Agent teams** coordinate multiple Claude instances working in parallel across separate git branches. Useful for large projects with independent components. See [Agent teams documentation](https://code.claude.com/docs/en/agent-teams).
    - **The Claude Agent SDK** lets you build custom agent workflows programmatically -- for automation, CI/CD, or integration with other tools. See [Agent SDK documentation](https://code.claude.com/docs/en/sdk).
    - **Plugins** bundle skills, sub-agents, commands, and connectors into shareable packages. See [Plugins documentation](https://code.claude.com/docs/en/plugins).
    - **GitHub Actions integration** lets Claude Code run as part of automated testing and review pipelines. See [CI/CD documentation](https://code.claude.com/docs/en/github-actions).
