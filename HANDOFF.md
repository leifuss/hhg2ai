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

### Subsequent sessions

6. **Mindset page** (mindset.html — new file)
   Adapted from Anthropic podcast advice for a humanist audience. Covers foundational mindset shifts (exploratory thinking, pushing back, using AI as intellectual mirror) and practical techniques (handoff documents, voice input, sharing exact content). Explains unfamiliar concepts like rubber-duck debugging.

7. **Resources page** (resources.html — new file)
   Curated reading list rendered from briefing documents, with "At Exeter" section in a highlighted callout. Covers teaching guidance, publishing integrity, source-facing AI, pedagogy, books, and critical literacy.

8. **Guide revision based on ChatGPT and Gemini reviews** (multiple files)
   Structural overhaul responding to CPD pedagogical review:

   - **New canonical Rules, Risks & Verification page** (rules.html): Consolidates data boundaries, verification ladder (3 tiers), provenance/disclosure, and "when not to use" guidance. Includes copy-paste templates: system prompts (teaching/research/admin), citation verification checklist, AI use disclosure statements, and agent audit record.
   - **Learning paths on homepage** (index.html): Three directed paths — "I teach next term" (30–45 min), "I'm writing or researching" (45–60 min), "I need to use institutional tools" (20–30 min) — replacing the generic "start wherever" advice.
   - **Redundancy reduction**: Privacy/data sections shortened in getting-started, briefing, copilot, faq, agentic — all now link to canonical Rules page instead of repeating content.
   - **Exercise upgrade pass**: Added "What you'll produce", "How to check it", "Common pitfalls" metadata to exercises in getting-started, agentic. Added "Bring your own material" prompts.
   - **Skip-logic callouts**: Ancient Languages, Agentic AI, and Copilot pages now have callouts at the top telling readers when to skip or skim.
   - **Glossary tiering**: Split into "Core terms" (12 behaviour-changing terms) and "Further depth" (collapsible section with 21 conceptual/technical terms).
   - **Briefing/FAQ boundary**: Tightened to avoid re-explanation — Briefing covers mechanism and ethics, FAQ covers practical concerns, both link to Rules for specifics.
   - **Navigation**: Updated across all pages with Mindset, Rules, and Resources links.
   - **Fixed**: getting-started.html `lang="en"` → `lang="en-GB"`.

---

## Current site structure

```
guide/
├── index.html              — Guide home with learning paths and guide cards
├── briefing.html           — What LLMs are, how they work, ethical context
├── getting-started.html    — Try-it-yourself exercises, setup, prompting
├── mindset.html            — AI interaction mindset for scholars
├── rules.html              — Canonical rules, verification ladder, templates
├── use-cases.html          — Use cases by time investment, verification
├── ancient-languages.html  — Translation comparisons (Latin, Greek, Hebrew)
├── agentic.html            — Agentic AI: levels, tools, audit, cross-model review
├── copilot.html            — Microsoft Copilot best practice
├── faq.html                — Frequently asked questions
├── glossary.html           — AI terminology (core terms + collapsible depth)
├── resources.html          — Curated reading list and Exeter-specific links
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
HANDOFF.md                  — This document
ai-resources-humanities.md  — Source content for resources page
claude-code-brief-resources-tab.md — Brief for resources page
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
- ~~This page uses `lang="en"` rather than `lang="en-GB"` like all other pages. Minor inconsistency worth fixing.~~ **Fixed** in the guide revision session.

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

---

Here is a review and proposed set of amendments from ChatGPT and Gemini. Reflect on them and implement/combine where appropriate:

PROMPT:
conduct a thorough review of https://leifuss.github.io/claudeexperiments/guide/index.html. Consider it from a pedagogical angle, and in particular that for CPD-type learning (professional humanities academics who are not formally studying for an accredited qualification, and engaging with new and unfamiliar material). What is essential, what (if anything is extraneous), where is repetition redundant, rather than positively reinforcing? Are exercises sufficiently practical, clear, engaging, and worthwhile? Identify key improvements in terms of structure and content, and produce a brief for Claude code that prioritises the next development steps. 

Chatgpt response:
You’re aiming at a CPD audience: busy, expert adults who are *not* trying to “study AI”, but to decide (quickly, defensibly) what to do next week in teaching/research/admin. I read the guide end-to-end with that lens and I’ll be blunt where I think it’s currently over-serving “interested early adopters” and under-serving “time-scarce sceptics”.

Confidence: high on the pedagogical critique and restructuring recommendations (this is stable adult-learning stuff); medium on a couple of very specific exercise-level comments where the guide references an exercise but the most detailed text is elsewhere in the guide’s flow.

1. What’s already strong (don’t lose it)

The “not advocacy” stance is exactly right for CPD academics: it lowers defensiveness and frames adoption as a choice with trade-offs, not a moral test. ([leifuss.github.io][1])

The overall spine is also good: Briefing → Getting started → Mindset → Use cases → specialist pages → FAQ/Glossary/Resources. That’s a sensible separation between “what is it?”, “try it”, “how to work with it”, and “where it actually bites in our disciplines”. ([leifuss.github.io][1])

The “Use Cases by time investment” framing is unusually well matched to academic reality. Many AI guides organise by feature (“summarise”, “translate”, “draft”), which is not how people decide in practice. Your time-budget framing is closer to how staff actually adopt tools. ([leifuss.github.io][2])

The Ancient Languages page has the right epistemic move: show side-by-side examples, then *explicitly* make the reader judge quality with their own expertise, and flag that even the commentary is AI-generated (so the page performs its own critique). That is good CPD pedagogy because it trains “calibration”, not “trust”. ([leifuss.github.io][3])

2. What’s essential for CPD (and what currently risks being optional-but-central)

For this audience, the essential learning outcomes are practical and normative, not technical:

A. “Can I use this without embarrassing myself?” (verification habits, citation risk, hallucinations, disclosure norms)
B. “Can I use this without breaching policy/law?” (GDPR/data protection boundaries, institutional tools vs consumer tools)
C. “Where does this actually save time?” (high-ROI tasks with low verification burden)
D. “Where does it *damage* scholarship/teaching?” (when slow reading is the point; when it produces false confidence)

You cover all of these, but they’re distributed across multiple pages and repeated in slightly different voices (see below). CPD learners do better when you give them a single “operational doctrine” early, then the rest of the guide is examples and depth.

Concrete suggestion: add a one-page “CPD Quick Doctrine” very near the start (or as a persistent sidebar card) containing:

1. Don’t feed it sensitive data.
2. Don’t trust citations without checking.
3. Treat outputs as hypotheses.
4. Use it where verification is cheap.
5. Record prompts/inputs for provenance when it matters.

Right now, elements of that doctrine appear across Getting Started, Use Cases, Copilot, FAQ, Agentic AI. ([leifuss.github.io][4])

3. What feels extraneous (or “nice, but too early”) for CPD

This is the bit where you may disagree with me, so I’ll be crisp.

Glossary bloat: terms like Mixture of Experts and MCP are intellectually fine, but for CPD they’re mostly “conceptual theatre”: they feel like you’re learning the internals of a toaster to decide whether to make toast. A CPD glossary should prioritise terms that change behaviour and risk: hallucination, context window, grounding/RAG, fine-tuning, training vs inference, data retention, agent/tool use, provenance, disclosure. The current glossary has those, but it also contains quite a bit that won’t change the reader’s practice. ([leifuss.github.io][5])

Agentic AI page: the spectrum of autonomy and the audit recipe are excellent; but the Git/Zenodo/provenance discussion can tip into “this is becoming a methods course”. For CPD you want two tracks: (1) “safe dabbling” and (2) “research-grade workflow”. Right now they’re interleaved. ([leifuss.github.io][6])

Copilot page: strong and very UK-institution realistic, but it’s long relative to the number of people for whom Copilot is the *main* issue. If Copilot is your institution’s default, then yes—this matters. If not, it’s peripheral. CPD design usually solves this with “role paths” (“If your institution provides Copilot, read this 5-minute summary; otherwise skip”). You hint at this, but you could make it more aggressively skippable. ([leifuss.github.io][7])

4. Where repetition is redundant (not reinforcing)

Repetition is good when it is stable phrasing attached to a stable rule (“Always verify citations”). It’s redundant when it re-explains the same idea with new prose, forcing the learner to re-parse it.

I see four recurring themes that should be consolidated into canonical “rules” and then referred to, not re-taught:

Privacy/data protection: appears in Getting Started (platform privacy settings), FAQ (GDPR), Copilot (institutional boundary), Agentic (what the agent can touch). You can keep one definitive “Data boundary” section and then have the other pages link back. ([leifuss.github.io][4])

Verification: Use Cases has explicit verification strategies; Copilot reiterates hallucination and points to verification; Agentic repeats “review everything” plus an audit recipe. Make “Verification ladder” the canonical object, then each page says “Use ladder level 1/2/3 here.” ([leifuss.github.io][2])

“Start small / iterate”: Mindset teaches this; Agentic teaches it again; Getting Started teaches iteration in prompting principles. Pick one canonical paragraph and reuse it as a callout. ([leifuss.github.io][8])

“Not replacement”: index frames “not advocacy”; FAQ answers “will it replace us?” That’s fine, but the FAQ answer is already compact—no need to echo it elsewhere. ([leifuss.github.io][1])

5. Are the exercises practical, clear, engaging, worthwhile?

The guide is strongest when it gives the learner something they can do in under 10 minutes with an obvious success condition.

Good examples of that style:
Agentic “first run” word-count table task is great because it has a clear check (manual word count) and produces a tangible artefact (CSV). ([leifuss.github.io][6])

Ancient Languages “iterative engagement” prompts are good because they teach a transferable move: don’t ask once; interrogate lexical choice, word order, and rhetorical function. ([leifuss.github.io][3])

Where the exercises could be better for CPD:
Make success criteria explicit. CPD learners want to know: “What does ‘good’ look like?” For each exercise, add a tiny rubric:

* accuracy check (what to compare against)
* quality check (tone/structure)
* risk check (where hallucinations would show)

Add “bring your own artefact” options. Many humanities academics won’t want to type in Tacitus or upload a folder for Claude Code on first contact. Give them three “starter artefacts”:

1. a paragraph of their own draft (low risk)
2. an anonymised email thread (admin)
3. an abstract + two citations (research)

Right now the examples are good, but they’re still “guide-authored” rather than “my Tuesday afternoon.” That matters for adoption.

Add one capstone per pathway. CPD works when learners leave with something immediately usable. Example capstones:
Teaching capstone: produce an assessment brief revision that is robust to AI misuse + a student disclosure statement.
Research capstone: produce a literature-review scaffold *with a verification plan*.
Admin capstone: produce a meeting-summary workflow (Copilot) plus a “don’t trust without checking” checklist.

6. Key structural improvements (highest ROI)

If you do only three structural changes, do these.

A. Add “learning paths” on the home page
Three buttons:

* I teach next term (30–45 min)
* I’m writing/publishing (45–60 min)
* I’m managing admin/institutional work (20–30 min)
  Each path lists exactly which pages/sections to read and which exercises to do.

The guide currently says “start wherever suits your situation”, which is friendly but cognitively costly: novices don’t know what suits them. ([leifuss.github.io][1])

B. Create one canonical “Rules & Risks” page and link to it everywhere
It should own:

* data boundary rules
* verification ladder
* disclosure/provenance expectations
* when not to use the tools

Then every other page can be shorter and more example-driven. This will reduce redundant repetition and improve CPD skim-value. ([leifuss.github.io][2])

C. Convert key advice into printable checklists and templates
CPD adoption is often “I need something I can paste into my workflow.”
Templates to include:

* a system prompt template for humanities work (you already have an example; make it copy-paste + variants)
* a verification checklist for citations and factual claims
* a student policy paragraph + disclosure language
* an “agent audit record” template (prompt, scope, snapshot, sample check, results)

You already have most of the content; the missing piece is packaging it into tools people can reuse. ([leifuss.github.io][2])

7. Content improvements (where the guide should push harder)

This is where I’ll challenge a common failure mode: many AI guides accidentally train “competent use” without training “epistemic discipline”.

Two upgrades:

Make “false confidence” the central enemy, not “hallucination”.
You already gesture at this (e.g., persona reviews can create false confidence; AI commentary can overstate; Copilot fatigue conflates tool limits with AI limits). I’d make it a named concept and keep returning to it. ([leifuss.github.io][2])

Add a section on “social/institutional dynamics”.
The biggest risks for humanities academics are not just individual error; they’re institutional pressures, audit cultures, and shifting norms (e.g., “use AI to be efficient”, “students must/ mustn’t use it”, “peer review expectations”). Your FAQ nods to policy pressure; I’d expand that into a short “how to resist bad institutional AI adoption” playbook (with concrete moves: ask for policy clarity, demand disclosure norms, insist on human-verification budgets, etc.). ([leifuss.github.io][9])

8. Brief for Claude Code (prioritised next steps)

Below is a development brief you can paste into Claude / “Claude Code” as the next build plan. It assumes the guide remains a static site (Markdown → HTML), and prioritises CPD usability over adding more material.

Goal
Refactor the “LLM Guide for Humanities Scholars” into a CPD-first learning resource for professional humanities academics (time-scarce, non-accredited learning), improving navigation, reducing redundancy, and turning key guidance into reusable templates and checklists.

Primary audience
UK humanities academics (teaching + research) encountering LLMs as unfamiliar tools; many will have institutional access to Microsoft Copilot / Microsoft 365 Copilot. Secondary audience: specialists in ancient languages.

Success criteria

* A sceptical academic can choose a path in <30 seconds and complete a first “useful outcome” in <30 minutes.
* Key risk rules are discoverable from any page in <2 clicks.
* Repetition is reduced by centralising rules; pages link back rather than re-explaining.
* Each exercise has explicit success criteria and produces an artefact (text, checklist, CSV, revised paragraph, policy statement).

P0 (highest priority, next iteration)

1. Add a new page: “Quick Start Paths”

* Three pathways: Teach / Research & Publishing / Admin & Institutional
* For each: time estimate, required pages, 1–2 exercises, capstone artefact
* Update Guide Home to foreground these pathways (“Choose a path”) rather than “start wherever”.

2. Add a new canonical page: “Rules, Risks, and Verification”
   Include:

* Data boundary rules (GDPR, student/personnel data, embargoed research)
* Verification ladder (quick/moderate/publishable) + citation checking checklist
* “When not to use these tools”
* Provenance/disclosure expectations (lightweight + research-grade)
  Then edit Getting Started, Use Cases, Copilot, Agentic AI, FAQ to link to this page instead of repeating content.

3. Convert key advice into downloadable/pasteable templates (as copy blocks)

* System prompt template with 3 variants (teaching, research, admin)
* “Citation verification checklist”
* “AI use disclosure statement” (generic + student-facing)
* “Agent audit record” template (prompt, scope, snapshot, sampling plan, results)
  Place these on the Rules page and link from relevant sections.

P1 (next priority)
4) Exercises upgrade pass
For every exercise or worked example:

* Add “What you’ll produce” (artefact)
* Add “How to check it” (success criteria)
* Add “Common failure modes” (1–3 bullets)
* Add “If you have 5 more minutes…” extension prompt
  Add one capstone per pathway (teaching assessment tweak; research literature scaffold + verification plan; admin inbox/meeting workflow).

5. Glossary trim + tagging
   Split glossary terms into:

* “Must know” (behaviour-changing) and “Optional depth”
  Move optional depth below a collapsible or to a second page. Keep glossary CPD-lean.

P2 (polish / maintenance)
6) Navigation and “skip logic”
Add callouts at top of specialist pages:

* Ancient Languages: “If you don’t read Latin/Greek/Hebrew, skim sections X and jump to Y.”
* Agentic AI: “If you only use chat tools, read section 1 + risks and stop.”
* Copilot: “If your institution doesn’t provide Copilot, read 2-minute summary and stop.”

7. Add a lightweight “last reviewed” banner per page and a changelog page (CPD users value freshness signals).

Notes / constraints

* Preserve the guide’s non-advocacy tone.
* Avoid adding more tools or more reading until the structure is tighter; prioritise usability and reuse.
* Keep discipline-specific examples (Tacitus/Thucydides/Genesis; Google DeepMind projects Ithaca / Aeneas; Transkribus; Vesuvius Challenge) but ensure each is tied to an explicit practice (verification, calibration, workflow choice). ([leifuss.github.io][10])

If you want to push back: the main place I expect disagreement is my claim that parts of the glossary/agentic material are “too early”. The counterargument is that humanities academics *do* benefit from conceptual depth to resist hype. True—but CPD sequencing still matters: depth is best offered as an optional layer once a person has crossed the “I can do one useful thing safely” threshold. My bet (high confidence) is that this change increases uptake without lowering intellectual seriousness.

If you’d like, I can also propose the exact revised home-page copy and the section outline for the new “Rules, Risks, Verification” page, in your existing style.

[1]: https://leifuss.github.io/claudeexperiments/guide/index.html "LLM Guide for Humanities Scholars"
[2]: https://leifuss.github.io/claudeexperiments/guide/use-cases.html "Use Cases by Time Investment — LLM Guide for Humanities Scholars"
[3]: https://leifuss.github.io/claudeexperiments/guide/ancient-languages.html "Ancient Languages and Texts — LLM Guide for Humanities Scholars"
[4]: https://leifuss.github.io/claudeexperiments/guide/getting-started.html "Getting Started — LLM Guide for Humanities Scholars"
[5]: https://leifuss.github.io/claudeexperiments/guide/glossary.html "Glossary: AI Terminology — LLM Guide for Humanities Scholars"
[6]: https://leifuss.github.io/claudeexperiments/guide/agentic.html "Agentic AI: From Chat to Autonomous Tools — LLM Guide for Humanities Scholars"
[7]: https://leifuss.github.io/claudeexperiments/guide/copilot.html "Microsoft Copilot: Best Practice — LLM Guide for Humanities Scholars"
[8]: https://leifuss.github.io/claudeexperiments/guide/mindset.html "Mindset — LLM Guide for Humanities Scholars"
[9]: https://leifuss.github.io/claudeexperiments/guide/faq.html "Frequently Asked Questions — LLM Guide for Humanities Scholars"
[10]: https://leifuss.github.io/claudeexperiments/guide/resources.html "Resources — LLM Guide for Humanities Scholars"

---
here is a review from Gemini:

Gemini said
This review evaluates the Claude Experiments Guide through a pedagogical lens tailored for Continuing Professional Development (CPD) in the humanities.

Pedagogical Assessment

The guide employs a "low-threshold, high-ceiling" design, which is ideal for time-constrained academics. By explicitly stating that non-adoption is a "defensible position," the guide lowers the psychological barrier to entry, moving from a "tech-evangelist" model to a "professional inquiry" model.

1. What is Essential

The "Mindset" shift: Academics already possess the analytical skills required for prompting (specifying context, defining parameters, critical critique). Framing LLM interaction as a specialized form of scholarly supervision is the guide’s strongest pedagogical hook.

Ancient Languages & Texts: This is the "proof of value." For this demographic, a generic "write an email" example is extraneous; seeing how a model handles fragmentary Greek or Hebrew is what builds credibility.

The 15-Minute Entry Point: For CPD, time-to-value must be near-instant. The explicit categorization of tasks by time (Use Cases) is a vital structural choice.

2. What is Extraneous or Redundant

Briefing vs. FAQ overlap: There is a risk that the "Briefing" and "FAQ" cover the same ethical ground (data privacy, environmental impact). These should be more strictly partitioned: Briefing for mechanical foundations (how it works) and FAQ for institutional/ethical objections.

Copilot Section: While institutionally relevant, if the goal is "Claude Experiments," deep-diving into Microsoft-specific UI can feel like a detour. It should be a sidebar rather than a primary navigation pillar.

Glossary vs. Contextual Explanation: In CPD for humanities, terminology is better learned in situ. A standalone glossary is often ignored. Integrating these definitions into the "Mindset" or "Use Cases" pages would be more effective.

3. Exercises: Practicality and Engagement

Clarity: The "15-minute exercise" is clear but needs to ensure it doesn't lead to a "dead end." An exercise is only worthwhile if it results in a reusable artifact (e.g., a cleaned-up bibliography or a draft translation).

Engagement: The current exercises are functional. To increase engagement, they should lean into "Scholarly Friction"—encouraging the user to find where the model fails or hallucinates in their specific niche. This aligns with the academic instinct for critique.

Key Improvements

Structure:

Problem-Based Navigation: Supplement the current "Where to Start" with a "I want to..." menu (e.g., "...clean up OCR," "...summarize a field," "...transcribe a manuscript").

The "Critique" Loop: Every exercise should end with a "Verification Step." This reinforces the pedagogical goal that the human remains the arbiter of truth.

Content:

Friction as Feature: Add a section on "Productive Failure"—examples where Claude gets a translation wrong and how to "cross-examine" it to find the truth.

Domain Isolation: Ensure the ancient language examples don't just show the result, but the iterative process of getting there.

Brief for Claude: Next Development Steps

Objective: Refactor the guide to prioritize "Applied Scholarly Workflows" and reduce theoretical redundancy.

Instructions for Code/Content Update:

Merge & Streamline: Consolidate ethical discussions from the Briefing and FAQ into a single "Critical Literacy" module.

Task-Based UI: Update index.html to include a "Quick-Wins" matrix that maps common scholarly pain points (e.g., messy footnotes, unformatted metadata) to specific use cases.

Refactor Use-Cases: For each use case in use-cases.html, add a "Verification Protocol" block. This block should provide 2–3 questions the user must ask to validate the output.

Ancient Languages Enhancement: In ancient-languages.html, implement a "Side-by-Side" comparison layout (Raw OCR vs. Claude Correction vs. Human Standard) to demonstrate the delta in quality clearly.

Glossary Integration: Remove the standalone glossary.html and replace it with tooltips or "Definition Sidebars" within the Mindset and Getting Started pages to maintain flow.

Confidence Markers: Ensure all "demonstration" outputs in the guide include a "Confidence Level" or "Known Limitation" tag to model the behavior scholars should expect from the AI.

Confidence Score: 5/5. This assessment aligns with established DH pedagogical frameworks (e.g., TAPoR, Programming Historian). Competence Limits: My review is based on the web structure and general CPD principles; I cannot assess the specific institutional technical constraints of the Exeter-specific links.
