# Quick Fixes: Implementation Brief

*For Claude Code. March 2026. Items that can be done in one pass.*

---

## 1. Author → Editor

### What

Throughout the site, change references to Leif Isaksen as "author" to "editor." This applies to:

- The footer (if it says "Leif Isaksen" with an implied author role)
- The About page
- Any page that references "the author" in running text
- The README.md

**Do not change:** the CC BY-NC-SA licence attribution line — that can stay as-is, since "Leif Isaksen" is the rights holder regardless of title.

In `docs/about/` and `docs/index.md` (or wherever the role is stated), use "editor" explicitly. In running text throughout the site, replace "the author" with "the editor" where it refers to Leif. "Leif's Notes" boxes remain as-is — they're already personalised.

---

## 2. AI disclosure and H2G2 quote

### What

Add an explicit disclosure that the guide is written and updated with the assistance of large language models and may contain errors. Place this in two locations:

**A. Landing page (`docs/index.md`)** — add an admonition near the top, after the welcome section:

```markdown
!!! quote "On the subject of accuracy"
    In many of the more relaxed civilizations on the Outer
    Eastern Rim of the Galaxy, the Hitch-Hiker's Guide has
    already supplanted the great Encyclopaedia Galactica as
    the standard repository of all knowledge and wisdom, for
    though it has many omissions and contains much that is
    apocrypulous, or at least wildly inaccurate, it scores over
    the older, more pedestrian work in two important respects.
    First, it is slightly cheaper; and secondly it has the words
    DON'T PANIC inscribed in large friendly letters on its cover.

    *— Douglas Adams, The Hitchhiker's Guide to the Galaxy*

    This guide is written and updated with the assistance of
    large language models. It may contain errors. If you spot
    one, please [suggest an improvement](#) — the link is at
    the top of every page.
```

(Fix the "#" link to point to the GitHub repo's issues page or the edit URL pattern.)

**B. About page (`docs/about/`)** — add a section on methodology:

```markdown
## How this guide is made

This guide is written and edited by Leif Isaksen with
extensive use of large language models, primarily Anthropic's
Claude. Drafts, structural outlines, fact-checking, and prose
are produced collaboratively between human editorial judgement
and AI assistance. All content is reviewed by the editor, but
errors will inevitably remain. The guide is open source
precisely so that readers can help correct them.
```

---

## 3. Rename "Bootcamp"

### What

The military metaphor doesn't fit a travel-guide-themed resource. Rename to **"Basecamp"** — it keeps the camp/expedition metaphor, suggests a starting point for a journey, and is warmer than "Bootcamp."

Alternative if you prefer something else: "Trailhead" (very outdoorsy), "Waystation" (more H2G2), or "Workshop" (plain but clear). I'd go with Basecamp.

### Implementation

1. In `mkdocs.yml`, change the nav label from `Bootcamp` to `Basecamp`.
2. Rename the directory: `docs/bootcamp/` → `docs/basecamp/`. (Or keep the directory name and just change the nav label — less disruptive if there are internal links.)
3. Find-and-replace "Bootcamp" → "Basecamp" across all `.md` files (there will be cross-references in the Primer, Essentials, landing page, how-to-use page, etc.).
4. Update the README.md.
5. If the directory is renamed, update all internal links. If only the nav label changes, this isn't needed.

**Recommendation:** Change both the nav label and the directory name for consistency. Claude Code can handle the find-and-replace across files.

---

## 4. Travel guide metaphor in welcome / how-to-use

### What

In `docs/how-to-use.md` (or the landing page welcome section), add a paragraph that explicitly frames the guide as a travel guide. Something like:

```markdown
Think of this guide the way you would a travel guide. You
would not read a Lonely Planet cover to cover before booking
a flight. You would flip to the destination that interests
you, skim the practical advice, and ignore the rest until
you needed it. This guide works the same way. There is no
need to see and do everything. It is here to help you on
*your* journey, not to prescribe one.
```

Place this early — either as part of the welcome section on the landing page, or at the top of the how-to-use page. It reinforces the H2G2 framing while setting expectations.

---

## 5. Move discipline-specific publications to pathway pages

### What

The Resources section currently contains discipline-specific publication lists. These should move to (or be referenced from) the relevant Field Guides pathway pages.

### Implementation

1. Identify the discipline-specific publications in `docs/resources/`.
2. For each, add the references to the "Further reading" or end section of the relevant pathway page (e.g., classics publications → `docs/field-guides/pathways/classics.md`).
3. Remove the discipline-specific entries from the Resources page, or replace them with a cross-reference: "For discipline-specific readings, see the [Field Guides pathway pages](../field-guides/)."
4. Keep genuinely cross-cutting resources (general AI ethics readings, tool comparison sites, etc.) in Resources.

---

## 6. LLM focus acknowledgement

### What

Add a note — probably in the Primer, the "How to use this guide" page, or both — acknowledging that this guide focuses on large language models and their consumer interfaces, and that other AI technologies (machine learning, computer vision, semantic technologies, knowledge graphs, etc.) exist and matter for humanities research but are not covered here.

### Text

```markdown
!!! info "What this guide covers — and what it doesn't"
    This guide focuses on large language models (LLMs) and
    the consumer AI platforms built around them — tools like
    Claude, ChatGPT, and Gemini that you interact with through
    conversation. These are the AI tools that most humanities
    researchers are encountering first, and the ones that raise
    the most immediate questions about method, ethics, and
    everyday use.

    Other AI technologies — machine learning for classification
    and prediction, computer vision, semantic web technologies,
    knowledge graphs, natural language processing pipelines —
    are important for digital humanities but are not covered
    here. For a broader view of AI methods in the humanities,
    see [The Turing Way](https://book.the-turing-way.org/) and
    the [AI4LAM resources](https://ai4lam.github.io/).
```

(Verify those external links are current and appropriate. Substitute if better resources exist.)

### Placement

Add to the Primer's opening page and to `docs/how-to-use.md`. On the Primer page it sets the scope; on the how-to-use page it manages expectations for the whole site.

---

## Implementation order

1. Author → editor (find-replace across site)
2. AI disclosure + H2G2 quote (landing page + about page)
3. Bootcamp → Basecamp (nav + directory + find-replace)
4. Travel guide paragraph (how-to-use page and/or landing page)
5. Move discipline publications to pathway pages
6. LLM focus acknowledgement (Primer + how-to-use)
7. Build and verify

---
---

# Deferred Items: Brief for Later This Week

*Items that need debugging, content creation, or more structural thought.*

---

## A. Fix "suggest an improvement" / edit links (debugging)

### Problem

The edit links are still not appearing despite the previous brief's instructions. Possible causes:

1. `repo_url` was not restored to `mkdocs.yml`.
2. `repo_url` was restored but `edit_uri` is missing or wrong.
3. The `content.action.edit` feature is not listed under `theme.features`.
4. The CSS hiding the header icon (`.md-header__source { display: none; }`) may be targeting the wrong class in the current Material version, accidentally hiding the edit button too.
5. The template override for `actions.html` may be malformed.

### Debugging steps for Claude Code

1. **Check `mkdocs.yml`** — confirm these are all present:
   ```yaml
   repo_url: https://github.com/leifuss/hhg2ai
   edit_uri: edit/main/docs/
   theme:
     features:
       - content.action.edit
   ```
   The branch in `edit_uri` must match the actual default branch (could be `main` or `master`).

2. **Check CSS** — inspect `docs/stylesheets/extra.css` for any rule that hides `.md-content__button` or `.md-icon` broadly. The intended rule should ONLY hide `.md-header__source` (the header repo icon), not the edit button. The edit button's class is `.md-content__button`.

3. **Check for template overrides** — if `overrides/partials/actions.html` exists, check it renders correctly. A malformed override will suppress the edit button entirely. If in doubt, delete the override and let Material use its default `actions.html`.

4. **Build locally and inspect** — run `mkdocs serve`, open any page, inspect the HTML near the top of the content area. Look for an `<a>` tag with class `md-content__button` and an `href` pointing to GitHub. If it's missing from the HTML entirely, the problem is in config. If it's present but invisible, the problem is CSS.

5. **Test without CSS override** — temporarily comment out the `.md-header__source { display: none; }` rule and rebuild. If the edit button appears (along with the header icon), the CSS is too aggressive. Narrow the selector.

### Expected result

A pencil icon at the top-right of each page's content area, linking to `https://github.com/leifuss/hhg2ai/edit/main/docs/[path-to-page]`.

---

## B. Sidebar platform icons (fix scope)

### Problem

Platform icons are appearing next to every sub-page link in the left nav, not just the top-level platform entries.

### Fix

The CSS selectors from the earlier brief are too broad. They match any nav link whose `href` contains `claude/`, which includes `claude/chat/`, `claude/code/`, etc.

Claude Code should:

1. Build the site and inspect the rendered nav HTML.
2. Identify the structural difference between the top-level section link (e.g., "Claude" as a section header) and the sub-page links (e.g., "Chat," "Code").
3. Narrow the CSS selectors. Material typically renders section headers as `.md-nav__item--nested > .md-nav__link` or similar. The selector should target only the section-level link, not its children.
4. If structural targeting is too fragile, consider an alternative: remove the CSS pseudo-element approach entirely and instead just use the 40px logos on the platform index pages. The page-level logos may be sufficient wayfinding without also cluttering the nav.

### Fallback

If clean CSS scoping proves too brittle, remove the nav icons. The page-level logos (which are working) do the primary job. Nav icons are a nice-to-have, not essential.

---

## C. Move agentic AI and ancient languages out of Primer

### Ancient languages

Move to the Field Guides section. The content should become either:
- Part of `docs/field-guides/translation.md` (the Translation & Language activity page), or
- A standalone activity page `docs/field-guides/ancient-languages.md` if the content is substantial enough to warrant its own page.

Check the existing content's scope. If it covers translation, grammar checking, lexical work, and working with fragmentary texts, it maps well to the translation activity page. If it also covers things like OCR of inscriptions or palaeographic description, some content might split across translation and images-objects pages.

Update the Primer nav to remove the ancient languages entry. Add a cross-reference from the Primer to the Field Guides: "For discipline-specific guidance, including working with ancient languages, see the [Field Guides](../field-guides/)."

### Agentic AI

This is trickier. Agentic AI is a conceptual topic (what are agents, what can they do, what are the risks) rather than a discipline-specific activity. It doesn't belong in Field Guides.

Options:
- **Move to Essentials.** It fits alongside Multi-Model Strategy and Decision Sheet as a "cross-cutting concept you need to understand." Frame it as: "what agentic capabilities are, when they're useful, and what the risks are."
- **Move to the Primer.** If the content is introductory enough, it could stay in the Primer but repositioned as a concept page ("What are AI agents?") rather than a field guide.
- **Move to a new "Concepts" subsection of the Primer.** If you add "Brief history of AI" and "How LLMs work" (item D below), agentic AI fits naturally alongside them as a conceptual foundation page.

**Recommendation:** If you're adding the two new Primer concept pages (item D), create a "Key Concepts" subsection of the Primer and put agentic AI there alongside the history and LLM-mechanics pages. If you're not adding those pages, move agentic AI to Essentials.

---

## D. New Primer pages: "A brief history of (modern) AI" and "How LLMs work"

### Assessment

Both are good ideas. The Primer currently assumes readers will pick up these concepts as they go. Explicit, short pages would give readers who want conceptual grounding a place to get it without slowing down readers who don't.

### Scope

**Brief history of AI:** Not a comprehensive history — a two-page narrative covering the key moments a humanities scholar needs to contextualise the current landscape. Something like: symbolic AI and expert systems (1950s–80s), the AI winters, the machine learning turn (1990s–2010s), deep learning and neural networks (2012–), the transformer architecture and GPT (2017–), the ChatGPT moment (November 2022), and the current frontier model race. Frame it as: "how we got here, in under ten minutes."

**How LLMs work:** Not a technical deep-dive — a mental-model page. What is a model, what are parameters, what is training data, what is a context window, what is a token, what is inference, why do models hallucinate. Frame it as: "the minimum you need to understand to use these tools critically." Use analogies, not equations. This is the page you'd want a colleague to read before their first serious use.

Both pages should use the `??? deeper` collapsible admonition for any technical detail beyond the essential mental model.

### Structure

If both pages are created, add a "Key Concepts" subsection to the Primer nav:

```yaml
- The Primer:
  - guide/index.md
  - Briefing: guide/briefing.md
  - Getting Started: guide/getting-started.md
  - Mindset: guide/mindset.md
  - Key Concepts:
    - A Brief History of AI: guide/history.md
    - How LLMs Work: guide/how-llms-work.md
    - Agentic AI: guide/agentic.md
  - Use Cases: guide/use-cases.md
  - FAQ: guide/faq.md
```

### Content creation

These pages need original writing. They should be written with the site's voice: matter-of-fact, British English, opinionated where appropriate, with Leif's Notes boxes for editorial perspective. Mark them with "*March 2026*" dates.

Given the scope, each page is probably 800–1200 words. Claude Code can draft them, but Leif should review closely — the "Brief history" page in particular involves editorial choices about what to include and how to frame it (e.g., the ethics of training data, the corporate consolidation narrative, etc.).

---

## Priority order for deferred items

1. **A (edit links)** — this is a bug that affects every page. Debug and fix first.
2. **B (sidebar icons)** — CSS scoping fix, or fall back to removing nav icons.
3. **C (move agentic AI + ancient languages)** — structural cleanup, depends partly on whether D happens.
4. **D (new Primer pages)** — content creation, worth doing but not urgent. Can be stubs initially.
