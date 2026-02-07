# Implementation Plan: Restructuring the AI Guide for Humanities Colleagues

*Based on the design brief, February 2026*

---

## Overview

Separate the site into two distinct parts:

- **`/guide/`** — A multi-page guide for colleagues in Classics, Ancient History, and Theology & Religion
- **`/` (root)** — The existing experiments portfolio (unchanged)

Content authored in markdown, with generated HTML. Shared external CSS stylesheet. Designed for GitHub Pages now, SharePoint portability later. Also serves as a resource for an afternoon workshop.

---

## Site Structure

```
guide/
  index.html              — Guide landing page / table of contents
  briefing.html           — Main briefing document (restructured)
  getting-started.html    — Practical "try it yourself" content
  use-cases.html          — Use cases by time investment
  ancient-languages.html  — Worked translation examples and discipline-specific content
  glossary.html           — Standalone glossary
  faq.html                — Common questions and concerns
  css/style.css           — Shared stylesheet

/                         — Existing experiments portfolio (unchanged)
```

Corresponding `.md` source files alongside each `.html` file.

---

## Phase 1: Infrastructure and Tooling

### 1.1 Directory and CSS

- Create `/guide/` directory structure
- Extract shared CSS from existing inline styles into `guide/css/style.css`
- Add styles for: inter-page navigation, side-by-side comparisons (ancient languages), collapsible sections (progressive enhancement), print

### 1.2 Build Pipeline

**Decision: pandoc with build script vs. hand-maintained HTML**

Recommendation: pandoc with a shared HTML template (`guide/template.html`) and a `build.sh` script. Keeps markdown as source of truth, generates consistent HTML.

### 1.3 Navigation

Simple `<nav>` element on every page linking to all guide pages. "You are here" indicator. Link back to experiments portfolio as "Further Resources."

---

## Phase 2: Content Restructuring (Existing Material)

### 2.1 Briefing (`briefing.md`, ~3,500 words)

Reorder existing sections:

| # | New Section (~word count) | Source in Current Briefing | Work |
|---|---|---|---|
| 1 | Welcome (300w) | "What this document is for" | Rewrite: warmer, signal time-respect, explain guide structure, add last-updated |
| 2 | Why This Matters (500w) | "Why awareness matters" (currently §7) | Move up, light edit |
| 3 | What These Systems Are (600w) | "What these systems are" | Condense, add discipline-relevant example |
| 4 | Common Misconceptions (400w) | "Two directions of misconception" | Keep, minor polish |
| 5 | Gains and Losses (600w) | "What might be gained" + "What might be lost" | Merge, condense |
| 6 | Ethical Dimensions (800w) | "Ongoing ethical dimensions" | Keep largely as-is |
| 7 | The Philosophical Question (300w) | "The philosophical question" | Condense, move later |
| 8 | If You Choose to Engage | "If one chooses to engage" | Keep, link to getting-started.html |
| 9 | Looking Ahead (300w) | "Beyond the current moment" | Condense from ~500w |

**Updates needed:** Claude Opus 4.5 → 4.6, verify GPT-5.1 reference, December 2025 → February 2026, check all external links.

### 2.2 Getting Started (`getting-started.md`, ~1,500 words)

| # | Section (~word count) | Source | Work |
|---|---|---|---|
| 1 | Try It Yourself (400w) | **New** | 15-minute discipline-relevant exercise |
| 2 | Setting Up (600w) | Appendix "Getting Started" | Extract, light edit |
| 3 | Prompting Principles (500w) | Appendix "Prompting Principles" | Extract, minor condensing |

**Decision: "Try It Yourself" exercise type.** Recommendation: translation-based (engages audience expertise, enables independent evaluation). Offer alternative task-based exercise for those without ancient language background.

### 2.3 Use Cases (`use-cases.md`, ~2,000 words)

Reorganize from task-type to time-investment structure:

| New Category | Content Mapped From |
|---|---|
| If You Have 15 Minutes | Admin tasks, discussion questions, reformatting, draft feedback |
| If You Have an Afternoon | Argument testing, grant review, code for projects, OCR, data analysis |
| If You Want to Go Deeper | RAG/NotebookLM, structured extraction, custom assistants, voice capture, open-weights models |

Preserve risk notes (tightened). Move system prompts and custom instructions content here.

### 2.4 Glossary (`glossary.md`, ~1,200 words)

Extract from appendix as standalone page. Add brief intro. No substantive changes needed.

---

## Phase 3: New Content

### 3.1 Ancient Languages and Texts (`ancient-languages.md`, ~2,000 words)

**Section 1: Worked Translation Examples**
- Short passages (2-4 sentences) in Latin, Greek, Hebrew
- Side-by-side: original text + LLM translation (model name and date noted)
- No editorial judgment — let reader assess quality
- At least one strong result, one plausible-but-problematic result
- Canonical, recognisable texts

**Candidate passages (for author's selection):**
- Latin: Tacitus (Annales 1.1 or Agricola) — tests compressed prose, ablative absolutes, indirect speech
- Greek: Thucydides (Funeral Oration or Archaeology) — difficult syntax, interpretive cruxes; or a Septuagint/NT passage with theological translation implications
- Hebrew: Genesis 1 or a Psalm — semantic range issues, where LLM confidence exceeds reliability

**Section 2: Iterative Engagement**
Worked example of drilling down: asking about a specific clause, requesting alternative renderings, asking why the model chose an interpretation, identifying genuine ambiguities. Shows the gap between single-prompt translation and productive use.

**Section 3: Teaching vs. Research**
The same tool at different required precision levels is effectively a different tool.

**Section 4: Manuscripts, Fragments, and Sacred Texts**
- Manuscript/textual criticism: genuinely useful for (OCR, apparatus, collation) vs. unreliable for (damaged MSS, conjecture, palaeography)
- Fragmentary evidence: LLMs "complete" fragments — hypothesis generation vs. danger as evidence
- Theological sensitivity: confident fluency ≠ understanding or engagement with tradition

### 3.2 FAQ (`faq.md`, ~800 words)

Six questions, ~100-130 word answers each:

1. "Will this replace us?"
2. "Can students use this to cheat?"
3. "Is it ethical to use this?"
4. "I tried ChatGPT once and it was rubbish"
5. "Do I have to learn to code?"
6. "What about data protection / GDPR?"

Self-contained answers — each works without having read the rest of the guide.

### 3.3 Guide Landing Page (`index.md`)

Table of contents with brief descriptions. Routing guidance by reader situation ("If you're sceptical but curious…", "If you want to try something now…", "If you work with ancient languages…"). Link to experiments portfolio.

---

## Phase 4: Workshop Handout

A 2-page standalone extract covering:
- Welcome (condensed)
- 15-Minute Experiment (from Getting Started)
- Glossary (condensed)

Separate markdown file (`guide/quickstart.md`). Designed for PDF generation via pandoc.

**Decision: Build now or defer until content is stable?**

---

## Phase 5: Polish and Portability

- Verify all external links
- Add "last updated" dates to all pages
- Note that model names and capabilities may change
- Test SharePoint portability: no server-side dependencies, relative paths, system fonts, semantic HTML
- Progressive enhancement JS: collapsible FAQ/glossary sections (content accessible without JS)
- Print CSS for workshop handout use case

---

## Implementation Order

Prioritised for workshop readiness and creative-work-first:

1. Infrastructure (CSS, template, directory structure)
2. Getting Started (workshop's most-needed page)
3. Ancient Languages (most distinctive new content for this audience)
4. Briefing (restructuring existing strong content)
5. FAQ (quick to write, useful for workshop)
6. Use Cases (reorganising existing content)
7. Glossary (extract, minimal work)
8. Guide Index (needs other pages to exist first)
9. Workshop Handout (derivative)

---

## Open Decisions

1. **Build pipeline:** pandoc + build script, or hand-maintained HTML?
2. **"Try It Yourself" exercise:** translation-based, task-based, or both?
3. **Ancient language passages:** which specific texts?
4. **Workshop handout:** build now or defer?
5. **Root index:** add link to `/guide/`, or keep independent?
