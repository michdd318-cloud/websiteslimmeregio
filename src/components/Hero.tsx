import { ShieldCheck, Check } from "lucide-react";
import { LOGOS } from "@/data";
import { Wordmark, Wm, Preview, LogoSlot } from "./primitives";

const FACTS = [
  "Operationeel bij OCMW Halle sinds 2025",
  "Gebouwd in {P}ACT met de OCMW's van Halle, Londerzeel en Grimbergen",
  "DPIA en FRIA goedgekeurd door meerdere DPO's",
];

export function Hero() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="wrap hero-grid">
          <div className="hero-copy reveal">
            <p className="hero-brand">
              <Wordmark lg />
            </p>
            <h1 id="hero-title">Activeringstrajecten wegen zwaar. Vooral op papier.</h1>
            <p className="hero-sub">
              Sociaal onderzoek, GPMI, gespreksverslagen, evaluaties, doorverwijzingen. Bij OCMW Halle
              draait sinds 2025 een module die dat werk mee opmaakt, met de maatschappelijk werker die
              alles goedkeurt. Binnen <Wm /> maken we die breder inzetbaar voor andere OCMW's, en bouwen
              we er een ruimte bovenop waarin de cliënt zijn eigen traject ziet.
            </p>
            <div className="hero-cta">
              <a className="btn btn-primary" href="#aansluiten">
                Wat betekent dit voor mijn dienst
              </a>
              <a className="btn btn-ghost" href="#nieuwsbrief">
                Blijf op de hoogte
              </a>
            </div>
            <p className="hero-support">
              <ShieldCheck size={16} strokeWidth={1.6} aria-hidden="true" />
              Met steun van de provincie Vlaams-Brabant, programma Slimme Regio (thema Slim Bestuur).
            </p>
          </div>

          <div className="hero-visual reveal">
            <Preview
              src="assets/img/hero-clientruimte.png"
              alt="De cliëntruimte en de hulpverlener-module van {A}impact naast elkaar."
              caption="Screenshot cliëntruimte + hulpverlener-module (toevoegen: assets/img/hero-clientruimte.png)"
              eager
            />
            <div className="hero-badge">
              <span className="dot" aria-hidden="true" />
              Operationeel bij OCMW Halle sinds 2025
            </div>
          </div>
        </div>
      </section>

      <section className="logoband" aria-label="Vertrouwensbalk en partners">
        <div className="wrap">
          <ul className="trustfacts">
            {FACTS.map((f) => (
              <li key={f}>
                <Check size={16} strokeWidth={2} aria-hidden="true" />
                {f.includes("{P}ACT") ? (
                  <span>
                    Gebouwd in <Wm letter="P" suffix="ACT" /> met de OCMW's van Halle, Londerzeel en
                    Grimbergen
                  </span>
                ) : (
                  <span>{f}</span>
                )}
              </li>
            ))}
          </ul>
          <p className="logoband-intro">Een project van:</p>
          <ul className="logo-row">
            {LOGOS.map((l) => (
              <li key={l.name} className={l.financier ? "logo-financier" : undefined}>
                <LogoSlot name={l.name} label={l.label} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
