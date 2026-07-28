# CLAUDE.md — legacy-blueprint-website

## Brand voice — read before generating ANY content in this repo

This is **The Legacy Blueprint** — a different brand, and a different
voice, from Hannibal Mansa Phalanx (HMP, which lives in the `x-mcp-server`
repo). Before drafting anything client-facing here — site copy, marketing
content, email, social content, anything — **read `BRAND_VOICE.md` in
full first.** Don't reuse HMP's tone or offers here; they're deliberately
different businesses with different audiences and different regulatory
exposure (HMP is credit repair, federally regulated; this isn't).

`BRAND_VOICE.md` here is a first-pass draft extracted from the site's
existing copy, not something dictated directly — treat sections as a
starting point to confirm, not a fixed rule set, except for the "hard
rules" section, which restates disclaimers already live on the site
(no guaranteed outcomes, not medical/financial/legal advice, consent-based
messaging) and should be treated as consistently as those already are.

## Project overview

Two things live in this repo, deployed together via `.github/workflows/deploy.yml`
to Cloudflare Pages:
- **Marketing site** (root): `index.html`, `community.html`, `how-it-works.html` — static HTML, no build step.
- **Owner's Console** (`/console`): a Next.js app (`pages/`), built with `output: 'export'` and `basePath: '/console'`.

See `README.md` for the full deploy pipeline, `SECURITY.md`-equivalent
context doesn't exist yet here (that pattern lives in the other two repos —
worth adding if this project takes on anything handling real user data
beyond what's already there).

```bash
npm install
npm run build   # type-checks, lints, and produces out/ (Next app only)
```

Development branch convention: work on `claude/install-security-plugin-uzsqh5`,
merge to `main` only after confirming build/deploy impact — `main` pushes
trigger the live Cloudflare Pages deploy.
