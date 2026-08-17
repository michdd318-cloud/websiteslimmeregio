import { useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useThemeToggle } from "@/hooks";
import { useContactModal } from "@/context/contactModal";
import { Wordmark } from "./primitives";

const PRIMARY = [
  ["#uitdaging", "Wat"],
  ["#oplossing", "Oplossing"],
  ["#tijdlijn", "Project"],
  ["#partners", "Partners"],
  ["#faq", "FAQ"],
];

const MOBILE = [
  ["#uitdaging", "De uitdaging"],
  ["#activering", "Wat het kost"],
  ["#oplossing", "De oplossing"],
  ["#tijdlijn", "Tijdlijn"],
  ["#project", "Het project"],
  ["#partners", "Partners"],
  ["#aansluiten", "Aansluiten"],
  ["#faq", "FAQ"],
  ["#contact", "Contact"],
];

export function Header({ scrolled }: { scrolled: boolean }) {
  const [open, setOpen] = useState(false);
  const toggleTheme = useThemeToggle();
  const { open: openContact } = useContactModal();

  return (
    <header className={cn("site-header", scrolled && "is-scrolled", open && "is-open")}>
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
          <button type="button" className="btn btn-primary btn-sm nav-cta" onClick={() => openContact()}>
            Ik doe mee
          </button>
        </div>

        <button
          className="menu-btn"
          type="button"
          aria-expanded={open}
          aria-controls="mobileNav"
          aria-label={open ? "Menu sluiten" : "Menu openen"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <nav className="mobile-nav" id="mobileNav" aria-label="Mobiele navigatie">
          {MOBILE.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <button
            type="button"
            className="btn btn-primary mobile-cta"
            onClick={() => {
              setOpen(false);
              openContact();
            }}
          >
            Ik doe mee
          </button>
        </nav>
      )}
    </header>
  );
}
