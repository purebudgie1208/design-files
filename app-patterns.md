# App UI Patterns — Oxford Design Language

A portable guide to the **application UI patterns** (dashboards, tables, forms, dialogs) of this design language. It complements the marketing-site design system, which has no app components. It is written so another project can reproduce the look without seeing the original code.

- **Stack-neutral.** Every pattern is plain HTML + CSS. Port the snippets to React, Vue, Tailwind or anything else.
- **Class names are generic.** They use a `ds-` prefix. Rename them freely.
- **Values are exact.** They come from the working stylesheet, not from older documentation, which had drifted.
- **Scope.** Signed-in app screens only. Landing-page scroll effects are not covered.

---

## 0. Contents

1. [Foundation tokens](#1-foundation-tokens)
2. [Colour roles for status](#2-colour-roles-for-status)
3. [Cards and panels](#3-cards-and-panels)
4. [Buttons](#4-buttons)
5. [Status badges and filter pills](#5-status-badges-and-filter-pills)
6. [Form fields and inputs](#6-form-fields-and-inputs)
7. [Tables](#7-tables)
8. [KPI and stat tiles](#8-kpi-and-stat-tiles)
9. [Tabs](#9-tabs)
10. [Steppers](#10-steppers)
11. [Modals](#11-modals)
12. [Toasts](#12-toasts)
13. [Empty states](#13-empty-states)
14. [Danger zones](#14-danger-zones)
15. [Toggle rows](#15-toggle-rows)
16. [Date and time pickers](#16-date-and-time-pickers)
17. [Pagination](#17-pagination)
18. [Interaction states](#18-interaction-states)
19. [Unsure patterns](#19-patterns-i-was-unsure-about)

---

## 1. Foundation tokens

Every snippet below uses these. Paste this block first.

```css
:root {
  /* Surfaces */
  --surface-0: #FAFAFA;   /* sunken: stat tiles, table header, row hover, page body */
  --surface-1: #F2F2F2;   /* hover fills, grey badges, tracks */
  --surface-2: #FFFFFF;   /* canvas, cards, modals, inputs */

  /* Text */
  --text-primary: #0F0F0F;
  --text-secondary: #4A4A4A;
  --text-muted: #8C8C8C;

  /* Borders */
  --border: #E6E6E6;          /* hairline */
  --border-strong: #D2D2D2;   /* outline buttons, stronger dividers */
  --field-border: #E2E2E2;    /* inputs */
  --grid-line: #EDEDED;       /* optional vertical page grid */

  /* Brand */
  --accent: #002147;          /* Oxford Blue: every action, active state, link */
  --accent-hover: #012C5E;
  --accent-dark: #001736;
  --accent-light: #EEF1F7;
  --accent-glow: 84, 140, 214;            /* rgb triplet */
  --focus-ring: 0 0 0 3px rgba(0, 33, 71, 0.22);
  --gold: #C39A67;            /* small accents only, never a fill */
  --gold-dark: #8A6A35;       /* gold text on white */
  --gold-light: #F7F1E7;

  /* Status pairs (tint + strong text) */
  --teal: #0F6E56;   --teal-light: #E1F5EE;
  --amber: #854F0B;  --amber-light: #FAEEDA;
  --red: #A32D2D;    --red-light: #FCEBEB;
  --purple: #534AB7; --purple-light: #EEEDFE;

  /* Radius */
  --radius-sm: 4px;
  --radius: 8px;        /* fields, small tiles */
  --radius-md: 10px;
  --radius-lg: 14px;    /* cards, tables, tiles */
  --radius-shell: 18px; /* canvas, modals */
  --radius-pill: 999px; /* buttons, badges, pills */

  /* Elevation: rare and soft. Hairlines do the work. */
  --shadow-chip: 0 1px 2px rgba(16, 16, 16, 0.06);
  --shadow-raised: 0 2px 8px rgba(16, 16, 16, 0.07);
  --shadow-card: 0 8px 28px rgba(16, 16, 16, 0.07);
  --shadow-shell: 0 24px 70px rgba(16, 16, 16, 0.12);

  /* Motion */
  --ease-standard: cubic-bezier(0.22, 0.61, 0.36, 1);
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --dur-fast: 120ms; --dur-base: 220ms; --dur-slow: 420ms;
}

body {
  margin: 0;
  background: var(--surface-0);
  color: var(--text-primary);
  font-family: "Schibsted Grotesk", system-ui, -apple-system, "Segoe UI", sans-serif;
  font-size: 14px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}
h1, h2, h3, h4, h5, h6 { margin: 0; font-weight: 500; letter-spacing: -0.025em; }

/* Global keyboard focus: a soft 3px navy ring */
:focus-visible { outline: 3px solid rgba(0, 33, 71, 0.28); outline-offset: 1px; }
```

**Type scale used in app screens**

| Role | Size | Weight | Notes |
|---|---|---|---|
| Page title | 32px | 500 | tracking `-0.028em`, line-height 1.1 |
| Section title | 19px | 500 | tracking `-0.018em`, line-height 1.3 |
| Panel title | 14px | 500 | tracking `-0.01em` |
| Body | 14px | 400 | line-height 1.6 |
| UI text (inputs, cells, buttons) | 13px | 400 / 500 | |
| Field label | 12px | 500 | `--text-secondary` |
| Table header | 11.5px | 500 | `--text-muted`, tracking `0.01em` |
| Badge | 11px | 500 | |
| Hint / caption | 11–12px | 400 | `--text-muted` |
| Eyebrow | 12px | 400 italic | `--gold-dark`, above a title |
| Stat number | 36–44px | 500 | tracking `-0.03em`, line-height 1.05 |

**Rules that apply everywhere**

- **Font and weight:** one family. Headings are weight 500, never 600 or 700.
- **Borders:** `1px solid var(--border)`.
- **Colour:** navy is for actions. Gold is a small accent only. Never use both as large fills.
- **Shadows:** only modals, menus, pickers and the primary button cast one.
- **Icons:** outline icons, about 1.5px stroke, in `currentColor`, 14–16px in UI.

---

## 2. Colour roles for status

Status colour is always a **soft tint background plus a strong text colour**. Never use the strong colour as a background, except for the primary and danger buttons.

| Role | Background | Text | Use it for | Never use it for |
|---|---|---|---|---|
| **Success** | `--teal-light` `#E1F5EE` | `--teal` `#0F6E56` | done, verified, live, active, confirmed | a primary action |
| **Warning / attention** | `--amber-light` `#FAEEDA` | `--amber` `#854F0B` | needs action, pending, review, blocked-but-fixable | errors |
| **Danger / critical** | `--red-light` `#FCEBEB` | `--red` `#A32D2D` | rejected, overdue, error, irreversible action | emphasis |
| **Info / in progress** | `--purple-light` `#EEEDFE` | `--purple` `#534AB7` | draft, processing, informational | actions |
| **Brand / selected** | `--accent-light` `#EEF1F7` | `--accent` `#002147` | selected, current, ready, links | status of a record |
| **Neutral** | `--surface-1` `#F2F2F2` | `--text-secondary` `#4A4A4A` | inactive, archived, upcoming, locked | anything urgent |
| **Highlight (gold)** | `--gold-light` `#F7F1E7` | `--gold-dark` `#8A6A35` | counts on dark, source or origin tags; use sparingly | status |

Other colour facts:

- **Status text colours on white** all pass AA contrast.
- **Danger solid:** `--red` with hover `#831F1F`. It appears only on destructive buttons.
- **Attention tiles:** a tile that demands action uses `--amber-light` with a border of `color-mix(in srgb, var(--amber) 28%, transparent)`, and its label and number turn `--amber`.

---

## 3. Cards and panels

```html
<div class="ds-card">…</div>
<div class="ds-panel">…</div>   <!-- sunken, holds white inner cards -->
```

```css
.ds-card {
  background: var(--surface-2);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);   /* 14px */
  padding: 22px;
}
.ds-panel {
  background: var(--surface-0);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 18px;
}
.ds-panel-title { font-size: 14px; font-weight: 500; letter-spacing: -0.01em; }
.ds-panel-hint  { font-size: 12px; color: var(--gold-dark); margin: 0 0 14px; }

/* Only clickable cards react to hover */
a.ds-card { transition: border-color var(--dur-base) var(--ease-standard), box-shadow var(--dur-slow) var(--ease-out); }
a.ds-card:hover { border-color: var(--border-strong); box-shadow: var(--shadow-card); }
```

**Do**
- Keep cards flat: hairline, no shadow.
- Put white cards inside sunken (`--surface-0`) panels.

**Don't**
- Don't stack shadows on static cards.
- Don't nest a sunken panel inside another sunken panel.

---

## 4. Buttons

```html
<button class="ds-btn ds-btn-primary">Save changes</button>
<button class="ds-btn ds-btn-outline">Cancel</button>
<button class="ds-btn ds-btn-ghost">Dismiss</button>
<button class="ds-btn ds-btn-danger">Delete</button>
<button class="ds-btn ds-btn-primary ds-btn-sm">Small</button>
```

```css
.ds-btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 6px;
  padding: 9px 18px;
  border: 1px solid transparent;
  border-radius: var(--radius-pill);
  font: 500 13px/1 inherit; font-family: inherit;
  white-space: nowrap; cursor: pointer;
  transition: background-color .22s ease, border-color .22s ease, box-shadow .22s ease,
              color .22s ease, opacity .22s ease, transform .12s ease;
}
.ds-btn:active:not(:disabled) { transform: scale(.985); }
.ds-btn:disabled { opacity: .55; cursor: not-allowed; }
.ds-btn > svg { flex-shrink: 0; transition: transform var(--dur-base) var(--ease-standard); }
.ds-btn:hover:not(:disabled) > svg:last-child:not(:first-child) { transform: translateX(2px); }

.ds-btn-primary {
  color: #fff;
  background-color: var(--accent);
  background-image: radial-gradient(45% 40% at 50% 0%, rgba(var(--accent-glow), .55) 0%, rgba(0,0,0,0) 100%);
  border-color: rgba(var(--accent-glow), .45);
  box-shadow: inset 0 1px 0 rgba(255,255,255,.12), 0 4px 12px rgba(0,33,71,.14);
}
.ds-btn-primary:hover:not(:disabled) {
  background-color: var(--accent-hover);
  border-color: rgba(var(--accent-glow), .8);
  box-shadow: inset 0 1px 0 rgba(255,255,255,.18), 0 8px 20px rgba(var(--accent-glow), .25);
}
.ds-btn-primary:active:not(:disabled) { background-color: var(--accent-dark); }

.ds-btn-outline {
  background: var(--surface-2); color: var(--text-primary);
  border-color: var(--border-strong); box-shadow: var(--shadow-chip);
}
.ds-btn-outline:hover:not(:disabled) { background: var(--surface-0); border-color: var(--accent); color: var(--accent); }

.ds-btn-ghost { background: transparent; color: var(--text-secondary); }
.ds-btn-ghost:hover:not(:disabled) { background: var(--surface-1); color: var(--text-primary); }

.ds-btn-danger { background: var(--red); color: #fff; }
.ds-btn-danger:hover:not(:disabled) { background: #831f1f; }

.ds-btn-sm { padding: 6px 13px; font-size: 12px; }
```

| Variant | Background | Text | Border | Hover |
|---|---|---|---|---|
| Primary | `#002147` + soft top glow | white | `rgba(84,140,214,.45)` | `#012C5E`, brighter border, blue halo |
| Outline | white | `#0F0F0F` | `#D2D2D2` | border and text go navy, bg `#FAFAFA` |
| Ghost | transparent | `#4A4A4A` | none | bg `#F2F2F2`, text `#0F0F0F` |
| Danger | `#A32D2D` | white | none | `#831F1F` |

**Do**
- Use one primary button per view or dialog.
- Pair a trailing arrow icon with forward actions; it nudges 2px on hover.

**Don't**
- Don't use square or small-radius buttons.
- Don't invert colours on press. Press is `scale(.985)` and a darker navy.

---

## 5. Status badges and filter pills

### Badges

```html
<span class="ds-badge ds-badge-green">Live</span>
<span class="ds-badge ds-badge-amber">Needs action</span>
<span class="ds-badge ds-badge-red">Rejected</span>
<span class="ds-badge ds-badge-purple">Draft</span>
<span class="ds-badge ds-badge-accent">Selected</span>
<span class="ds-badge ds-badge-gold">New</span>
<span class="ds-badge ds-badge-gray">Archived</span>
```

```css
.ds-badge {
  display: inline-flex; align-items: center;
  padding: 2px 10px;
  border-radius: var(--radius-pill);
  font-size: 11px; font-weight: 500; line-height: 1.6;
  /* hairline in the badge's own colour keeps tints crisp on white */
  box-shadow: inset 0 0 0 1px color-mix(in srgb, currentColor 16%, transparent);
}
.ds-badge-green  { background: var(--teal-light);   color: var(--teal); }
.ds-badge-amber  { background: var(--amber-light);  color: var(--amber); }
.ds-badge-red    { background: var(--red-light);    color: var(--red); }
.ds-badge-purple { background: var(--purple-light); color: var(--purple); }
.ds-badge-accent { background: var(--accent-light); color: var(--accent); }
.ds-badge-gold   { background: var(--gold-light);   color: var(--gold-dark); }
.ds-badge-gray   { background: var(--surface-1);    color: var(--text-secondary); }
```

### Status pill with icon (for record lists)

Always shows icon **and** words, so colour is never the only signal.

```html
<span class="ds-status ds-status-live">
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M8 12l3 3 5-6"/></svg>
  Live
</span>
```

```css
.ds-status {
  display: inline-flex; align-items: center; gap: 5px;
  padding: 2px 9px 2px 7px;
  border-radius: var(--radius-pill);
  font-size: 11.5px; font-weight: 500; white-space: nowrap;
  box-shadow: inset 0 0 0 1px color-mix(in srgb, currentColor 18%, transparent);
}
.ds-status-attention { background: var(--amber-light);  color: var(--amber); }
.ds-status-draft     { background: var(--purple-light); color: var(--purple); }
.ds-status-ready     { background: var(--accent-light); color: var(--accent); }
.ds-status-live      { background: var(--teal-light);   color: var(--teal); }
.ds-status-muted     { background: var(--surface-1);    color: var(--text-secondary); }
.ds-status-danger    { background: var(--red-light);    color: var(--red); }
```

### Source or origin tag

Same pill shape with a 1px border: navy tint for one origin, gold tint for another.

```css
.ds-source { display: inline-flex; padding: 1px 8px; border-radius: var(--radius-pill);
  font-size: 11px; font-weight: 500; border: 1px solid var(--border); }
.ds-source-a { background: var(--accent-light); color: var(--accent);
  border-color: color-mix(in srgb, var(--accent) 18%, transparent); }
.ds-source-b { background: var(--gold-light); color: var(--gold-dark);
  border-color: color-mix(in srgb, var(--gold) 30%, transparent); }
```

### Filter pills

```html
<div class="ds-pills" role="group" aria-label="Filter">
  <button class="ds-pill ds-pill-active" aria-pressed="true">All</button>
  <button class="ds-pill" aria-pressed="false">Unread</button>
</div>
```

```css
.ds-pills { display: flex; flex-wrap: wrap; gap: 8px; }
.ds-pill {
  padding: 6px 14px; font-size: 12px; font-family: inherit;
  border: 1px solid var(--border); border-radius: var(--radius-pill);
  background: var(--surface-2); color: var(--text-secondary); cursor: pointer;
  transition: border-color .22s ease, color .22s ease, background-color .22s ease;
}
.ds-pill:hover { border-color: var(--border-strong); color: var(--text-primary); }
.ds-pill-active {
  background: var(--accent); border-color: var(--accent); color: #fff;
  box-shadow: 0 2px 8px rgba(0, 33, 71, .16);
}
```

**Do**
- Use a badge for state, and colour only as the tint.
- Keep badge text short: one or two words.

**Don't**
- Don't invent new badge colours. Choose the role from section 2.
- Don't use a badge as a button.

---

## 6. Form fields and inputs

```html
<div class="ds-field">
  <label for="name">Full name</label>
  <input id="name" type="text" placeholder="Enter a name" />
  <div class="ds-hint">As shown on documents.</div>
</div>

<div class="ds-field-row">
  <div class="ds-field"><label for="a">First</label><input id="a" /></div>
  <div class="ds-field"><label for="b">Second</label><select id="b"><option>One</option></select></div>
</div>
```

```css
.ds-field { margin-bottom: 16px; }
.ds-field label { display: block; margin-bottom: 6px; font-size: 12px; font-weight: 500; color: var(--text-secondary); }
.ds-field input, .ds-field select, .ds-field textarea {
  width: 100%; padding: 10px 12px;
  border: 1px solid var(--field-border); border-radius: var(--radius);
  background: var(--surface-2); color: var(--text-primary);
  font: 13px inherit; font-family: inherit;
  transition: border-color .22s ease, box-shadow .22s ease;
}
.ds-field input::placeholder, .ds-field textarea::placeholder { color: #A6A6A6; }
.ds-field input:hover:not(:focus):not(:disabled),
.ds-field select:hover:not(:focus):not(:disabled),
.ds-field textarea:hover:not(:focus):not(:disabled) { border-color: var(--border-strong); }
.ds-field input:focus, .ds-field select:focus, .ds-field textarea:focus {
  outline: none; border-color: var(--accent); box-shadow: var(--focus-ring);
}
.ds-field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.ds-hint { margin-top: 4px; font-size: 11px; color: var(--text-muted); }
.ds-field-error input { border-color: var(--red); }
.ds-field-error .ds-hint { color: var(--red); }
```

### Compact filter controls (toolbars)

```css
.ds-input, .ds-select {
  height: 34px; padding: 0 11px; font-size: 13px;
  border: 1px solid var(--field-border); border-radius: var(--radius);
  background: var(--surface-2); color: var(--text-primary);
}
.ds-input:focus-visible, .ds-select:focus-visible { outline: none; border-color: var(--accent); box-shadow: var(--focus-ring); }
.ds-search { width: 260px; max-width: 100%; }
```

### Tag input

```html
<div class="ds-tags">
  <span class="ds-tag">Design <button aria-label="Remove Design">×</button></span>
  <input class="ds-tags-input" placeholder="Add a tag" />
</div>
```

```css
.ds-tags { display: flex; flex-wrap: wrap; gap: 6px; padding: 8px;
  border: 1px solid var(--field-border); border-radius: var(--radius); background: var(--surface-2); }
.ds-tag { display: inline-flex; align-items: center; gap: 6px; padding: 3px 10px;
  background: var(--accent-light); color: var(--accent); border-radius: var(--radius-pill); font-size: 12px; }
.ds-tag button { background: none; border: none; cursor: pointer; color: var(--text-muted); font-size: 12px; line-height: 1; }
.ds-tag button:hover { color: var(--red); }
.ds-tags-input { flex: 1; min-width: 120px; border: none; outline: none; background: transparent; font-size: 13px; padding: 4px; }
```

### Drop zone

```css
.ds-dropzone { background: var(--surface-0); border: 1.5px dashed var(--border-strong);
  border-radius: var(--radius-lg); padding: 32px; text-align: center; cursor: pointer;
  transition: border-color .22s ease, background .22s ease; }
.ds-dropzone:hover, .ds-dropzone.dragover { border-color: var(--accent); background: var(--accent-light); }
```

**Do**
- Label every input. Give placeholders as examples, not as labels.
- Use the hint line for format rules, and the error line in `--red`.

**Don't**
- Don't use the browser's native date, time or datetime inputs. Use the pickers in section 16.
- Don't show the error state before the user has interacted.

---

## 7. Tables

```html
<div class="ds-table-wrap">
  <table class="ds-table">
    <thead><tr><th>Name</th><th>Owner</th><th>Status</th><th></th></tr></thead>
    <tbody>
      <tr><td>Alpha</td><td>Sam</td><td><span class="ds-badge ds-badge-green">Live</span></td><td><a href="#">Open</a></td></tr>
    </tbody>
  </table>
  <!-- pagination bar goes here, see section 17 -->
</div>
```

```css
.ds-table-wrap {
  background: var(--surface-2);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);   /* 14px */
  overflow: hidden;
}
.ds-table { width: 100%; border-collapse: collapse; }
.ds-table th {
  padding: 11px 12px;
  background: var(--surface-0); color: var(--text-muted);
  font-size: 11.5px; font-weight: 500; letter-spacing: .01em;
  text-align: left; white-space: nowrap;
  border-bottom: 1px solid var(--border);
}
.ds-table td {
  padding: 13px 12px; color: var(--text-primary); font-size: 13px;
  border-bottom: 1px solid var(--border);
}
.ds-table th:first-child, .ds-table td:first-child { padding-left: 18px; }
.ds-table th:last-child,  .ds-table td:last-child  { padding-right: 18px; }
.ds-table tr:last-child td { border-bottom: none; }
.ds-table tbody tr { transition: background-color .22s ease; }
.ds-table tbody tr:hover { background: var(--surface-0); }
.ds-table td a:not(.ds-btn):not(.ds-badge) { transition: color var(--dur-base) var(--ease-standard); }
.ds-table td a:not(.ds-btn):not(.ds-badge):hover { color: var(--accent); }

/* Wide tables scroll sideways on small screens instead of turning into cards */
.ds-table-scroll { overflow-x: auto; }
.ds-table-wide { min-width: 980px; }
.ds-table-wide td { vertical-align: top; }

/* Two-line cells */
.ds-cell-title { font-weight: 600; font-size: 13.5px; line-height: 1.3; }
.ds-cell-sub   { display: block; margin-top: 2px; font-size: 11.5px; color: var(--text-muted); }
.ds-cell-warn  { color: var(--amber); font-weight: 500; }
```

| Part | Value |
|---|---|
| Container | white, 1px `#E6E6E6`, radius 14px, `overflow: hidden` |
| Header cell | padding `11px 12px`, `#FAFAFA` bg, `#8C8C8C`, 11.5px / 500 |
| Body cell | padding `13px 12px`, 13px, `#0F0F0F`, hairline bottom |
| First / last cell | extra padding `18px` on the outer edge |
| Row hover | `#FAFAFA` |
| Table inside a card | container radius drops to 10px |

**Do**
- Title-case column headers, left-aligned.
- Put status in a badge column and actions at the end.
- Wrap wide tables in a scroll box.

**Don't**
- Don't use zebra stripes or vertical cell borders.
- Don't convert tables to cards on mobile.

---

## 8. KPI and stat tiles

```html
<div class="ds-kpis">
  <div class="ds-kpi">
    <div class="ds-kpi-value">1,248</div>
    <div class="ds-kpi-label">Active records</div>
  </div>
</div>
```

```css
.ds-kpis { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; }
.ds-kpi {
  position: relative; overflow: hidden;
  background: var(--surface-0);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 20px 20px 18px;
}
/* Signature mark: a short gold rule in the top-left corner */
.ds-kpi::before {
  content: ''; position: absolute; top: 0; left: 20px;
  width: 28px; height: 2px; border-radius: 0 0 2px 2px; background: var(--gold);
}
.ds-kpi-value { font-size: 36px; font-weight: 500; letter-spacing: -.03em; line-height: 1.05;
  font-variant-numeric: tabular-nums; }
.ds-kpi-label {
  margin-top: 12px; padding-top: 10px;
  border-top: 1px solid var(--border);
  font-size: 12.5px; color: var(--text-muted);
}
```

| Variant | Number | Padding | Use |
|---|---|---|---|
| Standard | 36px / 500 | `20px 20px 18px` | dashboard summary |
| Hero | 44px / 500 | `24px 24px 20px` | landing of a dashboard, few tiles |
| Compact filter tile | 26px / 500 | `14px 16px 13px` | tile row that doubles as filters |

### Compact filter tiles (a row that filters a list)

```html
<a class="ds-kpi-c" href="?f=all" aria-current="true">
  <div class="ds-kpi-c-label">All</div>
  <div class="ds-kpi-c-value">42</div>
  <div class="ds-kpi-c-cap">in total</div>
</a>
<a class="ds-kpi-c ds-kpi-c-attention" href="?f=action">…Needs action…</a>
```

```css
.ds-kpi-c { display: block; position: relative; padding: 14px 16px 13px;
  background: var(--surface-2); border: 1px solid var(--border); border-radius: var(--radius-lg);
  color: var(--text-primary);
  transition: border-color var(--dur-fast) var(--ease-standard), background-color var(--dur-fast) var(--ease-standard); }
a.ds-kpi-c:hover { border-color: var(--border-strong); background: var(--surface-0); }
.ds-kpi-c[aria-current="true"] { border-color: var(--accent); box-shadow: inset 0 0 0 1px var(--accent); }
.ds-kpi-c-label { font-size: 11px; font-weight: 500; letter-spacing: .06em; text-transform: uppercase; color: var(--text-muted); }
.ds-kpi-c-value { font-size: 26px; font-weight: 500; letter-spacing: -.03em; line-height: 1.1; margin: 6px 0 3px; }
.ds-kpi-c-cap   { font-size: 11.5px; color: var(--text-muted); }
.ds-kpi-c-attention { background: var(--amber-light); border-color: color-mix(in srgb, var(--amber) 28%, transparent); }
.ds-kpi-c-attention .ds-kpi-c-label, .ds-kpi-c-attention .ds-kpi-c-value { color: var(--amber); }
```

### Attention item (a row that asks for action)

```css
.ds-attn { display: flex; align-items: flex-start; gap: 10px; padding: 10px 12px;
  background: var(--surface-2); border: 1px solid var(--border); border-radius: var(--radius-md); }
a.ds-attn:hover { border-color: var(--border-strong); background: var(--surface-0); }
.ds-attn-icon { width: 28px; height: 28px; border-radius: var(--radius-pill); flex-shrink: 0;
  display: flex; align-items: center; justify-content: center; }
.ds-attn-icon.urgent  { background: var(--red-light);    color: var(--red); }
.ds-attn-icon.pending { background: var(--amber-light);  color: var(--amber); }
.ds-attn-icon.info    { background: var(--accent-light); color: var(--accent); }
```

**Do**
- Keep the qualifier under each number: plain words, muted, under a hairline.
- Use tabular numerals so figures don't jitter.
- Colour only one tile amber (the one that needs action).

**Don't**
- Don't put trend arrows in red and green at full saturation. Use the status tints.
- Don't fill a tile with navy.

---

## 9. Tabs

### Underline tabs (status or section tabs, each tab a link)

```html
<nav class="ds-tabs" role="tablist">
  <a class="ds-tab" role="tab" aria-current="page" href="?tab=all">All <span class="ds-tab-count">42</span></a>
  <a class="ds-tab" role="tab" href="?tab=open">Open <span class="ds-tab-count">7</span></a>
</nav>
```

```css
/* The baseline is an inset shadow, so the row can scroll sideways without a stray scrollbar */
.ds-tabs { display: flex; gap: 2px; margin-bottom: 14px;
  box-shadow: inset 0 -1px 0 var(--border); overflow-x: auto; overflow-y: hidden; }
.ds-tab { padding: 9px 14px; font-size: 13px; white-space: nowrap; color: var(--text-secondary);
  border-bottom: 2px solid transparent; border-radius: var(--radius-sm) var(--radius-sm) 0 0; }
.ds-tab:hover { color: var(--text-primary); }
.ds-tab[aria-current="page"] { color: var(--accent-dark); font-weight: 600; border-bottom-color: var(--accent); }
.ds-tab:focus-visible { outline: none; box-shadow: var(--focus-ring); }
.ds-tab-count { margin-left: 6px; font-size: 11px; font-weight: 400; color: var(--text-muted); }
```

### Side tabs (vertical section switcher in a form)

```css
.ds-side-tab { padding: 9px 12px; font-size: 13px; border-radius: var(--radius); color: var(--text-secondary); }
.ds-side-tab:hover { background: var(--surface-1); }
.ds-side-tab.active { background: var(--accent-light); color: var(--accent-dark); font-weight: 500; }
```

**Do**
- Make each tab a real link or use `role="tab"` with arrow-key support, so tabs are shareable and accessible.
- Show counts in muted text beside the label.

**Don't**
- Don't use filled pill tabs for navigation. Pills are for filters (section 5).

---

## 10. Steppers

A **vertical stepper** for multi-step configuration, with a sticky save bar and a readiness checklist.

```html
<div class="ds-ws">
  <aside class="ds-stepper">
    <div class="ds-stepper-title">Steps</div>
    <ol>
      <li><button class="ds-step ds-step-done"><span class="ds-step-mark">✓</span><span>Basics<span class="ds-step-state">Complete</span></span></button></li>
      <li><button class="ds-step" aria-current="step"><span class="ds-step-mark">2</span><span>Details</span></button></li>
      <li><button class="ds-step ds-step-issue"><span class="ds-step-mark">!</span><span>Rules<span class="ds-step-state">Needs attention</span></span></button></li>
      <li><button class="ds-step ds-step-blocked"><span class="ds-step-mark">4</span><span>Review</span></button></li>
    </ol>
  </aside>
  <main><!-- step content --></main>
</div>
<div class="ds-stepbar">
  <span class="ds-save-state">Unsaved changes</span>
  <div class="ds-stepbar-actions">
    <button class="ds-btn ds-btn-outline">Save draft</button>
    <button class="ds-btn ds-btn-primary">Save &amp; continue</button>
  </div>
</div>
```

```css
.ds-ws { display: grid; grid-template-columns: 250px minmax(0, 1fr); gap: 24px; align-items: start; }
.ds-stepper { position: sticky; top: 8px; padding: 10px;
  background: var(--surface-2); border: 1px solid var(--border); border-radius: var(--radius-lg); }
.ds-stepper-title { padding: 4px 8px 8px; font-size: 11px; font-weight: 500;
  letter-spacing: .06em; text-transform: uppercase; color: var(--text-muted); }
.ds-stepper ol { list-style: none; margin: 0; padding: 0; display: grid; gap: 2px; }
.ds-step { display: flex; align-items: center; gap: 10px; width: 100%; padding: 8px;
  font-size: 13px; text-align: left; color: var(--text-secondary);
  background: none; border: none; border-radius: var(--radius); cursor: pointer; }
.ds-step:hover { background: var(--surface-0); color: var(--text-primary); }
.ds-step:focus-visible { outline: none; box-shadow: var(--focus-ring); }
.ds-step[aria-current="step"] { background: var(--accent-light); color: var(--accent-dark); font-weight: 600; }
.ds-step-mark { flex: none; width: 22px; height: 22px; border-radius: 50%;
  display: inline-flex; align-items: center; justify-content: center;
  font-size: 11px; font-weight: 600;
  border: 1px solid var(--border-strong); color: var(--text-muted); background: var(--surface-2); }
.ds-step-done .ds-step-mark    { background: var(--teal); border-color: var(--teal); color: #fff; }
.ds-step-issue .ds-step-mark   { background: var(--amber-light); border-color: var(--amber); color: var(--amber); }
.ds-step-blocked .ds-step-mark { background: var(--surface-1); color: var(--text-muted); }
.ds-step[aria-current="step"] .ds-step-mark { background: var(--accent); border-color: var(--accent); color: #fff; }
.ds-step-state { display: block; font-size: 11px; font-weight: 400; color: var(--text-muted); }

/* Sticky save bar */
.ds-stepbar { position: sticky; bottom: 0; z-index: 5;
  display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap;
  padding: 12px 16px; background: var(--surface-2);
  border: 1px solid var(--border); border-radius: var(--radius-lg); box-shadow: var(--shadow-raised); }
.ds-stepbar-actions { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
.ds-save-state { display: inline-flex; align-items: center; gap: 6px; font-size: 12.5px; font-weight: 500; color: var(--text-secondary); }
.ds-save-state-error { color: var(--red); }
.ds-save-state-ok    { color: var(--teal); }

/* Readiness checklist + verdict */
.ds-checklist { list-style: none; margin: 0; padding: 0; overflow: hidden;
  border: 1px solid var(--border); border-radius: var(--radius-md); }
.ds-checklist > li { display: flex; align-items: flex-start; gap: 10px; padding: 10px 14px;
  font-size: 13px; background: var(--surface-2); }
.ds-checklist > li + li { border-top: 1px solid var(--border); }
.ds-check-ok { color: var(--teal);  flex: none; margin-top: 1px; }
.ds-check-no { color: var(--amber); flex: none; margin-top: 1px; }
.ds-verdict { display: flex; align-items: center; gap: 10px; flex-wrap: wrap;
  padding: 12px 14px; border-radius: var(--radius-md); font-size: 13px; }
.ds-verdict-ready   { background: var(--teal-light);  color: var(--teal); }
.ds-verdict-blocked { background: var(--amber-light); color: var(--amber); }

/* Stacks under 960px: stepper becomes a horizontal scroller */
@media (max-width: 960px) {
  .ds-ws { grid-template-columns: minmax(0, 1fr); }
  .ds-stepper { position: static; }
  .ds-stepper ol { grid-auto-flow: column; grid-auto-columns: minmax(150px, 1fr); overflow-x: auto; }
}
```

| Step state | Mark |
|---|---|
| Upcoming | white, 1px `#D2D2D2`, muted number |
| Current | navy fill, white number; row bg `#EEF1F7` |
| Done | teal fill, white check |
| Issue | amber tint, amber border, `!` |
| Blocked | grey fill, muted |

**Do**
- Set `aria-current="step"` on the current step.
- Say what a status means in words (`Complete`, `Needs attention`), not only with colour.
- Never say "Saved" until the server has confirmed.

**Don't**
- Don't compute "done" on the client. Take it from the server's validation result.

---

## 11. Modals

```html
<div class="ds-overlay" role="presentation">
  <div class="ds-modal" role="dialog" aria-modal="true" aria-labelledby="t">
    <h2 id="t" class="ds-modal-title">Confirm this change</h2>
    <p>This updates the record for everyone who can see it.</p>
    <div class="ds-modal-actions">
      <button class="ds-btn ds-btn-outline">Cancel</button>
      <button class="ds-btn ds-btn-primary">Confirm</button>
    </div>
  </div>
</div>
```

```css
.ds-overlay {
  position: fixed; inset: 0; z-index: 1000; padding: 20px;
  display: flex; align-items: center; justify-content: center;
  background: rgba(0, 12, 28, .42);
  animation: ds-fade var(--dur-base) var(--ease-standard);
}
.ds-modal {
  width: 100%; max-width: 480px; max-height: 88vh; overflow-y: auto;
  padding: 28px;
  background: var(--surface-2);
  border: 1px solid var(--border);
  border-radius: var(--radius-shell);   /* 18px */
  box-shadow: var(--shadow-shell), 0 2px 6px rgba(16, 16, 16, .06);
  animation: ds-rise var(--dur-slow) var(--ease-out);
}
.ds-modal.wide   { max-width: 600px; }
.ds-modal.narrow { max-width: 420px; text-align: center; }
.ds-modal-title   { font-size: 19px; }
.ds-modal-actions { display: flex; justify-content: flex-end; gap: 8px; margin-top: 20px; }

@keyframes ds-fade { from { opacity: 0; } to { opacity: 1; } }
@keyframes ds-rise { from { opacity: 0; transform: translateY(8px) scale(.98); } to { opacity: 1; transform: none; } }
@media (prefers-reduced-motion: reduce) { .ds-overlay, .ds-modal { animation: none; } }
```

**Do**
- Trap focus, close on Escape, and return focus to the trigger.
- For a destructive action, list what will change and what will survive, and state the count on the confirm button.
- Put the primary action on the right.

**Don't**
- Don't use a modal for simple confirmation of a small, reversible action. Use an inline panel.
- Don't put a shadow on anything else at this strength.

---

## 12. Toasts

```html
<div class="ds-toast-viewport" role="region" aria-label="Notifications">
  <div class="ds-toast" role="status">
    <div>
      <div class="ds-toast-title">Changes saved</div>
      <div class="ds-toast-desc">Your update is live.</div>
    </div>
    <button class="ds-toast-close" aria-label="Dismiss">×</button>
  </div>
  <div class="ds-toast ds-toast-danger" role="alert">
    <div><div class="ds-toast-title">Could not save</div><div class="ds-toast-desc">Try again in a moment.</div></div>
    <button class="ds-toast-close" aria-label="Dismiss">×</button>
  </div>
</div>
```

```css
.ds-toast-viewport { position: fixed; right: 0; bottom: 0; z-index: 100;
  display: flex; flex-direction: column; gap: 8px; width: 100%; max-width: 420px; padding: 16px; }
.ds-toast { position: relative; display: flex; align-items: center; justify-content: space-between; gap: 16px;
  padding: 16px 32px 16px 16px;
  background: var(--surface-2); color: var(--text-primary);
  border: 1px solid var(--border); border-radius: var(--radius-lg);
  box-shadow: var(--shadow-card); }
.ds-toast-danger { background: var(--red-light); border-color: var(--red); color: var(--red); }
.ds-toast-title { font-size: 14px; font-weight: 600; }
.ds-toast-desc  { font-size: 14px; opacity: .9; }
.ds-toast-close { position: absolute; top: 8px; right: 8px; padding: 4px; border: 0; background: none;
  border-radius: var(--radius-sm); color: var(--text-muted); cursor: pointer; opacity: 0; }
.ds-toast:hover .ds-toast-close, .ds-toast-close:focus { opacity: 1; }
.ds-toast-close:hover { color: var(--text-primary); }
.ds-toast-action { height: 32px; padding: 0 12px; font-size: 14px; font-weight: 500;
  background: transparent; border: 1px solid var(--border); border-radius: var(--radius); }
.ds-toast-action:hover { background: var(--surface-1); }
```

**Do**
- Keep toasts short: a title and one sentence.
- Say plainly when an action did nothing (for example "Nothing to export") instead of silently succeeding.

**Don't**
- Don't use a toast for something the user must act on. Use an inline message or a modal.
- Don't keep toasts up forever. Auto-dismiss, but let hover pause them.

---

## 13. Empty states

```html
<!-- Inside a card: quiet one-liner -->
<div class="ds-empty-note">Nothing here yet.</div>

<!-- Full area: title plus one sentence plus a way forward -->
<div class="ds-empty">
  <div class="ds-empty-title">No results match your filters</div>
  <p>Try removing a filter or searching for something else.</p>
  <button class="ds-btn ds-btn-outline ds-btn-sm">Clear filters</button>
</div>
```

```css
.ds-empty-note { padding: 28px 12px; text-align: center; font-size: 13px; color: var(--text-muted); }
.ds-empty { padding: 44px 24px; text-align: center; background: var(--surface-2); }
.ds-empty-title { font-size: 15px; font-weight: 600; margin-bottom: 6px; }
```

**Do**
- Always say why it is empty, and what to do next.
- For "nothing needs action", use a check mark and a plain sentence, never a blank card.

**Don't**
- Don't leave a blank card or a header-only table.
- Don't use illustrations or emoji.

---

## 14. Danger zones

```html
<section class="ds-danger">
  <h3>Delete this record</h3>
  <p>This removes it for everyone. This cannot be undone.</p>
  <button class="ds-btn ds-btn-danger">Delete record</button>
</section>
```

```css
.ds-danger {
  background: var(--red-light);
  border: 1px solid rgba(163, 45, 45, .35);
  border-radius: var(--radius-lg);
  padding: 18px;
}
.ds-danger h3 { color: var(--red); font-size: 14px; }
```

**Do**
- State the consequence in plain words, above the button.
- Follow the click with a confirmation step that names what will be lost.

**Don't**
- Don't use the danger style for routine actions or warnings. Use amber for warnings.
- Don't put more than one danger button in a zone.

---

## 15. Toggle rows

```html
<div class="ds-pref-row">
  <div>
    <div class="ds-pref-title">Email summaries</div>
    <div class="ds-pref-desc">A weekly digest.</div>
  </div>
  <button class="ds-toggle on" role="switch" aria-checked="true" aria-label="Email summaries">
    <span class="knob"></span>
  </button>
</div>
```

```css
.ds-pref-row { display: flex; align-items: center; justify-content: space-between; gap: 16px;
  padding: 14px 0; border-bottom: 1px solid var(--border); }
.ds-pref-title { font-size: 13px; font-weight: 500; }
.ds-pref-desc  { font-size: 12px; color: var(--text-muted); }

.ds-toggle { position: relative; width: 38px; height: 22px; padding: 0; border: none;
  border-radius: var(--radius-pill); background: var(--border-strong); cursor: pointer;
  transition: background .22s ease; }
.ds-toggle.on { background: var(--accent); }
.ds-toggle .knob { position: absolute; top: 2px; left: 2px; width: 18px; height: 18px;
  border-radius: 50%; background: #fff; box-shadow: 0 1px 2px rgba(0,0,0,.18);
  transition: left .22s ease; }
.ds-toggle.on .knob { left: 18px; }
.ds-toggle:disabled { opacity: .55; cursor: not-allowed; }
```

| Part | Value |
|---|---|
| Track | 38 × 22px pill; off `#D2D2D2`, on `#002147` |
| Knob | 18px white circle, 2px inset, slides 16px |
| Row | padding `14px 0`, hairline bottom |

**Do**
- Use `role="switch"` and `aria-checked`, and update both the class and the attribute.
- Write the description as a plain sentence about what happens.

**Don't**
- Don't use a toggle for something that needs a Save button. Use a checkbox in a form.

---

## 16. Date and time pickers

Never use the browser's native date, time or datetime inputs. One custom picker looks identical in every browser.

### Trigger

```html
<div class="ds-dp-wrap">
  <button class="ds-dp-trigger ds-dp-placeholder" aria-haspopup="dialog" aria-expanded="false">
    <span>Select date</span>
    <svg class="ds-dp-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 10h18"/></svg>
  </button>
  <!-- panel below, rendered when open -->
</div>
```

```css
.ds-dp-wrap { position: relative; }
.ds-dp-trigger { width: 100%; display: flex; align-items: center; justify-content: space-between;
  padding: 10px 12px; font-size: 13px; color: var(--text-primary);
  background: var(--surface-2); border: 1px solid var(--border-strong); border-radius: var(--radius); cursor: pointer; }
.ds-dp-trigger:focus, .ds-dp-trigger.open { outline: none; border-color: var(--accent); box-shadow: var(--focus-ring); }
.ds-dp-placeholder { color: var(--text-muted); }
.ds-dp-icon { color: var(--text-muted); flex-shrink: 0; }
.ds-dp-trigger.open .ds-dp-icon, .ds-dp-trigger:focus .ds-dp-icon { color: var(--accent); }
.ds-dp-trigger:disabled { cursor: not-allowed; background: var(--surface-0); color: var(--text-muted); }
.ds-dp-trigger-sm { padding: 5px 8px; font-size: 12px; gap: 8px; min-width: 136px; white-space: nowrap; }
```

### Calendar panel

```html
<div class="ds-dp-panel" role="dialog">
  <div class="ds-dp-header">
    <button class="ds-dp-nav" aria-label="Previous month">‹</button>
    <div class="ds-dp-selects">
      <select class="ds-dp-select"><option>October</option></select>
      <select class="ds-dp-select"><option>2026</option></select>
    </div>
    <button class="ds-dp-nav" aria-label="Next month">›</button>
  </div>
  <div class="ds-dp-dow"><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span><span>Su</span></div>
  <div class="ds-dp-days">
    <button class="ds-dp-day ds-dp-day-other">29</button>
    <button class="ds-dp-day ds-dp-day-today">6</button>
    <button class="ds-dp-day ds-dp-day-selected">7</button>
    <!-- … -->
  </div>
  <div class="ds-dp-footer">
    <button class="ds-dp-clear">Clear</button>
    <div class="ds-dp-footer-end">
      <button class="ds-dp-today">Today</button>
      <button class="ds-dp-done">Done</button>
    </div>
  </div>
</div>
```

```css
.ds-dp-panel { position: absolute; top: calc(100% + 6px); z-index: 400;
  width: 300px; max-width: calc(100vw - 32px); padding: 12px;
  background: var(--surface-2); border: 1px solid var(--border); border-radius: var(--radius-lg);
  box-shadow: 0 8px 24px rgba(0, 0, 0, .12);
  animation: ds-dp-in .18s var(--ease-out); }
.ds-dp-panel.align-right { right: 0; }  /* opens leftwards near the window edge */
@keyframes ds-dp-in { from { opacity: 0; transform: translateY(-6px) scale(.97); } to { opacity: 1; transform: none; } }

.ds-dp-header { display: flex; align-items: center; justify-content: space-between; gap: 6px; margin-bottom: 10px; }
.ds-dp-selects { display: flex; align-items: center; justify-content: center; gap: 6px; flex: 1; }
.ds-dp-nav { width: 28px; height: 28px; padding: 0; display: flex; align-items: center; justify-content: center;
  font-size: 16px; line-height: 1; color: var(--text-secondary);
  background: var(--surface-1); border: 1px solid var(--border); border-radius: var(--radius-sm); cursor: pointer; }
.ds-dp-nav:hover { background: var(--border); color: var(--text-primary); }
.ds-dp-select { appearance: none; padding: 5px 22px 5px 8px; font-size: 12px; font-weight: 600;
  color: var(--text-primary); background-color: var(--surface-1);
  border: 1px solid var(--border-strong); border-radius: var(--radius-sm); cursor: pointer; }
.ds-dp-select:hover { border-color: var(--accent); background-color: var(--surface-2); }
.ds-dp-select:focus { outline: none; border-color: var(--accent); box-shadow: var(--focus-ring); }

.ds-dp-dow  { display: grid; grid-template-columns: repeat(7, 1fr); margin-bottom: 4px;
  font-size: 10px; text-transform: uppercase; text-align: center; color: var(--text-muted); }
.ds-dp-days { display: grid; grid-template-columns: repeat(7, 1fr); gap: 2px; }
.ds-dp-day  { aspect-ratio: 1; display: flex; align-items: center; justify-content: center;
  font-size: 12px; color: var(--text-primary); background: none; border: none; border-radius: 6px; cursor: pointer; }
.ds-dp-day:hover { background: var(--surface-1); }
.ds-dp-day-other { color: var(--text-muted); }
.ds-dp-day-today { border: 1px solid var(--accent); }
.ds-dp-day-selected { background: var(--accent); color: #fff; }

.ds-dp-footer { display: flex; justify-content: space-between; margin-top: 8px; padding-top: 8px; border-top: 1px solid var(--border); }
.ds-dp-footer-end { display: flex; align-items: center; gap: 6px; }
.ds-dp-clear, .ds-dp-today { padding: 4px 8px; font-size: 12px; border: none; border-radius: var(--radius-sm); cursor: pointer; }
.ds-dp-clear { color: var(--red); background: none; }
.ds-dp-clear:hover { background: var(--red-light); }
.ds-dp-today { color: var(--accent-dark); background: var(--accent-light); }
.ds-dp-done { padding: 5px 14px; font-size: 12px; font-weight: 500; color: #fff; background: var(--accent);
  border: none; border-radius: 999px; cursor: pointer; }
.ds-dp-done:hover { background: var(--accent-hover); }
```

### Time picker panel (three columns: hour, minute, AM/PM)

```html
<div class="ds-dp-panel ds-tp-panel">
  <div class="ds-tp-heading">Time</div>
  <div class="ds-tp-columns">
    <div><div class="ds-tp-label">Hour</div><div class="ds-tp-col"><button class="ds-tp-cell">8</button><button class="ds-tp-cell selected">9</button></div></div>
    <div><div class="ds-tp-label">Min</div><div class="ds-tp-col"><button class="ds-tp-cell">00</button><button class="ds-tp-cell selected">30</button></div></div>
    <div class="ds-tp-meridiem"><button class="ds-tp-cell selected">AM</button><button class="ds-tp-cell">PM</button></div>
  </div>
  <div class="ds-tp-presets"><button class="ds-tp-preset">9:00 AM</button><button class="ds-tp-preset selected">5:00 PM</button></div>
</div>
```

```css
.ds-tp-panel { width: 248px; }
.ds-tp-heading { margin-bottom: 8px; font-size: 11px; font-weight: 500; color: var(--text-muted); }
.ds-tp-columns { display: grid; grid-template-columns: 1fr 1fr 64px; gap: 6px; }
.ds-tp-label { margin-bottom: 4px; font-size: 10px; text-transform: uppercase; letter-spacing: .04em; text-align: center; color: var(--text-muted); }
.ds-tp-col { display: flex; flex-direction: column; gap: 2px; max-height: 196px; overflow-y: auto; padding: 2px;
  background: var(--surface-0); border: 1px solid var(--border); border-radius: var(--radius); }
.ds-tp-cell { padding: 6px 0; font-size: 13px; font-variant-numeric: tabular-nums; text-align: center;
  color: var(--text-primary); background: none; border: none; border-radius: 6px; cursor: pointer; }
.ds-tp-cell:hover { background: var(--surface-1); }
.ds-tp-cell:focus-visible { outline: none; box-shadow: var(--focus-ring); }
.ds-tp-cell.selected { background: var(--accent); color: #fff; font-weight: 500; }
.ds-tp-meridiem { display: flex; flex-direction: column; gap: 4px; }
.ds-tp-meridiem .ds-tp-cell { background: var(--surface-2); border: 1px solid var(--border); }
.ds-tp-meridiem .ds-tp-cell.selected { background: var(--accent); border-color: var(--accent); }
.ds-tp-presets { display: flex; flex-wrap: wrap; gap: 4px; margin-top: 10px; }
.ds-tp-preset { padding: 3px 9px; font-size: 11px; color: var(--text-secondary);
  background: var(--surface-2); border: 1px solid var(--border); border-radius: 999px; cursor: pointer; }
.ds-tp-preset:hover { border-color: var(--accent); color: var(--accent); }
.ds-tp-preset.selected { border-color: var(--accent); background: var(--accent-light); color: var(--accent-dark); }
```

### Date and time together

The panel is 548px wide: a calendar on the left and the time columns on the right, split by a hairline. Under 600px it stacks.

```css
.ds-dtp-panel { width: 548px; }
.ds-dtp-body { display: flex; gap: 14px; flex-wrap: wrap; }
.ds-dtp-calendar { flex: 1 1 250px; min-width: 0; }
.ds-dtp-calendar .ds-dp-day { aspect-ratio: auto; height: 32px; }
.ds-dtp-time { flex: 0 0 240px; padding-left: 14px; border-left: 1px solid var(--border); }
@media (max-width: 600px) {
  .ds-dtp-panel { width: min(320px, calc(100vw - 32px)); }
  .ds-dtp-time { flex-basis: 100%; padding: 12px 0 0; border-left: none; border-top: 1px solid var(--border); }
}
```

**Do**
- Keep values in the same formats as native inputs (`YYYY-MM-DD`, `HH:MM` 24-hour, `YYYY-MM-DDTHH:MM`) so forms don't change.
- Close on outside click and Escape. Open leftwards when near the window's right edge.
- Offer 5-minute steps, plus a few preset times.

**Don't**
- Don't convert a date through a UTC string. Read and write local date parts.
- Don't use the smaller trigger outside filter bars.

---

## 17. Pagination

```html
<div class="ds-pagination">
  <span>Showing 1–25 of 142</span>
  <nav class="ds-pages" aria-label="Pagination">
    <a class="ds-page" aria-disabled="true">‹</a>
    <a class="ds-page" aria-current="page">1</a>
    <a class="ds-page" href="?page=2">2</a>
    <a class="ds-page" href="?page=3">3</a>
    <a class="ds-page" href="?page=2">›</a>
  </nav>
</div>
```

```css
.ds-pagination { display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap;
  padding: 12px 18px; font-size: 12.5px; color: var(--text-secondary);
  background: var(--surface-2); border-top: 1px solid var(--border); }
.ds-pages { display: flex; align-items: center; gap: 4px; }
.ds-page { min-width: 30px; height: 30px; padding: 0 8px; display: inline-flex; align-items: center; justify-content: center;
  color: var(--text-secondary); background: var(--surface-2);
  border: 1px solid var(--border); border-radius: var(--radius); }
a.ds-page:hover { border-color: var(--border-strong); color: var(--text-primary); }
.ds-page:focus-visible { outline: none; box-shadow: var(--focus-ring); }
.ds-page[aria-current="page"] { background: var(--accent); border-color: var(--accent); color: #fff; }
.ds-page[aria-disabled="true"] { opacity: .45; }
```

**Do**
- Make pages real links so a paged view is shareable. Put the bar inside the table container.
- Label what a table exports. "Export this page" is different from "Export all".

**Don't**
- Don't show every page number on long lists. Show first, last and a window around the current page.

---

## 18. Interaction states

| Component | Default | Hover | Focus | Active / pressed | Disabled |
|---|---|---|---|---|---|
| **Primary button** | navy + top glow, white text | `#012C5E`, brighter border, blue halo | 3px navy ring (outline) | `scale(.985)`, `#001736` | opacity `.55`, `not-allowed` |
| **Outline button** | white, `#D2D2D2` border, chip shadow | border and text navy, bg `#FAFAFA` | same ring | `scale(.985)` | opacity `.55` |
| **Ghost button** | transparent, `#4A4A4A` | bg `#F2F2F2`, text `#0F0F0F` | same ring | `scale(.985)` | opacity `.55` |
| **Danger button** | `#A32D2D`, white | `#831F1F` | same ring | `scale(.985)` | opacity `.55` |
| **Input / select / textarea** | white, `#E2E2E2` border | border `#D2D2D2` | border navy + `0 0 0 3px rgba(0,33,71,.22)`, no outline | n/a | bg `#FAFAFA`, muted text |
| **Filter pill** | white, `#E6E6E6` border | border `#D2D2D2`, text `#0F0F0F` | ring | n/a | dim |
| **Active filter pill** | navy fill, white text, soft shadow | unchanged | ring | n/a | n/a |
| **Table row** | transparent | `#FAFAFA` | n/a | n/a | n/a |
| **Table link** | `#0F0F0F` | navy | ring | n/a | n/a |
| **Underline tab** | `#4A4A4A` | `#0F0F0F` | 3px ring (box-shadow) | current: navy text, 600, 2px navy underline | n/a |
| **Stepper row** | `#4A4A4A` | bg `#FAFAFA` | ring | current: bg `#EEF1F7`, navy text, 600 | blocked: grey mark |
| **Toggle** | track `#D2D2D2`, white knob | pointer | ring | on: track navy, knob right | opacity `.55` |
| **Clickable card / tile** | white or sunken, hairline | border `#D2D2D2` + optional soft shadow or −2px lift | ring | n/a | n/a |
| **Page-number button** | white, hairline | border `#D2D2D2` | ring | current: navy fill, white | opacity `.45` |
| **Menu item** | transparent | bg `#F2F2F2` | bg `#F2F2F2` + ring | n/a | n/a |
| **Drop zone** | dashed `#D2D2D2` on `#FAFAFA` | border navy, bg `#EEF1F7` | same as hover when dragging | n/a | n/a |

**Universal rules**

- **Focus is always visible.** Use the navy ring (`--focus-ring`). Never remove the outline without replacing it.
- **Transitions** are `220ms` with `--ease-standard`. Press is `120ms`.
- **Motion:** only fades and small translates. No bounce, spring or rotation.
- **Reduced motion:** remove the animation and transitions. Keep the final state.
- **Hover is never the only way** to reveal an action. Touch users need it visible.
- **Colour is never the only signal.** Pair status colour with an icon or words.

---

## 19. Patterns I was unsure about

1. **Horizontal application stepper.** The old UI document described a small horizontal stepper (20px dots, 2px connector lines, 9px labels) but **no CSS for it exists** in the stylesheet. I documented the vertical stepper (section 10), which is the one in use. If you need a horizontal one, it is not specified here.
2. **Toasts.** The toast is built on a headless toast library and Tailwind utilities, not the token stylesheet. I translated its classes into token CSS. It only has **default and destructive** variants. I found no success, warning or info toast. I also used `--shadow-card` where the source uses Tailwind's default large shadow (`shadow-lg`), so toast elevation may be slightly different from the original.
3. **Hover lift on clickable cards.** The stylesheet lifts clickable cards by 2px with `--shadow-card`. The same project's rules say signed-in screens should have no motion except fades. The compact filter tiles do **not** lift. I documented border and background change as the default and left the lift out of the snippets. Decide which you want.
4. **Modal title and text sizes.** The stylesheet styles only the dialog box. Title size (19px) follows the section-title scale, not a dialog-specific rule.
5. **Focus ring variants.** There are two: a global 3px outline (`rgba(0,33,71,.28)`, offset 1px) for buttons and links, and the `--focus-ring` box-shadow (`.22` alpha) for fields and compact controls. They look nearly identical. I kept both as in the source.
6. **Menu (⋯ overflow) pattern.** I listed its hover and focus states in section 18 but did not write a full snippet. Values: list `min-width: 210px`, padding `5px`, white, hairline, radius `10px`, `--shadow-card`; item padding `7px 10px`, 13px, radius `4px`, hover `#F2F2F2`; separator 1px `--border`.
7. **Unread rows, notification lists and the scope banner** exist in the app but were not requested, so they are not included. The scope banner is an `--accent-light` bar with a 3px gold left border, 8px radius, 12px navy text.
