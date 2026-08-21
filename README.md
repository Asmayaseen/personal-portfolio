# Asma Yaseen — Portfolio

A dark, terminal-inspired developer portfolio built with Next.js 15 (App Router), TypeScript, Tailwind CSS v4, Framer Motion, and shadcn/ui.

## Run it locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Deploy on Vercel

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo — Vercel auto-detects Next.js, no config needed.
3. Deploy. Every push to `main` redeploys automatically.

Once you have a real deployed URL, update `seo.url` in `src/lib/site-config.ts` — it's used for canonical/OG metadata and the sitemap.

## Where to edit things

Content is centralized in two files so you don't have to hunt through components.

| What you want to change | File |
|---|---|
| Name, title, tagline, hero badge, location | `src/lib/site-config.ts` |
| GitHub / LinkedIn / email / WhatsApp links | `src/lib/site-config.ts` → `links` |
| Resume PDF | Drop the file at `public/resume.pdf` (already linked from the Hero and Contact sections — no code change needed) |
| Hero stat counters (repos, hackathons, etc.) | `src/lib/site-config.ts` → `stats` |
| GitHub username used by all `github-readme-stats` embeds | `src/lib/site-config.ts` → `githubUsername` |
| GitHub stat blocks (Repositories/Stars/Followers) | `src/lib/site-config.ts` → `githubStatBlocks` |
| SEO title/description | `src/lib/site-config.ts` → `seo` |
| About-me feature cards | `src/lib/data.ts` → `aboutFeatures` |
| Skills (by technology / by agent role) | `src/lib/data.ts` → `skillsByTechnology`, `skillsByAgentRole` |
| Tech marquee strip icons | `src/lib/data.ts` → `marqueeIcons` |
| Agent Engineering Philosophy cards | `src/lib/data.ts` → `philosophyCards` |
| Projects grid | `src/lib/data.ts` → `projects` |
| Hackathon timeline (dates/descriptions) | `src/lib/data.ts` → `hackathonTimeline` — currently placeholders, swap in real entries |
| Blog / learning-journey previews | `src/lib/data.ts` → `blogPosts` |
| Testimonials | `src/lib/data.ts` → `testimonials`, then replace the placeholder grid in `src/components/sections/testimonials.tsx` with real cards mapped from that array |
| Nav links | `src/lib/data.ts` → `navLinks` |
| Accent color (currently electric purple) | `src/app/globals.css` → both the `:root` (light) and `.dark` blocks have `--accent-500` / `--accent-400` / `--accent-glow` — keep them in sync |
| Profile photo | Save your photo as `public/profile.jpg` (exact filename). Square, 500×500px recommended (min 400×400px), JPG or PNG, face centered — it's cropped into a circle. Until that file exists, a purple-gradient "AY" initials placeholder renders automatically |
| Engineering Expertise cards | `src/lib/data.ts` → `expertiseCards` |
| Blog post content | `src/lib/data.ts` → `blogPosts` — 3 drafts are in there now (Harness/Loop/Graph Engineering); edit the copy, or wire real article pages later via `src/app/blog/[slug]/page.tsx` |
| Urdu / English translations | `src/lib/i18n.tsx` → the `translations.ur` object (nav, hero, about, section headings, buttons, contact form). Card bodies (feature cards, philosophy card text, project descriptions) are English-only for now — add more keys here to extend |
| Open Graph image | `src/app/opengraph-image.tsx` — generated on the fly, no image file to manage |
| Favicon | `src/app/favicon.ico` |

## Stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS v4**
- **shadcn/ui** (Base UI primitives under the hood — `asChild` is shimmed onto the local `Button` component to keep familiar ergonomics)
- **Framer Motion** for scroll-reveal and count-up animations
- **lucide-react** for UI icons, **devicon** (via CDN) for tech-stack logos

## Notes

- Light/dark mode uses `next-themes`; defaults to dark on first visit and remembers the choice in localStorage (key `portfolio-theme`).
- Language toggle (EN/Urdu) is a lightweight React context in `src/lib/i18n.tsx`, no i18n library — choice persists in localStorage (key `portfolio-lang`). Layout stays LTR in both languages per spec; Urdu just renders in a proper Nastaliq font.
- The contact form has no backend wired up yet; see the comment in `src/components/sections/contact.tsx` for where to add one (an API route, or a service like Formspree/Resend).
- GitHub stats/streak images are live third-party embeds (github-readme-stats.vercel.app) — they can be briefly slow or rate-limited since they render on request.
