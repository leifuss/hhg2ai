# ChatGPT Section: Evaluation and Claude Code Brief

## Part 1: Veracity

### Correct or broadly accurate

- **OpenAI founding and mission.** Founded 2015 as nonprofit, mission statement about AGI benefiting humanity — all correct. But the draft says "founded in 2015 as a nonprofit" and leaves it there. As of October 2025, OpenAI restructured into OpenAI Foundation (nonprofit) controlling OpenAI Group PBC (a public benefit corporation). This is a significant change. The current text is not false but is misleadingly simple for a March 2026 publication. **Fix:** Add one sentence noting the 2025 restructuring into Foundation + PBC, without overloading it.

- **ChatGPT launch date.** November 2022, correct.

- **Plan tiers.** The draft lists "Free, Go, Plus, Pro, Business, Enterprise, and higher-education offerings." This is accurate as of March 2026. "Team" was renamed to "Business" — the draft correctly avoids "Team." ChatGPT Go launched globally in early 2026 at $8/month in the US. **No fix needed** — the draft wisely avoids pinning prices.

- **API vs ChatGPT distinction.** Correct and well explained.

- **Custom Instructions and Temporary Chat.** Both described accurately.

- **Privacy/training claims.** Consumer ChatGPT may train on content unless opted out; business/enterprise/edu/API do not train by default. This is accurate per OpenAI's current documentation.

- **Deep research.** Described accurately as structured web-based synthesis with documented reports.

- **Canvas.** Broadly accurate. The claim about mobile support "still being rolled out" should be verified at publication time — this may now be available.

- **Data analysis.** Accurately described.

- **Study mode.** Accurately described.

- **GPTs.** Accurately described, and the advice ("don't build GPTs too early") is sound.

### Needs correction or update

- **"Apps" replacing "connectors."** The draft says "OpenAI's older language of 'connectors' has now been folded into the broader term apps." This is roughly right but somewhat oversimplified. OpenAI uses both terms; "connectors" still appears in their help documentation (e.g., ChatGPT agent can leverage "ChatGPT connectors"). "Apps" is the more prominent consumer-facing term. **Suggest:** soften to "what OpenAI now generally calls apps (previously connectors)" rather than implying a clean replacement.

- **ChatGPT agent.** The draft's description is accurate in substance but doesn't reflect the full picture. Agent mode launched July 2025, integrating the earlier standalone Operator product. It now includes a virtual browser, text browser, terminal, direct API access, and can use connected apps. The draft says "agent mode can navigate websites, work with uploaded files, connect to third-party data sources, fill out forms, edit spreadsheets, and carry out complex online tasks while keeping the user in control" — this is sourced from OpenAI's help page and is accurate. However, the draft doesn't mention Operator as the precursor, which would help readers who encounter references to it elsewhere. **Suggest:** add a parenthetical noting Operator was folded into agent mode.

- **Codex.** This is the biggest gap. The draft describes Codex as "its coding agent" that "can work locally in the terminal or complete coding tasks in cloud environments; within ChatGPT, you can assign it coding work from the sidebar." This was roughly accurate for mid-2025 but is now significantly understated. As of March 2026, Codex has a dedicated desktop app (macOS and Windows), IDE extensions, CLI, web and cloud surfaces, and runs GPT-5.3-Codex (with GPT-5.4 now available). The Codex app is described by OpenAI as "a command center for agentic coding" with multi-agent workflows, worktrees, automations, and Skills. Codex is also now briefly available to Free and Go users as a promotion. **Fix:** Update the Codex description. The draft's advice ("skip it unless you really have a coding problem") remains sound, but the description of what Codex *is* needs refreshing.

- **"Record mode."** The draft mentions a "record mode on the macOS desktop app" for transcribing meetings. I could not verify this specific feature name from OpenAI's documentation. It may exist but should be confirmed before publication. **Flag for verification.**

### Missing

- **Scheduled tasks / automations.** ChatGPT agent can now schedule recurring tasks (daily, weekly, monthly). This is a notable capability not mentioned in the draft.

- **Ads.** OpenAI announced in early 2026 that it plans to begin testing ads in the free tier and ChatGPT Go. Plus, Pro, Business, and Enterprise will remain ad-free. This is worth a brief mention in the plans/privacy section.

- **Image generation.** The draft mentions "generate images" once in passing but doesn't discuss DALL-E / GPT-4o image generation as a distinct capability. For humanities users doing poster design, illustration for teaching materials, etc., this deserves a sentence or two.

---

## Part 2: House Style and Tone

### What the Claude section does

The existing Claude section at leifuss.github.io/hhg2ai/claude/ uses:

- A "Don't Panic" callout (Hitchhiker's Guide motif)
- Structured decision frameworks (flowcharts, tool spectrum tables)
- Feature-by-plan tables with checkmarks
- Admonition boxes ("Essential", "Minimum safe practice", "Leif's Notes")
- Cross-references to other site sections (Essentials, Primer, etc.)
- British English throughout
- Direct, matter-of-fact prose — no hedging, minimal adjectives
- Dated content ("March 2026")
- MkDocs Material formatting conventions

### How the draft differs

The ChatGPT draft is well-written but is more of a discursive essay than a structured reference section. Specific differences:

1. **No decision framework.** The Claude section opens with "Which Claude tool do I need?" and a clear decision flowchart. The ChatGPT draft offers this as prose ("start with plain chat, move to projects…") but not as a scannable visual. **Recommend:** Add a decision flowchart or table equivalent.

2. **No feature-by-plan table.** The Claude section has an explicit feature × plan grid. The draft's editorial note argues against hard-coding feature matrices because OpenAI changes them. This is a defensible choice, but it creates an asymmetry between sections. **Recommend:** Include a minimal table (features vs tiers) with a caveat and date stamp, mirroring the Claude section's approach. The Claude section already hedges this way ("Exact limits change; see Anthropic's pricing page for current details").

3. **No admonition boxes.** No "Don't Panic," no "Minimum safe practice," no "Leif's Notes." These are part of the site's voice and should be present.

4. **Prose register.** The draft is slightly more editorial/authorial than the Claude section. Phrases like "A sensible default for humanities users is simple" and "The practical advice is blunt" are good writing but are a half-step more conversational than the Claude section's norm. Not wrong, but worth harmonising.

5. **"OpenAI says" hedging.** The draft uses "OpenAI says" or "OpenAI describes" repeatedly. This is epistemically honest (these are vendor claims, not independently verified facts) and is actually a strength. The Claude section does less of this, partly because its author has direct knowledge of the product. For the ChatGPT section, this hedging should be retained but not overdone — pick the claims that genuinely need the qualifier (privacy, capabilities) and state the rest directly.

6. **No cross-references.** The draft doesn't link to Essentials, Primer, or other site sections. These should be added for consistency.

7. **British English.** The draft uses British spelling correctly.

---

## Part 3: Claude Code Brief

### Objective

Two tasks:

**A. Add the ChatGPT section** to the site as a new top-level nav item, parallel to the existing Claude section.

**B. Update the Claude section** with (i) a short introduction to Claude/Anthropic mirroring the ChatGPT one, and (ii) removal of the "Part of A Hitchhiker's Guide to AI for the Humanities" line from `claude/index.md`.

### A. ChatGPT section

#### File structure

```
docs/chatgpt/index.md
docs/chatgpt/chat.md
docs/chatgpt/projects.md
docs/chatgpt/research-apps-agent.md
docs/chatgpt/canvas-data-study.md
docs/chatgpt/gpts-codex.md
docs/chatgpt/plans-privacy.md
docs/chatgpt/workflows.md
```

#### Nav entry

Add to `mkdocs.yml` nav, positioned after the Claude section:

```yaml
- ChatGPT:
  - chatgpt/index.md
  - Chat: chatgpt/chat.md
  - Projects: chatgpt/projects.md
  - Research, Apps & Agent: chatgpt/research-apps-agent.md
  - Canvas, Data & Study: chatgpt/canvas-data-study.md
  - GPTs & Codex: chatgpt/gpts-codex.md
  - Plans & Privacy: chatgpt/plans-privacy.md
  - Worked Examples: chatgpt/workflows.md
```

#### Content

Use the draft document provided (attached below) as source material. Apply the following modifications throughout:

##### Factual corrections

1. **index.md — OpenAI description.** After "It was founded in 2015 as a nonprofit", add: "In October 2025, OpenAI restructured. The nonprofit became the OpenAI Foundation, and the for-profit subsidiary became OpenAI Group, a public benefit corporation (PBC). The Foundation retains governance control over the for-profit entity."

2. **research-apps-agent.md — Apps/connectors.** Change "OpenAI's older language of 'connectors' has now been folded into the broader term apps" to "What OpenAI previously called connectors is now generally referred to as apps, though both terms still appear in their documentation."

3. **research-apps-agent.md — Agent mode.** After the existing agent description, add a parenthetical: "(Agent mode, launched in July 2025, integrates the capabilities of the earlier standalone Operator product.)"

4. **gpts-codex.md — Codex.** Replace the current Codex paragraph with something like: "For users doing actual software work, OpenAI now offers Codex, a coding agent available through multiple surfaces: a dedicated desktop app (macOS and Windows), a CLI, IDE extensions, the ChatGPT web interface, and cloud environments. Codex can handle complex multi-file engineering tasks, work in parallel on multiple jobs, and review code. It is included with paid ChatGPT plans, with usage scaling by tier. This is the nearest analogue in the OpenAI ecosystem to Anthropic's Claude Code. It is relevant to digital humanists building sites, scripts, pipelines, or tools, but overkill for most ordinary humanities use."

5. **canvas-data-study.md — Record mode.** Flag the "record mode" claim for verification. If it cannot be confirmed from OpenAI's current documentation, soften to "OpenAI's desktop app includes features for transcribing and summarising audio" without the specific feature name.

6. **plans-privacy.md — Ads.** Add a note: "OpenAI has announced plans to introduce advertising in the free tier and ChatGPT Go. Plus, Pro, Business, and Enterprise plans will remain ad-free."

##### Style harmonisation

Apply the following to match the Claude section's conventions:

1. **Add a "Don't Panic" callout** to `chatgpt/index.md`, mirroring the Claude section's opening.

2. **Add a "Which ChatGPT tool do I need?" decision section** to `chatgpt/index.md` with brief descriptions of each tool (chat, projects, deep research, GPTs, agent, Codex) in the same format as the Claude section's tool descriptions (bold name, "Best for:", "You'll need:", "Skills required:").

3. **Add a decision flowchart** (as a markdown table, same format as Claude section).

4. **Add a minimal feature-by-plan table** to `chatgpt/plans-privacy.md` covering: Chat, Web search, File uploads, Projects, Deep research, Agent mode, Custom GPTs, Codex, Canvas, Image generation. Columns: Free, Go, Plus, Pro, Business, Enterprise. Use ✓, limited, and — marks. Add a caveat line: "*Feature availability by plan. Exact limits change frequently; see [OpenAI's pricing page](https://chatgpt.com/pricing) for current details. As of March 2026.*"

5. **Add MkDocs admonition boxes** where appropriate:
   - A "Minimum safe practice" box in `chatgpt/chat.md` or `chatgpt/index.md` mirroring the Claude section's equivalent.
   - "Leif's Notes" boxes for the editorial judgements currently in the prose (e.g., the observation about deep research being "a research assistant for scoping; used badly, it becomes a polished source of false confidence").
   - An "Essential" box on `chatgpt/index.md` guiding readers to the right starting page, as the Claude section does.

6. **Add cross-references** to Essentials, Primer, and other site sections. In particular:
   - `chatgpt/index.md` should reference the Primer for newcomers and Essentials for cross-platform guidance.
   - `chatgpt/plans-privacy.md` should reference Essentials > Data Governance.
   - `chatgpt/workflows.md` should reference Essentials > Verification & Citation.

7. **Date stamp.** Add "*March 2026*" below the main heading of `chatgpt/index.md`.

8. **Prose register.** Keep the draft's voice but trim the most editorial phrases slightly. The "OpenAI says" hedging should be retained for privacy claims and capability descriptions that are vendor assertions, but can be dropped for straightforward factual statements (launch dates, plan names, feature existence).

### B. Claude section updates

#### i. Add Claude/Anthropic introduction

In `docs/claude/index.md`, immediately after the H1 heading and before the "Don't Panic" box, add a new section:

```markdown
## What Claude is — and how it relates to Anthropic

Anthropic is an AI safety company founded in 2021 by former OpenAI researchers, including Dario and Daniela Amodei. Its stated mission is the responsible development and maintenance of advanced AI for the long-term benefit of humanity. Anthropic develops the Claude family of AI models and the products built around them.

Claude is Anthropic's general-purpose AI assistant: the product most people use directly through a browser, desktop app, or mobile app at [claude.ai](https://claude.ai). Since its initial release in March 2023, Claude has grown from a conversational interface into a broader work environment: ordinary chat, web search, file uploads, projects, memory, artifacts, coding tools, document creation, and autonomous task completion.

It is worth separating Claude from the Anthropic API. Claude is the end-user application: you open it and work inside it. The API is the developer platform for building your own tools, automations, or research workflows on top of Anthropic's models. For most humanities researchers, Claude is the place to start. The API only becomes necessary when you want structured automation, reproducible pipelines, or integration into your own software. Anthropic bills the API separately from Claude subscriptions.
```

#### ii. Remove obsolete line

In `docs/claude/index.md`, delete the line:

```
Part of [A Hitchhiker's Guide to AI for the Humanities](../)
```

This is now redundant since the site itself is the Guide.

---

### Source material

The full ChatGPT draft text is provided in the conversation. Use it as the basis for all ChatGPT section content, with the corrections and style modifications described above.
