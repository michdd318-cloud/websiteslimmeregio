import { CheckCircle2 } from "lucide-react";
import { PROJECT_LOGOS, SUPPORT_LOGOS } from "@/data";
import { LogoSlot } from "./primitives";
import { useContactModal } from "@/context/contactModal";

export function Hero() {
  const { open } = useContactModal();
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-orbs" aria-hidden="true">
          <span className="hero-orb hero-orb-1" />
          <span className="hero-orb hero-orb-2" />
        </div>

        <div className="wrap">
          <div className="hero-copy reveal">
            <div className="hero-intro">
              <span className="hero-badge">AI-ondersteuning voor activeringstrajecten</span>

              <h1 id="hero-title" className="hero-h1">
                <span className="h1-under">Minder tijd aan administratie</span>
                <span className="h1-over">Meer tijd voor hulpverlening</span>
              </h1>

              <p className="hero-sub">
                Een AI-gedreven applicatie, speciaal ontwikkeld voor sociale diensten, is geen verre
                droom meer. De vraag is niet meer óf AI een rol kan spelen in hulpverlening, maar hoe
                je dat verantwoord doet.
              </p>
            </div>

            <div className="hero-more">
              <div className="hero-group">
                <p className="hero-lead2">
                  Verschillende partners bouwden de voorbije twee jaar samen aan:
                </p>
                <ul className="hero-checklist hero-checklist-2col">
                  <li><CheckCircle2 className="hc-check" size={19} aria-hidden="true" />Juridisch kader (DPIA/FRIA)</li>
                  <li><CheckCircle2 className="hc-check" size={19} aria-hidden="true" />Een applicatie</li>
                  <li><CheckCircle2 className="hc-check" size={19} aria-hidden="true" />Praktijkervaring</li>
                  <li><CheckCircle2 className="hc-check" size={19} aria-hidden="true" />Bewezen bij OCMW Halle</li>
                </ul>
              </div>

              <div className="hero-group">
                <p className="hero-lead2">Dit project ontwikkelt de toepassing nu verder:</p>
                <ul className="hero-checklist hero-checklist-row">
                  <li><CheckCircle2 className="hc-check" size={19} aria-hidden="true" />Breder</li>
                  <li><CheckCircle2 className="hc-check" size={19} aria-hidden="true" />Schaalbaar</li>
                  <li><CheckCircle2 className="hc-check" size={19} aria-hidden="true" />Cliëntgericht</li>
                </ul>
              </div>
            </div>

            <div className="hero-cta">
              <button type="button" className="btn btn-primary btn-cta" onClick={() => open()}>
                Ik doe mee
              </button>
              <a className="btn btn-ghost btn-cta" href="#oplossing">
                Ontdek de oplossing
              </a>
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
          </div>
        </div>
      </section>
    </>
  );
}
