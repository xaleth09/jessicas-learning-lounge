# AGENTS.md

## Who you're working with

**Jessica** owns this site — the marketing page for her tutoring business. She's
not a programmer and isn't trying to become one. Assume she's never read code.

She's usually on her phone, in the ChatGPT app. Keep your replies short enough to
read on a phone screen. No long lists, no walls of text.

**Robbi** built the site and handles the technical side.

## What you can and can't do here

You're reading this repo through the GitHub connector. You can **read files and
commit changes to `main`.** That's it.

**You have no terminal.** You can't run builds, tests, linters, or git commands.
Don't offer to, and don't tell her to run anything — she has no way to either.

**This means you cannot check your own work.** Nothing catches a mistake between
you committing and it being live. So:

- Keep edits small and surgical. Change the specific thing she asked about and
  nothing else.
- Read the surrounding lines before you edit, and make sure the JSX brackets,
  quotes, and tags you're touching still balance afterward.
- When in doubt, do less.

There is one net behind you: a GitHub Action builds the site after every commit,
and Cloudflare only publishes if the build succeeds. If you break something, the
live site stays on the last working version and Robbi gets an email. That
protects the site — it does **not** get her change published, and she'll be left
wondering why nothing happened. Treat it as a backstop, not a safety net.

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

## Publishing a change

Commit the edited file straight to `main`. Write the commit message as a human
sentence — `Update 5-session package to $425`, not `fix: pricing`.

Cloudflare rebuilds and publishes automatically. Tell her:

> Done — give it about a minute, then refresh
> https://jessicas-learning-lounge.pages.dev

For anything bigger than a wording or price tweak, say what you're about to
change before you commit it. Her changes go straight to the live site with no one
else reviewing them, and you can't test them first — so that sentence is the only
review that happens.

**To undo something already published:** read the file as it was in the commit
before the change, and commit that version back with a message like
`Put pricing back to $400`. Never rewrite or force over existing history.

## Things to hand to Robbi instead

Say *"that one's worth having Robbi look at"* and stop:

- Anything in `package.json`, `vite.config.js`, `postcss.config.js`,
  `src/styles/`, or `.github/`
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
order. Each section starts with a comment marker; find the marker rather than
relying on a line number.

`{/* Minimal Navigation */}` · `{/* Hero */}` · `{/* About Jessica */}` ·
`{/* What Makes This Different */}` · `{/* Math Topics */}` ·
`{/* Testimonials */}` · `{/* How It Works */}` · `{/* Pricing */}` ·
`{/* Contact Form */}` · `{/* Footer */}`

Stay inside the existing palette — yellow `#F9E87B` (primary accent), mint
`#B5EAD7`, pink `#FECDD3`, lavender `#E9D5FF`, peach `#FED7AA`. Headings are
Fraunces, body is Nunito, both applied inline. Cards are rounded with a `border-2`
pastel edge, buttons are `rounded-full`. It's documented in a comment at the top
of `HomePage.tsx`.

Most of her visitors are parents on phones. Classes like `md:grid-cols-3` control
what happens on bigger screens — if you change a layout, make sure it still reads
well stacked on a narrow screen.

## Known issues

**The contact form doesn't send anything.** It shows "Got it! I'll get back to
you within 24 hours" and then throws the message away. Real inquiries are being
lost. If it comes up, tell her plainly — the email link below the form does work
— and hand the fix to Robbi; it needs a service set up outside this repo.

**`jessicaslearninglounge.com` doesn't resolve**, though the page copy uses that
address. The site is only at the `pages.dev` URL. Also Robbi's.

**The tagline is inconsistent** — the top of the page says "Academic Coach •
6th–12th Grade" and the footer still says "Math Tutoring • 6th–12th Grade." Worth
mentioning to her if it comes up; it's a one-word fix either direction.

## Technical notes

Vite 8 · React 19 · Tailwind v4 · shadcn/ui, deployed by Cloudflare Pages from
`main`. Tailwind v4 is configured in CSS under `src/styles/` — there's no
`tailwind.config.js` and shouldn't be. No test suite.
