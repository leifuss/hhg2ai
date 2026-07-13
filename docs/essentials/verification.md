---
section: essentials
title: Verification & Citation
description: What LLMs get wrong, how to verify their outputs, the verification ladder, checking citations, and recording provenance for academic work.
last_verified: 2026-07-13
---

# Verification & Citation

An LLM is not an authority. Every output requires the same critical evaluation you would apply to any secondary source --- more, in fact, because an LLM can present fabricated information with complete confidence and no trace of hesitation.

!!! essential "Essential"
    Verification is not a chore added on top of your work --- it **is** the work. LLM outputs are secondary sources at best, and unverified ones at that. Your critical judgement is what turns an AI-assisted workflow into scholarship.

---

## What LLMs get wrong

The failure modes below are not occasional glitches. They are structural features of how these systems work. Every model from every provider exhibits them, and they are unlikely to disappear entirely.

### Fabricated references

LLMs can generate entirely fictional citations --- plausible author names, plausible titles, plausible journals, plausible page numbers. These "hallucinated" references are particularly dangerous because they look real. A fabricated citation to *Journal of Roman Studies* 47 (2003), pp. 112--34, attributed to a real scholar, on a plausible topic, is almost indistinguishable from a genuine reference at first glance.

!!! caution "Caution"
    **Assume all LLM-generated citations are potentially hallucinated until verified.** This is non-negotiable for anything you will publish, submit, or teach from. Check that the source exists, that the author and title match, and that the page numbers contain what is claimed.

Search-grounded and "deep research" modes (now standard on the major platforms) cite real sources far more often than unassisted generation, because they retrieve documents before answering. This helps --- but it does not remove the need to check: the source may be real while the quotation, page reference, or claimed relevance is still wrong. Verify the *use* of the source, not just its existence.

### Confident errors of fact

LLMs may state incorrect dates, misattribute texts, confuse similar-sounding scholars, or get details of historical events wrong --- all while sounding entirely certain. There is no correlation between the confidence of the output and its accuracy. A wrong answer is delivered in exactly the same register as a correct one.

### Anachronistic reasoning

LLMs may apply modern categories or assumptions to historical contexts where they do not fit. They might analyse a medieval text through a framework that did not exist until the twentieth century, or impose modern national boundaries on ancient geography. Be alert to anachronism in any analysis of primary sources.

### Smoothing over complexity

LLMs tend to present clean narratives. If a scholarly debate is genuinely unresolved, the model may still present one position as the consensus view. Minority positions, ongoing controversies, and productive disagreements get flattened into neat summaries.

!!! offtrack "Off the Beaten Track"
    You can push back against this tendency explicitly: ask "Is there scholarly disagreement on this?" or "What are the minority positions?" or "Present the strongest version of the opposing argument." The model will often comply, but you need to ask.

### Translation errors

LLMs handle major modern languages well, but error rates rise significantly for ancient or less-resourced languages --- Latin, Greek, medieval vernaculars, non-Western historical traditions. Unusual vocabulary, dialect forms, damaged text, and technical terminology all increase the risk. Even for well-known texts, subtle mistranslations can shift meaning in ways that matter for scholarship.

### The general pattern

Error rates rise for ancient, low-resource, or specialist-domain content. Any task in a specialist domain warrants extra verification --- not just translation but factual claims, chronology, prosopography, and textual attribution.

---

## The verification ladder

Not every output needs the same level of scrutiny. Match your verification effort to the stakes.

| Level | When to use | What to do |
|-------|-------------|------------|
| **Glance** | Formatting, brainstorming, disposable drafts | Quick sense-check: does this look reasonable? |
| **Spot-check** | Routine summaries, data cleaning, translations of well-known texts | Verify a representative sample (10--20%) against known sources |
| **Full check** | Any claim you will publish or teach from | Verify every factual claim and citation against authoritative sources |
| **Independent verification** | High-stakes or novel claims | Cross-check with a second model, a colleague, or primary sources |

!!! leifnote "Leif's Notes"
    I use the "would I be embarrassed?" test. If an error in this output would embarrass me in front of colleagues, students, or reviewers, it gets a full check. If it is a brainstorming list I will throw away in ten minutes, a glance suffices.

---

## Checking citations

A practical workflow for verifying LLM-generated references:

1. **Search your library catalogue or database** (JSTOR, L'Annee philologique, Google Scholar) for the exact title. If it does not appear, the citation may be fabricated.
2. **Check the author.** Does this person exist? Do they work in this field? Have they published in this journal?
3. **Check the journal and volume.** Does the journal exist? Was there a volume with that number in that year?
4. **Check the page numbers.** If you can access the source, verify that the cited pages contain what is claimed.
5. **Check the argument.** Even if the reference is real, the model may misrepresent what the source actually says.

!!! caution "Caution"
    A real author + a real journal + fabricated content is a common pattern. The model may cite a genuine scholar's genuine article but misrepresent its argument. Verifying that a source *exists* is necessary but not sufficient.

---

## Verifying transformations

When an LLM processes data --- cleaning OCR, extracting metadata, normalising dates, merging sources --- the verification challenge is different from checking factual claims. You need to audit the **process**, not just the output.

### Spot-check across the full range

Do not just check the first few items. OCR errors vary by hand, page quality, and ink. Metadata patterns change over decades of correspondence. A sample of 10 items from the start of a corpus tells you little about item 250. Sample systematically: beginning, middle, end, and any items that look unusual.

### Check for meaningful erasure

Did the cleaning process "correct" a variant spelling that was historically significant? Did date normalisation impose a modern calendar on a source using a different reckoning? Did categorisation impose modern distinctions (personal vs. official, secular vs. religious) that do not fit the material?

### Document every step

Record what went in, what rules were applied, and what came out. Keep transformation scripts in version control alongside the data they produce. Your future self --- and your reviewers --- will thank you.

---

## Recording provenance

If you use LLM output in published research or teaching, document how it was used. Good provenance records include:

- **The date** of the interaction
- **The model** used (e.g. Claude Fable 5 or Opus 4.x, a GPT-5.6 model, Gemini 3.x) and the interface (Chat, API, Code, etc.)
- **The prompt** you gave (or a summary of it)
- **What you used** from the response
- **How you verified it** --- what checks you ran, what sources you consulted

!!! essential "Essential"
    Some journals and institutions now require disclosure of AI use. Even where it is not required, transparency about your methods strengthens your work. See [Disclosure & Ethics](disclosure.md) for templates and guidance.

---

## Cross-model checking

Running the same query through two or more independent models is one of the strongest verification tools available. Where models agree, your confidence should increase (though both could be drawing from the same flawed source). Where they disagree, the disagreement itself is informative and worth investigating.

This is especially valuable for:

- **Translation:** Compare outputs across models and against published translations. Divergences flag passages requiring expert attention.
- **Factual claims:** Independent agreement increases confidence. Independent disagreement demands investigation.
- **Analysis and interpretation:** Different models may surface different aspects of a text. The combination gives you a richer picture.

See [Multi-Model Strategy](multi-model.md) for more on this approach.

---

## The bottom line

Treat every LLM output as you would an unsourced Wikipedia article written by a confident undergraduate: potentially useful, frequently correct in broad strokes, but not something you would cite without checking. The intelligence is real. The reliability is not.

!!! panic "Don't Panic"
    None of this means LLMs are useless for scholarship. It means they are tools, not oracles. The verification practices described here are the same habits of critical evaluation you already apply to sources. The only new element is that the source is unusually confident and unusually willing to fabricate.
