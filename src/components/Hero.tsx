import { PROJECT_LOGOS, SUPPORT_LOGOS } from "@/data";
import { Wm, Preview, LogoSlot } from "./primitives";

export function Hero() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="wrap hero-grid">
          <div className="hero-copy reveal">
            <p className="eyebrow">Project Slimme Regio · provincie Vlaams-Brabant</p>
            <h1 id="hero-title">
              Meer mensen kloppen aan.{" "}
              <span className="hero-h1-accent">Dezelfde ploeg.</span>
            </h1>
            <p className="hero-sub">
              De beperking van de werkloosheidsuitkering brengt de komende jaren meer mensen bij het
              OCMW. Dat verhoogt de druk op sociale diensten die nu al kampen met hoge administratieve
              lasten en moeilijk in te vullen vacatures.
            </p>
            <p className="hero-body">
              <Wm /> zet technologie in om die druk te helpen verlichten, niet om de hulpverlening te
              automatiseren. Repetitief administratief werk gaat uit handen, zodat er tijd overblijft
              voor de kern: de persoonlijke begeleiding van mensen. Daarnaast bouwen we een digitale
              cliëntruimte waarin mensen meer grip krijgen op hun eigen traject.
            </p>
            <div className="hero-cta">
              <a className="btn btn-primary" href="#aansluiten">
                Sluit aan
              </a>
              <a className="btn btn-ghost" href="#project">
                Bekijk wat het oplevert
              </a>
            </div>
            <p className="hero-support">
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

      <section className="logoband" aria-label="Partners en steun">
        <div className="wrap">
          <div className="logo-group">
            <p className="logo-label">Een project van</p>
            <ul className="logo-row">
              {PROJECT_LOGOS.map((l) => (
                <li key={l.name}>
                  <LogoSlot name={l.name} label={l.label} />
                </li>
              ))}
            </ul>
          </div>

          <hr className="logo-divider" />

          <div className="logo-group">
            <p className="logo-label">Klankbordgroep</p>
            <p className="logo-klankbord">
              Welzijnskoepel West-Brabant, OCMW Grimbergen, Federgon
            </p>
          </div>

          <hr className="logo-divider" />

          <div className="logo-group">
            <p className="logo-label">Met steun van</p>
            <ul className="logo-row logo-row-support">
              {SUPPORT_LOGOS.map((l) => (
                <li key={l.name}>
                  <LogoSlot name={l.name} label={l.label} />
                </li>
              ))}
            </ul>
            <p className="logo-support-note">Programma Slimme Regio (thema Slim Bestuur).</p>
          </div>
        </div>
      </section>
    </>
  );
}
