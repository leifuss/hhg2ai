---
title: Glossary
description: "A master glossary of AI and technical terms for humanities readers — plain-language definitions of the terminology used throughout this guide."
last_verified: 2026-03-08
---

# Glossary

Technical terms used in this guide. On other pages, terms shown in **bold with a dotted underline** have a brief definition on hover (or tap-and-hold on mobile). This page provides fuller explanations.

!!! panic "Don't Panic"
    You do not need to memorise these terms. Use this page as a reference when you encounter unfamiliar vocabulary elsewhere in the guide. The definitions are written for humanities scholars, not computer scientists.

---

Agentic
:   Able to take actions autonomously --- reading files, running commands, making decisions --- rather than only responding to messages. Claude Code and similar tools are agentic; a standard chat interface is conversational.

API
:   Application Programming Interface --- a way for programs to communicate with each other. An AI's API lets software send requests and receive responses programmatically, without using the chat interface.

API key
:   A unique code that identifies you when using an API, like a password for software access. Required if you use AI tools via the API rather than a subscription.

Artifact
:   A standalone output (document, code, interactive page, diagram) displayed in a side panel next to your conversation in Claude Chat. Artifacts can be iterated on and shared via a link.

CLI
:   Command Line Interface --- a text-based way of interacting with your computer by typing commands, as opposed to clicking in a graphical interface. Claude Code CLI runs in a terminal.

CLAUDE.md
:   A plain text file placed in a project directory that gives Claude Code its instructions and context for that project. Functions like "custom instructions" in a Chat Project, but for Code.

Compaction
:   Automatic summarisation of earlier conversation context to free up space within the context window. Triggered by the `/compact` command in Claude Code or automatically when the window fills.

Context window
:   The total amount of text an AI can hold in working memory during a single conversation --- including everything you have said, everything the AI has said, and any uploaded documents. Currently around 200,000 tokens (roughly 150,000 words) for Claude models.

Fine-tuning
:   The process of further training an existing AI model on a specific dataset to specialise its behaviour. Requires technical expertise and is distinct from simply providing context or instructions in a prompt.

Git
:   A version control system that tracks changes to files over time, allowing you to see what changed, when, and by whom, and to undo changes if needed. Essential for agentic AI work.

Grounding
:   Constraining an AI's responses to specific source documents or data, rather than allowing it to draw on its general training. Tools like NotebookLM use grounding to keep responses close to uploaded texts.

Guardrail
:   A constraint built into an AI system to prevent undesired behaviour --- for example, refusing to generate harmful content or staying within a defined topic area. Both built-in (by the AI provider) and user-defined guardrails exist.

Hallucination
:   When an AI generates confident-sounding information that is factually wrong or entirely fabricated. Particularly dangerous with citations, where an AI may produce plausible but fictional references.

Hook
:   A shell command that runs automatically at a specific point in an AI tool's workflow --- for example, before any file is modified. Used to add guardrails and automation.

HTR
:   Handwritten Text Recognition --- technology for automatically transcribing handwritten documents into machine-readable text. Transkribus and kraken are widely used HTR tools in humanities scholarship.

Inference
:   The process of an AI model generating a response to an input. Each time you send a message and receive a reply, the model is performing inference. Costs and speed are measured per inference.

LLM
:   Large Language Model --- the type of AI system that powers tools like Claude and ChatGPT. Trained on vast amounts of text to predict and generate language. "Large" refers to the number of parameters (internal settings) in the model.

MCP
:   Model Context Protocol --- an open standard for connecting AI to external tools and data sources (databases, APIs, file systems). Optional; many projects use AI tools without any MCP servers.

Model
:   The underlying AI system that generates responses. Anthropic offers models at different capability/speed trade-offs: Opus (most capable), Sonnet (balanced), and Haiku (fastest). As of early 2026, the current generation is the Claude 4 family.

npm
:   Node Package Manager --- a tool for installing JavaScript software packages. A legacy method for installing some AI tools; native installers are now typically preferred.

OCR
:   Optical Character Recognition --- technology for converting images of printed text into machine-readable text. Distinct from HTR (handwritten text recognition), though the tools often overlap.

Parameter
:   An internal setting in a neural network that is adjusted during training. Models with more parameters can generally capture more complex patterns, but are slower and more expensive to run. When people say a model has "billions of parameters," this is what they mean.

Prompt
:   What you say to an AI --- your instructions, questions, or requests. The quality of your prompt significantly affects the quality of the AI's output.

Prompt engineering
:   The practice of crafting effective prompts to get better results from AI. Ranges from simple techniques (being specific, providing examples) to complex strategies (chain-of-thought reasoning, role assignment).

Public domain
:   Material that is out of copyright (in the UK, typically 70 years after the author's death) or was never protected by it. Commonly misunderstood: "public domain" does *not* mean "publicly available" --- a journal article you can read online is usually still in copyright. The distinction matters when deciding what can be uploaded to AI tools. See [Data Governance](../essentials/data-governance.md#published-public-domain-and-licensed-material).

RAG
:   Retrieval-Augmented Generation --- a technique where an AI retrieves relevant documents before generating a response, rather than relying solely on its training data. Projects approximate this by giving AI access to your uploaded documents.

Sandbox
:   An isolated environment where code runs without access to your real files or system. Cloud-based AI tools often run in a sandbox; this protects your local machine.

System prompt
:   Hidden instructions that shape an AI's behaviour before a conversation begins. In Chat Projects, these are the "custom instructions" you write. In Code, the `CLAUDE.md` file serves a similar role.

Temperature
:   A setting that controls how random or creative an AI's responses are. Lower temperature produces more predictable, focused responses; higher temperature produces more varied, creative ones. Most chat interfaces do not expose this setting directly.

Token
:   A unit of text processing, roughly three-quarters of an English word. Context windows, usage limits, and API costs are measured in tokens.

Transformer
:   The neural network architecture that underlies modern LLMs. Introduced in 2017, transformers process text by attending to relationships between all words in a sequence simultaneously, rather than reading left-to-right. This is the "T" in "GPT."

Version control
:   A system (usually Git) for tracking changes to files over time, enabling undo, collaboration, and audit trails. Non-negotiable for serious agentic AI work.

VM
:   Virtual Machine --- a computer simulated in software, used to run code in isolation from your real system. Cloud environments (AWS, GCP) provide VMs for running AI tools remotely.

WSL
:   Windows Subsystem for Linux --- a feature that lets Windows run Linux tools and commands natively. An alternative way to run command-line AI tools on Windows.
