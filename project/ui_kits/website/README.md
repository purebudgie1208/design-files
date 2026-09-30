# UI kit — Oxford marketing website

An interactive recreation of the single product surface represented in the source screenshots: the public University of Oxford marketing site.

**Open `index.html`.** It boots the whole site inside the page shell and is click-through:

- Top-bar nav routes between Home, Programs (About / Admissions), News and Contact (Community / Login).
- Hero carousel steps three slides with the vertical chip pair.
- "Oxford at a Glance" carousel steps four stat cards.
- Facilities showcase steps two facility slides.
- Programme rows expand to reveal an apply CTA.
- News cards open a stand-in article view with a back affordance.
- The contact form is stateful and confirms on send.

## Files
| File | Surface |
|---|---|
| `Shell.jsx` | Page shell — canvas, white sheet, `NavBar`, hairline `GridLines`, `Footer` |
| `HomeScreen.jsx` | Hero, About/stats, facilities showcase, programmes, Why Choose Us, events |
| `ProgramsScreen.jsx` | Programme list with expandable rows + facilities showcase |
| `NewsScreen.jsx` | News index and `ArticleScreen` detail view |
| `ContactScreen.jsx` | Split contact headline + form panel |

## Fidelity notes
- Built from screenshots only — no codebase or Figma was supplied, so spacing is measured from pixels and is approximate at the ±2px level.
- Photography is re-extracted from the screenshots and is therefore low resolution. Replace `assets/imagery/*` with originals.
- The article body copy is a stand-in: no article page existed in the source.
- No crest artwork: the header lockup and footer are set in type.
