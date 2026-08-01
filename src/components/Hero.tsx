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
              Verslaggeving vreet tijd op de sociale dienst.{" "}
              <span className="hero-h1-accent">Daar werken we samen aan.</span>
            </h1>
            <p className="hero-sub">
              Maatschappelijk werkers schrijven hun verslagen vaak pas na het gesprek, of na de uren.
              Bij OCMW Halle draait sinds 2025 een module die dat werk mee opmaakt: van gesprek naar een
              gestructureerd verslag dat de maatschappelijk werker aanvult en valideert.
            </p>
            <p className="hero-body">
              Binnen <Wm /> maken we die basis breder inzetbaar voor andere OCMW's, en bouwen we er een
              ruimte bovenop waarin de cliënt zijn eigen traject ziet.
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
