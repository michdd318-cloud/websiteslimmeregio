import { ShieldCheck } from "lucide-react";
import { LOGOS } from "@/data";
import { Wordmark, Preview, LogoSlot } from "./primitives";

export function Hero() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="wrap hero-grid">
          <div className="hero-copy reveal">
            <p className="hero-brand">
              <Wordmark lg />
            </p>
            <h1 id="hero-title">Sterkere hulpverlening met AI.</h1>
            <p className="hero-sub">
              Minder administratie, meer tijd voor het menselijke contact, en meer eigenaarschap voor
              de cliënt. Gebouwd op wat vandaag al werkt.
            </p>
            <div className="hero-cta">
              <a className="btn btn-primary" href="#nieuwsbrief">
                Schrijf je in op de nieuwsbrief
              </a>
              <a className="btn btn-ghost" href="#deelnemen">
                Sluit aan als partner
              </a>
              <a className="btn btn-quiet" href="#contact">
                Contact
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

      <section className="logoband" aria-label="Deelnemende partners">
        <div className="wrap">
          <p className="logoband-intro">Een breed gedragen samenwerking. Een project van:</p>
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
