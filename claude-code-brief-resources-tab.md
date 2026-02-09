# Claude Code Brief: Add "Resources" Tab to AI Guidance

## Task

Add a new tab called **"Resources"** to the existing AI guidance document. The tab should contain the content from `ai-resources-humanities.md`.

## Context

This is part of a set of guidance materials for humanities academics at the University of Exeter. The existing document already has multiple tabs (the exact structure will be visible in the codebase). This new tab should sit as the **last tab** in the navigation, after all existing content tabs.

## Content source

The markdown file `ai-resources-humanities.md` (provided alongside this brief) contains the full content for the Resources tab. Render it as-is — do not restructure, reorder, or add material.

## Implementation notes

1. **Tab label:** "Resources" (or "Further Resources" if the shorter version creates ambiguity with existing tabs — check what's already there).

2. **Rendering:** The content is standard markdown with headers, bullet lists, bold text, and external links. All links should open in a new tab (`target="_blank"`).

3. **Styling:** Match the existing tab styling exactly. No special treatment — this is a text-heavy reference page, not a landing page.

4. **Section anchors:** The markdown uses `##` for main sections and `###` for subsections. If the existing tabs support in-page anchor links or a sidebar TOC, apply the same pattern here.

5. **"At Exeter" section:** This appears first in the content and should remain visually prominent (it's the institutional context colleagues need most urgently). If the existing design supports any kind of callout or highlighted box for institutional links, apply it here. If not, just render normally.

6. **No JavaScript or interactivity needed.** This is a static reference page.

7. **Mobile:** Ensure the tab content is readable on mobile. The existing tab framework presumably handles this already.

## What NOT to do

- Do not split this into multiple sub-tabs or pages. It's one scrollable document.
- Do not add a search/filter function. The list is deliberately short enough to scan.
- Do not auto-generate a table of contents unless the other tabs already have one.
- Do not modify the content. If something looks wrong, flag it rather than fixing it silently.
