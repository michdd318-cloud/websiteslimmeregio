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

/**
 * Partner logo slot. Shows a styled text placeholder until a real SVG exists at
 * public/assets/logos/<name>.svg, then swaps to the image automatically.
 */
export function LogoSlot({ name, label, className }: { name: string; label: string; className?: string }) {
  const [ok, setOk] = useState(false);
  const src = asset(`assets/logos/${name}.svg`);
  useEffect(() => {
    let active = true;
    const img = new Image();
    img.onload = () => active && setOk(true);
    img.src = src;
    return () => {
      active = false;
    };
  }, [src]);
  return (
    <span className={cn("logo-slot", className)} data-logo={name}>
      {ok ? <img src={src} alt={label} loading="lazy" /> : label}
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
