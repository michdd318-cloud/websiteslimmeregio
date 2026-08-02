import { cn } from "@/lib/utils";
import { FAQ } from "@/data";
import { Wm, Preview, LogoSlot } from "./primitives";
import { ReleaseTimeLine, type TimelineIntro, type TimelineStep } from "./ui/release-time-line";

/* ---------------- 4. Wat een activeringstraject vandaag kost ---------------- */
export function ActiveringKost() {
  return (
    <section className="section" id="activering" aria-labelledby="akost-title">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">De werklast</p>
          <h2 id="akost-title">Wat een activeringstraject vandaag vraagt.</h2>
        </div>

        <div className="workload">
          <ol className="workload-list">
            <li><span className="wl-num" aria-hidden="true">01</span><span>het sociaal onderzoek uitschrijven en staven</span></li>
            <li><span className="wl-num" aria-hidden="true">02</span><span>de mogelijkheden met de cliënt in kaart brengen</span></li>
            <li><span className="wl-num" aria-hidden="true">03</span><span>het GPMI opmaken, en bij elke wijziging opnieuw actualiseren</span></li>
            <li><span className="wl-num" aria-hidden="true">04</span><span>evaluatiemomenten voorbereiden, voeren en vastleggen</span></li>
            <li><span className="wl-num" aria-hidden="true">05</span><span>de voortgang bijhouden over meerdere levensdomeinen tegelijk</span></li>
            <li><span className="wl-num" aria-hidden="true">06</span><span>registratie op platformen van partners</span></li>
            <li><span className="wl-num" aria-hidden="true">07</span><span>na elk gesprek een verslag</span></li>
            <li><span className="wl-num" aria-hidden="true">08</span><span>doorverwijzingen documenteren en opvolgen</span></li>
          </ol>

          <figure className="workload-quote">
            <span className="wq-mark" aria-hidden="true">&ldquo;</span>
            <blockquote>
              Onze sociale dienst voelt de druk vandaag al toenemen. Voor ons is het belangrijk dat AI
              geen afstand creëert tussen hulpverlener en cliënt, maar net ruimte vrijmaakt voor betere
              begeleiding.
            </blockquote>
            <figcaption>
              <span className="wq-name">Jeroen Hofmans</span>
              <span className="wq-role">Voorzitter bijzonder comité sociale dienst, OCMW Halle</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 5. De uitdaging ---------------- */
export function Uitdaging() {
  return (
    <section className="section section-alt" id="uitdaging" aria-labelledby="uit-title">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">De uitdaging</p>
          <h2 id="uit-title">Meer instroom, dezelfde ploeg.</h2>
        </div>

        <div className="challenge-grid">
          <article className="challenge reveal">
            <p className="stat">184.000</p>
            <span className="stat-bar" aria-hidden="true" />
            <p className="stat-label">
              mensen verliezen naar schatting hun uitkering tussen 1 januari 2026 en 30 juni 2027, meer
              dan 10.000 nieuwe instromers per maand.
            </p>
          </article>

          <article className="challenge reveal">
            <p className="stat">tot 41%</p>
            <span className="stat-bar" aria-hidden="true" />
            <p className="stat-label">van de arbeidstijd van maatschappelijk werkers gaat naar administratie.</p>
          </article>

          <article className="challenge reveal">
            <p className="stat">3 tekorten</p>
            <span className="stat-bar" aria-hidden="true" />
            <p className="stat-label">bij de cliënt, die elkaar versterken.</p>
            <ol className="challenge-num">
              <li>
                <span aria-hidden="true">01</span>geen helder zicht op het eigen traject;
              </li>
              <li>
                <span aria-hidden="true">02</span>weinig eigenaarschap, en afhankelijkheid van de
                hulpverlener;
              </li>
              <li>
                <span aria-hidden="true">03</span>beperkte zelfpresentatie, versterkt door digitale en
                taalbarrières.
              </li>
            </ol>
          </article>
        </div>

        <aside className="challenge-conclusion">
          <p className="cc-label">De conclusie</p>
          <p className="cc-text">
            De oplossing ligt niet in méér hulpverleners, maar in het structureel versterken van{" "}
            <span>zowel hulpverlener als cliënt</span>.
          </p>
        </aside>
      </div>
    </section>
  );
}

/* ---------------- 6. De oplossing ---------------- */
const WORKER_ROWS = [
  { num: "01", title: "Opname en transcriptie", body: "Het gesprek wordt opgenomen en automatisch uitgeschreven" },
  { num: "02", title: "Een eerste gestructureerd verslag", body: "AI vult de sjablonen van de dienst in: sociaal verslag, profielschets, GPMI" },
  { num: "03", title: "Het cliëntprofiel blijft actueel", body: "Elk gesprek werkt bij wat al in het dossier staat" },
  { num: "04", title: "De maatschappelijk werker vult aan en valideert", body: "Niets gaat door zonder goedkeuring" },
  { num: "05", title: "De audio verdwijnt na verwerking", body: "Permanent, met instelbare bewaartermijnen" },
];

const CLIENT_ROWS = [
  { num: "01", title: "Het eigen dossier leesbaar gemaakt", body: "Beslissingen, verslagen, afspraken, automatisch in klare taal" },
  { num: "02", title: "Overzicht van het hele traject", body: "Wat moet, wat is er gedaan en wat staat er nog open" },
  { num: "03", title: "Cv, motivatiebrief en meer", body: "De cliënt bouwt ze zelf op, op basis van de eigen data" },
];

export function Oplossing() {
  return (
    <section className="section section-alt" id="oplossing" aria-labelledby="opl-title">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">De oplossing</p>
          <h2 id="opl-title">Eén traject, twee actoren</h2>
          <p className="lead">
            Het activeringstraject geeft langs beide kanten een uitdaging: de hulpverlener verliest
            tijd aan de administratie ervan, de cliënt heeft er geen zicht op.
          </p>
        </div>

        <div className="two-tracks">
          <article className="track-card track-card-worker">
            <header className="track-card-head">
              <div>
                <p className="track-card-tag">Hulpverlener</p>
                <h3>Van gesprek naar verslag</h3>
              </div>
              <span className="track-badge">Verder ontwikkelen</span>
            </header>
            <ul className="track-rows">
              {WORKER_ROWS.map(({ num, title, body }) => (
                <li className="track-row" key={num}>
                  <span className="track-row-num" aria-hidden="true">{num}</span>
                  <div className="track-row-text">
                    <h4>{title}</h4>
                    <p>{body}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="track-foot">De focus ligt op het wegnemen van adoptiedrempels.</p>
          </article>

          <article className="track-card track-card-client">
            <header className="track-card-head">
              <div>
                <p className="track-card-tag">Cliënt</p>
                <h3>Zicht op het eigen traject</h3>
              </div>
              <span className="track-badge track-badge-new">Nieuw</span>
            </header>
            <ul className="track-rows">
              {CLIENT_ROWS.map(({ num, title, body }) => (
                <li className="track-row" key={num}>
                  <span className="track-row-num" aria-hidden="true">{num}</span>
                  <div className="track-row-text">
                    <h4>{title}</h4>
                    <p>{body}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="track-foot">
              Wordt tijdens het project gebouwd, samen met cliënten als co-creatoren.
            </p>
          </article>
        </div>

        <Preview
          src="assets/img/oplossing.png"
          alt="Wireframe van de hulpverlener-module en de cliëntruimte van {A}impact."
          caption="Wireframe/screenshot hulpverlener-module én cliëntruimte (toevoegen: assets/img/oplossing.png)"
          wide
        />
      </div>
    </section>
  );
}

/* ---------------- 8. Tijdlijn: het parcours ---------------- */
const PARCOURS_INTRO: TimelineIntro = {
  eyebrow: "Het parcours",
  title: "We beginnen niet opnieuw. We bouwen verder.",
  subtitle:
    "Geen prototype, maar bestaande praktijk die we breed uitgerold krijgen. Scroll door het parcours van de partners.",
};

const PARCOURS_STEPS: TimelineStep[] = [
  {
    num: "01",
    meta: "Innovatie",
    title: <Wm letter="P" suffix="ACT" />,
    description:
      "Samen met OCMW's bouwden we AI-ondersteuning voor administratieve taken: transcriptie van cliëntcontacten, automatische verslaggeving. En dit in lijn met de AI Act, met een veilige architectuur en een DPIA en FRIA van de module.",
  },
  {
    num: "02",
    meta: "Onderzoek en inzichten",
    title: "AIMPower",
    description:
      "Bracht in kaart wat hulpverleners en cliënten écht nodig hebben, en welke waarden centraal moeten staan bij AI in de hulpverlening.",
  },
  {
    num: "03",
    meta: "Operationeel sinds 2025",
    title: "AI-ondersteunde hulpverlening bij OCMW",
    description: "Ondersteunt maatschappelijk werkers elke dag bij hun administratie.",
  },
  {
    num: "04",
    meta: "2026-2028 · Slimme Regio",
    title: <Wm />,
    description: "De bewezen basis breder inzetbaar maken, en er de cliëntruimte op bouwen.",
  },
  {
    num: "05",
    meta: "Overdraagbaar kader",
    title: "Opschaling",
    description:
      "De aanpak en ervaringen vertalen naar instrumenten die andere OCMW's kunnen overnemen, gedocumenteerd als blauwdruk voor de sector.",
    cta: { url: "#aansluiten", text: "Ik doe mee" },
  },
];

export function Tijdlijn() {
  return (
    <section className="section section-alt" id="tijdlijn" aria-labelledby="tl-title">
      <div className="wrap">
        <ReleaseTimeLine intro={PARCOURS_INTRO} steps={PARCOURS_STEPS} />
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

/* Klankbordgroep: logo where we have one, name as text fallback otherwise. */
const KLANKBORD = [
  { name: "welzijnskoepel", label: "Welzijnskoepel West-Brabant" },
  { name: "grimbergen", label: "OCMW Grimbergen" },
  { name: "openarmen", label: "Open Armen vzw" },
  { name: "federgon", label: "Federgon" },
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
          <p>Testen mee en leveren feedback vanuit hun eigen praktijk.</p>
          <ul className="klankbord-logos">
            {KLANKBORD.map((k) => (
              <li key={k.name}>
                <div className="partner-mark">
                  <LogoSlot name={k.name} label={k.label} />
                </div>
              </li>
            ))}
          </ul>
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
const WORKPACKAGES: { num: string; title: string; body: string; outcome: string; dark?: boolean }[] = [
  {
    num: "01",
    title: "Juridisch-ethisch kader",
    body: "Het bestaande DPIA/FRIA-kader uitgebreid naar cliënttoegang en data-eigenaarschap, plus sjablonen: toestemmingsformulieren, verwerkersovereenkomsten, privacyverklaringen, protocollen voor gegevensuitwisseling.",
    outcome: "Bespaart een bestuur 6 tot 9 maanden juridisch voorbereidingswerk.",
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
    outcome: "Direct toepasbaar materiaal, inclusief wat niet bleek te werken.",
  },
  {
    num: "04",
    title: "Samenwerking",
    body: "Een lerend netwerk tussen bestuur, kennisinstelling, bedrijven en burgers, gedocumenteerd als blauwdruk voor andere regio's.",
    outcome: "Een samenwerkingsmodel dat je in je eigen regio kan kopiëren.",
    dark: true,
  },
];

export function Project() {
  return (
    <section className="section" id="project" aria-labelledby="pro-title">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Overdraagbaar</p>
          <h2 id="pro-title">Wat het oplevert voor andere OCMW's.</h2>
          <p className="lead">
            <Wm /> loopt van 2026 tot 2028. Er worden verschillende werkpakketten samengesteld die open
            access ter beschikking worden gesteld:
          </p>
        </div>

        <div className="wp-grid">
          {WORKPACKAGES.map((w) => (
            <article className={cn("wp-card", w.dark && "wp-card-dark")} key={w.num}>
              <div className="wp-head">
                <span className="wp-num" aria-hidden="true">{w.num}</span>
                <h3>{w.title}</h3>
              </div>
              <p className="wp-body">{w.body}</p>
              <p className="wp-outcome">
                <span className="wp-arrow" aria-hidden="true">→</span>
                {w.outcome}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- 12. Aansluiten ---------------- */
export function Aansluiten() {
  return (
    <section className="section" id="aansluiten" aria-labelledby="aan-title">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Aansluiten</p>
          <h2 id="aan-title">Drie manieren om erbij te zijn.</h2>
        </div>

        <div className="join">
          <article className="join-card join-1" id="nieuwsbrief">
            <header className="join-head">
              <span className="join-num" aria-hidden="true">01</span>
              <h3>Meelezen</h3>
            </header>
            <div className="join-rows">
              <div className="join-row">
                <span className="join-label">Wat het vraagt</span>
                <div className="join-val">Je e-mailadres.</div>
              </div>
              <div className="join-row">
                <span className="join-label">Je ontvangt</span>
                <ul className="join-list">
                  <li>de voortgang van het project;</li>
                  <li>de resultaten van de bevraging bij maatschappelijk werkers;</li>
                  <li>een seintje wanneer de open access instrumenten klaar zijn.</li>
                </ul>
              </div>
              <div className="join-row">
                <span className="join-label">Voor wie</span>
                <div className="join-val">
                  Maatschappelijk werkers, hoofdmaatschappelijk werkers, diensthoofden sociale dienst,
                  DPO's, algemeen directeur, stafmedewerkers, IT.
                </div>
              </div>
            </div>
            <div className="join-cta">
              <a href="mailto:info@whainot.be?subject=Inschrijving%20nieuwsbrief%20%7BA%7Dimpact&body=Ik%20schrijf%20me%20graag%20in%20op%20de%20nieuwsbrief%20van%20%7BA%7Dimpact.">
                Inschrijven op de nieuwsbrief
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </article>

          <article className="join-card join-2">
            <header className="join-head">
              <span className="join-num" aria-hidden="true">02</span>
              <h3>Meedenken</h3>
            </header>
            <div className="join-rows">
              <div className="join-row">
                <span className="join-label">Wat het vraagt</span>
                <div className="join-val">Een halve dag per semester neem je deel aan de klankbordgroep.</div>
              </div>
              <div className="join-row">
                <span className="join-label">Je ontvangt</span>
                <div className="join-val">
                  Vroege toegang tot het juridisch kader en de adoptiehandleiding, en invloed op wat we
                  bouwen.
                </div>
              </div>
              <div className="join-row">
                <span className="join-label">Voor wie</span>
                <div className="join-val">
                  Maatschappelijk werkers, hoofdmaatschappelijk werkers, diensthoofden sociale dienst,
                  DPO's.
                </div>
              </div>
            </div>
            <div className="join-cta">
              <a
                href="mailto:info@whainot.be?subject=Aanmelden%20voor%20de%20klankbordgroep%20van%20%7BA%7Dimpact"
              >
                Aanmelden voor de klankbordgroep
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </article>

          <article className="join-card join-3">
            <header className="join-head">
              <span className="join-num" aria-hidden="true">03</span>
              <h3>Mee doen</h3>
            </header>
            <div className="join-rows">
              <div className="join-row">
                <span className="join-label">Wat het vraagt</span>
                <div className="join-val">
                  Een beslissing van je bestuur en tijd van enkele leden van je team voor introductie en
                  opvolging.
                </div>
              </div>
              <div className="join-row">
                <span className="join-label">Je ontvangt</span>
                <div className="join-val">De module in je eigen dienst, met begeleiding bij de invoering.</div>
              </div>
              <div className="join-row">
                <span className="join-label">Voor wie</span>
                <div className="join-val">
                  Maatschappelijk werkers, hoofdmaatschappelijk werkers en diensthoofden sociale dienst
                  OCMW.
                </div>
              </div>
            </div>
            <div className="join-cta">
              <a href="mailto:info@whainot.be?subject=Gesprek%20over%20meedoen%20met%20%7BA%7Dimpact">
                Een gesprek inplannen
                <span aria-hidden="true">→</span>
              </a>
            </div>
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
