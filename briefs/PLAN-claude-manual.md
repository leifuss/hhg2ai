# Plan: Best Practice Manual for Digital Humanists Using Claude

**Date:** March 2026 (revised)
**Status:** Draft for review

---

## Scope and rationale

A comprehensive guide to Claude's three main interfaces — **Chat** (claude.ai), **Code** (CLI/web agentic tool), and **Cowork** (desktop research preview) — written for digital humanists and humanities scholars. The manual should be practical, honest about limitations, and grounded in real workflows rather than feature lists.

### Relationship to the existing guide

The existing site (`guide/`) already covers:
- General LLM orientation (briefing, mindset, rules, getting-started)
- Agentic AI concepts (agentic.html — levels of agency, audit recipe, cross-model review)
- Microsoft Copilot best practice (copilot.html)
- Use cases by time investment
- Ancient languages, FAQ, glossary, resources

**This manual is a new page** that goes deep on Claude specifically — the tool this guide was built with and the one the author knows best. It complements rather than duplicates the existing agentic.html page (which covers agentic *concepts*; this covers Claude *practice*).

### What the GPT 5.4 brief gets right
- The LLM systems stack framing (infrastructure → runtime → prompt → tool → agent → human)
- MCP as an important interoperability layer
- Cost routing principle (use expensive models only where they add value)
- The idea that multi-model review improves quality (already implemented in agentic.html)

### What the GPT 5.4 brief gets wrong or overstates
- **"Claude Coworker"**: The feature is called "Cowork" — it's a research preview in Claude Desktop, not a separate product
- **Model strength comparisons** are too schematic ("GPT for critique, Claude for coding") — real comparative advantage depends on task, prompt, and version
- **LangGraph** is a developer framework, not relevant to humanities audience
- **The multi-model orchestration framing** is the wrong lens for this manual — we're writing about Claude specifically, not multi-model architecture
- **Missing entirely**: Claude Projects, artifacts, custom styles, memory, conversation management — the features humanities scholars actually interact with daily

### Key additional source: TheDecipherist's Claude Code Mastery Guide (V4/V5)

The guide at [thedecipherist.com](https://thedecipherist.com/articles/claude-code-guide-v4/) and its [GitHub companion](https://github.com/TheDecipherist/claude-code-mastery) is the best single resource on Claude Code configuration. Key insights to incorporate:

- **CLAUDE.md is suggestion; hooks are enforcement.** CLAUDE.md instructions can be "forgotten" under context pressure. Hooks fire deterministically. This distinction matters for the guide — we should teach it clearly.
- **Two-level CLAUDE.md**: Global (`~/.claude/CLAUDE.md`) for organisation-wide rules, project-level (`./CLAUDE.md`) for project-specific conventions. The global file is a security gatekeeper.
- **Security finding**: Claude Code reads `.env` files without explicit permission. The guide should warn about this.
- **Single-purpose chats**: Research shows 39% performance degradation when mixing topics in a single conversation. One task per session.
- **Exit code semantics for hooks**: 0 = allow, 1 = error (user-visible), 2 = block and feed stderr to Claude.
- **Starter kit** with templates for CLAUDE.md, hooks, skills, and settings.json.

We should cite this resource and adapt its advice for a non-developer audience. Some of the developer-oriented detail (CI/CD hooks, language-specific toolchains) isn't relevant, but the architectural principles absolutely are.

---

## Proposed structure

### Format decision

**Single long page** (`guide/claude-best-practice.html`) with thorough anchor-linked table of contents. All section headings will be linkable (`id` attributes). Reasons:
- The existing site already has 12+ pages; adding 3–4 more fragments navigation
- A single reference page is searchable (Ctrl+F) and printable
- Internal anchor links provide navigation; readers can bookmark/share specific sections
- The existing copilot.html follows this single-page pattern successfully

### Proposed sections

---

#### Part 0: Orientation — Which Claude tool do I need?

A decision matrix right at the top. Before going deep on any tool, help the reader choose.

| If you want to... | Use | You'll need | Skills required |
|---|---|---|---|
| Ask questions, get writing help, analyse documents | **Chat** (claude.ai) | Free account or Pro subscription | None — just a browser |
| Work on a research project with persistent context | **Chat Projects** | Pro/Team subscription | None |
| Build tools, process data, work with code or files at scale | **Code** (web) | Max subscription | Basic comfort with a text interface (see Part 6) |
| Build tools with full local control, version control, automation | **Code** (CLI) | Max subscription or API key | Terminal basics, ideally git (see Part 6) |
| Research across documents, desktop-based workflow | **Cowork** | Pro or Max subscription + **macOS only** | None — GUI-based |

Brief note: these aren't competing tools but points on a spectrum from conversational to agentic. Many tasks start in chat and graduate to code when they need file access or iteration.

**An important framing for Code**: The output of Claude Code need not depend on LLMs at all. It can produce entirely "traditional" digital outputs — static web pages, Python scripts, cleaned datasets, formatted bibliographies, visualisations — that work independently of any AI system. Claude Code is the builder; the thing it builds can be conventional software, a conventional website, or a conventional data pipeline. This is a strength: you get AI assistance in the construction process without creating AI dependency in the result.

---

#### Part 1: Claude Chat (claude.ai)

**1.1 What it is and what it's for**
- The conversational interface at claude.ai (web) and the Claude mobile/desktop apps
- Best for: exploratory questions, writing assistance, document analysis, brainstorming, translation, feedback on drafts
- The starting point for most humanities scholars

**1.2 Setting up**
- Account tiers: Free, Pro, Team, Enterprise — link to pricing page rather than quoting prices that will date
- What Pro adds: more usage, Claude Projects, priority access to newer models
- Model selection: when to use Opus vs Sonnet vs Haiku (and what the names mean)
- Custom styles: creating a style that matches your discipline's voice and expectations. Two methods: descriptive (write a plain-language explanation) or example-based (paste samples of your writing)

**1.3 Core features and how to use them well**

- **Conversations**: Each conversation has its own context. Starting fresh vs continuing. Evidence-based rule: one topic per conversation — mixing topics degrades performance by up to 39%.
- **File uploads**: PDFs, images, spreadsheets, code. Limits and what works well. Uploading primary sources.
- **Web search**: When Claude searches the web. How to use it, how to verify what it finds.
- **Artifacts**: Standalone outputs in a side panel — documents, code, live-rendering HTML/React apps, SVG diagrams, structured data. Can iterate with follow-up prompts ("make the buttons bigger", "add a timeline"). AI-powered artifacts can themselves call Claude's API. Publishable: share via link, free to recipients (usage counts against their own subscription). Available on all plans.
- **Projects**: The three-part system: (1) knowledge base — upload PDFs, texts, spreadsheets up to 200K tokens (~500 pages); (2) custom instructions — role, tone, rules for that project; (3) memory across sessions within the project. The killer feature for ongoing research. How to set up a project for a research topic, a module, or a writing task. Rule of thumb: if you paste the same context more than twice, it belongs in a Project.
- **Memory**: What Claude remembers across conversations (and what it doesn't). Memory within Projects vs no memory between separate conversations outside Projects.
- **Integrations**: MCP integration for artifacts (Pro+), Google Drive, etc. — what connects and what doesn't.

**1.4 Dos and don'ts**

*Do:*
- Be specific about what you want (audience, format, length, level of detail)
- Upload relevant documents rather than describing them
- Ask Claude to critique its own output
- Use Projects for any work spanning more than one session
- Set a custom style for your discipline
- Ask for sources and then verify them independently
- Keep conversations focused: one task, one conversation

*Don't:*
- Trust citations without checking (Claude can fabricate references)
- Upload sensitive/personal/embargoed data (check your institution's policy)
- Assume one good answer means all answers are good
- Use Chat when you need file-system access or code execution (use Code instead)
- Treat a single conversation as a persistent workspace (it has limits; use Projects)
- Mix multiple unrelated topics in a single conversation

**1.5 Best working practices for humanities scholars**
- The iterative refinement pattern: draft → critique → revise → verify
- Using system prompts (via Projects) to set disciplinary context
- Building a "research assistant" project with your key texts and methodological preferences
- When to start a new conversation vs continue an existing one
- Managing context window limits on long documents
- Exporting conversations for provenance records

**1.6 Combining with other tools**
- Chat → Code pipeline: prototype in chat, build in Code
- Chat → multi-model review: draft with Claude, review with another model
- Chat + reference managers (Zotero, etc.): workflow for literature work
- Chat + institutional tools (Copilot, Teams): when to use which

---

#### Part 2: Claude Code

**2.1 What it is and what it's for**
- An agentic tool that runs in your terminal, in VS Code, or on the web
- It reads files, writes code, runs commands, and iterates — not just conversation
- Best for: building tools, processing datasets, transforming files, creating visualisations, working with repositories
- **Crucially**: the outputs are conventional digital artefacts — web pages, scripts, datasets, formatted documents — that don't require AI to use. Claude Code is the means of production, not a dependency of the product.
- This guide was built with Claude Code (concrete example). Other examples: the [Gnomon Shadow Explorer](https://leifuss.github.io/gnomondemo/gnomon_shadow_explorer.html), the [Grammar Crammer](https://leifuss.github.io/grammarcrammer/), and the [Online RTI Viewer](https://leifuss.github.io/claudertidemo/) — all standard web applications built with AI assistance.

**2.2 Where it runs: web, local, cloud, and remote**

This is a key decision. Claude Code runs in several environments, each with different trade-offs:

| Environment | What it means | Best for | You'll need |
|---|---|---|---|
| **Web** (code.claude.ai) | Runs in your browser in a cloud sandbox linked to a GitHub repo | Quick tasks, no local setup, parallel sessions | Max subscription, GitHub account |
| **Local CLI** | Runs in your terminal, directly on your files | Full control, privacy, complex workflows | Max sub or API key, Node.js, terminal comfort |
| **VS Code extension** | Integrated into the VS Code editor | If you already use VS Code | Max sub or API key, VS Code installed |
| **Remote server (VPS)** | Runs on a dedicated cloud server you SSH into | Persistent sessions, heavy workloads, device independence | VPS (from ~€5/month), SSH access, API key |
| **Remote Control** | Start a session on one machine, transfer it to another | Mobility between laptop/desktop/server | Supported on web ↔ CLI |

**Key distinction: web vs local CLI**
- **Web**: No installation. Connects to GitHub repos. Runs in an isolated sandbox — safe, but you can't access local files or run arbitrary tools. Good for: trying Claude Code for the first time, working on GitHub-hosted projects, running tasks in parallel.
- **Local CLI**: Full access to your filesystem, your tools, your environment. More powerful but requires more setup. Good for: working with local files, using custom tools (pandoc, Python, R), complex multi-step workflows.
- **Remote/VPS**: Your agent runs on a server that stays on even when your laptop is closed. You SSH in from any device. Good for: long-running tasks, working from multiple devices, separating development from your personal machine.

For most humanities scholars starting out: **begin with the web interface**. Graduate to local CLI when you need local file access or custom tools. Consider a VPS only if you're running regular, long-running tasks.

**2.3 Setting up**
- **CLAUDE.md**: The most important configuration file. Claude Code loads it automatically at session start — it's the agent's persistent memory for your project. Two levels:
  - **Global** (`~/.claude/CLAUDE.md`): Rules that apply to every project — your security baseline. Example: "Never read or display .env files. Use British English. Always ask before deleting files."
  - **Project** (`./CLAUDE.md` in your project folder): Project-specific conventions. Example for a humanities project: "This project contains Latin texts in UTF-8. Do not modify files in /sources/. Commit messages should reference the relevant text or section. Output files go in /output/."
  - Important: CLAUDE.md is a *suggestion* — Claude reads it and usually follows it, but under context pressure it can be forgotten. For hard constraints, use hooks (see 2.5).
- **Permission modes**: Understand what you're authorising. The spectrum from "ask me everything" to "do what you think best" and when each is appropriate. Default to cautious; relax as you gain confidence.
- **Security**: Claude Code can read `.env` files and other sensitive files without explicit permission. Keep credentials out of your project directory, or use hooks to block access to sensitive file patterns.

**2.4 Commands and functionality**
- **Slash commands**: /help, /clear, /compact, /model, /cost, /permissions, etc. Also custom slash commands you define.
- **Skills**: Markdown files (`SKILL.md`) that teach Claude Code domain-specific workflows. Skills can be auto-invoked when relevant, or triggered manually as slash commands. Example for humanities: a skill that knows how to process TEI-XML files according to your project's conventions, or a skill that formats bibliographic entries in a specific citation style.
- **Thinking mode**: Extended thinking for complex problems. When to use it.
- **File operations**: Reading, writing, editing files. How Claude Code navigates your project.
- **Shell commands**: Running scripts, installing packages, building projects — Claude Code can use any tool installed on your system.
- **Git integration**: Commits, branches, diffs. Claude Code as a git-aware assistant.
- **Web search**: Searching documentation and references during a task.
- **Sub-agents**: How Claude Code delegates to specialised sub-processes (Explore, Plan, general-purpose) for parallel work. Keeps the main context focused while sub-agents handle research or planning tasks.

**2.5 Hooks**
- What hooks are: shell commands, HTTP endpoints, or LLM prompts that execute automatically at specific points in Claude Code's lifecycle. They are *deterministic* — unlike CLAUDE.md instructions, they cannot be ignored or forgotten.
- **PreToolUse** hooks: run before Claude acts — can allow, deny, or ask permission. Example: a hook that blocks `rm -rf` fires every single time, regardless of context pressure. Exit code 2 = block the action and explain why to Claude.
- **PostToolUse** hooks: actions after Claude completes a step — validation, logging, auto-formatting.
- **SessionStart** hooks: load context at startup — existing issues, recent changes, environment variables.
- Practical examples for humanities work:
  - A hook that backs up files before editing
  - A hook that validates XML/TEI after modification
  - A hook that runs a spell-checker on modified text files
  - A hook that blocks deletion of source files
  - A hook that prevents access to `.env` and credential files
- **The key distinction**: CLAUDE.md = suggestion; hooks = enforcement. Use CLAUDE.md for preferences and context; use hooks for hard rules you never want broken.

**2.6 MCP (Model Context Protocol) in Claude Code**
- What MCP is: a standard protocol for connecting AI tools to external data sources and services
- How it works in Claude Code: adding MCP servers via `.mcp.json` in your project root (shareable with collaborators via git)
- MCP Tool Search: lazy loading that reduces context usage by up to 95% — you can run many MCP servers without hitting context limits
- Useful MCP servers for humanities work:
  - Filesystem (already built in)
  - Database connectors (PostgreSQL, SQLite — for structured data, gazetteers, prosopographies)
  - Web fetch (retrieving and processing web content)
  - GitHub (for repository operations)
  - Google Drive / Sheets (for collaborative data)
  - Context7 (live documentation access)
- Setting up an MCP server: configuration in `.mcp.json`, testing the connection
- Security considerations: use environment variables for credentials, never commit tokens to git. "As soon as Claude can call the tool, it represents some kind of identity within your system."

**2.7 Dos and don'ts**

*Do:*
- Use version control (git) before letting Claude Code modify files — this is your safety net
- Write a CLAUDE.md file for every project
- Start with small, contained tasks before complex multi-file operations
- Review diffs (what changed) before accepting modifications
- Use the web interface if you're not comfortable with the terminal
- Set clear constraints: "Only modify files in /output/", "Do not delete anything"
- Keep one task per session — don't mix unrelated topics
- Use hooks for hard constraints, CLAUDE.md for preferences

*Don't:*
- Point Claude Code at a directory containing sensitive data, credentials, or API keys
- Accept changes without reviewing them, even if the agent reports success
- Give it fully autonomous permissions on important projects
- Assume that a working result means a correct result — test and verify
- Ignore cost: agentic workflows consume significantly more tokens than chat
- Assume CLAUDE.md rules will always be followed — use hooks for critical constraints

**2.8 Best working practices**
- The CLAUDE.md as institutional memory: encoding your project's conventions
- Working in branches: let Claude Code work on a branch, review before merging
- The Explore → Plan → Execute → Commit workflow: understand first, plan second, build third
- The audit recipe (link to agentic.html for the full version)
- Cost management: monitoring with /cost, choosing appropriate models for sub-tasks
- When to use Code vs Chat: the file-access and iteration thresholds
- Session management: handoff documents for continuity between sessions
- For large projects: plan locally (`--plan` mode), execute remotely (`--remote`), review locally

**2.9 Combining with other tools**
- Code + git + GitHub: the full development workflow
- Code + MCP + databases: querying structured humanities data
- Code + pandoc/LaTeX: document preparation pipelines
- Code + Python/R: data analysis workflows
- Code + other models: using Claude Code to orchestrate tasks that involve other AI tools

---

#### Part 3: Cowork (Research Preview)

**Prerequisites and platform note**: Cowork is currently available only on **macOS** via the Claude Desktop app. It requires a **Pro or Max subscription**. Windows support has been announced but has no confirmed timeline. If you're on Windows or Linux, the closest equivalents are Claude Code on the web (for file-processing tasks) or Claude Chat with file uploads (for document analysis).

**3.1 What it is and what it's for**
- A feature in Claude Desktop that brings agentic capabilities to non-coding workflows
- Origin: Anthropic built Claude Code for developers, but found people using it for everything else — Cowork repackages those capabilities for non-technical tasks
- You give Claude access to a folder on your computer; it can read, edit, and create files in that folder
- It makes a plan, works through it step by step, and loops you in on progress — more agent-like than a conversation
- Best for: document organisation, research across files, turning notes into structured output, batch file processing
- Current status: research preview (launched January 2026) — expect changes

**3.2 Setting up**
- Requires: Claude Desktop app on macOS + Pro or Max subscription
- Granting folder access: you choose which folder Claude can work in — it cannot access files outside this
- **Connectors and plugins**: Cowork supports connectors (Google Drive, Gmail, DocuSign, etc.), skills, and a Chrome add-on to extend what it can do across apps and the web
- Plugin ecosystem: users can install plugins from Cowork, upload custom ones, or build new ones using Plugin Create (launched Jan 30 2026)

**3.3 What it can do**
- Read, edit, and create files within its designated folder
- Reorganise files (sort, rename, restructure directories)
- Turn screenshots of receipts into spreadsheets, notes into reports
- Browse the web via Chrome add-on
- Multi-step workflows: plan → execute → check → adjust
- Connect to external services via connectors (Google Drive, etc.)
- Use skills and plugins for domain-specific tasks

**3.4 Dos and don'ts**

*Do:*
- Point Cowork at a specific project folder, not your entire home directory
- Give clear, scoped instructions ("Sort these PDFs by date and rename them with the pattern YYYY-MM-DD_title")
- Monitor what Cowork is doing — it shows you its actions in real time
- Use it for tasks that genuinely benefit from file manipulation and multi-step planning
- Start with non-sensitive test files to learn the interaction pattern

*Don't:*
- Give it access to folders containing sensitive data, credentials, or personal files
- Give it open-ended tasks without clear success criteria
- Assume it understands your institutional context or access permissions
- Use it for tasks that Chat handles better (pure Q&A, writing feedback) or Code handles better (version-controlled projects, code-heavy work)
- Ignore Anthropic's warning that it can take destructive actions if misdirected

**3.5 Best working practices**
- Preparing your workspace: create a dedicated project folder with copies of relevant files
- The "research sprint" pattern: assemble materials → define task → let Cowork process → review output
- When Cowork adds value over Chat: tasks requiring file creation/modification, batch operations on multiple files, cross-document analysis
- When Code is better: version-controlled projects, tasks requiring shell commands, complex code generation
- Limitations to expect: research preview, prompt injection risks (Cowork reads files that may contain adversarial content), destructive actions possible
- The folder-access model is a key safety feature: Claude can only touch what you've explicitly shared

**3.6 Combining with other tools**
- Cowork for file organisation and transformation → Chat for analysis and writing → Code for building
- Cowork + connectors (Google Drive, Gmail) for cross-platform workflows
- Cowork + plugins for domain-specific automation

---

#### Part 4: Across all three — Shared principles

**4.1 Prompting principles that apply everywhere**
- Be specific about your disciplinary context
- Provide examples of what you want
- Ask for reasoning, not just answers
- Request uncertainty flags ("tell me where you're least confident")
- Use the "explain then do" pattern for complex tasks

**4.2 Data governance**
- Link to the canonical rules page (rules.html)
- Summary of what applies to each tool:
  - Chat: data sent to Anthropic servers; check data retention policies
  - Code (CLI): files stay local but prompts/responses transit Anthropic servers
  - Code (web): code runs in a cloud sandbox; files are in the session
  - Cowork: file content from your designated folder is sent to Anthropic servers
- Institutional considerations: what your university's policy likely says

**4.3 Cost awareness**
- Chat: included in subscription (with usage limits that reset every 5 hours)
- Code: consumed from Max subscription or billed per API token
- Cowork: consumed from subscription
- Rough cost comparisons for typical tasks
- How to monitor and manage costs (/cost command in Code)

**4.4 Verification and provenance**
- Link to verification ladder on rules.html
- Tool-specific verification notes
- Recording what you did: conversation exports, git logs, session histories

**4.5 When to use multiple models**
- Link to cross-model review section in agentic.html
- Practical patterns: Claude drafts, GPT/Gemini reviews (or vice versa)
- When consensus is reassuring vs when disagreement is informative

---

#### Part 5: Where to run Claude Code — Laptop, cloud, desktop, or server?

A dedicated comparison section addressing the practical question of computing environment.

| Factor | Laptop (local CLI) | Web (code.claude.ai) | Desktop app | Dedicated server (VPS) |
|---|---|---|---|---|
| **Setup effort** | Medium (install Node.js, npm) | None | Low (download app) | High (provision server, SSH) |
| **File access** | Full local filesystem | GitHub repos only | Designated folders | Full server filesystem |
| **Privacy** | Files stay local; prompts sent to API | Code runs in Anthropic's cloud | Files stay local; prompts sent to API | Files on your server; prompts sent to API |
| **Persistence** | Session ends when terminal closes | Sessions persist in cloud | Session ends when app closes | Sessions persist (via tmux/screen) |
| **Cost** | Subscription/API only | Subscription only | Subscription only | Subscription/API + VPS (~€5–15/month) |
| **Parallel work** | One session per terminal | Multiple parallel sessions | One session | Multiple parallel sessions |
| **Best for** | Power users, local files, custom tools | Getting started, GitHub projects, parallel tasks | Cowork, casual use | Long-running tasks, teams, heavy workloads |
| **Platform** | macOS, Linux, Windows (WSL2) | Any (browser) | macOS (Cowork); macOS/Windows (chat) | Any (SSH from any device) |

**Recommendation for most humanities scholars**: Start with the web interface or desktop app. Move to local CLI when you need local file access. Consider a VPS only if you're running regular long tasks or want device independence.

---

#### Part 6: Skills you may need — and how to prioritise learning them

Claude Code is usable without deep technical knowledge, but certain skills dramatically increase what you can accomplish. This section is honest about what helps and what you can skip.

**Tier 1: Essential (learn these to get real value from Code)**

- **Terminal/CLI basics**: Opening a terminal, navigating directories (`cd`, `ls`), understanding file paths. ~30 minutes to learn enough. Claude Code's own [terminal guide for new users](https://code.claude.com/docs/en/terminal-guide) is a good starting point. Note: if you only use the web interface, you can skip this entirely.
- **Git fundamentals**: `git init`, `git add`, `git commit`, `git diff`, `git log`. Git is your safety net — it lets you see what changed and undo mistakes. ~1–2 hours for the basics. You don't need to master branching or rebasing; Claude Code handles the complex git operations for you. Start with [Git for Humanists](https://github.com/drjwbaker/git-for-humanists) or the [Programming Historian tutorial](https://programminghistorian.org/en/lessons/getting-started-with-github-desktop).

**Tier 2: Valuable (learn when you hit a ceiling)**

- **Markdown**: The format for CLAUDE.md, skills, and much documentation. If you've ever written a README on GitHub, you already know it. 15 minutes to learn.
- **Basic file formats**: Understanding CSV, JSON, XML/TEI. You don't need to write them by hand — Claude Code does that — but understanding what they are helps you specify what you want and verify what you get.
- **Python basics**: Not for writing code yourself, but for understanding what Claude Code produces and being able to run scripts. Useful for data processing workflows. The [Programming Historian](https://programminghistorian.org/) has excellent tutorials aimed at humanities scholars.

**Tier 3: Advanced (only if your work demands it)**

- **Bash scripting**: For writing hooks and automating workflows.
- **SQL basics**: For querying databases via MCP.
- **HTML/CSS**: For customising web-based outputs.
- **Regular expressions**: For complex text search and transformation.

**Can you skip all of this?** Yes, if you stick to Chat and Cowork, or use only the web interface for Code. But the local CLI + git combination is where Claude Code becomes most powerful for sustained research work, and the Tier 1 skills are a genuine investment that pays off quickly.

**A note on learning these skills with AI assistance**: There's a productive bootstrapping loop here. You can use Claude Chat to learn the terminal and git basics you need to use Claude Code effectively. Ask it to explain commands, walk you through a git workflow, or create a practice exercise. The AI can teach you the skills you need to use it more effectively — just verify what it teaches you against a trusted source (the Programming Historian, official documentation, etc.).

---

#### Part 7: Humanities-specific workflows (worked examples)

Examples drawn from the existing guide portfolio and from plausible generic scenarios. Where examples from the introductory guide are appropriate, we'll link to them; where different examples would serve better, we'll create new ones or point to external resources.

**7.1 Building a research project in Chat**
- Setting up a Project for a monograph chapter or article
- Uploading key sources and setting instructions
- Iterative drafting and critique workflow
- Example: a Project configured for reviewing secondary literature on a specific topic, with instructions for citation style, critical stance, and domain expertise

**7.2 Processing a text corpus with Code**
- Example: batch-processing a folder of transcribed texts (e.g., normalising spelling, extracting named entities, producing a concordance)
- Setting up CLAUDE.md, running the task, reviewing results
- The output: a clean dataset or index — a conventional digital artefact, not an AI-dependent one

**7.3 Building a web-based tool with Code**
- Example: creating an interactive visualisation or teaching tool
- The [Gnomon Shadow Explorer](https://leifuss.github.io/gnomondemo/gnomon_shadow_explorer.html) and [Grammar Crammer](https://leifuss.github.io/grammarcrammer/) as case studies — built with Claude Code, but the result is standard HTML/JavaScript that runs anywhere
- For external examples: link to [Claude Artifacts Gallery](https://support.claude.com/en/articles/11649427-use-artifacts-to-visualize-and-create-ai-apps-without-ever-writing-a-line-of-code) and community showcases

**7.4 Document preparation pipeline (Code + other tools)**
- Using Claude Code to orchestrate pandoc, LaTeX, or other document tools
- Example: converting a set of markdown notes into a formatted PDF with bibliography

**7.5 Data cleaning and transformation**
- Example: taking a messy CSV export from a historical database, cleaning it, and producing a structured dataset suitable for analysis
- Emphasis on verification: spot-checking the transformed data against the original

---

## Implementation notes

### File format
- Single HTML file: `guide/claude-best-practice.html`
- Following the existing site's conventions: `lang="en-GB"`, shared CSS, site nav, feedback footer
- Table of contents with anchor links (every `<h2>` and `<h3>` gets an `id`)
- Skip-logic callouts at the top of each major part ("If you only use Chat, read Parts 0, 1, 4, and skip the rest")

### Navigation integration
- Add to site nav across all existing pages
- Add guide card on index.html
- Position after "Agentic AI" in nav order (since it's a deep-dive on the tool the agentic page introduces)

### Sources to cite/link
- Anthropic documentation: https://docs.anthropic.com
- Claude Code docs: https://code.claude.com/docs/en/overview
- Claude Code hooks: https://code.claude.com/docs/en/hooks
- Claude Code terminal guide: https://code.claude.com/docs/en/terminal-guide
- Cowork help: https://support.claude.com/en/articles/13345190-getting-started-with-cowork
- Artifacts help: https://support.claude.com/en/articles/9487310-what-are-artifacts-and-how-do-i-use-them
- MCP specification: https://modelcontextprotocol.io
- TheDecipherist Claude Code Mastery: https://thedecipherist.com/articles/claude-code-guide-v4/
- TheDecipherist starter kit: https://github.com/TheDecipherist/claude-code-mastery-project-starter-kit
- Trail of Bits claude-code-config: https://github.com/trailofbits/claude-code-config
- Programming Historian: https://programminghistorian.org/
- Simon Willison's blog: https://simonwillison.net
- Ethan Mollick: https://www.oneusefulthing.org
- "Claude Code isn't just for developers" (XDA): https://www.xda-developers.com/claude-code-isnt-just-for-developers/
- "Claude Code for the Rest of Us" (WhyTryAI): https://www.whytryai.com/p/claude-code-beginner-guide

### What NOT to include
- Detailed API documentation (this is for end users, not developers)
- Pricing that will date quickly (link to pricing pages instead)
- Comparisons that position Claude as "better" than competitors (maintain the guide's honest, non-advocacy stance)
- LangGraph or other developer orchestration frameworks (wrong audience)

### Tone
- Match the existing guide: direct, honest, respectful of the reader's expertise, not evangelical
- British English throughout
- Assume the reader is an intelligent non-technical scholar, not a developer
- Technical terms explained on first use or linked to glossary
- Honest about what requires technical skills and what doesn't

---

## Resolved questions (from author feedback)

1. **Single page**: Confirmed. One long page with thorough anchor-linked headings. All sections linkable.

2. **Depth on Code**: Cover enough for a humanities scholar to understand what hooks, skills, and MCP are, why they matter, and how to set up basic examples. Link to TheDecipherist guide and official docs for deeper configuration. Don't try to replicate the full technical documentation.

3. **Cowork coverage**: Moderate but with a clear upfront statement about platform requirements (macOS only, research preview status). Enough to understand it and decide whether to try it.

4. **Worked examples**: Mix of real examples from the existing portfolio (Gnomon, Grammar Crammer, this guide itself) and new generic examples where the existing ones aren't appropriate. Link to existing guide examples where relevant; create new ones or point to external resources where not.

5. **Relationship to bootcamp.html**: Cross-link where relevant. The bootcamp is structured exercises; this manual is reference material. They complement rather than duplicate.

6. **Prerequisites/skills section**: Added as Part 6. Three tiers of skills, honest about what you need and what you can skip, with pointers to good learning resources (especially Programming Historian for the humanities audience). Includes the bootstrapping loop: use Chat to learn the skills you need for Code.

7. **Web vs local vs cloud vs server**: Added as Part 5 with comparison table. Clear recommendation: start with web, graduate to CLI, consider VPS only for heavy use.

8. **Output independence from LLMs**: Emphasised in Part 0 and Part 2.1. Claude Code builds conventional digital outputs — the products don't depend on AI.

---

## Estimated length

- Part 0 (orientation): ~600 words
- Part 1 (Chat): ~3,000 words
- Part 2 (Code): ~5,000 words
- Part 3 (Cowork): ~1,500 words
- Part 4 (Shared principles): ~1,500 words
- Part 5 (Where to run): ~800 words
- Part 6 (Skills): ~1,200 words
- Part 7 (Worked examples): ~2,000 words

**Total: ~15,600 words**

This is long for a single page but manageable with good navigation. The table of contents, skip-logic callouts, and linkable headings mean most readers will read selectively rather than end-to-end. For comparison, the TheDecipherist guide is similarly long and works well as a single reference.
