# Welcome Page, Edit Links, and Section Wayfinding: Implementation Brief

*For Claude Code. March 2026.*

---

## 4. Welcome statement and "How to use this guide"

### Problem

The site has grown significantly. A newcomer landing on the home page faces five major sections and no clear orientation. The landing page needs a warm welcome and a brief mental model of the site structure.

### Approach

Two things: a short welcome section on the landing page itself, and a separate "How to use this guide" page for fuller orientation. The landing page links to it but doesn't force it.

### Landing page welcome section

Add to `docs/index.md`, at the very top of the content (after the H1, before any existing cards or navigation):

```markdown
## Welcome

This is a practical guide to using AI tools in humanities
research, teaching, and administration. It is written for
scholars who want to use these tools well — not just use them.

You do not need to read this guide from start to finish.
Most people start with one of the [platform guides](platforms/)
and go from there. If you are entirely new to AI tools, the
[Primer](guide/) will give you the foundation. If you already
know the basics and want to work well, the
[Essentials](essentials/) apply across all platforms.

For a fuller overview of how the guide is organised and
suggested reading paths, see
[How to use this guide](how-to-use.md).
```

Keep this to 3–4 short paragraphs. Warm, direct, not salesy. It should feel like a colleague saying "here, start here."

### "How to use this guide" page

Create `docs/how-to-use.md`. This is a separate page, linked from the landing page welcome section. It should NOT be a top-level nav item — it's an onboarding resource, not a major section.

Add it to the nav either as a child of "Home" or outside the main sections:

```yaml
nav:
  - Home: index.md
  - How to Use This Guide: how-to-use.md
  - The Primer: ...
```

Or, if you prefer it not to appear in the main nav at all, omit it from `mkdocs.yml` nav and rely on the direct link from the landing page. MkDocs will still build it; it just won't appear in the sidebar. Either approach is fine — the nav entry is probably more discoverable.

#### Content structure for `how-to-use.md`

```markdown
# How to Use This Guide

This guide is organised into five main sections. You do not
need to read them in order, and you certainly do not need to
read them all. Here is how they fit together and where to
start depending on what you need.

## The sections

**[The Primer](guide/)** is for readers who are new to AI tools
altogether. It covers what these tools are, how they work at
a high level, and how to think about them critically. Start
here if you have not yet had a sustained conversation with
an AI assistant.

**[Essentials](essentials/)** covers the practices that apply
regardless of which platform you use: verification, prompting,
data governance, disclosure, and cost awareness. Skim these
before doing serious work. Return to them when something goes
wrong.

**[Field Guides](field-guides/)** are organised by scholarly
activity — translation, close reading, archival research,
spatial analysis, and so on. Each guide covers where AI tools
help, where they mislead, and what to watch out for. Start
from your discipline's [pathway page](field-guides/) to find
the most relevant activities.

**[Platform Guides](platforms/)** cover individual AI platforms
in detail: Claude, ChatGPT, Gemini, and others. Each guide
is self-contained. If you already know which platform you want
to use, go directly to its guide. If you are unsure,
[How to Choose](platforms/) will help.

**[Bootcamp](bootcamp/)** contains structured training materials
for workshops and self-directed learning.

## Suggested reading paths

**"I have never used an AI tool."**
Start with the [Primer](guide/). Then try a free tier of any
platform — the [Platform Guides](platforms/) landing page can
help you choose. Come back to the [Essentials](essentials/)
before using AI output in your work.

**"I have used ChatGPT / Claude / Gemini casually and want
to use it better."**
Read the [Essentials](essentials/), especially
[Verification](essentials/verification/) and
[Prompting](essentials/prompting/). Then find your task in
the [Field Guides](field-guides/).

**"I am technically confident and want to build things."**
Go directly to the platform guide for your tool of choice.
The Code and Developer Tools sections of each platform guide
are where to start. The [Prerequisites](claude/prerequisites/)
page in the Claude section covers foundational technical skills.

**"I need to advise my department or institution."**
Read [Data Governance](essentials/data-governance/),
[Disclosure & Ethics](essentials/disclosure/), and
[Cost & Plans](essentials/cost/). The privacy sections of
each platform guide cover governance differences in detail.

## Conventions used in this guide

Throughout the guide, you will encounter several types of
highlighted box:

- **Don't Panic** boxes offer reassurance at moments where
  the material might feel overwhelming.
- **Essential** boxes flag content that most readers should
  not skip.
- **Leif's Notes** boxes contain the author's editorial
  judgements — opinions, not reference material.
- **Going Deeper** boxes (marked with a 🔧 wrench) flag
  sections involving technical setup or terminology. These
  are always optional. Nothing elsewhere on the page depends
  on them.
- **Draft** boxes indicate pages where content is still being
  written.

Pages are dated. If a page says *March 2026* and you are
reading it much later, check the platform's own documentation
for current details — features and pricing change frequently.
```

---

## 5. Restore "suggest an improvement" / edit links

### Problem

The per-page "edit this page" pencil icon (linking to the source file on GitHub) was lost when `repo_url` was removed from `mkdocs.yml` to move the GitHub link out of the header.

### Root cause

In MkDocs Material, `repo_url` powers three things:
1. The repository icon/link in the header
2. The per-page edit link (pencil icon at top of content)
3. The `page.edit_url` variable used in templates

Removing `repo_url` disabled all three. We want to keep #2 and #3 while removing #1.

### Fix

**Step 1:** Restore `repo_url` and `edit_uri` in `mkdocs.yml`:

```yaml
repo_url: https://github.com/leifuss/hhg2ai
edit_uri: edit/main/docs/
```

(Adjust `main` to whatever the default branch is — it might be `master`.)

This re-enables the edit link functionality.

**Step 2:** Ensure the `content.action.edit` feature is enabled:

```yaml
theme:
  name: material
  features:
    - content.action.edit
```

This shows the pencil icon at the top of each page, linking to the GitHub source.

**Step 3:** Hide the header repository icon with CSS. Add to `docs/stylesheets/extra.css`:

```css
/* Hide the repo link in the header — we have it in the footer instead */
.md-header__source {
  display: none;
}
```

This keeps `repo_url` functional for edit links while removing the header icon. The footer GitHub link (via `extra.social`) remains.

**Step 4:** Optionally, change the edit link text/tooltip. By default Material shows a pencil icon with "Edit this page." If you want it to say "Suggest an improvement" instead, override the `actions.html` partial:

Create `overrides/partials/actions.html`:

```html
{% if page.edit_url %}
  <a href="{{ page.edit_url }}" title="Suggest an improvement for this page" class="md-content__button md-icon">
    {% include ".icons/material/pencil.svg" %}
  </a>
{% endif %}
```

This is optional — the default "Edit this page" is fine. But "Suggest an improvement" is more inviting for non-technical readers who might not think of themselves as "editing."

---

## 6. Section colour wayfinding

### Problem

With five major sections, readers can lose track of where they are, especially when deep in subsections. The site needs subtle visual cues that distinguish sections without making it look like a children's textbook.

### Approach

A thin coloured accent bar at the top of the content area, varying by section. This is lightweight, maintainable, and works alongside the existing neutral theme without fighting it.

### Colour palette

Five sections, five colours. Keep them muted — these are wayfinding accents, not branding:

| Section | Colour | Hex | CSS variable |
|---|---|---|---|
| Primer | Warm grey-blue | `#7b8fa2` | `--section-color-primer` |
| Essentials | Muted teal | `#5a9e8f` | `--section-color-essentials` |
| Field Guides | Warm amber | `#b8914a` | `--section-color-field-guides` |
| Platform Guides | Muted indigo | `#7678a8` | `--section-color-platforms` |
| Bootcamp | Muted terracotta | `#a87066` | `--section-color-bootcamp` |

These are deliberately unsaturated. They should feel like tinted paper, not traffic signals.

### Implementation

**Step 1: Page metadata.**

Add a custom `section` metadata key to each page's frontmatter. For example, in every page under `docs/guide/`:

```yaml
---
section: primer
---
```

And in every page under `docs/essentials/`:

```yaml
---
section: essentials
---
```

And so on for `field-guides`, `platforms`, `bootcamp`.

This is a manual step for existing pages. For new pages, include it in the template/convention.

**Alternative — URL-based targeting:** Instead of frontmatter, target sections by URL path in CSS. This avoids touching every file but is less explicit:

```css
/* Target by URL path — works if file structure matches sections */
[data-md-url*="/guide/"] .md-content { ... }
[data-md-url*="/essentials/"] .md-content { ... }
```

However, Material may not expose the URL in a data attribute on the right element. Check the rendered HTML. If it does, this is simpler. If not, use the frontmatter approach.

**Step 2: CSS.**

Using the frontmatter approach, Material exposes page metadata as data attributes. However, custom frontmatter keys are NOT automatically exposed as HTML attributes in Material — only specific keys like `status` and `icon` are.

**Most reliable approach: body class via template override.**

Create or extend `overrides/main.html`:

```html
{% extends "base.html" %}

{% block content %}
  {% if page.meta.section %}
    <div class="section-{{ page.meta.section }}">
      {{ super() }}
    </div>
  {% else %}
    {{ super() }}
  {% endif %}
{% endblock %}
```

Then in `docs/stylesheets/extra.css`:

```css
/* Section colour variables */
:root {
  --section-color-primer: #7b8fa2;
  --section-color-essentials: #5a9e8f;
  --section-color-field-guides: #b8914a;
  --section-color-platforms: #7678a8;
  --section-color-bootcamp: #a87066;
}

/* Section accent — top border on content area */
.section-primer .md-content {
  border-top: 3px solid var(--section-color-primer);
}
.section-essentials .md-content {
  border-top: 3px solid var(--section-color-essentials);
}
.section-field-guides .md-content {
  border-top: 3px solid var(--section-color-field-guides);
}
.section-platforms .md-content {
  border-top: 3px solid var(--section-color-platforms);
}
.section-bootcamp .md-content {
  border-top: 3px solid var(--section-color-bootcamp);
}
```

**3px** is enough to register without being heavy. If it feels too subtle after building, increase to 4px. Do not exceed 5px.

**Step 3: Optional — section label.**

For additional wayfinding, add a small section label above the page title, using the same colour. This requires extending the content template:

In the same `overrides/main.html` (or a content partial):

```html
{% if page.meta.section %}
  <div class="section-label section-label--{{ page.meta.section }}">
    {% if page.meta.section == "primer" %}The Primer
    {% elif page.meta.section == "essentials" %}Essentials
    {% elif page.meta.section == "field-guides" %}Field Guides
    {% elif page.meta.section == "platforms" %}Platform Guides
    {% elif page.meta.section == "bootcamp" %}Bootcamp
    {% endif %}
  </div>
{% endif %}
```

```css
.section-label {
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 0.2rem 0;
  margin-bottom: 0;
}

.section-label--primer { color: var(--section-color-primer); }
.section-label--essentials { color: var(--section-color-essentials); }
.section-label--field-guides { color: var(--section-color-field-guides); }
.section-label--platforms { color: var(--section-color-platforms); }
.section-label--bootcamp { color: var(--section-color-bootcamp); }
```

This shows, for example, "PLATFORM GUIDES" in muted indigo above the page title on every page in that section. Combined with the top border, it gives readers two redundant cues about where they are.

**This step is optional.** Implement the border first, build, and judge whether the label adds value or clutter. It can be added later.

### What NOT to do

- **Do not change the overall theme colour per section.** Switching Material's `primary` or `accent` colour per section would affect buttons, links, headers, and admonitions throughout the page. That's too much visual disruption and makes the site feel inconsistent rather than well-signposted.
- **Do not add hero images per section.** These are slow to load, hard to choose well, and add visual weight without informational value. The coloured accent bar carries the wayfinding signal with near-zero overhead.
- **Do not use more than five colours.** Subsections (individual platform guides, individual field guide activities) should inherit their parent section's colour, not get their own. The Claude guide is "Platform Guides indigo," not "Claude orange."

---

## Implementation order

1. Add welcome section to `docs/index.md`.
2. Create `docs/how-to-use.md` and add to nav.
3. Restore `repo_url` and `edit_uri` in `mkdocs.yml`.
4. Add `content.action.edit` to theme features.
5. Hide header repo icon via CSS.
6. Optionally override `actions.html` for "Suggest an improvement" text.
7. Add `section` frontmatter to all existing pages (batch operation — grep for all `.md` files under each section directory).
8. Create `overrides/main.html` with section wrapper.
9. Add section colour CSS to `extra.css`.
10. Build and verify (`mkdocs serve`). Check: edit links work, header repo icon is hidden, footer GitHub link still works, section colours appear correctly, welcome section reads well.
11. Optionally add section label (step 3 above) after reviewing the border-only version.

---

## Notes

- The section frontmatter (`section: primer` etc.) needs to be added to every existing page. This is tedious but mechanical — a script or Claude Code can batch it by directory. Pages in `docs/guide/` get `section: primer`, pages in `docs/essentials/` get `section: essentials`, etc.
- The landing page (`docs/index.md`), about page, glossary, and `how-to-use.md` should NOT get a section colour. They are site-level pages, not section pages. Omit the `section` frontmatter from these files.
- Test the colour palette in both light and dark mode if the site supports dark mode. The muted palette should work in both, but verify.
