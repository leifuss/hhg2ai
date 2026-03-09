# Platforms Section Edits: Implementation Brief

*For Claude Code. March 2026.*

---

## Overview

Five targeted edits to the Platforms section (`docs/platforms/index.md` and related files). These should be applied on top of the existing structure.

---

## 1. Fix platform logos

### Problem

The current logos are too large and are not the correct images.

### Source files

Download the SVG files from Wikimedia Commons. The page URLs are:

- **ChatGPT:** https://ie.wikipedia.org/wiki/File:ChatGPT-Logo.svg
- **Claude:** https://en.wikipedia.org/wiki/File:Claude_AI_symbol.svg
- **Gemini:** https://commons.wikimedia.org/wiki/File:Google_Gemini_icon_2025.svg

On each Wikimedia page, find the direct file download link (the "Original file" SVG link, which will be a URL starting with `https://upload.wikimedia.org/`). Download each SVG and save to `docs/assets/images/platforms/` as:

- `chatgpt-icon.svg`
- `claude-icon.svg`
- `gemini-icon.svg`

For the Copilot placeholder, find the Microsoft Copilot icon from Wikimedia Commons similarly.

### Sizing

Update the CSS in `docs/stylesheets/extra.css`. The logos should be **small** — orientation markers, not hero images:

```css
.platform-logo {
  height: 28px;
  width: auto;
  vertical-align: middle;
  margin-right: 0.5rem;
}
```

28px height is roughly the size of a heading's text. If that feels too small after building, 32px is the maximum. Never larger than 36px.

### Placement

Inline with the H1 heading on each platform's index page:

```markdown
# ![Claude](../assets/images/platforms/claude-icon.svg){ .platform-logo } Claude for Humanities Scholars
```

---

## 2. Add platform navigation buttons

### What

After the short introductory summary on `docs/platforms/index.md`, add a row of clickable buttons/cards that link directly to each platform guide. These should visually match the button/card style already used on the site's landing page (`docs/index.md`).

### Implementation

Inspect `docs/index.md` to find the existing button/card pattern. The landing page already has navigation cards — replicate that exact HTML/CSS pattern. If the landing page uses MkDocs Material's grid cards feature, use the same approach:

```markdown
<div class="grid cards" markdown>

-   :simple-anthropic:{ .lg .middle } **Claude**

    ---

    Anthropic's AI assistant. Strong for writing, analysis, and coding.

    [:octicons-arrow-right-24: Claude guide](../claude/)

-   :simple-openai:{ .lg .middle } **ChatGPT**

    ---

    OpenAI's general-purpose AI. Broad capabilities, large ecosystem.

    [:octicons-arrow-right-24: ChatGPT guide](../chatgpt/)

-   :simple-google:{ .lg .middle } **Gemini**

    ---

    Google's AI. Deep ecosystem integration, strong multimodal support.

    [:octicons-arrow-right-24: Gemini guide](../gemini/)

-   :material-microsoft:{ .lg .middle } **Microsoft Copilot**

    ---

    AI in Microsoft 365. Coming soon.

    [:octicons-arrow-right-24: Copilot guide](copilot-placeholder/)

</div>
```

**Note:** The exact syntax depends on what the landing page uses. If it uses custom HTML cards instead of Material's grid feature, match that. If the icon shortcodes (`:simple-anthropic:` etc.) aren't available, use small inline images of the platform logos instead:

```markdown
-   ![Claude](../assets/images/platforms/claude-icon.svg){ .platform-logo } **Claude**
```

The key requirements are:
- Visually consistent with the landing page's card/button style
- One card per platform, in a horizontal row (wrapping on mobile)
- Each card has: platform logo/icon, name, one-line description, link
- Placed immediately after the short introductory paragraph, before the "How to Choose" section

---

## 3. Rename and reframe the section

### Section title

Change the nav label from "Platforms" to "Platform Guides" in `mkdocs.yml`.

### Page heading

Change the H1 of `docs/platforms/index.md` from whatever it currently is to:

```markdown
# Platform Guides
```

### Introductory framing

Rewrite the opening paragraphs of `docs/platforms/index.md`. The current text (if it follows the earlier brief) leads with "How to Choose." Instead, the page should open with a brief framing paragraph, then the buttons, then the choosing section. Structure:

```
# Platform Guides

[Short framing paragraph — see below]

[Platform buttons/cards]

## How to Choose a Platform

[Existing "How to Choose" content]
```

The framing paragraph should say something like:

> Several AI platforms now offer capable general-purpose assistants, and many of them do very similar things. You do not need to learn them all, or even use all the capabilities of any one platform. The guides below cover the platforms most relevant to humanities researchers. Each can be read independently. If you are unsure where to start, the [choosing guide](#how-to-choose-a-platform) below will help you decide.

Keep it to 3–4 sentences. Matter-of-fact, not salesy.

---

## 4. Strengthen the free tier caveat

### Where

In the "What is your budget?" → "Nothing for now" subsection of `docs/platforms/index.md`.

### What to add

After the existing text about free tiers being "good enough for a genuine first encounter," add:

> Free tiers give you a realistic sense of the *nature* of what these tools can do — the kinds of tasks they handle, how conversation works, what file uploads feel like. But they do not reliably represent the *quality* of output you can expect from a paid tier. Free-tier models are often older, slower, or more heavily rate-limited, and may not produce results good enough for professional or academic work. If you try a free tier and find the output underwhelming, that is a reason to try a paid tier before writing the technology off, not a reason to stop.

---

## 5. Reframe the corporate ethics section

### What to change

Replace the current "Do you care about the company behind the model?" subsection entirely. Remove it as a standalone subsection of the choosing guide and move it into a "Leif's Notes" admonition box, placed after the main choosing subsections.

### New content

```markdown
!!! note "Leif's Notes — on choosing by company"
    None of the major AI platforms is without ethical questions —
    on corporate governance, environmental impact, labour practices,
    data handling, and societal risk. The differences between them
    are real but not straightforward, and they change as companies
    evolve. Rather than offering a ranking here, I would encourage
    you to do your own research. (LLMs themselves can be surprisingly
    candid about the controversies surrounding their own makers —
    try asking.)

    Many academics I speak to tend to default to Anthropic (Claude)
    as having arguably the strongest explicit commitment to safe and
    ethical AI development. That is an observation of a trend among
    colleagues, not a formal endorsement from this guide. Your own
    priorities — on privacy, on environmental impact, on corporate
    structure, on military contracts — may lead you to a different
    conclusion.
```

### Why

The previous version tried to be neutrally informative about each company's structure. That's the right instinct but the wrong execution for this topic — it reads like a prospectus rather than honest guidance. Moving it to Leif's Notes does three things: it signals that this is editorial judgement rather than reference material; it avoids the false equivalence of listing company structures side by side as if that were the whole picture; and it gives you the space to say something actually useful (the Anthropic observation) without it reading as an endorsement embedded in the guide's official structure.

---

## Implementation order

1. Download correct logo SVGs from Wikimedia and replace existing files in `docs/assets/images/platforms/`.
2. Update logo CSS to 28px height.
3. Rewrite the opening of `docs/platforms/index.md` with new framing paragraph.
4. Add platform navigation buttons after the framing paragraph.
5. Rename section to "Platform Guides" in `mkdocs.yml`.
6. Update the free tier caveat text.
7. Replace the corporate ethics subsection with the Leif's Notes box.
8. Build and verify (`mkdocs serve`).

---

## Notes

- The platform buttons should be the first interactive element a reader encounters after the framing paragraph. They are the primary call to action — most readers already know which platform they want and just need the link.
- The "How to Choose" content follows below the buttons for readers who *don't* know which platform they want. This is the correct ordering: serve the majority first, then help the undecided.
- Check that the landing page's card/button CSS is available site-wide (it should be if it's in the theme or `extra.css`). If it's scoped to the landing page only, extend it.
