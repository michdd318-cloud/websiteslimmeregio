import { createContext, useContext } from "react";

/** The reason a visitor is reaching out. Pre-selected based on which button
 *  opened the form (see the CTAs in Header, Aansluiten and the parcours). */
export type ContactReason = "meelezen" | "meedenken" | "meedoen" | "andere";

export interface ContactModalState {
  isOpen: boolean;
  /** A reason to tick immediately when the form opens (button-dependent). */
  initialReason?: ContactReason;
  open: (reason?: ContactReason) => void;
  close: () => void;
}

export const ContactModalContext = createContext<ContactModalState | null>(null);

export function useContactModal() {
  const ctx = useContext(ContactModalContext);
  if (!ctx) throw new Error("useContactModal must be used within ContactModalProvider");
  return ctx;
}
