---
title: "Environments"
description: "Where to run Claude Code — comparing web, laptop, desktop app, Codespaces, institutional servers, and cloud VMs."
last_verified: 2026-03-08
---

# Environments

Part of [A Hitchhiker's Guide to AI for the Humanities](../index.md)

Claude Code can run in several environments. Each has trade-offs in terms of setup difficulty, cost, and capability. This section helps you choose.

| Environment | Setup difficulty | Cost | Best for | Limitations |
|---|---|---|---|---|
| **Claude Code on the web** | None | Pro or Max subscription | Getting started, one-off tasks, self-contained projects | No persistent file system; must upload/download files; no access to local tools |
| **Your own laptop/desktop** | Low -- run the native installer | Pro or Max subscription, or API key | Most users. Full control, local files, your own tools | Relies on your machine's hardware; you manage your own software |
| **Claude Code Desktop** | None beyond the desktop app | Pro or Max subscription | Users who want local Code capabilities without the terminal | Requires the Claude Desktop app; less flexible than CLI for scripting and automation |
| **GitHub Codespaces** | Medium -- create a codespace from a repo | GitHub free tier (60 hrs/month) or paid; plus Claude API key or subscription | Collaborative projects, consistent environments, working from any device | Requires GitHub familiarity; free tier has time limits |
| **University/institutional server** | Medium to high -- depends on IT support | Usually free (institutional infrastructure); plus Claude API key | Large datasets, shared projects, data governance compliance | May need IT approval; institutional firewalls may block API calls |
| **Cloud VM (AWS, GCP, Azure)** | High -- cloud account setup, VM management | Cloud compute costs + Claude API key | Heavy compute tasks, long-running batch processing, team projects | Requires cloud infrastructure knowledge; ongoing costs |

---

## Recommendations by situation

### I'm just starting out

If you are new to Claude entirely, start with [Chat](chat.md) -- you do not need Code at all for most humanities work. If you have used Chat and want to try building something, **Claude Code on the web** is the lowest-friction entry point: no installation, no configuration, no risk to your local files. Try a small project and see whether Code is useful for your work before investing in a more complex setup.

### I want to use Code regularly for my research

Install **Claude Code on your laptop or desktop**. This gives you full access to your files, your reference managers, your LaTeX installation, and any other tools you use. It is the most natural environment for sustained work.

### I'm working with collaborators on a shared project

Consider **GitHub Codespaces**. Everyone gets the same environment, the project lives in a shared repository, and you can work from any machine with a browser. This is especially useful for digital edition projects or collaborative tool-building where consistency matters.

### I need to process sensitive or restricted data

Talk to your **institutional IT team** about running Claude Code on an institutional server. This keeps data within your institution's infrastructure. You will still need an API key for Claude, and you should confirm that API calls to Anthropic's servers are permitted under your data governance policy. Note that the data is still sent to Anthropic for processing -- the institutional server controls where files are stored, not where the AI processing happens.

For data governance principles that apply across all platforms, see [Data Governance](../essentials/data-governance.md).

### I have very large datasets or long-running tasks

A **cloud VM** may be appropriate, but only if you (or someone on your team) is comfortable managing cloud infrastructure. For most humanities projects, the web version or a local installation will be sufficient.

---

## A note on IDE integration

Claude Code can also run inside code editors like VS Code and JetBrains IDEs as an extension. If you already use one of these editors for other work (LaTeX editing, Python scripting, web development), the integrated experience can be convenient -- you get Claude's assistance directly alongside your files and terminal. But an IDE is not required; the standalone CLI works perfectly well.

The Claude Desktop app also supports **remote sessions** -- Code sessions that run on Anthropic's cloud infrastructure and continue even if you close the app. This is useful for long-running tasks (batch processing large corpora, overnight builds) where you do not want to keep your machine running. Remote sessions are available through the Desktop app's Code tab.
