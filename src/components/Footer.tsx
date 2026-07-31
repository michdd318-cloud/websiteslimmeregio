import { LOGOS } from "@/data";
import { Wordmark, LogoSlot } from "./primitives";

export function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="wrap footer-lead">
        <p className="footer-lead-text">
          We denken graag met je mee. Sterkere hulpverlening bouwen we samen met de sector.
        </p>
        <a className="btn btn-primary" href="#deelnemen">
          Doe mee
        </a>
      </div>

      <div className="wrap footer-top">
        <div className="footer-brand">
          <Wordmark lg />
          <p className="footer-tag">
            AI ten dienste van kwaliteitsvolle hulpverlening. Met de mens aan het stuur.
          </p>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p>WhaiNot, Michaël De Donder</p>
          <p>
            <a href="mailto:info@whainot.be">info@whainot.be</a>
          </p>
          <p>
            <a href="tel:+3233777811">03 377 78 11</a>
          </p>
        </div>

        <div className="footer-support">
          <h3>Met steun van</h3>
          <div className="partner-mark">
            <LogoSlot name="vlaamsbrabant" label="Provincie Vlaams-Brabant" />
          </div>
          <p>Programma Slimme Regio, thema Slim Bestuur.</p>
        </div>
      </div>

      <div className="wrap footer-logos">
        <p className="footer-logos-label">Een project van:</p>
        <ul className="logo-row logo-row-footer">
          {LOGOS.filter((l) => !l.topOnly).map((l) => (
            <li key={l.name} className={l.financier ? "logo-financier" : undefined}>
              <LogoSlot name={l.name} label={l.label} />
            </li>
          ))}
        </ul>
      </div>

      <div className="wrap footer-bottom">
        <p>
          {"© 2026 {A}impact. Een project van WhaiNot, Stad en OCMW Halle, UCLL en ViTeS."}
        </p>
        <p className="footer-links">
          <a href="#top">Naar boven</a>
        </p>
      </div>
    </footer>
  );
}
