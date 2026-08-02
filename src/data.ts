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
