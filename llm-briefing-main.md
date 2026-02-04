# Large Language Models: An Informed-Choice Briefing for Humanities Scholars

*This document was produced through iterative use of Generative AI (Claude Opus 4.5) by Leif Isaksen. Errors remain the human author's responsibility.*

---

**What this document is for**

This briefing aims to help colleagues make informed decisions about whether and how to engage with LLM technologies. It is not advocacy for adoption. Some readers will find these tools useful for specific tasks; others will reasonably conclude they are not worth the trade-offs. Both positions are defensible. What follows is an attempt to characterise what current systems actually do—correcting misconceptions in both directions—so that decisions rest on accurate information rather than outdated impressions or inflated claims.

**What these systems are**

LLMs generate statistically probable text based on patterns in training data. When a user prompts a system, it produces sequences of words that are likely to follow from that input, given everything it encountered during training. This is genuinely remarkable engineering, but understanding the mechanism matters for assessing what these tools can and cannot do.

They are not knowledge bases, though they can reproduce information from training data. They are not reasoning engines, though they can generate text that resembles reasoning. They do not understand arguments, though they produce text that engages with them in ways that can be useful or misleading depending on context.

These systems are capable of things one would not expect—and incapable of things one might reasonably assume they could do. Even their developers do not fully understand where the boundaries lie. The only way to discover what works for particular purposes is experimentation, and what one discovers will change as the technology develops. This is simultaneously one of the frustrations and one of the genuine interests of working with AI.

Current systems (late 2025) differ meaningfully from 2023 versions. Extended reasoning capabilities work through problems step-by-step before responding. Memory systems track context across conversations. Tool use allows searching, code execution, and file generation. These developments make current systems more capable—but capability and reliability are different things. Better outputs make verification-skipping more tempting, which is precisely when vigilance matters most.

LLMs are, however, only one form of AI among many. Computer vision systems are transforming archaeology, art history, and medical imaging. AlphaFold has revolutionised protein structure prediction. Speech recognition and synthesis underpin transcription tools and accessibility services. Recommendation algorithms shape what information reaches us. In humanities research specifically, machine learning powers handwriting recognition, spatial analysis, image classification, and network analysis—often without the "chat interface" that makes LLMs so visible. This document focuses on LLMs because they represent the most immediate point of contact for most colleagues, but they are part of a broader landscape of AI technologies reshaping research and industry.

**Two directions of misconception**

*Under-estimation:* "It just makes things up." "I tried it in 2023 and it was useless." "It is a chatbot." These impressions were partially accurate two years ago and may still apply in some contexts, but current frontier models are substantially more capable. Dismissing the technology based on early experiences means one's assessment is not tracking what now exists.

*Over-estimation:* "It can do research." "It understands what I am asking." "It is approaching human-level reasoning." These claims are also inaccurate. The systems generate plausible text, including plausible-looking citations that do not exist, plausible-sounding arguments with logical gaps, and confident claims that are false. There is no understanding behind the output—statistical pattern-matching can produce remarkably sophisticated text while remaining categorically different from comprehension.

**The philosophical question worth acknowledging**

Some find these tools useful as "critical interlocutors"—generating counterarguments, surfacing overlooked angles, producing text that challenges their thinking. Others find this framing fundamentally confused: can pattern-matched text production constitute genuine dialectical challenge? The system generates critique-shaped text based on statistical patterns, not engagement with an argument's logic. Whether this proves useful likely depends on what one thinks critique actually *is*, and reasonable people disagree. This document takes no position on that question.

**What might be gained**

For those who find these tools useful, value typically emerges in contexts where verification is quick relative to generation: drafting administrative text, reformatting data, generating code for visualisations, producing discussion questions to review and select from, getting a first pass at OCR transcription to verify against originals. Some find argument-testing valuable—presenting a position and asking for counterarguments—while remaining clear that outputs are prompts for their own thinking, not authoritative critique.

**What might be lost**

Even where these tools save time, the displaced time might have been intellectually productive in ways that do not register as efficiency gains. The friction of drafting from scratch might be when one clarifies what one is actually trying to say. Slow engagement with materials is itself scholarly practice, not overhead to be optimised away. The collective effects of normalised AI use in humanities scholarship—on how we think, what we value, what skills atrophy—are genuinely uncertain. Individual modest use may be unproblematic while widespread adoption transforms the field in ways worth resisting. These are serious considerations, not obstacles to get past.

**Ongoing ethical dimensions**

These concerns do not get resolved by deciding to use the tools. They remain live questions that should shape how much and for what one uses these systems, if at all.

*Environmental costs:* Training large models requires enormous computational resources, with significant carbon emissions and water usage for cooling data centres. Inference (generating responses) is less intensive but scales with use. Estimates vary and are contested, but the environmental footprint is real. The question is not whether there is impact but whether the benefit justifies it for particular uses. [MIT Technology Review on AI's carbon footprint](https://www.technologyreview.com/2022/11/14/1063192/were-getting-a-better-idea-of-ais-true-carbon-footprint/) | [Nature on AI energy demands](https://www.nature.com/articles/d41586-024-00478-x)

*Labour and exploitation:* Model development relies on underpaid workers—often in the Global South—for data labelling, content moderation, and the human feedback that shapes model behaviour. These workers are exposed to harmful content and work under poor conditions. Using these tools means benefiting from that labour structure. [Time investigation on OpenAI's Kenyan workers](https://time.com/6247678/openai-chatgpt-kenya-workers/) | [The Verge on data annotation labour](https://www.theverge.com/features/23764584/ai-artificial-intelligence-data-notation-labor-scale-surge-remotasks-openai-chatbots)

*Training data and consent:* Models are trained on text scraped from the internet, books, and other sources—often without consent or compensation for the authors. This includes academic publications, creative works, and personal writing. One's own work may be in training data. The legal and ethical status of this practice remains contested. [The Atlantic on authors and AI training](https://www.theatlantic.com/technology/archive/2023/08/books3-ai-meta-llama-pirated-books/675063/) | [Fairly Trained certification initiative](https://www.fairlytrained.org/)

*Intellectual property:* Related but distinct from training data concerns: models can reproduce substantial portions of copyrighted material, generate text in identifiable authorial styles, and produce outputs that raise questions about originality and attribution. Where the boundaries lie legally and ethically is unresolved. [Harvard Law School on IP and generative AI](https://hls.harvard.edu/today/intellectual-property-experts-discuss-fair-use-in-the-age-of-ai/)

*Concentration of power:* Frontier AI development is concentrated in a handful of well-resourced corporations, primarily in the US and China. This raises questions about whose values shape these systems, who benefits from their deployment, and what happens when critical infrastructure depends on commercial entities with their own interests. [AI Now Institute](https://ainowinstitute.org/)

*Epistemic concerns:* Widespread AI use may affect how we think, write, and engage with knowledge—homogenising prose styles, eroding research skills, changing relationships with uncertainty and authority. These effects are speculative but worth taking seriously. The individual choice to use or not use these tools sits within a collective dynamic that no individual controls.

*Situating AI within broader technology ethics:* These concerns merit attention, but they should not be evaluated in isolation. We rarely subject other technologies to equivalent scrutiny: the carbon footprint of air travel to conferences, the labour conditions behind smartphone manufacture, the environmental costs of constructing and maintaining digital infrastructure, the epistemic effects of social media. This observation cuts two ways. It might suggest that AI-specific concerns are disproportionate to similar concerns we have normalised elsewhere—or it might prompt more critical attention to technologies we have ceased to question. Either way, treating AI as uniquely requiring ethical justification, while other consequential technologies get a pass, risks distorting our assessment. The relevant question is not whether AI has costs and risks—most significant technologies do—but how those costs and risks compare to alternatives, and whether the benefits justify them in particular contexts.

Choosing not to engage with these technologies, whether for any of these reasons or others, is a fully legitimate scholarly position—not technophobia or Luddism, but a considered response to genuine concerns.

**Why awareness matters even without using these tools**

One may reasonably decide that LLMs are not worth engaging with for one's own work. But understanding what they are and what they do remains important for several reasons.

*The pace and direction of change:* AI capabilities have developed faster than most predictions suggested, and this pace shows little sign of slowing. What these systems can and cannot do is a moving target. Decisions made now—by institutions, funders, publishers, and governments—will shape the research and teaching environment for years. Being informed enough to participate in those conversations matters, even if one never opens ChatGPT. [Stanford HAI AI Index Report](https://aiindex.stanford.edu/report/) | [Our World in Data on AI](https://ourworldindata.org/artificial-intelligence)

*The academic workplace:* Universities are developing policies on AI use in research, teaching, assessment, and administration. These policies affect everyone whether or not they use the tools—they shape what is expected of staff, what is permitted for students, how misconduct is defined, and how workloads evolve. Engaging with policy development from an informed position is more effective than abstaining from conversations one will be affected by regardless. [Russell Group principles on AI in education](https://www.russellgroup.ac.uk/policy/policy-briefings/principles-use-generative-ai-tools-education) | [QAA guidance on generative AI](https://www.qaa.ac.uk/sector-resources/generative-artificial-intelligence) | [UNESCO guidance on GenAI in higher education](https://www.unesco.org/en/digital-education/ai-future-learning)

*Students and employability:* Students will encounter these tools in their studies and careers regardless of staff practices. Many already use them. Employers increasingly expect AI literacy as a baseline skill. Understanding what students are working with—and what habits, good or bad, they might be developing—helps one teach and assess effectively. This does not mean endorsing uncritical adoption, but students benefit from faculty who can discuss these tools knowledgeably, including their limitations and risks. [JISC on AI in tertiary education](https://www.jisc.ac.uk/innovation/artificial-intelligence) | [Times Higher Education on graduate AI skills](https://www.timeshighereducation.com/campus/maximising-graduate-employability-through-ai-skills)

*The computational turn beyond computer science:* Quantitative and computational methods are increasingly present across humanities and social sciences—not replacing traditional approaches, but augmenting them and opening new questions. Digital humanities, computational linguistics, cultural analytics, and related fields have been developing for decades; LLMs represent an acceleration and broadening of this trajectory. Understanding the landscape helps one assess what is genuinely new, what is hype, and what methodological questions are at stake. [Debates in the Digital Humanities](https://dhdebates.gc.cuny.edu/) | [Journal of Cultural Analytics](https://culturalanalytics.org/)

*Informed critique requires understanding:* The most effective critics of any technology are those who understand it well enough to identify its actual problems rather than imagined ones. Critique based on misconceptions—whether over- or under-estimating capabilities—is easily dismissed. If one has concerns about AI in scholarship, understanding what one is critiquing strengthens the position.

**Beyond the current moment**

Understanding current capabilities matters, but so does anticipating trajectory. Students beginning undergraduate degrees now will enter the workforce around 2029; doctoral students may not complete until 2030 or later. The AI landscape they will encounter is unlikely to resemble what exists today. Preparing students only for current tools risks obsolescence before graduation. What seems more durable is developing critical judgment about AI capabilities and limitations, understanding when and how to verify outputs, and maintaining the disciplinary skills that allow meaningful evaluation of AI-assisted work. These meta-competencies may prove more valuable than proficiency with any particular system.

Similar considerations apply to research. Projects conceived now will publish results in an environment where AI capabilities have likely shifted substantially. Research questions, methodological choices, and skills development should account not only for what AI currently enables but for plausible near-term developments—while acknowledging genuine uncertainty about what those developments will be.

The chat interface that currently dominates discussion of AI is, in some respects, a distraction. It makes AI visible, bounded, and optional—a tool one deliberately opens and closes. But AI is increasingly embedded in less visible ways: in search engine results, email composition suggestions, document editing, image processing, research databases, citation managers, plagiarism detection, and student support systems. The chat interface may prove to be a transitional form—the visible tip of a broader integration that will be harder to opt out of and harder even to identify. The assumption that one can maintain a clean separation between "using AI" and "not using AI" may become increasingly difficult to sustain as AI becomes infrastructure rather than a discrete tool.

This trajectory raises questions that go beyond individual tool adoption. How should teaching and assessment adapt to an environment where AI assistance is ambient rather than exceptional? What research skills remain essential when AI can perform tasks that previously required years of training? How do we evaluate student work—or our own—when the boundary between human and AI contribution becomes unclear? These are not problems to solve once but ongoing challenges that will require continued attention as the technology and its integration evolve.

**If one chooses to engage**

*Privacy settings:* Most platforms offer options to prevent conversations from being used for training. Check these before inputting any materials. Even with such settings, data passes through commercial servers—decide what level of exposure is acceptable.

*Verification remains essential:* Citations are frequently hallucinated. Factual claims can be confidently wrong. Translations are unreliable. Never treat outputs as authoritative without independent checking. If verification burden exceeds generation benefit, use different methods.

*The verification paradox:* If one can verify what an LLM provides, one might not have needed it for that task. The tool's value lies where checking is faster than creating from scratch, or where outputs prompt one's own thinking rather than substituting for it.

*Iteration matters:* First responses are rarely best. Specific feedback improves outputs. But if one spends more time prompting and refining than doing the task directly, that is information about whether the tool suits that task.

*Responsibility does not diminish:* AI involvement does not reduce intellectual accountability for anything one produces or submits.

**Practical details**

For those who wish to experiment, a separate appendix covers specific use cases, prompting approaches, and verification strategies. It is available alongside this document but deliberately separate—this briefing is for informed decision-making, not technical instruction.

**The essential point**

These are sophisticated text-generation tools with real capabilities and real limitations. They may prove useful for some work and unsuitable for other parts. They may not be worth engaging with at all given one's commitments and concerns. Any of these conclusions is reasonable. What matters is that one's position—whatever it is—rests on accurate understanding of what the technology actually does.
