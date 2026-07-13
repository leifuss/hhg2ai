# Revision Brief: Claude Best Practice for Humanities Scholars

**For:** Claude Code, working on `https://leifuss.github.io/ai4hums/claude/`
**Date:** 7 March 2026
**Status:** All factual claims verified against current Anthropic documentation and reporting as of this date.

---

## Priority 1: Factual corrections (do these first)

These are wrong as of March 2026 and affect user decisions about cost, platform, and trust.

### 1.1 Projects are no longer Pro-only

**Where:** `index.html` (orientation table, Chat Projects entry), `chat.html` (§1.3 Projects, §1.4 Dos)

**Current text (index.html):** "You'll need: A Pro or Team subscription."
**Current text (chat.html):** "Projects require a Pro subscription or above."

**Fix:** Projects are available on all tiers including free, with usage limits. Free users can create Projects. Change to something like: "Available on all plans, including free (with limits). A Pro or higher subscription gives higher usage and capacity."

### 1.2 Cowork is no longer macOS-only

**Where:** `index.html` (orientation table), `cowork.html` (header banner, §3.2 setup)

**Current text (index.html):** "You'll need: A Pro or Max subscription + **macOS only**."
**Current text (cowork.html):** "available only on macOS" (banner), "Requires: A Mac running macOS" (§3.2).

**Fix:** Cowork launched on Windows on 10 February 2026 with full feature parity. Update to: "Available on macOS and Windows (x64). Requires the Claude Desktop app and a paid subscription (Pro, Max, Team, or Enterprise)." Remove or revise all macOS-only statements. Note that Windows arm64 is not supported.

### 1.3 Cowork can execute code

**Where:** `cowork.html` §3.4 Don'ts

**Current text:** "Use Cowork for tasks that need code execution. Cowork reads and writes files but does not run programs. Use Code for that."

**Fix:** Cowork now uses the same agentic architecture as Claude Code and executes work in a VM. It can handle analysis and data-processing tasks. Rewrite the don't to something like: "Use Cowork for large-scale coding projects that need full version control and local tool integration. Code gives you finer-grained control over builds, dependencies, and shell workflows." The point should be about *when Code is better*, not that Cowork can't execute.

### 1.4 Claude Code Windows setup is outdated

**Where:** `code.html` §2.3 (CLI setup, step 1)

**Current text:** "Windows: install WSL (Windows Subsystem for Linux) first, then install Node.js within it"

**Fix:** Claude Code now supports native Windows installation via PowerShell or CMD. Git for Windows is required. The npm install method is deprecated; the native installer is preferred. WSL remains an option but is no longer a prerequisite. Node.js is no longer required for the native installer. Rewrite step 1 to reflect all three install paths: native installer (recommended), WSL (alternative), npm (legacy/deprecated).

### 1.5 "Memory across conversations" in Projects is overstated

**Where:** `chat.html` §1.3 Projects, item 3

**Current text:** "Memory across conversations: Within a Project, Claude retains context across multiple conversations. It remembers previous discussions, decisions, and materials you have shared."

**Fix:** This is misleading. Projects provide shared knowledge (uploaded documents) and shared instructions (the system prompt) across all conversations in the project. They do *not* automatically carry context from one conversation to another unless that information is in the knowledge base or instructions. Rewrite to: "Shared context: Every conversation in the Project has access to the same knowledge base and instructions. This means you do not need to re-upload documents or re-explain your project each time. However, the specific content of one conversation is not automatically available in another — if a decision was made in conversation A, add it to the Project knowledge base or instructions so conversation B can see it."

### 1.6 The "39% degradation" claim is misapplied

**Where:** `chat.html` §1.3 Conversations

**Current text:** "Research suggests that mixing unrelated topics in a single conversation degrades Claude's performance by up to 39%."

**Fix:** The underlying research finding is about multi-turn conversation degradation generally, not specifically about topic-mixing in humanities workflows. The practical advice (one topic per conversation) is sound and should stay. Remove the "39%" figure and rewrite to ground the advice in operational reasoning: context windows are finite, topic drift makes Claude lose track of constraints, and fresh conversations are cheap. Something like: "Keeping conversations focused helps Claude maintain coherent context. If you shift topics within a single conversation, Claude may lose track of earlier constraints or priorities. Conversations are cheap — start a new one when you switch tasks."

### 1.7 Artifacts sharing and subscription (minor)

**Where:** `chat.html` §1.3 Artifacts

**Current text:** "interactive artifacts that call Claude's API will use the recipient's own subscription"

**Fix:** Soften to match current docs: recipients can view and use basic artifact functionality without an account. Advanced or AI-powered features may prompt signup. The current wording is too specific about whose subscription is consumed.

---

## Priority 2: Structural additions

### 2.1 Add a "How Claude Remembers" callout or section

**Where:** `chat.html`, after §1.3 Memory (or replace that subsection)

**Content:** A compact four-part distinction:

1. **Chat context** — Within a single conversation, Claude remembers everything said so far. Automatic, reliable, bounded by the context window.
2. **Project context** — Uploaded documents and custom instructions shared across all conversations in a Project. Not automatic memory — you curate what goes in.
3. **Memory from chat history** — Claude's general memory feature: it builds a profile of your preferences and facts from past conversations. Less precise than Project context; think of it as Claude recognising you, not recalling your arguments. Now available on all tiers including free.
4. **Past chat search** — Claude can search your previous conversations by keyword. Useful for finding what you discussed, not for giving Claude automatic continuity.

Add a note: "These features are changing rapidly. Check Anthropic's documentation for the current state. Date this section."

### 2.2 Strengthen the two-user-journey distinction

**Where:** `index.html` overview, and referenced on each page

**Approach:** After the orientation table, add a two-paragraph framing:

- **If you mainly read, write, teach, and analyse texts:** Start with Chat. Use Projects for sustained work. You can safely ignore Code, Cowork, hooks, MCP, CLAUDE.md, and everything in Parts 2, 5, and 6 until you have a specific need. The Shared Principles (Part 4) apply to you.
- **If you want to build tools, transform data, or automate processing:** Read Code and Environments. The Skills page will help you know what to learn first. Shared Principles still apply.

On the Code page, mark hooks, MCP, and headless mode more clearly as "advanced — skip on first reading."

### 2.3 Add a "Minimum safe practice" box

**Where:** `chat.html` or `index.html`

**Content:** A short, reassuring checklist for humanities scholars who just want to try Claude responsibly:

1. Use Chat. Upload the source text.
2. Ask for critique, summary, or analysis — not for authoritative facts.
3. Verify all references against a library catalogue.
4. Do not upload sensitive, personal, or embargoed material.
5. Record what you asked and what you used from the response.
6. If it's useful, great. If not, nothing was lost.

---

## Priority 3: Content improvements

### 3.1 Process verification for DH readers

**Where:** `shared-principles.html` §4.4 Verification, or a new subsection

**Problem:** The verification section handles factual checking well but says little about *process* verification — auditing whether an AI-assisted transformation introduced systematic bias, normalised meaningful variation, or produced plausible-looking but wrong structured data.

**Add:** A short section on verifying transformations, not just outputs. Key points: spot-check across the full range of your data (not just the first few items); check whether OCR correction has normalised variant spellings or dialect forms; check whether metadata extraction has imposed modern categories on ambiguous historical data; document every transformation step so others can audit the pipeline.

### 3.2 Reproducibility appendix for DH readers

**Where:** `code.html` new subsection (e.g., §2.10), or a standalone page

**Content:** The guide already values git and provenance. Complete the thought with practical reproducibility guidance:

- Pin dependencies (`requirements.txt`, `package-lock.json`)
- Record the environment (Python version, OS, key library versions)
- Write a data dictionary for transformed datasets
- Include test runs: sample inputs with expected outputs
- Document encoding assumptions (UTF-8, normalisation form)
- Keep transformation scripts in version control alongside the data they produce

### 3.3 Broaden worked examples

**Where:** `workflows.html`

**Problem:** All five examples are text-and-data-processing workflows with a classicist flavour. The guide claims to serve "humanities scholars" generally.

**Fix:** Add at least two examples from outside this cluster. Suggestions:

- **Interview/transcript analysis:** Oral history or qualitative research. Upload audio transcripts, extract themes, code passages, compare across interviews.
- **Image/IIIF metadata or art-historical collections:** Working with visual sources, image metadata, IIIF manifests, or catalogue data for art-historical or museum research.
- **Messy bibliographic/admin cleanup:** The unglamorous but universal task: cleaning up a messy bibliography, formatting citations for a specific journal, preparing a reading list, or organising research-admin documents.

### 3.4 Soften engineering language for non-DH readers

**Where:** Throughout, but especially `index.html` and `code.html`

**Specific items:**
- "Agentic" on first use in the overview: add a gloss. ("agentic — meaning Claude can take actions on its own, not just respond to messages")
- The CLAUDE.md example in §2.3 includes BEM naming conventions and xmllint. These are fine in a DH context but signal developer culture. Either add a simpler example first (a CLAUDE.md for a non-technical project) or mark the technical example as "DH/developer example."
- In §2.6 MCP, the reassurance that MCP is optional should come *before* the technical detail, not after.

---

## Priority 4: Minor fixes and polish

- Update the "Last updated" date on all pages.
- In `chat.html` §1.2, the model descriptions should mention that Opus 4.6 is current and that model names/capabilities change. Consider not listing specific model names beyond Opus/Sonnet/Haiku as a naming convention.
- In `code.html` §2.4, the slash commands table lists `/memory` — verify this is current.
- In `chat.html` §1.3 Memory, the "general memory" description ("less reliable — think of it as a general impression") is now underselling the feature, which has been significantly expanded (available on all tiers, importable from other services). Rewrite for accuracy without overselling.
- In `cowork.html` §3.5, the comparison table sends "Build a tool, process data, write code" to Code only. After the Cowork execution fix (1.3 above), this table needs updating — Cowork can now handle some data-processing tasks.

---

## What NOT to change

- The guide's central instinct — verify, preserve provenance, choose the least elaborate tool — is right. Don't weaken it.
- The iterative refinement pattern in Chat best practices is well-described. Keep it.
- The honest warnings about hallucinated references are appropriately strong. Don't soften them.
- The tone is good. Don't make it more breathless, more corporate, or more hedged.
- The "non-AI dependency" framing for Code outputs is a genuinely important point. Don't remove it; just add a sentence acknowledging that the construction process still warrants documentation and audit.

---

## Implementation notes for Claude Code

The guide is a static site (HTML). The source files are in the repository at the paths matching the URLs. Each page is a standalone HTML file.

Suggested working order:
1. Fix all Priority 1 items (factual corrections) in a single pass. Commit.
2. Add the "How Claude Remembers" section and the two-journey framing. Commit.
3. Add the minimum safe practice box. Commit.
4. Add process verification and reproducibility content. Commit.
5. Broaden examples and soften language. Commit.
6. Minor fixes. Commit.

Each commit should have a descriptive message. The guide should be reviewed by a human after each priority level.
