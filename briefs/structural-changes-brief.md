# HHG2AI Structural Changes: Implementation Brief

*For Claude Code. March 2026.*

---

## Overview

Three tasks, in dependency order:

1. **Restructure nav** — group Claude, ChatGPT, and (placeholder) Copilot under a new "Platforms" top-level section, with a "How to Choose" landing page.
2. **Update README.md** — rewrite for the new structure and broader audience.
3. **Move GitHub link** from header to footer.

---

## Task 1: Platforms section and "How to Choose"

### Nav restructure

In `mkdocs.yml`, replace the current standalone `Claude` nav entry (and the new `ChatGPT` entry, if already added) with a grouped section:

```yaml
- Platforms:
  - How to Choose: platforms/index.md
  - Claude:
    - claude/index.md
    - Chat: claude/chat.md
    - Cowork: claude/cowork.md
    - Apps & Extensions: claude/apps.md
    - Code: claude/code.md
    - Environments: claude/environments.md
    - Prerequisites: claude/prerequisites.md
    - Worked Examples: claude/workflows.md
    - Glossary: claude/glossary.md
  - ChatGPT:
    - chatgpt/index.md
    - Chat: chatgpt/chat.md
    - Projects: chatgpt/projects.md
    - Research, Apps & Agent: chatgpt/research-apps-agent.md
    - Canvas, Data & Study: chatgpt/canvas-data-study.md
    - GPTs & Codex: chatgpt/gpts-codex.md
    - Plans & Privacy: chatgpt/plans-privacy.md
    - Worked Examples: chatgpt/workflows.md
  - Microsoft Copilot: platforms/copilot-placeholder.md
```

**Note:** The existing `docs/claude/` directory does NOT move. The files stay where they are; only the nav hierarchy changes. Similarly, `docs/chatgpt/` stays where it is.

### New file: `docs/platforms/index.md`

This is the "How to Choose" page. It serves as the landing page for the entire Platforms section.

#### Structure

```markdown
# How to Choose a Platform

*March 2026*

!!! tip "Don't Panic"
    You do not need to pick the right platform on your first try.
    The core skill — learning to work well with an AI assistant —
    transfers across all of them. Start anywhere. Switch when you
    have a reason to.

## The short version

[2–3 sentences: all major platforms now offer capable free tiers;
the differences that matter for humanities researchers are price,
privacy, institutional availability, and how far you want to push
agentic or multimodal capabilities.]

## Questions to ask

Frame as a decision guide, not a recommendation matrix.
Use an MkDocs table or a series of short subsections. Content below.

### What is your budget?

- **Nothing for now.** ChatGPT Free gives access to GPT-5.x with
  usage limits. Claude Free and Gemini Free are also capable.
  All three are good enough for a genuine first encounter with
  what these tools can do. Start with whichever is easiest to
  sign up for.
- **Around £20/month for individual use.** Claude Pro and ChatGPT
  Plus are both £20/month (or equivalent). Claude Pro gives access
  to Opus (Anthropic's most capable model), Claude Code, Cowork,
  and higher usage limits. ChatGPT Plus gives expanded access to
  GPT-5.x, deep research, agent mode, Codex, and custom GPTs.
  Either is a reasonable choice. If your main work is writing,
  reading, and analysis, both are strong. If you want agentic
  coding, Claude Code is currently more mature for that workflow.
- **Institutional budget.** Ask your IT department what is already
  available. Many UK universities have Microsoft 365 licences that
  include Copilot. Some have negotiated institutional access to
  ChatGPT (Edu/Enterprise) or are exploring Anthropic's offerings.
  Using an institutional platform is almost always better for data
  governance than a personal subscription.

### Do you need privacy guarantees?

- **Personal, low-risk, exploratory work.** Any consumer plan is
  fine. Be aware that consumer ChatGPT may use your conversations
  for model training unless you opt out. Claude and Gemini have
  their own data policies — check the current terms.
- **Institutional data, student data, or sensitive material.**
  Use an institutional platform (Copilot via Microsoft 365,
  ChatGPT Enterprise/Edu, or equivalent). These typically include
  contractual commitments that your data will not be used for
  training.
- **Maximum control.** Open-weights models (such as Llama, Mistral,
  or Qwen) can be run locally on your own hardware. Nothing leaves
  your machine. This requires technical setup but gives complete
  data sovereignty. See the terminology section below for what
  "open weights" means.

### Are you interested in multimodal capabilities?

- **Image understanding and generation.** ChatGPT (via DALL-E and
  GPT-4o/5.x vision) and Gemini are currently strongest here.
  Claude can analyse images but does not generate them.
- **Voice.** ChatGPT and Gemini both offer voice interaction.
  Claude has more limited voice support.
- **Video.** Gemini has native video understanding. Other platforms
  are more limited. For most humanities work this is not yet a
  primary need.

### Do you care about the company behind the model?

This is a legitimate question for humanities scholars. These
companies have different corporate structures, safety commitments,
and relationships to government and military contracts.

- **Anthropic** (Claude) is a public benefit corporation focused
  on AI safety research. It has accepted US defence contracts.
- **OpenAI** (ChatGPT) was founded as a nonprofit in 2015 and
  restructured in 2025 into the OpenAI Foundation (nonprofit)
  controlling OpenAI Group (a public benefit corporation). It has
  extensive commercial partnerships, notably with Microsoft.
- **Google** (Gemini) is a division of Alphabet, one of the
  world's largest technology companies.
- **Microsoft** (Copilot) integrates OpenAI models into its
  365 productivity suite.
- **Open-weights models** are released by various organisations
  (Meta, Mistral, Alibaba, and others) under varying licence
  terms. They can be run independently of any company's
  infrastructure.

None of these affiliations is automatically disqualifying, but
they are worth knowing about, especially if your institution
has policies on technology procurement or ethical sourcing.

## A note on memory and lock-in

Most platforms now offer some form of memory: the assistant learns
your preferences, context, and working style over time. This is
genuinely useful — you will get more out of an AI assistant after
weeks of use than on day one.

The important thing to know is that the core skill transfers. What
you learn about prompting, verification, and working with AI on
one platform applies on every other. If you later switch platforms,
you will lose accumulated memory but not accumulated competence.

Some platforms (Claude, ChatGPT) allow you to view and manage what
the system remembers. Formal memory export and import across
platforms is not yet straightforward, but the practical lock-in is
low: switching costs time, not money or data.

## Essential terminology

Brief, plain-language definitions. Cross-reference the
[Glossary](../glossary/) for fuller explanations.

### Frontier models

The most capable AI models currently available from leading
companies. As of early 2026, these include Anthropic's Claude
Opus, OpenAI's GPT-5.x, and Google's Gemini Ultra. "Frontier"
is a moving target — today's frontier model is next year's
baseline.

### Hyperscalers

The very large cloud computing companies — primarily Amazon Web
Services (AWS), Microsoft Azure, and Google Cloud — whose
infrastructure underpins most AI services. When you use ChatGPT,
Claude, or Gemini, your queries are processed on hardware owned
by one of these companies. This matters for data governance:
your data may be stored and processed in jurisdictions you did
not choose.

### Open-weights models

AI models whose internal parameters (weights) have been published,
allowing anyone to download, run, modify, and study them. Examples
include Meta's Llama, Mistral's models, and Alibaba's Qwen. "Open
weights" is more precise than "open source" because the training
data, training code, and licence terms are not always fully open.
Running open-weights models locally gives you complete control
over your data but requires technical setup and capable hardware.

### Parameters

The internal numerical values that define what a model has
learned. Larger models have more parameters (GPT-4 is estimated
at over a trillion; smaller open-weights models may have 7–70
billion). More parameters generally means more capability but
also more computational cost. You do not need to know the number
to use a model, but you will encounter the term.

### Context window

The amount of text (and other input) a model can process in a
single conversation. Measured in tokens (roughly ¾ of a word).
Larger context windows allow the model to work with longer
documents or maintain longer conversations. As of 2026, frontier
models typically offer context windows of 100,000–1,000,000+
tokens, though quality of attention degrades over very long
contexts.
```

!!! note "Leif's Notes"
    The model landscape changes fast. This page gives you durable
    questions rather than perishable answers. The specific
    recommendations are dated March 2026; if you are reading
    this later, check the individual platform pages for current
    details.

#### Editorial notes for implementation

- Keep the tone matter-of-fact, like the Claude section. Not salesy, not breathless.
- British English throughout.
- Do NOT hard-code prices in the main text except where essential (the £20/month comparison). Prices change.
- Do NOT create a feature comparison matrix on this page. The individual platform sections have their own feature tables. This page is about the *decision*, not the *details*.
- The terminology definitions should be short — 3–5 sentences each. They are orientation, not encyclopaedia entries. Fuller definitions go in the Glossary.
- Gemini and open-weights models are mentioned in the choosing guide but do NOT yet have their own platform manual sections. This is fine. The page should acknowledge this naturally (e.g., "Detailed guides for Gemini and local open-weights setups are planned").

### New file: `docs/platforms/copilot-placeholder.md`

```markdown
# Microsoft Copilot

*Coming soon.*

Microsoft Copilot integrates AI capabilities into Microsoft 365
applications (Word, Excel, PowerPoint, Outlook, Teams). For
researchers at institutions with Microsoft 365 licences, Copilot
may be the most readily available AI assistant.

A detailed guide for humanities use of Copilot is planned. In the
meantime, see [How to Choose](index.md) for guidance on where
Copilot fits in the broader landscape.
```

### Cross-reference updates

After creating the Platforms structure, update cross-references in other sections:

- **Primer** (`docs/guide/` pages): any references to "the Claude section" should be updated to reference "the Platforms section" or the specific platform.
- **Essentials** (`docs/essentials/` pages): update any links that point to `claude/` as the only platform option.
- **Landing page** (`docs/index.md`): update the site map / navigation description to reflect the new Platforms grouping.

---

## Task 2: README.md

Replace the current README with a new version. The README is for GitHub visitors — potential contributors, curious technologists, academics who find the repo. It should NOT replicate the site's landing page.

```markdown
# A Hitchhiker's Guide to AI for the Humanities

A practical, opinionated guide to using AI tools in humanities
research, teaching, and administration. Written for scholars
who want to use these tools well, not just use them.

**Live site:** [leifuss.github.io/hhg2ai](https://leifuss.github.io/hhg2ai/)

## What this is

A free, open educational resource covering:

- **The Primer** — What AI tools are, how they work, and how to
  think about them critically.
- **Essentials** — Verification, data governance, prompting,
  disclosure, and multi-model strategy. Applies across all
  platforms.
- **Platforms** — Detailed practical guides for Claude, ChatGPT,
  Microsoft Copilot, and others. How to use each tool for real
  humanities work, not just demos.
- **Bootcamp** — Structured training materials for workshops and
  self-directed learning.

The guide assumes no technical background. It is aimed primarily
at humanities scholars in higher education (classics, history,
archaeology, theology, literature, languages, philosophy) but
much of it applies more broadly.

## What this is not

- A product manual for any single AI company.
- A breathless account of what AI will do to the humanities.
- A comprehensive technical reference.
- Neutral. The guide has opinions. They are marked as such.

## Structure

Built with [MkDocs Material](https://squidfunk.github.io/mkdocs-material/).
Source files are in `docs/`. Configuration is in `mkdocs.yml`.

## Contributing

Contributions are welcome, especially:

- Corrections to factual claims (with sources).
- Platform updates when features change.
- Worked examples from humanities disciplines not yet represented.
- Accessibility improvements.
- Translations.

To contribute: fork the repository, make changes on a branch,
and open a pull request. For larger changes, open an issue first
to discuss scope.

## Author

[Leif Isaksen](https://humanities.exeter.ac.uk/staff/isaksen),
Professor and Director of Digital Humanities, University of Exeter.

## Licence

Content: [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/).
Code: [MIT](https://opensource.org/licenses/MIT).
```

---

## Task 3: Move GitHub link from header to footer

### What to change

In `mkdocs.yml`:

**Remove** (or comment out) the top-level `repo_url` and `repo_name` settings. These are what place the GitHub icon/link in the header bar.

```yaml
# Remove or comment out:
# repo_url: https://github.com/leifuss/hhg2ai
# repo_name: leifuss/hhg2ai
```

**Add** the GitHub link as a footer element using MkDocs Material's `extra` configuration:

```yaml
extra:
  social:
    - icon: fontawesome/brands/github
      link: https://github.com/leifuss/hhg2ai
      name: Contribute on GitHub
```

This places the GitHub link in the footer social icons area. MkDocs Material renders these as small icons in the footer.

### Alternative: custom footer override

If more control is needed (e.g., to add "Contribute on GitHub" as text alongside the icon, or to place it near the existing copyright/licence line), create a partial override:

1. Create `overrides/partials/footer.html` (or extend the existing one if it exists).
2. Add the GitHub link in the desired position.
3. Ensure `custom_dir: overrides` is set in `mkdocs.yml` under `theme`.

The simpler `extra.social` approach is probably sufficient. Only use the override if the social icon placement doesn't feel right.

---

## Implementation order

1. Create `docs/platforms/index.md` (How to Choose).
2. Create `docs/platforms/copilot-placeholder.md`.
3. Update `mkdocs.yml` nav to new Platforms grouping.
4. Update cross-references in Primer, Essentials, and landing page.
5. Move GitHub link from header to footer in `mkdocs.yml`.
6. Replace `README.md`.
7. Build and verify locally (`mkdocs serve`).

Tasks 1–3 should be done together (the nav won't resolve until the files exist). Task 4 is a sweep across existing files. Tasks 5–6 are independent.

---

## Notes for the implementer

- The existing `docs/claude/` and `docs/chatgpt/` directories do NOT need to move. MkDocs nav entries can reference files at any path regardless of the nav hierarchy.
- If any existing pages have relative links to `../claude/` or similar, these will still work because the files haven't moved. However, verify after building.
- The Platforms landing page (How to Choose) should be the page users see when they click "Platforms" in the top nav. In MkDocs Material, this is achieved by making it the first item in the nav group with the path `platforms/index.md`.
- British English throughout all new content.
