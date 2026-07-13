---
section: essentials
title: Decision Sheet
description: A one-page printable checklist for using AI in academic work — covering data governance, prompting, verification, citation, and disclosure.
last_verified: 2026-07-13
---

# Decision Sheet

A scannable reference for every AI session. Print it, pin it next to your monitor, or keep it open in a tab. Each section links to the full page if you need detail.

!!! essential "Essential"
    This is a checklist, not a comprehensive guide. If any item raises a question you cannot answer, follow the link to the relevant Essentials page.

---

## Before you start

**Data governance** --- [full guide](data-governance.md)

- [ ] **What am I uploading?** Classify the data before you share it with any AI tool.
    - Public domain (out of copyright) or openly licensed (CC)? :material-arrow-right: Proceed.
    - Paywalled / library-subscription material (journal PDF, ebook)? :material-arrow-right: **Not into consumer tools** --- institutional tool only, and check the licence.
    - My own unpublished work? :material-arrow-right: Safe on paid tiers. Check institutional policy.
    - Personal data about identifiable people? :material-arrow-right: Anonymise first. Check institutional policy.
    - Data under embargo, NDA, or restriction? :material-arrow-right: **Do not upload.**
    - Student data? :material-arrow-right: Check GDPR / FERPA compliance.
    - Unsure? :material-arrow-right: **Do not upload until you have checked.**

    !!! note "\"Public domain\" means out of copyright, not merely publicly available"
        A journal article you can read online is usually still in copyright. See [Data Governance](data-governance.md#published-public-domain-and-licensed-material).
- [ ] **Which tier am I on?** Free tiers may use your data for training. Use paid tiers for anything beyond casual experimentation.
- [ ] **Have I checked my institution's AI policy?** Know the rules before you start, not after.

---

## During your session

**Prompting** --- [full guide](prompting.md)

- [ ] **Be specific.** State: audience, format, length, register, scope, purpose.
- [ ] **Provide context.** Discipline, topic, expertise level, constraints. Do not assume the model knows your field.
- [ ] **Give a role** (when helpful). "You are an expert in..." sets expectations about depth and register.
- [ ] **Structure complex prompts.** Use sections: Task, Context, Requirements, Output format.
- [ ] **Provide an example** if you want a specific format or style.
- [ ] **Iterate, do not restart.** Refine with specific follow-up instructions rather than starting over.
- [ ] **Ask for step-by-step reasoning** on complex analytical tasks.
- [ ] **Ask for alternatives.** "Give me three approaches..." surfaces more useful material than a single answer.

**During use --- good habits**

- [ ] **Note the model and date** for anything you might use later.
- [ ] **Save prompts and outputs** for work you may publish or teach from.
- [ ] **Ask the model to flag uncertainty.** "Tell me how confident you are in each claim."

---

## After your session

**Verification** --- [full guide](verification.md)

- [ ] **Check every citation.** Search library catalogues or databases. If you cannot find it, it may not exist.
- [ ] **Cross-reference factual claims** against at least one authoritative source.
- [ ] **For translations,** compare with published translations or check against the original text.
- [ ] **For data transformations,** spot-check across the full range --- not just the first few items.
- [ ] **For code,** run it and test the output. Check edge cases.
- [ ] **Match effort to stakes.** Brainstorming list? Glance. Published claim? Full check. See the [verification ladder](verification.md#the-verification-ladder).

**Citation and provenance** --- [full guide](verification.md#recording-provenance)

- [ ] **Record:** date, model, interface, prompt summary, what you used, how you verified it.
- [ ] **For high-stakes work,** consider a second model from a different provider. See [Multi-Model Strategy](multi-model.md).

**Disclosure** --- [full guide](disclosure.md)

- [ ] **Will you publish or submit this work?** Check journal / publisher AI disclosure requirements.
- [ ] **Draft a disclosure statement** while the details are fresh:
    - What model did you use?
    - For what specific purposes?
    - How did you verify the outputs?
    - Who takes responsibility for the content?
- [ ] **Apply the "so what?" test.** Would knowing about your AI use change how someone evaluates the work? If yes, disclose.

---

## Quick reference: what LLMs get wrong

Keep these failure modes in mind during every session:

| Failure mode | What to watch for |
|--------------|-------------------|
| **Fabricated references** | Plausible but fictional citations. Always verify. |
| **Confident factual errors** | Wrong dates, misattributions, confused details --- stated with certainty. |
| **Anachronistic reasoning** | Modern categories applied to historical contexts. |
| **Smoothed complexity** | Unresolved debates presented as consensus. Ask: "Is there disagreement?" |
| **Translation errors** | Higher error rates for ancient, low-resource, or specialist languages. |

---

## Quick reference: cost awareness

- [ ] **Right model for the task.** Do not use the most expensive model for simple formatting.
- [ ] **Clear prompts save money.** A precise prompt resolves in one round; a vague one takes several.
- [ ] **Batch similar tasks.** One session processing 50 items is cheaper than 50 separate sessions.
- [ ] **Monitor usage** on subscription plans. Heavy sessions reduce your remaining allocation.

See [Cost & Plans](cost.md) for full details.

---

!!! panic "Don't Panic"
    This looks like a lot. In practice, most of it becomes second nature after a few sessions. The three things that matter most: (1) check your data before uploading, (2) verify outputs before using them, (3) disclose your AI use. Everything else is refinement.
