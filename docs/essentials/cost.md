---
section: essentials
title: Cost & Plans
description: Subscription tiers across AI platforms, API pricing overview, cost-saving strategies, and guidance on what is worth paying for in academic work.
last_verified: 2026-03-08
---

# Cost & Plans

Understanding cost helps you choose the right tool and the right model for each task. This page covers the pricing landscape across major platforms, with guidance on what makes sense for academic use.

!!! panic "Don't Panic"
    You do not need to spend a lot of money to use AI effectively. A single paid subscription (around the cost of one or two academic books per month) gives you access to frontier models that are dramatically better than free tiers. The difference between free and paid is large. The difference between paid tiers is much smaller.

---

## The free tier question

Every major platform offers a free tier. These are useful for casual experimentation but come with significant limitations:

- **Older or less capable models.** Free tiers typically provide access to previous-generation models, not the current frontier.
- **Strict usage limits.** You may hit rate limits mid-conversation, especially with longer or more complex tasks.
- **Data may be used for training.** Most providers reserve the right to use free-tier conversations to improve their models. See [Data Governance](data-governance.md).
- **Fewer features.** File uploads, advanced reasoning modes, and some tool integrations may be restricted.

!!! essential "Essential"
    If you are going to experiment seriously, a paid tier is worth it. Struggling with an underpowered model produces misleading impressions of what the technology can and cannot do. The free tier is for deciding whether to subscribe, not for sustained academic use.

---

## Subscription tiers across platforms (early 2026)

Prices and features change frequently. Rather than quoting exact figures that will be outdated by the time you read this, here is the general structure. **Always check the provider's current pricing page** for up-to-date details.

### Claude (Anthropic)

| Tier | Approximate cost | What you get |
|------|-----------------|--------------|
| **Free** | $0 | Access to current Sonnet model, limited usage, conversations may be used for training |
| **Pro** | ~$20/month | Full access to Chat, Projects, Claude Code, higher usage limits, data not used for training |
| **Max** | ~$100--200/month | Significantly higher usage limits, especially for Claude Code and extended tasks. Two sub-tiers available. |
| **Team** | Per-seat pricing | Workspace features, shared projects, admin controls, stronger data isolation |
| **Enterprise** | Custom pricing | Full compliance features, custom data handling, SSO, dedicated support |

Pricing page: [anthropic.com/pricing](https://www.anthropic.com/pricing)

### ChatGPT (OpenAI)

| Tier | Approximate cost | What you get |
|------|-----------------|--------------|
| **Free** | $0 | Access to current base model, limited usage |
| **Plus** | ~$20/month | Access to frontier models, higher limits, advanced features |
| **Pro** | ~$200/month | Highest access levels, extended reasoning, priority access |
| **Team** | Per-seat pricing | Workspace features, admin controls, data not used for training |
| **Enterprise** | Custom pricing | Full compliance, custom agreements |

Pricing page: [openai.com/pricing](https://openai.com/pricing)

### Gemini (Google)

| Tier | Approximate cost | What you get |
|------|-----------------|--------------|
| **Free** | $0 | Access to current Gemini model, limited usage |
| **Advanced** | ~$20/month (bundled with Google One AI Premium) | Frontier Gemini models, higher limits, integration with Google Workspace |
| **Business / Enterprise** | Custom pricing | Workspace integration, compliance features |

Pricing page: [ai.google/pricing](https://ai.google/pricing) or via Google One

!!! offtrack "Off the Beaten Track"
    **Bundling matters.** Google's AI subscription is bundled with Google One storage and other services you may already pay for. If your institution uses Google Workspace, you may already have access to Gemini through your institutional account --- check with IT services before paying for a personal subscription.

---

## API pricing (for advanced users)

If you use Claude Code with an API key, or build custom scripts and tools, you pay per token (roughly per word) rather than a flat monthly fee. This gives you more control but requires monitoring costs.

### How API pricing works

- You are charged for **input tokens** (your prompt, uploaded files, system context) and **output tokens** (the model's response).
- Different models have different per-token rates.
- Within a model family, more capable models cost more.

### Claude API model tiers

| Model | Cost level | Best for |
|-------|-----------|----------|
| **Opus** | Highest | Complex reasoning, nuanced analysis, high-stakes tasks |
| **Sonnet** | Mid-range | General-purpose work, everyday development, most tasks |
| **Haiku** | Lowest | Bulk processing, simple tasks, formatting, quick queries |

A typical Claude Code session building a small web tool might cost a few dollars with Sonnet. Processing a batch of 200 documents with Haiku might cost less than a dollar. An extended Opus session for complex analysis could run to $10--20. These are rough guides --- actual costs depend on input size, output length, and the number of iterations.

!!! leifnote "Leif's Notes"
    I started with a Pro subscription and that covered 90% of my needs. I only moved to API access when I started doing batch processing of large document collections, where the per-token model gave me more control over costs and model selection. For most humanities scholars, a subscription is simpler and more predictable.

---

## Cost-saving strategies

### Choose the right model for the task

This is the single most effective way to manage costs, whether on a subscription (where it conserves your usage allocation) or on API pricing (where it directly reduces spend).

- **Haiku** for: formatting, simple data conversion, quick factual queries, bulk processing of straightforward tasks.
- **Sonnet** for: general writing assistance, routine analysis, everyday coding, most conversational work.
- **Opus** for: complex reasoning, nuanced close reading, architectural decisions, high-stakes analysis.

Do not use Opus to rename variables. Do not use Haiku to evaluate a complex argument.

### Write clear, specific prompts

A clear, detailed prompt typically resolves in one round. A vague prompt may take several back-and-forth iterations, each consuming tokens (or your usage allocation). The two minutes you spend making your prompt specific can save ten minutes of iteration.

### Batch similar tasks

Processing 100 files in one session is more efficient than 100 separate sessions, because the setup context (system prompts, project instructions, file reading) is amortised across all items. Group similar work together.

### Keep persistent context concise

If you use project instructions, system prompts, or `CLAUDE.md` files, keep them focused. These are read at the start of every session --- 500 words of context costs the same as 500 words of actual work. Write tight instructions that cover what matters; do not include background information the model does not need.

### Use conversation compression

Long conversations accumulate context that consumes tokens. Most platforms offer ways to compress or summarise the conversation history. In Claude Code, the `/compact` command does this. Using it periodically during long sessions reduces cost without losing important context.

### Monitor your usage

- **Subscriptions:** Usage limits are shared across all surfaces (Chat, Code, Projects, add-ins). A heavy coding session can leave you with reduced Chat access until the limit resets. Plan accordingly.
- **API:** Use the `/cost` command in Claude Code or check your provider's usage dashboard regularly. Set billing alerts to avoid surprises.

---

## What is worth paying for?

### If you are experimenting casually

Start with a **free tier** to decide whether AI tools are useful for your work. Give it at least a few sessions before judging. If you hit limits or find the model frustratingly unhelpful, upgrade to a paid tier before concluding the technology is not useful --- the difference is substantial.

### If you are using AI regularly for research or teaching

A **single paid subscription** ($20/month range) to one provider is the sweet spot for most academics. This gives you:

- Access to frontier models
- Reasonable usage limits for daily work
- Data not used for training
- File uploads, projects, and other features

Pick the platform whose interface you prefer. They are more alike than different at this tier.

### If you are doing intensive work

If you regularly hit usage limits, do batch processing, or use Claude Code extensively, consider:

- **Upgrading to a higher subscription tier** (Max for Claude, Pro for ChatGPT) for higher limits.
- **API access** for batch processing where per-token pricing is more efficient than a subscription.
- **A second platform subscription** if you use multi-model checking regularly. Two subscriptions at $20/month each is still modest compared to most research expenses.

### If you are setting up for a team or department

**Team or Enterprise tiers** provide shared workspaces, admin controls, and stronger data governance. If your institution is considering a deployment, these tiers also typically include onboarding support and custom data handling agreements.

!!! essential "Essential"
    **The most common mistake is staying on the free tier too long.** The gap between free and paid is the biggest quality jump in the entire pricing ladder. Everything above that is incremental improvement. If you can justify one research expense this year, make it a paid AI subscription.

---

## A note on institutional procurement

Some institutions are negotiating institutional agreements with AI providers, which can offer:

- Reduced per-seat pricing for departments or faculties
- Stronger data governance terms than individual subscriptions
- Centralised billing and administration
- Compliance with institutional IT security requirements

Check whether your institution has or is negotiating such an agreement before paying individually. If your institution does not have one, suggesting it to your IT procurement team may be welcome --- they may already be exploring options.

!!! caution "Caution"
    Institutional agreements sometimes restrict which features are available or which models you can access. Read the terms before assuming an institutional account offers the same capabilities as a personal subscription. In some cases, a personal subscription alongside an institutional account gives you the best of both worlds.
