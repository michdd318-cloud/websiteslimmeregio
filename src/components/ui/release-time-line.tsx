import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export type TimelineStep = {
  num: string;
  meta: string;
  title: ReactNode;
  description: ReactNode;
  cta?: { url: string; text: string };
};

export type TimelineIntro = {
  eyebrow: string;
  title: ReactNode;
  subtitle: ReactNode;
};

/**
 * Scroll-driven "parcours": a sticky intro with a progress bar on the left, and
 * a column of steps on the right. The active step (the furthest one whose top
 * has passed the viewport midpoint) lights up; at the bottom the last step is
 * forced active. Progress runs first -> last as you scroll. Theme-aware via the
 * design tokens; respects prefers-reduced-motion (transitions disabled in CSS).
 */
export function ReleaseTimeLine({ intro, steps }: { intro: TimelineIntro; steps: TimelineStep[] }) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    let raf = 0;
    const compute = () => {
      raf = 0;
      const mid = window.innerHeight * 0.5;
      let best = 0;
      refs.current.forEach((el, i) => {
        if (el && el.getBoundingClientRect().top <= mid) best = i;
      });
      const doc = document.documentElement;
      if (window.scrollY + window.innerHeight >= doc.scrollHeight - 4) best = steps.length - 1;
      setActive(best);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(compute);
    };
    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [steps.length]);

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
              ref={(el) => {
                refs.current[i] = el;
              }}
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
                    <a className="btn btn-primary" href={step.cta.url}>
                      {step.cta.text}
                    </a>
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
