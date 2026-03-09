---
section: bootcamp
title: AI Bootcamp
description: "Ten structured experiments for humanities scholars to build genuine AI fluency — from foundational setup to advanced critical methods."
last_verified: 2026-03-08
---

# The 10-Experiment AI Bootcamp

*A structured path to advanced AI fluency*

This bootcamp is a series of ten practical experiments, each designed to build a specific AI skill relevant to humanities research and teaching. It is a companion to the rest of this guide: where the other pages provide theoretical foundations, prompting principles, and reference material, these experiments give you structured, hands-on practice.

**This page is for those who want to lean into AI usage.** It is not an expectation. Many colleagues will reasonably decide that a few of these experiments are enough, or that none of them suit their work right now. That is fine. You can do one, three, or all ten --- and you can come back to any of them later. The experiments are designed to stand alone as well as to build on each other.

!!! essential "How this works"
    - Each experiment takes **2--4 hours** of focused work.
    - Do **no more than one or two per day**. The skills compound better with time to reflect between sessions.
    - Every experiment produces a **concrete, reusable output** --- not just knowledge, but tools and workflows you will actually use.
    - By the end, you will be able to use AI tools **more effectively than the vast majority of people who currently advocate for them**. Most AI commentary focuses on surface-level use. These experiments build genuine depth.

!!! panic "Don't Panic"
    **You do not need to do all ten.** Here are three sensible paths:

    - **Core track (6--8 hours):** Experiments 0, 1, and 2 --- gives you the foundational calibration skills that improve everything else.
    - **Add by role:** Teaching --> add 5 + 9. Research --> add 3 + 4. Public-facing work --> add 8 + 10.
    - **Full bootcamp (~30 hours):** All 10 experiments plus the bonus, for those who want comprehensive fluency.

!!! offtrack "Or start from a pain point"
    - "I'm buried in literature" --> [Experiment 4](#experiment-4-the-literature-navigator)
    - "My students are using AI to cheat" --> [Experiment 5](#experiment-5-the-teaching-laboratory) (Option D)
    - "I don't trust AI outputs" --> [Experiment 9](#experiment-9-the-critical-methods-workshop)
    - "I need to write faster" --> [Experiment 8](#experiment-8-the-writing-studio)
    - "I have images or manuscripts to process" --> [Experiment 7](#experiment-7-visual-and-material-sources)
    - "I want to understand what AI actually is" --> [Experiment 0](#experiment-0-the-scholars-setup) + [1](#experiment-1-the-research-partner)

The experiments are numbered but modular. You can reorder them to suit your needs, though the sequence is designed so that later experiments build on skills from earlier ones.

!!! leifnote "Leif's Notes"
    **On collaboration:** These experiments are designed for self-guided work, but many of them become more valuable when done alongside a colleague. Where this is the case, each experiment includes an optional "If collaborating" note. You do not need a partner --- but if you have one, the comparative perspective significantly deepens the learning.

!!! leifnote "Leif's Notes"
    **On revisiting these experiments:** AI capabilities change rapidly. An experiment you did three months ago may yield substantially different results with a newer model or tool. While AI continues to evolve at pace, periodically repeating these experiments --- even quickly --- is one of the most reliable ways to stay abreast of major developments without having to track every product announcement. The structure remains useful even as the technology shifts beneath it.

### Acknowledgement

This bootcamp is inspired by and adapted from "[The 10-Weekend AI Resolution](https://aidbnewyear.com)" created by *The AI Daily Brief* podcast. Their original framework --- focusing on practical weekend projects with clear deliverables --- has been reimagined here for the specific needs of humanities scholarship. While theirs was built for general AI fluency and productivity (and also worth looking at), this version addresses the particular challenges of research, teaching, and public scholarship in the humanities, and restructures the pedagogical approach around self-contained experiments with explicit learning objectives.

---

## Contents

- [Experiment 0: The Scholar's Setup](#experiment-0-the-scholars-setup)
- [Experiment 1: The Research Partner](#experiment-1-the-research-partner)
- [Experiment 2: The Source Analysis Laboratory](#experiment-2-the-source-analysis-laboratory)
- [Experiment 3: The Argument Workshop](#experiment-3-the-argument-workshop)
- [Experiment 4: The Literature Navigator](#experiment-4-the-literature-navigator)
- [Experiment 5: The Teaching Laboratory](#experiment-5-the-teaching-laboratory)
- [Experiment 6: The Data Humanities Workshop](#experiment-6-the-data-humanities-workshop)
- [Experiment 7: Visual and Material Sources](#experiment-7-visual-and-material-sources)
- [Experiment 8: The Writing Studio](#experiment-8-the-writing-studio)
- [Experiment 9: The Critical Methods Workshop](#experiment-9-the-critical-methods-workshop)
- [Experiment 10: Research Infrastructure and Public Scholarship](#experiment-10-research-infrastructure-and-public-scholarship)
- [Bonus Experiment: The Agent Evaluation](#bonus-experiment-the-agent-evaluation)
- [Completion Checklist](#completion-checklist)
- [After the Bootcamp](#after-the-bootcamp)

---

## Experiment 0: The Scholar's Setup

**Time:** 30--60 minutes

### What you will do

Set up the workspace, accounts, and materials you will need for the rest of the bootcamp.

### Why this matters

Having your infrastructure ready before you begin means each subsequent experiment starts with doing, not configuring. It also forces you to identify the research questions and materials you will work with throughout.

### What you will learn

Which tools are available to you, how to organise AI-related work, and how to evaluate your own progress systematically.

### The work

*What you'll need: A computer with internet access. Accounts for the AI tools you intend to use (free tiers are fine to start). A folder structure for organising outputs. 2--3 research questions or teaching topics you are currently working on.*

!!! caution "Caution"
    **Review data boundaries first.** Before uploading any material to AI tools, read the [Data Governance](../essentials/data-governance.md) page. Establish what you will and will not share with commercial AI services. Check whether your institution provides AI access under procurement agreements with stronger data protection --- if so, use those tools for anything sensitive. This is the single most important step in your setup.

**Create your workspace:**

- Set up a "Scholarly AI Lab" folder structure on your computer or cloud storage
- Create subfolders for each experiment's outputs
- Set up accounts for the tools you intend to use (e.g. Claude Projects, NotebookLM, ChatGPT)

!!! offtrack "Off the Beaten Track"
    **A note on tool types:** These tools have different architectures and suit different tasks. **Chat-based tools** (Claude, ChatGPT) are conversational and good for dialogue, context documents, and argument development. **Grounded/source-based tools** (NotebookLM) work from uploaded documents and are better for source analysis where you need the AI to stay close to specific texts. **Institutional tools** (Microsoft Copilot) operate within your university's data tenancy --- see the platform manuals. You do not need all of these; use what you have access to.

**Gather your research materials:**

- Identify 2--3 current research questions you are actively working on
- Collect sample corpora: texts, data, sources you know well enough to evaluate AI outputs against
- Note teaching contexts where AI might be useful

**Save this evaluation rubric** --- use it after each experiment:

- **Scholarly value** (1--5): Does this advance your research or teaching?
- **Time efficiency** (1--5): Does this save time compared to your existing workflow?
- **Repeatability:** Could you use this workflow again without rebuilding it?
- **Critical rigour:** Does this maintain the standards of your discipline?

---

## Experiment 1: The Research Partner

**Time:** 2--4 hours | **Builds on:** Experiment 0

### What you will do

Write a detailed context document that makes an AI understand your field, then test it with real research questions.

### Why this matters

Most AI interactions fail because the AI lacks disciplinary context. A good context document transforms generic responses into ones that engage with your field's methods, debates, and standards. Build this foundation and every subsequent experiment improves exponentially.

### What you will learn

How to articulate disciplinary knowledge in a form AI can use; how context-setting changes output quality; the difference between a generic AI response and one grounded in your field.

### Done when

You can ask a complex research question and get responses that demonstrate genuine understanding of your field's methods and debates. As a concrete test: ask the AI to summarise the key methodological debates in your field, name three canonical positions, and define five field-specific terms. Score the response against your own knowledge --- if it gets the broad strokes right (even if imperfect on detail), your context document is working.

### The work

*What you'll need: A paid-tier LLM account (Claude or ChatGPT recommended). Your research interests, methodological commitments, and key debates in your field --- enough to write 2--3 pages of context. Three research questions of varying complexity to test with.*

**Write your context document** (2--3 pages). Use this skeleton as a starting point:

1. **Research areas and current projects:** What are you working on? What questions drive your work?
2. **Methodological approaches:** How does your field investigate its questions? What counts as evidence?
3. **Key debates:** What are the live scholarly disagreements? Who are the major positions associated with?
4. **Citation and conventions:** What citation style do you use? What conventions govern good work in your field?
5. **Quality markers:** What distinguishes excellent scholarship from competent scholarship in your discipline?

**Test drive** --- run three research queries:

1. A straightforward factual question in your area
2. A methodological question about how to approach a problem
3. A complex interpretive question that requires disciplinary judgement

**Iterate:** Refine the context document based on what the AI misunderstands. Note which gaps in your framing led to the weakest responses.

!!! leifnote "Leif's Notes"
    **If collaborating:** Swap context documents with a colleague and run the same research question through each. The difference in the AI's responses reveals how much the framing --- not just the question --- shapes the output. This is one of the most powerful ways to understand AI subjectivity, and it often reveals assumptions in your own framing you had not noticed.

### Going further

- Create separate context profiles for different research projects
- Include examples of your own published writing as stylistic reference
- Add field-specific terminology glossaries

---

## Experiment 2: The Source Analysis Laboratory

**Time:** 2--4 hours | **Builds on:** Experiment 1

### What you will do

Use AI to perform a multi-source comparative analysis addressing a real research question, then verify its findings against the sources themselves.

### Why this matters

This is where AI excels for humanists: processing multiple texts simultaneously, identifying patterns, suggesting interpretive possibilities --- while you maintain critical oversight. The combination of computational breadth and scholarly depth is genuinely powerful.

### What you will learn

How to frame source analysis tasks for AI; how to evaluate AI-generated textual observations; the workflow of using AI as a research assistant for close reading at scale.

### Done when

You have used AI to identify patterns, contradictions, or connections you had not noticed, and verified them against the sources.

### The work

*What you'll need: 3--5 primary or secondary sources (PDFs or text) related to a current research question. Your context document from Experiment 1. Sources you know well enough to verify AI claims against.*

**Gather sources:** 3--5 primary or secondary sources related to a research question you are working on.

**Upload and frame:** Provide the sources with scholarly framing:

- What are you investigating?
- What debates does this intersect with?
- What are you specifically uncertain about?

**Iterative analysis** (use a two-stage workflow):

1. **Stage 1 --- Claims with anchors:** Ask the AI to identify patterns and comparisons, but require it to quote or give specific textual references (page, line, passage) for every claim. Do not proceed to interpretation until you have a list of anchored claims.
2. **Stage 2 --- Interpretation after verification:** Check the anchored claims against your sources. Verify at least 10 claims. If more than 2 are wrong, reframe your prompt or reduce the scope before continuing --- the AI is not reading closely enough.

**Document:** Write a research memo with:

- AI-identified patterns and where you found them in the sources
- Your verification process and its results
- Interpretations you accept, reject, or wish to investigate further, and why

!!! leifnote "Leif's Notes"
    **If collaborating:** Have a colleague run the same sources through the same analysis framework independently. Compare your verification memos: did the AI identify the same patterns for both of you? Where do your assessments of the AI's accuracy diverge? The differences are often revealing.

### Going further

- Work with texts in multiple languages
- Compare AI analysis with existing published scholarship on the same sources
- Create a reusable analysis template you can apply to future source sets

---

## Experiment 3: The Argument Workshop

**Time:** 2--4 hours | **Builds on:** Experiments 1--2

### What you will do

Develop a scholarly argument, then use AI to stress-test it by generating substantive counter-arguments, identifying logical gaps, and suggesting alternative interpretations.

### Why this matters

Academic arguments require dialectical development. AI can generate serious objections and alternative perspectives without the social constraints of asking colleagues --- and it is available at any hour. The goal is a stronger argument than you started with.

### What you will learn

How to use AI as a critical interlocutor; how to structure prompts that generate genuine intellectual challenge rather than agreement; the difference between useful criticism and AI-generated noise.

### Done when

You have a stronger argument than you started with, having identified and addressed its weaknesses through AI-assisted dialectic.

### The work

*What you'll need: A thesis or argument you are developing --- ideally from current research or a work in progress. Your context document from Experiment 1. Willingness to have your argument challenged.*

**Articulate your argument:** State your thesis and main supporting points clearly.

**Devil's advocate:** Ask the AI to:

- Challenge your premises
- Identify logical gaps
- Suggest alternative interpretations of your evidence
- Point out evidence you have not considered

!!! essential "Essential"
    **Quality constraint:** When asking for perspective-based critiques (e.g. "critique this from a post-colonial perspective"), require each critique to identify at least two specific "if X, then Y" vulnerabilities in your argument and propose concrete revisions. Vague thematic commentary ("this doesn't account for power dynamics") is not useful --- specific structural weaknesses and proposed fixes are.

**Find the failure:** Deliberately probe for a case where the AI's disciplinary logic breaks down. Ask it to defend a position you know to be weak, or to critique an argument in a way that requires specialist knowledge it lacks. Identifying *where* and *why* AI reasoning fails in your field is often more instructive than finding where it succeeds --- and it calibrates your trust for future interactions.

**Refine:** Revise your argument to address the strongest objections.

**Map:** Create an argument structure showing:

- Main claims and supporting evidence
- Anticipated objections
- Your responses to those objections

!!! leifnote "Leif's Notes"
    **If collaborating:** Present your argument to a colleague and have *both* of you independently ask the AI to critique it. Then compare: did the AI find the same weaknesses for both prompts? Did your colleague spot things the AI missed, or vice versa? This triangulation --- human, human, AI --- is remarkably effective for argument development.

### Going further

- Ask AI to adopt specific scholarly perspectives (feminist, post-colonial, formalist) and critique your argument from each --- using the quality constraint above
- Test your argument against different theoretical frameworks
- Generate a bibliography of counter-positions to read

---

## Experiment 4: The Literature Navigator

**Time:** 2--4 hours | **Builds on:** Experiments 1--3

### What you will do

Use AI to map the scholarly landscape around a research question --- not to generate citations, but to formulate better search strategies and identify the shape of relevant conversations.

### Why this matters

Literature reviews are time-intensive but essential. AI is poor at generating accurate citations (it hallucinates references freely), but it is surprisingly good at mapping intellectual territory: identifying schools of thought, suggesting search terms, and describing the structure of debates. The key is to use AI for what it does well and real bibliographic databases for what it does not.

### What you will learn

How to use AI for bibliographic discovery strategy (rather than citation generation); how to combine AI with proper bibliographic tools; how to build a research landscape map efficiently.

### Done when

You can articulate where your research fits in existing scholarship and what gaps it addresses, supported by a verified annotated bibliography assembled using proper databases.

### The work

*What you'll need: 5--10 key works in your area that you already know. Access to bibliographic databases (library discovery system, Scopus, JSTOR, or your field's equivalent). A reference manager (e.g. Zotero) is helpful but not essential.*

**Seed bibliography:** Start with 5--10 key works in your area that you already know.

**Use AI for discovery strategy** (not citation generation):

- **Query formulation:** Ask AI to suggest search terms, controlled vocabulary, key names, and relevant venues (journals, book series, conference proceedings) based on your seed bibliography
- **Landscape mapping:** Ask AI to describe the main schools of thought, methodological camps, and intellectual debates that intersect with your topic
- **"Who and where to look":** Ask for suggestions of scholars, research groups, journals, and societies working in adjacent areas you may not have explored

!!! caution "Caution"
    **Do not ask AI to generate a bibliography for you.** It will produce plausible-looking references that may not exist. Use AI to tell you *where* and *how* to look, then do the actual searching in proper bibliographic databases: your library discovery system, Scopus, Web of Science, JSTOR, MLA International Bibliography, L'Annee philologique, or the equivalent tools for your field.

**Search and verify:** Take the AI's suggestions to your databases. For each strand of the conversation AI identified:

- Find real publications using the search terms and names AI suggested
- Assess their relevance and scholarly credibility
- Note where AI's map of the field was accurate and where it was misleading

**Map:** Create a research landscape --- this could be:

- A concept map showing how different conversations relate to each other
- A table with columns for school/approach, key figures, key works, and relevance to your project
- A tagged collection in a reference manager (e.g. Zotero groups or tags)

### Going further

- Compare landscape descriptions from different AI models --- where do they agree and disagree?
- Build discipline-specific search strategies that combine AI with your field's bibliographic tools
- Create an ongoing research alert system using database alerts alongside periodic AI check-ins

---

## Experiment 5: The Teaching Laboratory

**Time:** 2--4 hours | **Builds on:** Experiment 1

### What you will do

Build one AI-powered teaching tool that you will actually use this term. Choose from assignment design, feedback systems, discussion preparation, or assessment hardening.

### Why this matters

Teaching consumes enormous time. Strategic AI use can improve pedagogical quality while reducing mechanical labour --- if done thoughtfully and with clear boundaries about what AI should and should not do in educational contexts.

### What you will learn

How to apply AI to teaching tasks while maintaining pedagogical integrity; where AI genuinely saves time versus where it creates false efficiency; how to set appropriate boundaries for AI in your teaching.

### Done when

You have tested an AI teaching tool with real course materials and trust it enough to use with students. You have also produced a student-facing disclosure statement and an instructor-only failure modes sheet.

### The work

*What you'll need: A current syllabus, learning outcomes, or module description. Sample student work (anonymised) if testing feedback tools. Existing assignment briefs you are willing to redesign. A clear sense of what students should actually learn from the task.*

Choose **one** of the following focuses:

**Option A --- Assignment Design:**

- Upload your syllabus and learning outcomes
- Generate assignment options with AI
- Critically evaluate their pedagogical value
- Refine one assignment for actual use

**Option B --- Feedback System:**

- Create an AI-assisted feedback rubric
- Test it on sample student work
- Refine to maintain your personal voice and standards
- Document appropriate use guidelines

**Option C --- Discussion Preparation:**

- Build an AI discussion partner for text analysis
- Test with actual course readings
- Create question sequences that build in complexity
- Plan how to integrate with seminar teaching

**Option D --- Assessment Hardening:**

- Take an existing assignment and test it: could a student use AI to produce a passable submission?
- Redesign the assignment so that it remains meaningful even with AI assistance
- Consider: oral components, process portfolios, personal reflection, in-class elements, or tasks that require access to specific unpublished materials
- Test the redesigned assignment against AI to confirm it resists shallow automation

!!! essential "Essential"
    **Required outputs** (whichever option you choose):

    1. A **student-facing disclosure statement**: how AI was used in designing the material, and what the expectations are for students' own AI use
    2. An **instructor-only failure modes sheet**: what the AI tends to get wrong for this type of material, and what you have decided not to outsource

!!! leifnote "Leif's Notes"
    **If collaborating:** Test each other's AI teaching tools. A colleague from outside your specific area can give you valuable perspective on whether the tool makes sense to someone who does not share all your assumptions --- which is closer to the student experience.

### Going further

- Build an AI teaching assistant trained on your course materials
- Create a student-facing AI research guide for your courses
- Develop a critical AI literacy module for your students

---

## Experiment 6: The Data Humanities Workshop

**Time:** 2--4 hours | **Builds on:** Experiments 1--2

### What you will do

Analyse your own research data with AI --- whether that is a textual corpus, a spreadsheet of manuscripts, network data, or spatial information --- and produce actionable insights.

### Why this matters

Humanists increasingly work with data, but often lack computational skills for analysis. AI bridges this gap, allowing you to ask analytical questions of your data in natural language and get results you can evaluate with your domain expertise.

### What you will learn

How to frame data analysis questions for AI; how to critically evaluate AI-generated analysis; the workflow of using AI as an analytical partner for humanities data.

### Done when

You have identified patterns or relationships in your data you had not seen before, and verified they are real.

### The work

*What you'll need: A dataset you are working with --- spreadsheet, textual corpus, metadata, network data, or similar. An LLM with code execution (Claude or ChatGPT paid tier). Specific research questions about your data. Enough familiarity with the data to spot-check results.*

**Gather data:** Collect research data you are currently working with (spreadsheet of manuscripts, textual corpus, network data, metadata, etc.).

**Frame analysis:** Articulate specific research questions about your data.

**AI analysis:**

- Upload data with scholarly context
- Request specific analytical approaches
- Ask for pattern identification
- Generate visualisations

**Critical verification** --- your deliverable must include:

- At least one **sanity-check** you can interpret directly from the raw data (counts, distributions, simple cross-tabulations) --- something you can verify without trusting the AI's analysis
- At least one **manual spot-check procedure** documented: how did you verify a specific finding against the underlying data?
- A **method validity note**: what assumptions did the AI make about your data? Were those assumptions appropriate? (For example: did it treat categorical data as numerical? Did it assume completeness where your data has gaps?)

**Insights memo:** Write up findings with a methodology section explaining what AI did and how you verified it.

### Going further

- Compare analyses from different AI models
- Build a reusable analysis pipeline for similar datasets
- Create data visualisations suitable for publication

---

## Experiment 7: Visual and Material Sources

**Time:** 2--4 hours | **Builds on:** Experiments 1--2

### What you will do

Use AI to work with images: analyse visual sources, extract text from manuscripts or archival documents, and generate images for teaching or reconstruction. Then evaluate where AI helps, where it misleads, and what verification is needed.

### Why this matters

Humanities scholars routinely work with visual and material evidence --- photographs of artefacts, manuscript pages, maps, artworks, archaeological sites. AI capabilities in image recognition, handwriting transcription, and image generation have advanced rapidly, but each has distinct strengths and failure modes that you need to understand through direct testing.

### What you will learn

How to use AI for image analysis and description; the current state of OCR and handwritten text recognition (HWR) for historical documents; how to evaluate and use AI-generated images responsibly; where these tools save real time and where they produce confident errors.

### Done when

You have tested AI on all three visual tasks below using materials from your own field, and can articulate where it helps, where it misleads, and what verification is needed for each.

### The work

*What you'll need: Photographs of artefacts, manuscripts, artworks, or other visual sources from your field. An LLM that accepts image uploads (Claude or ChatGPT paid tier). For OCR/HWR testing, a document you can check the transcription against. For image generation, access to a tool that generates images (ChatGPT/DALL-E, Midjourney, or similar).*

**Image analysis:**

- Upload photographs of artefacts, artworks, architectural features, or archaeological sites
- Ask AI to describe, identify, and contextualise what it sees
- Compare the AI's observations with your own expert knowledge --- what does it get right? What does it miss or misidentify?
- Test whether it can distinguish stylistic features, date objects, or identify iconographic elements

**Text extraction (OCR / HWR):**

- Scan or photograph a manuscript page, archival document, or historical printed text
- Use AI to transcribe the text
- Compare the transcription against your own reading or an existing published edition
- Note error patterns: what kinds of characters, ligatures, abbreviations, or damage does it handle well or poorly?

**Image generation:**

- Generate a teaching illustration, historical reconstruction, or explanatory diagram
- Evaluate the result for factual accuracy and appropriateness --- are architectural details correct? Are clothing and objects period-appropriate? Does the image contain anachronisms?
- Consider the ethical dimensions: is the generated image misleading? Would students or readers understand it as an AI reconstruction rather than a photograph or scholarly illustration?

**Critical evaluation:** For each of the three tasks, document:

- Accuracy: how reliable was the output?
- Failure modes: what kinds of errors did it make?
- Appropriate use cases: where would you trust this in your workflow?

!!! leifnote "Leif's Notes"
    **If collaborating:** Upload the same image or manuscript page and compare results. A colleague with different expertise may notice errors you would miss --- an art historian and an archaeologist will catch different things in the same photograph. This cross-disciplinary checking is especially valuable for OCR/HWR, where domain knowledge of abbreviation conventions and scribal hands matters enormously.

### Going further

- Compare OCR/HWR results across different tools and models (Claude, ChatGPT, specialised tools like Transkribus)
- Build a workflow for batch processing archival images
- Create guidelines for responsible use of AI-generated images in teaching materials and publications

---

## Experiment 8: The Writing Studio

**Time:** 2--4 hours | **Builds on:** Experiments 1, 3

### What you will do

Draft a section of a paper using AI as a writing partner --- not a ghostwriter --- and document the process so you understand exactly how AI contributed.

### Why this matters

Writing is thinking. AI cannot do your thinking, but it can help you think through problems, organise ideas, and overcome blocks. The challenge is using it in ways that accelerate without replacing your intellectual work.

### What you will learn

How to use AI at different stages of the writing process (pre-writing, drafting, revision); how to maintain your scholarly voice; where the line falls between AI assistance and AI authorship in your own practice.

### Done when

You have written something you are proud of, faster than usual, while maintaining your scholarly voice --- and you can articulate exactly how AI helped.

### The work

*What you'll need: A section of a paper, chapter, or other scholarly text you are working on --- something where you have ideas but need to develop them. Your context document from Experiment 1. Familiarity with your publisher's or institution's AI disclosure policy.*

**Pre-writing** --- use AI for:

- Articulating half-formed ideas through dialogue
- Generating organisational structures
- Identifying what you are actually trying to argue

**Drafting** --- AI assists with:

- First-pass structural outlines
- Alternative phrasings when you are stuck
- Identifying logical gaps in your draft

**Revision** --- AI helps to:

- Identify unclear passages
- Suggest structural improvements
- Spot repetition or logical leaps

**Document the process:** Maintain a log with columns for: the prompt you gave, the model or tool used, a summary of the output, what you used from it, what you changed, and what you verified. This turns a vague sense of "I used AI" into a concrete, auditable record.

!!! caution "Caution"
    **Critical boundaries:**

    - As a default, do not paste AI-generated text into scholarly work without substantial revision. If you do use AI-generated phrasing, treat it as you would any quoted assistance: revise heavily, verify all claims, and disclose per your journal's or institution's policy.
    - Always check your publisher's and institution's policies on AI disclosure --- these vary and are evolving.
    - Maintain your voice and your argument throughout.
    - AI accelerates; it does not replace.

### Going further

- Create a style guide based on your published work to help AI match your voice
- Build paper-specific context documents
- Develop a personal AI writing ethics framework

---

## Experiment 9: The Critical Methods Workshop

**Time:** 2--4 hours | **Builds on:** All previous experiments

### What you will do

Systematically interrogate AI for bias, hallucination, and limitation. Build a critique framework that you can apply to all future AI use.

### Why this matters

Humanists are trained in source criticism. This experiment applies those same skills to AI itself. Without a critical apparatus, even sophisticated AI use risks incorporating unexamined biases and errors into your scholarship.

### What you will learn

How to detect systematic bias in AI outputs; how to test for hallucination in your field; how to build appropriate trust levels for different AI use cases; how to apply source-critical methods to computational tools.

### Done when

You can systematically assess reliability, bias, and limitations of AI-generated content, and have a documented framework for doing so.

### The work

*What you'll need: Access to at least two different LLMs (e.g. Claude and ChatGPT). A topic in your field where you know the correct answers and the landscape of scholarly positions. A contested or controversial topic where you can assess bias. Time to run the same prompts multiple times (AI outputs vary between runs).*

**Bias detection** (use a minimal methodology):

- Choose a prompt relevant to your field and fix both the prompt text and the context you provide
- Run the same prompt across at least two different models
- Run it at least 3 times per model --- a single run proves very little, because AI outputs vary between runs
- Compare responses using a small rubric: accuracy, hedging behaviour, citation quality, and bias indicators
- Test contested or controversial topics in your field, where you know the landscape of positions well

**Hallucination testing:**

- Request citations and verify each one
- Ask about obscure topics in your field where you know the correct answers
- Identify where AI expresses confidence without accuracy

**Source verification protocol:**

- Develop a checklist for verifying AI-sourced information
- Create a verification workflow you can use routinely
- Build "trust levels" for different categories of AI use

**Critique framework:** Document:

- When to trust AI outputs and when not to
- Required verification steps for different use cases
- Known limitation patterns in your field
- Ethical red lines for your own practice

!!! leifnote "Leif's Notes"
    **If collaborating:** Run the same bias-detection prompts independently and compare your rubric scores. Disagreements about what counts as "biased" or "accurate" are themselves valuable data --- they reveal where disciplinary judgement shapes the evaluation, not just the AI output. Building a shared critique framework with colleagues is one of the most productive outcomes of this experiment.

### Going further

- Write up your framework as a methodology note for publication
- Create a discipline-specific AI evaluation rubric
- Share your framework with colleagues and refine collaboratively

---

## Experiment 10: Research Infrastructure and Public Scholarship

**Time:** 2--4 hours | **Builds on:** All previous experiments

### What you will do

Integrate the tools, workflows, and documents from the previous nine experiments into a coherent personal research infrastructure --- then test it by producing a piece of public-facing scholarship.

### Why this matters

Individual tools and workflows are useful, but their value compounds when connected. And public engagement is increasingly expected of academics, yet scholarly training emphasises peer communication. This experiment builds the system and stress-tests it against a real output.

### What you will learn

How to design a personal AI research infrastructure; how to create maintainable documentation for your own workflows; how to use AI to translate between academic and public registers while maintaining scholarly integrity.

### Done when

You have a sustainable, integrated system documented clearly enough that you can return to it after months away --- and you have used it to produce at least one piece of public-facing scholarship at whatever level of visibility you are comfortable with.

### The work

*What you'll need: Outputs and workflows from previous experiments. A research finding suitable for a wider audience. A platform or venue for sharing (departmental blog, social media, or simply a colleague to share with). Your critique framework from Experiment 9.*

**System architecture:** Create a structure for:

- **Active research:** Current project folders with context documents
- **Methods library:** Reusable prompts and workflows
- **Teaching resources:** Course-specific materials
- **Public scholarship:** Outreach pipelines (see below)
- **Critical tools:** Verification checklists and evaluation frameworks

**Integration points:** Link:

- Research workflows to writing process
- Teaching preparation to research insights
- Public scholarship to research findings
- Critical methods throughout all workflows

**Public scholarship pipeline** --- test the infrastructure by producing something:

1. Select a research finding suitable for a wider audience
2. Use AI to help translate it: research notes --> plain language summary --> blog post, article, or thread
3. Apply your critical framework: every factual claim must have a source; every interpretation must be clearly labelled as interpretation
4. Share the result at whatever level suits you:
    - **Internal:** share with a colleague or research group for feedback
    - **Semi-public:** draft for a departmental blog or newsletter
    - **Public:** publish on a blog, social media, or external outlet

    Any of these counts as completion.

**Maintenance protocol:**

- **Weekly:** Capture new prompts and workflows that worked
- **Monthly:** Review and refine existing workflows
- **Quarterly:** Update context documents and re-run key experiments
- **Annually:** Reassess infrastructure against current AI capabilities

**Documentation:** Write guides for:

- Quick start: your most common tasks
- Advanced: complex workflows
- Troubleshooting: when things fail
- Ethics: your decision framework

### Going further

- Share your infrastructure with a research group
- Create discipline-specific templates others can adapt
- Build platform-specific public scholarship versions (blog, social media, institutional newsletter)
- Publish your methodology as a scholarly contribution

---

## Bonus Experiment: The Agent Evaluation

**Time:** 2--4 hours | **Builds on:** All previous experiments

### What you will do

Test advanced AI capabilities --- autonomous agents, multi-step reasoning, and tool-using systems --- against real scholarly tasks, and build a decision framework for when to use what.

### Why this matters

AI is moving beyond simple chat into systems that plan, execute, and iterate autonomously (see the [Agentic AI](../guide/agentic.md) page for background). Understanding the distinctions between chatbots, research tools, and autonomous agents helps you deploy AI appropriately and critically.

### What you will learn

What current AI agents can and cannot do with scholarly tasks; how to evaluate agent capabilities systematically; how to decide which tasks to delegate, supervise, collaborate on, or reserve for human work.

### Done when

You have a completed evaluation scorecard and a practical decision framework for which AI capabilities suit which scholarly tasks.

### The work

*What you'll need: Access to multiple AI tools, including at least one with agentic capabilities (see the [Agentic AI](../guide/agentic.md) page). Safe test materials: public domain texts, open-access articles, or synthetic data. Your critique framework from Experiment 9.*

### The gauntlet

Test advanced AI capabilities on these scholarly tasks. Use **safe test materials**: public domain texts, open-access articles, or synthetic data you create for the purpose --- not unpublished or sensitive research.

1. **Literature synthesis:** Process 10+ articles into a research brief
2. **Source discovery:** Find obscure primary sources
3. **Comparative analysis:** Multi-text analysis with citations
4. **Argument development:** Dialectical refinement of a thesis
5. **Peer review simulation:** Critical evaluation of a draft

**Evaluate each on:**

- **Accuracy:** How often does it hallucinate?
- **Depth:** Can it handle disciplinary complexity?
- **Citations:** Are sources real and relevant?
- **Critical thinking:** Does it identify genuine weaknesses?
- **Efficiency:** How does the time and cost compare to doing the task yourself?

**Decision framework** --- classify tasks as:

- **Fully delegated:** Low risk, mechanical tasks
- **Supervised:** AI suggests, you verify
- **Collaborative:** AI as thinking partner
- **Reserved for humans:** Core intellectual work

---

## Completion Checklist

**Foundation**

- [ ] Experiment 0: Infrastructure set up, data boundaries reviewed
- [ ] Experiment 1: Research partner context document written and tested
- [ ] Experiment 2: Source analysis completed and documented

**Core Workflows**

- [ ] Experiment 3: Argument map with counter-arguments produced
- [ ] Experiment 4: Research landscape mapped using AI + bibliographic databases
- [ ] Experiment 5: Teaching tool tested, with disclosure statement and failure modes sheet

**Advanced Methods**

- [ ] Experiment 6: Data analysis with verified insights
- [ ] Experiment 7: Visual and material sources tested across all three tasks
- [ ] Experiment 8: Paper section drafted with documented AI process

**Integration**

- [ ] Experiment 9: Critique framework developed
- [ ] Experiment 10: Research infrastructure documented and public scholarship produced

**Bonus**

- [ ] Agent evaluation scorecard completed

---

## After the Bootcamp

If you complete all ten experiments, you will have built:

- A custom research partner that understands your field
- Proven source analysis workflows
- An argument development process
- Literature mapping capabilities
- AI-enhanced teaching tools
- Data analysis skills
- Visual and material source processing workflows
- Writing acceleration methods
- A critical AI evaluation framework
- An integrated research infrastructure with a public scholarship pipeline

More importantly, you will have:

- **Confidence** in using AI as a scholarly tool, grounded in direct experience
- **Critical perspective** on AI limitations, built through systematic testing
- **Workflows you will actually maintain**, because you built them around your real work
- **Skills that compound** over time, each experiment reinforcing the others
- **Infrastructure that grows** with your research and adapts as AI evolves

!!! essential "Essential"
    **Remember:** This is not about replacing humanistic inquiry with AI. It is about thoughtfully integrating new tools into rigorous scholarly practice. Each experiment maintains the critical, methodologically sophisticated approach that defines humanities scholarship while leveraging AI's genuine strengths.

    And because AI continues to change rapidly, revisiting these experiments periodically --- even briefly --- is one of the most effective ways to keep your skills and intuitions current. The structure endures even as the technology beneath it shifts.
