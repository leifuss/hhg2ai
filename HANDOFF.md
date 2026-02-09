# Handoff Document — LLM Guide for Humanities Scholars

**Date:** 9 February 2026
**Branch:** `claude/plan-site-design-4nlo2`
**Author of this document:** Claude (Opus 4.6), working with Leif Isaksen

---

## What this project is

A multi-page static HTML guide hosted on GitHub Pages, aimed at humanities scholars (primarily UK HE) who want to understand and use LLMs effectively. The site uses a shared CSS stylesheet, no build system, no JavaScript frameworks — plain HTML that can be maintained by hand or with AI assistance.

The guide accompanies a workshop but is designed to be useful independently.

---

## What was done in this session

### New content

1. **Cross-model review section** (agentic.html, section 4)
   Added "Cross-checking with multiple models" — methodology and rationale for using multiple LLMs to review each other's output. Covers five reasons (quality, blind spots, reduced corrections, fresh perspectives, reducing burden on human reviewers), practical how-to, and a note on consensus vs. corroboration. References this guide's own multi-model development process as a worked example.

2. **Microsoft Copilot best-practice page** (copilot.html — new file)
   Seven sections covering: what Copilot is (disambiguating free/365/Chat/GitHub variants), why institutions adopt it, capabilities per application, strengths, limitations, getting the most out of it, and when to use other tools. Includes Exeter-specific context about restricted data access.

3. **Restricted-configuration strategies** (copilot.html, section 6)
   Dedicated subsection for institutions like Exeter that restrict Copilot to per-document access. Six practical strategies: personalise settings, use as writing assistant in Word, draft emails in Outlook, feed context manually, use for general-knowledge tasks, combine with dedicated LLMs. Explains why institutions restrict access (proportionate data governance, not technology limitation).

4. **Screenshot embedded** (agentic.html, section 3)
   Claude Code web interface screenshot (`guide/images/claude-code-web.png`) with descriptive caption, placed after the Claude Code tool description.

5. **Feedback mechanism** (all pages)
   Google Form feedback link in every page footer, with page name pre-filled via URL parameter (`entry.1470426217`). Form collects: page name, usefulness rating, free-text feedback, content suggestions, optional email.

### Navigation and structure

- Copilot link added to navigation across all 11 pages (including lfaq.html and quickstart.html)
- Copilot guide card added to index.html
- Footer navigation updated: agentic → copilot → faq chain
- FAQ back-link updated to point to Copilot

### Commits in this session

| Hash | Description |
|------|-------------|
| `e1921ab` | Add Copilot best-practice page and cross-model review section |
| `1b79383` | Add screenshot, revise Copilot for restricted institutional access |
| `57d610e` | Add per-page feedback links to all guide pages |

---

## Current site structure

```
guide/
├── index.html              — Guide home with routing cards
├── briefing.html           — What LLMs are, how they work, ethical context
├── getting-started.html    — Try-it-yourself exercises, setup, prompting
├── use-cases.html          — Use cases by time investment, verification
├── ancient-languages.html  — Translation comparisons (Latin, Greek, Hebrew)
├── agentic.html            — Agentic AI: levels, tools, audit, cross-model review
├── copilot.html            — Microsoft Copilot best practice (NEW)
├── faq.html                — Frequently asked questions
├── glossary.html           — AI terminology definitions
├── quickstart.html         — Print-friendly workshop handout
├── lfaq.html               — Less Frequently Asked Questions (hidden from nav)
├── css/
│   └── style.css           — Shared stylesheet
└── images/
    └── claude-code-web.png — Claude Code web interface screenshot
```

Root level:
```
experiments.html            — Portfolio of Claude AI experiments
README.md                   — Repository overview
PLAN.md                     — Original implementation plan
```

---

## Outstanding issues

### LFAQ page (lfaq.html)
- **Status:** Hidden from navigation; HTML structure and model-selector UI complete
- **Missing:** ChatGPT 5.2 responses for all 12 questions were received from the author but never formatted into the HTML. Responses from other models (Claude chat, Claude API, Gemini, Grok, Kimi, Qwen) are still being collected.
- **Action needed:** Once all model responses are available, format them into the page and restore the nav link. The JavaScript model selector (toggle 1-3 models, colour-coded borders, responsive grid) is already built and working.

### Screenshot
- Only one screenshot was found on the repo (`claude-code-web.png`). The author mentioned both "chat and code screenshots" — it's possible a second screenshot (of the Claude chat interface) was intended but not uploaded. Worth confirming whether a second image is needed.

### Feedback CSV access
- The Google Sheet CSV feed (`pub?output=csv`) cannot be accessed from this development environment due to network restrictions. For future sessions, the author should periodically export the Sheet as CSV and commit it as `guide/feedback.csv` so it can be read directly from the filesystem.

### Getting Started page — `lang` attribute
- This page uses `lang="en"` rather than `lang="en-GB"` like all other pages. Minor inconsistency worth fixing.

---

## Recommendations for further improvement

### Content

1. **Peer review the Copilot page.** This is the newest and least-reviewed page. Running it through the same multi-model review process used for the agentic page (ChatGPT + Gemini feedback) would likely surface useful improvements.

2. **Add a "How this guide was made" section.** The development process (iterative AI-assisted drafting with multi-model peer review, incorporating user feedback via Google Forms) is itself a compelling case study in the methods the guide advocates. A short page or section documenting this would be both transparent and instructive.

3. **Expand the briefing for non-Latin readers.** The getting-started translation exercise currently assumes some Latin. The alternative exercise (discussion questions) is good but gets less attention. Consider adding a second worked example using a non-Latin text — medieval English, Biblical Hebrew, or modern language literary criticism — to broaden appeal.

4. **Update model names and pricing periodically.** The guide references specific models (GPT-4o, Claude Opus 4.6) and pricing (£16–25/month). These will date. Consider a single "Current as of" note at the top of each page, and a termly review cycle tied to the feedback review.

5. **Add a "Further reading" page.** Several pages reference external resources (Jisc guidance, Zenodo, NotebookLM). A curated further-reading list would help readers who want to go deeper, and would be easier to maintain in one place than scattered links.

### Structure and design

6. **Add more images/diagrams.** Current image count: 1. Highest-impact additions would be:
   - A screenshot of a Claude conversation on the getting-started page (lowers the barrier for first-time users)
   - A visual "levels of agency" diagram on the agentic page (reinforces the spectrum concept)
   - A screenshot of Copilot in Word on the Copilot page (helps readers recognise it in their own environment)
   - A simple "how LLMs work" diagram on the briefing page (training data → model → text generation)

7. **Consider a dark mode toggle.** The CSS custom properties are already set up for theming. Adding a dark mode would improve readability for evening use and demonstrate good web practice.

8. **Improve mobile navigation.** The horizontal nav bar wraps on mobile but could benefit from a hamburger menu or collapsible nav at smaller screen widths, especially now that there are 8 nav items.

### Features

9. **Complete the LFAQ.** Once all model responses are collected, this page could be a genuinely distinctive resource — direct comparison of how different frontier models answer the same questions about AI in humanities. Nothing else like it exists.

10. **Implement Option 2 feedback (inline thumbs up/down).** If the Google Form gets good uptake, consider adding per-section thumbs up/down buttons with a Google Apps Script backend. This would give much more granular data about which sections are useful.

11. **Add print stylesheets to new pages.** The quickstart page has a good print stylesheet. Consider extending print-specific CSS to other pages (especially briefing and getting-started) for workshop handout use.

12. **Versioning.** As the guide evolves, consider adding a changelog or version number. This helps returning readers know what's changed and helps the author track the evolution of the resource.

---

## Key technical details for future sessions

- **Shared CSS:** `guide/css/style.css` — all pages reference this; changes here affect everything
- **Nav pattern:** Each page has `<nav class="site-nav">` with the current page marked `class="current"`
- **Feedback form base URL:** `https://docs.google.com/forms/d/e/1FAIpQLSdZSvChJSQgi428ByMSdFCs0Ltk1BBk1tce2zteZEVY5jT63Q/viewform?usp=pp_url&entry.1470426217=PAGE+NAME`
- **Feedback CSV:** `https://docs.google.com/spreadsheets/d/e/2PACX-1vRno3NIV80A0xX7ReFn4Q28gWAwZ6C87OvD7oOiFZwAmHPMYJY3Lmub6yxTzBevV6FhFzjQQqTPgQV4/pub?output=csv` (not accessible from sandboxed environments; commit as `guide/feedback.csv` for reliable access)
- **Language:** British English (`lang="en-GB"`) throughout
- **No build system:** Plain HTML, no pandoc, no SSG, no npm. Files are edited directly.
- **Linter:** A linter runs automatically on file changes and makes intentional modifications (nav updates, content fixes). Treat its changes as authoritative.
