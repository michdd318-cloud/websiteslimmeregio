export interface LogoItem {
  name: string;
  label: string;
  financier?: boolean;
  /** Only shown in the top logo band (hero), not in the footer. */
  topOnly?: boolean;
}

export const LOGOS: LogoItem[] = [
  { name: "whainot", label: "WhaiNot" },
  { name: "halle", label: "Stad en OCMW Halle" },
  { name: "grimbergen", label: "OCMW Grimbergen", topOnly: true },
  { name: "ucll", label: "UCLL" },
  { name: "vites", label: "ViTeS" },
  { name: "welzijnskoepel", label: "Welzijnskoepel Vlaams-Brabant", topOnly: true },
  { name: "vlaamsbrabant", label: "Provincie Vlaams-Brabant", financier: true },
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
    q: "Levert dit echt tijdwinst op?",
    a: "In {P}ACT werd gemiddeld 30% tijdwinst gemeten op de taken die geautomatiseerd werden. Dat is niet hetzelfde als 30% van de totale administratieve tijd. Wat het netto oplevert in jouw dienst, hangt af van je processen. Dat is precies wat we in dit project verder meten, samen met UCLL.",
  },
  {
    q: "Wat gebeurt er met de gegevens van de cliënt?",
    a: "Data blijft binnen de EU. Bewaartermijnen zijn instelbaar per organisatie. Audio wordt na verwerking permanent verwijderd. Er wordt niet getraind op jullie data.",
  },
  {
    q: "Trekt de AI eigen conclusies?",
    a: "Nee. Ze vertrekt van wat in het dossier of het gesprek staat. Beoordelen en beslissen blijft mensenwerk.",
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
    q: "Wordt dit ons opgelegd?",
    a: "Nee. Elk bestuur beslist zelf, en elke hulpverlener beslist per document of hij de ondersteuning gebruikt.",
  },
  {
    q: "Zitten we vast aan één leverancier?",
    a: "Nee. We werken met open standaarden, sluiten aan bij OSLO en de Vlaamse bouwstenen, en spreken vooraf af hoe je je data terugkrijgt als je stopt.",
  },
  {
    q: "Hoe verhoudt dit zich tot 'Mijn Loopbaan' van VDAB?",
    a: "Complementair. Mijn Loopbaan documenteert het arbeidsgerichte deel. {A}impact maakt het bredere activeringstraject zichtbaar: huisvesting, schulden, gezondheid, taal, sociale contacten.",
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
