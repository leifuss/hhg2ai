---
section: platforms
title: "Prerequisites"
description: "What technical skills to learn and in what order for effective use of Claude Code — from essential terminal basics to helpful advanced skills."
last_verified: 2026-03-08
---

# Prerequisites

Part of [A Hitchhiker's Guide to AI for the Humanities](../index.md)

Claude Code reduces the barrier to technical work, but it does not eliminate it entirely. You do not need to become a software engineer, but some foundational knowledge makes the difference between productive use and frustration. This section lists the skills roughly in order of priority.

!!! panic "Don't Panic"
    These prerequisites apply to Claude Code (CLI and Desktop). If you use only Chat or Cowork, you do not need any of them -- those tools require no technical background.

## Contents

- [Essential skills](#essential-skills-you-need-before-starting-with-claude-code-cli)
- [Very useful skills](#very-useful-skills-that-significantly-improve-your-experience)
- [Helpful skills](#helpful-skills-that-open-up-advanced-workflows)
- [The key insight](#the-key-insight)

---

## Essential: skills you need before starting with Claude Code CLI

| Skill | What it means | How much you need | How to learn |
|---|---|---|---|
| **Terminal basics** | Navigating directories, running commands, reading output | Know `cd`, `ls`, `pwd`, `mkdir`, and how to run a command. You do not need to be fluent -- Claude will write the complex commands for you. | Any "command line for beginners" tutorial (30--60 minutes). The Programming Historian has good introductions for humanities scholars. |
| **Git basics** | Version control -- tracking changes to files over time | Know `git init`, `git add`, `git commit`, `git status`, `git log`, and `git checkout` (to revert). Understand what a commit is and why it matters. | GitHub's "Git Handbook" or the Software Carpentry git lesson (2--3 hours). |
| **Plain text files** | Understanding that code, data, and configuration are just text files with specific formats | Know the difference between a .txt, .csv, .html, .py, and .json file. Understand that you can open any of them in a text editor. | Comes naturally with terminal and git practice. Use a proper text editor (VS Code is free and widely used). |

!!! essential "Essential"
    **If you use Claude Code on the web or Claude Code Desktop** (in the Claude Desktop app), you can skip terminal and git entirely. Both handle file management through their GUI. These skills are essential only for the CLI version.

---

## Very useful: skills that significantly improve your experience

| Skill | What it means | How much you need | How to learn |
|---|---|---|---|
| **Reading code** | Understanding what a piece of Python, JavaScript, or HTML does at a high level | You do not need to *write* code, but being able to read Claude's output and understand its structure helps enormously. Can you look at an HTML file and see where the headings, paragraphs, and links are? Can you read a Python script and follow the logic, even if you could not write it yourself? | Comes with practice. Ask Claude to explain any code it writes: "Explain this script to me line by line." |
| **HTML/CSS basics** | The languages of web pages -- structure (HTML) and appearance (CSS) | Knowing what a `<div>`, `<p>`, `<table>`, and `<a>` tag do lets you direct Claude much more precisely when building web-based tools. "Put the search box in a `<header>` element" is much more effective than "put the search box at the top." | MDN Web Docs "Getting started with HTML" (1--2 hours for the basics). |
| **File formats** | Understanding CSV, JSON, XML/TEI, and how structured data works | Know what these formats look like, when each is appropriate, and how to open them. If you work with TEI-encoded texts, understanding the XML structure helps you direct Claude's transformations. | Depends on your field. The TEI Guidelines are the reference for XML/TEI. For CSV and JSON, any data science introduction covers these. |
| **GitHub** | The platform for hosting git repositories, collaborating, and sharing code | Know how to create a repository, push to it, and navigate the web interface. Useful for backing up projects, collaborating, and deploying web-based tools via GitHub Pages. | GitHub's own tutorials. Start by putting one project on GitHub; the rest follows. |

---

## Helpful: skills that open up advanced workflows

| Skill | What it means | When you need it |
|---|---|---|
| **Python basics** | The most common scripting language for data processing and academic computing | When you want to understand or customise the scripts Claude writes, or when you want to build more complex data pipelines. Even a little Python knowledge helps you review Claude's work. |
| **Regular expressions** | Patterns for finding and replacing text -- far more powerful than simple find-and-replace | When you work with text processing at scale. Claude writes regex for you, but understanding the basics helps you verify its patterns and describe what you want. |
| **SQL** | The language for querying databases | When you work with structured data in databases (prosopography, epigraphy, archaeological finds). Claude can write SQL, but knowing the basics helps you formulate questions and check results. |
| **XSLT / XPath** | Languages for transforming and querying XML documents | When you work extensively with TEI/XML. Claude can write XSLT transformations, but knowing the concepts helps you specify what you want. |
| **LaTeX** | A typesetting system widely used in academia | When you want Claude to help with document preparation, especially for publications with complex formatting, mathematical notation, or critical apparatus. |

---

## The key insight

Claude Code shifts the balance from *writing* code to *reading and directing* it. You do not need to memorise syntax or write programs from scratch. But you do need enough understanding to:

- **Describe what you want** in terms Claude can act on
- **Read what Claude produces** well enough to spot obvious problems
- **Understand error messages** well enough to describe them, even if you cannot fix them yourself
- **Make informed decisions** when Claude offers alternatives ("Shall I use SQLite or JSON for the data store?")

This is a lower bar than traditional programming, but it is not zero. Investing a few hours in the "essential" skills above will make your experience with Claude Code dramatically more productive. And Claude itself is an excellent teacher -- you can ask it to explain anything it does, in as much or as little detail as you want.
