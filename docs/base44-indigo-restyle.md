# Gezondheidsapp restyle: diagnose, plan en design system

## Benodigde input (één blok)
1. URL of staging link van de huidige site en app.
2. Pagina’s in scope: marketing, onboarding, dashboard, detailpagina’s, settings, billing, support.
3. Huidige stack (React/Next/Vue/Tailwind/CSS Modules/etc.).
4. Bestaande brand assets (logo, icoonset, fotografie, illustraties).
5. Of dark mode nodig is.

> Aannames in deze iteratie: Next.js App Router + Tailwind v4, scope = marketing + domeinoverzichten + topic cards + globale navigatie/footer, geen dark mode in deze eerste ship.

## Fase 1 — UX/UI critique
- **Informatiehiërarchie:** home had meerdere secties met gelijke visuele zwaarte, waardoor CTA-prioriteit diffuus was.
- **Grid & spacing:** max-width en verticale ritmes waren niet overal consistent (14/20/24/32 mixes).
- **Typografie:** body en headings gebruikten veel utility-combinaties zonder centrale rol-definities.
- **Kleurrollen:** domeinkleuren werden voor primary interacties gebruikt; dit verlaagde voorspelbaarheid van states.
- **Contrast:** focus ring en secundaire tekst waren op sommige grijze achtergronden beperkt zichtbaar.
- **States & affordances:** hover/focus styles verschilden per component (cards, links, search, knoppen).
- **Formulieren/search:** input had basisfocus, maar geen uniform token-gedreven veldstijl.
- **Navigatie:** desktop en mobile links misten consistente active/hover achtergrondtaal.
- **Toegankelijkheid:** reduced-motion policy en universele focus-standaard waren niet systemisch afgedwongen.

## Implementatieplan (veilig shipbaar)
1. Definieer design tokens (kleur, type, spacing, radius, border, shadow).
2. Introduceer CSS custom properties als bron van waarheid.
3. Voeg basis component classes toe (card, button, field, nav-link, containers).
4. Maak focus ring en reduced-motion globaal consistent.
5. Herstijl navbar naar rustiger, token-gedreven navigatie.
6. Herstijl search input met uniforme field token.
7. Harmoniseer card pattern voor domeinen.
8. Harmoniseer card pattern voor topic cards.
9. Restyle homepage hero naar rustige indigo-anker gradient.
10. Restyle CTA-sectie met primary/secondary rolzuiverheid.
11. Restyle “hoe werkt het” blokken met consistente cards.
12. Update footer naar nieuwe neutral + nav-link stijl.
13. Normaliseer domain listing pages (container, spacing, type).
14. Voer lint/tests uit.
15. Leg pagina-changelog + component-changelog vast.

## Fase 2 — Design tokens (JSON)
Zie: `src/design/designTokens.json`.

## Mapping naar CSS variables / Tailwind v4
- Tailwind v4 draait via `@import "tailwindcss"` + custom vars in `:root`.
- Tokens gemapt in `src/app/globals.css` als:
  - `--primary`, `--primaryHover`, `--primaryActive`, `--primarySubtle`, `--primaryBorder`, `--primaryTextOnSolid`
  - `--background`, `--surface`, `--surface-2`, `--text-primary`, `--text-secondary`, `--text-tertiary`
  - spacing scale `--space-1..--space-12`
  - radius/border/shadow tokens
- Component abstractions als utilities in `@layer components`:
  - `.ui-card`, `.ui-card-interactive`
  - `.btn-primary`, `.btn-secondary`
  - `.field-base`
  - `.nav-link`
  - `.app-container`, `.section-block`

## Component specs (v1)
- **Buttons:** primary, secondary (ghost/destructive/link voorbereid als volgende stap); sizes md standaard.
- **Inputs:** `field-base`, heldere focus, 42px min hoogte.
- **Selects/toggles/tabs/badges/modals/drawers/alerts/toasts/pagination/tables/charts:** nog niet productbreed aanwezig; tokens en statekleuren zijn voorbereid.
- **Cards:** vaste border/radius/shadow + interactieve hover variant.
- **Navigation:** `nav-link` met subtle background hover en indigo tekstaccent.
- **Loading/empty:** ontwerpregels vastgelegd, implementatie volgt per featurepagina.

## Paginawijzigingen
- **Home (`/`)**
  - Hero hiërarchie aangescherpt, indigo accent headline.
  - Rustige gradient en betere scanbaarheid.
  - CTA-button omgezet naar primary token.
  - “Hoe werkt het” als herhaalbare card pattern.
- **Domein-overzichten (`/slaap`, `/voeding`, `/beweging`)**
  - Consistente container, grotere titelrol, rustigere tekstkleur.
  - Grid spacing naar 6 voor betere ademruimte.
- **Globaal**
  - Navbar + footer visueel geharmoniseerd.
  - Search + cards naar gedeelde component styles.

## Accessibility checklist
- Focus ring op links/buttons/fields zichtbaar op lichte achtergronden.
- Tekstrollen gemigreerd naar near-black + secondary neutrals.
- Reduced-motion global override aanwezig.
- Form input met aria-label in zoekcomponent.

## Performance checklist
- Geen extra UI-library toegevoegd.
- Stijlen geconsolideerd in bestaande globale stylesheet.
- Geen zware media toegevoegd; gradient is CSS-only.

## Korte test checklist
1. Home nav/hero/cards op mobiel + desktop visueel controleren.
2. Keyboard tab-volgorde nav/search/CTA controleren.
3. Search submit flow op `/zoeken` valideren.
4. Domeinpagina’s: card hover/focus states controleren.
