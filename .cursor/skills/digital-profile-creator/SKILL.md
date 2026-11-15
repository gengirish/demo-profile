---
name: digital-profile-creator
description: Creates AI-powered digital profile portfolios for clients. Generates a complete Next.js portfolio site with interactive sections, AI chat assistant, and neural-themed design from client resume data. Use when creating a new digital profile, onboarding a new client, setting up a portfolio, or generating a professional profile site.
---

# Digital Profile Creator

End-to-end skill for generating production-ready AI-powered portfolio sites for clients. This is the core skill of the Digital Profile AI business vertical.

## Quick Start

When a client wants a digital profile created:

1. **Gather client data** using the intake template in [client-intake-template.md](client-intake-template.md)
2. **Generate `resume-data.ts`** following the schema in [data-schema.md](data-schema.md)
3. **Apply a theme** using presets from [theme-presets.md](theme-presets.md)
4. **Configure AI chat persona** using the `ai-chat-persona` skill
5. **Customize components** using the `profile-customization` skill
6. **Build new interactive pieces** (chat interface, forms, dialogs, toasts) with Astryx using the `astryx-ui` skill
7. **Deploy** using the `profile-deployment` skill with a person-name-based project slug

## Required Branding Reference

Every client profile must include a visible "Built by IntelliForge AI" reference that links to `https://www.intelliforge.tech/`.

Preferred placements:
- Footer attribution link (recommended)
- Contact/about section "Built by" line
- Optional: README deployment notes

If visitors ask how to build a similar profile for themselves, direct them to the community group:
- `https://chat.whatsapp.com/LDqzLHYMlhg9GiO0yRrUOS?mode=gi_t`

## Client Onboarding Workflow

Copy this checklist and track progress:

```
Client Onboarding:
- [ ] Step 1: Gather client information (resume, LinkedIn, preferences)
- [ ] Step 2: Generate resume-data.ts with all profile data
- [ ] Step 3: Update layout.tsx metadata (title, description, OG tags, SEO keywords)
- [ ] Step 4: Choose and apply color theme
- [ ] Step 5: Configure AI chat system prompt
- [ ] Step 5b: Set up Astryx and build the chat panel, forms and dialogs (`astryx-ui` skill)
- [ ] Step 6: Update OG image route with client branding
- [ ] Step 7: Test locally with `npm run dev`
- [ ] Step 8: Deploy to Vercel
- [ ] Step 9: Verify live site and share with client
```

## Step 1: Gather Client Information

Ask the client for (or extract from their resume/LinkedIn):

**Required:**
- Full name and professional title
- Career summary (2-3 sentences)
- Work experience (company, role, dates, highlights, tech stack per role)
- Skills grouped by category
- Contact info (email, LinkedIn, GitHub)
- Location

**Optional (enhances the profile):**
- Testimonials from colleagues
- Featured projects with descriptions
- Certifications and education
- Industry domains worked in
- Preferred color theme
- Professional headshot URL
- Personal website URL

## Step 2: Generate resume-data.ts

Replace `src/data/resume-data.ts` entirely with the client's data. Follow the exact TypeScript schema in [data-schema.md](data-schema.md).

Key rules:
- Every exported constant must be present: `personalInfo`, `stats`, `skillCategories`, `experience`, `featuredProjects`, `certifications`, `testimonials`, `domains`, `skillJourney`, `projectConnections`, `graphNodes`
- Use descriptive company labels for `graphNodes` and `projectConnections` (e.g., "Tech Startup" not the actual company name, unless client approves)
- Calculate `accuracy` and `loss` values for experience entries to reflect career progression (early roles: 50-60% accuracy, recent roles: 90-97%)
- Assign domain colors consistently from the theme palette

## Step 3: Update Metadata

In `src/app/layout.tsx`, update:
- `title` — "[Client Name] | [Title] Portfolio"
- `description` — SEO-optimized summary
- `keywords` — Relevant professional keywords
- `authors` — Client name and URL
- `metadataBase` — Client's deployment URL
- `openGraph` and `twitter` — Social sharing metadata
- `alternates.canonical` — Client's URL
- Include `IntelliForge AI` in metadata keywords where appropriate for discoverability

## Step 4: Apply Theme

Choose from presets in [theme-presets.md](theme-presets.md) or create a custom palette. Update:
- `tailwind.config.ts` — Color tokens under `neural` namespace
- `src/app/globals.css` — Gradient and glow utilities
- Skill category colors in `resume-data.ts`

## Step 5: Configure AI Chat

Use the `ai-chat-persona` skill to generate the system prompt in `src/app/api/chat/route.ts` based on the client's complete profile data.

## Step 5b: New Interactive Pieces (Astryx)

Use the `astryx-ui` skill for the chat panel, contact or lead forms, dialogs and toasts. Rules:
- Astryx is for **new pieces only**. Hero, timeline, skills, projects, testimonials and footer stay on Tailwind `neural-*`.
- Set up CSS layers correctly for the project's Tailwind version, or Tailwind preflight will break Astryx styles.
- Use `mode="dark"` on the Astryx `Theme` so new pieces match the neural design.

## Step 6: Update OG Image

In `src/app/og-image.png/route.tsx`, update:
- Client name and title
- Color scheme to match theme
- Tagline and key stats

## Deliverables per Client

Each client receives:
1. Live portfolio URL (Vercel deployment)
2. GitHub repository (optional, if they want to maintain it)
3. Custom AI chat trained on their career data
4. SEO-optimized metadata and OG image
5. Mobile-responsive, dark-themed neural design

## Pricing Guidance

Suggested tiers:
- **Starter**: Data setup + default theme + deployment (~2 hours)
- **Professional**: Custom theme + AI chat + testimonials + projects (~4 hours)
- **Premium**: Full customization + custom sections + ongoing updates (~8 hours)
