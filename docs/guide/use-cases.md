---
section: primer
title: "Use Cases by Time Investment"
description: "Practical AI use cases for humanities scholars, organised by time investment — from 15-minute experiments to deeper projects."
last_verified: 2026-03-08
---

# Use Cases by Time Investment

This page organises practical use cases by how much time they require — from quick experiments to deeper investments. Each includes risks to watch for. For prompting fundamentals, see [Prompting Principles](../essentials/prompting.md).

!!! panic "Don't Panic"
    These systems are capable of things you won't expect — and incapable of things you'd reasonably assume they could do. Even their developers don't fully understand where the boundaries lie. The only way to discover what works for your purposes is experimentation. Approach with curiosity rather than fixed expectations.

## If you have 15 minutes

These are quick wins where verification is fast relative to generation. They make good starting points.

### Drafting routine communications

Calls for papers, meeting announcements, module descriptions, reference letter frameworks. Prompt with specifics: purpose, audience, length, tone, key details to include. Review and edit the output — these are starting points, not finished products.

**Risks:** Generic, anodyne prose. Factual errors if you include details the system misremembers or invents. The system defaults to a kind of corporate enthusiasm that may not suit academic contexts. Always rewrite substantially rather than sending lightly-edited output.

### Discussion questions for teaching

"Generate 8 discussion questions for undergraduates on [this passage/topic], ranging from comprehension to interpretation." Select and revise the useful ones; discard the rest.

**Risks:** Questions that miss disciplinary specificity — generically "literary" questions for a classics text that ignore what classicists actually care about. The system doesn't know your students or your pedagogical goals.

### Reformatting and data cleaning

Bibliography format conversion, cleaning OCR output into structured data, transforming messy spreadsheets. Tasks where verification is trivial but manual work is tedious.

**Risks:** Subtle errors in bibliographic details (wrong page numbers, slightly mangled titles). For OCR cleaning, the system may "correct" unusual but accurate readings into common but wrong ones.

### Draft feedback

"This paragraph feels unclear — suggest three ways to restructure it." "What's the weakest link in this argument?" Treat suggestions as prompts for your own revision, not as improvements to accept.

**Risks:** The system may smooth away productive difficulty or disciplinary precision in favour of generic clarity.

!!! essential "Essential"
    **Try this now (10 min):** Pick one task above and do it with material from your current teaching or writing. Use the [prompting principles](../essentials/prompting.md) — be specific about what you want and give the system enough context. Then evaluate: was the output useful enough to save you time, or did verification eat the gains?

## If you have an afternoon

These tasks require more iteration and engagement. They reward sustained conversation where you refine prompts, push back on outputs, and build on earlier exchanges.

### Argument testing

Present your argument and ask: "What are the strongest counterarguments? What alternative explanations must I address?"

**Risks:** The system generates plausible-critique-shaped text, not actual engagement with your argument's logic. Use outputs as checklists for your own thinking, not as authoritative critique.

### Grant application review with personas

Before submitting, simulate different reviewer perspectives:

> "Read this grant application as a panel member who is expert in [your methodology] and sceptical of [your theoretical framework]. What weaknesses would you identify?"

> "Now read as a reviewer focused on impact and knowledge exchange. Where is the case weakest?"

Run through several personas, each generating critique from a different angle.

**Risks:** The critiques may be generic rather than specific to your proposal's actual weaknesses. Persona-based critique can create false confidence. It doesn't replace feedback from colleagues who know the funding landscape.

### Exploring alternative framings

"Present three different interpretations of this evidence, from different theoretical frameworks."

**Risks:** Theoretical frameworks may be presented superficially or conflated. Useful for brainstorming, not for understanding those traditions.

### Literature review scaffolding

"Based on these sources I'm consulting, what themes and debates seem central? What potential gaps might I be missing?"

**Risks:** The system may identify themes that sound plausible but don't reflect how the field actually organises itself. The system hasn't read these works — it's pattern-matching on titles and abstracts.

### Code for digital projects

"Write Python code to extract place names from these TEI-encoded texts and count frequency." Systems with code execution can run and debug code directly.

**Risks:** Code may work on test cases but fail on edge cases. If you can't read the code well enough to verify its logic, you can't verify its outputs. But verification by testing is often accessible — compare a sample of outputs against manual processing.

### OCR and transcription

Upload photographs of manuscripts, inscriptions, printed pages. Ask for transcription. Genuinely useful as a first pass, especially for legible printed materials.

!!! caution "Caution"
    The system will produce confident transcriptions that contain errors, especially with damaged materials or non-standard scripts. It may silently normalise unusual spellings or expand abbreviations without flagging them. For many humanities tasks, silent normalisation changes the object of study. Treat outputs as first passes requiring careful verification against originals.

!!! essential "Essential"
    **Try this now (30 min):** Choose one task above that matches a current project. Spend 20 minutes working through it iteratively — give feedback, push back on weak outputs. Then spend 10 minutes verifying the result. Note what worked and what you would do differently.

## If you want to go deeper

These require more setup or technical comfort but open significant possibilities.

### Document collections with NotebookLM

Google's [NotebookLM](https://notebooklm.google.com/) offers the simplest entry point for working with your own document collections. Upload PDFs, Google Docs, or web pages (up to 50 sources), and query across them.

**Risks:** The system still generates text based on patterns, not understanding. Grounding in your documents reduces hallucination but doesn't eliminate it.

### Media transformation

**Audio transcription:** Services like Whisper (OpenAI) transcribe audio with reasonable accuracy. Useful for interviews, oral histories, lecture recordings.

**Text to audio:** NotebookLM's podcast feature, ElevenLabs, and other text-to-speech services can convert written materials to audio.

**Video processing:** Tools can transcribe video audio, generate summaries, or extract key frames.

### Working with open-weights models

Open-weights models (Llama, Mistral, Qwen) release their parameters publicly, allowing local installation. Complete privacy, no usage costs after setup, ability to fine-tune. [Ollama](https://ollama.ai/) provides the simplest local setup.

**Risks:** Generally less capable than frontier proprietary models. Local hardware constraints limit model size. For most users, privacy benefits rarely outweigh the capability gap.

### Structured extraction at scale

Models can extract structured information from unstructured sources — named entities, dates, relationships — and output machine-readable formats. Combined with batch processing, this enables working with document collections at scales impossible manually.

!!! offtrack "Off the Beaten Track"
    Applications include extracting person-place-date triples from historical correspondence, identifying marginalia across manuscript collections, building prosopographical databases from narrative sources. This typically requires API access plus scripting. Python libraries like [Instructor](https://python.useinstructor.com/) simplify structured extraction.

**Risks:** Extraction errors multiply across large collections. This is a power tool — powerful enough to produce large quantities of unreliable data if used carelessly.

## Verification strategies

All LLM output requires verification. See [Verification & Citation](../essentials/verification.md) for the full framework. As a quick guide:

- **15-minute tasks:** Quick check — scan for obvious errors, ask the model to flag its own uncertainty
- **Afternoon tasks:** Moderate verification — spot-check sources, cross-check key claims
- **Deeper work:** Publication-grade — verify all citations, cross-check all factual claims, treat output as a hypothesis to test

## When not to use these tools

Not every task benefits from AI assistance. The core principle: the question is not whether these tools *can* produce output for a given task, but whether using them actually improves your work. Often the answer is no, and that is fine.
