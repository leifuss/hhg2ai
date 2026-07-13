---
section: essentials
title: Data Governance
description: What AI providers do with your data, institutional policies, practical guidelines by data type, and a quick decision aid for humanities scholars.
last_verified: 2026-07-13
---

# Data Governance

Before using any AI tool with research data, understand what happens to your data and what your institution requires. This page covers both.

!!! essential "Essential"
    The most important question is not "which model is best?" but "is it safe to put this data into a commercial AI service?" Answer that question **before** you start a session, not after.

---

## What providers do with your data

Every commercial AI service processes your input on its own servers. The key question is what happens to it afterwards. Policies differ by provider and by tier.

### The general picture (mid-2026)

| Tier | Training on your data? | Retention | Notes |
|------|----------------------|-----------|-------|
| **Free tiers** | Often yes, by default | Extended | Most providers reserve the right to use free-tier conversations for model improvement. **Do not use free tiers for sensitive research data.** |
| **Paid consumer** (e.g. Claude Pro, ChatGPT Plus) | Generally no, by default | Limited, for safety/abuse monitoring | Check the specific provider's privacy policy. Opt-out settings may exist. |
| **Team / Business** | No | Limited | Stronger data isolation. Suitable for most institutional use. |
| **Enterprise** | No | Minimal, contractual | Full compliance features, custom data handling agreements, often required for regulated data. |
| **API access** | No (across major providers) | Minimal, governed by API terms | Your data is processed but not retained for training. |

!!! caution "Caution"
    Policies change. The summary above reflects mid-2026 conditions. Always check the provider's **current** privacy policy and terms of service. Links to key policies: [Anthropic (Claude)](https://www.anthropic.com/privacy), [OpenAI (ChatGPT)](https://openai.com/policies/privacy-policy), [Google (Gemini)](https://ai.google/privacy/).

### What "not used for training" does not mean

Even on paid tiers where your data is not used for training:

- Your input still passes through commercial servers. It is processed, temporarily stored, and subject to safety monitoring.
- Staff at the provider may review flagged conversations.
- Data is subject to the provider's jurisdiction (typically US law).
- A data breach at the provider would expose your inputs.

"Not used for training" is an important protection, but it is not the same as "private" or "confidential" in the way those terms are used in research ethics.

---

## What to check with your institution

Most universities and research institutions now have AI policies. Before using AI tools with research data, check:

1. **Does your institution allow the use of third-party AI services for research data?** Some have blanket prohibitions; others allow it with conditions.
2. **Are there data classification rules?** Many institutions classify data into tiers (public, internal, confidential, restricted). AI use may be permitted for some tiers but not others.
3. **Does your ethics approval cover AI-assisted analysis?** If you have ethics approval for a project involving human subjects, check whether your protocol addresses AI processing of the data.
4. **Does your institution have a preferred or approved AI service?** Some have institutional agreements with specific providers that offer better data governance terms than individual subscriptions.
5. **What are the requirements for student data?** Student data is subject to specific regulations (GDPR in the EU/UK, FERPA in the US) that generally prohibit sharing with third-party services without explicit consent.

!!! leifnote "Leif's Notes"
    In my experience, most institutions have a policy document but it is often hard to find and may not have been updated recently. Start with your IT services or research governance office. If they do not have a clear answer, that itself is useful information --- it means you should proceed cautiously and document your decisions.

---

## Practical guidelines by data type

### Published, public domain, and licensed material

Privacy is not the only boundary. Copyright and licensing are a **separate question** --- and a published text is not automatically safe to upload. Three categories matter in practice:

- **Public domain material** --- out of copyright (in the UK, typically 70 years after the author's death). Note that "public domain" means *out of copyright*, not "publicly available": a journal article you can read online is not public domain. Genuinely public-domain texts --- most primary sources in classical and medieval studies, out-of-copyright editions, open-access datasets --- can be uploaded freely.
- **Openly licensed material** --- open-access publications under Creative Commons licences. Generally lower risk; check the specific licence terms.
- **In-copyright, licensed material** --- paywalled journal articles, ebooks, and databases accessed through your library subscription. Lawful access to *read* is not permission to *upload*. Publisher licence agreements generally prohibit use with AI platforms, and once material enters a consumer tool you cannot control its onward use.

!!! caution "Published does not mean safe to upload"
    **Do not upload subscription PDFs (journal articles, ebooks) to consumer AI tools.** Lawful access to read a paywalled work is not permission to feed it to a commercial AI service, and most publisher licences prohibit exactly this. A tool with enhanced data protection inside your institution's environment (such as Microsoft 365 Copilot) substantially reduces the risk and is the risk-managed approach librarians currently recommend --- if in doubt, ask your library's copyright team.

**Your institution's own materials** (e.g. teaching materials) raise similar questions, and at most universities the policy is still being settled. Until it is, the risk-managed default is the same: keep them inside institutional tools.

**Research exceptions exist --- use them knowledgeably.** UK law provides copyright exceptions that can support computational research, notably section 29A (copies for text and data analysis for non-commercial research) and the fair dealing provisions. These exceptions cannot be overridden by contract --- a licence agreement cannot remove your right to rely on them. But they carry strict conditions (for example, copies made under s29A may not be transferred to others), much remains untested in the courts, and an exception that covers your *analysis* does not necessarily cover *uploading material to a commercial platform that may retain or train on it*. If your research involves mining licensed corpora, talk to your library's copyright specialist before you start: they can advise whether an exception applies and support you in challenging technical barriers with publishers where the law is on your side.

!!! leifnote "Leif's Notes"
    Little of this is settled --- it is among the most actively discussed problems facing university copyright officers nationally. Where the guidance feels unclear, that is because the law genuinely is. When in doubt, your library's copyright team would far rather field a quick question than discover a licence breach after the fact.

### Your own unpublished work

**Generally safe on paid tiers.** Drafts, notes, work-in-progress analysis, and your own writing are usually fine to use with paid subscriptions or API access, where data is not used for training. Check whether your institution has specific policies about sharing unpublished research with third parties.

!!! offtrack "Off the Beaten Track"
    If you are working on something genuinely sensitive --- a major discovery, a patent-adjacent finding, or material under pre-publication embargo --- consider using API access (minimal retention) or a local open-weights model (nothing leaves your machine). See the Open-Weights section of the platform manuals for setup guidance.

### Personal or sensitive data

**Exercise caution.** This includes:

- Interview transcripts containing identifiable information
- Survey responses with personal details
- Archival materials involving living individuals
- Health, financial, or biographical data about identifiable people

**Before using with AI:** Anonymise where possible. Check institutional policy. Consider whether an institutional or enterprise deployment would be more appropriate. If in doubt, do not upload.

### Data under embargo, NDA, or contractual restriction

**Do not use with cloud-based AI services** unless your contract explicitly permits it. This includes pre-publication embargoed material, data shared under non-disclosure agreements, and material obtained under access conditions that restrict third-party processing.

### Student data

**Subject to specific regulations.** GDPR (EU/UK), FERPA (US), and equivalent legislation in other jurisdictions generally prohibit sharing student data with third-party services without explicit, informed consent. This applies to student work, grades, attendance records, pastoral information, and communications.

---

## Quick decision aid

Before uploading anything to an AI tool, run through this checklist:

```text
1. Is this public domain (out of copyright) or openly licensed (CC)?
   YES --> Proceed. ("Public domain" means out of copyright,
           NOT merely readable online.)

1a. Is this in-copyright licensed material (a paywalled journal
    article, ebook, or subscription database)?
   YES --> Do NOT upload to consumer AI tools. Use an institutional
           tool with enhanced data protection, and check the licence.

2. Is this my own unpublished work?
   YES --> Generally safe on paid tiers. Check institutional policy.

3. Does it contain personal data about identifiable individuals?
   YES --> Anonymise first. Check institutional policy. Consider
           enterprise/local options.

4. Is it under embargo, NDA, or contractual restriction?
   YES --> Do not upload to any cloud AI service.

5. Is it student data?
   YES --> Check GDPR/FERPA compliance. Likely requires explicit
           consent.

6. Am I unsure about any of the above?
   YES --> Do not upload until you have checked with your
           institution's research governance office.
```

!!! panic "Don't Panic"
    Most everyday academic use of AI --- drafting text, brainstorming ideas, formatting references, working with public-domain or openly licensed sources --- falls squarely into the "safe" category. The cautions above apply to specific categories: sensitive personal data, and in-copyright licensed material (paywalled PDFs). If you are discussing the *ideas* in a published article, or working from an out-of-copyright source, there is no problem; the line to watch is uploading the full text of a paywalled work into a consumer tool.

---

## Platform-specific settings worth checking

Regardless of which platform you use, review these settings when you first create an account:

- **Training opt-out:** Ensure your conversations are not used for model training. On most platforms this is a toggle in privacy settings.
- **Memory and history:** Some platforms retain conversation history and build persistent "memory" of your preferences. Decide whether this is useful or a concern for your use case. You can usually disable it.
- **Data retention period:** Check how long the provider retains your conversation data. This varies by tier and provider.
- **Third-party integrations:** If the platform connects to other services (web search, plugins, code execution), your data may be shared with those third parties too. Review which integrations are active.

!!! essential "Essential"
    **Check your settings once, when you set up the account.** The defaults are not always the most privacy-protective options. Five minutes spent reviewing settings can prevent months of data exposure you did not intend.

---

## A note on jurisdiction

Major AI providers are US-based companies. Your data is processed under US law, regardless of where you are located. For EU/UK researchers, this has implications under GDPR, particularly for personal data. If your institution has an enterprise agreement with a provider, it may include data processing addenda that address jurisdictional concerns. If you are using a personal subscription, you are relying on the provider's standard terms.

This is not a reason to avoid AI tools, but it is a reason to be thoughtful about what data you send to them --- particularly personal data about research subjects.
