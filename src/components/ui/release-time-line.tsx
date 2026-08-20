import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export type TimelineStep = {
  num: string;
  meta: string;
  title: ReactNode;
  description: ReactNode;
  /** A closing call to action. `reason` is passed to `onCta` (e.g. to open the
   *  contact form with that reason pre-selected). */
  cta?: { text: string; reason?: string };
};

export type TimelineIntro = {
  eyebrow: string;
  title: ReactNode;
  subtitle: ReactNode;
};

/**
 * "Parcours": a sticky intro with a progress bar on the left, and a column of
 * steps on the right. Focus is driven by HOVER (and keyboard focus), not by
 * scroll position: pointing at a step lights it up and advances the progress
 * bar. This is calmer and more predictable than the old scroll-hijacking, which
 * felt unnatural. The active step changes colour/emphasis only (no size change),
 * so moving across the list never reflows the layout. Respects
 * prefers-reduced-motion (transitions disabled in CSS).
 */
export function ReleaseTimeLine({
  intro,
  steps,
  onCta,
}: {
  intro: TimelineIntro;
  steps: TimelineStep[];
  onCta?: (reason?: string) => void;
}) {
  const [active, setActive] = useState(0);

  const total = steps.length;
  const pct = ((active + 1) / total) * 100;
  const label = `${String(active + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;

  return (
    <div className="parcours">
      <div className="parcours-aside">
        <p className="eyebrow">{intro.eyebrow}</p>
        <h2 id="tl-title" className="parcours-title">
          {intro.title}
        </h2>
        <span className="parcours-bar" aria-hidden="true" />
        <p className="parcours-sub">{intro.subtitle}</p>
        <div className="parcours-progress" aria-hidden="true">
          <span className="pp-label">{label}</span>
          <span className="pp-track">
            <span className="pp-fill" style={{ width: `${pct}%` }} />
          </span>
        </div>
      </div>

      <ol className="parcours-steps">
        {steps.map((step, i) => {
          const on = i === active;
          return (
            <li
              key={step.num}
              className={cn("parcours-step", on && "is-active")}
              aria-current={on ? "step" : undefined}
              tabIndex={0}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
            >
              <div className="ps-meta">
                <span className="ps-num">{step.num}</span>
                <span className="ps-metatxt">{step.meta}</span>
              </div>
              <div className="ps-body">
                <h3 className="ps-title">{step.title}</h3>
                <p className="ps-desc">{step.description}</p>
                {on && step.cta && (
                  <div className="ps-cta">
                    <button type="button" className="btn btn-primary btn-cta" onClick={() => onCta?.(step.cta!.reason)}>
                      {step.cta.text}
                    </button>
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
