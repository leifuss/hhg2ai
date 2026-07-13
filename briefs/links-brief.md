# Brief: Documentation Links and Advanced Feature References

**For:** Claude Code, working on `https://leifuss.github.io/ai4hums/claude/`
**Date:** 8 March 2026
**Follows:** All previous briefs.

---

## Part A: The linking problem

The guide currently contains very few links to Anthropic's official documentation. This matters for three reasons:

1. **Verifiability.** The guide makes specific claims about features, pricing, plans, and capabilities. Without links, a reader who wants to check a claim has to search for the right page. Given the Cowork errors we've already found, readers have reason to want to check.

2. **Currency.** Anthropic's product surface changes rapidly. When a feature changes, a linked guide can say "see the current docs" and remain useful even when its own text is stale. An unlinked guide just becomes wrong.

3. **Depth without bloat.** Many topics (RAG for projects, data retention policies, API pricing tiers, enterprise controls) are relevant to some readers but would bloat the guide if covered in full. A link lets the guide stay concise while giving interested readers somewhere to go.

### Current state

Across approximately 15,000 words of guide content:

- **index.html**: 1 external link (Anthropic pricing page)
- **chat.html**: 3 external links (claude.ai, Anthropic pricing, artifacts doc). The generic "Anthropic's documentation" link points to docs.anthropic.com, which is the API developer docs — not the right destination for a humanities reader
- **code.html**: 1 external link (nodejs.org — now largely irrelevant given the native installer). Zero links to Claude Code documentation
- **cowork.html**: 1 external link (claude.ai/download). Zero links to Cowork documentation
- **shared-principles.html**: 2 external links (Anthropic privacy policy, generic docs link)
- **workflows.html**: Zero external links

This is not enough. A guide that recommends specific product features should link to the canonical documentation for those features.

---

## Part B: Recommended links by page

For each page, here are the specific documentation URLs that should be added, keyed to the sections where they're relevant. All URLs verified as live on 7 March 2026.

### Overview (index.html)

| Context | URL | Note |
|---------|-----|------|
| Pricing / plan comparison | https://www.anthropic.com/pricing | Already present; keep |
| Claude Desktop download | https://claude.ai/download | Add to browser/desktop/mobile section |
| Connectors Directory | https://claude.ai/directory | Mention in orientation or integrations |

### Chat (chat.html)

| Context | URL | Note |
|---------|-----|------|
| Creating and managing Projects | https://support.claude.com/en/articles/9519177-how-can-i-create-and-manage-projects | §1.3 Projects |
| Memory and chat search | https://support.claude.com/en/articles/11817273-use-claude-s-chat-search-and-memory-to-build-on-previous-context | §1.3 Memory |
| Import/export memory | https://support.claude.com/en/articles/12123587-import-and-export-your-memory-from-claude | §1.3 Memory |
| Personalization features (profile prefs, styles, project instructions) | https://support.claude.com/en/articles/10185728-understanding-claude-s-personalization-features | §1.2 Custom styles |
| Configuring and using styles | https://support.claude.com/en/articles/10181068-configure-and-use-styles | §1.2 Custom styles |
| Artifacts | https://support.claude.com/en/articles/9487310-what-are-artifacts-and-how-do-i-use-them | Already present; keep |
| Publishing and sharing artifacts | https://support.claude.com/en/articles/9547008-publishing-and-sharing-artifacts | §1.3 Artifacts |
| Using web search | https://support.claude.com/en/articles/11176892-enabling-and-using-web-search | §1.3 Web search |
| Using connectors | https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities | §1.3 Integrations |
| Usage limits and length limits | https://support.claude.com/en/articles/11647753-understanding-usage-and-length-limits | §1.5 Managing context window limits |
| Usage limit best practices | https://support.claude.com/en/articles/9797557-usage-limit-best-practices | §1.5 Managing context |
| Getting started with Claude | https://support.claude.com/en/articles/8114491-getting-started-with-claude | General reference |
| RAG for projects | https://support.claude.com/en/articles/11939498-retrieval-augmented-generation-rag-for-projects | §1.3 Projects (capacity) |

### Cowork (cowork.html)

| Context | URL | Note |
|---------|-----|------|
| Getting started with Cowork | https://support.claude.com/en/articles/13345190-get-started-with-cowork | §3.1 and §3.2 |
| Using Cowork safely | https://support.claude.com/en/articles/13364135-using-cowork-safely | §3.4 |
| Cowork blog announcement | https://claude.com/blog/cowork-research-preview | Background reading |
| Schedule recurring tasks | https://support.claude.com/en/articles/13854387-schedule-recurring-tasks-in-cowork | §3.3 Scheduled tasks |
| Cowork plugins | https://support.claude.com/en/articles/13837440-use-plugins-in-cowork | §3.3 Plugins |
| Claude Desktop download | https://claude.ai/download | §3.2 Setup |

### Claude in Your Apps (new page, per Cowork rewrite brief)

| Context | URL | Note |
|---------|-----|------|
| Claude in Chrome — getting started | https://support.claude.com/en/articles/12012173-getting-started-with-claude-in-chrome | Chrome section |
| Claude in Chrome — safe usage | https://support.claude.com/en/articles/12431227-simplify-your-browsing-experience-with-claude-in-chrome | Chrome section |
| Claude in Excel | https://support.claude.com/en/articles/12650343-use-claude-in-excel | Excel section |
| Claude in PowerPoint | https://support.claude.com/en/articles/13521390-use-claude-in-powerpoint | PowerPoint section |

### Code (code.html)

| Context | URL | Note |
|---------|-----|------|
| Claude Code setup / installation | https://code.claude.com/docs/en/setup | §2.3 |
| Claude Code common workflows | https://code.claude.com/docs/en/common-workflows | §2.8 |
| Claude Code Desktop | https://code.claude.com/docs/en/desktop | §2.2 (new subsection) |
| Plan mode and permission modes | https://code.claude.com/docs/en/common-workflows (plan mode section) | §2.8 (new subsection) |
| Subagents | https://code.claude.com/docs/en/sub-agents | §2.4 or §2.6 |
| Hooks | https://code.claude.com/docs/en/hooks | §2.5 |
| MCP in Claude Code | https://code.claude.com/docs/en/mcp | §2.6 |
| CLAUDE.md | https://code.claude.com/docs/en/memory | §2.3 |
| Output styles | https://code.claude.com/docs/en/output-styles | Footnote / "further reading" |
| Agent teams | https://code.claude.com/docs/en/agent-teams | Footnote / "further reading" |
| Claude Agent SDK | https://code.claude.com/docs/en/sdk | Footnote / "further reading" |

### Shared Principles (shared-principles.html)

| Context | URL | Note |
|---------|-----|------|
| Anthropic privacy policy | https://www.anthropic.com/privacy | Already present; keep |
| Data retention | https://privacy.claude.com/en/articles/7996866-how-long-do-you-store-my-organization-s-data | §4.2 Data governance |
| Pricing | https://www.anthropic.com/pricing | §4.3 Cost awareness |
| Prompt engineering | https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview | §4.1 Prompting principles |

### Workflows (workflows.html)

Currently has zero external links. Each worked example should link to the relevant tool documentation at the end of its section, in a "Further reading" line. For example, after §7.2 (corpus processing): "For Claude Code documentation, see [code.claude.com/docs](https://code.claude.com/docs/en/overview)."

---

## Part C: Advanced features — mention with links, don't explain

Several features are genuinely useful but too specialised for full coverage in this guide. The right treatment: one sentence of description, one link to the docs. Grouped by page:

### On the Code page (§2.9 or a new "Further reading" box at the end)

> **Going further with Claude Code**
>
> The features above cover what most humanities scholars need. Claude Code has additional capabilities that may be useful as your projects grow:
>
> - **Output styles** let you change how Claude Code communicates — from concise to explanatory to fully custom. See [Output styles documentation](https://code.claude.com/docs/en/output-styles).
> - **Agent teams** coordinate multiple Claude instances working in parallel across separate git branches. Useful for large projects with independent components. See [Agent teams documentation](https://code.claude.com/docs/en/agent-teams).
> - **The Claude Agent SDK** lets you build custom agent workflows programmatically — for automation, CI/CD, or integration with other tools. See [Agent SDK documentation](https://code.claude.com/docs/en/sdk).
> - **Plugins** bundle skills, subagents, commands, and connectors into shareable packages. See [Plugins documentation](https://code.claude.com/docs/en/plugins).
> - **GitHub Actions integration** lets Claude Code run as part of automated testing and review pipelines. See [CI/CD documentation](https://code.claude.com/docs/en/github-actions).

### On the Chat page (end of §1.3 or §1.6)

> **Other Claude features**
>
> - **Research mode** lets Claude conduct extended, multi-step research with web searches before responding. See [Research documentation](https://support.claude.com/en/articles/12925782-using-research-on-claude).
> - **Extended thinking** gives Claude space to reason through complex problems before responding. See [Extended thinking documentation](https://support.claude.com/en/articles/11559783-using-extended-thinking).
> - **File creation and editing** — Claude can create Word documents, spreadsheets, presentations, and PDFs directly in conversation. See [File creation documentation](https://support.claude.com/en/articles/12637498-create-and-edit-files-with-claude).

### On the Cowork page (end of capabilities section)

> **Extending Cowork**
>
> - **Plugins** customise Cowork for specific roles and domains. See [Cowork plugins](https://support.claude.com/en/articles/13837440-use-plugins-in-cowork).
> - **Scheduled tasks** let Claude run work automatically on a cadence you set. See [Scheduling documentation](https://support.claude.com/en/articles/13854387-schedule-recurring-tasks-in-cowork).
> - **Office add-ins** — Cowork can coordinate with Claude in Excel and Claude in PowerPoint. See the [Claude in Your Apps](#) page.

---

## Part D: Link style and maintenance

### How to present links

For a static HTML guide aimed at humanities scholars, links should be:

- **Inline where they support the text**, not dumped in a bibliography at the end. "For details, see [Anthropic's Projects documentation](url)" reads better than a footnote.
- **Descriptive, not bare URLs.** `https://support.claude.com/en/articles/9519177-how-can-i-create-and-manage-projects` means nothing to a reader. "See [How to create and manage Projects](url) in the Claude Help Center" is useful.
- **Marked as external** with a subtle visual cue. A small external-link icon (↗ or similar) after links that leave the guide helps readers know they're leaving. CSS:

```css
a[href^="https://support.claude.com"],
a[href^="https://code.claude.com"],
a[href^="https://claude.com"],
a[href^="https://docs.claude.com"],
a[href^="https://www.anthropic.com"] {
  /* Optional: add external link icon */
}
a[href^="https://support.claude.com"]::after,
a[href^="https://code.claude.com"]::after,
a[href^="https://claude.com/blog"]::after,
a[href^="https://docs.claude.com"]::after,
a[href^="https://www.anthropic.com"]::after {
  content: " ↗";
  font-size: 0.75em;
  vertical-align: super;
  color: #888;
}
```

### Maintenance

External links break. Two mitigation strategies:

1. **Prefer support.claude.com and code.claude.com** over blog posts or third-party sources. Help centre articles are maintained; blog posts are not.
2. **Add a link-checking step to maintenance.** A simple script that checks all external links for 200 responses, run quarterly or before each update. Claude Code can write this for you in about 30 seconds.
3. **Date-stamp the guide** and note in the footer: "Links verified [date]. If a link is broken, please [let us know](feedback form URL)."

---

## Part E: The generic docs.anthropic.com link

The guide currently links to `docs.anthropic.com` as the general documentation reference. This is the **API developer documentation** — aimed at software engineers building on Claude's API. It is not the right destination for humanities scholars.

The right general links are:

- **For product features and how-to:** https://support.claude.com (the Help Center)
- **For Claude Code:** https://code.claude.com/docs/en/overview
- **For API/developer documentation:** https://docs.claude.com (only relevant for §2.6 MCP and §4.3 API pricing)

Replace the generic "see Anthropic's documentation" references with specific links to the Help Center or Code docs as appropriate. The API docs should only be linked where the guide is explicitly discussing API-level topics.

---

## Implementation

This brief doesn't require structural changes to the guide — it's an additive pass that can run after the content corrections and restructuring from earlier briefs.

**Suggested approach:**

1. Work through each page, adding the links from Part B to the relevant sections. This is mechanical: find the claim, add the link.
2. Add the "Further reading" / "Going further" boxes from Part C to each relevant page.
3. Replace the generic docs.anthropic.com references with specific Help Center links.
4. Add the external-link CSS.
5. Commit with message: "Add documentation links throughout guide."

One commit is fine for this — it's a single coherent change (adding links) rather than a content correction.
