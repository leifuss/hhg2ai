---
section: platforms
title: "Glossary"
description: "Technical terms used in the Claude manual, explained for humanities readers."
last_verified: 2026-03-08
---

# Glossary

Part of [A Hitchhiker's Guide to AI for the Humanities](../index.md)

Technical terms used in this guide. On other pages, terms shown in bold with a dotted underline have a brief definition on hover (or tap-and-hold on mobile). This page provides fuller explanations.

Agentic
:   Able to take actions autonomously -- reading files, running commands, making decisions -- rather than only responding to messages. Claude Code and Cowork are agentic; Chat is conversational.

API
:   Application Programming Interface -- a way for programs to communicate with each other. Claude's API lets software send requests to Claude and receive responses programmatically, without using the chat interface.

API key
:   A unique code that identifies you when using an API, like a password for software access. Required if you use Claude Code via the API rather than a subscription.

Artifact
:   A standalone output (document, code, interactive page, diagram) displayed in a side panel next to your conversation in Claude Chat. Artifacts can be iterated on and shared via a link.

CLI
:   Command Line Interface -- a text-based way of interacting with your computer by typing commands, as opposed to clicking in a graphical interface. Claude Code CLI runs in a terminal.

CLAUDE.md
:   A plain text file placed in a project directory that gives Claude Code its instructions and context for that project. Functions like "custom instructions" in a Chat Project, but for Code.

Compaction
:   Automatic summarisation of earlier conversation context to free up space within the context window. Triggered by the `/compact` command in Claude Code or automatically when the window fills.

Context window
:   The total amount of text Claude can hold in working memory during a single conversation -- including everything you've said, everything Claude has said, and any uploaded documents. Currently around 200,000 tokens (roughly 150,000 words) for Claude models.

Git
:   A version control system that tracks changes to files over time, allowing you to see what changed, when, and by whom, and to undo changes if needed. Essential for Claude Code CLI work.

Hallucination
:   When an AI generates confident-sounding information that is factually wrong or entirely fabricated. Particularly dangerous with citations, where Claude may produce plausible but fictional references.

Hook
:   A shell command that runs automatically at a specific point in Claude Code's workflow -- for example, before any file is modified. Used to add guardrails and automation.

MCP
:   Model Context Protocol -- an open standard for connecting Claude to external tools and data sources (databases, APIs, file systems). Optional; many projects use Claude Code without any MCP servers.

Model
:   The underlying AI system that generates responses. Anthropic offers models at different capability/speed trade-offs: Opus (most capable), Sonnet (balanced), and Haiku (fastest). As of early 2026, the current generation is the Claude 4 family.

npm
:   Node Package Manager -- a tool for installing JavaScript software packages. A legacy method for installing Claude Code; the native installer is now preferred.

Prompt
:   What you say to Claude -- your instructions, questions, or requests. The quality of your prompt significantly affects the quality of Claude's output.

RAG
:   Retrieval-Augmented Generation -- a technique where an AI retrieves relevant documents before generating a response, rather than relying solely on its training data. Projects approximate this by giving Claude access to your uploaded documents.

Sandbox
:   An isolated environment where code runs without access to your real files or system. Claude Code on the web runs in a cloud sandbox; this protects your local machine.

System prompt
:   Hidden instructions that shape Claude's behaviour before a conversation begins. In Chat Projects, these are the "custom instructions" you write. In Code, the `CLAUDE.md` file serves a similar role.

Token
:   A unit of text processing, roughly three-quarters of an English word. Context windows, usage limits, and API costs are measured in tokens.

Version control
:   A system (usually git) for tracking changes to files over time, enabling undo, collaboration, and audit trails. Non-negotiable for serious Claude Code work.

VM
:   Virtual Machine -- a computer simulated in software, used to run code in isolation from your real system. Cloud environments (AWS, GCP) provide VMs for running Claude Code remotely.

WSL
:   Windows Subsystem for Linux -- a feature that lets Windows run Linux tools and commands natively. An alternative way to run Claude Code CLI on Windows.
