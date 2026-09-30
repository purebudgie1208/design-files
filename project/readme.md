# Oxford Design System

A brand + UI design system reconstructed from seven screenshots of a **University of Oxford marketing website** concept (`uploads/s1.jpg` – `uploads/s7.jpg`, de-rotated copies in `ref/`).

## Sources given
- 7 JPG screenshots of a single long-scroll marketing homepage. They arrived rotated 90° CCW; upright versions are in `ref/s1.png`–`ref/s7.png`.
- **No codebase, no Figma file, no design-token export, no font files were provided.** Everything below is derived visually from those screenshots plus pixel sampling. Values marked *(inferred)* are best-fit reconstructions, not confirmed source values.

## Product context
One product surface is represented: the **public marketing website** for the University of Oxford — a recruitment/reputation site aimed at prospective undergraduates, graduate applicants, researchers and press. Its page order:

1. **Top bar** — crest lockup, seven dropdown nav items (About, Research, Admissions, News | Community, Colleges, Department), search field, navy *Login* pill.
2. **Hero** — full-bleed photograph of Christ Church Tom Quad with an oversized translucent "Oxford" wordmark, a year marker (2025), a bottom caption promoting graduate studentships, and prev/next chips.
3. **About / stats** — italic eyebrow, a two-tone headline (black + grey second clause), a "2025's Recap" side marker, then a carousel of stat cards (25,000+ Students, 100+ Research Centers) with a navy *Learn more* pill.
4. **Facilities** — full-bleed warm-amber interior photo with a giant "Library" wordmark, an `02/08` counter, an "Available Facility" corner label and an inset glass caption card.
5. **Programs** — headline with a gold middle line, then a numbered 01–04 row list (Undergraduate, Graduate, Continuing Education, Short Courses) with descriptions and chevron chips.
6. **Why choose us** — inverted near-black section, four numbered icon cards, plus a raised tooltip-style card.
7. **Events** — centred heading, staggered photo cards with title, year and a right-aligned grey venue label.
8. **News** — three article cards: photo, date + author meta row, headline, read time, "Read more ↗" chip.
9. **Contact** — split layout: large headline left, grey form panel right (First/Last name, Email, Phone with country select, Subject select, Message, navy *Send Message* pill).
10. **Footer** — black panel, crest, four link columns, and a giant silver-gradient "Oxford" wordmark bleeding off both edges.

## Logo / brand mark — deliberately absent
The screenshots contain the real University of Oxford crest. **No logo file has been created or reconstructed here.** Wherever a mark belongs, this system renders the word *Oxford* in plain type (`Wordmark`). If you have rights to the crest, drop the official SVG into `assets/logo.svg` and the wordmark component will be swapped to use it.

## Font substitution — needs your confirmation
The source uses a licensed neo-grotesk in the Neue Montreal / Helvetica Now Display family (tight negative tracking, double-storey `a`, straight-legged `R`, true italics for eyebrows). The nearest free match, **Schibsted Grotesk** (Google Fonts), is wired in `tokens/fonts.css`. Please send the real font files if the licence allows.

---

## CONTENT FUNDAMENTALS

**Voice.** Institutional confidence without boast. Sentences are declarative, complete and unhurried — the site never shouts, and it never uses exclamation marks.

**Person.** Headlines are mostly impersonal or first-person-plural ("Our numbers reflect a tradition of excellence…", "Oxford at a Glance"). Second person appears only when the reader is being invited to act — "Have Questions? **We'd** Love to Hear From **You**.", "Whether **you're** interested in admissions, partnerships, or general enquiries…". So: *we* for the institution, *you* for the reader, never *I*.

**Casing.** Section headlines are **Title Case** ("A World-Class Range of Academic Programs for Every Ambition and Passion", "Lectures, Conferences, Cultural Moments & More"). Body copy and card descriptions are sentence case. Eyebrows are sentence case in italics ("About us", "Our Programs", "Why Choose us", "Events", "Contact Us") — note the inconsistent capitalisation in the source; standardise on Title Case eyebrows going forward.

**Headline shape.** Two rhetorical moves recur:
- *Two-tone statement* — the first clause in black, the continuation in grey: "Our numbers reflect a tradition of excellence and forward-thinking **impact in education, research, and innovation**".
- *Gold emphasis line* — one line of a headline set in gold: "A World-Class Range of **Academic Programs** for Every Ambition and Passion".
- *Question then reassurance* — "Have Questions? We'd Love to Hear From You."
- *Comma-balanced pairs* — "A Legacy of Excellence, a Future of Possibility".

**Length.** Headlines 6–14 words across 2–3 lines. Card descriptions 18–30 words, one sentence or two short ones. Eyebrows 1–3 words. Never a paragraph longer than three lines in a card.

**Numbers.** Rounded and suffixed with `+` — "25,000+", "100+", "over 160 countries", "39 colleges". Always paired with a plain qualifier underneath: "Across undergraduate and postgraduate levels".

**Metadata style.** Dates as `10 Jun 2025`. Read time as `9 min Read` (capital R — a source quirk). Years standalone under event titles: `2025`. Counters as `02/08`. Ordinals as zero-padded `01 02 03 04`.

**CTAs.** Short, sentence case, verb-first, always paired with an arrow glyph: *Learn more ↗*, *Read more ↗*, *Send Message ↗*, *Login*.

**Terminology.** "Colleges" not "halls"; "Undergraduate / Graduate / Continuing Education / Short Courses"; "Research Units", "Impact Stories", "Public Engagement", "Press Office". British spelling ("personalised", "enquiries") sits alongside American ("personalized") in the source — **use British spelling**.

**No emoji. Ever.** The source contains none, and the register would break instantly. The only non-alphabetic marks are the arrow and chevron glyphs, the `+` on statistics, and `&` in headings.

---

## VISUAL FOUNDATIONS

**Overall vibe.** Editorial-architectural. A white gallery wall with a faint six-column grid ruled onto it, interrupted by full-bleed rounded photographs of Oxford stone and one deep-black chapter. Feels like a well-set art book, not a university brochure.

**The page shell.** The whole site sits on a `#F2F2F2` desk as a white sheet with `--radius-shell: 18px` corners and a soft `--shadow-shell`. Content never touches the browser edge.

**The grid — the signature motif.** Vertical hairlines (`#EDEDED`, 1px) run continuously down the page at six column positions, and horizontal hairlines close each section. Content ignores them freely: headlines start on a line, images bleed across three. Marginal labels ("2025'S RECAP") sit in the leftmost column, outside the text block. *Always draw the grid; it is what makes the layout read as designed.*

**Colour.**
- Ink `#000` for headlines, `#4A4A4A` body, `#8C8C8C` muted/secondary, `#A6A6A6` faint metadata.
- **Oxford Blue `#002147`** is reserved almost entirely for actions — the Login pill, Learn more, Send Message, and the *active* carousel chip. It is never a background for large areas.
- **Gold `#C39A67`** is an accent only: italic stat labels, ordinal numerals, one emphasised headline line, hover colour for links. Never a fill.
- **Near-black `#0F0F0F`** owns two full sections (Why Choose Us, Footer) with `#141414` cards on top.
- Maximum two background colours on any screen: white and one of (near-black / photograph).

**Type.** One family, five roles: display wordmark (86px+, tracking `-.045em`, often translucent white over photography), section headline (31–40px, `-.025em`, weight 500), stat (44px, weight 500), body (13–15px, weight 400), eyebrow (11px, *italic*, grey or gold). Tight negative tracking on everything above 24px is essential to the look.

**Backgrounds.** White; `#FAFAFA` for sunken form panels and stat cards; full-bleed photography; solid near-black. **No gradients anywhere** except (a) the silver top-to-bottom gradient on the footer wordmark and (b) legibility scrims on photographs. No patterns, no textures, no illustration.

**Imagery.** Real architectural photography of Oxford — Christ Church, Radcliffe Camera, the Bodleian, the Sheldonian, graduation crowds. Warm honey stone against cool grey-blue sky; interiors are deep amber and gold. Slightly desaturated, natural light, no filters, no grain. Always rounded `--radius-media: 16px`, always cropped to portrait or wide landscape rectangles, never circles or shapes.

**Text over imagery.** Two protections only: a bottom scrim (`--scrim-bottom`) under captions, and translucent white display type at ~55% opacity that reads as a watermark rather than a label. Small caption text over photos gets a frosted glass capsule (`--glass`, `backdrop-filter: blur(14px)`) — used for the "Bodleian Libraries" card in the facilities section. Blur is used *only* for that on-image glass; never for UI chrome.

**Cards.**
- *Stat card* — `#FAFAFA` fill, no border, no shadow, `--radius-card`, generous 28px padding, an italic gold label with a hairline rule under it.
- *Event / news card* — no container at all: just the rounded photo with text set beneath it on the white page. No border, no shadow.
- *Dark feature card* — `#141414` on `#0F0F0F`, 1px `#262626` inner hairline, `--radius-card`, ordinal top-left, line icon, title, 3-line description.
- *Raised dark card* — same but `#1A1A1A` with `--shadow-inverse`, floating above the row.
- *Form panel* — `#FAFAFA`, `--radius-lg`, fields are white with a 1px `#E2E2E2` border and `--radius-field: 8px`.

**Buttons.** Primary is a navy pill (`--radius-pill`, 8px/16px padding, 13px medium white text) with a white circular arrow badge on its right edge. Secondary/ghost is a white chip with a hairline border. Carousel controls are 30px chips — inactive white with hairline, active navy — with a chevron. Row chevrons are 32px white squares with `--radius-sm`.

**States.**
- *Hover* — navy fills lighten to `#012C5E`; white chips take the `#FAFAFA` fill and `--border-strong`; links turn gold; photo cards lift their image scale to 1.03 with `--dur-slow` ease-out; the arrow badge translates 2px right.
- *Press* — `transform: scale(.985)` plus the darker `--action-primary-bg-active`. No colour inversion.
- *Focus* — `--focus-ring`, a 3px navy 22%-alpha ring, never a browser outline.
- *Disabled* — 40% opacity, no pointer events.

**Motion.** Restrained and editorial. Everything is a fade or a small translate — no bounce, no spring, no rotation. Section content reveals on scroll as `opacity 0→1` + `translateY(16px→0)` over `--dur-reveal: 700ms` with `--ease-out`. Hovers are `--dur-base: 220ms` `--ease-standard`. Carousels cross-fade. Respect `prefers-reduced-motion` by dropping the translate.

**Borders & shadows.** Hairlines do almost all the work: `1px #E6E6E6` on the light surface, `1px #262626` inverted. Shadows are rare and very soft — the page shell, the floating dark card, and the small chip lift. There are no inner shadows, no coloured shadows, no glows.

**Radii.** 999px pills for buttons; 18px page shell; 16px media; 14px cards; 8px fields; 6px small chevron chips; 4px micro. Nothing is fully square except the hairline grid.

**Layout rules.** Max content width 1240px, 40px page padding, 20px gutters, ~88px section rhythm. Nothing is sticky or fixed except the top bar. Full-bleed sections still respect the white sheet's rounded corners — they are inset 0 but clipped by the shell.

---

## ICONOGRAPHY

The source uses a **thin monoline outline set** at roughly 1.5px stroke on a 24px grid, rendered in currentColor — graduation cap, classical building, globe with meridians, and a book/reader glyph in the "Why Choose Us" cards; chevrons, diagonal arrows and a magnifier elsewhere. No icon files were provided.

**Substitution (flagged):** this system links **Lucide** from CDN — the closest free match in stroke weight and terminal style. Mapping used: `graduation-cap`, `landmark`, `globe`, `book-open-text`, `chevron-down`, `chevron-left`, `chevron-right`, `arrow-up-right`, `arrow-right`, `search`. Please confirm or supply the real set.

- No icon font, no sprite sheet, no PNG icons appear in the source.
- **No emoji**, ever.
- Unicode is used as typography, not iconography: `+` on statistics, `&` in headings, `/` in the `02/08` counter.
- Icons are always monochrome currentColor, never filled, never coloured gold or navy on their own, and never larger than 24px except the arrow badge inside primary buttons (a 20px white circle containing a 12px arrow).

---

## Index

| Path | What it is |
|---|---|
| `styles.css` | Global entry — imports only |
| `tokens/` | `fonts` · `colors` · `typography` · `spacing` · `radius` · `elevation` · `motion` · `base` |
| `assets/imagery/` | Photography extracted from the source screenshots |
| `ref/` | De-rotated source screenshots |
| `guidelines/` | Foundation specimen cards (Design System tab) |
| `components/` | Reusable primitives — see below |
| `ui_kits/website/` | Oxford marketing-website recreation |
| `SKILL.md` | Agent-skill entry point |

### Components
Grouped by concern under `components/`. Each has a sibling `.d.ts` props contract and a `.prompt.md` usage note.

**core/** — `Button`, `IconButton`, `Chip`, `Icon`, `Eyebrow`, `SectionHeading`, `Wordmark`, `GridLines`
**forms/** — `FormField`, `Input`, `Textarea`, `Select`, `PhoneInput`, `SearchField`
**cards/** — `StatCard`, `FeatureCard`, `EventCard`, `NewsCard`, `ProgramRow`
**navigation/** — `NavBar`, `NavItem`, `Footer`, `Carousel`
**media/** — `HeroSlide`, `MediaShowcase`

Every family above has a counterpart in the source screenshots. **Intentional additions:** `Icon` (a wrapper over the substituted Lucide set — the source's glyph set was not supplied as files) and `GridLines` (the hairline column grid is drawn in every source screen but is a backdrop rather than a named component).

### Foundation cards
`guidelines/` — 20 specimen cards across four groups: **Colors** (brand, gold, ink, neutrals, text roles), **Type** (display, headings, headline emphasis, body, eyebrow, statistics), **Spacing** (scale, the hairline grid, radii, elevation), **Brand** (motion, imagery, iconography, interaction states, voice).

### UI kit
`ui_kits/website/` — the Oxford marketing website: `index.html` (interactive, click-through) plus `Shell`, `HomeScreen`, `ProgramsScreen`, `NewsScreen` (+ `ArticleScreen`), `ContactScreen`. See its own README for routing and fidelity notes.

## Open items
- Real font files (currently substituted with Schibsted Grotesk).
- Real icon set (currently substituted with Lucide).
- Official crest SVG, if licensing allows — nothing is drawn from memory.
- High-resolution photography (current imagery is re-extracted from the screenshots).
