# Gemini Section: Evaluation and Claude Code Brief

*For Claude Code. March 2026.*

---

## Part 1: Veracity

### Correct or broadly accurate

- **Gemini as model family + app.** Correct. Google DeepMind builds the models; the Gemini app is the consumer product.
- **Bard-to-Gemini history.** Bard launched 2023, renamed Gemini February 2024 with model family introduction December 2023. All correct.
- **Canvas capabilities.** Confirmed. Canvas supports documents, code, slides (with Google Slides export), apps, infographics, quizzes, and Audio Overviews. The draft's description is accurate and if anything slightly understates how much Canvas has expanded.
- **Connected Apps and Workspace integration.** Accurately described. The complexity warning (features vary by device, country, account type, plan, admin permissions) is well founded and repeatedly confirmed by Google's own documentation.
- **Deep Research.** Accurately described. The ability to draw on Gmail, Drive, uploaded files, and NotebookLM notebooks as well as web search is confirmed.
- **Privacy — personal accounts.** Accurately described and importantly worded. Human reviewers, up to 3 years retention for reviewed chats, training use with Keep Activity on — all confirmed directly from Google's Privacy Hub. The Temporary Chat description (72 hours, not used for training, not on work/school accounts) is also correct.
- **Workspace privacy.** The distinction between personal and Workspace governance is correct and important.
- **Google AI Studio as bridge.** Accurately described as the experimentation/prototyping environment between consumer app and API.
- **Gemini CLI.** Accurately described as open-source command-line agent.
- **Gemini Live.** Accurately described.

### Needs correction or update

- **Plan names and structure.** The draft says "Google currently offers three personal Google AI plans: Google AI Plus, Google AI Pro, and Google AI Ultra." This is correct as of early 2026. However, the draft doesn't mention the free tier at all in the plans section, though it exists and now includes access to Gemini 3 Pro with usage limits. **Fix:** Add free tier to the plans description. Also note approximate pricing: Plus ~$8/month, Pro ~$20/month, Ultra ~$250/month. These are stable enough to include with a date stamp.

- **"Google AI Premium" / "Gemini Advanced" naming history.** The draft doesn't mention that "Google AI Pro" was previously called "Google One AI Premium" and included "Gemini Advanced." This renaming (at I/O 2025) causes confusion when readers encounter older documentation. **Fix:** Add a parenthetical noting the rebrand.

- **Gemini 3 models.** The draft references "Gemini 3" in the coding section but doesn't give readers a clear sense of the current model landscape. As of early 2026, the key consumer-facing models are Gemini 3 Pro (and its Flash variant), with "3.1 Pro" and Deep Think variants appearing in higher tiers. **Fix:** The draft wisely avoids hard-coding model menus, but should note that "Gemini 3" is the current model generation, just as one might say "GPT-5.x" for OpenAI.

- **Jules.** The draft mentions Jules as "a GitHub-connected AI coding agent" bundled with Ultra. This is correct but thin. Jules is roughly analogous to OpenAI's Codex or Anthropic's Claude Code in the agentic coding space. **Fix:** One sentence of clarification.

- **Gemini Agent.** The draft mentions "Gemini Agent" in passing (as a restricted high-end feature) but doesn't explain what it is. As of early 2026, Agent Mode in Gemini is an agentic capability requiring Ultra, US-only, English-only, personal account only. Also, Google's "Project Mariner" browser agent is available to Ultra subscribers. **Fix:** Add a brief description in the deep-research/canvas/live page, noting the restrictions.

- **NotebookLM.** The draft mentions NotebookLM several times but doesn't explain what it is. For humanities readers, this needs a gloss: NotebookLM is Google's separate research tool that lets you upload sources and ask questions specifically about them. It deserves at least a sentence of explanation somewhere, probably in the deep-research page.

### Missing

- **Free tier.** Not described in the plans section. The free tier now includes Gemini 3 Pro access (with daily limits), file/image uploads, and basic web browsing. Important for the "How to Choose" page's budget scenarios.

- **Image and video generation.** The draft mentions these only obliquely. Gemini can generate images (via Nano Banana Pro) and videos (via Veo/Flow). For humanities users thinking about teaching materials, illustrations, or presentations, this deserves explicit mention.

- **Ads.** Not mentioned. As of early 2026, Google has not yet announced ads in Gemini (unlike OpenAI's ChatGPT free/Go tiers), but this could change. Not essential to add, but worth monitoring.

- **Student access.** Google is offering free AI Pro access for a school year to university students in the US, UK, Japan, Brazil, and Indonesia. This is directly relevant to the guide's audience and should be mentioned in the plans section.

---

## Part 2: Style, Tone, and the "Sameyness" Problem

### The sameyness diagnosis

You're right that the three sections (Claude, ChatGPT, Gemini) risk blurring together. The structural parallel is deliberate and useful — readers should be able to navigate any platform section with the same mental model. But there are three levels where differentiation matters:

**1. Visual identity (logos).** This is the quickest win. Each platform index page should open with the platform's logo or icon mark, giving readers an immediate visual anchor. This also helps when someone is flipping between sections or skimming nav. Implementation notes below.

**2. Lead framing.** Each section currently opens with "What X is — and how it relates to Y company." The structure should stay parallel, but the *content* of the opening should foreground what makes each platform distinctive rather than reciting similar corporate histories. For Gemini, the distinctive story is: Google ecosystem integration, multimodal breadth, and product sprawl. That should be the first thing a reader absorbs, not the Bard-to-Gemini rebrand history.

**3. Prose texture.** The ChatGPT draft and this Gemini draft were both written by ChatGPT, and they share verbal tics: "A very short history helps," "It is also worth separating X from Y," "Who this guide is for," "The short version." These phrases are fine individually but become noticeable when repeated across sections. **Fix:** Vary the openings. The Claude section doesn't use these exact phrases; the ChatGPT and Gemini sections shouldn't echo each other either. Claude Code should be instructed to rewrite the openings to sound distinct while keeping the structural parallel.

### Gemini-specific voice opportunities

The Gemini section has a natural tonal angle that the others don't: the honest complexity of Google's product landscape. The draft already leans into this ("confusing product sprawl," "less uniform"), and that candour should be amplified rather than smoothed over. Where the Claude section can be clean and direct (one company, clear product hierarchy) and the ChatGPT section can be broadly matter-of-fact (big product, known trade-offs), the Gemini section's distinctive note should be: *powerful but messy — here's how to navigate it.*

### The "OpenAI says" / "Google says" pattern

The Gemini draft uses "Google says" or "Google describes" even more heavily than the ChatGPT draft. This is epistemically honest and appropriate for a guide that isn't published by Google. However, the frequency should be reduced. Reserve the attribution for claims that are genuinely vendor assertions (privacy policies, capability claims) and state structural facts directly ("Canvas supports slides, documents, and code" — not "Google says Canvas supports...").

### Self-labelled inferences

The draft includes parenthetical disclaimers like "That is a practical inference from Google's documentation" and "That second sentence is my synthesis." These are good epistemic hygiene in a draft but should be removed in the published version. The site's voice is authorial — Leif's judgements are the guide's judgements. If a claim needs qualification, qualify it in the text, don't add a meta-disclaimer.

---

## Part 3: Platform Logos

### Approach

Add each platform's icon mark (not full wordmark) near the top of its index page. This serves visual differentiation without turning the site into a brand showcase.

### Implementation

Use a simple image element after the H1 heading, before the introductory text. Store logos in `docs/assets/images/platforms/`.

```markdown
# Gemini for Humanities Scholars

![Gemini logo](../assets/images/platforms/gemini-icon.svg){ .platform-logo }
```

Add CSS for consistent sizing:

```css
/* Platform logo styling */
.platform-logo {
  height: 48px;
  width: auto;
  margin-bottom: 0.5rem;
  /* No float — sits on its own line above the text */
}
```

### Logo sourcing

- **Claude:** Anthropic provides press assets via their Newsroom. The pinwheel/starburst icon in terra cotta (#da7756). Use the standalone icon mark, not the wordmark. Editorial use is permitted.
- **ChatGPT:** OpenAI provides brand assets via their media page. The rounded-square icon with the stylised knot/flower. Editorial use is permitted.
- **Gemini:** Google provides the Gemini sparkle/star icon. Available from Google's press resources. Editorial use is permitted.
- **Copilot:** Microsoft provides brand assets. The multi-coloured Copilot icon. Editorial use is permitted.

For all logos: use SVG where available, fall back to PNG. Keep them small (48px height) and purely as orientation markers, not decorative elements. This is editorial use in an educational, non-commercial, CC BY-NC-SA resource — well within standard brand guidelines for all four companies.

### Alternative: inline with heading

If the logo-on-its-own-line feels too heavy, it can sit inline with the heading:

```css
.platform-logo {
  height: 36px;
  width: auto;
  vertical-align: middle;
  margin-right: 0.5rem;
}
```

```markdown
# ![Gemini logo](../assets/images/platforms/gemini-icon.svg){ .platform-logo } Gemini for Humanities Scholars
```

Try both in the build and see which reads better. The standalone line is probably cleaner.

---

## Part 4: Claude Code Brief for Gemini Section

### File structure

```
docs/gemini/index.md
docs/gemini/chat.md
docs/gemini/gems-connected-apps.md
docs/gemini/deep-research-canvas-live.md
docs/gemini/coding-ai-studio-cli.md
docs/gemini/plans-privacy.md
docs/gemini/workflows.md
```

### Nav entry

Add under the Platforms grouping in `mkdocs.yml`:

```yaml
  - Gemini:
    - gemini/index.md
    - Chat: gemini/chat.md
    - Gems & Connected Apps: gemini/gems-connected-apps.md
    - Deep Research, Canvas & Live: gemini/deep-research-canvas-live.md
    - Coding & Developer Tools: gemini/coding-ai-studio-cli.md
    - Plans & Privacy: gemini/plans-privacy.md
    - Worked Examples: gemini/workflows.md
```

### Content

Use the draft document provided as source material. Apply the following modifications.

#### Factual corrections

1. **index.md — Plans.** Add the free tier to the short version list. Mention that Google offers free AI Pro access for a school year to university students in the US, UK, Japan, Brazil, and Indonesia.

2. **index.md — Advantages/disadvantages summary.** The draft's editorial note suggests making this explicit near the top. Do so. Add a short boxed summary (admonition) after the "short version" list:

    ```
    !!! info "Gemini at a glance"
        **Best reasons to use it:** Google ecosystem integration,
        genuinely broad multimodal support (text, images, video,
        audio, code), strong teaching-artefact creation via Canvas,
        and a smooth path from experimentation to developer tooling
        via AI Studio.

        **Main reasons to be cautious:** Confusing product sprawl,
        uneven feature availability by country/plan/account type,
        and personal-account privacy defaults that deserve careful
        attention.
    ```

3. **plans-privacy.md — Plan tiers.** Add the free tier. Include approximate pricing with date stamp: Free, Plus (~$8/month), Pro (~$20/month), Ultra (~$250/month). Note that Pro was previously called "Google One AI Premium" / "Gemini Advanced" — readers may encounter the old names. Note student access.

4. **plans-privacy.md — Feature table.** Add a minimal feature-by-plan table parallel to the Claude and ChatGPT sections. Columns: Free, Plus, Pro, Ultra, Workspace. Rows: Chat, File uploads, Deep Research, Canvas, Gems, Connected Apps, Gemini Live, Image generation, Video generation, Agent mode, AI Studio, Gemini CLI, Code Assist, Jules. Use ✓, limited, higher, highest, and — marks. Add caveat: "*Feature availability by plan. Limits vary significantly by country, account type, and Google's rollout schedule. See [Google's subscription page](https://gemini.google/subscriptions/) for current details. As of March 2026.*"

5. **deep-research-canvas-live.md — NotebookLM.** Add a one-sentence gloss: "NotebookLM is Google's separate research tool for uploading source documents and asking questions specifically about them — think of it as a personal research library that Gemini's Deep Research can also draw on."

6. **deep-research-canvas-live.md — Agent mode.** Add a brief paragraph: "Gemini also offers an Agent mode for agentic task completion, and Project Mariner, a browser agent for managing multiple tasks simultaneously. As of March 2026, both are restricted to Google AI Ultra, personal accounts, US availability, and English. For most humanities researchers, these are not the starting point."

7. **coding-ai-studio-cli.md — Jules.** Expand to: "Jules is Google's GitHub-connected AI coding agent, roughly analogous to OpenAI's Codex or Anthropic's Claude Code. It is currently bundled with Google AI Ultra."

8. **coding-ai-studio-cli.md — Gemini 3.** Add a parenthetical noting that Gemini 3 is the current model generation, so readers can orient when they encounter model names in Google's documentation.

#### Style harmonisation

1. **Remove self-labelled inferences.** Delete all parenthetical meta-disclaimers ("That is a practical inference," "That second sentence is my synthesis," etc.). Integrate the judgements directly into the text as authorial voice.

2. **Vary the opening.** Do NOT open with "A very short history helps" (already used in the ChatGPT section). Instead, lead with what makes Gemini distinctive: the Google ecosystem integration and multimodal breadth. The corporate history (Bard rename, DeepMind relationship) can follow as a second paragraph, not the opening move.

3. **Reduce "Google says" frequency.** Keep the attribution for: privacy claims, capability claims about unreleased or restricted features, and governance commitments. Drop it for: feature existence ("Canvas supports slides"), product structure ("Gemini CLI is open-source"), and factual descriptions of the product.

4. **Add MkDocs admonitions.** Apply the same conventions as Claude and ChatGPT sections:
   - "Don't Panic" box on `index.md`
   - "Minimum safe practice" box (adapted for Gemini-specific concerns — especially the privacy/training point)
   - "Leif's Notes" for editorial judgements (e.g., the "scoping assistant not scholarly guarantor" point about Deep Research)
   - "Essential" routing box on `index.md`
   - Use `??? deeper` (collapsible) boxes for technical content that general readers can skip (AI Studio details, CLI setup, API billing)

5. **Add cross-references** to Essentials, Primer, and Glossary. In particular:
   - `plans-privacy.md` → Essentials > Data Governance
   - `workflows.md` → Essentials > Verification & Citation
   - `index.md` → Primer for newcomers, Essentials for cross-platform guidance
   - `index.md` → How to Choose (platforms landing page)

6. **Add decision framework.** On `index.md`, add a "Which Gemini tool do I need?" section parallel to the Claude and ChatGPT equivalents. Tools: Chat, Deep Research, Canvas, Gems, Connected Apps, Live, AI Studio/CLI (grouped). Use the same format: bold name, "Best for:", "You'll need:", "Skills required:".

7. **Date stamp.** "*March 2026*" below the main heading.

8. **Logo.** Add the Gemini sparkle icon at the top of `index.md` per the logo guidance in Part 3 above. (Also add logos to Claude and ChatGPT index pages at the same time.)

9. **British English throughout.**

### Additional task: add logos to existing platform pages

When implementing the Gemini section, also:

- Add the Claude pinwheel icon to `docs/claude/index.md`
- Add the ChatGPT icon to `docs/chatgpt/index.md`
- Add the Copilot icon to `docs/platforms/copilot-placeholder.md`
- Create `docs/assets/images/platforms/` directory
- Add the CSS for `.platform-logo` to `docs/stylesheets/extra.css`

Source the logos from each company's press/media page. Use SVG where available. If SVG is unavailable, use high-quality PNG at a source resolution of at least 96px.

---

## Implementation order

1. Create `docs/gemini/` directory and all seven files.
2. Add Gemini to `mkdocs.yml` nav under Platforms.
3. Create `docs/assets/images/platforms/` and add all four platform logos.
4. Add `.platform-logo` CSS to `docs/stylesheets/extra.css`.
5. Add logos to all platform index pages (Claude, ChatGPT, Gemini, Copilot placeholder).
6. Update cross-references in Primer, Essentials, How to Choose, and landing page to include Gemini.
7. Build and verify locally (`mkdocs serve`).

---

## Source material

The full Gemini draft text is provided in the conversation. Use it as the basis for all Gemini section content, with the corrections and style modifications described above.
