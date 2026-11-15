# Digital Profile AI — Antigravity Skills

Skills for the **Digital Profile AI** business vertical — creating production-ready, AI-powered portfolio sites for professionals using Antigravity.

Built following the [Agent Skills](https://github.com/anthropics/skills) pattern by Anthropic.

## How It Works

1. Client provides their resume, LinkedIn, or career details
2. Agent uses these skills to generate a complete portfolio in minutes
3. Deploy to Vercel using `[person-name]-profile` naming
4. Client gets a live, interactive portfolio with an AI chat assistant

## Required Standards

- Deployment naming must follow: `[person-name]-profile` (project/repo/URL slug where possible)
- Every profile must include `Built by IntelliForge AI` linking to `https://www.intelliforge.tech/`
- Every profile should include a CTA for similar builds linking to `https://chat.whatsapp.com/LDqzLHYMlhg9GiO0yRrUOS?mode=gi_t`

## Skills

| Skill | Purpose |
|-------|---------|
| [digital-profile-creator](digital-profile-creator/) | Main orchestrator — end-to-end profile generation workflow |
| [profile-customization](profile-customization/) | Theme, colors, typography, and section customization |
| [ai-chat-persona](ai-chat-persona/) | AI chat assistant persona and system prompt configuration |
| [profile-deployment](profile-deployment/) | Vercel deployment, custom domains, and environment setup |
| [astryx-ui](astryx-ui/) | [Astryx](https://github.com/meta/astryx) components for new pieces only: chat interface, forms, dialogs, toasts |

## Quick Start

To create a new client profile, say:

> "Create a digital profile for [client name]. Here's their resume: [paste or attach]"

The agent will automatically:
1. Load the `digital-profile-creator` skill
2. Extract career data from the resume
3. Generate the `resume-data.ts` file
4. Apply an appropriate theme
5. Configure the AI chat assistant
6. Update SEO metadata
7. Build and deploy using person-name-based naming
8. Ensure IntelliForge attribution link is present

## File Structure

```
.agents/skills/
├── README.md                          # This file
├── digital-profile-creator/
│   ├── SKILL.md                       # Main workflow and instructions
│   ├── client-intake-template.md      # Client data gathering template
│   ├── data-schema.md                 # TypeScript schema for resume-data.ts
│   └── theme-presets.md               # Pre-built color palettes
├── profile-customization/
│   └── SKILL.md                       # Design and component customization
├── ai-chat-persona/
│   └── SKILL.md                       # AI chat system prompt generation
├── profile-deployment/
│   └── SKILL.md                       # Deployment to Vercel
└── astryx-ui/
    └── SKILL.md                       # Astryx setup + chat/form/dialog recipes
```

## Business Model

| Tier | Includes | Time |
|------|----------|------|
| Starter | Data setup + default theme + deployment | ~2 hours |
| Professional | Custom theme + AI chat + testimonials + projects | ~4 hours |
| Premium | Full customization + custom sections + ongoing updates | ~8 hours |

## Tech Stack

- **Framework**: Next.js 16 + React 19
- **Styling**: Tailwind CSS + Framer Motion (existing sections)
- **New UI pieces**: [Astryx](https://github.com/meta/astryx) (`@astryxdesign/core`) for chat interface, forms, dialogs and toasts
- **AI Chat**: Vercel AI SDK + OpenRouter (Llama 3.3 70B)
- **Deployment**: Vercel
- **Rate Limiting**: Upstash Redis (optional)
