# AGENTS.md — `src/app/components/ui/`

**Do not edit any file in this folder.**

These 48 files are unmodified shadcn/ui primitives — the off-the-shelf building
blocks (buttons, inputs, cards, dialogs) that the rest of the site is assembled
from. They are shared infrastructure: a single change here can silently alter
the appearance or behavior of many places on the page at once, including places
nobody thought to look at.

Editing them is on the 🔴 red list in the root `AGENTS.md`. If a change seems to
require it, it doesn't — do one of these instead:

- **Restyle one instance.** Pass different classes at the call site in
  `HomePage.tsx`. That's how every custom-looking button on the page already
  works: `<Button className="bg-[#F9E87B] rounded-full ..." />`.
- **Need genuinely different behavior?** Stop and tell Kat this one is worth
  having Robbi look at.

Reading these files to understand what a component accepts is fine and
encouraged. Writing to them is not.
