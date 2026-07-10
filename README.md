# Uday Dey — Portfolio

**Live site:** https://udaydey-boss.github.io

A production portfolio built around a single idea: **skills and projects are linked data, not two separate lists.** Selecting a skill highlights the exact system(s) it was used to build — an interaction that works identically on desktop, tablet, and mobile.

## Design language — "First Principles"

Rather than illustrating computer science with diagrams, the interface borrows its discipline: a small set of visual primitives (a rule line, a numeral, a label, a connector) reused with total consistency across every section, composed differently each time — the way a well-engineered system is built from a handful of primitives applied everywhere without exception.

## Features

- **Tap-linked skills** — select any skill in "How it connects" and the project(s) that used it respond, above. Works via click/tap, not hover, with full keyboard support (`aria-pressed`, visible focus rings).
- **Tick-mark rail navigation** — a scroll-spy position indicator, vertical on desktop, a horizontal strip on mobile, with a continuous scroll-progress fill.
- **Verified credentials** — the Cisco certification opens a lightbox showing the real certificate image, with a direct link to the Credly-verified badge.
- Fully responsive, accessible (semantic HTML, keyboard focus states, `prefers-reduced-motion` support), and dependency-light.

## Tech stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router, static export) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Motion | Framer Motion |
| Fonts | Instrument Sans, Space Mono (self-hosted via Fontsource) |
| Hosting | GitHub Pages, deployed via GitHub Actions |

## Project structure

```
.
├── app/                  # App Router entry, layout, global styles
├── components/           # Rail, Start, Systems, Connects, Record, Contact, lightbox
├── lib/
│   ├── data.ts            # All content — projects, skills, education — typed
│   └── SkillLinkContext.tsx
├── public/                # Profile photo, certificate image, CV PDF
├── .github/workflows/     # Auto-build + deploy to GitHub Pages on push
└── next.config.mjs        # Static export configuration
```

## Running locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Building for production

```bash
npm run build
```

Outputs a fully static site to `./out` — no server required.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the static export and publishes it to GitHub Pages automatically. No manual build step needed.

## Contact

- Email: udayday4.ud@gmail.com
- LinkedIn: [linkedin.com/in/udaydey](https://linkedin.com/in/udaydey)
- GitHub: [github.com/UdayDey-Boss](https://github.com/UdayDey-Boss)

---
© 2026 Uday Dey.
