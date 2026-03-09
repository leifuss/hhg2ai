# UI Tweaks: Draft Markers, Logo Sizing, and TOC Title

*For Claude Code. March 2026.*

---

## 1. Mark draft/pending field guides in navigation

### Problem

Readers click through to stub activity pages and only discover they're drafts after the page loads. The nav should signal this upfront.

### Approach

MkDocs Material doesn't natively support italic nav entries or badge labels in the sidebar. There are two realistic options:

#### Option A: Append "(coming soon)" to the nav title

In `mkdocs.yml`, simply change the nav labels for stub pages:

```yaml
- Activities:
  - Translation & Language: field-guides/translation.md
  - Close Reading (coming soon): field-guides/close-reading.md
  - Images & Objects (coming soon): field-guides/images-objects.md
  - Archives & Manuscripts (coming soon): field-guides/archives.md
  # etc.
```

**Pros:** Dead simple, immediately clear, no CSS needed.
**Cons:** Slightly verbose. You need to remember to remove "(coming soon)" when the page is complete.

#### Option B: CSS-based styling using page metadata

Add a CSS class to draft pages via their frontmatter, then style the nav entry.

In each draft page's frontmatter:

```yaml
---
status: draft
---
```

In `docs/stylesheets/extra.css`, target the nav link text. Unfortunately, MkDocs Material does not propagate page metadata to the nav sidebar as CSS classes, so pure-CSS targeting of specific nav entries by page status is not straightforward.

**Workaround:** Use a `page.meta.status` check in a nav override template. Create `overrides/partials/nav-item.html` (extending Material's default) to add a class or suffix when the page has `status: draft`. This is more complex and fragile across theme updates.

#### Recommendation

**Use Option A.** It's robust, obvious, and requires no custom templating. When a page is complete, remove the "(coming soon)" suffix. The slight verbosity in the nav is a feature — it sets expectations correctly.

Additionally, on the Field Guides landing page (`index.md`), style the table of activity guides to visually distinguish complete from draft entries. In the markdown table, append "*(coming soon)*" in italics to draft entries:

```markdown
| Activity | Typical disciplines |
|---|---|
| [Translation & Language](translation.md) | Classics, Theology, Languages, Medieval Studies |
| [Close Reading & Textual Analysis](close-reading.md) *(coming soon)* | Literature, Philosophy, Theology, Classics |
| [Images, Objects & Visual Evidence](images-objects.md) *(coming soon)* | Archaeology, Art History, Classics |
```

This gives italics in the body content (where markdown supports it) and plain text markers in the nav (where it doesn't).

---

## 2. Platform logos: sizing and nav icons

### Page logos

The current 28px height is too small. Increase to **40px**:

```css
.platform-logo {
  height: 40px;
  width: auto;
  margin-bottom: 0.5rem;
}
```

40px is large enough to register as a visual anchor but not so large that it dominates the heading. If this still feels small after building, 48px is the ceiling. Do not exceed 48px.

### Nav icons (left sidebar)

MkDocs Material supports icons next to nav entries using the `icon` property in page frontmatter — but only for Material's built-in icon sets, not custom images. For custom SVG logos in the nav, you need CSS.

#### Approach

Each platform index page gets a CSS class via frontmatter, and CSS adds the logo as a `::before` pseudo-element on the corresponding nav link.

**Step 1:** In each platform index page's frontmatter, add a page icon class. Material doesn't directly support this, so instead we'll target the nav links by their `href` attribute.

**Step 2:** In `docs/stylesheets/extra.css`:

```css
/* Platform nav icons — target by href */
.md-nav__link[href*="claude/"],
.md-nav__link[href*="claude/index.html"] {
  &::before {
    content: "";
    display: inline-block;
    width: 1em;
    height: 1em;
    margin-right: 0.4em;
    vertical-align: middle;
    background-image: url('../images/platforms/claude-icon.svg');
    background-size: contain;
    background-repeat: no-repeat;
  }
}

.md-nav__link[href*="chatgpt/"],
.md-nav__link[href*="chatgpt/index.html"] {
  &::before {
    content: "";
    display: inline-block;
    width: 1em;
    height: 1em;
    margin-right: 0.4em;
    vertical-align: middle;
    background-image: url('../images/platforms/chatgpt-icon.svg');
    background-size: contain;
    background-repeat: no-repeat;
  }
}

.md-nav__link[href*="gemini/"],
.md-nav__link[href*="gemini/index.html"] {
  &::before {
    content: "";
    display: inline-block;
    width: 1em;
    height: 1em;
    margin-right: 0.4em;
    vertical-align: middle;
    background-image: url('../images/platforms/gemini-icon.svg');
    background-size: contain;
    background-repeat: no-repeat;
  }
}
```

**Important caveats:**

- The `href` selectors need to match the actual rendered nav link paths. Build the site and inspect the nav HTML to confirm the exact `href` values. MkDocs may use relative paths like `claude/` or absolute paths like `/hhg2ai/claude/`. Adjust selectors accordingly.
- Use the `[href*="claude/"]` substring match to catch both the section header and the index page link.
- The `1em` size makes the icon match the nav text size — roughly 14–16px. This is "letter-sized" as requested.
- These selectors should target only the **top-level** platform nav entries (the section headers), not every sub-page. If the selectors are too broad and icons appear on every sub-page link, narrow them by adding a parent selector like `.md-nav--primary > .md-nav__list > .md-nav__item > .md-nav__link[href*="claude/"]`. Test after building.
- If Material's CSS uses nesting that prevents `::before` on nav links, you may need `::after` instead, or a different insertion point. Inspect the rendered HTML.

**Fallback:** If the CSS pseudo-element approach proves too fragile across Material theme updates, an alternative is to use Material's built-in icon support. Material allows setting icons on nav sections using the `icon` property in `mkdocs.yml`:

```yaml
nav:
  - Platform Guides:
    - ...
```

And in the platform index page frontmatter:

```yaml
---
icon: material/robot-outline
---
```

However, this uses Material's icon set (Material Design Icons, FontAwesome, Octicons), not custom SVGs. You could use generic icons as approximations (e.g., a robot icon, a chat icon) but these wouldn't be the actual platform logos. The CSS approach is better if it works.

---

## 3. Page title in right-hand TOC

### Problem

The right-hand table of contents (on-page TOC) shows H2/H3 headings but not the page title (H1). When both the left nav and the right TOC are visible, readers can't immediately tell which page's contents they're looking at in the right panel.

### Fix

MkDocs Material has a built-in setting for this. In `mkdocs.yml`, under `theme`:

```yaml
theme:
  name: material
  features:
    - toc.integrate    # Remove this if present — it merges TOC into left nav
  # ... other settings
```

The key setting is in `markdown_extensions`:

```yaml
markdown_extensions:
  - toc:
      toc_depth: 3       # or whatever depth you want
```

**But the actual issue is that Material excludes H1 from the TOC by default.** To include the page title, set:

```yaml
markdown_extensions:
  - toc:
      toc_depth: 3
```

This controls the *maximum* depth but not the minimum. Material strips H1 from the right TOC by design, assuming the page title is already visible as the main heading.

**The real fix** is CSS. Add the page title to the right TOC via a small CSS addition that shows the page's H1 as a non-clickable header above the TOC entries:

```css
/* Show page title above right-hand TOC */
.md-sidebar--secondary .md-sidebar__scrollwrap::before {
  content: attr(data-md-title);
  display: block;
  font-weight: 700;
  font-size: 0.75rem;
  padding: 0.6rem 0.6rem 0.4rem;
  color: var(--md-default-fg-color--light);
  border-bottom: 1px solid var(--md-default-fg-color--lightest);
  margin-bottom: 0.4rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
```

**However**, this relies on `data-md-title` being present on that element, which is not guaranteed across Material versions.

**More reliable approach — template override:**

Create `overrides/partials/toc.html`. Copy Material's default `toc.html` partial and add the page title at the top:

```html
{% if page.toc | length > 0 %}
<div class="md-sidebar__inner">
  <p class="md-toc__title">{{ page.title }}</p>
  <nav class="md-nav md-nav--secondary" aria-label="{{ lang.t('toc.title') }}">
    {% for toc_item in page.toc %}
      {% include "partials/toc-item.html" %}
    {% endfor %}
  </nav>
</div>
{% endif %}
```

Then style it:

```css
.md-toc__title {
  font-weight: 700;
  font-size: 0.7rem;
  padding: 0.4rem 0.6rem;
  margin: 0 0 0.4rem 0;
  color: var(--md-default-fg-color--light);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-bottom: 1px solid var(--md-default-fg-color--lightest);
}
```

**Important:** Check that `custom_dir: overrides` is set in `mkdocs.yml` under `theme`. If it's not already there:

```yaml
theme:
  name: material
  custom_dir: overrides
```

And ensure the `overrides/` directory exists at the project root.

**Before implementing the template override**, check the current Material version's `toc.html` partial structure. The template above is indicative — the actual partial may have different wrapper elements or variable names. Copy the original from Material's installed package (`site-packages/material/templates/partials/toc.html`) and modify minimally.

---

## Implementation order

1. Update nav labels in `mkdocs.yml` for draft field guide pages (append "(coming soon)").
2. Update the activity table on `field-guides/index.md` with italic "(coming soon)" markers.
3. Increase `.platform-logo` height to 40px in `extra.css`.
4. Add platform nav icon CSS to `extra.css`. Build and inspect to verify selectors match rendered HTML. Adjust if needed.
5. Add TOC title via template override. Ensure `custom_dir: overrides` is configured.
6. Build and verify (`mkdocs serve`).
