# Plan: Best Practice Manual for Digital Humanists Using Claude

**Date:** March 2026
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

**This manual is a new page (or set of pages)** that goes deep on Claude specifically — the tool this guide was built with and the one the author knows best. It complements rather than duplicates the existing agentic.html page (which covers agentic *concepts*; this covers Claude *practice*).

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

---

## Proposed structure

### Format decision

**Single long page** (`guide/claude-best-practice.html`) rather than splitting across multiple pages. Reasons:
- The existing site already has 12+ pages; adding 3-4 more fragments navigation
- A single reference page is searchable (Ctrl+F) and printable
- Internal anchor links and a table of contents provide navigation
- The existing copilot.html follows this single-page pattern successfully

### Proposed sections

---

#### Part 0: Orientation — Which Claude tool do I need?

A decision matrix right at the top. Before going deep on any tool, help the reader choose.

| If you want to... | Use | You'll need |
|---|---|---|
| Ask questions, get writing help, analyse documents | **Chat** (claude.ai) | Free account or Pro subscription |
| Work on a research project with persistent context | **Chat Projects** | Pro/Team subscription |
| Build tools, process data, work with code or files | **Code** | Max subscription or API key |
| Research across documents, desktop-based workflow | **Cowork** | Pro or Max subscription + macOS |

Brief note: these aren't competing tools but points on a spectrum from conversational to agentic. Many tasks start in chat and graduate to code when they need file access or iteration.

---

#### Part 1: Claude Chat (claude.ai)

**1.1 What it is and what it's for**
- The conversational interface at claude.ai (web) and the Claude mobile/desktop apps
- Best for: exploratory questions, writing assistance, document analysis, brainstorming, translation, feedback on drafts
- The starting point for most humanities scholars

**1.2 Setting up**
- Account tiers: Free, Pro ($20/month), Team, Enterprise
- What Pro adds: more usage, Claude Projects, priority access to newer models
- Model selection: when to use Opus vs Sonnet vs Haiku (and what the names mean)
- Custom styles: creating a style that matches your discipline's voice and expectations

**1.3 Core features and how to use them well**

- **Conversations**: Each conversation has its own context. Starting fresh vs continuing.
- **File uploads**: PDFs, images, spreadsheets, code. Limits and what works well. Uploading primary sources.
- **Web search**: When Claude searches the web. How to use it, how to verify what it finds.
- **Artifacts**: Standalone outputs in a side panel — documents, code, live-rendering HTML/React apps, SVG diagrams, structured data. Can iterate with follow-up prompts. AI-powered artifacts can themselves call Claude's API. Publishable: share via link, free to recipients (usage counts against their own subscription). Available on all plans.
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

*Don't:*
- Trust citations without checking (Claude can fabricate references)
- Upload sensitive/personal/embargoed data (check your institution's policy)
- Assume one good answer means all answers are good
- Use Chat when you need file-system access or code execution (use Code instead)
- Treat a single conversation as a persistent workspace (it has limits; use Projects)

**1.5 Best working practices for humanities scholars**
- The iterative refinement pattern: draft → critique → revise → verify
- Using system prompts (via Projects) to set disciplinary context
- Building a "research assistant" project with your key texts and methodological preferences
- When to start a new conversation vs continue an existing one
- Managing context window limits on long documents

**1.6 Combining with other tools**
- Chat → Code pipeline: prototype in chat, build in Code
- Chat → multi-model review: draft with Claude, review with another model
- Chat + reference managers (Zotero, etc.): workflow for literature work
- Chat + institutional tools (Copilot, Teams): when to use which

---

#### Part 2: Claude Code

**2.1 What it is and what it's for**
- An agentic coding tool that runs in your terminal, in VS Code, or on the web
- It reads files, writes code, runs commands, and iterates — not just conversation
- Best for: building tools, processing datasets, transforming files, creating visualisations, working with repositories
- This guide was built with Claude Code (concrete example of humanities use)

**2.2 Setting up**
- **Access**: Max subscription (includes web access), or API key for CLI
- **CLI installation**: `npm install -g @anthropic-ai/claude-code` (requires Node.js)
- **Web access**: code.claude.ai — no installation needed, runs in browser
- **VS Code extension**: for those already using VS Code
- **CLAUDE.md**: The most important configuration file. What it is, what to put in it. Examples for humanities projects (e.g., "This project contains Latin texts in UTF-8. Use British English. Do not modify files in /sources/. Commit messages should reference the relevant text or section.")
- **Permission modes**: Understand what you're authorising. The spectrum from "ask me everything" to "do what you think best" and when each is appropriate.

**2.3 Commands and functionality**
- **Slash commands**: /help, /clear, /compact, /model, /cost, /permissions, etc. Also custom slash commands you define.
- **Skills**: Markdown files (SKILL.md) that teach Claude Code domain-specific workflows. Skills can be auto-invoked when relevant, or triggered manually as slash commands. Example for humanities: a skill that knows how to process TEI-XML files according to your project's conventions.
- **Thinking mode**: Extended thinking for complex problems. When to use it.
- **File operations**: Reading, writing, editing files. How Claude Code navigates your project.
- **Shell commands**: Running scripts, installing packages, building projects.
- **Git integration**: Commits, branches, diffs. Claude Code as a git-aware assistant.
- **Web search**: Searching documentation and references during a task.
- **Sub-agents**: How Claude Code delegates to specialised sub-processes (Explore, Plan, general-purpose) for parallel work. Keeps the main context focused while sub-agents handle research or planning tasks.

**2.4 Hooks**
- What hooks are: shell commands, HTTP endpoints, or LLM prompts that execute automatically at specific points in Claude Code's lifecycle
- **PreToolUse** hooks: run before Claude acts — can allow, deny, or ask permission. More reliable than instructions alone: "A CLAUDE.md instruction saying 'never use rm -rf' can be forgotten by context pressure; a PreToolUse hook that blocks it fires every time." Important caveat: guardrails, not walls — not a security boundary.
- **PostToolUse** hooks: actions after Claude completes a step (validation, logging)
- **SessionStart** hooks: load context at startup (existing issues, recent changes, environment variables)
- Practical examples for humanities work:
  - A hook that backs up files before editing
  - A hook that validates XML/TEI after modification
  - A hook that runs a spell-checker on modified text files
  - A hook that blocks deletion of source files

**2.5 MCP (Model Context Protocol) in Claude Code**
- What MCP is: a standard protocol for connecting AI tools to data sources
- How it works in Claude Code: adding MCP servers to your configuration
- Useful MCP servers for humanities work:
  - Filesystem (already built in)
  - Database connectors (PostgreSQL, SQLite — for structured data, gazetteers, prosopographies)
  - Web fetch (retrieving and processing web content)
  - GitHub (for repository operations)
  - Google Drive / Sheets (for collaborative data)
- Setting up an MCP server: configuration in settings, testing the connection
- Security considerations: what data MCP servers can access, how to limit scope

**2.6 Dos and don'ts**

*Do:*
- Use version control (git) before letting Claude Code modify files — this is your safety net
- Write a CLAUDE.md file for every project
- Start with small, contained tasks before complex multi-file operations
- Review diffs (what changed) before accepting modifications
- Use the web interface if you're not comfortable with the terminal
- Set clear constraints: "Only modify files in /output/", "Do not delete anything"

*Don't:*
- Point Claude Code at a directory containing sensitive data, credentials, or API keys
- Accept changes without reviewing them, even if the agent reports success
- Give it fully autonomous permissions on important projects
- Assume that a working result means a correct result — test and verify
- Ignore cost: agentic workflows consume significantly more tokens than chat

**2.7 Best working practices**
- The CLAUDE.md as institutional memory: encoding your project's conventions
- Working in branches: let Claude Code work on a branch, review before merging
- The audit recipe (link to agentic.html for the full version)
- Cost management: monitoring with /cost, choosing appropriate models for sub-tasks
- When to use Code vs Chat: the file-access and iteration thresholds
- Session management: handoff documents for continuity between sessions

**2.8 Combining with other tools**
- Code + git + GitHub: the full development workflow
- Code + MCP + databases: querying structured humanities data
- Code + pandoc/LaTeX: document preparation pipelines
- Code + Python/R: data analysis workflows
- Code + other models: using Claude Code to orchestrate tasks that involve other AI tools

---

#### Part 3: Cowork (Research Preview)

**3.1 What it is and what it's for**
- A feature in Claude Desktop (macOS; now available to Pro subscribers, not just Max) that brings agentic capabilities to non-coding workflows
- Origin: Anthropic built Claude Code for developers, but found people using it for everything else — Cowork repackages those capabilities for non-technical tasks
- You give Claude access to a folder on your computer; it can read, edit, and create files in that folder
- It makes a plan, works through it step by step, and loops you in on progress — more agent-like than a conversation
- Best for: document organisation, research across files, turning notes into structured output, batch file processing
- Current status: research preview (launched January 2026) — expect changes

**3.2 Setting up**
- Requires: Claude Desktop app on macOS + Pro or Max subscription (US availability; waitlist for other tiers)
- Granting folder access: you choose which folder Claude can work in — it cannot access files outside this
- Windows support: announced as a priority but no timeline yet
- **Connectors and plugins**: Cowork supports connectors (Google Drive, Gmail, DocuSign, etc.), skills, and a Chrome add-on to extend what it can do across apps and the web
- Plugin ecosystem: users can install plugins from Cowork, upload custom ones, or build new ones using Plugin Create (launched Jan 30 2026)
- Enterprise plugins: stock plugins for finance, legal, HR departments (launched Feb 2026)

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
  - Code (web): files are in browser session
  - Cowork: screen content visible to the model
- Institutional considerations: what your university's policy likely says

**4.3 Cost awareness**
- Chat: included in subscription (with usage limits)
- Code: consumed from Max subscription or billed per API token
- Cowork: consumed from Max subscription
- Rough cost comparisons for typical tasks
- How to monitor and manage costs

**4.4 Verification and provenance**
- Link to verification ladder on rules.html
- Tool-specific verification notes
- Recording what you did: conversation exports, git logs, session histories

**4.5 When to use multiple models**
- Link to cross-model review section in agentic.html
- Practical patterns: Claude drafts, GPT/Gemini reviews (or vice versa)
- When consensus is reassuring vs when disagreement is informative

---

#### Part 5: Humanities-specific workflows (worked examples)

**5.1 Building a research project in Chat**
- Setting up a Project for a monograph chapter or article
- Uploading key sources and setting instructions
- Iterative drafting and critique workflow

**5.2 Processing a text corpus with Code**
- Example: batch-processing a folder of transcribed inscriptions
- Setting up CLAUDE.md, running the task, reviewing results

**5.3 Literature review workflow (Chat + Code)**
- Using Chat to explore a field
- Using Code to organise and format findings
- Verification steps throughout

**5.4 Building a teaching tool with Code**
- Example: creating an interactive web tool for student use
- The Grammar Crammer and Gnomon Explorer as case studies (link to existing portfolio)

---

## Implementation notes

### File format
- Single HTML file: `guide/claude-best-practice.html`
- Following the existing site's conventions: `lang="en-GB"`, shared CSS, site nav, feedback footer
- Table of contents with anchor links
- Collapsible sections for detailed/technical content (using existing JS pattern if available, otherwise progressive enhancement)

### Navigation integration
- Add to site nav across all existing pages
- Add guide card on index.html
- Position after "Agentic AI" in nav order (since it's a deep-dive on the tool the agentic page introduces)

### Sources to cite/link
- Anthropic documentation: https://docs.anthropic.com
- Claude Code docs: https://code.claude.com/docs/en/overview
- Claude Code hooks: https://code.claude.com/docs/en/hooks
- Claude Code skills: https://code.claude.com/docs/en/skills
- Cowork introduction: https://claude.com/blog/cowork-research-preview
- Cowork help: https://support.claude.com/en/articles/13345190-getting-started-with-cowork
- Artifacts help: https://support.claude.com/en/articles/9487310-what-are-artifacts-and-how-do-i-use-them
- MCP specification: https://modelcontextprotocol.io
- Anthropic cookbook: https://github.com/anthropics/anthropic-cookbook
- Trail of Bits claude-code-config (opinionated defaults): https://github.com/trailofbits/claude-code-config
- Simon Willison's blog (independent technical commentary): https://simonwillison.net
- Ethan Mollick's writing (practical AI adoption patterns): https://www.oneusefulthing.org

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

---

## Open questions for the author

1. **Single page or multiple pages?** I recommend one long page with good navigation, but this could be split into three pages (chat/code/cowork) if you prefer.

2. **Depth on Code?** The hooks and MCP sections could go very deep. Should we cover enough for a humanities scholar to set these up, or just explain what they are and point to documentation?

3. **Cowork coverage**: Given it's macOS-only and a research preview, how much space should it get? I've proposed moderate coverage — enough to understand it, not a full tutorial for a feature that may change significantly.

4. **Worked examples**: Should Part 5 use real examples from your own work (the guide itself, the gnomon tool, etc.) or generic examples? Real examples are more credible but may need your input to write accurately.

5. **Relationship to bootcamp.html**: Several of the worked examples overlap with bootcamp experiments. Cross-link, or keep independent?

---

## Estimated length

- Part 0 (orientation): ~500 words
- Part 1 (Chat): ~3,000 words
- Part 2 (Code): ~4,000 words
- Part 3 (Cowork): ~1,500 words
- Part 4 (Shared principles): ~1,500 words
- Part 5 (Worked examples): ~2,000 words

**Total: ~12,500 words**

This is longer than most existing guide pages (~3,000-5,000 words each) but appropriate for a comprehensive reference manual. The table of contents and skip-logic callouts will help readers navigate to what they need.
