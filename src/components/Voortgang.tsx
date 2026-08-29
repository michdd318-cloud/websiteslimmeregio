import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { LOGBOEK, LOGBOEK_META, STATUS } from "@/data";
import { useContactModal } from "@/context/contactModal";
import { Wm } from "./primitives";

/* ---------------- Kop van de pagina ---------------- */
function LogHero() {
  return (
    <header className="log-hero">
      <div className="hero-orbs" aria-hidden="true">
        <span className="hero-orb hero-orb-1" />
      </div>
      <div className="wrap">
        <p className="eyebrow">Logboek</p>
        <h1 className="log-title">
          De voortgang van <Wm />
        </h1>
        <p className="log-lead">
          Wat er in het project gebeurt, kort en in gewone taal. Geen verslagen van dertig pagina's,
          wel de stappen die er echt toe doen. We werken deze pagina bij na elk overleg van de
          kerngroep en bij elke mijlpaal.
        </p>
        <dl className="log-facts">
          <div>
            <dt>Laatst bijgewerkt</dt>
            <dd>{LOGBOEK_META.bijgewerkt}</dd>
          </div>
          <div>
            <dt>Volgend kerngroepoverleg</dt>
            <dd>{LOGBOEK_META.volgendOverleg}</dd>
          </div>
          <div>
            <dt>Looptijd</dt>
            <dd>2026 tot 2028</dd>
          </div>
        </dl>
      </div>
    </header>
  );
}

/* ---------------- Waar we nu staan ---------------- */
function Stand() {
  return (
    <section className="section log-stand" id="stand" aria-labelledby="stand-title">
      <div className="wrap">
        <div className="section-head">
          <h2 id="stand-title">Waar we nu staan</h2>
        </div>
        <ol className="stand-grid">
          {STATUS.map((s) => (
            <li className={cn("stand-card", s.actief && "is-actief")} key={s.title}>
              <p className="stand-fase">
                {s.actief && <span className="stand-dot" aria-hidden="true" />}
                {s.fase}
              </p>
              <h3>{s.title}</h3>
              <p className="stand-body">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------------- De berichten ---------------- */
function Berichten() {
  return (
    <section className="section section-alt" id="berichten" aria-labelledby="ber-title">
      <div className="wrap">
        <div className="section-head">
          <h2 id="ber-title">Berichten</h2>
          <p className="lead">Het nieuwste bericht staat bovenaan.</p>
        </div>

        <div className="log-list">
          {LOGBOEK.map((e) => (
            <article className="log-entry reveal" id={e.id} key={e.id} aria-labelledby={`${e.id}-t`}>
              <div className="log-meta">
                <span className="log-marker" aria-hidden="true" />
                <time className="log-date" dateTime={e.date}>
                  {e.dateLabel}
                </time>
                <span className="log-tag">{e.tag}</span>
              </div>

              <div className="log-card">
                <h3 id={`${e.id}-t`}>{e.title}</h3>
                <p className="log-kern">{e.kern}</p>
                {e.body.map((p) => (
                  <p className="log-text" key={p.slice(0, 24)}>
                    {p}
                  </p>
                ))}

                {e.points && (
                  <>
                    <p className="log-points-label">{e.pointsLabel ?? "In het kort"}</p>
                    <ul className="log-points">
                      {e.points.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  </>
                )}

                {e.next && (
                  <p className="log-next">
                    <ArrowRight size={16} aria-hidden="true" />
                    <span className="log-next-label">Volgende stap</span>
                    {e.next}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Meelezen ---------------- */
function Meelezen() {
  const { open } = useContactModal();
  return (
    <section className="section log-cta" aria-labelledby="cta-title">
      <div className="wrap wrap-narrow">
        <h2 id="cta-title">Niets missen?</h2>
        <p>
          Laat je e-mailadres achter en je krijgt een seintje bij elke nieuwe stap: de resultaten van
          de bevraging, het juridisch kader, en de instrumenten die we open ter beschikking stellen.
        </p>
        <button type="button" className="btn btn-primary btn-cta" onClick={() => open("meelezen")}>
          Lees mee
        </button>
      </div>
    </section>
  );
}

/** Een deeplink naar één bericht (voortgang.html#opstartvergadering) moet ook
 *  werken als de browser het anker al zoekt voor React de pagina heeft gerenderd. */
function useHashScroll() {
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;
    const frame = requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ block: "start" });
    });
    return () => cancelAnimationFrame(frame);
  }, []);
}

export function VoortgangPage() {
  useHashScroll();

  return (
    <>
      <LogHero />
      <Stand />
      <Berichten />
      <Meelezen />
    </>
  );
}
