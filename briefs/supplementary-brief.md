# Supplementary Revision Brief: Four Additions

**For:** Claude Code, working on `https://leifuss.github.io/ai4hums/claude/`
**Date:** 7 March 2026
**Follows:** Revision Brief of same date (factual corrections and structural changes)

---

## 1. Desktop app vs browser in the orientation section

### The problem

The guide mentions the desktop app in passing ("also available as a mobile app and a desktop app") but the orientation table treats everything under "Chat (claude.ai)" as though all features are available in the browser. They are not. Cowork requires the desktop app. Claude Code is available as a tab within the desktop app (not just CLI). The desktop app also provides a system-wide keyboard shortcut, direct file drag-and-drop, and desktop extensions (one-click MCP server installation) — none of which exist in the browser.

For a humanities reader deciding what to install, this is a practical gap. "Do I need to install anything?" is one of the first questions. The current answer — implied but never stated — is: "No, unless you want Cowork." The real answer is more useful than that.

### Recommended fix

Add a short subsection to the overview page, before or after the orientation table, titled something like **"Browser, desktop app, or mobile?"** Content:

- **Browser (claude.ai):** Chat, Projects, file uploads, artifacts, web search, Claude Code (web). Works on any device. No installation. This is where most people should start.
- **Desktop app (macOS, Windows):** Everything the browser offers, plus Cowork mode, system-wide keyboard shortcut (summon Claude from any application), drag-and-drop local files, and desktop extensions for connecting Claude to local tools. Download from claude.ai/download. Required for Cowork.
- **Mobile app (iOS, Android):** Chat and Projects. Useful for reviewing, reading, and quick questions on the move. Not suited to file-heavy or code-heavy work.

Keep it to one short paragraph per entry. The point is to answer: "What do I gain by installing the app?" without making the browser feel inadequate for Chat-only users.

In the orientation table, add a column or note indicating which interface is needed:

| Tool | Runs in |
|------|---------|
| Chat | Browser, desktop app, mobile |
| Projects | Browser, desktop app, mobile |
| Code (web) | Browser |
| Code (CLI) | Terminal (local or remote) |
| Code (desktop) | Desktop app |
| Cowork | Desktop app only |

Note: The guide currently doesn't mention Claude Code Desktop (the GUI version within the desktop app) as distinct from Code (web) and Code (CLI). It should, briefly. Claude Code Desktop gives you a graphical interface for Code without needing the terminal, plus visual diff review and app previews. For humanities scholars who find the terminal intimidating but want Code's capabilities, this is relevant. A single sentence in the Code section would suffice: "If you prefer a graphical interface, the Claude Desktop app includes a Code tab that provides the same capabilities without requiring the terminal."

---

## 2. Should Cowork sit between Chat and Code?

### The argument for reordering

The current sequence is Chat → Code → Cowork. This is product-historical (Cowork launched after Code). But for humanities readers, the pedagogical sequence should follow the difficulty curve:

1. **Chat** — conversational, browser-based, no setup, no risk. Where everyone starts.
2. **Cowork** — still GUI-based, no terminal, no version control required, but adds file access, background tasks, and screen awareness. The natural "next experiment" for someone who wants Claude to do more than chat.
3. **Code** — agentic, terminal-based (or desktop GUI), requires understanding of files, version control, and project structure. The step where you become a builder.

This matches how a typical humanities scholar would actually escalate their use. The current order asks them to read about CLI tools, git, CLAUDE.md, hooks, and MCP before discovering that Cowork — which needs none of those skills — exists.

### The argument against

Cowork is still a research preview. It may change substantially. Code is more mature, better documented, and more powerful. Putting Cowork second could over-weight a feature that Anthropic might reshape.

### My recommendation

Reorder to Chat → Cowork → Code. The arguments for outweigh those against, and here is why:

- The guide's audience is humanities scholars, not developers. The difficulty gradient matters more than product maturity.
- The guide already dates itself with "March 2026" and warns about rapid change. A research preview is no more provisional than the rest of the landscape.
- Cowork's position between Chat and Code is conceptually clearer: it's "Chat that can see your screen and touch your files" rather than "a separate product." That framing helps readers understand the spectrum.
- The current order means a reader who stops after Chat (many will) never learns about Cowork. If Cowork is Part 2, they're more likely to encounter it.

Implementation: renumber the parts (Chat = Part 1, Cowork = Part 2, Code = Part 3). Update the overview text and navigation. Adjust cross-references. In the overview, the "graduation" language should become: "Many tasks start in Chat. If you want Claude to work with your local files without learning the terminal, try Cowork. If you need to build tools, process data at scale, or want full version control, move to Code."

---

## 3. Glossary with tooltips

### What this solves

The guide uses terms that are standard in AI/developer discourse but opaque to humanities readers. Both external reviews flagged this. A glossary solves two problems: it defines terms in one place, and tooltips at point of use mean readers don't have to leave the page to look something up.

### Recommended term list

Drawing from terms used in the guide that a humanities scholar may not know:

| Term | Suggested gloss |
|------|----------------|
| Agentic | Able to take actions autonomously — reading files, running commands, making decisions — rather than only responding to messages |
| API | Application Programming Interface — a way for programs to communicate with each other. Claude's API lets software send requests to Claude and receive responses |
| API key | A unique code that identifies you when using an API, like a password for software access |
| Artifact | A standalone output (document, code, interactive page, diagram) displayed in a side panel, which can be iterated on and shared |
| CLI | Command Line Interface — a text-based way of interacting with your computer by typing commands, as opposed to clicking in a graphical interface |
| CLAUDE.md | A plain text file placed in a project directory that gives Claude Code its instructions and context for that project |
| Compaction | Automatic summarisation of earlier conversation context to free up space within the context window |
| Context window | The total amount of text Claude can hold in working memory during a single conversation — including everything you've said, everything Claude has said, and any uploaded documents |
| Git | A version control system that tracks changes to files over time, allowing you to see what changed, when, and by whom, and to undo changes if needed |
| Hallucination | When an AI generates confident-sounding information that is factually wrong or entirely fabricated |
| Hook | A shell command that runs automatically at a specific point in Claude Code's workflow — for example, before any file is modified |
| MCP | Model Context Protocol — a standard way to connect Claude to external tools and data sources (databases, APIs, file systems) |
| Model | The underlying AI system that generates responses. Different models (Opus, Sonnet, Haiku) trade off between capability and speed |
| npm | Node Package Manager — a tool for installing JavaScript software packages. Used to install some versions of Claude Code |
| Prompt | What you say to Claude — your instructions, questions, or requests |
| RAG | Retrieval-Augmented Generation — a technique where an AI retrieves relevant documents before generating a response, rather than relying solely on its training |
| Sandbox | An isolated environment where code runs without access to your real files or system — used for safety |
| System prompt | Hidden instructions that shape Claude's behaviour before a conversation begins. In Projects, these are the "custom instructions" |
| Token | A unit of text, roughly three-quarters of an English word. Context windows and costs are measured in tokens |
| Version control | A system (usually git) for tracking changes to files, enabling undo, collaboration, and audit trails |
| VM | Virtual Machine — a computer simulated in software, used to run code in isolation from your real system |
| WSL | Windows Subsystem for Linux — a feature that lets Windows run Linux tools and commands natively |

### Implementation: tooltips

For a static HTML site, the simplest approach is the `<abbr>` element with a `title` attribute, enhanced with CSS for visibility:

```html
<abbr class="glossary" title="The total amount of text Claude can hold in working memory during a single conversation">context window</abbr>
```

```css
abbr.glossary {
  text-decoration: underline dotted;
  text-decoration-color: #888;
  text-underline-offset: 3px;
  cursor: help;
}
```

This is semantic HTML, requires no JavaScript, works on mobile (tap-and-hold), and degrades gracefully. On first use of each term per page, wrap it in `<abbr class="glossary">`. Subsequent uses on the same page need not be wrapped.

Additionally, create a standalone `glossary.html` page with the full list, linked from the navigation bar. Each term on the glossary page should have an `id` so other pages can link directly: `glossary.html#context-window`.

### What NOT to do

- Don't glossary-ify every technical term on every use. First use per page is enough.
- Don't make the tooltips long. One sentence maximum. The glossary page can be fuller.
- Don't add terms that the guide already explains inline (e.g., "git" is explained in the Skills page). But do still include them in the glossary page for reference.

---

## 4. Derivable figures and diagrams

### What figures would help

The guide is currently all prose. Several reviewers noted that diagrams would improve navigation and comprehension. Here are the figures that would add the most value, ranked by impact:

#### Figure 1: "Which Claude tool?" decision flowchart

A simple decision tree for the overview page:

```
Do you need to work with local files?
├─ No → Do you need a persistent knowledge base?
│        ├─ No → Chat
│        └─ Yes → Chat with Projects
└─ Yes → Are you comfortable with a terminal / command line?
         ├─ No → Cowork (desktop app) or Code Desktop
         └─ Yes → Code (CLI)
```

This is the single most-requested addition across both reviews. It can be produced as an SVG or a simple styled HTML `<div>` structure. No external data needed — it derives entirely from the guide's own content.

#### Figure 2: "How Claude remembers" — four-layer diagram

A stacked or concentric diagram showing:

1. **Chat context** (innermost/base) — within one conversation, automatic, bounded by context window
2. **Project context** — shared documents and instructions, curated by you, available across conversations in a project
3. **Memory** — Claude's profile of your preferences/facts, built from past conversations, less precise
4. **Past chat search** — keyword search across your conversation history, retrieval not continuity

This directly supports the "How Claude remembers" section recommended in the main brief. Producible as SVG or simple HTML/CSS. Data source: Anthropic's help centre article on memory and chat search (https://support.claude.com/en/articles/11817273).

#### Figure 3: Feature availability by plan

A comparison table (or matrix diagram) showing what's available at each tier. Derivable from Anthropic's pricing page and help centre:

| Feature | Free | Pro ($20/mo) | Max ($100/mo) | Team | Enterprise |
|---------|------|-------------|---------------|------|------------|
| Chat | ✓ | ✓ | ✓ | ✓ | ✓ |
| Projects | ✓ (limited) | ✓ | ✓ | ✓ | ✓ |
| File uploads | ✓ | ✓ | ✓ | ✓ | ✓ |
| Opus model | — | ✓ | ✓ | ✓ | ✓ |
| Cowork | — | ✓ | ✓ | ✓ | ✓ |
| Code (web) | — | ✓ | ✓ | ✓ | ✓ |
| Code (CLI) | — | ✓ | ✓ | ✓ | ✓ |
| Memory | ✓ | ✓ | ✓ | ✓ | ✓ |
| Connectors | ✓ | ✓ | ✓ | ✓ | ✓ |
| Usage limits | Lowest | ~5× free | ~5× Pro | Per seat | Custom |

Caveat: exact limits change. The table should link to Anthropic's pricing page and carry a date stamp. But even an approximate table is more useful than the current prose, which leaves readers guessing what they get at each tier.

#### Figure 4: Context window — what fits?

A visual showing roughly how much text fits in a 200K-token context window, using humanities-relevant comparisons:

- ~150,000 words ≈ a full monograph
- ~500 pages of typical academic prose
- ~300 journal articles (abstracts only)
- ~50 journal articles (full text)
- A complete PhD thesis

Source: Anthropic's documentation states 200K tokens across all models and paid plans, with one token ≈ 0.75 English words. The humanities comparisons are derived from standard document lengths. This figure helps readers understand context limits in terms they already know.

#### Figure 5: The tool spectrum

A simple linear spectrum diagram for the overview:

```
Conversational ←————————————————————→ Agentic

Chat    Projects    Cowork    Code (desktop)    Code (CLI)
```

With one-line labels:
- Chat: "You talk, Claude responds"
- Projects: "Persistent knowledge base for your conversations"
- Cowork: "Claude works alongside you on your desktop"
- Code (desktop): "Claude builds things, with a graphical interface"
- Code (CLI): "Claude builds things, with full terminal control"

### Can these be derived programmatically?

Figures 1, 2, 4, and 5 can be produced as SVG or HTML/CSS without any external data — they derive from the guide's own content and Anthropic's publicly documented specifications.

Figure 3 (the feature matrix) requires checking current Anthropic documentation at the time of production. The data points I've listed above are verified as of 7 March 2026, but this is the figure most likely to need updating. Recommendation: produce it with a date stamp and a link to Anthropic's pricing page, and note in a comment that it should be reverified quarterly.

None of these figures require screenshots from Claude's interface. They are all conceptual/informational diagrams that can be created in clean SVG matching the guide's existing visual style.

### Production approach

For a static HTML site, the cleanest approach is inline SVG or HTML/CSS diagrams. This avoids image hosting, loads fast, scales to any screen, and can be maintained in the same HTML files as the rest of the guide. Mermaid.js is an alternative if you prefer text-based diagram definitions, but adds a JavaScript dependency.

If you want me to produce the actual SVG/HTML for any of these, say the word and specify the visual style (colours, fonts, width constraints).

---

## Summary of all four items

| Item | Effort | Impact | Dependencies |
|------|--------|--------|-------------|
| Desktop vs browser section | Low — one new subsection, update orientation table | High for new users deciding what to install | None |
| Reorder Cowork before Code | Medium — renumber parts, update cross-references, adjust "graduation" language | High for non-DH humanities readers | Priority 1 fixes from main brief (Cowork corrections) must land first |
| Glossary + tooltips | Medium — write definitions, add `<abbr>` tags on first use per page, create glossary.html | High for accessibility; low maintenance once built | None |
| Figures | Medium-high — design and produce 3–5 diagrams | High for usability and first impressions | Content must be finalised before figures are produced |
