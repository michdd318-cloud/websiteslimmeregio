export interface LogoItem {
  name: string;
  label: string;
  financier?: boolean;
}

export const LOGOS: LogoItem[] = [
  { name: "whainot", label: "WhaiNot" },
  { name: "halle", label: "Stad en OCMW Halle" },
  { name: "ucll", label: "UCLL" },
  { name: "vites", label: "ViTeS" },
  { name: "ommekaar", label: "Buurthuis Ommekaar" },
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
    a: "In de eerste plaats voor de maatschappelijk werkers die met de AI-module hun administratieve last verlagen, en voor de OCMW's die hen daarin willen ondersteunen. Daarnaast voor de cliënten in een activeringstraject, die via de nieuwe cliëntruimte meer inzicht en eigenaarschap krijgen. Hulpverleners worden opgeleid om cliënten te coachen in het gebruik van AI.",
  },
  {
    q: "Bouwen jullie iets volledig nieuws?",
    a: "Nee. We bouwen verder op bestaande ontwikkeling en ervaring: het VLAIO-project {P}ACT, de inzichten uit AIMPower, en een AI-module die sinds 2025 al operationeel is bij OCMW Halle. Dit project maakt die basis breder inzetbaar en voegt de cliëntruimte toe. We vertrekken bewust van wat in de praktijk al bewezen is.",
  },
  {
    q: "Vervangt de AI de hulpverlener?",
    a: "Nee. De AI ondersteunt, de hulpverlener blijft aan het stuur. Belangrijke beslissingen worden door de hulpverlener meegelezen, gecorrigeerd en goedgekeurd. De cliënt beslist zelf wanneer en waarvoor hij de hulp gebruikt.",
  },
  {
    q: "Wat gebeurt er met de gegevens van de cliënt?",
    a: "De ruimte werkt met gegevens uit het OCMW-dossier van de cliënt zelf. Alles verloopt binnen een privacy- en AI-kader (DPIA/FRIA) dat door meerdere DPO's is gevalideerd, conform GDPR en de AI Act. Er zijn duidelijke afspraken over wie welke informatie kan zien.",
  },
  {
    q: "Wat gebeurt er met een opname van een gesprek?",
    a: "Het audiobestand wordt permanent verwijderd zodra de transcriptie klaar is. Er wordt geen data opgestapeld zonder doel. Bewaartermijnen van het transcript zijn instelbaar per organisatie. Cliënten kunnen zien wanneer hun opname is verwerkt en verwijderd.",
  },
  {
    q: "Trekt de AI eigen conclusies of verzint ze dingen in een verslag?",
    a: "Nee, en dat is bewust zo ontworpen. De AI vertrekt altijd van wat in het gesprek of het dossier staat en voegt geen feiten toe. Ze verzint geen conclusies over rechten, verplichtingen of situaties. Omdat AI zich kan vergissen, is de goedkeuring door de hulpverlener een verplichte stap: niets gaat door zonder dat een mens het nagelezen en bevestigd heeft.",
  },
  {
    q: "Levert dit echt tijdwinst op?",
    a: "Tijdwinst ontstaat niet vanzelf en is niet de enige maatstaf. De grootste waarde zit in de kwaliteit van het contact: minder notuleren tijdens het gesprek, meer aandacht voor de persoon. Tijdwinst volgt wanneer de tool goed is ingebed in de dagelijkse werking, en daar zetten we samen met de sector gericht op in via begeleiding en opleiding.",
  },
  {
    q: "Wie is verantwoordelijk als er iets fout gaat?",
    a: "De hulpverlener behoudt de eindverantwoordelijkheid. De AI is een ondersteuning, geen beslisser. Elke output passeert langs de goedkeuring van de hulpverlener, en die stap wordt gelogd.",
  },
  {
    q: "Wat met de taal? Werkt dit ook voor anderstalige cliënten?",
    a: "Output is standaard altijd in het Nederlands, conform de taalwetgeving. Vertaling of hertaling naar begrijpelijke taal is een optionele ondersteuning die per bestuur configureerbaar is, geen automatisme.",
  },
  {
    q: "Wordt dit ons opgelegd?",
    a: "Nee. {A}impact groeit mét de sector. De aanpak wordt gevalideerd door UCLL en bijgestuurd op basis van echte bevraging bij hulpverleners en cliënten. Wat op één plek werkt, hoeft niet overal te werken. Daarom bouwen we samen, in de praktijk.",
  },
  {
    q: "Is dit gebonden aan één AI-leverancier?",
    a: "Nee. De architectuur is bewust zo gekozen dat we van model kunnen wisselen naarmate de technologie evolueert. We werken met open standaarden en interoperabiliteit.",
  },
  {
    q: "Bouwen jullie alles zelf, of sluiten jullie aan op Vlaamse bouwstenen?",
    a: "We integreren maximaal de bestaande bouwstenen van Digitaal Vlaanderen. Het uitgangspunt is eenvoudig: alles wat met Vlaanderen kan, gebeurt met Vlaanderen. We bouwen niets zelf wat al bestaat. Zo kijken we onder meer naar de chatbot-bouwsteen van Digitaal Vlaanderen om die in te zetten voor de cliëntruimte. Dat houdt het project toekomstbestendig, interoperabel en verankerd in het bredere Vlaamse ecosysteem.",
  },
  {
    q: "Hoe verhoudt dit zich tot 'Mijn Loopbaan' van VDAB?",
    a: "{A}impact is complementair, geen parallel systeem. Waar 'Mijn Loopbaan' vertrekt vanuit arbeidsmarktperspectief, documenteert {A}impact ook de bredere activering: huisvesting, schulden, gezondheid, die vaak eerst nodig is. We onderzoeken koppeling via bestaande VDAB-API's.",
  },
  {
    q: "Wie financiert het project?",
    a: "{A}impact komt tot stand met steun van de provincie Vlaams-Brabant, in het kader van het programma Slimme Regio (thema Slim Bestuur).",
  },
  {
    q: "Kan mijn OCMW aansluiten?",
    a: "Mogelijk. Neem contact op, dan bekijken we samen hoe je kan aansluiten. De regionale focus ligt op Vlaams-Brabant.",
  },
];
