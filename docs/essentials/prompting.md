---
title: Prompting Principles
description: How to communicate effectively with LLMs — being specific, providing context, role-framing, structured prompts, iteration, and step-by-step reasoning.
last_verified: 2026-03-08
---

# Prompting Principles

A "prompt" is what you say to an AI --- your instructions, questions, or requests. The quality of the output depends heavily on the quality of your prompt. This is not about memorising tricks; it is about communicating clearly.

!!! panic "Don't Panic"
    Good prompting is just clear communication. If you can write a good brief for a research assistant, you can write a good prompt. The principles here are common sense, not arcane technical knowledge.

---

## Be specific about what you want

Vague prompts get vague results. The difference between a useless response and a useful one is almost always specificity.

| Weak prompt | Stronger prompt |
|-------------|-----------------|
| "Tell me about Roman trade." | "Summarise the main scholarly positions on the scale of Roman long-distance trade in the 2nd century CE, focusing on the debate between primitivists and modernists. Write for postgraduate students in ancient history. 500 words." |
| "Help me with my essay." | "Read the attached draft of my essay on Thucydides' account of the plague. Identify the three weakest points in my argument and suggest how I could strengthen each one, with reference to specific passages in the text." |
| "Translate this text." | "Translate this passage of Cicero (Pro Archia 14--16) into English. Preserve the periodic sentence structure where possible. Flag any points where the Latin is ambiguous and give alternative renderings." |

### The key dimensions to specify

- **Audience:** Who is this for? (Undergraduates, journal reviewers, a general audience)
- **Format:** What form should the output take? (Prose, table, list, code, outline)
- **Length:** How much? (500 words, one paragraph, a full page)
- **Register:** What tone? (Formal academic, accessible, technical)
- **Scope:** What to include, what to leave out
- **Purpose:** Why do you need this? (Context helps the model calibrate)

!!! essential "Essential"
    **Specificity beats generality.** Not "tell me about Virgil" but "identify three passages in *Aeneid* 6 where Virgil engages with Lucretian material, and explain what is at stake in each engagement." The more precise your question, the more useful the answer.

---

## Provide context

The model does not know your project, your field's conventions, or your institutional context unless you tell it. When starting a new conversation or task:

- **State your discipline and the specific topic.** "I am a medievalist working on twelfth-century Latin liturgical manuscripts" gives the model far more to work with than a cold question.
- **Mention your level of expertise** and the level you expect in the response. "I have reading knowledge of Latin but I am not a linguist" sets useful boundaries.
- **Upload or reference the specific texts** you are working with. Do not rely on the model's training data for primary sources --- provide them directly.
- **Explain constraints.** Word limits, citation styles, institutional requirements, methodological commitments.

!!! offtrack "Off the Beaten Track"
    Most platforms offer ways to set persistent context so you do not have to repeat yourself every session. In Claude, this is handled through Projects (custom instructions + a knowledge base). In ChatGPT, use Custom Instructions or Custom GPTs. These are worth setting up if you use AI regularly for the same kind of work.

---

## Give the model a role

Role-framing can improve outputs: "You are an expert in Byzantine Greek palaeography" or "Act as a critical reviewer for a journal in medieval history." This works because it implicitly sets expectations about register, depth, and the kind of knowledge to draw on.

That said, being specific about the actual task --- what you want, in what format, for what audience --- is usually more effective than role-assignment alone. **Use both together for best results:**

> You are an expert in early modern English literature. I am preparing a lecture for second-year undergraduates on metaphysical poetry. Suggest five close-reading passages from Donne that illustrate different aspects of his use of conceits. For each, give the poem title, the specific lines, and a two-sentence explanation of what makes the passage effective for teaching.

---

## Use structured prompts for complex tasks

For anything beyond a simple question, structure your prompt with clear sections. This is especially important for tasks involving multiple requirements.

```markdown
## Task
Analyse the rhetorical structure of the attached speech.

## Context
This is Cicero's Pro Archia, and I am writing a commentary
for an undergraduate Latin reader.

## Requirements
- Identify the main sections and their rhetorical function
- Note departures from standard forensic oratory structure
- Keep technical terminology to a minimum, but include Latin
  terms for rhetorical figures with English glosses
- Approximately 1,000 words

## Output format
A structured analysis with numbered sections, each containing:
the Latin text reference, the rhetorical function, and commentary.
```

!!! leifnote "Leif's Notes"
    I find that the more complex the task, the more a structured prompt pays off. For simple questions ("When was the Council of Chalcedon?"), just ask. For anything involving analysis, comparison, or multi-step reasoning, take two minutes to structure your prompt. The time investment pays for itself in fewer rounds of correction.

---

## Provide examples

If you want a specific kind of output, show the model what you mean. One concrete example is worth several paragraphs of description.

> I want catalogue entries in the following format:
>
> **CIL VI 1234** | Funerary | Marble | Rome, Via Appia | 1st c. CE
> *D(is) M(anibus) / C. Iulio Felici / vixit annis XXXV / Iulia Secunda / coniugi b(ene) m(erenti) fecit*
> Epitaph for C. Iulius Felix, aged 35, set up by his wife Iulia Secunda. Standard formulae; no unusual features.
>
> Now produce entries for the following ten inscriptions...

This technique --- providing one or more examples of the desired output --- is sometimes called "few-shot prompting." It is one of the most reliable ways to get consistent, well-formatted results.

---

## Constrain the output

Telling the model what **not** to do can be as useful as telling it what to do:

- "Without using psychoanalytic frameworks."
- "Focusing on material evidence rather than literary sources."
- "Do not speculate beyond what the evidence supports."
- "If you are not confident in a claim, say so explicitly rather than presenting it as fact."

Constraints are especially valuable for preventing the model from defaulting to its most generic response patterns.

---

## Iterate, do not restart

If the first response is not quite right, refine it through follow-up instructions rather than rewriting your prompt from scratch:

- "Good, but make the tone more formal."
- "This misses the economic dimension --- add a paragraph on trade implications."
- "Your second point conflates two different arguments. Separate them."
- "This is too long. Cut it to 300 words without losing the main claims."

The model retains the context of the conversation. Iteration is efficient and often produces better results than a single attempt at a perfect prompt.

!!! essential "Essential"
    **Iterate with specific feedback.** "This is wrong" is less useful than "You are treating the corpus as uniform, but periodisation matters --- the pre-war and post-war material should be analysed separately." The more precise your correction, the better the revision.

---

## Ask for step-by-step reasoning

For complex reasoning tasks --- analysing an argument, evaluating evidence, comparing interpretations --- ask the model to work through its reasoning explicitly:

- "Think through this step by step."
- "Show your reasoning before giving your conclusion."
- "Walk me through how you would evaluate this evidence."

This tends to produce more careful, accurate analysis than asking for a direct answer. It also makes errors easier to spot, because you can see where the reasoning goes wrong rather than just getting an incorrect conclusion.

---

## Ask for alternatives

A single answer hides the range of possibilities. Asking for multiple options surfaces more useful material:

- "Give me three different approaches to structuring this argument."
- "Suggest five possible interpretations of this passage, ranging from conventional to speculative."
- "What are three ways a reviewer might object to this claim?"

!!! offtrack "Off the Beaten Track"
    For grant applications and paper submissions, try the persona technique: ask the model to critique your draft from different perspectives. "Read this as a sympathetic reviewer... now as a hostile one... now as someone from an adjacent discipline." The critiques will not replace real peer review, but they can surface angles you had not considered.

---

## What prompting cannot fix

Good prompting improves outputs significantly, but it cannot overcome fundamental limitations:

- **The model cannot know what it does not know.** No prompt will make an LLM give you reliable information about an obscure topic that is poorly represented in its training data.
- **The model cannot access sources it has not seen.** If a key text was not in the training data, the model will not know it, no matter how you ask.
- **The model will still hallucinate.** Better prompts reduce but do not eliminate fabrication. Verification remains essential. See [Verification & Citation](verification.md).

Prompting is about getting the best possible output. Verification is about making sure that output is actually correct. You need both.
