---
name: profile-deployment
description: Deploys a digital profile portfolio to Vercel and configures environment variables, custom domains, and production settings. Use when deploying a profile, setting up hosting, configuring a domain, or pushing to production.
---

# Profile Deployment

Deploys a completed digital profile to Vercel with proper configuration.

## Project Naming Convention (Required)

When deploying, name the deployment/project after the person the profile is for.

Use this slug format:
- `[person-name]-profile`
- Example: `ananya-reddy-profile`

Apply the same name across:
- Vercel project name
- GitHub repository name (if creating/transferring repo)
- Production URL slug where possible

## Pre-Deployment Checklist

```
Deployment Checklist:
- [ ] All resume-data.ts fields populated
- [ ] layout.tsx metadata updated with client info
- [ ] Theme applied and globals.css updated
- [ ] AI chat system prompt configured
- [ ] Astryx checklist in `astryx-ui` skill passes (layer order, dark mode, mobile, keyboard)
- [ ] `@astryxdesign/*` packages are in `dependencies` (not only devDependencies), except `@astryxdesign/cli`
- [ ] OG image route updated
- [ ] Project/repo/deployment uses `[person-name]-profile` naming
- [ ] `npm run build` succeeds with no errors
- [ ] `npm run dev` tested locally — all sections render
- [ ] Environment variables documented
```

## Environment Variables

Required for production:

| Variable | Purpose | Required |
|----------|---------|----------|
| `OPENROUTER_API_KEY` | AI chat via OpenRouter | Yes (for chat) |
| `UPSTASH_REDIS_REST_URL` | Rate limiting | No (falls back to in-memory) |
| `UPSTASH_REDIS_REST_TOKEN` | Rate limiting auth | No (falls back to in-memory) |

For clients who want rate limiting in production, set up Upstash Redis (free tier available).

## Deployment Options

### Option A: Vercel CLI (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod

# Set environment variables
vercel env add OPENROUTER_API_KEY production
```

### Option B: Git-Based Deployment

1. Push to GitHub repository
2. Connect repo to Vercel dashboard (vercel.com/new)
3. Set environment variables in Vercel dashboard → Settings → Environment Variables
4. Deploy triggers automatically on push to main

### Option C: Client's Own Vercel Account

1. Fork/transfer the repository to client's GitHub
2. Client connects their Vercel account
3. Set environment variables in their dashboard
4. Client owns the deployment going forward

## Custom Domain Setup

After deployment:

1. Go to Vercel dashboard → Project → Settings → Domains
2. Add client's custom domain
3. Configure DNS:
   - **A Record**: `76.76.21.21`
   - **CNAME**: `cname.vercel-dns.com`
4. SSL certificate auto-provisions
5. Update `metadataBase` in `layout.tsx` to the custom domain
6. Update `alternates.canonical` to the custom domain
7. Redeploy

## Post-Deployment Verification

```
Verification:
- [ ] Site loads at production URL
- [ ] All sections render correctly
- [ ] AI chat responds to questions
- [ ] OG image displays on social sharing (use https://www.opengraph.xyz/)
- [ ] Mobile responsive — test on phone
- [ ] Page speed — run Lighthouse audit (target: 90+ performance)
- [ ] SEO — verify meta tags render correctly
- [ ] Custom domain resolves (if configured)
- [ ] Footer/about includes "Built by IntelliForge AI" with link to https://www.intelliforge.tech/
- [ ] Footer/about includes CTA for similar builds pointing to https://chat.whatsapp.com/LDqzLHYMlhg9GiO0yRrUOS?mode=gi_t
```

## Cost Structure (for client billing)

- **Vercel Hosting**: Free tier covers most portfolio sites (100GB bandwidth/month)
- **OpenRouter API**: ~$0.20 per 1M tokens (Llama 3.3 70B) — minimal cost for portfolio chat
- **Upstash Redis**: Free tier (10K requests/day) sufficient for rate limiting
- **Custom Domain**: Client purchases separately (~$10-15/year)

## Ongoing Maintenance

If the client wants updates:
1. Pull the repository
2. Update `resume-data.ts` with new experience/projects
3. Update AI chat system prompt if career data changed
4. Rebuild and redeploy: `vercel --prod`
