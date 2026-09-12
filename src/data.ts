export interface LogoItem {
  name: string;
  label: string;
  financier?: boolean;
  /** Only shown in the top logo band (hero), not in the footer. */
  topOnly?: boolean;
}

/** Banner 1 of the logo band: project partners plus the sounding board.
 *  LogoSlot shows a logo where we have one, otherwise the name as text
 *  (and swaps in the logo automatically once the file is added). */
export const PROJECT_LOGOS: LogoItem[] = [
  { name: "whainot", label: "WhaiNot" },
  { name: "halle", label: "Stad en OCMW Halle" },
  { name: "ucll", label: "UCLL Research & Expertise" },
  { name: "vites", label: "ViTeS" },
  { name: "welzijnskoepel", label: "Welzijnskoepel West-Brabant" },
  { name: "grimbergen", label: "OCMW Grimbergen" },
  { name: "openarmen", label: "Open Armen vzw" },
  { name: "federgon", label: "Federgon" },
];

/** Banner 2 of the logo band: the funders. Kept as an array; more may follow. */
export const SUPPORT_LOGOS: LogoItem[] = [
  { name: "vlaamsbrabant", label: "Provincie Vlaams-Brabant" },
];

export interface FaqItem {
  q: string;
  a: string;
}

// Plain strings (not JSX): braces in "{A}impact" are literal text here.
export const FAQ: FaqItem[] = [
  {
    q: "Voor wie is {A}impact bedoeld?",
    a: "Voor OCMW's die activeringstrajecten begeleiden, en voor hun cliënten. De maatschappelijk werker is de eerste gebruiker; de cliëntruimte komt daarbovenop.",
  },
  {
    q: "Is dit iets nieuws, of bestaat het al?",
    a: "De module voor de hulpverlener draait sinds 2025 bij OCMW Halle en werd ontwikkeld in het VLAIO-project {P}ACT. De cliëntruimte bouwen we tijdens dit project, samen met cliënten.",
  },
  {
    q: "Vervangt de AI de hulpverlener?",
    a: "Nee. Elke output wordt goedgekeurd of gecorrigeerd door de maatschappelijk werker voor er iets mee gebeurt. Die stap wordt gelogd.",
  },
  {
    q: "Moeten wij ons dossiersysteem vervangen?",
    a: "Nee. Het komt naast wat je vandaag gebruikt.",
  },
  {
    q: "Wat gebeurt er met de gegevens van de cliënt?",
    a: "Data blijft binnen de EU. Bewaartermijnen zijn instelbaar per organisatie. Audio wordt na verwerking permanent verwijderd. Er wordt niet getraind op jullie data.",
  },
  {
    q: "Wie is verantwoordelijk als er iets fout gaat?",
    a: "Het bestuur blijft verwerkingsverantwoordelijke en eindverantwoordelijke voor de hulpverlening. Wij zijn verantwoordelijk voor de werking, de beveiliging en de naleving van de afspraken in de verwerkersovereenkomst. De volledige rolverdeling leggen we vast voor de start.",
  },
  {
    q: "Werkt dit voor anderstalige cliënten?",
    a: "Output is standaard in het Nederlands, conform de taalwetgeving. Vertaling of hertaling naar begrijpelijke taal is optioneel en per bestuur uit te schakelen.",
  },
  {
    q: "Zitten we vast aan één leverancier?",
    a: "Nee. We werken met open standaarden, sluiten aan bij OSLO en de Vlaamse bouwstenen, en spreken vooraf af hoe je je data terugkrijgt als je stopt.",
  },
  {
    q: "Wat bedoelen jullie met activering in de brede zin?",
    a: "{A}impact gaat uit van activering als recht, niet als sanctie. Het traject documenteert ook wat niet arbeidsgericht is: stabiliteit in huisvesting, grip op schulden, aandacht voor gezondheid, taal, sociale contacten. Die basis bepaalt of een stap richting werk ooit standhoudt.",
  },
  {
    q: "Hoe verhoudt dit zich tot 'Mijn Loopbaan' van VDAB?",
    a: "Complementair. Mijn Loopbaan documenteert het arbeidsgerichte deel. {A}impact maakt het bredere activeringstraject zichtbaar: huisvesting, schulden, gezondheid, taal, sociale contacten. We bouwen geen parallel systeem, maar een laag die precies het deel zichtbaar maakt dat vandaag nergens gestructureerd staat.",
  },
  {
    q: "Wie financiert het project?",
    a: "De provincie Vlaams-Brabant, via het programma Slimme Regio (thema Slim Bestuur), samen met een eigen inbreng van de partners.",
  },
  {
    q: "Kan ons OCMW aansluiten?",
    a: "Ja, op drie niveaus: meelezen, meedenken of meedraaien. Zie hierboven.",
  },
];

/* ---------------------------------------------------------------------------
   Voortgang (logboek). Nieuwe berichten bovenaan toevoegen in LOGBOEK.
   Houd het kort en scanbaar: een kernzin, hoogstens twee korte alinea's,
   maximaal vier opsommingspunten. Braces in "{A}impact" zijn hier gewone tekst.
   --------------------------------------------------------------------------- */

/** Kopregel van de pagina: wanneer ze laatst is bijgewerkt en wat er volgt. */
export const LOGBOEK_META = {
  bijgewerkt: "12 september 2026",
  volgendOverleg: "5 november 2026",
};

export interface StatusItem {
  /** Wanneer: "Nu bezig", "September 2026", ... */
  fase: string;
  title: string;
  body: string;
  /** Alleen de lopende stap krijgt nadruk. */
  actief?: boolean;
}

/** Waar het project vandaag staat. Drie stappen, niet meer. */
export const STATUS: StatusItem[] = [
  {
    fase: "Nu bezig",
    title: "De functionele analyse herwerken",
    body: "De leerpunten van anderhalf jaar praktijk verwerken in de analyse die de basis vormt voor wat we bouwen.",
    actief: true,
  },
  {
    fase: "September 2026",
    title: "Aftoetsen bij de hulpverleners",
    body: "Een vragenlijst, en daarna een sessie ter plaatse. Wat daar boven komt, gaat rechtstreeks in de analyse.",
  },
  {
    fase: "Najaar 2026",
    title: "Juridisch kader naar de DPO's",
    body: "Het herwerkte kader gaat na de juridische screening naar de DPO's van de partners. Het cliëntluik volgt daarna.",
  },
];

export interface LogEntry {
  /** Ankerpunt in de URL, bv. "opstartvergadering". */
  id: string;
  /** Machineleesbare datum voor <time>, bv. "2026-08-28". */
  date: string;
  dateLabel: string;
  tag: string;
  title: string;
  /** De kern in één zin. Wie enkel dit leest, weet genoeg. */
  kern: string;
  body: string[];
  pointsLabel?: string;
  points?: string[];
  next?: string;
}

export const LOGBOEK: LogEntry[] = [
  {
    id: "amai-burgerpanel",
    date: "2026-09-12",
    dateLabel: "12 september 2026",
    tag: "Burgerpanel",
    title: "{A}impact wordt voorgelegd aan een burgerpanel",
    kern: "{A}impact is geselecteerd als een van de acht Vlaamse AI-innovaties die amai! Vlaanderen dit najaar aan een burgerpanel voorlegt.",
    body: [
      "amai! Vlaanderen legt een reeks Vlaamse AI-projecten voor aan burgers. De cliëntruimte van {A}impact zit daar dit najaar tussen. Burgers krijgen te zien wat we willen bouwen en zeggen wat ze ervan vinden, voor het af is. Wie de tool straks moet gebruiken, mag eerst zeggen wat er niet deugt.",
      "Dat gaat over de vragen waar wij zelf geen sluitend antwoord op hebben. Wat wordt zichtbaar in de ruimte van de cliënt, wie beslist daarover, en wat doet het met het vertrouwen tussen cliënt en hulpverlener wanneer een deel van de uitleg via een systeem loopt.",
    ],
    pointsLabel: "Waar en wanneer",
    points: [
      "6 tot 16 oktober, Digitale Week: de acht projecten staan op digitale zuilen op verschillende locaties, waar je je mening kan achterlaten.",
      "24 en 25 oktober, FTI-festival (Expeditie Next, Mechelen): demo's en gesprek met de projecten zelf.",
      "Ons moment: zondag 25 oktober, van 13 tot 14 uur.",
    ],
    next: "Wat het panel aangeeft over zichtbaarheid, taal en grenzen gaat mee in de functionele analyse van de cliëntruimte.",
  },
  {
    id: "opstartvergadering",
    date: "2026-08-28",
    dateLabel: "28 augustus 2026",
    tag: "Opstart",
    title: "De partners zijn voor het eerst samen aan tafel gegaan",
    kern: "Het project is gestart. De vier partners hebben de samenwerking vastgelegd en de planning bevestigd zoals ze is ingediend.",
    body: [
      "WhaiNot, Stad en OCMW Halle, UCLL Research & Expertise en ViTeS overliepen samen het volledige parcours tot de zomer van 2028. Er kwamen geen verrassingen boven. De eerste maanden gaan naar drie zaken: de coördinatie van het project, het juridisch-ethisch kader en de technische voorbereiding.",
    ],
    pointsLabel: "Wat we afspraken",
    points: [
      "Elke partner duidt één vast aanspreekpunt aan.",
      "De kerngroep komt elk trimester samen. Volgend overleg: 5 november 2026.",
      "Andere OCMW's mogen gratis meetesten, ook al zijn ze geen projectpartner.",
      "We houden de voortgang publiek bij, op deze pagina.",
    ],
    next: "De bevraging bij de hulpverleners, ten laatste begin oktober.",
  },
  {
    id: "groen-licht-provincie",
    date: "2026-07-31",
    dateLabel: "Eind juli 2026",
    tag: "Subsidie",
    title: "Groen licht van de provincie",
    kern: "De provincie Vlaams-Brabant keurde het project goed binnen het programma Slimme Regio, met weinig opmerkingen bij de eerste terugkoppeling.",
    body: [
      "Twee punten nemen we uitdrukkelijk mee. Ten eerste de vraag hoe de aanpak overdraagbaar wordt naar andere OCMW's, en niet enkel werkt bij de partners die vandaag meedoen. Ten tweede de vraag welke architecturale keuzes er zijn voor de AI-laag, met een eerlijk beeld van wat elke keuze een bestuur kost om in te voeren en te beheren.",
    ],
    next: "Beide punten krijgen een plaats in de eerste fase van het project.",
  },
];
