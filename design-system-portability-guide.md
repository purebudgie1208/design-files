# Oxford Design System — Portability Guide

How to take the Oxford Design System from CampusHire and apply it to a different
project using a different AI. Contains the process, every prompt to use, and the
checklists to verify the result.

**Source file:** `context/Oxford Design System-handoff.zip`
(147 files, 8.4 MB; about 360 KB once slimmed down)

---

## Contents

1. [What the zip contains](#1-what-the-zip-contains)
2. [Known limits and placeholders](#2-known-limits-and-placeholders)
3. [The process at a glance](#3-the-process-at-a-glance)
4. [Step 1 — Build the slim package](#4-step-1--build-the-slim-package-manual)
5. [Step 2 — Extract the app patterns (Prompt B)](#5-step-2--extract-the-app-patterns-prompt-b)
6. [Step 3 — Create the project rules file (Prompt A)](#6-step-3--create-the-project-rules-file-prompt-a)
7. [Step 4 — Kick off the implementation (Master Prompt)](#7-step-4--kick-off-the-implementation-master-prompt)
8. [Step 5 — Review each phase (Prompts C and D)](#8-step-5--review-each-phase-prompts-c-and-d)
9. [Step 6 — Record the work (Prompt E)](#9-step-6--record-the-work-prompt-e)
10. [Checklists](#10-checklists)
11. [Troubleshooting](#11-troubleshooting)

---

## 1. What the zip contains

After unzipping, the files sit under `oxford-design-system/`. The `project/` folder holds the design system.

| Path | What it is | Needed by the other AI? |
|---|---|---|
| `README.md` (top level) | Claude Design handoff note addressed to coding agents | Yes (keep as `HANDOFF-README.md`) |
| `project/readme.md` | The main document: voice, visual rules, colours, type, states, motion, iconography | **Yes, most important** |
| `project/tokens/*.css` | The real values: colors, typography, spacing, radius, elevation, motion, fonts, base | **Yes, source of truth** |
| `project/styles.css` | Import list for all token files | Yes |
| `project/components/**` | Prototype components, each with `.jsx`, `.d.ts` (props) and `.prompt.md` (usage note) | Yes |
| `project/guidelines/*.html` | 20 specimen cards (colours, type, spacing, radius, shadows, voice, motion) | Yes |
| `project/ui_kits/website/` | A full working example of the marketing website | Yes (visual reference) |
| `project/SKILL.md` | Skill entry point for Claude-based agents | Optional |
| `project/assets/imagery/` | Photos extracted from screenshots of a real institution's site | **No, do not ship** |
| `project/ref/`, `project/uploads/` | The original screenshots | No (about 5 MB of the 8 MB) |
| `_ds_bundle.js`, `_ds_manifest.json`, `_adherence.oxlintrc.json`, `.thumbnail`, `thumbnail.html` | Tooling and preview files | No |

Component families:

- **core:** Button, IconButton, Chip, Icon, Eyebrow, SectionHeading, Wordmark, GridLines
- **forms:** FormField, Input, Textarea, Select, PhoneInput, SearchField
- **cards:** StatCard, FeatureCard, EventCard, NewsCard, ProgramRow
- **navigation:** NavBar, NavItem, Footer, Carousel
- **media:** HeroSlide, MediaShowcase

---

## 2. Known limits and placeholders

Tell the other AI about these, or it will guess.

1. **Marketing website only.** The zip has no dashboard, table, KPI tile, status badge, modal or admin patterns. CampusHire worked those out in `context/ui-context.md`. Step 2 (Prompt B) turns them into a portable file. Skip it if the new project has no app UI.
2. **The font is a substitute.** Schibsted Grotesk stands in for a licensed Neue Montreal / Helvetica Now font. It loads from Google Fonts in `tokens/fonts.css`.
3. **The icons are a substitute.** Lucide stands in for the original monoline set.
4. **There is no logo.** The system uses a plain text wordmark on purpose.
5. **The photos come from a real organisation's website.** Use them as layout placeholders only. Replace them with your own images before publishing.
6. **The components are JSX prototypes.** They are not TypeScript, Next.js or Tailwind ready. The AI must port them to your stack.
7. **Some values are marked "(inferred)".** They were reconstructed visually from screenshots, not taken from a source file.

---

## 3. The process at a glance

| # | Step | Who does it | Where |
|---|---|---|---|
| 1 | Build the slim package | You, by hand | File Explorer / terminal |
| 2 | Extract app patterns | AI, **Prompt B** | CampusHire |
| 3 | Create the project rules file | AI, **Prompt A** | New project |
| 4 | Implement in phases | AI, **Master Prompt** | New project |
| 5 | Review and fix each phase | AI, **Prompts C and D** | New project (use a fresh chat for C) |
| 6 | Record the work | AI, **Prompt E** | New project |

Do steps 1 to 3 once. Repeat steps 4 to 6 for each phase.

---

## 4. Step 1 — Build the slim package (manual)

Goal: a small folder (about 360 KB) containing only what the AI needs.

### Option A — terminal (Git Bash)

Tested on a copy of this zip. Run it in the new project's root after unzipping into a temporary folder:

```bash
# 1. Unzip into a temp folder (adjust the zip path)
unzip -q "/path/to/Oxford Design System-handoff.zip" -d _ds_tmp

# 2. Move the design system into the project
mkdir -p docs
mv _ds_tmp/oxford-design-system/project docs/design-system
cp _ds_tmp/oxford-design-system/README.md docs/design-system/HANDOFF-README.md
rm -rf _ds_tmp

# 3. Remove what the AI does not need
cd docs/design-system
rm -rf ref uploads assets/imagery .thumbnail _ds_bundle.js _ds_manifest.json _adherence.oxlintrc.json thumbnail.html
```

### Option B — File Explorer

1. Right-click the zip and choose **Extract All**.
2. Open `oxford-design-system/` and copy the `project` folder into your new project as `docs/design-system`.
3. Copy the top-level `README.md` into it and rename it `HANDOFF-README.md`.
4. Delete these from `docs/design-system`: `ref/`, `uploads/`, `assets/imagery/`, `.thumbnail`, `_ds_bundle.js`, `_ds_manifest.json`, `_adherence.oxlintrc.json`, `thumbnail.html`.

### Expected result

```text
docs/design-system/
├── HANDOFF-README.md
├── SKILL.md
├── readme.md
├── styles.css
├── tokens/        (8 css files)
├── components/    (core, forms, cards, navigation, media)
├── guidelines/    (20 html specimen cards)
└── ui_kits/       (website example)
```

Commit this folder so any AI session can read it.

> The example website in `ui_kits/` points at the photos you removed, so its images will look broken when you open it. The layout and styling are still correct.

---

## 5. Step 2 — Extract the app patterns (Prompt B)

**Run in CampusHire.** It produces `context/app-patterns.md`, a portable summary of the dashboard patterns. Copy that file to `docs/design-system/app-patterns.md` in the new project.

Skip this step if the new project is marketing-only.

```text
Read `context/ui-context.md` and the matching global CSS. Create `context/app-patterns.md`, a portable, project-independent guide to the app UI patterns of this design language, so another project can reproduce them without seeing CampusHire code.

Include these sections: tables, KPI/stat tiles, status badges and filter pills, form fields and inputs, buttons, tabs, steppers, modals, toasts, empty states, danger zones, toggle rows, date/time pickers, pagination, and interaction states (hover, focus, active, disabled).

For each pattern give:
- exact token values: colours, radius, padding, font size and weight, border and shadow
- a small HTML + CSS snippet (no React, no project-specific class names or imports)
- do and don't notes

Also include a colour-role table for status colours (success, warning, danger, info) as used in this project.

Remove anything specific to CampusHire: student, drive and placement wording, file paths, feature names. Do not include motion rules that apply only to the landing page. Do not change any source code. When done, list the patterns you were unsure about.
```

**Check the output:** open `app-patterns.md` and confirm there is no "student", "drive", "placement", or any file path in it.

---

## 6. Step 3 — Create the project rules file (Prompt A)

**Run in the new project**, after Step 1 (and Step 2 if you did it). The AI inspects your code and writes the rules that connect the design system to your stack.

```text
Inspect this project and create `docs/design-system/PROJECT-RULES.md`. This file tells any AI how to apply the Oxford Design System here. Read `docs/design-system/HANDOFF-README.md`, `docs/design-system/readme.md` and `docs/design-system/tokens/*.css` first. If `docs/design-system/app-patterns.md` exists, read it too.

Base the file on what you find in the code, not on assumptions. It must contain:
1. Stack: framework, styling approach (Tailwind / CSS modules / plain CSS), component library, font loading method, icon library, dark-mode setup.
2. Token mapping: a table showing where each token file goes in this project (for example `colors.css` into `app/globals.css` :root, or into the Tailwind theme). Note any existing variables that conflict and propose how to handle them.
3. Component mapping: for each design-system component (Button, Input, Select, Chip, cards, NavBar, Footer and the rest), show whether this project already has an equivalent, which file it lives in, and whether to restyle it or create it.
4. Scope rules: styling only. Do not change page structure, content, routes or logic. List which folders and files may be edited and which are off limits.
5. Hard rules copied from the design system: colour roles, type scale, radii, shadows, motion, no emoji, no gradients, 1240px max width.
6. Known gaps: things the design system does not cover, such as dashboards, tables and charts. Flag each one as a question for me.
7. A definition of done checklist for each phase.

Do not change any source code. Ask me about anything unclear before writing the file.
```

**Check the output:** read the token mapping and component mapping tables. Fix anything that looks wrong before you continue. Every later prompt depends on this file.

---

## 7. Step 4 — Kick off the implementation (Master Prompt)

**Run in the new project.** This starts with an inspection and a plan, and writes no code until you approve.

Before sending, replace `<NAME THE FIRST PAGE>` and `<YOUR PROGRESS OR CONTEXT FILE>`.

If you created `app-patterns.md`, add this line under "Inputs":
`- App/dashboard patterns: docs/design-system/app-patterns.md`

```text
You are implementing an existing design system, called "Oxford Design System", into this project. This is a STYLING task. Do not change page structure, content, routes, data logic or business logic unless I say so.

## Inputs
- Design system files are in `docs/design-system/` (from a Claude Design handoff). Read in this order:
  1. `HANDOFF-README.md` and `readme.md` (visual rules, voice, colour, type, states, motion, iconography)
  2. `tokens/*.css` (source of truth for every value)
  3. `components/**` (each component's .jsx, .d.ts props contract and .prompt.md usage note)
  4. `guidelines/*.html` (specimen cards for colours, type, spacing, radius, elevation)
  5. `ui_kits/website/*` (a full worked example of the system in use)
- Project-specific rules are in `docs/design-system/PROJECT-RULES.md`. Follow them.
- The files are HTML/CSS/JS PROTOTYPES, not production code. Recreate the visual output in this project's stack. Do not copy the prototype's internal structure unless it fits.

## Step 0: before writing any code
1. Inspect this project and tell me: framework, styling approach (Tailwind / CSS modules / plain CSS), component library, existing theme/tokens file, font setup, and dark-mode handling.
2. Summarise the design system in 10 lines: palette roles, type scale, radii, spacing, motion, component list.
3. List any ambiguity, conflict with the current project, or anything the design system does not cover. Ask me before proceeding. Then give me a phase plan and wait for my approval.

## Non-negotiable design rules (from the system)
- Tokens: port `tokens/*.css` as CSS variables (or map into the Tailwind theme) WITHOUT changing values. No hard-coded hex, px radius or shadow in components. Use tokens only.
- Colour: Oxford Blue #002147 is for actions only (primary buttons, active chips). Gold #C39A67 is an accent only (italic labels, ordinals, one emphasised headline line, link hover), never a fill. Near-black #0F0F0F may own at most two full sections. Max two background colours per screen.
- Type: one family (Schibsted Grotesk), weights 400/500, tight negative tracking above 24px, italic eyebrows. Use the defined scale (display / h1-h4 / stat / body / caption / eyebrow).
- Surfaces: hairline borders (#E6E6E6) do the work. Shadows are rare and very soft. No gradients except photo scrims and the footer wordmark. No glows, inner shadows or coloured shadows.
- Radii: 999px pills for buttons, 14px cards, 8px fields, 16px media, 18px shell, 6px small chips.
- Buttons: navy pill with a circular white arrow badge. Hover lightens to #012C5E. Press is scale(.985). Focus is the 3px navy 22% ring, never a browser outline. Disabled is 40% opacity.
- Motion: fade plus small translate only. No bounce, spring or rotation. Durations and easings come from `motion.css`. Respect `prefers-reduced-motion`.
- Icons: monoline outline, 1.5px stroke, currentColor (Lucide). No emoji anywhere.
- Copy style (only when I ask you to write copy): Title Case headlines, sentence-case body, British spelling, CTAs verb-first with an arrow.
- Layout: max content width 1240px, 40px page padding, 20px gutters, ~88px section rhythm.

## Constraints
- Do NOT use photos from the design system folder in production. They are placeholders of a real institution's imagery. Use my own assets.
- Do NOT add a logo or crest. Use a plain text wordmark unless I supply a logo.
- If the font or icon set cannot be loaded, tell me and suggest a fallback. Do not silently swap.
- Do not add new dependencies without asking.
- Keep accessibility: contrast AA, visible focus states, keyboard support, semantic HTML, responsive down to 375px wide.

## Delivery
Work in phases and stop for my review after each:
  Phase 1: tokens and font only (global CSS/theme). Show me the diff and the token map.
  Phase 2: base primitives (Button, Input/Textarea/Select/FormField, Chip, Card, Eyebrow, Icon).
  Phase 3: layout shell (page frame, hairline grid, NavBar, Footer).
  Phase 4: restyle pages one at a time, starting with: <NAME THE FIRST PAGE>.
After every phase: list the files changed, anything that deviates from the design system and why, and a short checklist of what I should check in the browser. Then append a short entry to `<YOUR PROGRESS OR CONTEXT FILE>` describing what was done.

Begin with Step 0 now. Write no code yet.
```

**How to use it:**

1. The AI replies with its inspection, summary and phase plan.
2. Answer its questions and approve the plan.
3. It does Phase 1 and stops. Open the app, check it, and move to Step 5.
4. Tell it "Proceed to Phase 2" once the phase passes review. Repeat for each phase.

---

## 8. Step 5 — Review each phase (Prompts C and D)

Do this after **every** phase, before approving the next.

### Prompt C — audit (use a fresh chat if you can)

```text
Review the work done in the last phase against the Oxford Design System in `docs/design-system/` and `docs/design-system/PROJECT-RULES.md`. Do not fix anything yet. Report only.

Check and list violations with file and line:
1. Hard-coded colours, px radii, shadows, fonts or durations that should be tokens.
2. Colour-role breaks: navy used as a large background, gold used as a fill, more than two background colours on one screen.
3. Gradients, glows or coloured shadows outside the allowed cases.
4. Emoji anywhere.
5. Type that is off the defined scale, or missing the negative tracking above 24px.
6. Button and field states missing: hover, press (scale .985), focus ring, disabled (40% opacity).
7. Motion other than fade and small translate, or missing `prefers-reduced-motion` handling.
8. Anything that changed page structure, content or logic (scope violations).
9. Accessibility: contrast, visible focus, keyboard access, layout at 375px width.

Give a table: issue, file:line, severity, and suggested fix. End with a pass/fail verdict for the phase.
```

### Prompt D — fix

```text
Fix the violations from the review above, in severity order. Change styling only. After each fix, say what changed. When finished, re-check the items you fixed and confirm none remain. Do not touch anything outside the reported items.
```

### Your own visual check

- Open the app next to `docs/design-system/ui_kits/website/index.html` and compare them.
- Try hover, press, focus (Tab key) and disabled on buttons and fields.
- Resize to about 375px wide.
- Search the code for stray colours. This command lists any hex values outside the token files:

```bash
grep -rnE "#[0-9a-fA-F]{3,8}\b" src app components --include=*.css --include=*.tsx --include=*.jsx | grep -v "tokens"
```

Adjust the folder names to match your project.

---

## 9. Step 6 — Record the work (Prompt E)

Run at the end of each phase. It keeps later sessions, and later AIs, consistent.

```text
Append a dated entry to `<YOUR PROGRESS OR CONTEXT FILE>` covering this phase: what was implemented, files changed, deviations from the design system and why, open questions, and what the next phase is. If any token, component or rule changed from the design system, also update `docs/design-system/PROJECT-RULES.md`.
```

---

## 10. Checklists

### Before you start

- [ ] Slim package is in `docs/design-system/` and committed
- [ ] `app-patterns.md` copied in (if the new project has app UI)
- [ ] `PROJECT-RULES.md` created and read by you
- [ ] The new project is on a clean git branch, so the changes are easy to revert

### After each phase

- [ ] Prompt C says pass (or Prompt D fixed all the findings)
- [ ] The app builds and runs with no console errors
- [ ] No hard-coded colours, radii or shadows outside the token files
- [ ] Hover, press, focus and disabled states work
- [ ] Looks right at 375px wide
- [ ] Nothing changed in routes, content or logic
- [ ] Progress file updated (Prompt E)

### Before you publish

- [ ] Every photo from the design system is replaced with your own
- [ ] No logo or crest from the source is present
- [ ] Font and icon licences are checked (Schibsted Grotesk and Lucide are free, but confirm for your use)
- [ ] Copy is your own and British spelling is consistent (if you kept that rule)

---

## 11. Troubleshooting

| Problem | What to do |
|---|---|
| The AI starts writing code in Step 0 | Reply: "Stop. No code yet. Finish Step 0 and wait for my approval." |
| The AI changes page layout or content | Revert with git. Re-send the scope rule: "Styling only. Do not change structure, content or logic." |
| The AI invents colours or uses Tailwind defaults | Point it at `tokens/colors.css` and say "Use only these tokens. Show me the mapping." |
| Colours look different from the demo | Check the token values were copied unchanged, and that dark-mode or theme classes aren't overriding them |
| The font falls back to Arial | The Google Fonts import is missing or blocked. Check the font loading in the new project matches `tokens/fonts.css` |
| Too many things changed at once | Go back to the last good git commit and re-run the phase with a narrower scope |
| The AI ignores the design rules halfway through | Start a new chat, tell it to read `PROJECT-RULES.md`, `readme.md` and the progress file first, then continue from the next phase |
| The AI can't read zip files or large folders | Paste only `readme.md` and `tokens/*.css` (about 25 KB) into the chat as a minimal fallback |
| The other AI has no file access | Paste the contents of `PROJECT-RULES.md`, `readme.md` and `tokens/*.css` into the chat yourself at the start of each session |
