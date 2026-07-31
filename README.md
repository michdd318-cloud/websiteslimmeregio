# {A}impact — projectwebsite

Een-pagina projectwebsite voor **{A}impact**: AI ten dienste van kwaliteitsvolle
hulpverlening, voor de maatschappelijk werker én de cliënt. Een project met steun
van de provincie Vlaams-Brabant, programma **Slimme Regio** (thema Slim Bestuur).

## Stack

Bewust **buildless en zonder externe afhankelijkheden**: pure HTML, CSS en
vanilla JavaScript. Zo is de site robuust, snel, en eenvoudig te hosten of over
te dragen aan een partner.

```
index.html      # volledige one-pager (10 secties)
styles.css      # design system: één teal accent, warme neutralen, licht + donker
main.js         # thema-toggle, mobiel menu, scroll-reveal, logo-swap, formulier
assets/
  favicon.svg   # tijdelijk {A}-beeldmerk (vervang door het officiële logo)
  logos/        # partnerlogo's (zie logos/README.md) — verschijnen automatisch
  img/          # screenshots/wireframes (zie img/README.md) — verschijnen automatisch
```

## Lokaal bekijken

Open `index.html` rechtstreeks in de browser, of start een lokale server:

```bash
python3 -m http.server 8000
# surf naar http://localhost:8000
```

## Nog toe te voegen (aparte bestanden)

- **Partnerlogo's** in `assets/logos/` (WhaiNot, Halle, UCLL, ViTeS, Ommekaar,
  provincie Vlaams-Brabant). Bestandsnamen: zie `assets/logos/README.md`.
- **Screenshots** in `assets/img/` (`hero-clientruimte.png`, `oplossing.png`).
- **Officieel {A}impact-logo** ter vervanging van `assets/favicon.svg` en de
  wordmark in hero/footer, zodra de SVG beschikbaar is.
- **LinkedIn-projectpagina**: link toevoegen in de footer (zie de opmerking in
  `index.html` bij `footer-links`).
- **Nieuwsbrief**: het inschrijfformulier valt nu terug op e-mail
  (`info@whainot.be`). Koppel het aan een echte nieuwsbriefdienst door de
  submit-handler in `main.js` te vervangen.

## Ontwerpuitgangspunten

- **Vertrouwen eerst.** Betrouwbaarheid, menselijke controle (human-in-the-loop),
  privacy by design, GDPR + AI Act. Rustige, professionele toon.
- **Twee sporen in balans**, met de hulpverlener-module als fundament en de
  cliëntruimte als nieuwe uitbreiding.
- **Toegankelijk**: semantische HTML, toetsenbordbediening, focus-states,
  contrast conform WCAG AA, `prefers-reduced-motion` en `prefers-color-scheme`
  gerespecteerd.
- Enige externe KPI: tijdwinst van de hulpverlener. Geen afgeleide
  besparingsclaims.

## Contact

WhaiNot, Michaël De Donder — info@whainot.be — 03 377 78 11
