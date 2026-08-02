import { PROJECT_LOGOS, SUPPORT_LOGOS } from "@/data";
import { Preview, LogoSlot } from "./primitives";

export function Hero() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="wrap hero-grid">
          <div className="hero-copy reveal">
            <h1 id="hero-title" className="hero-h1">
              <span className="h1-under">
                <span className="h1-arrow h1-arrow-down" aria-hidden="true">▼</span>
                Minder tijd aan administratie.
              </span>
              <span className="h1-over">
                <span className="h1-arrow h1-arrow-up" aria-hidden="true">▲</span>
                Meer tijd voor hulpverlening.
              </span>
            </h1>
            <span className="hero-bar" aria-hidden="true" />
            <p className="hero-sub">
              De beperking van de werkloosheidsuitkering brengt de komende jaren meer mensen bij het
              OCMW. Dat verhoogt de druk op sociale diensten die nu al kampen met hoge administratieve
              lasten en moeilijk in te vullen vacatures.
            </p>

            <div className="hero-more">
              <p className="hero-kicker">Van werkend naar breed inzetbaar</p>
              <p className="hero-lead2">
                De vraag is niet meer óf AI hier een rol speelt, maar hoe je dat verantwoord doet.
                Verschillende partners uit dit project bouwden daar de voorbije twee jaar samen aan:
              </p>
              <ul className="hero-pills">
                <li>
                  <span className="hp-check" aria-hidden="true">✓</span>Juridisch kader (DPIA / FRIA)
                </li>
                <li>
                  <span className="hp-check" aria-hidden="true">✓</span>Een applicatie
                </li>
                <li>
                  <span className="hp-check" aria-hidden="true">✓</span>Praktijkervaring
                </li>
                <li>
                  <span className="hp-check" aria-hidden="true">✓</span>Bewezen bij OCMW Halle
                </li>
              </ul>
              <p className="hero-lead2">
                Dit project zet nu de stap naar een bredere, schaalbare en cliëntgerichte toepassing. De
                focus ligt daarbij op:
              </p>
              <div className="hero-focus">
                <div className="hero-focus-card hf-1">
                  <p className="hf-label">Drempels wegnemen</p>
                  <p className="hf-body">Adoptiedrempels wegnemen bij hulpverlener én cliënt.</p>
                </div>
                <span className="hero-focus-plus" aria-hidden="true">+</span>
                <div className="hero-focus-card hf-2">
                  <p className="hf-label">Cliëntruimte maken</p>
                  <p className="hf-body">
                    Cliënten zien hun eigen traject en gaan er zelf mee aan de slag.
                  </p>
                </div>
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
