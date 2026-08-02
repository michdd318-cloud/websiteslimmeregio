import { PROJECT_LOGOS, SUPPORT_LOGOS } from "@/data";
import { Preview, LogoSlot } from "./primitives";

export function Hero() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="wrap hero-grid">
          <div className="hero-copy reveal">
            <h1 id="hero-title">
              Minder tijd in het dossier.{" "}
              <span className="hero-h1-accent">Meer tijd voor de cliënt.</span>
            </h1>
            <span className="hero-bar" aria-hidden="true" />
            <p className="hero-sub">
              De beperking van de werkloosheidsuitkering brengt de komende jaren meer mensen bij het
              OCMW. Dat verhoogt de druk op sociale diensten die nu al kampen met hoge administratieve
              lasten en moeilijk in te vullen vacatures.
            </p>
            <div className="hero-split">
              <div className="hero-split-col">
                <p className="hero-split-label">Voor de hulpverlener</p>
                <p className="hero-split-text">
                  Repetitief administratief werk uit handen, niet om de hulpverlening te automatiseren,
                  maar om tijd vrij te maken voor persoonlijke begeleiding.
                </p>
              </div>
              <div className="hero-split-col">
                <p className="hero-split-label">Voor de cliënt</p>
                <p className="hero-split-text">
                  Een digitale cliëntruimte waarin mensen meer grip krijgen op hun eigen
                  activeringstraject.
                </p>
              </div>
            </div>
          </div>

          <div className="hero-visual reveal">
            <Preview
              src="assets/img/hero-clientruimte.png"
              alt="De cliëntruimte en de hulpverlener-module van {A}impact naast elkaar."
              caption="Screenshot cliëntruimte + hulpverlener-module (toevoegen: assets/img/hero-clientruimte.png)"
              eager
            />
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
            <p className="logo-label">Met steun van</p>
            <ul className="logo-row logo-row-support">
              {SUPPORT_LOGOS.map((l) => (
                <li key={l.name}>
                  <LogoSlot name={l.name} label={l.label} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
