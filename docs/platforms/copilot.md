---
section: platforms
title: "Microsoft Copilot for Humanities Scholars"
description: "How Microsoft Copilot works for humanities scholars — free vs Microsoft 365 Copilot, data protection, models, cross-tenancy search, agents, and administrator extensions."
last_verified: 2026-07-13
---

# ![Copilot](../assets/images/platforms/copilot-icon.svg){ .platform-logo } Microsoft Copilot for Humanities Scholars

*July 2026*

!!! panic "Don't Panic"
    If your institution doesn't provide Copilot, read [What Microsoft Copilot is](#what-microsoft-copilot-is) for the two-minute picture and move on — the rest of this page is for people who have institutional access. If it does provide Copilot, the single most useful thing to know is which **tier** you have and what **data** you are allowed to put into it.

Many UK universities provide Microsoft Copilot as their default AI tool. If your institution is among them, you may already have access through your university Microsoft 365 account — and it may be the *only* AI tool approved for use with certain categories of data. This page explains what Copilot is, what it does well, where it falls short, and how to get useful results from it.

This is not an endorsement of Copilot over other tools. For many academic tasks, dedicated LLMs like Claude, ChatGPT, or Gemini produce better results. But if Copilot is what your institution provides — and particularly if institutional policy restricts you to it for certain work — it is worth understanding how to use it effectively rather than dismissing it after a disappointing first encounter.

## What Microsoft Copilot is

"Microsoft Copilot" is an umbrella term covering several different products, which can be confusing. The ones relevant to humanities scholars are:

| Product | Data protection | Models | Cost |
|---------|----------------|--------|------|
| **Copilot (free)** | **None (public cloud)** | Current GPT-class, selected automatically | Free |
| **Microsoft 365 Copilot** | **Enterprise (your tenancy)** | Current GPT-5 class; user chooses | ~£25/user/month (institution or user) |
| **Copilot Chat** | Enterprise (within M365) | GPT-5 class | Part of M365 Copilot, or lower-cost standalone |

**Copilot (free)** — a free chatbot at [copilot.microsoft.com](https://copilot.microsoft.com) or in the Edge browser. It uses current GPT-class models, with the free tier selecting the model automatically based on the task, and can search the web, generate text, and answer questions. Crucially, it carries **no enterprise data protection**: it operates in Microsoft's public cloud, not your institution's secure environment. This is Microsoft's equivalent of the free tiers of ChatGPT or Claude.

**Microsoft 365 Copilot** — the institutional product, embedded directly in the Microsoft 365 apps you already use (Word, Excel, PowerPoint, Outlook, Teams, OneNote). It uses current GPT-5 class models and — unlike the free version — lets the user choose which model to use. Processing occurs on Microsoft's own servers within its EU Data Boundary (which covers UK institutions), not on OpenAI's. Your data stays within the institution's Microsoft 365 tenancy, inheriting the GDPR arrangements and security policies your university has already negotiated. **This is the version with enterprise data protection**, and the one approved for confidential material where deployed.

**Copilot Chat** — a conversational interface that can search across your *entire* email archive, SharePoint, OneDrive, calendar, and Teams messages, returning answers in seconds. This cross-repository search is one of Copilot's most powerful and distinctive features (see [Strengths](#strengths)).

!!! caution "Confidential material and institutional policy"
    At many institutions, confidential material — student data, personnel matters, sensitive governance documents — may **only** be processed using Microsoft 365 Copilot within the institutional tenancy, and **not** with consumer AI tools or the free version of Copilot. Check your own institution's policy. The enterprise data protection provided by the institutional version is a core reason universities deploy it. See also [Data Governance](../essentials/data-governance.md).

!!! note "GitHub Copilot is different"
    GitHub Copilot is a separate product aimed at software developers; it autocompletes code within programming editors. Unless you write code, it is not relevant here and is not covered on this page.

## Why institutions adopt it

Understanding why your institution chose Copilot explains both its advantages and its constraints. The decision is rarely about which AI produces the best prose: Microsoft 365 Copilot extends data-protection, security, and procurement arrangements the university has *already* negotiated with Microsoft, rather than requiring new agreements with Anthropic, OpenAI, or Google. It also inherits existing single sign-on, access controls, and data-loss-prevention rules — and channels staff and student AI use through a managed system rather than personal accounts (a harm-reduction strategy).

## Strengths

**Integration with your existing workflow.** You do not need to leave Word to get AI assistance, copy text between applications, or manage a separate subscription. For people who live in Microsoft 365 — most UK academics, whether they like it or not — this reduces friction considerably.

**Cross-tenancy search (where enabled).** Where institutional permissions allow it, Copilot Chat can search your entire email archive, all the SharePoint sites you have access to, and your OneDrive, returning answers in seconds: "What was the deadline we agreed for the grant submission?" "Summarise the feedback from last week's board meeting." For academics juggling multiple projects, committees, and correspondence streams, this is genuinely transformative — and no other AI tool can do it without you manually providing the information. Note that many institutions restrict this capability.

**Meeting and email management.** Copilot's Teams summarisation and Outlook capabilities are genuinely useful for the administrative side of academic life — catching up on a missed meeting, triaging a full inbox, extracting action items from a long thread. These are low-verification-burden tasks where Copilot performs well.

**Data protection by default, no separate cost to you.** When using institutional Copilot, your data stays within your institution's Microsoft tenancy, and — if the institution provides the licence — there is no personal subscription to manage or justify (the institution bears the cost).

## Limitations

**Weaker for sustained intellectual work.** Copilot is optimised for productivity tasks within Microsoft 365, not for extended, iterative intellectual engagement. For testing an argument across multiple rounds of critique, exploring translation alternatives in depth, or working through a complex analytical problem, dedicated LLMs (Claude, ChatGPT, Gemini) are substantially better.

**Less capable for specialist knowledge.** For topics requiring deep domain expertise — ancient languages, textual criticism, specialised historiography, theological argument — Copilot generally produces shallower, more generic results than frontier models. The underlying GPT-5 class models are capable, but the integration layer is optimised for business productivity, not scholarly depth.

**Hallucination applies here too.** Copilot hallucinates like any other LLM-based tool: it will confidently cite emails that don't exist or summarise meetings inaccurately. The institutional wrapper does not make the underlying model more reliable — the [verification ladder](../essentials/verification.md#the-verification-ladder) applies equally.

!!! caution "Copilot's 'agents' are not agentic AI"
    Copilot's *agents* are not agentic AI in the sense described on the [Agentic AI page](../guide/agentic.md). They structure interactions within specific Microsoft 365 apps — for example, the *Researcher* and *Analyst* agents provide specialised workflows for web research and data analysis, and Word, Excel, and PowerPoint agents can generate files (saved to OneDrive within your tenancy). But these are structured assistants, not autonomous agents that plan, write, and execute multi-step tasks across your file system. For those capabilities, see [Agentic AI](../guide/agentic.md).

## Extending Copilot: what your administrator can enable

Institutional administrators can add capabilities beyond the default configuration:

**Third-party models.** Anthropic's Claude models can be enabled within the Copilot environment, powering features such as the Word, Excel, and PowerPoint agents. These operate under the same enterprise data protection as the rest of Microsoft 365 Copilot and are covered by Microsoft's Customer Copyright Commitment. If you find Copilot's default model insufficient for a particular task, ask your IT administrator whether Anthropic models are available — they may already be enabled. (Jisc has advised institutions to evaluate the data-processing implications before enabling third-party model integrations, so institutional positions vary.)

**Custom agents.** Copilot Studio lets administrators — and, where permitted, staff — build custom agents: structured workflows that combine LLM capabilities with specific data sources or instructions, useful for departmental FAQ bots, onboarding assistants, or research-workflow templates. As above, these are not autonomous agents, but they can meaningfully extend what Copilot does within your institution's environment.

Check with your IT administrator about which extensions are available at your institution.

## When to use other tools instead

Even if Copilot is your institution's default, some tasks are better served elsewhere — the question is whether institutional policy permits it and whether data sensitivity requires staying within the Microsoft tenancy.

- **Sensitive institutional data** (personnel, student records, confidential committee business): Copilot within the tenancy is likely your only approved option. Check your institution's specific policy.
- **Non-sensitive academic work** (translating a published Latin text, testing an argument, drafting discussion questions): use whichever tool gives the best results.
- **Deep intellectual work** (sustained analysis, translation, argument testing): dedicated LLMs are stronger — see [How to Choose a Platform](index.md).

!!! leifnote "Leif's Notes"
    The landscape is converging: OpenAI's ChatGPT Work (July 2026) now creates documents and spreadsheets across connected apps, in direct competition with Copilot. That makes the deciding factor less about raw capability and more about *data-protection posture* — for anything sensitive, the tool that keeps the material inside your institution's environment usually wins, even if another tool is marginally cleverer.

For prompting principles that apply across all platforms, see [Prompting Principles](../essentials/prompting.md). For data governance, verification, and cost, see the [Essentials](../essentials/index.md) section.
