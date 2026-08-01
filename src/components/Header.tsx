import { useState } from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useThemeToggle } from "@/hooks";
import { Wordmark } from "./primitives";

const PRIMARY = [
  ["#wat", "Wat"],
  ["#oplossing", "Oplossing"],
  ["#vertrouwen", "Vertrouwen"],
  ["#partners", "Partners"],
  ["#project", "Project"],
  ["#faq", "FAQ"],
];

const MOBILE = [
  ["#wat", "Geen greenfield"],
  ["#activering", "Wat het kost"],
  ["#uitdaging", "De uitdaging"],
  ["#oplossing", "De oplossing"],
  ["#tijdlijn", "Tijdlijn"],
  ["#vertrouwen", "Vertrouwen"],
  ["#partners", "Partners"],
  ["#project", "Het project"],
  ["#aansluiten", "Aansluiten"],
  ["#faq", "FAQ"],
  ["#contact", "Contact"],
];

export function Header({ scrolled }: { scrolled: boolean }) {
  const [open, setOpen] = useState(false);
  const toggleTheme = useThemeToggle();

  return (
    <header className={cn("site-header", scrolled && "is-scrolled")}>
      <div className="wrap header-inner">
        <a className="brand" href="#top" aria-label="{A}impact, naar boven">
          <Wordmark />
        </a>

        <nav className="primary-nav" aria-label="Hoofdnavigatie">
          {PRIMARY.map(([href, label]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className="theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label="Wissel tussen licht en donker thema"
            title="Licht/donker"
          >
            <Sun className="i-sun" size={18} strokeWidth={1.6} aria-hidden="true" />
            <Moon className="i-moon" size={18} strokeWidth={1.6} aria-hidden="true" />
          </button>
          <a className="btn btn-primary btn-sm nav-cta" href="#aansluiten">
            Sluit aan
          </a>
        </div>

        <button
          className="menu-btn"
          type="button"
          aria-expanded={open}
          aria-controls="mobileNav"
          aria-label={open ? "Menu sluiten" : "Menu openen"}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && (
        <nav className="mobile-nav" id="mobileNav" aria-label="Mobiele navigatie">
          {MOBILE.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
