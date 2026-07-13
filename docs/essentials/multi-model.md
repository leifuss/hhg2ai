---
section: essentials
title: Multi-Model Strategy
description: Using multiple AI models as a verification and enrichment strategy — disagreement as a signal, mixing models within and across providers.
last_verified: 2026-03-08
---

# Multi-Model Strategy

Using more than one AI model is not about finding "the best" model. It is about using **disagreement as a signal**. When two independent models produce the same answer, your confidence should increase. When they disagree, the disagreement itself is informative and worth investigating.

!!! essential "Essential"
    Multi-model checking is one of the strongest verification tools available to you. It is not necessary for every task, but for high-stakes work --- anything you will publish, teach from, or base decisions on --- it is worth the small extra effort.

---

## The principle: triangulation

Humanities scholars already practise triangulation. You do not rely on a single secondary source; you consult multiple authorities and pay attention to where they agree and disagree. Multi-model use applies the same logic to AI outputs.

- **Agreement across models** increases confidence (though both could be drawing from the same flawed training data).
- **Disagreement across models** is a signal that demands investigation. At least one model is wrong, and possibly both.
- **The pattern of disagreement** can be informative. If one model is cautious and the other is confident, that asymmetry tells you something about the reliability of the claim.

---

## Within a model family

Most providers offer multiple models at different capability levels. You can switch between them strategically.

### Claude's model family

| Model | Strengths | Best for |
|-------|-----------|----------|
| **Opus** | Most capable reasoning, nuanced analysis, complex tasks | Close reading, argument evaluation, planning, high-stakes analysis |
| **Sonnet** | Good all-round capability, faster, cheaper | Everyday tasks, drafting, routine analysis, implementation |
| **Haiku** | Fast and cheap, good for simple tasks | Bulk processing, formatting, simple extraction, quick queries |

### Practical combinations

**Draft with Sonnet, refine with Opus.** Get a fast first draft of a summary, translation, or analysis. Then switch to the more capable model for nuanced revision, asking it to identify weaknesses, check claims, or deepen the analysis.

**Bulk process with Haiku, spot-check with Opus.** If you are processing hundreds of items --- OCR cleaning, metadata extraction, date normalisation --- use the cheapest model for the batch run. Then have the most capable model review a sample of the results, focusing on edge cases and items that look unusual.

**Use Opus for analysis, Sonnet for implementation.** When building tools or processing pipelines, use the most capable model to plan the approach and make architectural decisions. Then switch to a mid-range model for the routine work of writing code, formatting output, or executing the plan.

!!! leifnote "Leif's Notes"
    I find the draft-then-refine pattern most useful for translation work. A quick Sonnet translation gives me something to react to, and then Opus can engage with the passages where my reaction is "that does not seem right." It is faster than starting with Opus for the whole text.

---

## Across different providers

For high-stakes work, running the same task through models from different providers gives you genuinely independent signals. Each provider's models are trained on different data with different methods, so their errors are less likely to be correlated.

### Where cross-provider checking is most valuable

**Translation.** Compare Claude's translation with GPT's and Gemini's. Where all three agree, you can be more confident (though none replaces checking the original yourself). Where they diverge, investigate the original text more carefully --- the divergence often flags genuine ambiguity or difficulty.

**Factual claims.** If Claude and GPT independently state the same fact, it is more likely correct than if only one model states it. But both could be drawing from the same flawed source in their training data, so cross-model agreement is evidence, not proof.

**Analysis and interpretation.** Different models may surface different aspects of a text, emphasise different scholarly traditions, or frame arguments differently. The combination gives you a richer picture than any single model.

**Citation checking.** If Claude and GPT both generate the same citation, it is more likely to be real (though you should still verify it). If they generate different citations for the same claim, at least one is fabricated --- and possibly both.

!!! caution "Caution"
    Cross-model agreement is not a substitute for verification against authoritative sources. All major LLMs share large portions of their training data, so they can share the same errors. Two models confidently stating the same wrong date does not make it right. Always check against primary sources or authoritative references.

---

## Practical workflow: the two-model check

A simple protocol for important work:

1. **Run the task on your primary model** (whichever you normally use).
2. **Run the same task on a second model** from a different provider.
3. **Compare the outputs:**
    - Where they agree: higher confidence, but still verify key claims.
    - Where they disagree: investigate. Check the original sources. The disagreement is telling you something.
4. **Record the comparison** in your notes: which models, what they agreed and disagreed on, what you verified and how.

This takes an extra five to ten minutes per task. For routine work, it is unnecessary. For anything you will stake your reputation on, it is cheap insurance.

!!! offtrack "Off the Beaten Track"
    Some researchers are experimenting with automated multi-model pipelines, where one model generates output and a second model critiques it. This can be set up with API access and basic scripting. It is powerful but requires technical setup. For most humanities scholars, the manual two-model check described above is sufficient and requires no technical skills.

---

## When a single model suffices

Multi-model checking is not always necessary. A single model is usually sufficient when:

- **You can verify the output directly.** If you can run the code, check the formatted output, or compare the translation with the original text yourself, a second model adds little value.
- **The task is routine and low-stakes.** Formatting a bibliography, generating discussion questions for brainstorming, drafting a routine email --- these do not need cross-model verification.
- **The output is a starting point, not a finished product.** If you are going to rewrite the output substantially anyway, the precise accuracy of the first draft matters less.
- **Speed matters more than certainty.** For exploratory work, brainstorming, or rapid prototyping, a single model is faster and usually good enough.

!!! panic "Don't Panic"
    You do not need to run every query through three different models. Reserve multi-model checking for the work that matters most: claims you will publish, translations you will cite, data processing that feeds into analysis. For everyday use, a single model with appropriate verification (see [Verification & Citation](verification.md)) is perfectly adequate.

---

## Choosing your models

If you decide to adopt a multi-model approach, a sensible starting combination for humanities work in early 2026:

- **Primary model:** Whichever platform you are most comfortable with (Claude, ChatGPT, or Gemini).
- **Secondary model:** One of the other two major platforms.
- **Optional third:** A local open-weights model (via Ollama or LM Studio) for complete independence from commercial providers and for sensitive data.

The specific models matter less than the principle: independent sources of output, checked against each other and against authoritative references.
