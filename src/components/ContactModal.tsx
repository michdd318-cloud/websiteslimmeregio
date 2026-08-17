import { useEffect, useRef, useState } from "react";
import { ArrowRight, Check, CheckCircle2, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useContactModal } from "@/context/contactModal";
import type { ContactReason } from "@/context/contactModal";

const REASON_OPTIONS: { value: ContactReason; label: string }[] = [
  { value: "meelezen", label: "Meelezen (ik wil op de hoogte blijven)" },
  { value: "meedenken", label: "Meedenken (ik neem deel aan de klankbordgroep)" },
  { value: "meedoen", label: "Meedoen (ik gebruik de module)" },
  { value: "andere", label: "Andere" },
];

const REASON_LABEL: Record<ContactReason, string> = Object.fromEntries(
  REASON_OPTIONS.map((o) => [o.value, o.label])
) as Record<ContactReason, string>;

const CONTACT_EMAIL = "michael@whainot.be";

// Make.com webhook. Overridable via VITE_MAKE_WEBHOOK_URL; falls back to this
// default so the form works on deploy without extra configuration.
const WEBHOOK_URL =
  (import.meta.env.VITE_MAKE_WEBHOOK_URL as string | undefined) ||
  "https://hook.eu2.make.com/11s7cvjjb3q74ugr53q9kbrabmq13rf1";

const EMPTY = {
  naam: "",
  email: "",
  organisatie: "",
  redenen: [] as ContactReason[],
  andereReden: "",
  website: "", // honeypot: hidden from people, filled by bots
};

export function ContactModal() {
  const { isOpen, close, initialReason } = useContactModal();
  const [form, setForm] = useState({ ...EMPTY });
  const [errors, setErrors] = useState<{ naam?: string; email?: string; redenen?: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  // Reset the form shortly after closing (after the fade-out).
  useEffect(() => {
    if (!isOpen) {
      const t = setTimeout(() => {
        setForm({ ...EMPTY });
        setErrors({});
        setSubmitted(false);
        setLoading(false);
      }, 250);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  // Tick the button-provided reason as soon as the form opens.
  useEffect(() => {
    if (isOpen && initialReason) {
      setForm((f) => ({ ...f, redenen: [initialReason] }));
    }
  }, [isOpen, initialReason]);

  // Close on Escape; lock body scroll; move focus into the dialog.
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);

  // meelezen / meedenken / meedoen are mutually exclusive (pick one); "andere"
  // toggles independently, so it can stand alone or accompany one of the three.
  const toggleReden = (value: ContactReason) => {
    setForm((f) => {
      let redenen: ContactReason[];
      if (value === "andere") {
        redenen = f.redenen.includes("andere")
          ? f.redenen.filter((r) => r !== "andere")
          : [...f.redenen, "andere"];
      } else {
        const keepAndere = f.redenen.includes("andere") ? ["andere" as ContactReason] : [];
        redenen = f.redenen.includes(value) ? keepAndere : [value, ...keepAndere];
      }
      return { ...f, redenen };
    });
    setErrors((er) => ({ ...er, redenen: undefined }));
  };

  const validate = () => {
    const e: typeof errors = {};
    if (!form.naam.trim()) e.naam = "Naam is verplicht";
    if (!form.email.trim()) e.email = "E-mailadres is verplicht";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Ongeldig e-mailadres";
    if (form.redenen.length === 0) e.redenen = "Kies minstens één reden";
    return e;
  };

  const sendByMail = () => {
    const redenen = form.redenen.map((r) => REASON_LABEL[r]).join(", ");
    const lines = [
      `Naam: ${form.naam}`,
      `E-mailadres: ${form.email}`,
      form.organisatie && `Organisatie: ${form.organisatie}`,
      `Reden: ${redenen}`,
      form.andereReden && `Toelichting: ${form.andereReden}`,
    ].filter(Boolean);
    const subject = `Aanmelding {A}impact: ${redenen}`;
    const href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      lines.join("\n")
    )}`;
    window.location.href = href;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Honeypot: only bots fill this. Pretend it worked, send nothing.
    if (form.website) {
      setSubmitted(true);
      return;
    }
    const e2 = validate();
    if (Object.keys(e2).length > 0) {
      setErrors(e2);
      return;
    }

    // No webhook configured: fall back to opening the visitor's mail client.
    if (!WEBHOOK_URL) {
      sendByMail();
      setSubmitted(true);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "contact",
          naam: form.naam,
          email: form.email,
          organisatie: form.organisatie,
          reden: form.redenen.map((r) => REASON_LABEL[r]).join(", "),
          andereReden: form.andereReden,
          nieuwsbrief: form.redenen.includes("meelezen"),
          bron: "{A}impact contactformulier",
          tijdstip: new Date().toISOString(),
        }),
      });
      if (!res.ok) throw new Error("Verzenden mislukt");
      setSubmitted(true);
    } catch {
      setErrors({ redenen: "Verzenden mislukt. Probeer later opnieuw of bel 03 377 78 11." });
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="cm-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div
        className="cm-dialog"
        role="dialog"
        aria-modal="true"
        aria-label="Contactformulier {A}impact"
        tabIndex={-1}
        ref={dialogRef}
      >
        <button type="button" className="cm-close" onClick={close} aria-label="Formulier sluiten">
          <X size={18} aria-hidden="true" />
        </button>

        {submitted ? (
          <div className="cm-success">
            <span className="cm-success-icon" aria-hidden="true">
              <CheckCircle2 size={30} />
            </span>
            <h2>Bericht klaar</h2>
            <p>
              Bedankt voor je interesse in <span className="wm-small"><span className="brk">{"{"}</span>A<span className="brk">{"}"}</span>impact</span>. We nemen zo snel mogelijk contact met je op.
            </p>
            <button type="button" className="btn btn-primary" onClick={close}>
              Sluiten
              <span aria-hidden="true">→</span>
            </button>
          </div>
        ) : (
          <form className="cm-form" onSubmit={handleSubmit} noValidate>
            {/* Honeypot: off-screen, only bots fill it. */}
            <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: 1, height: 1, overflow: "hidden" }}>
              <label htmlFor="cm-website">Website (niet invullen)</label>
              <input
                id="cm-website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={form.website}
                onChange={(e) => setForm((f) => ({ ...f, website: e.target.value }))}
              />
            </div>

            <div className="cm-head">
              <p className="eyebrow">Neem contact op</p>
              <h2>Draag je graag bij tot dit project?</h2>
            </div>

            <div className="cm-field">
              <label className="cm-label" htmlFor="cm-naam">
                Naam <span aria-hidden="true">*</span>
              </label>
              <input
                id="cm-naam"
                className={cn("cm-input", errors.naam && "has-error")}
                type="text"
                placeholder="Jouw naam"
                value={form.naam}
                onChange={(e) => {
                  setForm((f) => ({ ...f, naam: e.target.value }));
                  setErrors((er) => ({ ...er, naam: undefined }));
                }}
              />
              {errors.naam && <span className="cm-error">{errors.naam}</span>}
            </div>

            <div className="cm-field">
              <label className="cm-label" htmlFor="cm-email">
                E-mailadres <span aria-hidden="true">*</span>
              </label>
              <input
                id="cm-email"
                className={cn("cm-input", errors.email && "has-error")}
                type="email"
                placeholder="naam@gemeente.be"
                value={form.email}
                onChange={(e) => {
                  setForm((f) => ({ ...f, email: e.target.value }));
                  setErrors((er) => ({ ...er, email: undefined }));
                }}
              />
              {errors.email && <span className="cm-error">{errors.email}</span>}
            </div>

            <div className="cm-field">
              <label className="cm-label" htmlFor="cm-org">
                Gemeente / stad / organisatie
              </label>
              <input
                id="cm-org"
                className="cm-input"
                type="text"
                placeholder="Gemeente, stad of organisatie"
                value={form.organisatie}
                onChange={(e) => setForm((f) => ({ ...f, organisatie: e.target.value }))}
              />
            </div>

            <div className="cm-field">
              <span className="cm-label">
                Waarvoor neem je contact op? <span aria-hidden="true">*</span>
              </span>
              <div className="cm-reasons" role="group" aria-label="Reden van contact">
                {REASON_OPTIONS.map((opt) => {
                  const on = form.redenen.includes(opt.value);
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      className={cn("cm-reason", on && "is-on")}
                      aria-pressed={on}
                      onClick={() => toggleReden(opt.value)}
                    >
                      <span className="cm-check" aria-hidden="true">
                        {on && <Check size={13} strokeWidth={3} />}
                      </span>
                      {opt.label}
                    </button>
                  );
                })}
              </div>
              {errors.redenen && <span className="cm-error">{errors.redenen}</span>}

              {form.redenen.includes("andere") && (
                <textarea
                  className="cm-textarea"
                  placeholder="Omschrijf kort je vraag of reden"
                  rows={3}
                  value={form.andereReden}
                  onChange={(e) => setForm((f) => ({ ...f, andereReden: e.target.value }))}
                />
              )}
            </div>

            <button type="submit" className="btn btn-primary cm-submit" disabled={loading}>
              {loading ? "Verzenden…" : "Verstuur bericht"}
              {!loading && <ArrowRight size={16} aria-hidden="true" />}
            </button>

            <p className="cm-note">
              Velden met * zijn verplicht. Je gegevens gebruiken we enkel om je aanvraag te behandelen.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
