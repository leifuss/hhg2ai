# Audit Brief: Shared Principles, Workflows, Environments, and Skills

**For:** Claude Code, working on `https://leifuss.github.io/ai4hums/claude/`
**Date:** 8 March 2026
**Covers:** shared-principles.html, workflows.html, environments.html, and skills.html (all four now reviewed in full).

---

## Part 1: Shared Principles (shared-principles.html)

### Verdict

This is the strongest page in the guide. The prompting advice is sound, the verification section is appropriately stern, the data governance guidance is responsible, and the multi-model section is genuinely useful. No Cowork-level errors here. But there are gaps, a few things that have shifted, and some missed opportunities.

### Corrections needed

**§4.1 Prompting — "give Claude a role"**

The guide says: "Claude responds well to role-framing: 'You are an expert in Byzantine Greek palaeography'."

This is fine as practical advice but slightly overstates the mechanism. Role-framing works because it sets implicit expectations about register and depth, as the guide correctly notes. But Anthropic's own prompting documentation now emphasises *task description and context* over role-assignment as the primary lever. The guide should keep the advice (it works) but not present it as more powerful than specificity about the actual task. A small rebalancing, not a rewrite.

**§4.2 Data governance — free tier training**

The guide says: "Anthropic may use free-tier conversations to improve its models. Do not use the free tier for sensitive research data."

This needs checking against Anthropic's current privacy policy. As of early 2026, Anthropic's position has been that conversations are not used for training by default across all tiers, but the specific free-tier terms should be verified. The caution is warranted regardless — better to be conservative — but the claim should match the current policy. Link to the privacy policy and let readers check the current state.

**§4.3 Cost awareness — token pricing**

The guide says Opus is "the most expensive" and Haiku "the cheapest." This is directionally correct but the specific pricing has changed significantly with the 4.6 generation. Opus 4.6 is $5/$25 per million input/output tokens — dramatically cheaper than Opus 4.1 was ($15/$75). The guide wisely avoids quoting specific prices, but the *relative* framing ("considerably more with Opus") may now overstate the gap. A note that pricing has fallen with each model generation, and a link to the pricing page, would be more accurate than implying Opus is prohibitively expensive.

**§4.1 Prompting — custom styles path**

The guide doesn't mention styles in the prompting section, but §1.2 (on the Chat page) directs readers to "Settings → Profile" for custom styles. As already flagged in an earlier session, this path is wrong. If the shared principles page cross-references styles at any point, the path needs correcting here too.

### Missing content

**§4.4 Verification — process verification for DH readers**

Already flagged in the main brief but worth repeating: the verification section handles factual checking well but says nothing about verifying *transformations*. When Claude cleans a dataset, normalises spellings, or extracts metadata from ambiguous sources, the risk isn't a wrong fact — it's a systematic bias baked into the output. A short subsection on auditing processes, not just outputs, would complete the thought. Key points:

- Spot-check across the full range of your data, not just the first results
- Check whether normalisation has destroyed meaningful variation (dialect forms, historical spellings, variant names)
- Check whether metadata extraction has imposed modern categories on ambiguous historical data
- Document every transformation step so the pipeline is auditable
- Keep original data untouched; work on copies

**§4.4 Verification — low-resource languages and specialist domains**

Gemini's review made a good point that the guide should flag: Claude's error rate is higher for ancient, low-resource, or specialist-domain content. Latin, Greek, medieval vernaculars, and non-Western historical traditions are all areas where Claude will produce confident-sounding output with a higher error rate than for modern English text. The guide mentions translation errors but should be more explicit that *any* task in a specialist domain warrants extra verification — not just translation.

**§4.1 Prompting — extended thinking and Research mode**

The guide says "ask Claude to think step by step." Extended thinking is now a built-in feature (enabled by default in Code, available as a toggle in Chat). Research mode is a separate feature that conducts multi-step web research before responding. Neither is mentioned. Brief notes with links would help — these are features that directly serve scholarly work.

**§4.5 Multi-model — model landscape has changed**

The multi-model section mentions "GPT, Gemini, Llama" as alternatives. This is still broadly right but the landscape has shifted. GPT-5 and GPT-5.4 exist. Gemini 2.x exists. The guide doesn't need to track every release, but it should avoid implying these are minor alternatives — for some tasks, competing models outperform Claude. The honest framing (which the guide already has) is that disagreement between models is informative. Keep that; just update the model names if they appear.

### Improvements for clarity and relevance

**§4.2 Data governance — practical decision framework**

The data governance section is responsible but slightly abstract. A one-paragraph decision aid would help:

> Before uploading anything to Claude, ask: (1) Is this publicly available or out of copyright? If yes, proceed. (2) Is this my own unpublished work? Generally safe on paid tiers. (3) Does it contain personal data, data under NDA, or student data? Check your institutional policy first. (4) Am I unsure? Don't upload it until you've checked.

**§4.4 Verification — cite the verification as methodology**

The guide tells readers to verify but doesn't frame verification as part of the scholarly method. For humanities readers, it might help to frame it more explicitly: "Verification is not a chore added on top of your work — it is the work. Claude's outputs are secondary sources at best, and unverified ones at that. Your critical judgement is what turns a Claude-assisted workflow into scholarship."

**§4.3 Cost — shared usage limits**

The guide doesn't mention that usage limits are shared across all Claude surfaces — Chat, Code, Cowork, and the add-ins all draw from the same allocation. A heavy Cowork session can leave you locked out of Chat. This is worth noting in the cost section.

---

## Part 2: Workflows (workflows.html)

### Verdict

The worked examples are well-constructed, realistic, and well-paced. They demonstrate good practices (git, incremental building, spot-checking) without being preachy. The Herodotus reception example, the colonial correspondence corpus, the epigraphy teaching tool, the document preparation pipeline, and the data cleaning workflow are all genuinely useful models.

The weaknesses are about scope and coverage, not accuracy.

### Corrections needed

**§7.1 — Project memory claim**

The research project workflow says: "Within a Project, Claude retains context across multiple conversations." This repeats the overstated memory claim already flagged. Fix per the main brief.

**§7.2 — "source-data/" protection**

The corpus processing example relies on the CLAUDE.md instruction "Never modify files in corpus/raw/" as the protection mechanism. The guide should also mention hooks as a more robust protection (already covered in §2.5 of the Code page), and ideally note that CLAUDE.md instructions are advisory — Claude *should* follow them but they are not enforced. Hooks are enforced.

### Missing content — broader examples

Already flagged in the main brief: all five examples are text-and-data-processing workflows with a classicist/archival flavour. The guide should add at least two examples from different humanities domains. Recommended:

**§7.6 Interview and transcript analysis**

Scenario: You have 30 interview transcripts from an oral history project. You want to identify recurring themes, code passages, and produce a structured summary.

This would use Chat (with Projects) for close reading and thematic analysis, and optionally Code for batch processing across all transcripts. It demonstrates that Claude is useful for qualitative research, not just text-and-data work.

**§7.7 Research administration and bibliographic cleanup**

Scenario: You have a messy bibliography exported from multiple sources (Zotero, Google Scholar, manual entries). Different formats, duplicate entries, inconsistent capitalisation, missing fields. You want a clean, deduplicated bibliography in Chicago 17th format.

This is the unglamorous task that *every* humanities scholar faces. It uses Chat or Code, is low-risk (bibliography data is not sensitive), and demonstrates immediate practical value.

### Missing content — process documentation in examples

Each workflow ends with a "What to watch for" section. These are good but focus on output quality. None of them address *documenting the process itself* — what prompts were used, what decisions were made, what was accepted and what was rejected. For publishable research, this matters. A brief addition to each workflow's closing section:

> **Record your process.** Note the prompts you gave, the model you used, and what you accepted, modified, or rejected from Claude's output. This is your audit trail. If a reviewer asks "how was this data cleaned?" or "how was this index compiled?", your process record is the answer.

### Improvements for relevance

**§7.3 — Building a web tool**

The epigraphy teaching tool example is well-done but its final step says "Push to GitHub and enable GitHub Pages." For many humanities scholars, GitHub is itself unfamiliar. A sentence acknowledging alternative deployment options (Netlify, institutional hosting, or even just emailing the HTML file) would make the example feel less developer-centric.

**§7.4 — Document preparation**

The LaTeX pipeline example is realistic for a specific workflow but LaTeX itself is niche even within the humanities. Many scholars will never use LaTeX. The example is fine to keep — it demonstrates a real use case — but a prefacing sentence acknowledging that this is a specialist workflow, and that most scholars will use Word or Google Docs, would help it land better.

**§7.5 — Data cleaning**

This is the strongest example for DH readers. No changes needed to the content. But the "What to watch for" section should add: "Be aware that Claude's normalisation choices encode assumptions. If Claude standardises '3rd century CE', 'III sec. d.C.', and '201–300 AD' to the same format, it has made a scholarly decision about periodisation. Make sure that decision is yours, not Claude's."

---

## Part 3: Environments (environments.html)

### Verdict

A sensible, well-structured page. The comparison table and the "recommendations by situation" format work well for the audience. Two corrections needed, one addition, and one formatting issue.

### Corrections needed

**Environment table — Node.js requirement**

The table says setup difficulty for local install is "Low — install Node.js + Claude Code." Node.js is no longer required for the native installer. Should read "Low — run the installer" or similar. The native installer for macOS/Linux is a one-line curl command; for Windows it's a one-line PowerShell command. Neither requires Node.js.

**"I'm just starting out" recommendation**

Currently sends readers straight to Claude Code on the web. Given the guide's revised structure (Chat → Cowork → Code), this should acknowledge that most people starting out should be in Chat, not Code. Rewrite to something like: "If you're new to Claude entirely, start with Chat — you don't need Code at all. If you've used Chat and want to try building something, Claude Code on the web is the lowest-friction Code entry point."

### Missing content

**Claude Code Desktop**

The table lists "web" and "your own laptop/desktop" but doesn't mention Claude Code Desktop (the Code tab within the Claude Desktop app) as a distinct option. This sits between web and CLI: it runs locally, has a graphical interface, supports visual diff review and app previews, and doesn't require the terminal. Add a row:

| **Claude Code Desktop** | None beyond the desktop app | Pro or Max subscription | Users who want local Code capabilities without the terminal | Requires the Claude Desktop app; less flexible than CLI for scripting and automation |

**Remote sessions**

The desktop app now supports remote sessions that run on Anthropic's cloud infrastructure and continue even if you close the app. This is a meaningful option for long-running tasks. Worth a brief mention, either as a note on the web row or as a separate entry.

### IDE integration note

The note about VS Code and JetBrains is fine and appropriately brief. No changes needed.

---

## Part 4: Skills / Prerequisites (skills.html)

### Verdict

This is a well-written, well-structured page. The "key insight" at the end — that Claude shifts the balance from writing code to reading and directing it — is one of the best paragraphs in the entire guide. The learning order is sensible, the time estimates are realistic, and the reassurance that web users can skip terminal and git is correctly placed.

Three changes needed: a rename, a scope clarification, and a content update.

### Rename: "Skills" → "Prerequisites"

**Problem:** The term "Skills" is now heavily overloaded. Anthropic uses "Skills" to mean a specific technical feature: SKILL.md files, the Agent Skills system, the skills marketplace, Cowork plugins with bundled skills. Having a guide page called "Skills" that means "human skills you need to learn" will confuse readers who encounter both uses.

**Fix:** Rename the page title, navigation label, and any cross-references:

- Nav bar: **Prerequisites**
- Page title: **Prerequisites: What You'll Need to Learn**
- URL: Keep as `skills.html` — renaming URLs breaks bookmarks and external links. The visible title and nav label are what matter.

Update all cross-references from other pages (the overview, the Code page) to say "Prerequisites" rather than "Skills."

### Add scope clarification at the top

Cowork is now positioned before Code in the guide. Cowork requires none of these prerequisites. Add a sentence at the very top of the page, before the first section:

> "These prerequisites apply to Claude Code (CLI and Desktop). If you use only Chat or Cowork, you don't need any of them — those tools require no technical background."

This prevents readers from feeling that the whole guide demands technical learning and reinforces the gentle difficulty gradient.

### Update essential skills table

The table currently doesn't mention that the web version and Claude Code Desktop both bypass the terminal and git requirements. The note at the bottom of the "Essential" section says "If you use only Claude Code on the web, you can skip terminal and git entirely." Extend this to: "If you use Claude Code on the web or Claude Code Desktop (in the Claude Desktop app), you can skip terminal and git entirely. These skills are essential only for the CLI version."

---

## Part 5: Table formatting across the guide

### Problem

Several pages use HTML tables for structured information (the orientation table on the overview, the environments comparison, the skills learning tables, the slash commands table). These tables feel cramped — cells are tight, text is dense, and on narrower screens the tables can become hard to scan.

### Recommended CSS improvements

Apply to all tables in the guide:

```css
table {
  width: 100%;
  border-collapse: collapse;
  margin: 1.5em 0;
  font-size: 0.95em;
  line-height: 1.5;
}

th, td {
  padding: 0.75em 1em;
  border: 1px solid #ddd;
  vertical-align: top;
  text-align: left;
}

th {
  background-color: #f5f5f5;
  font-weight: 600;
  white-space: nowrap;
}

/* Prevent first column from wrapping on wider screens */
td:first-child {
  white-space: nowrap;
}

/* Responsive: allow horizontal scroll on narrow screens */
.table-wrapper {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  margin: 1.5em 0;
}

/* Slightly more breathing room for tables with many columns */
table.wide td,
table.wide th {
  padding: 0.6em 0.75em;
  font-size: 0.9em;
}
```

Wrap each table in a `<div class="table-wrapper">` for mobile responsiveness.

The key changes are more generous padding (0.75em vertical, 1em horizontal — up from the browser defaults which are typically minimal), consistent vertical alignment at the top (so multi-line cells align properly), and a light header background to differentiate the header row visually.

For the environments table specifically (which has five columns), consider adding `class="wide"` to use slightly tighter but still readable spacing.

---

## Summary of actions

| Item | Priority | Effort |
|------|----------|--------|
| Fix memory claim in §7.1 | High | Low — one sentence |
| Add process verification to §4.4 | High | Medium — new subsection |
| Rename skills.html title/nav to "Prerequisites" | High | Low — title, nav, cross-references |
| Fix Node.js reference in environments table | High | Low — one cell |
| Fix "just starting out" recommendation in environments | Medium | Low — one paragraph |
| Add Claude Code Desktop to environments table | Medium | Low — one row |
| Add scope clarification to top of prerequisites page | Medium | Low — one sentence |
| Add low-resource language warning to §4.4 | Medium | Low — one paragraph |
| Add decision framework to §4.2 | Medium | Low — one paragraph |
| Add shared usage limits note to §4.3 | Medium | Low — one sentence |
| Mention extended thinking and Research mode in §4.1 | Medium | Low — two sentences + links |
| Add "record your process" to each workflow | Medium | Low — repeated short paragraph |
| Add interview/transcript workflow (§7.6) | Medium | Medium — new section |
| Add bibliography cleanup workflow (§7.7) | Medium | Medium — new section |
| Reformat tables across the guide (CSS) | Medium | Low — one CSS block |
| Add normalisation warning to §7.5 | Low | Low — one sentence |
| Add deployment alternatives to §7.3 | Low | Low — one sentence |
| Preface LaTeX example in §7.4 | Low | Low — one sentence |
| Verify free-tier training claim in §4.2 | Low | Low — check policy, update if needed |
| Update prerequisites page re: Code Desktop | Low | Low — extend one sentence |
