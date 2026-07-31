import { useEffect, useRef, useState, type ComponentType } from "react";
import { cn } from "@/lib/utils";

export type TimelineEntry = {
  icon: ComponentType<{ className?: string; size?: number; strokeWidth?: number }>;
  title: string;
  subtitle: string;
  description: string;
  items?: string[];
  button?: { url: string; text: string };
};

/**
 * Vertical release-style timeline. Only the entry nearest the top-third of the
 * viewport is "active" and expands to reveal its detail; the others stay
 * collapsed. Adapted to the project's theme-aware design tokens (works in both
 * light and dark, under prefers-color-scheme and the manual toggle).
 */
export function ReleaseTimeLine({ entries }: { entries: TimelineEntry[] }) {
  const [active, setActive] = useState(0);
  const sentinels = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let raf = 0;
    const compute = () => {
      raf = 0;
      const centerY = window.innerHeight / 3;
      let best = 0;
      let bestDist = Infinity;
      sentinels.current.forEach((node, i) => {
        if (!node) return;
        const rect = node.getBoundingClientRect();
        const mid = rect.top + rect.height / 2;
        const dist = Math.abs(mid - centerY);
        if (dist < bestDist) {
          bestDist = dist;
          best = i;
        }
      });
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
  }, []);

  return (
    <div className="tl-list">
      {entries.map((entry, index) => {
        const on = index === active;
        const Icon = entry.icon;
        return (
          <div className="tl-item" key={entry.title} aria-current={on ? "true" : "false"}>
            <div className="tl-meta">
              <span className={cn("tl-icon", on && "is-active")} aria-hidden="true">
                <Icon size={18} strokeWidth={1.6} />
              </span>
              <span className="tl-meta-text">
                <span className="tl-meta-title">{entry.title}</span>
                <span className="tl-meta-sub">{entry.subtitle}</span>
              </span>
            </div>

            <div
              className="tl-sentinel"
              aria-hidden="true"
              ref={(el) => {
                sentinels.current[index] = el;
              }}
            />

            <article className={cn("tl-card", on && "is-active")}>
              <h3 className={cn("tl-heading", !on && "is-dim")}>{entry.title}</h3>
              <p className={cn("tl-desc", !on && "is-clamped")}>{entry.description}</p>

              <div className={cn("tl-expand", on && "is-open")} aria-hidden={!on}>
                <div className="tl-expand-inner">
                  {entry.items && entry.items.length > 0 && (
                    <ul className="tl-items">
                      {entry.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                  {entry.button && (
                    <div className="tl-actions">
                      <a className="btn btn-primary btn-sm" href={entry.button.url}>
                        {entry.button.text}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </article>
          </div>
        );
      })}
    </div>
  );
}
