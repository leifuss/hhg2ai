# Technical Content Markers: Implementation Brief

*For Claude Code. March 2026.*

---

## Purpose

Add a custom admonition type to the site that marks sections involving technical setup, terminology, or skills (terminal use, coding, configuration). The marker should be **inviting, not gatekeeping** — it tells non-technical readers "you can skip this safely" while telling technically curious readers "here's where it gets interesting."

The design principle: the absence of a marker is the default. Most content is for everyone. The marker appears only where a page dips into technical territory within an otherwise general-audience context.

---

## 1. Custom admonition type

### Name and icon

- **Type name:** `deeper`
- **Title (default):** "Going Deeper"
- **Icon:** wrench/spanner (`fontawesome/solid/wrench`) or cog (`fontawesome/solid/gear`). Not a warning triangle, not a stop sign, not a lock.

### Why "deeper" rather than "technical"

"Technical" sounds like a gate. "Going Deeper" sounds like an invitation. It also covers cases that aren't strictly technical but are more advanced — e.g., a discussion of model architecture, or a comparison of API pricing tiers — without stretching the label.

---

## 2. MkDocs Material configuration

### In `mkdocs.yml`

Ensure custom admonitions are enabled (they should be already if you're using Material). No special plugin is needed — Material supports custom admonition types via CSS.

```yaml
markdown_extensions:
  - admonition
  - pymdownx.details      # for collapsible admonitions
  - pymdownx.superfences
```

### Custom CSS

Create or extend `docs/stylesheets/extra.css` (and ensure it's referenced in `mkdocs.yml` under `extra_css`).

```css
/* "Going Deeper" admonition — technical/optional content */

/* Expanded (default) style */
.md-typeset .admonition.deeper,
.md-typeset details.deeper {
  border-color: #6d7f8b;
}

.md-typeset .deeper > .admonition-title,
.md-typeset .deeper > summary {
  background-color: rgba(109, 127, 139, 0.1);
}

.md-typeset .deeper > .admonition-title::before,
.md-typeset .deeper > summary::before {
  -webkit-mask-image: var(--md-admonition-icon--deeper);
          mask-image: var(--md-admonition-icon--deeper);
}

:root {
  /* Font Awesome wrench icon */
  --md-admonition-icon--deeper: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M352 320c88.4 0 160-71.6 160-160c0-15.3-2.2-30.1-6.2-44.2c-3.1-10.8-16.4-13.2-24.3-5.3l-76.8 76.8c-3 3-7.1 4.7-11.3 4.7H336c-8.8 0-16-7.2-16-16V118.6c0-4.2 1.7-8.3 4.7-11.3l76.8-76.8c7.9-7.9 5.4-21.2-5.3-24.3C382.1 2.2 367.3 0 352 0C263.6 0 192 71.6 192 160c0 19.1 3.4 37.5 9.5 54.5L19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9l181.6-181.6c17 6.2 35.4 9.5 54.5 9.5zM80 456c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24z"/></svg>');
}
```

**Colour rationale:** The muted blue-grey (`#6d7f8b`) is deliberately neutral — it doesn't compete with the existing blue (info), green (tip), amber (warning), or red (danger) admonitions. It reads as "aside" rather than "alert."

In `mkdocs.yml`, ensure the stylesheet is loaded:

```yaml
extra_css:
  - stylesheets/extra.css
```

---

## 3. Usage syntax

### Standard (always visible)

```markdown
!!! deeper "Terminal skills ahead"
    This section introduces command-line tools. You don't need
    this for everyday use — skip it now and come back when you
    have a specific need.
```

### Collapsible (closed by default)

For longer technical digressions that would otherwise break the flow of a page. The reader sees just the title bar; clicking expands it.

```markdown
??? deeper "How context windows actually work"
    Tokens are not words. A token is roughly three-quarters of
    a word in English, though this varies by language and model...
    [longer technical explanation]
```

### With default title

If no custom title is given, it displays "Going Deeper":

```markdown
!!! deeper
    This section assumes basic familiarity with the terminal...
```

---

## 4. Introductory explanation for readers

Add a short note to the site's landing page (`docs/index.md`) or to the Primer's opening page, wherever new readers are most likely to encounter it first. Something like:

```markdown
!!! deeper "About these boxes"
    Throughout this guide, sections marked with a 🔧 wrench
    icon involve technical setup, tools, or terminology that
    not everyone will need. They are always optional. Nothing
    elsewhere on the page depends on them. Skip them now;
    come back when you have a reason to.
```

This self-referential first appearance teaches the convention by example. After this, the boxes can appear without further meta-explanation.

---

## 5. Where to apply

### General principles

- **Apply at the section level within pages**, not at the page level. Page-level audience is already handled by the site structure (e.g., Chat vs Code pages).
- **Use when technical content appears inside an otherwise non-technical page.** The Chat guide discussing API differences, the "How to Choose" page defining context windows, a workflow example that mentions terminal commands — these are the moments.
- **Don't overuse.** If a page is *entirely* technical (e.g., the Code guide, Prerequisites, Environments), don't mark every section. The page itself is the signal. The marker is for mixed-audience pages where a technical section might cause anxiety.
- **The collapsible variant (`???`)** is best for extended technical detail that supports but isn't essential to the surrounding argument — e.g., a paragraph explaining how tokenisation works inside a page about prompting.
- **The standard variant (`!!!`)** is best for short flagging — a sentence or two that says "this part assumes X, skip if you don't have X."

### Specific application

Because the Platform content is still being written and edited, do not attempt a comprehensive pass over all existing pages at this stage. Instead:

1. **Add the self-referential introductory box** to the landing page or Primer opening.
2. **Apply to the "How to Choose" page** (`platforms/index.md`): the terminology definitions section (frontier models, hyperscalers, open weights, parameters, context window) should probably NOT be marked — those terms are essential for everyone. But if any subsection of that page dips into technical specifics (e.g., hardware requirements for running local models), mark it.
3. **Apply to the Claude section's index page**, which already has prose doing this job ("you can safely ignore Code, Cowork, hooks, MCP…"). Replace or supplement that prose with the admonition box for consistency.
4. **Leave detailed application across all Platform pages** until the content stabilises. A sweep can be done as a final polish pass.

---

## 6. What NOT to do

- **Don't create a second marker type for intermediate content.** Two levels (unmarked = everyone, deeper = technical) is enough. Three levels creates a curriculum, which is the wrong metaphor.
- **Don't put the marker in the nav or page metadata.** It's a within-page device, not a site-architecture device.
- **Don't use red, amber, or warning-associated colours.** The whole point is that this content is *available*, not *dangerous*.
- **Don't mark content that's simply unfamiliar.** New concepts that every reader needs (what is a prompt, what is a model) are not "deeper" — they're core. The marker is for content that requires *skills or setup* the reader may not have, not content that requires *learning* the reader hasn't done yet.

---

## Implementation order

1. Create `docs/stylesheets/extra.css` (or extend if it exists) with the custom admonition CSS.
2. Update `mkdocs.yml` to reference the stylesheet and ensure admonition extensions are enabled.
3. Add the self-referential introductory box to the landing page or Primer.
4. Apply to the "How to Choose" page and the Claude index page as described above.
5. Build and verify locally (`mkdocs serve`) — check that the admonition renders correctly in both expanded and collapsible forms.
6. Defer comprehensive application across all pages until Platform content is stable.
