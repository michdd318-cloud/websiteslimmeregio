import { useMemo, useState, type ReactNode } from "react";
import { ContactModalContext, type ContactReason } from "./contactModal";

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [initialReason, setInitialReason] = useState<ContactReason | undefined>();

  const value = useMemo(
    () => ({
      isOpen,
      initialReason,
      // Guard: with onClick={open} the argument is a DOM event, not a reason.
      open: (reason?: ContactReason) => {
        setInitialReason(typeof reason === "string" ? reason : undefined);
        setIsOpen(true);
      },
      close: () => setIsOpen(false),
    }),
    [isOpen, initialReason]
  );

  return <ContactModalContext.Provider value={value}>{children}</ContactModalContext.Provider>;
}
