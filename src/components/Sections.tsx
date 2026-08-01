import { useState } from "react";
import {
  ShieldCheck,
  FileText,
  Lock,
  UserRound,
  FlaskConical,
  Lightbulb,
  Bot,
  Users,
  Sparkles,
  Share2,
  CheckCircle2,
  Building2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { FAQ } from "@/data";
import { Wm, Preview, LogoSlot } from "./primitives";
import { ReleaseTimeLine, type TimelineEntry } from "./ui/release-time-line";

/* ---------------- 3. Geen greenfield ---------------- */
export function GeenGreenfield() {
  return (
    <section className="section" id="wat" aria-labelledby="wat-title">
      <div className="wrap">
        <div className="section-head">
          <h2 id="wat-title">We beginnen niet opnieuw. We bouwen verder.</h2>
          <p className="lead">
            Sinds 2025 draait bij OCMW Halle een module die maatschappelijk werkers ondersteunt bij
            hun administratie: gespreksverslagen, intakes, GPMI's, motivatiebrieven en cv's.
          </p>
        </div>

        <div className="values values-3">
          <article className="value">
            <span className="v-icon" aria-hidden="true">
              <CheckCircle2 strokeWidth={1.6} />
            </span>
            <p className="proof-label">In gebruik</p>
            <h3>Operationeel sinds 2025</h3>
            <p>Elke dag in gebruik bij de sociale dienst van OCMW Halle.</p>
          </article>

          <article className="value">
            <span className="v-icon" aria-hidden="true">
              <Building2 strokeWidth={1.6} />
            </span>
            <p className="proof-label">
              Ontwikkeld in <Wm letter="P" suffix="ACT" />
            </p>
            <h3>Drie OCMW's</h3>
            <p>
              Gebouwd met Halle, Londerzeel en Grimbergen in het VLAIO-project{" "}
              <Wm letter="P" suffix="ACT" />.
            </p>
          </article>

          <article className="value">
            <span className="v-icon" aria-hidden="true">
              <ShieldCheck strokeWidth={1.6} />
            </span>
            <p className="proof-label">Juridisch doorgelicht</p>
            <h3>DPIA en FRIA</h3>
            <p>Goedgekeurd door meerdere DPO's. Het kader is overdraagbaar.</p>
          </article>
        </div>

        <p className="rode-draad">
          <Wm /> zet daar de volgende stap op. Geen prototype, geen pilootversie die nog moet bewijzen
          dat het werkt, maar een basis die vandaag elke dag gebruikt wordt, en die we nu breder
          inzetbaar en overdraagbaar maken.
        </p>
      </div>
    </section>
  );
}

/* ---------------- 4. Wat een activeringstraject vandaag kost ---------------- */
export function ActiveringKost() {
  return (
    <section className="section section-alt" id="activering" aria-labelledby="akost-title">
      <div className="wrap">
        <div className="section-head">
          <h2 id="akost-title">Wat een activeringstraject vandaag kost.</h2>
          <p className="lead">
            Herkenbaar? Eén activeringstraject genereert een vaste stroom papierwerk. Van eerste
            contact tot afsluiting:
          </p>
        </div>
        <ul className="cost-list">
          <li>het sociaal onderzoek uitschrijven en staven;</li>
          <li>de intake omzetten naar een bruikbaar verslag;</li>
          <li>het GPMI opmaken, en bij elke wijziging opnieuw actualiseren;</li>
          <li>na elk gesprek een verslag, ook als het gesprek kort was;</li>
          <li>evaluatiemomenten voorbereiden, voeren en vastleggen;</li>
          <li>doorverwijzingen documenteren en opvolgen;</li>
          <li>
            de voortgang bijhouden over meerdere levensdomeinen tegelijk: huisvesting, schulden,
            gezondheid, taal, sociale contacten, werk.
          </li>
        </ul>
        <div className="flow">
          <p>
            <Wm /> neemt dat repetitieve werk uit handen. Van gesprek naar een eerste gestructureerd
            verslag dat de maatschappelijk werker aanvult en valideert. Hetzelfde voor het GPMI en de
            terugkerende documenten. Niet om de hulpverlening te automatiseren, maar om tijd vrij te
            maken voor de kern van het werk.
          </p>
        </div>
        <blockquote className="pull-quote">
          <p>
            “Onze sociale dienst voelt de druk vandaag al toenemen. We willen niet wachten tot de
            problemen zich opstapelen, maar actief onderzoeken hoe technologie onze maatschappelijk
            werkers kan ondersteunen. Voor ons is het belangrijk dat AI geen afstand creëert tussen
            hulpverlener en cliënt, maar net ruimte vrijmaakt voor betere begeleiding.”
          </p>
          <cite>Jeroen Hofmans, voorzitter Bijzonder Comité Sociale Dienst OCMW Halle</cite>
        </blockquote>
      </div>
    </section>
  );
}

/* ---------------- 5. De uitdaging ---------------- */
export function Uitdaging() {
  return (
    <section className="section" id="uitdaging" aria-labelledby="uit-title">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">De uitdaging</p>
          <h2 id="uit-title">Meer instroom, dezelfde ploeg.</h2>
        </div>

        <div className="challenge-grid">
          <article className="challenge challenge-lead reveal">
            <p className="stat">184.000</p>
            <p className="stat-label">
              mensen verliezen naar schatting hun uitkering tussen 1 januari 2026 en 30 juni 2027, met
              meer dan 10.000 nieuwe instromers per maand.
            </p>
            <p className="challenge-body">
              De beperking van de werkloosheidsuitkering (wet juli 2025) zet OCMW's onder druk die zich
              niet laat opvangen met extra aanwervingen. Het gaat vaak om mensen voor wie een louter
              arbeidsgerichte aanpak jarenlang niet werkte. Zij hebben activering nodig in de brede zin,
              over meerdere levensdomeinen.
            </p>
          </article>

          <article className="challenge reveal">
            <p className="stat">tot 41%</p>
            <p className="stat-label">van de arbeidstijd van maatschappelijk werkers gaat naar administratie.</p>
            <p className="challenge-body">
              Een werklastmeting van POD MI en Probis (836 medewerkers uit 69 OCMW's) bracht dat in
              kaart. Die meting dateert van 2014; sindsdien is de caseload gestegen, niet gedaald.
              "Maatschappelijk werker" is een erkend knelpuntberoep.
            </p>
          </article>

          <article className="challenge reveal">
            <p className="stat">3 tekorten</p>
            <p className="stat-label">bij de cliënt, die elkaar versterken.</p>
            <ul className="mini-list">
              <li>geen helder zicht op het eigen traject;</li>
              <li>weinig eigenaarschap, en afhankelijkheid van de hulpverlener;</li>
              <li>beperkte zelfpresentatie, versterkt door digitale en taalbarrières.</li>
            </ul>
          </article>
        </div>

        <p className="challenge-close">
          De oplossing ligt niet in méér hulpverleners, maar in het structureel versterken van zowel
          hulpverlener als cliënt.
        </p>
      </div>
    </section>
  );
}

/* ---------------- 6. De oplossing ---------------- */
export function Oplossing() {
  return (
    <section className="section section-alt" id="oplossing" aria-labelledby="opl-title">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">De oplossing</p>
          <h2 id="opl-title">Eén traject, twee kanten.</h2>
          <p className="lead">
            <Wm /> vertrekt van het activeringstraject zelf. Aan de ene kant staat de maatschappelijk
            werker, die vandaag verdrinkt in de administratie van dat traject. Aan de andere kant staat
            de cliënt, die geen zicht heeft op datzelfde traject.
          </p>
        </div>

        <div className="solution">
          <article className="sol-block sol-worker">
            <header className="sol-head">
              <p className="track-tag">Voor de maatschappelijk werker · het vertrekpunt</p>
              <h3>Minder administratie, meer directe hulpverlening</h3>
            </header>
            <p>De module ondersteunt bij het werk dat een activeringstraject genereert:</p>
            <ul className="check-list">
              <li>
                gespreksverslagen, intakes en evaluatiegesprekken automatisch omzetten naar bruikbare
                verslagen;
              </li>
              <li>het GPMI opmaken en actualiseren;</li>
              <li>terugkerende documenten, brieven en beslissingen mee opstellen;</li>
              <li>cv's en motivatiebrieven voor cliënten.</li>
            </ul>
            <p className="sol-note">
              Dit deel is niet nieuw. Het draait sinds 2025 bij OCMW Halle en werd in{" "}
              <Wm letter="P" suffix="ACT" /> gevalideerd, met gemiddeld 30% tijdwinst op de taken die
              geautomatiseerd werden, en een juridisch kader dat door meerdere DPO's is goedgekeurd.
              Binnen <Wm /> ligt de focus op bredere adoptie en opschaling naar andere OCMW's.
            </p>
            <p className="sol-note">
              De basis werkt ook buiten activering: intakes, verslagen en dossieropbouw zijn dezelfde
              handelingen. We beginnen waar de druk vandaag het hoogst ligt.
            </p>
          </article>

          <article className="sol-block sol-client">
            <header className="sol-head">
              <p className="track-tag">Voor de cliënt · de nieuwe uitbreiding</p>
              <h3>Zicht op het eigen traject</h3>
            </header>
            <p>
              Wie inlogt, ziet zijn traject op één plek. Niet als extra dossier, maar als de cliëntkant
              van het dossier dat de hulpverlener al bijhoudt.
            </p>
            <div className="pillars">
              <div className="pillar">
                <h4>Inzicht en kennis</h4>
                <ul className="check-list">
                  <li>overzicht van het volledige traject over alle levensdomeinen;</li>
                  <li>beslissingsbrieven en verslagen ook voor de cliënt, in begrijpelijke taal;</li>
                  <li>uitleg over sociale rechten en begrippen (leefloon, GPMI, activeringsladder, REMI);</li>
                  <li>rechten én plichten van beide partijen transparant gemaakt;</li>
                  <li>afspraken, openstaande taken, gezette stappen en geactiveerde rechten.</li>
                </ul>
              </div>
              <div className="pillar">
                <h4>Tools om zelf een stap te zetten</h4>
                <ul className="check-list">
                  <li>een cv opbouwen op basis van het volledige profiel, inclusief buitenlandse werkervaring;</li>
                  <li>motivatiebrieven op basis van een concrete vacature;</li>
                  <li>overheidstaal vertaald naar duidelijke taal;</li>
                  <li>sollicitaties voorbereiden: oefenen, structureren, eigen sterktes leren verwoorden.</li>
                </ul>
              </div>
            </div>
            <p className="sol-note">
              Deze cliëntruimte bouwen we tijdens het project, samen met cliënten als co-creators. We
              ontwerpen ze bewust voor de digitale vaardigheden van de doelgroep, en we toetsen onderweg
              af wat werkt en wat niet.
            </p>
          </article>
        </div>

        <Preview
          src="assets/img/oplossing.png"
          alt="Wireframe van de hulpverlener-module en de cliëntruimte van {A}impact."
          caption="Wireframe/screenshot hulpverlener-module én cliëntruimte (toevoegen: assets/img/oplossing.png)"
          wide
        />

        <aside className="callout">
          <h4>Activering in de brede zin</h4>
          <p>
            <Wm /> gaat uit van activering als recht, niet als sanctie. Het traject documenteert ook
            wat níet arbeidsgericht is: stabiliteit in huisvesting, grip op schulden, aandacht voor
            gezondheid, taal, sociale contacten. Die basis bepaalt of een stap richting werk ooit
            standhoudt.
          </p>
        </aside>

        <aside className="callout">
          <h4>Complementair aan 'Mijn Loopbaan' (VDAB)</h4>
          <p>
            We bouwen geen parallel systeem, maar een laag die de brede activering zichtbaar maakt,
            precies het deel dat vandaag nergens gestructureerd staat.
          </p>
        </aside>
      </div>
    </section>
  );
}

/* ---------------- 7. Wat het niet is ---------------- */
const NOTIS = [
  {
    title: "Geen nieuw dossiersysteem",
    body: "Het komt naast wat je vandaag gebruikt, niet in de plaats van.",
  },
  {
    title: "Geen extra registratielast",
    body: "Als het netto meer werk oplevert, doen we iets fout.",
  },
  {
    title: "Geen vervanging van de hulpverlener",
    body: "Elke output passeert langs een mens die goedkeurt of corrigeert.",
  },
  {
    title: "Geen black box",
    body: "Wat de AI voorstelt, is terug te voeren op wat in het dossier of het gesprek staat.",
  },
  {
    title: "Geen lock-in",
    body: "Open standaarden, aansluiting op OSLO en de Vlaamse bouwstenen van Digitaal Vlaanderen.",
  },
];

export function WatHetNiet() {
  return (
    <section className="section" id="watnietis" aria-labelledby="wni-title">
      <div className="wrap">
        <div className="section-head">
          <h2 id="wni-title">Wat het niet is.</h2>
        </div>
        <div className="notis">
          {NOTIS.map((n) => (
            <article className="notis-item" key={n.title}>
              <h3>{n.title}</h3>
              <p>{n.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- 8. Tijdlijn ---------------- */
const TIMELINE: TimelineEntry[] = [
  {
    icon: FlaskConical,
    title: "{P}ACT",
    subtitle: "VLAIO-project",
    description:
      "Samen met de OCMW's van Halle, Londerzeel en Grimbergen bouwden we AI-ondersteuning voor administratieve taken. Resultaat: gemiddeld 30% tijdwinst op de geautomatiseerde taken, en een DPIA/FRIA-kader dat door meerdere DPO's werd gevalideerd. Getest in de dagelijkse praktijk van drie OCMW's.",
  },
  {
    icon: Lightbulb,
    title: "AIMPower",
    subtitle: "Onderzoek en inzichten",
    description:
      "Bracht in kaart wat hulpverleners en cliënten echt nodig hebben, en welke waarden centraal moeten staan bij AI in de hulpverlening.",
  },
  {
    icon: Bot,
    title: "AI-module bij OCMW Halle",
    subtitle: "Sinds 2025 · operationeel",
    description:
      "Ondersteunt de maatschappelijk werkers van OCMW Halle elke dag bij hun administratie. Juridisch doorgelicht en in gebruik.",
  },
  {
    icon: Users,
    title: "Co-creatieworkshop begeleidingsethiek",
    subtitle: "Mei 2026",
    description:
      "Onder leiding van het Kenniscentrum Data & Maatschappij, met cliënten en maatschappelijk werkers samen aan tafel. Eén van de conclusies: geef die verslagen, to-do's en cv's ook aan de cliënt zelf. Dat is waar de cliëntruimte vandaan komt.",
  },
  {
    icon: Sparkles,
    title: "{A}impact",
    subtitle: "2026-2028 · Slimme Regio",
    description:
      "De bewezen basis breder inzetbaar maken, en er de cliëntruimte op bouwen. Met steun van de provincie Vlaams-Brabant.",
  },
  {
    icon: Share2,
    title: "Opschaling",
    subtitle: "Overdraagbaar kader",
    description:
      "De aanpak vertalen naar instrumenten die andere OCMW's kunnen overnemen, gedocumenteerd als blauwdruk voor de sector.",
    button: { url: "#aansluiten", text: "Sluit aan" },
  },
];

export function Tijdlijn() {
  return (
    <section className="section section-alt" id="tijdlijn" aria-labelledby="tl-title">
      <div className="wrap">
        <div className="section-head">
          <h2 id="tl-title">
            Van <Wm letter="P" suffix="ACT" /> tot opschaling.
          </h2>
          <p className="lead">
            We bouwen verder op wat al bewezen is. Van de eerste VLAIO-ontwikkeling tot een module die
            vandaag draait bij OCMW Halle, en van daaruit naar <Wm /> en bredere opschaling. Scroll mee
            door de tijdlijn.
          </p>
        </div>
        <ReleaseTimeLine entries={TIMELINE} />
      </div>
    </section>
  );
}

/* ---------------- 9. Vertrouwen ---------------- */
const VALUES = [
  {
    Icon: ShieldCheck,
    title: "De hulpverlener blijft aan het stuur",
    body: "Niets gaat door zonder goedkeuring. Die goedkeuringsstap is een bewuste grendel tegen fouten en wordt gelogd. De eindverantwoordelijkheid ligt bij de mens.",
  },
  {
    Icon: FileText,
    title: "De AI verzint niets",
    body: "Ze vertrekt altijd van wat in het dossier of het gesprek staat en trekt geen eigen conclusies. Resultaten blijven controleerbaar en corrigeerbaar.",
  },
  {
    Icon: Lock,
    title: "Privacy en juridisch kader",
    body: "Audio wordt na verwerking permanent verwijderd. Bewaartermijnen zijn instelbaar per organisatie. Conform GDPR en AI Act, vanuit een DPIA/FRIA-kader dat door meerdere DPO's is gevalideerd. We leggen de essentie helder uit, niet in een document van 120 pagina's.",
  },
  {
    Icon: UserRound,
    title: "De cliënt beslist en kijkt mee",
    body: "De cliënt kiest wanneer en waarvoor AI-ondersteuning wordt gebruikt, kan meekijken op het scherm en krijgt heldere uitleg. Ook voor wie de taal minder machtig is. Output is standaard in het Nederlands, conform de taalwetgeving; vertaling of hertaling is optioneel en per bestuur uitschakelbaar.",
  },
];

export function Vertrouwen() {
  return (
    <section className="section section-trust" id="vertrouwen" aria-labelledby="ver-title">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Vertrouwen</p>
          <h2 id="ver-title">Waarop je kan terugvallen.</h2>
          <p className="lead">
            AI in de hulpverlening staat of valt met vertrouwen. Dit project is ontworpen rond de
            waarden die hulpverleners en cliënten zelf het belangrijkst noemen.
          </p>
        </div>

        <div className="values values-4">
          {VALUES.map(({ Icon, title, body }) => (
            <article className="value" key={title}>
              <span className="v-icon" aria-hidden="true">
                <Icon strokeWidth={1.6} />
              </span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- 10. Partners ---------------- */
const PARTNERS = [
  {
    name: "whainot",
    title: "WhaiNot",
    role: "Indiener en technologiepartner",
    body: "Projectcoördinatie, optimalisatie van het platform, ontwikkeling van de cliëntruimte en de basis voor opschaling naar andere OCMW's.",
    contact: (
      <>
        Contact: Michaël De Donder, <a href="mailto:michael@whainot.be">michael@whainot.be</a>
      </>
    ),
  },
  {
    name: "halle",
    title: "Stad en OCMW Halle",
    role: "Praktijkpartner",
    body: "Test in de praktijk, brengt adoptievoorwaarden bij hulpverleners en cliënten in kaart, en evalueert de effectiviteit.",
    contact: "Contact: Ward Kerckhof",
  },
  {
    name: "ucll",
    title: "UCLL Research & Expertise",
    role: "Kennispartner",
    body: "Wetenschappelijke onderbouwing en validatie via het project GPT Academy, met voor- en nametingen en kennisdeling via publicaties en open access handleidingen.",
    contact: null,
  },
  {
    name: "vites",
    title: "ViTeS",
    role: "Maatwerkbedrijf en SDG Ambassador",
    body: "Brengt het werkgeversperspectief binnen de sociale economie in en valideert of de tools aansluiten bij wat werkgevers verwachten.",
    contact: null,
  },
];

export function Partners() {
  return (
    <section className="section section-alt" id="partners" aria-labelledby="par-title">
      <div className="wrap">
        <div className="section-head">
          <h2 id="par-title">Een quadruple-helix-samenwerking.</h2>
          <p className="lead">Overheid, kennisinstelling, bedrijven en burgers, samen aan tafel.</p>
        </div>

        <div className="partners">
          {PARTNERS.map((p) => (
            <article className="partner" key={p.name}>
              <div className="partner-mark">
                <LogoSlot name={p.name} label={p.title} />
              </div>
              <div className="partner-body">
                <h3>{p.title}</h3>
                <p className="partner-role">{p.role}</p>
                <p>{p.body}</p>
                {p.contact && <p className="partner-contact">{p.contact}</p>}
              </div>
            </article>
          ))}
        </div>

        <aside className="callout klankbord">
          <h4>Klankbordgroep</h4>
          <p>
            Welzijnskoepel West-Brabant, OCMW Grimbergen, Open Armen vzw en Federgon testen mee en
            leveren feedback vanuit hun eigen praktijk.
          </p>
        </aside>

        <div className="financier-note">
          <div className="partner-mark partner-mark-lg">
            <LogoSlot name="vlaamsbrabant" label="Provincie Vlaams-Brabant" />
          </div>
          <p>
            <Wm /> wordt gesteund door de provincie Vlaams-Brabant, in het kader van het programma
            Slimme Regio (thema Slim Bestuur).
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 11. Het project ---------------- */
const WORKPACKAGES = [
  {
    num: "01",
    title: "Juridisch-ethisch kader",
    body: "Het bestaande DPIA/FRIA-kader uitgebreid naar cliënttoegang en data-eigenaarschap, plus sjablonen: toestemmingsformulieren, verwerkersovereenkomsten, privacyverklaringen, protocollen voor gegevensuitwisseling.",
    outcome: "Bespaart een bestuur naar schatting 6 tot 9 maanden juridisch voorbereidingswerk.",
  },
  {
    num: "02",
    title: "Adoptie en implementatie",
    body: "Adoptiedrempels bij hulpverleners systematisch in kaart brengen en wegwerken, met een implementatiecoach op de vloer. Resultaat: een adoptiehandleiding en een schaalbaarheidsrapport met infrastructuurvereisten, kostenraming en implementatietijd per OCMW-grootte.",
    outcome: "Je weet vooraf wat het vraagt, in plaats van het onderweg te ontdekken.",
  },
  {
    num: "03",
    title: "Empowerment",
    body: "Meten of een eigen digitale ruimte cliënten meer inzicht en eigenaarschap geeft, met cliënten als actieve co-creators. Resultaat: opleidingsmateriaal voor cliënten en toegankelijkheidsrichtlijnen.",
    outcome: "Direct toepasbaar materiaal, inclusief wat níet bleek te werken.",
  },
  {
    num: "04",
    title: "Samenwerking",
    body: "Een lerend netwerk tussen bestuur, kennisinstelling, bedrijven en burgers, gedocumenteerd als blauwdruk voor andere regio's.",
    outcome: null,
  },
];

export function Project() {
  return (
    <section className="section" id="project" aria-labelledby="pro-title">
      <div className="wrap">
        <div className="section-head">
          <h2 id="pro-title">Wat het oplevert voor andere OCMW's.</h2>
          <p className="lead">
            <Wm /> loopt van 2026 tot 2028. Het doel is niet alleen dat het werkt in Halle, maar dat een
            ander bestuur het kan overnemen zonder alles opnieuw te doen. Elk werkpakket levert daarom
            iets op dat je zelf kan gebruiken.
          </p>
        </div>

        <div className="approach">
          {WORKPACKAGES.map((w) => (
            <article className="appr" key={w.num}>
              <span className="appr-num" aria-hidden="true">
                {w.num}
              </span>
              <h3>{w.title}</h3>
              <p>{w.body}</p>
              {w.outcome && <p className="appr-outcome">{w.outcome}</p>}
            </article>
          ))}
        </div>

        <p className="project-share">
          <strong>Kennisdeling.</strong> Minimaal twee workshops voor OCMW's in Vlaams-Brabant, een
          presentatie op een sectoraal congres, een wetenschappelijke publicatie en een praktijkgerichte
          handleiding als open access publicatie. Alle sjablonen, protocollen en handleidingen komen
          vrij beschikbaar, ook voor besturen die niet meedoen.
        </p>
      </div>
    </section>
  );
}

/* ---------------- 12. Aansluiten ---------------- */
function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [hint, setHint] = useState("We gebruiken je adres enkel voor de nieuwsbrief van {A}impact.");
  const [status, setStatus] = useState<"" | "error" | "ok">("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const val = email.trim();
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
    if (!ok) {
      setHint("Geef een geldig e-mailadres in.");
      setStatus("error");
      return;
    }
    setHint("Bedankt. Je e-mailprogramma opent om de inschrijving te bevestigen.");
    setStatus("ok");
    const subject = encodeURIComponent("Inschrijving nieuwsbrief {A}impact");
    const body = encodeURIComponent(
      "Ik schrijf me graag in op de nieuwsbrief van {A}impact.\n\nE-mailadres: " + val
    );
    window.location.href = `mailto:info@whainot.be?subject=${subject}&body=${body}`;
    setEmail("");
  };

  return (
    <form className="signup" onSubmit={onSubmit} noValidate>
      <label htmlFor="nb-email">E-mailadres</label>
      <div className="signup-row">
        <input
          type="email"
          id="nb-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          inputMode="email"
          autoComplete="email"
          placeholder="jij@bestuur.be"
          required
        />
        <button className="btn btn-primary" type="submit">
          Inschrijven
        </button>
      </div>
      <p className={cn("form-hint", status === "error" && "is-error", status === "ok" && "is-ok")}>
        {hint}
      </p>
    </form>
  );
}

export function Aansluiten() {
  return (
    <section className="section section-alt" id="aansluiten" aria-labelledby="aan-title">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Aansluiten</p>
          <h2 id="aan-title">Drie manieren om erbij te zijn.</h2>
          <p className="lead">
            Het consortium ligt vast. Maar het project is opgezet om over te dragen, en daar kan je nu
            al bij aansluiten. De regionale focus ligt op Vlaams-Brabant.
          </p>
        </div>

        <div className="participate">
          <article className="part-card" id="nieuwsbrief">
            <h3>Meelezen</h3>
            <dl className="asks">
              <div>
                <dt>Wat het vraagt</dt>
                <dd>Je e-mailadres.</dd>
              </div>
              <div>
                <dt>Wat je krijgt</dt>
                <dd>
                  De voortgang, de resultaten van de bevraging bij maatschappelijk werkers, en een
                  seintje wanneer de open access instrumenten klaar zijn.
                </dd>
              </div>
            </dl>
            <NewsletterForm />
          </article>

          <article className="part-card">
            <h3>Meedenken</h3>
            <dl className="asks">
              <div>
                <dt>Wat het vraagt</dt>
                <dd>Een halve dag per semester, en de bereidheid om eerlijk te zeggen wat niet werkt.</dd>
              </div>
              <div>
                <dt>Wat je krijgt</dt>
                <dd>
                  Vroege toegang tot het juridisch kader en de adoptiehandleiding, en invloed op wat we
                  bouwen.
                </dd>
              </div>
              <div>
                <dt>Voor wie</dt>
                <dd>Hoofdmaatschappelijk werkers, diensthoofden sociale dienst, DPO's.</dd>
              </div>
            </dl>
            <a
              className="btn btn-primary"
              href="mailto:info@whainot.be?subject=Aanmelden%20voor%20de%20klankbordgroep%20van%20%7BA%7Dimpact"
            >
              Aanmelden voor de klankbordgroep
            </a>
          </article>

          <article className="part-card">
            <h3>Meedraaien</h3>
            <dl className="asks">
              <div>
                <dt>Wat het vraagt</dt>
                <dd>
                  Een beslissing van je bestuur, de betrokkenheid van je DPO, en tijd van je team voor
                  introductie en opvolging.
                </dd>
              </div>
              <div>
                <dt>Wat je krijgt</dt>
                <dd>De module in je eigen dienst, met begeleiding bij de invoering.</dd>
              </div>
              <div>
                <dt>Wanneer</dt>
                <dd>Vanaf maart 2027.</dd>
              </div>
            </dl>
            <p className="part-note">
              Wat het kost en onder welke voorwaarden, bespreken we in een gesprek van een halfuur, voor
              je iets tekent, en zonder verplichting.
            </p>
            <a
              className="btn btn-ghost"
              href="mailto:info@whainot.be?subject=Gesprek%20over%20meedraaien%20met%20%7BA%7Dimpact"
            >
              Een gesprek inplannen
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 13. FAQ ---------------- */
export function Faq() {
  return (
    <section className="section" id="faq" aria-labelledby="faq-title">
      <div className="wrap wrap-narrow">
        <div className="section-head">
          <h2 id="faq-title">Veelgestelde vragen</h2>
        </div>
        <div className="faq">
          {FAQ.map((item) => (
            <details className="faq-item" key={item.q}>
              <summary>{item.q}</summary>
              <div className="faq-a">
                <p>{item.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
