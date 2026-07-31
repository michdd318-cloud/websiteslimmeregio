# {A}impact — projectwebsite

Een-pagina projectwebsite voor **{A}impact**: AI ten dienste van kwaliteitsvolle
hulpverlening, voor de maatschappelijk werker én de cliënt. Een project met steun
van de provincie Vlaams-Brabant, programma **Slimme Regio** (thema Slim Bestuur).

## Stack

Afgestemd op de referentiesite (claroo-website):

- **Vite** (build tool) + **React 19** (SPA)
- **TypeScript**
- **Tailwind CSS v3** + `tailwindcss-animate` (design tokens via CSS-variabelen)
- **GSAP** (scroll-animaties, `prefers-reduced-motion` gerespecteerd)
- **lucide-react** (iconen)
- **`cn()`**-helper (`clsx` + `tailwind-merge`)

De build levert **statische bestanden** in `dist/` op, hostbaar op elke statische
host (GitHub Pages, Netlify, ...).

## Ontwikkelen

```bash
npm install
npm run dev       # lokale dev-server (http://localhost:5173)
npm run build     # productie-build naar dist/
npm run preview   # dist/ lokaal serveren
```

## Structuur

```
index.html                 # Vite-entry
src/
  main.tsx                 # entrypoint (thema herstellen, reveal arming)
  App.tsx                  # pagina-opbouw (10 secties)
  index.css                # Tailwind-directives + design tokens + componentstijlen
  data.ts                  # partnerlogo's + FAQ-inhoud
  hooks.ts                 # thema-toggle, header-scroll, GSAP-reveal
  lib/utils.ts             # cn() + asset()
  components/
    Header.tsx  Hero.tsx  Sections.tsx  Footer.tsx
    primitives.tsx         # Wordmark, LogoSlot, Preview, LinkArrow
public/
  assets/
    favicon.svg
    logos/                 # partnerlogo's (zie logos/README.md) — verschijnen automatisch
    img/                   # screenshots/wireframes (zie img/README.md) — verschijnen automatisch
tailwind.config.js  postcss.config.js  vite.config.ts  tsconfig*.json
```

## Nog toe te voegen (aparte bestanden)

- **Partnerlogo's** in `public/assets/logos/` (WhaiNot, Halle, UCLL, ViTeS,
  Ommekaar, provincie Vlaams-Brabant). Bestandsnamen: zie
  `public/assets/logos/README.md`. Ze verschijnen automatisch via de
  `LogoSlot`-component.
- **Screenshots** in `public/assets/img/` (`hero-clientruimte.png`,
  `oplossing.png`).
- **Officieel {A}impact-logo** ter vervanging van `public/assets/favicon.svg`.
- **LinkedIn-projectpagina**: link toevoegen in de footer.
- **Nieuwsbrief**: het formulier valt nu terug op e-mail (`info@whainot.be`).
  Koppel het aan een echte nieuwsbriefdienst in `Sections.tsx` (`NewsletterForm`).

## Ontwerpuitgangspunten

- **Vertrouwen eerst.** Betrouwbaarheid, menselijke controle (human-in-the-loop),
  privacy by design, GDPR + AI Act. Rustige, professionele toon.
- **Twee sporen in balans**, met de hulpverlener-module als fundament en de
  cliëntruimte als nieuwe uitbreiding.
- **Toegankelijk**: semantische HTML, toetsenbordbediening, focus-states,
  WCAG AA-contrast, `prefers-reduced-motion` en `prefers-color-scheme`
  gerespecteerd.
- Enige externe KPI: tijdwinst van de hulpverlener. Geen afgeleide
  besparingsclaims.

## Contact

WhaiNot, Michaël De Donder — info@whainot.be — 03 377 78 11
