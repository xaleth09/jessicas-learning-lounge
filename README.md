# Jessica's Learning Lounge

Marketing site for Jessica's Learning Lounge — 6th–12th grade.

**Live:** https://jessicas-learning-lounge.pages.dev

---

**Jessica — start here: [docs/START-HERE.md](docs/START-HERE.md)**

**AI agents:** read [AGENTS.md](AGENTS.md) before making changes.
`src/app/components/ui/` has its own — those files are off limits.

---

## Developers

Vite 8 · React 19 · Tailwind CSS v4 · shadcn/ui. Originally a Figma Make export.

```bash
npm install
npm run dev      # local preview
npm run build
```

Cloudflare Pages deploys from `main` (`npm run build` → `dist/`). A failed build
leaves the previous deployment live.

Nearly all page content is in
[`src/app/components/HomePage.tsx`](src/app/components/HomePage.tsx).

**Open issues:** the contact form doesn't submit anywhere (`console.log` only,
while showing the visitor a success message), and `jessicaslearninglounge.com`
doesn't resolve despite being in the page copy.
