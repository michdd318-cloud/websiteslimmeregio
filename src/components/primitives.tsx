import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { asset, cn } from "@/lib/utils";

/** The display wordmark: {A}impact, with the braces always in the accent colour. */
export function Wordmark({ lg, className }: { lg?: boolean; className?: string }) {
  return (
    <span className={cn("wordmark", lg && "wordmark-lg", className)} aria-label="{A}impact">
      <span className="brk" aria-hidden="true">
        {"{"}
      </span>
      A
      <span className="brk" aria-hidden="true">
        {"}"}
      </span>
      impact
    </span>
  );
}

/** Inline small wordmark for {A}impact and {P}ACT inside running text. */
export function Wm({ letter = "A", suffix = "impact" }: { letter?: string; suffix?: string }) {
  return (
    <span className="wm-small">
      <span className="brk">{"{"}</span>
      {letter}
      <span className="brk">{"}"}</span>
      {suffix}
    </span>
  );
}

// Accepted logo formats, in order of preference (svg/png keep transparency).
const LOGO_EXTS = ["svg", "png", "webp", "jpg", "jpeg"];

/**
 * Partner logo slot. Shows a styled text placeholder until a real logo exists at
 * public/assets/logos/<name>.<ext>, then swaps to the image automatically.
 * Probes every accepted extension and uses the highest-priority one that loads,
 * so any format a partner delivers just works.
 */
export function LogoSlot({ name, label, className }: { name: string; label: string; className?: string }) {
  const [src, setSrc] = useState<string | null>(null);
  useEffect(() => {
    let done = false;
    const candidates = LOGO_EXTS.map((ext) => asset(`assets/logos/${name}.${ext}`));
    const state: ("pending" | "loaded" | "error")[] = candidates.map(() => "pending");
    // Commit to the first (highest-priority) candidate that loaded, once every
    // candidate before it has resolved. Parallel + guarded, so it is robust
    // against React StrictMode's mount/unmount/remount.
    const settle = () => {
      for (let k = 0; k < state.length; k += 1) {
        if (state[k] === "pending") return;
        if (state[k] === "loaded") {
          if (!done) {
            done = true;
            setSrc(candidates[k]);
          }
          return;
        }
      }
    };
    setSrc(null);
    candidates.forEach((candidate, k) => {
      const img = new Image();
      img.onload = () => {
        state[k] = "loaded";
        settle();
      };
      img.onerror = () => {
        state[k] = "error";
        settle();
      };
      img.src = candidate;
    });
    return () => {
      done = true;
    };
  }, [name]);
  return (
    <span className={cn("logo-slot", className)} data-logo={name}>
      {src ? <img src={src} alt={label} loading="lazy" /> : label}
    </span>
  );
}

/** Elevated media frame with a labelled placeholder when the asset is missing. */
export function Preview({
  src,
  alt,
  caption,
  wide,
  eager,
}: {
  src: string;
  alt: string;
  caption: string;
  wide?: boolean;
  eager?: boolean;
}) {
  const [empty, setEmpty] = useState(false);
  return (
    <figure className={cn("preview", wide && "preview-wide", empty && "is-empty")} data-caption={caption}>
      <img
        src={asset(src)}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        onError={() => setEmpty(true)}
      />
    </figure>
  );
}

/** Text link with an arrow that nudges on hover. */
export function LinkArrow({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a className="link-arrow" href={href}>
      {children}
      <ArrowRight size={16} aria-hidden="true" />
    </a>
  );
}
