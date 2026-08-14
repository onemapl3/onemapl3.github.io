# OneMaple Portfolio Visual System

## Theme

A cool-paper personal annual inspired by 1970s art exhibition catalogues and technical field reports. The page is light because visitors read it in daytime and need to inspect photographs and dense career details. Real images keep their color; the interface supplies the archival structure through rules, folio numbers, captions, and a restrained three-color print palette.

## Color

- Paper: `oklch(0.965 0.008 80)`
- Ink: `oklch(0.22 0.018 155)`
- Soft ink: `oklch(0.45 0.018 155)`
- Rule: `oklch(0.78 0.012 155)`
- Vermilion: `oklch(0.55 0.19 31)` for primary links, active markers, and the index stamp
- Cobalt: `oklch(0.48 0.15 255)` for technical metadata and selected filters
- Forest: `oklch(0.34 0.07 156)` for deep section fields

The strategy is a full palette with named editorial roles. Do not add gradients, beige overlays, or automatic sepia treatment.

## Typography

- Display and English titles: Bodoni Moda, chosen for high-contrast catalogue typography rather than the prototype's Cormorant default.
- Bilingual body and controls: Noto Serif SC, with Songti and Georgia fallbacks.
- Use no more than these two families. Technical labels use the body family at a smaller size, not a third monospace costume.
- Body measures stay below 72 characters. Heading steps have at least a 1.25 scale ratio.

## Layout

- Desktop uses a 12-column editorial grid and full-width bands rather than floating section cards.
- The hero is a single photographic field with the name and role printed directly over it. A slice of the project index remains visible below the first viewport.
- Project features alternate between full-bleed image pairs and text/specification columns. Repeated project cards are avoided.
- Photography is a contact-sheet rhythm with mixed spans and stable aspect ratios.
- Mobile collapses to one column, preserves image crops, and replaces the horizontal desktop index with a compact menu.

## Components

- Masthead: wordmark, chapter anchors, language toggle, and index button.
- Folio label: chapter number plus short bilingual descriptor.
- Project dossier: title, human motive, shipped system, proof, technology, and source links.
- Career ledger: dated roles with measured outcomes and expandable detail.
- Contact sheet: figure, plate number, location/year caption, and lightbox trigger.
- Writing register: date, category, title, excerpt, and reading-time placeholder.
- Audio strip: real preview playback, progress, time, and recording status.
- Command index: searchable navigation opened by keyboard or icon button.

## Motion

- One restrained entrance sequence for the hero typography and masthead.
- Scroll reveal for chapter headings using opacity and transform only.
- Image hover reveals plate metadata; project screenshot pairs shift by a few pixels for depth.
- Respect `prefers-reduced-motion` and preserve all information without animation.

## Interaction States

All links, buttons, filters, disclosures, lightbox controls, language toggles, and audio controls require default, hover, focus-visible, and active states. Focus uses a 2px vermilion outline with 3px offset. Disabled audio or archive placeholders remain readable and explicitly labelled.
