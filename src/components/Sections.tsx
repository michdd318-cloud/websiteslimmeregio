import { useState } from "react";
import {
  ShieldCheck,
  FileText,
  Lock,
  UserRound,
  Globe,
  HeartHandshake,
  Unplug,
  FlaskConical,
  Lightbulb,
  Bot,
  Sparkles,
  Share2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { FAQ } from "@/data";
import { Wm, Preview, LinkArrow, LogoSlot } from "./primitives";
import { ReleaseTimeLine, type TimelineEntry } from "./ui/release-time-line";

/* ---------------- 2. Wat is {A}impact ---------------- */
export function Wat() {
  return (
    <section className="section" id="wat" aria-labelledby="wat-title">
      <div className="wrap">
        <div className="section-head">
          <h2 id="wat-title">Geen greenfield. Een volgende stap op bewezen ontwikkeling.</h2>
          <p className="lead">
            Sinds 2025 draait bij OCMW Halle een AI-module die maatschappelijk werkers ondersteunt in
            hun administratie: gespreksverslagen, intakes, GPMI's, motivatiebrieven en cv's worden mee
            opgemaakt met generatieve AI. Die module is juridisch gevalideerd (DPIA/FRIA, goedgekeurd
            door meerdere DPO's) en bouwt zelf voort op het VLAIO-project <Wm letter="P" suffix="ACT" />{" "}
            en de inzichten uit AIMPower.
          </p>
        </div>

        <div className="tracks">
          <article className="track track-base">
            <p className="track-tag">Spoor 1 · het vertrekpunt</p>
            <h3>De module voor de maatschappelijk werker</h3>
            <p>
              We maken de bewezen basis breder en beter inzetbaar: adoptiedrempels wegwerken, de
              administratieve last structureel verlagen, en opschalen naar meer OCMW's.
            </p>
          </article>
          <article className="track track-new">
            <p className="track-tag">Spoor 2 · de nieuwe uitbreiding</p>
            <h3>De cliëntruimte</h3>
            <p>
              Daarbovenop komt een nieuwe digitale ruimte voor de cliënt, met toegang tot het eigen
              traject en tools om zelf vooruit te komen.
            </p>
          </article>
        </div>

        <p className="rode-draad">
          De rode draad: we bouwen verder op wat vandaag al werkt in de praktijk, in plaats van opnieuw
          te beginnen. Zo verschuift het traject van "over de cliënt" naar "samen met de cliënt", en
          houdt de hulpverlener meer tijd over voor het menselijke contact.
        </p>
      </div>
    </section>
  );
}

/* ---------------- Tijdlijn: voortbouwen op wat werkt ---------------- */
const TIMELINE: TimelineEntry[] = [
  {
    icon: FlaskConical,
    title: "{P}ACT",
    subtitle: "VLAIO-project",
    description:
      "Samen met de OCMW's van Halle, Londerzeel en Grimbergen bouwden we AI-ondersteuning voor administratieve taken. Dat leverde gemiddeld 30% tijdwinst op en een juridisch kader dat door meerdere DPO's werd gevalideerd.",
    items: [
      "Gemiddeld 30% tijdwinst op administratieve taken",
      "DPIA/FRIA-kader, goedgekeurd door meerdere DPO's",
      "Getest in de dagelijkse praktijk van drie OCMW's",
    ],
  },
  {
    icon: Lightbulb,
    title: "AIMPower",
    subtitle: "Onderzoek en inzichten",
    description:
      "De inzichten uit AIMPower brachten in kaart wat hulpverleners en cliënten echt nodig hebben, en welke waarden centraal moeten staan bij AI in de hulpverlening.",
    items: [
      "Waarden van hulpverleners en cliënten in kaart gebracht",
      "Betrouwbaarheid en menselijke controle als uitgangspunt",
      "Fundament voor een mensgerichte aanpak",
    ],
  },
  {
    icon: Bot,
    title: "AI-module bij OCMW Halle",
    subtitle: "Sinds 2025 · operationeel",
    description:
      "Sinds 2025 ondersteunt een AI-module de maatschappelijk werkers van OCMW Halle bij hun administratie. Juridisch gevalideerd en elke dag in gebruik.",
    items: [
      "Gespreksverslagen en intakes mee opgemaakt",
      "GPMI's en andere terugkerende documenten",
      "cv's en motivatiebrieven voor cliënten",
    ],
  },
  {
    icon: Sparkles,
    title: "{A}impact",
    subtitle: "2026-2028 · Slimme Regio",
    description:
      "Binnen {A}impact maken we die bewezen basis breder inzetbaar en bouwen we er een cliëntruimte bovenop, met steun van de provincie Vlaams-Brabant.",
    items: [
      "Hulpverlener-module breder inzetbaar en opgeschaald",
      "Nieuwe cliëntruimte: inzicht, kennis en tools",
      "Juridisch-ethisch kader uitgebreid naar cliënttoegang",
    ],
  },
  {
    icon: Share2,
    title: "Opschaling",
    subtitle: "Overdraagbaar kader",
    description:
      "We vertalen de aanpak naar een overdraagbaar kader voor andere OCMW's in Vlaams-Brabant en daarbuiten, gedocumenteerd als blauwdruk voor de sector.",
    items: [
      "Implementatietoolkit en overneembare sjablonen",
      "Lerend netwerk tussen overheid, kennis, bedrijven en burgers",
      "Kennisdeling via workshops en open access handleidingen",
    ],
    button: { url: "#deelnemen", text: "Sluit aan" },
  },
];

export function Tijdlijn() {
  return (
    <section className="section" id="tijdlijn" aria-labelledby="tl-title">
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

/* ---------------- 3. De uitdaging ---------------- */
export function Uitdaging() {
  return (
    <section className="section section-alt" id="uitdaging" aria-labelledby="uit-title">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">De uitdaging</p>
          <h2 id="uit-title">Meer instroom, minder tijd, meer nood aan brede activering.</h2>
        </div>

        <div className="challenge-grid">
          <article className="challenge challenge-lead reveal">
            <p className="stat">184.000</p>
            <p className="stat-label">
              mensen verliezen naar schatting hun uitkering tussen 1 januari 2026 en 30 juni 2027, met
              meer dan 10.000 nieuwe instromers per maand.
            </p>
            <p className="challenge-body">
              De beperking van de werkloosheidsuitkering (wet juli 2025) zet OCMW's onder grote druk.
              Het gaat vaak om mensen voor wie een louter arbeidsgerichte aanpak jarenlang niet werkte.
              Zij hebben brede activering nodig, over meerdere levensdomeinen.
            </p>
          </article>

          <article className="challenge reveal">
            <p className="stat">tot 41%</p>
            <p className="stat-label">van de werktijd van maatschappelijk werkers gaat naar administratie.</p>
            <p className="challenge-body">
              Onderzoek van POD MI en Probis (836 medewerkers uit 69 OCMW's) bevestigt het.
              "Maatschappelijk werker" is een erkend knelpuntberoep. Extra hulpverleners aanwerven is
              geen realistische uitweg.
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

/* ---------------- 4. De oplossing ---------------- */
export function Oplossing() {
  return (
    <section className="section" id="oplossing" aria-labelledby="opl-title">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">De oplossing</p>
          <h2 id="opl-title">Voortbouwen op wat werkt.</h2>
          <p className="lead">
            <Wm /> bestaat uit twee samenhangende delen. Het vertrekpunt is de module voor de
            hulpverlener die vandaag al operationeel is. De cliëntruimte is de nieuwe uitbreiding
            daarbovenop.
          </p>
        </div>

        <div className="solution">
          <article className="sol-block sol-worker">
            <header className="sol-head">
              <p className="track-tag">Voor de maatschappelijk werker · het vertrekpunt</p>
              <h3>Minder administratie, meer directe hulpverlening</h3>
            </header>
            <p>Een AI-module die de administratieve last verlaagt. Ze ondersteunt bij:</p>
            <ul className="check-list">
              <li>
                gespreksverslagen, intakes en evaluatiegesprekken automatisch omzetten naar bruikbare
                verslagen;
              </li>
              <li>het opmaken van GPMI's en andere terugkerende documenten;</li>
              <li>het opstellen van cv's en motivatiebrieven voor cliënten.</li>
            </ul>
            <p className="sol-note">
              Deze module is niet nieuw. Ze draait sinds 2025 bij OCMW Halle en werd in{" "}
              <Wm letter="P" suffix="ACT" /> gevalideerd, met gemiddeld 30% tijdwinst op administratieve
              taken en een DPO-goedgekeurd juridisch kader. Binnen dit project ligt de focus op bredere
              adoptie en opschaling.
            </p>
          </article>

          <article className="sol-block sol-client">
            <header className="sol-head">
              <p className="track-tag">Voor de cliënt · de nieuwe uitbreiding</p>
              <h3>Een eigen digitale ruimte, gekoppeld aan het dossier</h3>
            </header>
            <p>Wie inlogt, ziet zijn volledige traject op één plek. De ruimte werkt rond twee pijlers.</p>

            <div className="pillars">
              <div className="pillar">
                <h4>Pijler 1 · inzicht en kennis</h4>
                <ul className="check-list">
                  <li>overzicht van het volledige traject over alle levensdomeinen;</li>
                  <li>beslissingsbrieven en verslagen ook voor de cliënt, in begrijpelijke taal;</li>
                  <li>uitleg over sociale rechten en begrippen (leefloon, GPMI, activeringsladder, REMI);</li>
                  <li>rechten én plichten van beide partijen transparant gemaakt;</li>
                  <li>afspraken, openstaande taken, gezette stappen en geactiveerde rechten.</li>
                </ul>
              </div>
              <div className="pillar">
                <h4>Pijler 2 · tools voor zelfversterking</h4>
                <ul className="check-list">
                  <li>een cv opbouwen op basis van het volledige profiel, inclusief buitenlandse werkervaring;</li>
                  <li>motivatiebrieven op basis van een concrete vacature;</li>
                  <li>overheidstaal vertaald naar duidelijke taal;</li>
                  <li>sollicitaties voorbereiden: oefenen, structureren, eigen sterktes leren verwoorden.</li>
                </ul>
              </div>
            </div>
          </article>
        </div>

        <Preview
          src="assets/img/oplossing.png"
          alt="Wireframe van de hulpverlener-module en de cliëntruimte van {A}impact."
          caption="Wireframe/screenshot hulpverlener-module én cliëntruimte (toevoegen: assets/img/oplossing.png)"
          wide
        />

        <aside className="callout">
          <h4>Complementair aan 'Mijn Loopbaan' (VDAB)</h4>
          <p>
            <Wm /> bouwt geen parallel systeem, maar een complementaire laag die ook de
            niet-arbeidsgerichte aspecten van activering documenteert: stabiliteit in huisvesting, grip
            op schulden, aandacht voor gezondheid. Een noodzakelijke basis voor duurzame activering.
          </p>
        </aside>
      </div>
    </section>
  );
}

/* ---------------- 5. Vertrouwen ---------------- */
const VALUES = [
  {
    Icon: ShieldCheck,
    title: "De hulpverlener blijft aan het stuur",
    body: "Niets gaat door zonder goedkeuring van de hulpverlener. Die goedkeuringsstap is een bewuste grendel tegen fouten en wordt gelogd. Human-in-the-loop, met de eindverantwoordelijkheid bij de mens.",
  },
  {
    Icon: FileText,
    title: "De AI verzint niets",
    body: "Ze vertrekt altijd van wat in het dossier of het gesprek staat en trekt geen eigen conclusies. Belangrijke resultaten blijven controleerbaar en corrigeerbaar.",
  },
  {
    Icon: Lock,
    title: "Privacy by design",
    body: "Audio wordt na verwerking permanent verwijderd. Bewaartermijnen zijn instelbaar per organisatie. Conform GDPR en AI Act, vanuit een DPIA/FRIA-kader dat door meerdere DPO's werd gevalideerd. We leggen de essentie helder uit, niet in een document van 120 pagina's.",
  },
  {
    Icon: UserRound,
    title: "De cliënt beslist en kijkt mee",
    body: "De cliënt kiest wanneer en waarvoor de AI-hulp wordt gebruikt, kan meekijken op het scherm en krijgt heldere, toegankelijke uitleg. Ook voor wie de taal minder machtig is.",
  },
  {
    Icon: Globe,
    title: "Altijd in het Nederlands",
    body: "Output is standaard in het Nederlands, conform de taalwetgeving. Vertaling of hertaling is een optionele, configureerbare ondersteuning: geen automatisme, en per bestuur uit te schakelen.",
  },
  {
    Icon: HeartHandshake,
    title: "Ruimte voor de mens, niet minder mens",
    body: "De winst zit niet alleen in tijd, maar in kwaliteit. Minder notuleren tijdens het gesprek betekent meer aandacht voor de persoon tegenover je.",
  },
  {
    Icon: Unplug,
    title: "Niet gebonden aan één leverancier",
    body: "Open standaarden, interoperabiliteit en maximale integratie van de Vlaamse bouwstenen van Digitaal Vlaanderen. Geen vendor lock-in.",
  },
];

export function Vertrouwen() {
  return (
    <section className="section section-trust" id="vertrouwen" aria-labelledby="ver-title">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Vertrouwen</p>
          <h2 id="ver-title">Hoe we betrouwbaarheid, privacy en menselijke controle waarborgen.</h2>
          <p className="lead">
            AI in de hulpverlening staat of valt met vertrouwen. Daarom is dit project ontworpen rond de
            waarden die hulpverleners en cliënten zelf het belangrijkst noemen.
          </p>
        </div>

        <div className="values">
          {VALUES.map(({ Icon, title, body }) => (
            <article className="value" key={title}>
              <span className="v-icon" aria-hidden="true">
                <Icon strokeWidth={1.6} />
              </span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}

          <article className="value value-cta">
            <h3>Kort samengevat</h3>
            <p>
              Betrouwbaarheid en menselijke controle vooraan. Privacy en dataveiligheid gewaarborgd.
              Kwaliteit van contact boven overspannen tijdwinstbeloftes.
            </p>
            <LinkArrow href="#faq">Lees de veelgestelde vragen</LinkArrow>
          </article>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 6. Partners ---------------- */
const PARTNERS = [
  {
    name: "whainot",
    label: "WhaiNot",
    title: "WhaiNot",
    role: "Indiener en technologiepartner",
    body: "Projectcoördinatie, optimalisatie van het AI-platform, ontwikkeling van de cliëntruimte en de basis voor opschaling naar andere OCMW's.",
    contact: (
      <>
        Contact: Michaël De Donder, <a href="mailto:michael@whainot.be">michael@whainot.be</a>
      </>
    ),
  },
  {
    name: "halle",
    label: "Stad en OCMW Halle",
    title: "Stad en OCMW Halle",
    role: "Praktijkpartner",
    body: "Test het platform in de praktijk, brengt adoptievoorwaarden bij hulpverleners en cliënten in kaart, en evalueert de effectiviteit.",
    contact: "Contact: Ward Kerckhof",
  },
  {
    name: "ucll",
    label: "UCLL",
    title: "UCLL Research & Expertise",
    role: "Kennispartner",
    body: "Wetenschappelijke onderbouwing en validatie, voor- en nametingen, kennisdeling via publicaties en open access handleidingen.",
    contact: null,
  },
  {
    name: "vites",
    label: "ViTeS",
    title: "ViTeS",
    role: "Maatwerkbedrijf en SDG Ambassador",
    body: "Brengt het werkgeversperspectief binnen de sociale economie in en valideert of de AI-tools aansluiten bij wat werkgevers verwachten.",
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
                <LogoSlot name={p.name} label={p.label} />
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

        <div className="financier-note">
          <div className="partner-mark partner-mark-lg">
            <LogoSlot name="vlaamsbrabant" label="Provincie Vlaams-Brabant" />
          </div>
          <p>
            Met steun van de provincie Vlaams-Brabant, in het kader van het programma Slimme Regio
            (thema Slim Bestuur).
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 7. Het project ---------------- */
const APPROACH = [
  {
    num: "01",
    title: "Juridisch-ethisch",
    body: "Het bestaande DPIA/FRIA-kader uitbreiden naar cliënttoegang en data-eigenaarschap, met sjablonen die andere OCMW's kunnen overnemen.",
  },
  {
    num: "02",
    title: "Technologisch",
    body: "Adoptiedrempels bij hulpverleners systematisch wegwerken en een implementatietoolkit ontwikkelen. Gemeten doel: significante tijdwinst en hulpverleners die zich competent voelen.",
  },
  {
    num: "03",
    title: "Empowerment",
    body: "Meten of een eigen digitale ruimte cliënten meer inzicht en eigenaarschap geeft, met cliënten als actieve co-creators.",
  },
  {
    num: "04",
    title: "Samenwerking",
    body: "Een lerend netwerk tussen overheid, kennisinstelling, bedrijven en burgers, gedocumenteerd als blauwdruk voor andere regio's.",
  },
];

export function Project() {
  return (
    <section className="section" id="project" aria-labelledby="pro-title">
      <div className="wrap">
        <div className="section-head">
          <h2 id="pro-title">Valideren, opschalen en overdraagbaar maken.</h2>
          <p className="lead">
            <Wm /> loopt van 2026 tot 2028 binnen het programma Slimme Regio van de provincie
            Vlaams-Brabant, thema Slim Bestuur. Het doel: een AI-gedreven aanpak voor cliënt-empowerment
            valideren en schaalbaar maken, en vertalen naar een overdraagbaar kader voor andere OCMW's
            in Vlaams-Brabant en daarbuiten.
          </p>
        </div>

        <div className="approach">
          {APPROACH.map((a) => (
            <article className="appr" key={a.num}>
              <span className="appr-num" aria-hidden="true">
                {a.num}
              </span>
              <h3>{a.title}</h3>
              <p>{a.body}</p>
            </article>
          ))}
        </div>

        <p className="project-share">
          <strong>Kennisdeling.</strong> Resultaten worden breed verspreid: workshops voor OCMW's, een
          presentatie op een sectoraal congres, een wetenschappelijke publicatie en een open access
          handleiding.
        </p>
      </div>
    </section>
  );
}

/* ---------------- 8. Deelnemen ---------------- */
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

export function Deelnemen() {
  return (
    <section className="section section-alt" id="deelnemen" aria-labelledby="deel-title">
      <div className="wrap">
        <div className="section-head">
          <h2 id="deel-title">
            <Wm /> groeit met de sector mee.
          </h2>
          <p className="lead">Er zijn drie manieren om betrokken te raken.</p>
        </div>

        <div className="participate">
          <article className="part-card" id="nieuwsbrief">
            <h3>Blijf op de hoogte</h3>
            <p>
              Volg de voortgang, de resultaten van de bevraging bij maatschappelijk werkers en de
              momenten waarop je kan aansluiten.
            </p>
            <NewsletterForm />
          </article>

          <article className="part-card">
            <h3>Sluit aan als OCMW of partner</h3>
            <p>
              Werkt jouw OCMW rond activering en AI, en wil je aansluiten? Dat kan bijvoorbeeld door mee
              op te starten vanaf maart 2027, of door op de hoogte te blijven via de nieuwsbrief en
              terugkoppelingen. De regionale focus ligt op Vlaams-Brabant.
            </p>
            <a
              className="btn btn-primary"
              href="mailto:info@whainot.be?subject=Aansluiten%20als%20OCMW%20of%20partner%20bij%20%7BA%7Dimpact"
            >
              Neem contact op om aan te sluiten
            </a>
          </article>

          <article className="part-card">
            <h3>Vraag of idee?</h3>
            <p>
              We horen graag wat je erover denkt. Stel je vraag, deel een bedenking of een idee, en we
              nemen contact op.
            </p>
            <a className="btn btn-ghost" href="mailto:info@whainot.be?subject=Vraag%20over%20%7BA%7Dimpact">
              Contacteer ons
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 9. FAQ ---------------- */
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
