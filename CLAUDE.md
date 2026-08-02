# CLAUDE.md — {A}impact projectwebsite

Context voor Claude Code bij het werken aan deze repo.

## Wat dit is

Een-pagina projectwebsite (one-pager, scroll-secties) voor **{A}impact**: een
project dat AI inzet om **activeringstrajecten** in OCMW's te ondersteunen.
De hulpverlener-module (administratie) is het vertrekpunt; een cliëntruimte is
de nieuwe uitbreiding. Doelgroep en toon:

- **Publiek:** hoofdmaatschappelijk werker en algemeen directeur van een OCMW
  (en breder: DPO's, beleidsmakers, partners).
- **Toon:** professioneel, helder, vertrouwenwekkend. Nederlands, Vlaams
  register. Geen marketingsuperlatieven, geen AI-hype.
- **Verplicht zichtbaar:** steun van de provincie Vlaams-Brabant, programma
  Slimme Regio (thema Slim Bestuur). Human-in-the-loop, privacy by design,
  GDPR + AI Act.

De sitetekst is **v2** ("herkadering rond activering"). De volledige v2-bron
is aangeleverd in de chat; de teksten in de componenten zijn daarop gebaseerd.

## Stack

Bewust afgestemd op de referentiesite (`gunterwn/claroo-website`):

- **Vite** + **React 19** (client-side SPA) + **TypeScript**
- **Tailwind CSS v3** + `tailwindcss-animate`
- **GSAP** (scroll-reveal) — geen framer-motion
- **lucide-react** (iconen)
- **`cn()`**-helper (`clsx` + `tailwind-merge`)

Build levert **statische bestanden** in `dist/`.

```bash
npm install
npm run dev       # dev-server
npm run build     # tsc -b && vite build -> dist/
npm run preview   # dist/ serveren (LET OP: SPA-fallback, zie Testen)
```

## Structuur

```
index.html                 # Vite-entry (data-theme="auto" op <html>)
src/
  main.tsx                 # entry: thema herstellen + reveal-armed
  App.tsx                  # sectievolgorde (zie hieronder)
  index.css                # Tailwind-directives + design tokens + ALLE componentstijlen
  data.ts                  # LOGOS[] + FAQ[]
  hooks.ts                 # useThemeToggle, useHeaderScrolled, useReveal (GSAP)
  lib/utils.ts             # cn() + asset()
  components/
    Header.tsx  Hero.tsx  Sections.tsx  Footer.tsx
    primitives.tsx         # Wordmark, Wm, LogoSlot, Preview, LinkArrow
    ui/release-time-line.tsx  # scroll-actieve tijdlijn
public/assets/
  favicon.svg  logos/  img/
render.yaml  .node-version  tailwind.config.js  postcss.config.js  vite.config.ts
```

**Sectievolgorde (App.tsx):** Hero → logoband (in Hero.tsx) →
ActiveringKost (`#activering`) → Uitdaging (`#uitdaging`) → Oplossing
(`#oplossing`) → Tijdlijn (`#tijdlijn`) → Vertrouwen (`#vertrouwen`) →
Partners (`#partners`) → Project (`#project`) → Aansluiten (`#aansluiten`) →
Faq (`#faq`) → Footer (`#contact`). Nagenoeg alle sectie-inhoud staat in
`src/components/Sections.tsx`. De secties GeenGreenfield (`#wat`) en WatHetNiet
(`#watnietis`) zijn verwijderd; de kop "We beginnen niet opnieuw. We bouwen
verder." leeft nu op de Tijdlijn, en de nav-link "Wat" wijst naar `#activering`.

## Design-systeem & conventies (belangrijk)

- **Theming via CSS-variabelen** in `index.css`, gedefinieerd op drie plekken:
  `:root` (licht), `@media (prefers-color-scheme: dark) :root[data-theme="auto"]`,
  en `:root[data-theme="dark"]`. Er is ook `:root[data-theme="light"]`-gedrag via
  de toggle. Tailwind-kleuren (`bg-surface`, `text-ink`, `border-line`,
  `bg-accent`, ...) mappen naar die vars in `tailwind.config.js`, dus utilities
  zijn thema-bewust **zonder** de `dark:`-variant. **Gebruik geen `dark:`** voor
  nieuwe dingen — het klopt niet in "auto + OS-donker". Style via de tokens.
- **Componentstijlen** staan als gewone CSS-klassen in `index.css` (niet als
  utility-soup in JSX). Tailwind-utilities zijn beschikbaar voor nieuwe UI.
- **Eén accent** (teal), warme neutralen, systeemfont. Off-black/off-white.
- **EM-DASH VERBOD:** nergens `—` of `–` in zichtbare tekst (design-taste-skill,
  `.agents/skills/design-taste-frontend`). Gebruik komma/punt/dubbelpunt.
  Check vóór commit: `grep -rn "—\|–" src/`.
- **Sectieteksten lopen over de volledige breedte** (`.section-head { max-width: none }`).
- **Wordmark:** `{A}impact` en `{P}ACT` altijd mét accolades. In JSX via de
  `<Wm />`-component (`<Wm />` = {A}impact, `<Wm letter="P" suffix="ACT" />` =
  {P}ACT); in `data.ts` als **platte strings** (accolades zijn daar gewone tekst).
  In losse JSX-tekst moet `{` ge-escaped worden: `{"{A}impact"}`.
- **Toegankelijkheid:** semantische HTML, focus-states, `prefers-reduced-motion`
  gerespecteerd (reveal + tijdlijn), WCAG AA-contrast.

## Partnerlogo's (`public/assets/logos/`)

- Component `LogoSlot` (in `primitives.tsx`) probeert per logo **parallel**
  `.svg .png .webp .jpg .jpeg` en toont het eerste dat laadt; anders een
  tekst-plaatshouder. Elk logo staat op een **witte chip** zodat zwarte/kleur/
  JPG-logo's leesbaar zijn in beide thema's.
- **Basisnamen (hoofdlettergevoelig op Linux/Render!):** `whainot`, `halle`,
  `ucll`, `vites`, `grimbergen`, `welzijnskoepel`, `vlaamsbrabant`.
- `LOGOS[]` in `data.ts`: `financier: true` (provincie, met scheidingslijn),
  `topOnly: true` (enkel in de bovenbalk, niet in de footer — bv. Grimbergen,
  Welzijnskoepel).
- **Bovenbalk-logo's** zijn bewust groot (`.logoband .logo-slot img { height: 62px }`);
  **Partners-logo's** 64px. Verhouding blijft via `object-fit: contain`.
- **Buurthuis Ommekaar is bewust overal verwijderd** (tekst én logo). Niet
  terugzetten zonder expliciete vraag. Grimbergen + Welzijnskoepel staan in de
  bovenbalk én worden vermeld in de klankbordgroep-tekst bij Partners.

## Deploy (Render)

- `npm run build` → `dist/` (statisch). Gehost als **Render Static Site**,
  gekoppeld aan branch **`main`** (auto-deploy bij elke push naar main).
  `render.yaml` is een Blueprint; `.node-version` = 22.12.0 (Vite 7-vereiste).
- Alles wordt van **`main`** gedeployd. Wijzigingen worden pas live na merge.

## Werkwijze / git

- **Ontwikkel op branch `claude/aimpact-website-9fc70t`**, open een **PR naar
  `main`**, de eigenaar merget, Render deployt van `main`.
- De eigenaar **uploadt logo's/bestanden vaak rechtstreeks naar `main`** (via de
  GitHub-UI). Doe daarom vóór nieuwe wijzigingen **`git fetch` en
  `git reset --hard origin/main`** (branch loopt anders achter). Reeds gemergede
  PR's = klaar; begin telkens fris vanaf `main`.
- Externe repos (bv. de referentie `gunterwn/claroo-website`) zijn **niet
  kloonbaar** in deze omgeving: git rewrite stuurt `github.com` naar de scoped
  proxy, en cross-tier `add_repo` is geblokkeerd. Vraag de eigenaar om
  bestanden te plakken indien nodig.

## Testen / screenshots

- **Serveer `dist/` met een echte static server** voor logo-tests:
  `cd dist && python3 -m http.server <poort>`. `npm run preview` (Vite) heeft
  een **SPA-fallback die 200 teruggeeft voor ontbrekende bestanden**, waardoor
  de multi-formaat logo-probe niet correct test. Render geeft echte 404's, net
  als `python3 -m http.server`.
- Chromium voor Playwright staat op
  `/opt/pw-browsers/chromium-1194/chrome-linux/chrome`
  (Playwright zelf globaal in `/opt/node22/lib/node_modules`).

## Skills / extra bestanden

- `.agents/skills/design-taste-frontend/` — anti-slop frontend-skill (o.a. het
  em-dash-verbod). `skills-lock.json` tracet de installatie.
- `DESIGN.md` — Mastercard-geïnspireerde referentie (van `getdesign`). Enkel
  losse inspiratie; het teal/trust-systeem blijft leidend. Niet 1-op-1 toepassen.

## Contact / feiten

WhaiNot, Michaël De Donder — info@whainot.be — 03 377 78 11.
Partners (v2, zonder Ommekaar): WhaiNot, Stad en OCMW Halle, UCLL, ViTeS.
Klankbordgroep: Welzijnskoepel West-Brabant, OCMW Grimbergen, Open Armen vzw,
Federgon. Financier: provincie Vlaams-Brabant (Slimme Regio, Slim Bestuur).
Enige harde externe KPI: tijdwinst hulpverlener (30% in {P}ACT op de
geautomatiseerde taken). Geen afgeleide besparingsclaims.
