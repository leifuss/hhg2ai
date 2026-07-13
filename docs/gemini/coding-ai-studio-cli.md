---
section: platforms
title: "Coding & Developer Tools"
description: "Google AI Studio, Gemini CLI, Code Assist, and Jules — developer and coding tools in the Gemini ecosystem."
last_verified: 2026-03-09
---

# Coding and Developer Tools

Most humanities researchers can skip this page entirely. It covers tools designed for software development, scripting, and technical automation. If you are building websites, data pipelines, scripts, or digital tools for your research, read on. Otherwise, [Chat](chat.md) and [Canvas](deep-research-canvas-live.md#canvas) are where you should be.

??? deeper "About this page"
    This page covers technical tools that require comfort with code, the command line, or developer interfaces. Nothing elsewhere in the Gemini section depends on this material. Skip it now and come back when you have a specific need.

---

## Google AI Studio

Google AI Studio is the browser-based environment for experimenting with Gemini models. It sits between the consumer Gemini app and the full API — a prototyping space where you can test prompts, adjust model parameters, and explore capabilities without writing code.

For digital humanities researchers, AI Studio is useful for:

- Testing structured prompts before committing to an API workflow
- Comparing model responses across different parameter settings
- Exploring Gemini's capabilities beyond what the consumer app exposes

AI Studio is free to use. API usage beyond free-tier limits is billed separately from Gemini subscriptions.

---

## Gemini CLI

The Gemini CLI is an open-source command-line agent. It runs in your terminal and can work with local files, execute commands, and handle multi-step tasks — similar in concept to Anthropic's Claude Code.

For digital humanists building tools, processing data, or managing technical projects, the CLI offers full local control, version-control integration, and scriptable workflows.

---

## Code Assist

Code Assist is Google's IDE-integrated coding assistant — available in VS Code, JetBrains, and other editors. It provides code completion, explanation, refactoring, and generation within your development environment.

---

## Jules

Jules is Google's GitHub-connected AI coding agent, roughly analogous to OpenAI's Codex or Anthropic's Claude Code in the agentic coding space. It can work on complex, multi-file engineering tasks directly from your GitHub repositories. Jules is currently bundled with Google AI Ultra.

---

## The Gemini API

The Gemini API is the developer platform for building your own tools, automations, or research workflows on top of Google's models. It is billed separately from Gemini subscriptions. For most humanities researchers, the API is only relevant if you want structured automation, reproducible pipelines, or integration into your own software.

??? deeper "API pricing"
    API pricing is usage-based and separate from any Gemini subscription. Google offers a free tier with daily limits, and paid usage scales with volume. See [Google's API pricing page](https://ai.google.dev/pricing) for current details.

---

## Current model generation

Gemini 3 is the current model generation (as of March 2026). When you encounter model names in Google's documentation — Gemini 3 Pro, Gemini 3 Flash, Gemini 3.1 Pro, Deep Think variants — they all belong to this family. "Gemini 3" is to Google roughly what "GPT-5.x" is to OpenAI or "Claude Opus" is to Anthropic: the label for the current frontier generation.
