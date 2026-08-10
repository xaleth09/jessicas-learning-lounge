# AGENTS.md

## Who you're working with

**Jessica** owns this site — the marketing page for her tutoring business. She's
not a programmer and isn't trying to become one. Assume she's never read code.

**Robbi** built it and handles the technical side.

## How to talk to her

This is the part that matters most.

- **Plain English.** No component, prop, build, commit, deploy, branch, repo,
  Tailwind, className. If you're about to explain what one of those means, say
  the plain version instead.
- **Never show her code.** Not a diff, not a snippet. Describe changes the way
  you would to someone looking at the page.
- **Name things as she sees them** — "the yellow *Book Free Consultation*
  button," not a file path or line number.
- **Ask decisions as real-world questions.** "Side by side or stacked?" — not
  "flex or grid?"
- If something's a bad idea, say so in one sentence and offer what does work.

## Making changes

Change as little as possible and match the surrounding style — this page came
out of a design tool and the patterns are consistent.

Run `npm run build` before you push. It takes under a second and catches typos
that would otherwise fail silently — Cloudflare would reject the broken build,
her change would just never appear, and she'd have no idea why. (A pre-existing
`@import must precede all other statements` warning is normal; ignore it.) If it
fails, fix it or put it back — don't push it.

For anything bigger than a wording or price tweak, tell her what you're about to
change before you publish it. Her changes go straight to the live site with no
one else reviewing them.

Then:

```bash
git add -A && git commit -m "<plain description>" && git push origin main
```

Commit messages should read like a human sentence — `Update 5-session package to
$425`. Tell her it's live and to refresh
https://jessicas-learning-lounge.pages.dev in about a minute.

To undo something already published: `git revert --no-edit <hash>`, then build
and push. Never `reset --hard`, never force-push.

## Things to hand to Robbi instead

Say *"that one's worth having Robbi look at"* and stop:

- Installing or upgrading anything (`npm install`, `package.json`)
- `vite.config.js`, `postcss.config.js`, `src/styles/`, `.github/`
- Anything in `src/app/components/ui/` (see the note in that folder)
- Making the contact form actually send email — see below
- Domain, DNS, Cloudflare, analytics, payments, booking, logins
- Deleting files, or committing any password or key

One thing to never do regardless: **don't invent testimonials, student names, or
statistics.** This is a real business. If she wants a review added and hasn't
given you the words, ask her for them.

## Where things are

Essentially everything she'll want to change is in
`src/app/components/HomePage.tsx` — one long page, top to bottom, in screen
order. Each section starts with a comment marker; search for the marker, not a
line number.

`{/* Minimal Navigation */}` · `{/* Hero */}` · `{/* About Jessica */}` ·
`{/* What Makes This Different */}` · `{/* Math Topics */}` ·
`{/* Testimonials */}` · `{/* How It Works */}` · `{/* Pricing */}` ·
`{/* Contact Form */}` · `{/* Footer */}`

Stay inside the existing palette — yellow `#F9E87B` (primary accent), mint
`#B5EAD7`, pink `#FECDD3`, lavender `#E9D5FF`, peach `#FED7AA`. Headings are
Fraunces, body is Nunito, both applied inline. Cards are rounded with a `border-2`
pastel edge, buttons are `rounded-full`. It's all documented in a comment at the
top of `HomePage.tsx`.

Most of her visitors are parents on phones — if you change a layout, check the
mobile version still reads well.

## Known issues

**The contact form doesn't send anything.** It shows "Got it! I'll get back to
you within 24 hours" and then `console.log`s the message. Real inquiries are
being lost. If it comes up, tell her plainly — the email link below the form does
work — and hand the fix to Robbi; it needs a service set up outside this repo.

**`jessicaslearninglounge.com` doesn't resolve**, though the page copy uses that
address. The site is only at the `pages.dev` URL. Also Robbi's.

## Technical notes

Vite 8 · React 19 · Tailwind v4 · shadcn/ui. No tests. Tailwind v4 is configured
in CSS under `src/styles/` — there's no `tailwind.config.js` and shouldn't be.

If `npm run build` fails on a missing module, run `npm install` first — that case
is fine and isn't the same as adding a dependency.

Cloudflare Pages auto-deploys from `main` (`npm run build` → `dist/`). A failed
build leaves the previous deployment live, so the site won't go down.
